@echo off
echo ====================================
echo Gerando build estático do ViralPulse
echo ====================================
echo.

cd frontend

echo Instalando dependências...
call npm install

echo.
echo Gerando build estático...
call npm run build

echo.
echo ====================================
echo Build concluído!
echo ====================================
echo.
echo Os arquivos HTML estão em: frontend\out\
echo.
echo Você pode fazer upload da pasta 'out' para seu servidor de hospedagem.
echo.
pause

