# Apply only to this checkout. Does not change global settings or rewrite history.
$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
& git -C $projectRoot rev-parse --show-toplevel | Out-Null
if ($LASTEXITCODE -ne 0) { throw 'Run this script from a Komofuu Git checkout.' }
& git -C $projectRoot config --local user.name 'Komofuu'
if ($LASTEXITCODE -ne 0) { throw 'Could not set this checkout commit name.' }
& git -C $projectRoot config --local user.email '336200918+Komofuu@users.noreply.github.com'
if ($LASTEXITCODE -ne 0) { throw 'Could not set this checkout commit email.' }
Write-Host 'Future command-line commits in this checkout use Komofuu and the GitHub no-reply address.'
Write-Host 'Existing commits and account-wide GitHub settings were not changed.'
