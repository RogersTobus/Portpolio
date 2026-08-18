$ErrorActionPreference = 'Stop'

$projectRoot = Split-Path $PSScriptRoot -Parent
$exportScript = Join-Path $PSScriptRoot 'export-wordpress-theme.ps1'
$themeRoot = Join-Path $PSScriptRoot 'wordpress-theme\xbase'
$archiveLocal = Join-Path $PSScriptRoot 'xbase-theme-deploy.tar.gz'
$credentialFile = Join-Path $PSScriptRoot '.secrets\cafe24-sftp.credential.xml'
$askPass = Join-Path $PSScriptRoot 'cafe24-askpass.cmd'
$knownHosts = Join-Path $PSScriptRoot '.secrets\known_hosts'
$remoteUser = 'yjpak0229'
$remoteHost = '183.111.183.64'
$remoteRoot = '/home/hosting_users/yjpak0229/www'
$stamp = Get-Date -Format 'yyyyMMddHHmmss'
$remoteArchive = "/home/hosting_users/yjpak0229/.xbase-theme-$stamp.tar.gz"
$remoteBackup = "/home/hosting_users/yjpak0229/.xbase-backup-$stamp.tar.gz"

if (-not (Test-Path -LiteralPath $credentialFile)) {
    throw 'Cafe24 자격 증명이 설정되지 않았습니다.'
}

$env:XBASE_SKIP_ZIP = '1'
& $exportScript | Out-Host
Remove-Item Env:XBASE_SKIP_ZIP -ErrorAction SilentlyContinue
if (-not $?) { throw 'WordPress 테마 생성에 실패했습니다.' }

if (Test-Path -LiteralPath $archiveLocal) {
    Remove-Item -LiteralPath $archiveLocal -Force
}
& tar.exe -czf $archiveLocal -C (Split-Path $themeRoot -Parent) 'xbase'
if ($LASTEXITCODE -ne 0) { throw '배포 파일 생성에 실패했습니다.' }

$env:SSH_ASKPASS = $askPass
$env:SSH_ASKPASS_REQUIRE = 'force'
$env:DISPLAY = 'cafe24'
$sshOptions = @(
    '-o', 'BatchMode=no',
    '-o', 'PreferredAuthentications=password,keyboard-interactive',
    '-o', 'PubkeyAuthentication=no',
    '-o', 'StrictHostKeyChecking=yes',
    '-o', "UserKnownHostsFile=$knownHosts"
)

& scp.exe -P 22 @sshOptions $archiveLocal "${remoteUser}@${remoteHost}:$remoteArchive"
if ($LASTEXITCODE -ne 0) { throw 'Cafe24 전송에 실패했습니다.' }

$remoteCommand = "set -e; tar -czf '$remoteBackup' -C '$remoteRoot/wp-content/themes' xbase; tar -xzf '$remoteArchive' --strip-components=1 -C '$remoteRoot/wp-content/themes/xbase'; rm -f '$remoteArchive'; printf 'DEPLOYED\n'"
& ssh.exe @sshOptions -p 22 "${remoteUser}@${remoteHost}" $remoteCommand
if ($LASTEXITCODE -ne 0) { throw 'Cafe24 배포에 실패했습니다.' }

$check = Invoke-WebRequest -Uri ("https://xbase.co.kr/?deploy_check=" + $stamp) -UseBasicParsing -TimeoutSec 30
if ($check.StatusCode -ne 200 -or $check.Content -notmatch 'XBASE') {
    throw '배포 후 홈페이지 확인에 실패했습니다. 서버 백업이 보존되어 있습니다.'
}

$requiredAssets = @(
    'xbase-header-logo.svg',
    'about/park-youngjun-portrait.jpg',
    'portfolio/case-01-db-funnel.png',
    'media/hero-background.mp4'
)
foreach ($assetPath in $requiredAssets) {
    $assetUrl = 'https://xbase.co.kr/wp-content/themes/xbase/assets/' + $assetPath
    $assetCheck = Invoke-WebRequest -Uri $assetUrl -Method Head -UseBasicParsing -TimeoutSec 30
    if ($assetCheck.StatusCode -ne 200) {
        throw "배포 후 필수 이미지·영상 확인에 실패했습니다: $assetPath"
    }
}

[pscustomobject]@{
    Deployed = $true
    Url = 'https://xbase.co.kr/'
    Backup = $remoteBackup
}
