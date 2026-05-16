import { useFadeIn } from "@/hooks/useFadeIn";

const problems = [
  {
    title: "Bloqueio de escrita",
    desc: "Dificuldade recorrente de iniciar ou avançar na escrita acadêmica, mesmo com leitura e dados acumulados.",
  },
  {
    title: "Procrastinação acadêmica",
    desc: "Adiamento sistemático de tarefas estruturais da pesquisa, geralmente associado a perfeccionismo e ansiedade.",
  },
  {
    title: "Desorganização do cronograma de pesquisa",
    desc: "Rotina reativa, sem visibilidade clara de prazos, etapas e dependências entre as tarefas do projeto.",
  },
  {
    title: "Falta de foco na pós-graduação",
    desc: "Dispersão entre múltiplas leituras, projetos paralelos e demandas externas que fragmentam o tempo do pesquisador.",
  },
  {
    title: "Sobrecarga mental",
    desc: "Acúmulo de demandas sem critério de priorização, levando à fadiga cognitiva e queda na qualidade do trabalho.",
  },
  {
    title: "Dificuldade de concluir TCC, dissertação ou tese",
    desc: "Trabalhos científicos que se arrastam por meses ou anos sem encaminhamento claro para a defesa.",
  },
];

const Problem = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section
      id="problemas"
      aria-labelledby="problemas-title"
      className="bg-gray-section py-20 md:py-28 px-4"
    >
      <div ref={ref} className="container mx-auto">
        <div className="max-w-3xl mb-12">
          <p className="font-heading text-xs uppercase tracking-wider text-accent mb-3">
            Aplicação
          </p>
          <h2
            id="problemas-title"
            className={`font-heading font-bold text-2xl md:text-3xl text-primary mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Problemas que o Sistema A.C.A.D.E.M.I.A resolve
          </h2>
          <p
            className={`font-serif text-base md:text-lg text-muted-foreground transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            O método atua sobre os obstáculos mais frequentes na trajetória de mestrandos, doutorandos,
            pesquisadores e graduandos em TCC.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 list-none">
          {problems.map((p, i) => (
            <li
              key={p.title}
              className={`bg-background rounded-lg p-6 border border-border transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 2) * 80}ms` }}
            >
              <h3 className="font-heading font-bold text-base text-primary mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Problem;
