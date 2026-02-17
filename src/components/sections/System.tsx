import { useFadeIn } from "@/hooks/useFadeIn";

const letters = [
  { letter: "A", title: "Avaliação", desc: "Diagnóstico do perfil acadêmico com quiz de 48 perguntas.", featured: true },
  { letter: "C", title: "Conhecimento", desc: "Fundamentos de metodologia científica e epistemologia." },
  { letter: "A", title: "Ambiente", desc: "Organização do espaço físico e digital de trabalho." },
  { letter: "D", title: "Desempenho", desc: "Técnicas de produtividade baseadas em evidências." },
  { letter: "E", title: "Escrita", desc: "Métodos para escrita acadêmica fluida e consistente." },
  { letter: "M", title: "Mental", desc: "Estratégias de saúde mental e prevenção de burnout." },
  { letter: "I", title: "Integração", desc: "Conexão entre vida pessoal e carreira acadêmica." },
  { letter: "A", title: "Ação", desc: "Plano de implementação prática e acompanhamento." },
];

const pillars = [
  { icon: "🏗️", title: "Estrutura", desc: "Organização modular que se adapta ao seu ritmo e contexto acadêmico." },
  { icon: "🔬", title: "Método Científico", desc: "Cada recomendação é baseada em literatura científica revisada por pares." },
  { icon: "🧠", title: "Saúde Mental", desc: "Integração de bem-estar psicológico como pilar central da produtividade." },
];

const System = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="sistema" className="py-20 md:py-28 px-4">
      <div ref={ref} className="container mx-auto">
        <h2
          className={`font-heading font-bold text-2xl md:text-3xl text-primary text-center mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          O Sistema A.C.A.D.E.M.I.A.
        </h2>
        <p
          className={`text-center text-muted-foreground max-w-xl mx-auto mb-12 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          8 módulos integrados que cobrem todas as dimensões da vida acadêmica.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {letters.map((l, i) => (
            <div
              key={`${l.letter}-${l.title}`}
              className={`rounded-lg border bg-background p-5 transition-all duration-700 ${l.featured ? "border-t-4 border-t-accent" : "border-t-4 border-t-primary"} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 2) * 80}ms` }}
            >
              <div className={`font-heading font-bold text-xl mb-1 ${l.featured ? "text-accent" : "text-primary"}`}>
                {l.letter} — {l.title}
              </div>
              <p className="text-sm text-muted-foreground">{l.desc}</p>
              {l.featured && (
                <a href="#" className="text-accent text-sm font-medium mt-3 inline-block hover:underline">
                  Fazer o quiz →
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`text-center p-6 rounded-lg bg-gray-section transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 10) * 80}ms` }}
            >
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="font-heading font-bold text-lg text-primary mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default System;
