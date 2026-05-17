import { useFadeIn } from "@/hooks/useFadeIn";

const pillars = [
  {
    letter: "A",
    title: "Avaliação",
    desc: "Diagnóstico do estado atual da pesquisa, da rotina e dos recursos disponíveis antes de qualquer intervenção.",
  },
  {
    letter: "C",
    title: "Cronograma",
    desc: "Construção de um cronograma de pesquisa realista, com etapas, prazos e dependências da dissertação, tese ou TCC.",
  },
  {
    letter: "A",
    title: "Ambiente",
    desc: "Organização do ambiente físico e digital de trabalho para reduzir fricção e sustentar sessões de escrita acadêmica.",
  },
  {
    letter: "D",
    title: "Disciplina",
    desc: "Rotinas e rituais de trabalho que substituem a dependência de motivação por uma estrutura previsível.",
  },
  {
    letter: "E",
    title: "Eliminação",
    desc: "Identificação e remoção sistemática de distrações, tarefas de baixo valor e leituras dispersivas.",
  },
  {
    letter: "M",
    title: "Metrificação",
    desc: "Métricas simples de progresso — palavras escritas, blocos concluídos, horas de foco — para decidir com dados.",
  },
  {
    letter: "I",
    title: "Integração",
    desc: "Integração entre leitura, fichamento, escrita e revisão em um fluxo único, sem retrabalho.",
  },
  {
    letter: "A",
    title: "Aceleração",
    desc: "Aplicação de alavancas avançadas para encurtar prazos sem perda de rigor científico nas etapas finais.",
  },
];

const System = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section
      id="sistema"
      aria-labelledby="sistema-title"
      className="py-14 md:py-20 px-4"
    >
      <div ref={ref} className="container mx-auto">
        <div className="max-w-3xl mb-12">
          <p className="font-heading text-xs uppercase tracking-wider text-accent mb-3">
            Estrutura
          </p>
          <h2
            id="sistema-title"
            className={`font-heading font-bold text-2xl md:text-3xl text-primary mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Como o Sistema A.C.A.D.E.M.I.A funciona: os 8 pilares
          </h2>
          <p
            className={`font-serif text-base md:text-lg text-muted-foreground transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Cada letra do acrônimo A.C.A.D.E.M.I.A corresponde a um pilar do método. Os pilares são
            interdependentes e devem ser trabalhados de forma articulada ao longo da pesquisa.
          </p>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none">
          {pillars.map((p, i) => (
            <li
              key={`${i}-${p.title}`}
              className={`rounded-lg border border-border border-t-4 border-t-primary bg-background p-5 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 2) * 70}ms` }}
            >
              <div className="flex items-baseline gap-2 mb-2">
                <h3 className="font-heading font-bold text-lg text-primary">
                  {p.letter} — {p.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </li>
          ))}
        </ol>

        <p className="font-serif text-sm text-muted-foreground italic max-w-3xl mt-10">
          Os pilares formam um ciclo: o diagnóstico orienta o cronograma, que organiza o ambiente; a
          disciplina sustenta a rotina, a eliminação protege o foco, a metrificação valida o progresso e a
          integração conecta tudo ao fluxo de escrita acadêmica — até a aceleração final.
        </p>
      </div>
    </section>
  );
};

export default System;
