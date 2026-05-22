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
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", userId)
          .maybeSingle();

        if (mounted) {
          if (error) {
            console.error("Error fetching profile:", error);
          } else {
            setProfile(data);
          }
          setLoading(false);
        }
      } catch (err) {
        console.error("Unexpected error in useProfile:", err);
        if (mounted) setLoading(false);
      }
    }

    async function checkSession() {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        await getProfile(session.user.id);
      } else {
        if (mounted) {
          setProfile(null);
          setLoading(false);
        }
      }
    }

    checkSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
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
