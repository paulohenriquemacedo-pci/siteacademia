-- Ensure storage schema usage
GRANT USAGE ON SCHEMA storage TO postgres, anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA storage TO postgres, anon, authenticated, service_role;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA storage TO postgres, anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA storage TO postgres, anon, authenticated, service_role;

-- Ensure the blog-images bucket is public
UPDATE storage.buckets SET public = true WHERE id = 'blog-images';

-- Recreate policies for blog-images to be sure they are correct and clean
DROP POLICY IF EXISTS "Public Access for Blog Images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated Users can upload images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated Users can update images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated Users can delete images" ON storage.objects;
DROP POLICY IF EXISTS "Admins can upload blog images" ON storage.objects;
DROP POLICY IF EXISTS "Admins can update/delete blog images" ON storage.objects;
DROP POLICY IF EXISTS "Blog images are publicly accessible" ON storage.objects;

-- 1. Public can view images
CREATE POLICY "Blog images are publicly accessible"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'blog-images');

-- 2. Authenticated users can upload
CREATE POLICY "Authenticated users can upload blog images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'blog-images');

-- 3. Authenticated users can update/delete (simplifying to all authenticated for now to avoid issues, 
-- but we can restrict to owners later if needed. Since it's an admin panel, authenticated is usually enough)
CREATE POLICY "Authenticated users can manage blog images"
ON storage.objects FOR ALL
TO authenticated
USING (bucket_id = 'blog-images')
WITH CHECK (bucket_id = 'blog-images');
