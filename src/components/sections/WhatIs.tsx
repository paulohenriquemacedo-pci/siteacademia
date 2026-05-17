import { useFadeIn } from "@/hooks/useFadeIn";

const WhatIs = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section
      id="o-que-e"
      aria-labelledby="o-que-e-title"
      className="py-14 md:py-20 px-4"
    >
      <article
        ref={ref}
        className={`container mx-auto max-w-3xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="font-heading text-xs uppercase tracking-wider text-accent mb-3">
          O método
        </p>
        <h2
          id="o-que-e-title"
          className="font-heading font-bold text-2xl md:text-3xl text-primary mb-6"
        >
          O que é o Sistema A.C.A.D.E.M.I.A
        </h2>

        <div className="space-y-5 font-serif text-base md:text-lg text-foreground leading-relaxed">
          <p>
            O <strong>Sistema A.C.A.D.E.M.I.A</strong> é um método de{" "}
            <strong>produtividade acadêmica</strong> desenvolvido para a realidade da{" "}
            <strong>pós-graduação brasileira</strong>. Organiza, em 8 pilares interdependentes, os processos
            que sustentam a vida do pesquisador — da avaliação inicial do contexto à entrega final da
            dissertação, tese ou TCC.
          </p>
          <p>
            Diferente de dicas isoladas de produtividade, o sistema integra{" "}
            <strong>cronograma de pesquisa</strong>, ambiente de trabalho, disciplina, eliminação de
            distrações e métricas objetivas de progresso. Cada pilar foi desenhado para responder a um
            problema concreto da rotina acadêmica: <strong>bloqueio de escrita</strong>, falta de foco,
            excesso de leitura sem direção e dificuldade de concluir.
          </p>
        </div>

        <h3 className="font-heading font-bold text-lg text-primary mt-10 mb-3">
          Por que um método específico para pós-graduandos
        </h3>
        <p className="font-serif text-base md:text-lg text-muted-foreground leading-relaxed">
          A escrita acadêmica tem exigências distintas da produção profissional comum: ciclos longos,
          dependência de leitura crítica, revisões iterativas e prazos institucionais. Métodos genéricos
          falham porque ignoram essa estrutura. O Sistema A.C.A.D.E.M.I.A oferece um quadro de referência
          para diagnosticar onde a pesquisa está travada e atuar com método — não com força de vontade.
        </p>

        <h3 className="font-heading font-bold text-lg text-primary mt-10 mb-3">
          Produtividade acadêmica e saúde mental do pesquisador
        </h3>
        <p className="font-serif text-base md:text-lg text-muted-foreground leading-relaxed">
          A pós-graduação brasileira é um dos contextos com maior incidência de{" "}
          <strong>ansiedade, esgotamento e sintomas depressivos</strong>. Boa parte desse sofrimento nasce
          de um ciclo previsível: prazos opacos, ausência de método, culpa difusa e isolamento. O Sistema
          A.C.A.D.E.M.I.A trata produtividade e <strong>saúde mental do pesquisador</strong> como dimensões
          inseparáveis — ao tornar a rotina previsível, reduzir o retrabalho e devolver clareza sobre o
          que está sendo feito, diminui a sobrecarga cognitiva e a sensação crônica de estar atrasado. Não
          substitui acompanhamento psicológico ou psiquiátrico, mas remove parte das causas estruturais
          que alimentam o adoecimento na vida acadêmica.
        </p>
      </article>
    </section>
  );
};

export default WhatIs;
