# Agendador de Postagens do Blog

Permitir programar a publicação de posts numa data/hora futura. No horário marcado, o post é publicado automaticamente e você recebe um e-mail de confirmação.

## Como funcionará para você

1. No editor de post, novo campo **"Agendar publicação"** (data + hora, fuso de São Paulo).
2. Ao salvar com data futura, o post fica como **"Agendado"** (badge amarelo no dashboard).
3. Quando a hora chegar, o post é publicado automaticamente no site.
4. Você recebe um **e-mail de notificação** confirmando a publicação (com link para o post).
5. No dashboard: filtros por **Publicados / Agendados / Rascunhos**, com a data/hora agendada visível.
6. Você pode editar, cancelar ou antecipar o agendamento a qualquer momento.

## Decisões confirmadas

- **Fuso horário**: America/Sao_Paulo. Você escolhe a data/hora no horário de Brasília; o sistema armazena em UTC e converte automaticamente.
- **Sem expiração**: posts não são despublicados automaticamente.
- **Notificação por e-mail**: ativada após cada publicação automática.

## Mudanças técnicas

**Banco de dados**
- Adicionar coluna `scheduled_for` (timestamptz, nullable) na tabela `posts`.
- Índice em `scheduled_for` para o cron buscar rápido.
- Ajuste na política RLS de leitura pública: mostrar apenas posts com `published = true` (a regra de "só aparece após a hora marcada" é garantida pelo cron, que só marca como publicado no momento certo).

**Publicação automática (cron)**
- Habilitar extensões `pg_cron` e `pg_net`.
- Job SQL rodando a cada minuto:
  ```
  UPDATE posts
  SET published = true, published_at = now()
  WHERE scheduled_for IS NOT NULL
    AND scheduled_for <= now()
    AND published = false
  RETURNING id, title, slug;
  ```
- Para cada post publicado, o cron chama via `pg_net` a edge function `notify-post-published`, que envia o e-mail.

**E-mail de notificação**
- Usar a infraestrutura de e-mails do Lovable Cloud (requer domínio de envio configurado — abrirei o diálogo de setup quando começarmos a implementar).
- Template **"post-published-notification"** com: título do post, link público, data/hora de publicação.
- Destinatário: o e-mail do admin logado que criou/agendou o post (campo `author_id` → `auth.users.email`).

**Editor (`AdminPostEditor.tsx`)**
- Novo input `datetime-local` "Agendar publicação".
- Helper para converter horário de São Paulo ↔ UTC.
- Lógica: data futura → salva como `published = false` + `scheduled_for` preenchido. Vazio ou passado → comportamento atual.

**Dashboard (`AdminDashboard.tsx`)**
- Badge de status: Publicado (verde) / Agendado + data BRT (amarelo) / Rascunho (cinza).
- Filtro/abas por status.
- Botão "Cancelar agendamento" (limpa `scheduled_for`).

**Listagem pública**
- Sem mudanças — a RLS atual (`published = true`) já cobre, pois o cron só ativa no momento certo.

## Pré-requisito

A notificação por e-mail exige um **domínio de envio** configurado no Lovable Cloud (ex.: `notify.seudominio.com.br`). Quando começar a implementação, vou abrir o diálogo de configuração se ainda não estiver pronto.
