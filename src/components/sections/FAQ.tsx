import { useFadeIn } from "@/hooks/useFadeIn";

const faqs = [
  {
    q: "O que é o Sistema A.C.A.D.E.M.I.A?",
    a: "É um método de produtividade acadêmica estruturado em 8 pilares — Avaliação, Cronograma, Ambiente, Disciplina, Eliminação, Metrificação, Integração e Aceleração — voltado para a realidade da pós-graduação brasileira.",
  },
  {
    q: "Para quem o Sistema A.C.A.D.E.M.I.A foi criado?",
    a: "Para mestrandos, doutorandos, pesquisadores e graduandos em TCC. Também é útil para professores e orientadores que acompanham trajetórias acadêmicas.",
  },
  {
    q: "O Sistema A.C.A.D.E.M.I.A serve para TCC, dissertação e tese?",
    a: "Sim. Os pilares se aplicam a qualquer trabalho científico de longa duração, ajustando apenas a escala de cronograma e a profundidade exigida em cada nível.",
  },
  {
    q: "O que diferencia o Sistema A.C.A.D.E.M.I.A de dicas genéricas de produtividade?",
    a: "Dicas genéricas tratam sintomas isolados. O Sistema A.C.A.D.E.M.I.A oferece um quadro estrutural que conecta diagnóstico, rotina, ambiente, métricas e fluxo de escrita acadêmica em um único modelo de referência.",
  },
  {
    q: "Como o Sistema A.C.A.D.E.M.I.A ajuda na escrita acadêmica?",
    a: "Ataca o bloqueio de escrita pela base: organiza leitura, fichamento e revisão em um fluxo integrado, define metas mensuráveis e estabelece rotinas que reduzem a dependência de motivação.",
  },
  {
    q: "O Sistema A.C.A.D.E.M.I.A é baseado em qual lógica?",
    a: "Em uma lógica científica e estrutural: parte do diagnóstico do contexto, propõe intervenções com critérios objetivos e usa métricas simples para avaliar progresso e ajustar o caminho.",
  },
];

const FAQ = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-gray-section py-20 md:py-28 px-4"
    >
      <div
        ref={ref}
        className={`container mx-auto max-w-3xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="font-heading text-xs uppercase tracking-wider text-accent mb-3">
          FAQ
        </p>
        <h2
          id="faq-title"
          className="font-heading font-bold text-2xl md:text-3xl text-primary mb-3"
        >
          Perguntas frequentes sobre o Sistema A.C.A.D.E.M.I.A
        </h2>
        <p className="font-serif text-base text-muted-foreground mb-10">
          Respostas curtas sobre o método, sua aplicação na pós-graduação e seus limites.
        </p>

        <dl className="w-full space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-border pb-6 last:border-b-0">
              <dt className="font-heading font-semibold text-base text-primary mb-2">
                {f.q}
              </dt>
              <dd className="font-serif text-base text-muted-foreground leading-relaxed">
                {f.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FAQ;
