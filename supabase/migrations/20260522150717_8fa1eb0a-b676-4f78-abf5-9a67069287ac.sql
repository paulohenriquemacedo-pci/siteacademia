-- Fix security path for the trigger function
ALTER FUNCTION public.handle_new_user() SET search_path = public;

-- Revoke execution permissions from public roles
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM anon;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM authenticated;
