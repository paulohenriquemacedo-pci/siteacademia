import { useFadeIn } from "@/hooks/useFadeIn";

const pillars = [
  {
    letter: "A",
    title: "Avaliação",
    desc: "Diagnóstico do estado atual da pesquisa, da rotina e dos recursos disponíveis antes de qualquer ação.",
  },
  {
    letter: "C",
    title: "Cronograma",
    desc: "Construção de um cronograma realista, com etapas, prazos e dependências da dissertação, tese ou TCC.",
  },
  {
    letter: "A",
    title: "Ambiente",
    desc: "Organização do ambiente físico e digital de trabalho para reduzir fricção e sustentar sessões de estudo.",
  },
  {
    letter: "D",
    title: "Disciplina",
    desc: "Rotinas e rituais de trabalho que substituem a dependência de motivação por estrutura previsível.",
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
    <section id="sistema" className="py-20 md:py-28 px-4">
      <div ref={ref} className="container mx-auto">
        <div className="max-w-3xl mb-12">
          <h2
            className={`font-heading font-bold text-2xl md:text-3xl text-primary mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Como o sistema funciona: os 8 pilares
          </h2>
          <p
            className={`font-serif text-base md:text-lg text-muted-foreground transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Cada letra do acrônimo A.C.A.D.E.M.I.A corresponde a um pilar do método. Os pilares são
            interdependentes e devem ser trabalhados de forma articulada.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p, i) => (
            <div
              key={`${i}-${p.title}`}
              className={`rounded-lg border border-border border-t-4 border-t-primary bg-background p-5 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 2) * 70}ms` }}
            >
              <div className="font-heading font-bold text-xl text-primary mb-1">
                {p.letter} — {p.title}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default System;
