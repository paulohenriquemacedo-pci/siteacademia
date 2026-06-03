
-- Add scheduled_for column for scheduled publishing
ALTER TABLE public.posts
ADD COLUMN IF NOT EXISTS scheduled_for TIMESTAMPTZ;

-- Index to speed up the cron lookup
CREATE INDEX IF NOT EXISTS idx_posts_scheduled_for
ON public.posts (scheduled_for)
WHERE scheduled_for IS NOT NULL AND published = false;

-- Enable required extensions for scheduled job
CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;
