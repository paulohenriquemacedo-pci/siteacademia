import { Navigate, useLocation } from "react-router-dom";
import { useProfile } from "@/hooks/use-profile";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { profile, loading } = useProfile();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4 bg-gray-50">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-academy-600 border-t-transparent"></div>
        <p className="text-gray-500 font-medium">Verificando acesso...</p>
      </div>
    );
  }

  if (!profile) {
    // Redireciona para login mas salva a localização original para voltar depois
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
