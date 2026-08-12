$ErrorActionPreference = 'Stop'
$secretDir = Join-Path $PSScriptRoot '.secrets'
$secretFile = Join-Path $secretDir 'cafe24-sftp.credential.xml'
$knownHosts = Join-Path $secretDir 'known_hosts'

New-Item -ItemType Directory -Path $secretDir -Force | Out-Null
$credential = Get-Credential -UserName 'yjpak0229' -Message 'Cafe24 SFTP 비밀번호를 입력하세요. 현재 Windows 계정으로 암호화되어 저장됩니다.'

if ($null -eq $credential) {
    Write-Host '입력이 취소되었습니다.'
    exit 1
}

$credential | Export-Clixml -LiteralPath $secretFile
$keyscan = Get-Command 'ssh-keyscan.exe' -ErrorAction SilentlyContinue
if ($null -eq $keyscan) {
    throw 'Windows OpenSSH의 ssh-keyscan.exe를 찾을 수 없습니다. 선택적 기능에서 OpenSSH 클라이언트를 설치하세요.'
}
& $keyscan.Source -H '183.111.183.64' 2>$null | Set-Content -LiteralPath $knownHosts -Encoding ascii
if ($LASTEXITCODE -ne 0 -or -not (Test-Path -LiteralPath $knownHosts)) {
    throw 'Cafe24 서버 호스트 키를 준비하지 못했습니다.'
}
Write-Host 'Cafe24 SFTP 자격 증명이 안전하게 저장되었습니다.'
Write-Host '서버 호스트 키도 이 컴퓨터에만 저장되었습니다.'
Write-Host '이 창을 닫아도 됩니다.'
Read-Host '확인하려면 Enter'
