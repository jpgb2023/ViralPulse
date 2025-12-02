# 📤 Guia de Publicação - ViralPulse

## Opção 1: Build Estático do Next.js (Recomendado)

### Passos para gerar HTML estático:

1. **Instale as dependências do frontend:**
```bash
cd frontend
npm install
```

2. **Configure as variáveis de ambiente:**
```bash
cp .env.example .env.local
```

Edite `.env.local` e configure:
```env
NEXT_PUBLIC_API_URL=https://sua-api.com
NEXTAUTH_URL=https://seu-dominio.com
NEXTAUTH_SECRET=sua-chave-secreta
```

3. **Gere o build estático:**
```bash
npm run build
```

4. **Os arquivos HTML estarão em:**
```
frontend/out/
```

5. **Faça upload da pasta `out` para seu servidor de hospedagem**

### Hospedagem Recomendada:

- **Vercel** (gratuito): https://vercel.com
- **Netlify** (gratuito): https://netlify.com
- **GitHub Pages**: Para sites estáticos
- **Cloudflare Pages**: Gratuito e rápido

## Opção 2: HTML Puro Simplificado

Se preferir uma versão HTML pura sem dependências, veja o arquivo `index.html` na raiz do projeto.

## Opção 3: Deploy Automático

### Vercel (Mais Fácil)

1. Instale a CLI da Vercel:
```bash
npm i -g vercel
```

2. No diretório do projeto:
```bash
vercel
```

3. Siga as instruções na tela

### Netlify

1. Instale a CLI do Netlify:
```bash
npm i -g netlify-cli
```

2. No diretório do projeto:
```bash
netlify deploy --prod
```

## Estrutura de Arquivos para Publicação

Após o build, você terá:
```
out/
├── index.html
├── analyze/
│   └── index.html
├── top-virais/
│   └── index.html
├── templates/
│   └── index.html
├── faq/
│   └── index.html
├── support/
│   └── index.html
├── settings/
│   └── index.html
├── profile/
│   └── index.html
├── _next/
│   └── static/
└── ...
```

## Configuração do Backend

Se você precisar do backend também:

1. Configure variáveis de ambiente no servidor
2. Execute: `npm run build` no diretório backend
3. Execute: `npm start` para iniciar o servidor

Ou use serviços como:
- **Railway**: https://railway.app
- **Render**: https://render.com
- **Heroku**: https://heroku.com

