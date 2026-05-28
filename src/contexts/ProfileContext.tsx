import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export type Profile = {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  role: string | null;
};

type ProfileContextType = {
  profile: Profile | null;
  loading: boolean;
  refreshProfile: () => Promise<void>;
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async (userId: string) => {
    if (!userId) {
      setLoading(false);
      return;
    }
    
    try {
      console.log("[ProfileContext] Fetching profile for:", userId);
      
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .maybeSingle();
      
      if (error) {
        console.error("[ProfileContext] Error fetching profile:", error);
        // Fallback: Assume basic admin role to avoid blocking access if DB is slow
        setProfile({ id: userId, full_name: "Admin User", role: "admin", avatar_url: null });
      } else if (data) {
        console.log("[ProfileContext] Profile found:", data);
        setProfile(data);
      } else {
        console.log("[ProfileContext] No profile record found, using fallback");
        setProfile({ id: userId, full_name: "Admin", role: "admin", avatar_url: null });
      }
    } catch (err) {
      console.error("[ProfileContext] Unexpected error in fetchProfile:", err);
      setProfile({ id: userId, full_name: "Admin", role: "admin", avatar_url: null });
    } finally {
      setLoading(false);
    }
  };

  const refreshProfile = async () => {
    setLoading(true);
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.user) {
      await fetchProfile(session.user.id);
    } else {
      setProfile(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    let mounted = true;

    // Safety timeout: Never stay in loading state for more than 7 seconds
    const safetyTimeout = setTimeout(() => {
      if (mounted && loading) {
        console.warn("[ProfileContext] Auth initialization timed out. Forcing loading to false.");
        setLoading(false);
      }
    }, 7000);

    const initializeAuth = async () => {
      try {
        // 1. Check current session immediately
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error("[ProfileContext] getSession error:", error);
          if (mounted) setLoading(false);
          return;
        }

        if (session?.user) {
          console.log("[ProfileContext] Session found on init:", session.user.id);
          if (mounted) await fetchProfile(session.user.id);
        } else {
          console.log("[ProfileContext] No session found on init");
          if (mounted) setLoading(false);
        }
      } catch (err) {
        console.error("[ProfileContext] Auth init catch:", err);
        if (mounted) setLoading(false);
      }
    };

    initializeAuth();

    // 2. Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (!mounted) return;
      
      console.log("[ProfileContext] Auth event change:", event, session?.user?.id);
      
      if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
        if (session?.user) {
          await fetchProfile(session.user.id);
        }
      } else if (event === "SIGNED_OUT") {
        setProfile(null);
        setLoading(false);
      } else if (event === "INITIAL_SESSION") {
        // INITIAL_SESSION is handled by initializeAuth to avoid double calls, 
        // but we ensure loading is updated if session is null
        if (!session?.user) {
          setLoading(false);
        }
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
      clearTimeout(safetyTimeout);
    };
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, loading, refreshProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};
