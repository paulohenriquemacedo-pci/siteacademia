-- Garante que todos os perfis existentes tenham role 'admin'
UPDATE public.profiles SET role = 'admin' WHERE role IS NULL OR role != 'admin';

-- Ajusta o default da coluna role para 'admin' para novos usuários
ALTER TABLE public.profiles ALTER COLUMN role SET DEFAULT 'admin';

-- Garante que o trigger de criação de perfil defina role como 'admin' se não existir
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url, role)
  VALUES (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url', 'admin');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
