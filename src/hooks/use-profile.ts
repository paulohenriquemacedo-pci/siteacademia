import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export type Profile = {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  role: string | null;
};

export function useProfile() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function getProfile(userId: string) {
      try {
        console.log("Fetching profile for:", userId);
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", userId)
          .maybeSingle();

        if (mounted) {
          if (error) {
            console.error("Error fetching profile:", error);
          } else if (data) {
            console.log("Profile found:", data);
            setProfile(data);
          } else {
            console.log("No profile found for user, but user is authenticated");
            // Se não houver perfil mas o usuário está logado, podemos criar um objeto básico 
            // ou apenas deixar como null e o AdminLayout lidará com isso.
            setProfile({ id: userId, full_name: "Usuário", role: "user", avatar_url: null });
          }
          setLoading(false);
        }
      } catch (err) {
        console.error("Unexpected error in useProfile:", err);
        if (mounted) setLoading(false);
      }
    }

    const init = async () => {
      try {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          console.error("Session error:", sessionError);
          if (mounted) setLoading(false);
          return;
        }

        if (session?.user) {
          await getProfile(session.user.id);
        } else {
          if (mounted) {
            setProfile(null);
            setLoading(false);
          }
        }
      } catch (err) {
        console.error("Error in init:", err);
        if (mounted) setLoading(false);
      }
    };

    init();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log("Auth state changed:", event, session?.user?.id);
        if (!mounted) return;
        
        if (session?.user) {
          await getProfile(session.user.id);
        } else {
          setProfile(null);
          setLoading(false);
        }
      }
    );

    return () => {
      mounted = false;
      authListener.subscription.unsubscribe();
    };
  }, []);

  return { profile, loading };
}
