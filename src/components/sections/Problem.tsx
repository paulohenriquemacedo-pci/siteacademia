import { useFadeIn } from "@/hooks/useFadeIn";

const problems = [
  {
    title: "Bloqueio de escrita",
    desc: "A dificuldade recorrente de iniciar ou avançar na escrita acadêmica, mesmo com leitura e dados acumulados.",
  },
  {
    title: "Procrastinação acadêmica",
    desc: "O adiamento sistemático de tarefas estruturais da pesquisa, geralmente associado a perfeccionismo e ansiedade.",
  },
  {
    title: "Desorganização do cronograma",
    desc: "Rotina reativa, sem visibilidade clara de prazos, etapas da pesquisa e dependências entre tarefas.",
  },
  {
    title: "Falta de foco",
    desc: "Dispersão entre múltiplas leituras, projetos paralelos e demandas externas que fragmentam o tempo do pesquisador.",
  },
  {
    title: "Sobrecarga mental",
    desc: "Acúmulo de demandas sem critério de priorização, levando à fadiga cognitiva e queda na qualidade do trabalho.",
  },
  {
    title: "Dificuldade de concluir",
    desc: "Trabalhos de TCC, dissertação ou tese que se arrastam por meses ou anos sem encaminhamento para a defesa.",
  },
];

const Problem = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="problemas" className="bg-gray-section py-20 md:py-28 px-4">
      <div ref={ref} className="container mx-auto">
        <div className="max-w-3xl mb-12">
          <h2
            className={`font-heading font-bold text-2xl md:text-3xl text-primary mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Quais problemas o sistema resolve
          </h2>
          <p
            className={`font-serif text-base md:text-lg text-muted-foreground transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            O Sistema A.C.A.D.E.M.I.A atua sobre os obstáculos mais frequentes na trajetória de mestrandos,
            doutorandos e graduandos em TCC.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className={`bg-background rounded-lg p-6 border border-border transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 2) * 80}ms` }}
            >
              <h3 className="font-heading font-bold text-base text-primary mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
