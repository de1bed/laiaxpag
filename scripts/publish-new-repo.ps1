<#
.SYNOPSIS
  Crea un repo NUEVO en tu cuenta de GitHub y sube esta carpeta (rama main).

.REQUISITO
  Una sola vez en esta PC:
    & "$env:ProgramFiles\GitHub CLI\gh.exe" auth login --web

.USAGE
  .\scripts\publish-new-repo.ps1
  .\scripts\publish-new-repo.ps1 -RepoName "mi-otro-nombre"
#>
param(
  [string]$RepoName = "laiax-landing",
  [string]$Description = "LAIAX — landing institucional (HTML estatico)",
  [string]$RemoteName = "publish"
)

$ErrorActionPreference = "Stop"
$gh = "$env:ProgramFiles\GitHub CLI\gh.exe"
if (-not (Test-Path $gh)) {
  Write-Host "Instala GitHub CLI: winget install GitHub.cli" -ForegroundColor Red
  exit 1
}

& $gh auth status *> $null
if ($LASTEXITCODE -ne 0) {
  Write-Host ""
  Write-Host "Primero inicia sesion:" -ForegroundColor Yellow
  Write-Host '  & "$env:ProgramFiles\GitHub CLI\gh.exe" auth login --web' -ForegroundColor Cyan
  Write-Host ""
  exit 1
}

$root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
Set-Location $root
if (-not (Test-Path (Join-Path $root ".git"))) {
  Write-Host "No hay .git en $root" -ForegroundColor Red
  exit 1
}

# Si ya existe el remote (re-ejecucion), quitarlo para que gh pueda registrarlo de nuevo
$remotes = git remote 2>$null
if ($remotes -contains $RemoteName) {
  Write-Host "Quitando remote '$RemoteName' anterior..." -ForegroundColor Yellow
  git remote remove $RemoteName
}

Write-Host "Creando github.com/<tu-usuario>/$RepoName y subiendo main..." -ForegroundColor Green
& $gh repo create $RepoName --public --source=. --remote=$RemoteName --push -d $Description

if ($LASTEXITCODE -ne 0) {
  Write-Host ""
  Write-Host "Si el repo YA existe en GitHub, usa solo push manual:" -ForegroundColor Yellow
  $user = (& $gh api user -q .login)
  $url = "https://github.com/$user/$RepoName.git"
  git remote add $RemoteName $url 2>$null
  git push -u $RemoteName main
  Write-Host "Listo: $url"
  exit 0
}

$user2 = (& $gh api user -q .login)
Write-Host ""
Write-Host "Listo: https://github.com/$user2/$RepoName" -ForegroundColor Green
Write-Host "Remote local: $RemoteName"
