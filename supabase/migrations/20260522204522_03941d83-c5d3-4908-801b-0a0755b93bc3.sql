-- Inserir o bucket blog-images se ele não existir
INSERT INTO storage.buckets (id, name, public) 
VALUES ('blog-images', 'blog-images', true)
ON CONFLICT (id) DO NOTHING;

-- Permitir acesso público para visualização das imagens
CREATE POLICY "Public Access for Blog Images" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'blog-images');

-- Permitir que qualquer usuário autenticado faça upload (ou qualquer usuário se preferir abrir mais, mas autenticado é mais seguro)
CREATE POLICY "Authenticated Users can upload images" 
ON storage.objects FOR INSERT 
TO authenticated
WITH CHECK (bucket_id = 'blog-images');

-- Permitir que usuários autenticados deletem ou atualizem suas imagens
CREATE POLICY "Authenticated Users can update images" 
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'blog-images');

CREATE POLICY "Authenticated Users can delete images" 
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'blog-images');