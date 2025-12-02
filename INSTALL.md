# 📦 Guia de Instalação - ViralPulse

## Pré-requisitos

- Node.js 18+ instalado
- PostgreSQL instalado e rodando
- Conta OpenAI (para funcionalidade de IA)
- Git instalado

## Passo a Passo

### 1. Clone o repositório

```bash
git clone https://github.com/jpgb2023/ViralPulse.git
cd ViralPulse
```

### 2. Instale as dependências

```bash
npm run install:all
```

### 3. Configure o banco de dados

1. Crie um banco de dados PostgreSQL:

```sql
CREATE DATABASE viralpulse;
```

2. Configure a variável `DATABASE_URL` no arquivo `backend/.env`:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/viralpulse?schema=public"
```

3. Execute as migrações do Prisma:

```bash
cd backend
npm run prisma:generate
npm run prisma:migrate
```

### 4. Configure as variáveis de ambiente

#### Backend (`backend/.env`)

Copie o arquivo `.env.example` para `.env` e preencha:

```bash
cd backend
cp .env.example .env
```

Edite o arquivo `.env` com suas credenciais:

```env
PORT=3001
NODE_ENV=development
DATABASE_URL="postgresql://..."
JWT_SECRET="seu-secret-jwt-aqui"
OPENAI_API_KEY="sua-chave-openai-aqui"
CORS_ORIGIN=http://localhost:3000
```

#### Frontend (`frontend/.env.local`)

Copie o arquivo `.env.example` para `.env.local`:

```bash
cd frontend
cp .env.example .env.local
```

Edite o arquivo `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET="seu-secret-nextauth-aqui"
```

### 5. Execute o projeto

Em um terminal, execute o backend:

```bash
cd backend
npm run dev
```

Em outro terminal, execute o frontend:

```bash
cd frontend
npm run dev
```

Ou execute ambos simultaneamente:

```bash
npm run dev
```

### 6. Acesse a aplicação

Abra seu navegador em: `http://localhost:3000`

## Estrutura do Projeto

```
ViralPulse/
├── frontend/          # Aplicação Next.js
│   ├── app/          # Páginas e rotas
│   ├── components/   # Componentes React
│   └── lib/          # Utilitários
├── backend/          # API Express
│   ├── src/          # Código fonte
│   │   ├── routes/   # Rotas da API
│   │   └── services/ # Lógica de negócio
│   └── prisma/       # Schema do banco
└── shared/           # Código compartilhado
```

## Próximos Passos

1. Configure uma chave da API do Instagram (quando disponível)
2. Personalize as cores e tema conforme necessário
3. Configure autenticação real com NextAuth.js
4. Implemente integração real com API do Instagram

## Troubleshooting

### Erro de conexão com banco de dados

Verifique se o PostgreSQL está rodando e se a `DATABASE_URL` está correta.

### Erro ao gerar análise

Certifique-se de que a `OPENAI_API_KEY` está configurada corretamente.

### Porta já em uso

Altere a porta no arquivo `.env` do backend ou frontend.

