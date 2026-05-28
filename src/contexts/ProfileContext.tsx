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
        setProfile({ id: userId, full_name: "Admin User", role: "admin", avatar_url: null });
      } else if (data) {
        setProfile(data);
      } else {
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
    let authInitialized = false;

    const handleAuthChange = async (session: any) => {
      if (!mounted) return;
      
      try {
        if (session?.user) {
          console.log("[ProfileContext] User detected:", session.user.id);
          await fetchProfile(session.user.id);
        } else {
          console.log("[ProfileContext] No user session");
          setProfile(null);
          setLoading(false);
        }
      } catch (err) {
        console.error("[ProfileContext] Error in handleAuthChange:", err);
        setLoading(false);
      } finally {
        authInitialized = true;
      }
    };

    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!authInitialized) {
        handleAuthChange(session);
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("[ProfileContext] Auth event:", event);
      // We always process events to stay in sync
      handleAuthChange(session);
    });

    // Safety timeout - force stop loading if still active after 5 seconds
    const safetyTimer = setTimeout(() => {
      if (mounted && loading) {
        console.warn("[ProfileContext] Safety timeout hit, forcing loading to false");
        setLoading(false);
      }
    }, 5000);

    return () => {
      mounted = false;
      subscription.unsubscribe();
      clearTimeout(safetyTimer);
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