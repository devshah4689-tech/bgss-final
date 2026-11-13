<?php
/**
 * BGSS Admin API Endpoint
 * Handles JSON data persistence and file uploads on PHP servers.
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$action = $_GET['action'] ?? '';
$dataDir = __DIR__ . '/data';
$uploadsDir = __DIR__ . '/uploads';

if (!is_dir($dataDir)) {
    mkdir($dataDir, 0755, true);
}
if (!is_dir($uploadsDir)) {
    mkdir($uploadsDir, 0755, true);
}

// 1. Save data action
if ($action === 'save' || ($_SERVER['REQUEST_METHOD'] === 'POST' && strpos($_SERVER['REQUEST_URI'], '/save') !== false)) {
    $raw = file_get_contents('php://input');
    if (!empty($raw)) {
        $json = json_decode($raw, true);
        if ($json !== null) {
            file_put_contents($dataDir . '/site-data.json', json_encode($json, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE));
            echo json_encode(['success' => true, 'message' => 'Data saved successfully']);
            exit;
        }
    }
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid JSON payload']);
    exit;
}

// 2. Upload file action
if ($action === 'upload' || ($_SERVER['REQUEST_METHOD'] === 'POST' && strpos($_SERVER['REQUEST_URI'], '/upload') !== false)) {
    // Check if multipart upload
    if (!empty($_FILES['file'])) {
        $file = $_FILES['file'];
        $rawName = basename($file['name']);
        $safeName = preg_replace('/[^a-zA-Z0-9_\.-]/', '_', $rawName);
        $dest = $uploadsDir . '/' . $safeName;
        if (file_exists($dest)) {
            $pathInfo = pathinfo($safeName);
            $safeName = $pathInfo['filename'] . '_' . time() . '.' . ($pathInfo['extension'] ?? 'bin');
            $dest = $uploadsDir . '/' . $safeName;
        }
        if (move_uploaded_file($file['tmp_name'], $dest)) {
            echo json_encode([
                'success' => true,
                'url' => '/admin/uploads/' . $safeName,
                'filename' => $safeName,
                'size' => filesize($dest)
            ]);
            exit;
        }
    }

    // Check if JSON base64 upload
    $raw = file_get_contents('php://input');
    if (!empty($raw)) {
        $payload = json_decode($raw, true);
        if (!empty($payload['data'])) {
            $rawName = basename($payload['filename'] ?? ('upload_' . time() . '.bin'));
            $safeName = preg_replace('/[^a-zA-Z0-9_\.-]/', '_', $rawName);
            $dest = $uploadsDir . '/' . $safeName;
            if (file_exists($dest)) {
                $pathInfo = pathinfo($safeName);
                $safeName = $pathInfo['filename'] . '_' . time() . '.' . ($pathInfo['extension'] ?? 'bin');
                $dest = $uploadsDir . '/' . $safeName;
            }

            $b64 = $payload['data'];
            if (preg_match('/^data:([^;]+);base64,(.+)$/', $b64, $matches)) {
                $b64 = $matches[2];
            }
            $bin = base64_decode($b64);
            if ($bin !== false) {
                file_put_contents($dest, $bin);
                echo json_encode([
                    'success' => true,
                    'url' => '/admin/uploads/' . $safeName,
                    'filename' => $safeName,
                    'size' => strlen($bin)
                ]);
                exit;
            }
        }
    }

    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'No valid file received']);
    exit;
}

// Default: return current data
$dataFile = $dataDir . '/site-data.json';
if (file_exists($dataFile)) {
    echo file_get_contents($dataFile);
} else {
    echo json_encode(['settings' => [], 'partner_thoughts' => [], 'resources' => ['ebooks' => [], 'presentations' => [], 'videos' => []]]);
}
