import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCcw } from "lucide-react";

interface AdminErrorFallbackProps {
  error?: string;
  resetErrorBoundary?: () => void;
  title?: string;
}

export function AdminErrorFallback({ 
  error = "Ocorreu um erro ao carregar os dados.", 
  resetErrorBoundary,
  title = "Algo deu errado"
}: AdminErrorFallbackProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-6 text-center bg-white rounded-lg border border-red-100 shadow-sm">
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-red-50">
        <AlertCircle className="w-8 h-8 text-red-600" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-600 mb-6 max-w-md">
        {error}
      </p>
      {resetErrorBoundary && (
        <Button 
          onClick={resetErrorBoundary}
          className="flex items-center gap-2"
        >
          <RefreshCcw className="w-4 h-4" />
          Tentar novamente
        </Button>
      )}
    </div>
  );
}
