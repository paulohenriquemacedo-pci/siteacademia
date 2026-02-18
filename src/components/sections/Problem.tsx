import { useFadeIn } from "@/hooks/useFadeIn";
import { useCountUp } from "@/hooks/useCountUp";

// Separate counter component so each card has its own animation
const AnimatedStat = ({
  stat,
  index,
  isVisible,
}: {
  stat: (typeof stats)[0];
  index: number;
  isVisible: boolean;
}) => {
  const count = useCountUp(stat.countEnd, stat.duration, stat.countStart, isVisible);

  const display = stat.format(count);

  return (
    <div
      className={`bg-background rounded-lg p-6 border text-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${(index + 2) * 100}ms` }}
    >
      <div
        className={`font-heading font-bold text-3xl mb-2 tabular-nums ${
          stat.highlight ? "text-accent" : "text-primary"
        }`}
      >
        {display}
      </div>
      <p className="text-sm text-foreground mb-3">{stat.label}</p>
      <p className="text-xs text-muted-foreground italic">Fonte: {stat.source}</p>
    </div>
  );
};

const stats = [
  {
    countStart: 300000,
    countEnd: 360648,
    duration: 2000,
    format: (v: number) => v.toLocaleString("pt-BR"),
    label: "pós-graduandos matriculados no Brasil",
    source: "CAPES, 2022",
    highlight: false,
  },
  {
    countStart: 0,
    countEnd: 40,
    duration: 1400,
    format: (v: number) => `${v}%`,
    label: "taxa de evasão na pós-graduação stricto sensu",
    source: "CAPES/MEC",
    highlight: true,
  },
  {
    countStart: 0,
    countEnd: 39,
    duration: 1400,
    format: (v: number) => `${v}%`,
    label: "apresentam sintomas de depressão",
    source: "Evans et al., 2018",
    highlight: false,
  },
  {
    countStart: 6,
    countEnd: 8,
    duration: 1000,
    format: (v: number) => (v === 8 ? "6–8 anos" : `${v} anos`),
    label: "tempo médio para conclusão do doutorado",
    source: "CGEE, 2019",
    highlight: false,
  },
];

const Problem = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="problema" className="bg-gray-section py-20 md:py-28 px-4">
      <div ref={ref} className="container mx-auto">
        <h2
          className={`font-heading font-bold text-2xl md:text-3xl text-primary text-center mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          O Cenário
        </h2>
        <p
          className={`text-center text-muted-foreground max-w-xl mx-auto mb-12 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          A pós-graduação brasileira enfrenta uma crise silenciosa de saúde mental e produtividade.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((s, i) => (
            <AnimatedStat key={s.countEnd} stat={s} index={i} isVisible={isVisible} />
          ))}
        </div>

        <p
          className={`font-serif text-base md:text-lg text-muted-foreground max-w-3xl mx-auto text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Esses números revelam que o problema não é falta de inteligência ou esforço — é falta de método e suporte estrutural.
          O Sistema A.C.A.D.E.M.I.A. foi criado para preencher essa lacuna.
        </p>
      </div>
    </section>
  );
};

export default Problem;
