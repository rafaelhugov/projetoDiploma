@echo off
echo ==================================================
echo   Iniciando o Ambiente de Desenvolvimento Local...
echo ==================================================

rem Verifica se o Node.js esta instalado
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERRO] Node.js nao esta instalado ou nao foi encontrado no PATH.
    echo Por favor, instale o Node.js em https://nodejs.org/ e tente novamente.
    pause
    exit /b 1
)

rem Verifica se a pasta node_modules existe, se nao, instala as dependencias
if not exist node_modules (
    echo [INFO] Pasta node_modules nao encontrada. Instalando dependencias...
    call npm install
    if %errorlevel% neq 0 (
        echo [ERRO] Falha ao instalar as dependencias com "npm install".
        pause
        exit /b %errorlevel%
    )
)

rem Inicia o servidor de desenvolvimento
echo [INFO] Iniciando o servidor de desenvolvimento Vite...
call npm run dev

pause
