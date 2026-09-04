import { useFadeIn } from "@/hooks/useFadeIn";

const references = [
  "Newport, C. (2018). Deep Work. Alta Books.",
  "Kahneman, D. (2012). Rápido e Devagar. Objetiva.",
  "Duckworth, A. (2016). Grit. Intrínseca.",
  "Clear, J. (2019). Hábitos Atômicos. Sextante.",
  "Dweck, C. S. (2017). Mindset. Objetiva.",
  "Eco, U. (2014). Como se Faz uma Tese. Perspectiva.",
  "McKeown, G. (2021). Essencialismo. Sextante.",
  "Pink, D. H. (2010). Drive. Sextante.",
  "Allen, D. (2016). A Arte de Fazer Acontecer (GTD). Sextante.",
  "Goldratt, E. (2014). A Meta. Nobel.",
  "…e outras 8 obras — lista completa no livro.",
];

const Science = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="ciencia" className="bg-gray-section py-14 md:py-20 px-4">
      <div ref={ref} className="container mx-auto">
        <h2
          className={`font-heading font-bold text-2xl md:text-3xl text-primary text-center mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Base Científica
        </h2>
        <p
          className={`text-center text-muted-foreground max-w-xl mx-auto mb-12 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          O método é fundamentado em 18 obras de referência, num ciclo prático de diagnóstico, planejamento e ação.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
          {references.map((r, i) => (
            <div
              key={i}
              className={`bg-background rounded border p-3 text-xs text-muted-foreground font-serif transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: `${Math.min(i * 50, 600)}ms` }}
            >
              {r}
            </div>
          ))}
        </div>

        {/* Catalogação */}
        <div
          className={`bg-background border rounded-lg p-6 max-w-xl mx-auto text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h3 className="font-heading font-bold text-sm text-primary mb-3">Dados de Catalogação</h3>
          <div className="text-xs text-muted-foreground space-y-1 font-mono">
            <p>ISBN 978-65-989051-0-1</p>
            <p>Catalogação CIP — Câmara Brasileira do Livro</p>
            <p>CDD-001.42 (Metodologia de Pesquisa Científica)</p>
            <p>Editora: Método PCI · Goiânia, GO · 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Science;
