import { Button } from "@/components/ui/button";
import { useFadeIn } from "@/hooks/useFadeIn";

const NextSteps = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="bg-primary py-14 md:py-20 px-4">
      <div ref={ref} className="container mx-auto">
        <h2
          className={`font-heading font-bold text-2xl md:text-3xl text-primary-foreground text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Próximos Passos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Quiz */}
          <div
            className={`bg-white/10 backdrop-blur rounded-lg p-8 text-center border border-white/20 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="text-3xl mb-4">📋</div>
            <h3 className="font-heading font-bold text-xl text-primary-foreground mb-2">Quiz Diagnóstico</h3>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Descubra seu perfil acadêmico e receba recomendações personalizadas.
            </p>
            <p className="text-primary-foreground/50 text-xs mb-6">48 perguntas · 6 perfis · Gratuito</p>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading w-full">
              <a href="https://quiz.sistemaacademia.com.br/" target="_blank" rel="noopener noreferrer">Começar o quiz →</a>
            </Button>
          </div>

          {/* Livro */}
          <div
            className={`bg-white/10 backdrop-blur rounded-lg p-8 text-center border border-white/20 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="text-3xl mb-4">📖</div>
            <h3 className="font-heading font-bold text-xl text-primary-foreground mb-2">O Livro Completo</h3>
            <p className="text-primary-foreground/70 text-sm mb-4">
              O guia definitivo com os 8 módulos, exercícios práticos e referências completas.
            </p>
            <p className="text-primary-foreground/50 text-xs mb-6">392 páginas · 8 módulos · ISBN registrado</p>
            <Button asChild variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-heading w-full">
              <a href="https://pagelivro.sistemaacademia.com.br/" target="_blank" rel="noopener noreferrer">Conheça o livro →</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
