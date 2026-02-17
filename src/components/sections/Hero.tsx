import { Badge } from "@/components/ui/badge";
import { useFadeIn } from "@/hooks/useFadeIn";

const metrics = [
  { value: "8", label: "módulos" },
  { value: "18", label: "obras referenciadas" },
  { value: "200+", label: "pesquisadores citados" },
  { value: "6", label: "perfis acadêmicos" },
];

const Hero = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 px-4">
      <div
        ref={ref}
        className={`container mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <Badge className="bg-primary/10 text-primary border-primary/20 font-heading text-xs mb-6">
          Método PCI
        </Badge>

        <h1 className="font-heading font-extrabold text-3xl md:text-5xl lg:text-6xl leading-tight text-primary max-w-3xl mx-auto mb-6">
          O método científico para{" "}
          <span className="text-accent">pós-graduandos</span> que precisam produzir mais — com saúde
        </h1>

        <p className="font-serif text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Um sistema baseado em evidências que integra produtividade acadêmica, método científico e saúde mental
          em uma estrutura modular e prática.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="font-heading font-bold text-2xl md:text-3xl text-primary">{m.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
