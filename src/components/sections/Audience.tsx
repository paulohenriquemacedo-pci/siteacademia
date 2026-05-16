import { useFadeIn } from "@/hooks/useFadeIn";
import { Check, X } from "lucide-react";

const forWhom = [
  "Mestrandos que precisam estruturar a dissertação dentro do prazo do programa.",
  "Doutorandos lidando com a complexidade da tese e múltiplas frentes de pesquisa.",
  "Pesquisadores e pós-doutorandos que conciliam pesquisa, ensino e publicações.",
  "Graduandos em TCC que querem concluir o trabalho com método e clareza.",
  "Professores e orientadores interessados em referenciais de produtividade acadêmica.",
  "Pesquisadores que sentem o peso da pós na saúde mental — ansiedade, esgotamento, culpa — e buscam reorganizar a rotina com método.",
];

const notForWhom = [
  "Quem busca um método milagroso ou promessa de resultado imediato.",
  "Quem espera dicas esparsas de estrita acadêmica, um curso motivacional ou conteúdo de hype.",
  "Quem não está disposto a adotar rotinas de trabalho e métricas de acompanhamento.",
  "Quem busca atalhos que comprometam o rigor da pesquisa científica.",
];

const Audience = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section
      id="publico"
      aria-labelledby="publico-title"
      className="bg-gray-section py-20 md:py-28 px-4"
    >
      <div ref={ref} className="container mx-auto">
        <div className="max-w-3xl mb-10">
          <p className="font-heading text-xs uppercase tracking-wider text-accent mb-3">
            Público
          </p>
          <h2
            id="publico-title"
            className="font-heading font-bold text-2xl md:text-3xl text-primary mb-3"
          >
            Para quem é (e para quem não é) o Sistema A.C.A.D.E.M.I.A
          </h2>
          <p className="font-serif text-base md:text-lg text-muted-foreground">
            O método tem um escopo claro. Esta seção delimita os perfis para os quais ele foi desenhado e os
            casos em que não se aplica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className={`bg-background rounded-lg p-7 border border-border transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h3 className="font-heading font-bold text-lg md:text-xl text-primary mb-5">
              Para quem o sistema foi criado
            </h3>
            <ul className="space-y-3">
              {forWhom.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground">
                  <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`bg-background rounded-lg p-7 border border-border transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h3 className="font-heading font-bold text-lg md:text-xl text-primary mb-5">
              Para quem o sistema não é
            </h3>
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
