import { useFadeIn } from "@/hooks/useFadeIn";

const WhatIs = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="o-que-e" className="py-20 md:py-28 px-4">
      <div
        ref={ref}
        className={`container mx-auto max-w-3xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-6">
          O que é o Sistema A.C.A.D.E.M.I.A
        </h2>

        <div className="space-y-5 font-serif text-base md:text-lg text-foreground leading-relaxed">
          <p>
            O Sistema A.C.A.D.E.M.I.A é um método de produtividade acadêmica desenvolvido para a realidade da
            pós-graduação brasileira. Ele organiza, em 8 pilares interdependentes, os processos que sustentam
            a vida do pesquisador — da avaliação inicial do contexto à entrega final da dissertação, tese ou TCC.
          </p>
          <p>
            Diferente de dicas isoladas de produtividade, o sistema integra cronograma de pesquisa, ambiente de
            trabalho, disciplina, eliminação de distrações e métricas objetivas de progresso. Cada pilar foi
            desenhado para responder a um problema concreto da rotina acadêmica: bloqueio de escrita, falta de
            foco, excesso de leitura sem direção e dificuldade de concluir.
          </p>
          <p className="text-muted-foreground">
            A proposta é institucional e estrutural: oferecer um quadro de referência para que pesquisadores
            possam diagnosticar onde estão travados e atuar com método — não com força de vontade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIs;
