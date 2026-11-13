<?php
/**
 * header.php — Global HTML <head> and opening <body> for BGSS & Associates
 *
 * Variables accepted from the including page:
 *   $page_title       (string)  – Overrides the default <title>
 *   $meta_description (string)  – Overrides the default meta description
 *   $meta_keywords    (string)  – Additional keywords for the page (optional)
 *   $current_page     (string)  – Slug used by navigation.php for active-state styling
 *
 * Requires: config.php constants (SITE_NAME, SITE_TAGLINE, SITE_URL,
 *           SITE_EMAIL, SITE_PHONE, META_DESCRIPTION, OG_IMAGE)
 */

if (!defined('SITE_NAME')) {
    // Fallback: load config if not already loaded by the parent page
    require_once __DIR__ . '/../config.php';
}

// ── Defaults ──────────────────────────────────────────────────────────────────
$page_title       = $page_title       ?? (SITE_NAME . ' | ' . SITE_TAGLINE);
$meta_description = $meta_description ?? META_DESCRIPTION;
$meta_keywords    = $meta_keywords    ?? 'chartered accountants, tax advisory, corporate tax, transfer pricing, FEMA, mergers acquisitions, Ahmedabad, Gujarat, India';
$canonical_url    = SITE_URL . strtok($_SERVER['REQUEST_URI'] ?? '/', '?');
$og_image         = OG_IMAGE;

// ── JSON-LD structured data ────────────────────────────────────────────────────
$structured_data = [
    '@context'    => 'https://schema.org',
    '@type'       => 'AccountingService',
    'name'        => 'BGSS & Associates',
    'url'         => 'https://bgssassociates.com',
    'telephone'   => '+91-79-4890-4100',
    'email'       => 'devshah4689@gmail.com',
    'address'     => [
        '@type'           => 'PostalAddress',
        'addressLocality' => 'Ahmedabad',
        'addressRegion'   => 'Gujarat',
        'addressCountry'  => 'IN',
    ],
    'description' => META_DESCRIPTION,
    'sameAs'      => [],
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- ── Primary SEO ─────────────────────────────────────────────────────── -->
    <title><?= htmlspecialchars($page_title, ENT_QUOTES, 'UTF-8') ?></title>
    <meta name="description" content="<?= htmlspecialchars($meta_description, ENT_QUOTES, 'UTF-8') ?>">
    <meta name="keywords"    content="<?= htmlspecialchars($meta_keywords, ENT_QUOTES, 'UTF-8') ?>">
    <meta name="robots"      content="index, follow">
    <meta name="author"      content="<?= htmlspecialchars(SITE_NAME, ENT_QUOTES, 'UTF-8') ?>">

    <!-- ── Canonical ───────────────────────────────────────────────────────── -->
    <link rel="canonical" href="<?= htmlspecialchars($canonical_url, ENT_QUOTES, 'UTF-8') ?>">

    <!-- ── Open Graph ──────────────────────────────────────────────────────── -->
    <meta property="og:type"        content="website">
    <meta property="og:site_name"   content="<?= htmlspecialchars(SITE_NAME, ENT_QUOTES, 'UTF-8') ?>">
    <meta property="og:title"       content="<?= htmlspecialchars($page_title, ENT_QUOTES, 'UTF-8') ?>">
    <meta property="og:description" content="<?= htmlspecialchars($meta_description, ENT_QUOTES, 'UTF-8') ?>">
    <meta property="og:url"         content="<?= htmlspecialchars($canonical_url, ENT_QUOTES, 'UTF-8') ?>">
    <meta property="og:image"       content="<?= htmlspecialchars($og_image, ENT_QUOTES, 'UTF-8') ?>">
    <meta property="og:locale"      content="en_IN">

    <!-- ── Twitter Card ────────────────────────────────────────────────────── -->
    <meta name="twitter:card"        content="summary_large_image">
    <meta name="twitter:title"       content="<?= htmlspecialchars($page_title, ENT_QUOTES, 'UTF-8') ?>">
    <meta name="twitter:description" content="<?= htmlspecialchars($meta_description, ENT_QUOTES, 'UTF-8') ?>">
    <meta name="twitter:image"       content="<?= htmlspecialchars($og_image, ENT_QUOTES, 'UTF-8') ?>">

    <!-- ── Preconnect: Google Fonts ────────────────────────────────────────── -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <!-- ── Google Fonts (Brand Guidelines v1.0: Fraunces Display & Inter Body) ── -->
    <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
    >

    <!-- ── Font Awesome 6 ──────────────────────────────────────────────────── -->
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        integrity="sha512-Avb2QiuDEEvB4bZJYdft2mNjVShBftLdPG8FJ0V7irTLQ8Uo0qcPxh4Plh7eecDqX9igSQ0X1f5qkiT1m+zQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
    >

    <!-- ── Stylesheets ─────────────────────────────────────────────────────── -->
    <link rel="stylesheet" href="/assets/css/variables.css?v=3.0">
    <link rel="stylesheet" href="/assets/css/nav.css?v=3.0">
    <link rel="stylesheet" href="/assets/css/main.css?v=3.0">
    <link rel="stylesheet" href="/assets/css/pages.css?v=3.0">
    <link rel="stylesheet" href="/assets/css/intro-animation.css?v=3.0">
    <link rel="stylesheet" href="/assets/css/widgets.css?v=3.0">
    <link rel="stylesheet" href="/assets/css/responsive.css?v=3.0">
    <?php if ($current_page === 'knowledge-bank'): ?>
    <!-- PDF.js for in-website 3D PDF Flipbook rendering & presentation reading -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
    <?php endif; ?>
    <?php if (!empty($extra_css)): ?>
    <link rel="stylesheet" href="<?= htmlspecialchars($extra_css, ENT_QUOTES, 'UTF-8') ?>">
    <?php endif; ?>

    <!-- ── Structured Data (JSON-LD) ───────────────────────────────────────── -->
    <script type="application/ld+json">
        <?= json_encode($structured_data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) ?>
    </script>
</head>

<body class="js-loading">

    <?php if (empty($current_page) || $current_page === 'home'): ?>
    <!-- ── Cinematic Logo Reveal Video Intro Animation ──────────────────────── -->
    <div id="logo-intro-overlay" role="dialog" aria-label="BGSS &amp; Associates Introduction">
      <div class="intro-video-container">
        <video id="intro-video" class="intro-video" playsinline webkit-playsinline preload="auto" muted autoplay>
          <source src="/assets/video/bgss_logo_reveal.mp4" type="video/mp4">
        </video>
        <div class="intro-video-glow" aria-hidden="true"></div>
      </div>

      <!-- Video Control Buttons -->
      <div class="intro-controls-wrap">
        <button id="intro-sound-btn" class="intro-control-btn intro-sound-btn" type="button" aria-label="Toggle Sound" title="Turn Sound On">
          <i class="fa-solid fa-volume-xmark" aria-hidden="true"></i>
          <span class="intro-btn-text">Sound</span>
        </button>
        <button id="intro-skip-btn" class="intro-control-btn intro-skip-btn" type="button" aria-label="Skip Introduction" title="Skip Intro (Esc)">
          <span class="intro-btn-text">Skip</span>
          <i class="fa-solid fa-forward-step" aria-hidden="true"></i>
        </button>
      </div>

      <!-- Playback Progress Bar -->
      <div class="intro-progress-track" aria-hidden="true">
        <div class="intro-progress-bar"></div>
      </div>
    </div><!-- /#logo-intro-overlay -->
    <?php endif; ?>

    <!-- ── Custom Cursor ───────────────────────────────────────────────────── -->
    <div id="custom-cursor"    aria-hidden="true"></div>
    <div id="cursor-follower"  aria-hidden="true"></div>
