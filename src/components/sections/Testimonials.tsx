import { useFadeIn } from "@/hooks/useFadeIn";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import juliannaAvatar from "@/assets/testimonials/julianabrandao.png";
import anaAvatar from "@/assets/testimonials/anapaula.png";
import ricardoAvatar from "@/assets/testimonials/ricardosousa.png";
import juliannaScreenshot from "@/assets/testimonials/julianna-screenshot.webp";
import anaScreenshot from "@/assets/testimonials/ana-screenshot.webp";
import ricardoScreenshot from "@/assets/testimonials/ricardo-screenshot.webp";
import janaScreenshot from "@/assets/testimonials/jana-screenshot.webp";

type Testimonial = {
  name: string;
  role: string;
  initials: string;
  avatar?: string | null;
  screenshot?: string | null;
  before: string;
  after: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Julianna Brandão",
    role: "Graduanda em Biologia, Uni-Anhanguera",
    initials: "JB",
    avatar: juliannaAvatar,
    screenshot: juliannaScreenshot,
    before: "Eu não conseguia manter uma rotina de escrita.",
    after: "Consegui organizar minha rotina acadêmica e concluí meu TCC antes do prazo.",
  },
  {
    name: "Ana Paula",
    role: "Mestranda em Economia, UnB",
    initials: "AP",
    avatar: anaAvatar,
    screenshot: anaScreenshot,
    before: "Cada sessão de trabalho era sofrimento.",
    after: "Finalmente produzo mais sem sofrimento!",
  },
  {
    name: "Ricardo Sousa",
    role: "Doutorando em Engenharia de Produtos, UFSC",
    initials: "RS",
    avatar: ricardoAvatar,
    screenshot: ricardoScreenshot,
    before: "Não sabia se o método funcionava na prática.",
    after: "Apliquei o cronograma científico na dissertação e finalmente parei de trabalhar no escuro. Vou aplicar de novo no doutorado.",
  },
  {
    name: "Jana Mara",
    role: "Mestre em Literatura Brasileira, UFBA",
    initials: "JM",
    avatar: null,
    screenshot: janaScreenshot,
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

        <Carousel
          opts={{ align: "start", loop: true }}
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <CarouselContent className="-ml-5">
            {testimonials.map((t) => (
              <CarouselItem key={t.name} className="pl-5 md:basis-1/2">
                <article className="h-full bg-background rounded-lg p-7 border border-border">
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

                  {t.screenshot && (
                    <figure className="mb-5">
                      <img
                        src={t.screenshot}
                        alt={`Print do depoimento de ${t.name}`}
                        loading="lazy"
                        className="w-full rounded-md border border-border"
                        width={338}
                        height={670}
                      />
                      <figcaption className="sr-only">Captura de tela original do depoimento</figcaption>
                    </figure>
                  )}

                  <footer className="pt-4 border-t border-border flex items-center gap-3">
                    {t.avatar ? (
                      <img
                        src={t.avatar}
                        alt={`Foto de ${t.name}`}
                        loading="lazy"
                        className="h-12 w-12 rounded-full object-cover border border-border shrink-0"
                        width={48}
                        height={48}
                      />
                    ) : (
                      <div
                        aria-hidden="true"
                        className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-heading font-bold text-sm shrink-0"
                      >
                        {t.initials}
                      </div>
                    )}
                    <div>
                      <p className="font-heading font-bold text-sm text-primary">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </footer>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-6">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
