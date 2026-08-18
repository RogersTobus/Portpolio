$ErrorActionPreference = 'Stop'

$projectRoot = Split-Path $PSScriptRoot -Parent
$themeRoot = Join-Path $PSScriptRoot 'wordpress-theme\xbase'
$assetsRoot = Join-Path $themeRoot 'assets'
$publicRoot = Join-Path $projectRoot 'public'
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

if (Test-Path -LiteralPath $themeRoot) {
    Remove-Item -LiteralPath $themeRoot -Recurse -Force
}
New-Item -ItemType Directory -Path $assetsRoot -Force | Out-Null

$themeLogo = '<?php echo esc_url(get_template_directory_uri()); ?>/assets/xbase-logo.png'
$publicAssetPaths = [System.Collections.Generic.HashSet[string]]::new([System.StringComparer]::OrdinalIgnoreCase)
Get-ChildItem -LiteralPath $publicRoot -Recurse -File | ForEach-Object {
    $relativePath = $_.FullName.Substring($publicRoot.Length).TrimStart('\', '/').Replace('\', '/')
    [void]$publicAssetPaths.Add($relativePath)
}

function Convert-XbaseAssetUrl([string]$url) {
    $decodedUrl = [System.Net.WebUtility]::HtmlDecode($url)

    if ($decodedUrl -match '^/_next/image\?url=([^&]+)') {
        $decodedUrl = [System.Uri]::UnescapeDataString($Matches[1])
    }
    elseif ($decodedUrl -match '^https://xbase\.co\.kr(/[^?#]+)') {
        $decodedUrl = $Matches[1]
    }

    if (-not $decodedUrl.StartsWith('/')) { return $url }
    $relativePath = ($decodedUrl.TrimStart('/') -split '[?#]', 2)[0]
    if (-not $publicAssetPaths.Contains($relativePath)) { return $url }

    return '<?php echo esc_url(get_template_directory_uri()); ?>/assets/' + $relativePath
}

function Get-XbaseMain([string]$path) {
    $response = Invoke-WebRequest -Uri ('http://localhost:3000' + $path) -UseBasicParsing -TimeoutSec 30
    $mainMatch = [regex]::Match($response.Content, '(?s)<main(?:\s[^>]*)?>.*?</main>')
    if (-not $mainMatch.Success) { throw "Could not find main content at $path" }
    $content = $mainMatch.Value
    $content = [regex]::Replace($content, '\s+(?:srcSet|srcset)="[^"]*"', '')
    $content = [regex]::Replace(
        $content,
        '(?<prefix>\b(?:src|poster)=["''])(?<url>[^"'']+)(?<suffix>["''])',
        {
            param($match)
            $convertedUrl = Convert-XbaseAssetUrl $match.Groups['url'].Value
            return $match.Groups['prefix'].Value + $convertedUrl + $match.Groups['suffix'].Value
        }
    )
    $content = [regex]::Replace($content, '\s+data-nimg="1"', '')
    return $content.Replace('fetchPriority=', 'fetchpriority=')
}

function Write-XbaseTemplate([string]$fileName, [string]$path, [string]$label) {
    $main = Get-XbaseMain $path
    $pageResponse = Invoke-WebRequest -Uri ('http://localhost:3000' + $path) -UseBasicParsing -TimeoutSec 30
    $descriptionMatch = [regex]::Match($pageResponse.Content, '<meta name="description" content="([^"]*)"')
    $ogTitleMatch = [regex]::Match($pageResponse.Content, '<meta property="og:title" content="([^"]*)"')
    $canonicalMatch = [regex]::Match($pageResponse.Content, '<link rel="canonical" href="([^"]*)"')
    $description = [System.Net.WebUtility]::HtmlDecode($descriptionMatch.Groups[1].Value).Replace("'", "\'")
    $ogTitle = [System.Net.WebUtility]::HtmlDecode($ogTitleMatch.Groups[1].Value).Replace("'", "\'")
    $canonical = [System.Net.WebUtility]::HtmlDecode($canonicalMatch.Groups[1].Value).Replace("'", "\'")
    $template = @"
<?php
/** XBASE $label page. */
`$xbase_meta = array('description' => '$description', 'title' => '$ogTitle', 'canonical' => '$canonical');
get_header();
?>
$main
<?php get_footer(); ?>
"@
    [System.IO.File]::WriteAllText((Join-Path $themeRoot $fileName), $template, $utf8NoBom)
    return $main.Length
}

$mainLength = Write-XbaseTemplate 'front-page.php' '/' 'front'
$detailSlugs = @('about', 'impact', 'work', 'creative', 'build', 'thinking')
foreach ($slug in $detailSlugs) { Write-XbaseTemplate ("page-$slug.php") ('/' + $slug) $slug | Out-Null }

$indexPage = @'
<?php
/** Fallback template. */
require get_template_directory() . '/front-page.php';
'@
[System.IO.File]::WriteAllText((Join-Path $themeRoot 'index.php'), $indexPage, $utf8NoBom)

$headerPage = @'
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="마케팅과 데이터, AI와 기술을 연결해 문제를 발견하고 더 나은 방식을 만드는 XBASE 포트폴리오">
  <meta property="og:title" content="XBASE — Think better. Build better.">
  <meta property="og:description" content="Marketing × Data Analytics × Vibe Coding × System">
  <meta property="og:image" content="<?php echo esc_url(get_template_directory_uri()); ?>/assets/og.png">
  <meta property="og:url" content="https://xbase.co.kr/">
  <meta property="og:type" content="website">
  <link rel="icon" href="<?php echo esc_url(get_template_directory_uri()); ?>/assets/xbase-logo.png">
  <?php wp_head(); ?>
</head>
<body <?php body_class('xbase-site'); ?>>
<?php wp_body_open(); ?>
'@
$headerPage = @'
<?php global $xbase_meta; ?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="<?php echo esc_attr($xbase_meta['description'] ?? get_bloginfo('description')); ?>">
  <link rel="canonical" href="<?php echo esc_url($xbase_meta['canonical'] ?? home_url('/')); ?>">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta property="og:title" content="<?php echo esc_attr($xbase_meta['title'] ?? get_bloginfo('name')); ?>">
  <meta property="og:description" content="<?php echo esc_attr($xbase_meta['description'] ?? get_bloginfo('description')); ?>">
  <meta property="og:image" content="<?php echo esc_url(get_template_directory_uri()); ?>/assets/og.png">
  <meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
  <meta property="og:url" content="<?php echo esc_url($xbase_meta['canonical'] ?? home_url('/')); ?>">
  <meta property="og:type" content="website"><meta property="og:locale" content="ko_KR"><meta property="og:site_name" content="XBASE">
  <meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="<?php echo esc_attr($xbase_meta['title'] ?? get_bloginfo('name')); ?>">
  <meta name="twitter:description" content="<?php echo esc_attr($xbase_meta['description'] ?? get_bloginfo('description')); ?>"><meta name="twitter:image" content="<?php echo esc_url(get_template_directory_uri()); ?>/assets/og.png">
  <link rel="icon" href="<?php echo esc_url(get_template_directory_uri()); ?>/assets/xbase-logo.png">
  <?php wp_head(); ?>
</head>
<body <?php body_class('xbase-site'); ?>>
<?php wp_body_open(); ?>
'@
[System.IO.File]::WriteAllText((Join-Path $themeRoot 'header.php'), $headerPage, $utf8NoBom)

$footerPage = @'
<?php wp_footer(); ?>
</body>
</html>
'@
[System.IO.File]::WriteAllText((Join-Path $themeRoot 'footer.php'), $footerPage, $utf8NoBom)

$functionsPage = @'
<?php
/** XBASE theme setup. */
function xbase_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('html5', array('style', 'script'));
}
add_action('after_setup_theme', 'xbase_theme_setup');

function xbase_theme_assets() {
    wp_enqueue_style('xbase-theme', get_stylesheet_uri(), array(), (string) filemtime(get_stylesheet_directory() . '/style.css'));
}
add_action('wp_enqueue_scripts', 'xbase_theme_assets');

function xbase_remove_block_styles() {
    wp_dequeue_style('wp-block-library');
    wp_dequeue_style('wp-block-library-theme');
    wp_dequeue_style('global-styles');
    wp_dequeue_style('classic-theme-styles');
}
add_action('wp_enqueue_scripts', 'xbase_remove_block_styles', 100);
add_filter('show_admin_bar', '__return_false');
remove_action('wp_head', 'rel_canonical');
function xbase_document_title($title) {
    global $xbase_meta;
    return !empty($xbase_meta['title']) ? $xbase_meta['title'] : $title;
}
add_filter('pre_get_document_title', 'xbase_document_title');

function xbase_robots_text($output, $public) {
    if ('0' === (string) $public) { return $output; }
    return "User-agent: *\nAllow: /\nDisallow: /wp-admin/\nDisallow: /wp-includes/\nSitemap: " . home_url('/wp-sitemap.xml') . "\n";
}
add_filter('robots_txt', 'xbase_robots_text', 10, 2);

function xbase_sitemap_providers($provider, $name) {
    return in_array($name, array('users', 'taxonomies'), true) ? false : $provider;
}
add_filter('wp_sitemaps_add_provider', 'xbase_sitemap_providers', 10, 2);

function xbase_sitemap_post_args($args, $post_type) {
    if ('post' === $post_type) { $args['post__in'] = array(0); }
    if ('page' === $post_type) {
        $sample = get_page_by_path('sample-page', OBJECT, 'page');
        if ($sample) { $args['post__not_in'] = array($sample->ID); }
    }
    return $args;
}
add_filter('wp_sitemaps_posts_query_args', 'xbase_sitemap_post_args', 10, 2);

function xbase_ensure_portfolio_pages() {
    $pages = array(
        'about' => 'About', 'impact' => 'Impact', 'work' => 'Work',
        'creative' => 'Creative', 'build' => 'Build', 'thinking' => 'Thinking'
    );
    foreach ($pages as $slug => $title) {
        if (!get_page_by_path($slug, OBJECT, 'page')) {
            wp_insert_post(array('post_title' => $title, 'post_name' => $slug, 'post_status' => 'publish', 'post_type' => 'page', 'post_content' => ''));
        }
    }
}
add_action('init', 'xbase_ensure_portfolio_pages');
'@
[System.IO.File]::WriteAllText((Join-Path $themeRoot 'functions.php'), $functionsPage, $utf8NoBom)

$sourceCss = Get-Content -Raw -LiteralPath (Join-Path $projectRoot 'app\globals.css')
$sourceCss = $sourceCss -replace '^@import "tailwindcss";\s*', ''
$sourceCss = [regex]::Replace(
    $sourceCss,
    'url\((?<quote>["'']?)(?<url>/[^)"'']+)(?:["'']?)\)',
    {
        param($match)
        $relativePath = ($match.Groups['url'].Value.TrimStart('/') -split '[?#]', 2)[0]
        if (-not $publicAssetPaths.Contains($relativePath)) { return $match.Value }
        $quote = $match.Groups['quote'].Value
        return 'url(' + $quote + 'assets/' + $relativePath + $quote + ')'
    }
)
$themeHeader = @'
/*
Theme Name: XBASE Portfolio
Theme URI: https://xbase.co.kr
Author: Park Young Jun
Description: XBASE personal portfolio custom theme.
Version: 1.1.0
Text Domain: xbase
*/
:root { --font-geist-sans: Arial, sans-serif; --font-geist-mono: Consolas, monospace; }
html, body, div, span, h1, h2, h3, p, a, header, footer, section, article, nav, main, strong, b, i { margin:0; padding:0; border:0; }
body.admin-bar .site-header { top:20px; }
'@
[System.IO.File]::WriteAllText((Join-Path $themeRoot 'style.css'), ($themeHeader + "`r`n" + $sourceCss), $utf8NoBom)

Copy-Item -Path (Join-Path $publicRoot '*') -Destination $assetsRoot -Recurse -Force

$zipPath = Join-Path $projectRoot 'outputs\xbase-theme.zip'
if ($env:XBASE_SKIP_ZIP -ne '1') {
    if (Test-Path -LiteralPath $zipPath) { Remove-Item -LiteralPath $zipPath -Force }
    Compress-Archive -Path $themeRoot -DestinationPath $zipPath -CompressionLevel Optimal
}

[pscustomobject]@{ ThemePath=$themeRoot; ZipPath=$zipPath; MainLength=$mainLength; DetailPages=$detailSlugs.Count }
