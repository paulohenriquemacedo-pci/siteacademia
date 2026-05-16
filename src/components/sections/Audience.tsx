import { useFadeIn } from "@/hooks/useFadeIn";
import { Check, X } from "lucide-react";

const forWhom = [
  "Mestrandos que precisam estruturar a dissertação dentro do prazo do programa.",
  "Doutorandos lidando com a complexidade da tese e a sobrecarga de múltiplas frentes.",
  "Pesquisadores e pós-doutorandos que conciliam pesquisa, ensino e publicações.",
  "Graduandos em TCC que querem concluir o trabalho com método e clareza.",
  "Professores e orientadores interessados em referenciais de produtividade acadêmica.",
];

const notForWhom = [
  "Quem busca um método milagroso ou promessa de resultado imediato.",
  "Quem espera uma página de vendas ou um curso de motivação genérica.",
  "Quem não está disposto a adotar rotinas e métricas de acompanhamento.",
  "Quem busca atalhos que comprometam o rigor da pesquisa científica.",
];

const Audience = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="publico" className="bg-gray-section py-20 md:py-28 px-4">
      <div ref={ref} className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Para quem é */}
          <div
            className={`bg-background rounded-lg p-7 border border-border transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="font-heading font-bold text-xl md:text-2xl text-primary mb-5">
              Para quem o sistema foi criado
            </h2>
            <ul className="space-y-3">
              {forWhom.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground">
                  <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Para quem não é */}
          <div
            className={`bg-background rounded-lg p-7 border border-border transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="font-heading font-bold text-xl md:text-2xl text-primary mb-5">
              Para quem o sistema não é
            </h2>
            <ul className="space-y-3">
              {notForWhom.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground">
                  <X className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
