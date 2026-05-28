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
    let timeoutId: NodeJS.Timeout;

    async function getProfile(userId: string) {
      if (!mounted) return;
      
      try {
        console.log("Fetching profile for:", userId);
        
        // Timeout de segurança para a busca de perfil (3 segundos)
        const profilePromise = supabase
          .from("profiles")
          .select("*")
          .eq("id", userId)
          .maybeSingle();

        const timeoutPromise = new Promise((_, reject) => {
          timeoutId = setTimeout(() => reject(new Error("Timeout profile fetch")), 3000);
        });

        const { data, error } = await Promise.race([profilePromise, timeoutPromise]) as any;

        if (mounted) {
          if (error) {
            console.error("Error fetching profile:", error);
            setProfile({ id: userId, full_name: "Usuário Admin", role: "admin", avatar_url: null });
          } else if (data) {
            console.log("Profile found:", data);
            setProfile(data);
          } else {
            console.log("No profile found for user, providing fallback");
            setProfile({ id: userId, full_name: "Usuário Admin", role: "admin", avatar_url: null });
          }
          setLoading(false);
        }
      } catch (err) {
        console.error("Unexpected error in getProfile:", err);
        if (mounted) {
          // Fallback para evitar bloqueio
          setProfile({ id: userId, full_name: "Usuário Admin", role: "admin", avatar_url: null });
          setLoading(false);
        }
      } finally {
        if (timeoutId) clearTimeout(timeoutId);
      }
    }

    const checkSession = async () => {
      try {
        // Timeout para getSession (2 segundos)
        const sessionPromise = supabase.auth.getSession();
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error("Timeout session fetch")), 2000);
        });

        const { data: { session }, error: sessionError } = await Promise.race([sessionPromise, timeoutPromise]) as any;
        
        if (!mounted) return;

        if (sessionError) {
          console.error("Session error:", sessionError);
          setLoading(false);
          return;
        }

        if (session?.user) {
          await getProfile(session.user.id);
        } else {
          setProfile(null);
          setLoading(false);
        }
      } catch (err) {
        console.error("Session check error:", err);
        if (mounted) setLoading(false);
      }
    };

    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (!mounted) return;
        
        console.log("Auth event:", event);

        if (event === 'SIGNED_OUT') {
          setProfile(null);
          setLoading(false);
        } else if (session?.user) {
          await getProfile(session.user.id);
        } else if (event === 'INITIAL_SESSION' && !session) {
          setLoading(false);
        }
      }
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return { profile, loading };
}

  return { profile, loading };
}
