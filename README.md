# Sistema A.C.A.D.E.M.I.A — Site Oficial

Site institucional do **Sistema A.C.A.D.E.M.I.A**, método de produtividade acadêmica estruturado em 8 pilares para mestrandos, doutorandos e graduandos em TCC.

## Tecnologias

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- [Supabase](https://supabase.com/) (banco de dados, autenticação e Edge Functions)
- [React Router](https://reactrouter.com/) (roteamento SPA)

## Como rodar localmente

Requisito: Node.js >= 18 e npm instalados.

```sh
# 1. Clone o repositório
git clone https://github.com/paulohenriquemacedo-pci/siteacademia.git

# 2. Entre na pasta
cd siteacademia

# 3. Instale as dependências
npm install

# 4. Copie o arquivo de variáveis de ambiente e preencha com suas credenciais do Supabase
cp .env.example .env

# 5. Inicie o servidor de desenvolvimento
npm run dev
```

## Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-publica
```

## Build para produção

```sh
npm run build
```

A pasta `dist/` gerada contém os arquivos estáticos prontos para deploy.

## Estrutura de rotas

| Rota | Descrição |
|------|-----------|
| `/` | Página principal |
| `/blog` | Listagem de posts |
| `/blog/:slug` | Post individual |
| `/admin` | Painel administrativo (requer autenticação) |
| `/admin/posts/new` | Criar novo post |
| `/admin/posts/edit/:id` | Editar post |
| `/termos` | Termos de uso |
| `/privacidade` | Política de privacidade |

## Deploy na Hostinger

O projeto é um SPA (Single Page Application). O arquivo `public/.htaccess` já está configurado para redirecionar todas as rotas para `index.html`, garantindo que a navegação funcione corretamente no servidor Apache da Hostinger.
