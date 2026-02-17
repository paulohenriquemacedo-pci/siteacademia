import { useFadeIn } from "@/hooks/useFadeIn";

const stats = [
  { value: "360.648", label: "pós-graduandos matriculados no Brasil", source: "CAPES, 2022", highlight: false },
  { value: "40%", label: "taxa de evasão na pós-graduação stricto sensu", source: "CAPES/MEC", highlight: true },
  { value: "39%", label: "apresentam sintomas de depressão", source: "Evans et al., 2018", highlight: false },
  { value: "6–8 anos", label: "tempo médio para conclusão do doutorado", source: "CGEE, 2019", highlight: false },
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
            <div
              key={s.value}
              className={`bg-background rounded-lg p-6 border text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 2) * 100}ms` }}
            >
              <div className={`font-heading font-bold text-3xl mb-2 ${s.highlight ? "text-accent" : "text-primary"}`}>
                {s.value}
              </div>
              <p className="text-sm text-foreground mb-3">{s.label}</p>
              <p className="text-xs text-muted-foreground italic">Fonte: {s.source}</p>
            </div>
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
