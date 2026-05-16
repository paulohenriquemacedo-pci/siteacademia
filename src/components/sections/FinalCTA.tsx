import { useFadeIn } from "@/hooks/useFadeIn";

const FinalCTA = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="bg-primary py-20 md:py-24 px-4">
      <div
        ref={ref}
        className={`container mx-auto max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
            Explore o sistema
          </h2>
          <p className="font-serif text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Dois caminhos para conhecer o método na prática.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Livro */}
          <article className="bg-primary-foreground/5 border border-primary-foreground/15 rounded-lg p-6 md:p-8 flex flex-col">
            <span className="font-heading text-xs uppercase tracking-wider text-accent mb-3">
              Livro
            </span>
            <h3 className="font-heading font-semibold text-xl text-primary-foreground mb-3">
              Pesquisador Produtivo
            </h3>
            <p className="font-serif text-sm text-primary-foreground/80 mb-6 flex-1">
              87 páginas e 8 módulos com o sistema completo para projetos
              acadêmicos de 2 a 6 anos. Para quem quer sair do improviso e
              estruturar a pesquisa do início ao fim.
            </p>
            <a
              href="https://livro.sistemaacademia.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-heading font-semibold text-sm px-5 py-3 rounded hover:bg-accent/90 transition-colors self-start"
            >
              Conhecer o livro →
            </a>
          </article>

          {/* Quiz */}
          <article className="bg-primary-foreground/5 border border-primary-foreground/15 rounded-lg p-6 md:p-8 flex flex-col">
            <span className="font-heading text-xs uppercase tracking-wider text-accent mb-3">
              Diagnóstico
            </span>
            <h3 className="font-heading font-semibold text-xl text-primary-foreground mb-3">
              Quiz do Perfil de Improdutividade
            </h3>
            <p className="font-serif text-sm text-primary-foreground/80 mb-6 flex-1">
              Mapeie em poucos minutos o padrão comportamental que está
              gerando esforço alto e avanço baixo na sua pesquisa, e receba
              um relatório com plano de implementação.
            </p>
            <a
              href="https://quizlp.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary font-heading font-semibold text-sm px-5 py-3 rounded hover:bg-primary-foreground/90 transition-colors self-start"
            >
              Fazer o quiz →
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
