param([int]$port = 8080)

$folder = $PSScriptRoot
$listener = New-Object System.Net.HttpListener
$prefix = "http://localhost:$port/"
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
    Write-Host "HTTP server running at: $prefix"
    Write-Host "Root folder: $folder"
    
    $mimeTypes = @{
        ".html" = "text/html; charset=utf-8"
        ".htm"  = "text/html; charset=utf-8"
        ".css"  = "text/css; charset=utf-8"
        ".js"   = "application/javascript; charset=utf-8"
        ".json" = "application/json; charset=utf-8"
        ".svg"  = "image/svg+xml"
        ".jpg"  = "image/jpeg"
        ".jpeg" = "image/jpeg"
        ".png"  = "image/png"
        ".webp" = "image/webp"
        ".ico"  = "image/x-icon"
        ".woff" = "font/woff"
        ".woff2"= "font/woff2"
        ".pdf"  = "application/pdf"
        ".ppt"  = "application/vnd.ms-powerpoint"
        ".pptx" = "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    }

    $uploadsFolder = Join-Path $folder "admin\uploads"
    if (-not (Test-Path $uploadsFolder)) {
        New-Item -ItemType Directory -Path $uploadsFolder -Force | Out-Null
    }
    $dataFolder = Join-Path $folder "admin\data"
    if (-not (Test-Path $dataFolder)) {
        New-Item -ItemType Directory -Path $dataFolder -Force | Out-Null
    }

    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response

            $response.AddHeader("Access-Control-Allow-Origin", "*")
            $response.AddHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, HEAD")
            $response.AddHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")

            if ($request.HttpMethod -eq "OPTIONS") {
                $response.StatusCode = 200
                $response.OutputStream.Close()
                continue
            }

            $urlPath = $request.Url.LocalPath.ToLower()

            # API: Save state JSON
            if ($request.HttpMethod -eq "POST" -and ($urlPath -eq "/admin/api/save" -or $urlPath -eq "/api/save")) {
                $reader = New-Object System.IO.StreamReader($request.InputStream, [System.Text.Encoding]::UTF8)
                $body = $reader.ReadToEnd()
                $reader.Close()

                $dataFile = Join-Path $dataFolder "site-data.json"
                [System.IO.File]::WriteAllText($dataFile, $body, [System.Text.Encoding]::UTF8)

                $outMsg = [System.Text.Encoding]::UTF8.GetBytes('{"success":true,"message":"Data saved successfully"}')
                $response.ContentType = "application/json; charset=utf-8"
                $response.StatusCode = 200
                $response.ContentLength64 = $outMsg.Length
                $response.OutputStream.Write($outMsg, 0, $outMsg.Length)
                $response.OutputStream.Close()
                continue
            }

            # API: Upload file
            if ($request.HttpMethod -eq "POST" -and ($urlPath -eq "/admin/api/upload" -or $urlPath -eq "/api/upload")) {
                $reader = New-Object System.IO.StreamReader($request.InputStream, [System.Text.Encoding]::UTF8)
                $body = $reader.ReadToEnd()
                $reader.Close()

                try {
                    $json = $body | ConvertFrom-Json
                    $rawName = if ($json.filename) { [System.IO.Path]::GetFileName($json.filename) } else { "upload_" + [DateTimeOffset]::UtcNow.ToUnixTimeSeconds() + ".bin" }
                    # Sanitize filename
                    $safeName = $rawName -replace '[^a-zA-Z0-9_\.-]', '_'
                    # Prevent overwriting accidental duplicates by adding timestamp if file exists
                    $destPath = Join-Path $uploadsFolder $safeName
                    if (Test-Path $destPath) {
                        $baseName = [System.IO.Path]::GetFileNameWithoutExtension($safeName)
                        $ext = [System.IO.Path]::GetExtension($safeName)
                        $safeName = "${baseName}_" + [DateTimeOffset]::UtcNow.ToUnixTimeSeconds() + $ext
                        $destPath = Join-Path $uploadsFolder $safeName
                    }

                    $base64Data = $json.data
                    if ($base64Data -match "^data:([^;]+);base64,(.+)$") {
                        $base64Data = $matches[2]
                    }
                    $fileBytes = [System.Convert]::FromBase64String($base64Data)
                    [System.IO.File]::WriteAllBytes($destPath, $fileBytes)

                    $relUrl = "/admin/uploads/" + $safeName
                    $respJson = @{
                        success = $true
                        url = $relUrl
                        filename = $safeName
                        size = $fileBytes.Length
                    } | ConvertTo-Json

                    $outMsg = [System.Text.Encoding]::UTF8.GetBytes($respJson)
                    $response.ContentType = "application/json; charset=utf-8"
                    $response.StatusCode = 200
                    $response.ContentLength64 = $outMsg.Length
                    $response.OutputStream.Write($outMsg, 0, $outMsg.Length)
                } catch {
                    $errMsg = [System.Text.Encoding]::UTF8.GetBytes('{"success":false,"error":"' + $_.Exception.Message.Replace('"', '\"') + '"}')
                    $response.ContentType = "application/json; charset=utf-8"
                    $response.StatusCode = 500
                    $response.ContentLength64 = $errMsg.Length
                    $response.OutputStream.Write($errMsg, 0, $errMsg.Length)
                }
                $response.OutputStream.Close()
                continue
            }

            $rawUrlPath = $request.Url.LocalPath
            if ($rawUrlPath -eq "/" -or [string]::IsNullOrWhiteSpace($rawUrlPath)) {
                $rawUrlPath = "/index.html"
            }

            # Remove leading slash and normalize slashes
            $relPath = $rawUrlPath.TrimStart("/").Replace("/", "\")
            $filePath = Join-Path $folder $relPath

            # If directory, ensure trailing slash for proper relative asset resolution
            if (Test-Path $filePath -PathType Container) {
                if (-not $request.Url.LocalPath.EndsWith("/")) {
                    $response.StatusCode = 302
                    $response.RedirectLocation = $request.Url.LocalPath + "/"
                    $response.OutputStream.Close()
                    continue
                }
                if (Test-Path (Join-Path $filePath "index.html") -PathType Leaf) {
                    $filePath = Join-Path $filePath "index.html"
                } elseif (Test-Path (Join-Path $filePath "index.php") -PathType Leaf) {
                    $filePath = Join-Path $filePath "index.php"
                }
            }

            if (-not (Test-Path $filePath -PathType Leaf)) {
                # Try appending .html
                if (Test-Path "$filePath.html" -PathType Leaf) {
                    $filePath = "$filePath.html"
                }
            }

            if (Test-Path $filePath -PathType Leaf) {
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                $mime = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
                
                $bytes = [System.IO.File]::ReadAllBytes($filePath)
                $response.ContentType = $mime
                $response.ContentLength64 = $bytes.Length
                $response.StatusCode = 200
                if ($request.HttpMethod -ne "HEAD") {
                    $response.OutputStream.Write($bytes, 0, $bytes.Length)
                }
            } else {
                $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
                $response.StatusCode = 404
                $response.ContentLength64 = $msg.Length
                if ($request.HttpMethod -ne "HEAD") {
                    $response.OutputStream.Write($msg, 0, $msg.Length)
                }
            }
            $response.OutputStream.Close()
        } catch {
            Write-Warning "Request error: $_"
        }
    }
} catch {
    Write-Error $_
} finally {
    if ($listener -and $listener.IsListening) {
        $listener.Stop()
        $listener.Close()
    }
}
