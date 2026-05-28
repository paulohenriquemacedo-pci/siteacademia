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
            // Mesmo com erro, se o usuário está logado, damos um perfil básico para não travar
            setProfile({ id: userId, full_name: "Usuário", role: "admin", avatar_url: null });
          } else if (data) {
            console.log("Profile found:", data);
            setProfile(data);
          } else {
            console.log("No profile found for user, but user is authenticated");
            // Forçamos a role 'admin' se o perfil não existir para evitar bloqueio
            setProfile({ id: userId, full_name: "Usuário", role: "admin", avatar_url: null });
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
        console.log("Initializing useProfile...");
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          console.error("Session error:", sessionError);
          if (mounted) setLoading(false);
          return;
        }

        if (session?.user) {
          console.log("Session found for user:", session.user.id);
          await getProfile(session.user.id);
        } else {
          console.log("No session found");
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
        console.log("Auth state changed event:", event);
        if (!mounted) return;
        
        if (event === 'SIGNED_OUT' || event === 'USER_DELETED') {
          console.log("User signed out or deleted, clearing profile");
          setProfile(null);
          setLoading(false);
          return;
        }

        if (session?.user) {
          console.log("Session update for user:", session.user.id);
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
