import { useFadeIn } from "@/hooks/useFadeIn";

const terms = [
  {
    term: "Produtividade acadêmica",
    desc: "Conjunto de práticas que sustentam a produção contínua de pesquisa científica de qualidade dentro de prazos institucionais.",
  },
  {
    term: "Bloqueio de escrita",
    desc: "Estado de paralisia diante da escrita acadêmica, geralmente associado a perfeccionismo, falta de método ou ausência de estrutura prévia.",
  },
  {
    term: "Cronograma de pesquisa",
    desc: "Planejamento de etapas, prazos e entregáveis de um projeto científico — base operacional de qualquer dissertação ou tese.",
  },
  {
    term: "Escrita acadêmica",
    desc: "Modalidade de escrita técnica baseada em argumentação, evidência e diálogo com a literatura científica da área.",
  },
  {
    term: "Foco na pós-graduação",
    desc: "Capacidade sustentada de atenção em tarefas profundas — leitura crítica, análise de dados e escrita — em meio a múltiplas demandas.",
  },
  {
    term: "Procrastinação acadêmica",
    desc: "Adiamento crônico de tarefas estruturais da pesquisa, com impacto direto no tempo de titulação.",
  },
];

const Glossary = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section
      id="glossario"
      aria-labelledby="glossario-title"
      className="py-14 md:py-16 px-4"
    >
      <div
        ref={ref}
        className={`container mx-auto max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="font-heading text-xs uppercase tracking-wider text-accent mb-3">
          Conceitos
        </p>
        <h2
          id="glossario-title"
          className="font-heading font-bold text-2xl md:text-3xl text-primary mb-3"
        >
          Glossário: termos centrais da produtividade acadêmica
        </h2>
        <p className="font-serif text-base md:text-lg text-muted-foreground mb-10">
          Definições breves dos conceitos mais usados ao longo deste site e do método.
        </p>

        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {terms.map((t) => (
            <div key={t.term}>
              <dt className="font-heading font-bold text-base text-primary mb-1">
                {t.term}
              </dt>
              <dd className="text-sm text-muted-foreground leading-relaxed">
                {t.desc}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Glossary;
