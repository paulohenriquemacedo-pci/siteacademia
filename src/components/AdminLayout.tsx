import { Link, useNavigate, useLocation } from "react-router-dom";
import { useProfile } from "@/hooks/use-profile";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { 
  LayoutDashboard, 
  FileText, 
  Settings, 
  LogOut, 
  Home,
  PlusCircle,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { profile, loading } = useProfile();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    console.log("AdminLayout State:", { profile, loading });
  }, [profile, loading]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  if (loading) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-academy-600 border-t-transparent"></div>
        <p className="text-gray-500 animate-pulse">Carregando painel...</p>
      </div>
    );
  }

  if (!profile && !loading) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4 bg-gray-50">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md w-full mx-4">
          <X className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Acesso Negado</h1>
          <p className="text-gray-600 mb-6">Você precisa estar logado para acessar esta área.</p>
          <Button className="w-full" onClick={() => navigate("/auth")}>Ir para Login</Button>
        </div>
      </div>
    );
  }

  // Fallback para caso profile seja nulo mas ainda estejamos tentando renderizar
  if (!profile) return null;

  // Removida restrição estrita de admin para facilitar o acesso inicial
  // No futuro, você pode reativar isso se tiver múltiplos usuários.

  const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/admin" },
    { label: "Novo Post", icon: PlusCircle, path: "/admin/posts/new" },
    { label: "Ver Site", icon: Home, path: "/" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Sidebar Toggle */}
      <button 
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md lg:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r transition-transform duration-300 transform lg:translate-x-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b">
            <h1 className="text-xl font-bold text-academy-600">Admin Academia</h1>
            <p className="text-xs text-gray-500 mt-1">Bem-vindo, {profile.full_name}</p>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                  location.pathname === item.path 
                    ? "bg-academy-50 text-academy-600" 
                    : "text-gray-600 hover:bg-gray-100"
                )}
                onClick={() => setIsSidebarOpen(false)}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
              onClick={handleLogout}
            >
              <LogOut size={20} className="mr-3" />
              Sair
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
