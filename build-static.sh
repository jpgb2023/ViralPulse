#!/bin/bash

echo "===================================="
echo "Gerando build estático do ViralPulse"
echo "===================================="
echo ""

cd frontend

echo "Instalando dependências..."
npm install

echo ""
echo "Gerando build estático..."
npm run build

echo ""
echo "===================================="
echo "Build concluído!"
echo "===================================="
echo ""
echo "Os arquivos HTML estão em: frontend/out/"
echo ""
echo "Você pode fazer upload da pasta 'out' para seu servidor de hospedagem."
echo ""

