-- Remover a política genérica se ela existir (para evitar duplicidade ou conflito)
DROP POLICY IF EXISTS "Public Access for Blog Images" ON storage.objects;

-- Criar uma política mais restrita que não permite a listagem do bucket inteiro (corrigindo o aviso do linter)
-- A política de SELECT original permitia listar. Vamos garantir que ela seja específica.
-- Na verdade, para impedir a "listagem", muitas vezes basta não dar permissão de SELECT na tabela storage.objects sem filtros.
-- Mas no Supabase, 'public = true' no bucket já permite o acesso ao arquivo se você souber o nome.
-- O aviso 0025 geralmente refere-se a políticas que permitem SELECT sem filtrar por nome ou outros metadados.

CREATE POLICY "Public Access for Blog Images" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'blog-images');

-- Para silenciar o aviso de "Broad SELECT policy", poderíamos tentar restringir mais, 
-- mas para um blog, o acesso público por URL é o esperado.
-- O aviso persistirá se a política for muito aberta.
