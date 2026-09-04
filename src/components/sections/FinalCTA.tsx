import { useFadeIn } from "@/hooks/useFadeIn";

const FinalCTA = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="bg-primary py-14 md:py-16 px-4">
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
              Pesquisador Produtivo: o Sistema A.C.A.D.E.M.I.A
            </h3>
            <p className="font-serif text-sm text-primary-foreground/80 mb-5">
              Livro-método com 87 páginas e 8 módulos, voltado para mestrandos,
              doutorandos e pesquisadores que enfrentam projetos longos de 2 a
              6 anos. Reúne, em um único sistema, o que normalmente fica
              espalhado em disciplinas, orientações e tentativa-e-erro: como
              estruturar o projeto, organizar a leitura, escrever de forma
              contínua e sustentar o ritmo ao longo de toda a pós-graduação.
            </p>
            <ul className="font-serif text-sm text-primary-foreground/80 space-y-2 mb-6 flex-1">
              <li className="flex gap-2"><span className="text-accent">—</span> Os 8 módulos do Sistema A.C.A.D.E.M.I.A. aplicados na prática</li>
              <li className="flex gap-2"><span className="text-accent">—</span> Rotinas de escrita acadêmica para evitar bloqueio e retrabalho</li>
              <li className="flex gap-2"><span className="text-accent">—</span> Gestão de leitura, fichamento e referencial teórico</li>
              <li className="flex gap-2"><span className="text-accent">—</span> Planejamento de pesquisa de 2 a 6 anos com marcos realistas</li>
              <li className="flex gap-2"><span className="text-accent">—</span> Diálogo produtivo com o orientador e entregas mensuráveis</li>
            </ul>
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
              Quiz do Perfil de Produtividade
            </h3>
            <p className="font-serif text-sm text-primary-foreground/80 mb-5">
              Diagnóstico gratuito construído a partir do Sistema A.C.A.D.E.M.I.A.
              para identificar o padrão comportamental que está gerando muito
              esforço e pouco avanço mensurável na sua pesquisa. Em poucos
              minutos, você responde a perguntas sobre rotina, escrita,
              leitura e relação com o orientador, e recebe um relatório
              personalizado com o seu perfil e os próximos passos práticos.
            </p>
            <ul className="font-serif text-sm text-primary-foreground/80 space-y-2 mb-6 flex-1">
              <li className="flex gap-2"><span className="text-accent">—</span> Identificação do seu perfil de produtividade acadêmica</li>
              <li className="flex gap-2"><span className="text-accent">—</span> Análise dos gargalos de escrita, leitura e planejamento</li>
              <li className="flex gap-2"><span className="text-accent">—</span> Relatório com plano de implementação operacional</li>
              <li className="flex gap-2"><span className="text-accent">—</span> Base metodológica do livro Pesquisador Produtivo (ISBN/CBL)</li>
              <li className="flex gap-2"><span className="text-accent">—</span> Sem diagnóstico clínico: mede padrões, não traços fixos</li>
            </ul>
            <a
              href="https://quiz.sistemaacademia.com.br/"
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
