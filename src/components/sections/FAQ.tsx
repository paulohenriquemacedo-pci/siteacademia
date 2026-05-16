import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useFadeIn } from "@/hooks/useFadeIn";

const faqs = [
  {
    q: "O que é o Sistema A.C.A.D.E.M.I.A?",
    a: "É um método de produtividade acadêmica estruturado em 8 pilares — Avaliação, Cronograma, Ambiente, Disciplina, Eliminação, Metrificação, Integração e Aceleração — voltado para a realidade da pós-graduação brasileira.",
  },
  {
    q: "Para quem ele foi criado?",
    a: "Para mestrandos, doutorandos, pesquisadores e graduandos em TCC. Também é útil para professores e orientadores que acompanham trajetórias acadêmicas.",
  },
  {
    q: "Ele serve para TCC, dissertação e tese?",
    a: "Sim. Os pilares se aplicam a qualquer trabalho científico de longa duração, ajustando apenas a escala de cronograma e profundidade exigida em cada nível.",
  },
  {
    q: "O que diferencia esse sistema de dicas genéricas de produtividade?",
    a: "Dicas genéricas tratam sintomas isolados. O Sistema A.C.A.D.E.M.I.A oferece um quadro estrutural que conecta diagnóstico, rotina, ambiente, métricas e fluxo de escrita em um único modelo de referência.",
  },
  {
    q: "Como ele ajuda na escrita acadêmica?",
    a: "Ataca o bloqueio de escrita pela base: organiza leitura, fichamento e revisão em um fluxo integrado, define metas mensuráveis e estabelece rotinas que reduzem a dependência de motivação.",
  },
  {
    q: "O sistema é baseado em qual lógica?",
    a: "Em uma lógica científica e estrutural: parte do diagnóstico do contexto, propõe intervenções com critérios objetivos e usa métricas simples para avaliar progresso e ajustar o caminho.",
  },
];

const FAQ = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="faq" className="py-20 md:py-28 px-4">
      <div
        ref={ref}
        className={`container mx-auto max-w-3xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-3">
          Perguntas frequentes
        </h2>
        <p className="font-serif text-base text-muted-foreground mb-10">
          Respostas curtas sobre o método, sua aplicação e seus limites.
        </p>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-heading font-semibold text-base text-primary">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="font-serif text-base text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
