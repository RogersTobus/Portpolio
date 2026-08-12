$credentialPath = Join-Path $PSScriptRoot '.secrets\cafe24-sftp.credential.xml'
$credential = Import-Clixml -LiteralPath $credentialPath
$credential.GetNetworkCredential().Password
