Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "  Iniciando o Ambiente de Desenvolvimento Local..." -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan

# Verifica se o Node.js esta instalado
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Error "[ERRO] Node.js nao esta instalado ou nao foi encontrado no PATH."
    Write-Host "Por favor, instale o Node.js em https://nodejs.org/ e tente novamente."
    Read-Host "Pressione Enter para sair..."
    exit 1
}

# Verifica se a pasta node_modules existe
if (-not (Test-Path -Path "node_modules")) {
    Write-Host "[INFO] Pasta node_modules nao encontrada. Instalando dependencias..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Error "[ERRO] Falha ao instalar as dependencias com 'npm install'."
        Read-Host "Pressione Enter para sair..."
        exit $LASTEXITCODE
    }
}

# Inicia o servidor de desenvolvimento
Write-Host "[INFO] Iniciando o servidor de desenvolvimento Vite..." -ForegroundColor Green
npm run dev
