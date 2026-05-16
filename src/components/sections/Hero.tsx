import { Badge } from "@/components/ui/badge";
import { useFadeIn } from "@/hooks/useFadeIn";

const Hero = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4">
      <div
        ref={ref}
        className={`container mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <Badge className="bg-primary/10 text-primary border-primary/20 font-heading text-xs mb-6">
          Método científico de produtividade acadêmica
        </Badge>

        <h1 className="font-heading font-extrabold text-3xl md:text-5xl lg:text-6xl leading-tight text-primary max-w-4xl mx-auto mb-6">
          Sistema A.C.A.D.E.M.I.A: produtividade acadêmica para{" "}
          <span className="text-accent">mestrado, doutorado e TCC</span>
        </h1>

        <p className="font-serif text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Um método estruturado em 8 pilares para pesquisadores brasileiros que precisam organizar a rotina,
          escrever com consistência e concluir trabalhos científicos com mais clareza e menos sobrecarga.
        </p>

        <a
          href="#sistema"
          className="inline-flex items-center gap-2 text-primary font-heading font-semibold text-sm border-b-2 border-accent pb-1 hover:text-accent transition-colors"
        >
          Conheça os módulos do sistema →
        </a>
      </div>
    </section>
  );
};

export default Hero;
