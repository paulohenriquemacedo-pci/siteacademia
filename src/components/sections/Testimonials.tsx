import { useFadeIn } from "@/hooks/useFadeIn";

const testimonials = [
  {
    name: "Julianna Brandão",
    role: "Graduanda em Biologia, Uni-Anhanguera",
    before: "Eu não conseguia manter uma rotina de escrita.",
    after: "Consegui organizar minha rotina acadêmica e concluí meu TCC antes do prazo.",
  },
  {
    name: "Ana Paula",
    role: "Mestranda em Economia, UnB",
    before: "Cada sessão de trabalho era sofrimento.",
    after: "Finalmente produzo mais sem sofrimento!",
  },
  {
    name: "Ricardo Sousa",
    role: "Doutorando em Engenharia de Produtos, UFSC",
    before: "Não sabia se o método funcionava na prática.",
    after: "Tive a sorte de participar do grupo de teste e apliquei na dissertação.",
  },
  {
    name: "Jana Mara",
    role: "Mestre em Literatura Brasileira, UFBA",
    before: "Sentia que nunca ia terminar.",
    after: "O sistema me deu clareza para finalizar minha dissertação com confiança.",
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section
      id="depoimentos"
      aria-labelledby="depoimentos-title"
      className="py-14 md:py-20 px-4"
    >
      <div ref={ref} className="container mx-auto">
        <div className="max-w-3xl mb-12">
          <p className="font-heading text-xs uppercase tracking-wider text-accent mb-3">
            Depoimentos
          </p>
          <h2
            id="depoimentos-title"
            className="font-heading font-bold text-2xl md:text-3xl text-primary mb-3"
          >
            O que pesquisadores estão dizendo
          </h2>
          <p className="font-serif text-base md:text-lg text-muted-foreground">
            Relatos de graduandos, mestrandos e doutorandos brasileiros que aplicaram o Sistema A.C.A.D.E.M.I.A
            em sua rotina de pesquisa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className={`bg-background rounded-lg p-7 border border-border transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="space-y-4 mb-5">
                <div>
                  <p className="font-heading text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Antes
                  </p>
                  <p className="font-serif text-base text-foreground leading-relaxed">
                    “{t.before}”
                  </p>
                </div>
                <div>
                  <p className="font-heading text-xs uppercase tracking-wider text-accent mb-1">
                    Depois
                  </p>
                  <p className="font-serif text-base text-foreground leading-relaxed">
                    “{t.after}”
                  </p>
                </div>
              </div>
              <footer className="pt-4 border-t border-border">
                <p className="font-heading font-bold text-sm text-primary">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
