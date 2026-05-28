import { Navigate, useLocation } from "react-router-dom";
import { useProfile } from "@/hooks/use-profile";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { profile, loading } = useProfile();
  const location = useLocation();

  console.log("[ProtectedRoute] Current state:", { loading, profile: profile?.id, path: location.pathname });

  if (loading) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4 bg-gray-50">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-academy-600 border-t-transparent"></div>
        <p className="text-gray-500 font-medium">Verificando acesso...</p>
        <p className="text-xs text-gray-400">Isso não deve demorar mais que alguns segundos.</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 text-academy-600 hover:underline text-sm"
        >
          Recarregar página
        </button>
      </div>
    );
  }

  if (!profile) {
    console.log("[ProtectedRoute] No profile found, redirecting to /auth");
    // Redireciona para login mas salva a localização original para voltar depois
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  console.log("[ProtectedRoute] Access granted for:", profile.id);
  return <>{children}</>;
}
