import { useFadeIn } from "@/hooks/useFadeIn";

const references = [
  "Deci, E. L. & Ryan, R. M. (2000). Self-Determination Theory.",
  "Dweck, C. S. (2006). Mindset: The New Psychology of Success.",
  "Evans, T. M. et al. (2018). Evidence for a mental health crisis in graduate education.",
  "Newport, C. (2016). Deep Work: Rules for Focused Success.",
  "Clear, J. (2018). Atomic Habits.",
  "Csikszentmihalyi, M. (1990). Flow: The Psychology of Optimal Experience.",
  "Covey, S. R. (1989). The 7 Habits of Highly Effective People.",
  "Bandura, A. (1997). Self-Efficacy: The Exercise of Control.",
  "Kahneman, D. (2011). Thinking, Fast and Slow.",
  "Seligman, M. E. P. (2011). Flourish.",
  "Pomodoro Technique — Cirillo, F. (2006).",
  "Swales, J. M. (1990). Genre Analysis.",
  "Severino, A. J. (2007). Metodologia do Trabalho Científico.",
  "Demo, P. (2011). Pesquisa: Princípio Científico e Educativo.",
  "Volpato, G. L. (2015). Ciência: Da Filosofia à Publicação.",
  "Eco, U. (1977). Como se Faz uma Tese.",
  "Marconi, M. A. & Lakatos, E. M. (2003). Fundamentos de Metodologia Científica.",
  "Gil, A. C. (2002). Como Elaborar Projetos de Pesquisa.",
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
          O método é fundamentado em 18+ obras e centenas de pesquisas revisadas por pares.
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
            <p>ISBN: 978-65-00-00000-0 (placeholder)</p>
            <p>CDD: 001.42 | CDU: 001.8</p>
            <p>Editora: Método PCI · Goiânia, GO · 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Science;
