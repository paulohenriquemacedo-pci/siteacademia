import { useFadeIn } from "@/hooks/useFadeIn";

const FinalCTA = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="bg-primary py-20 md:py-24 px-4">
      <div
        ref={ref}
        className={`container mx-auto max-w-2xl text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
          Explore o sistema
        </h2>
        <p className="font-serif text-base md:text-lg text-primary-foreground/80 mb-8">
          Conheça a estrutura completa dos 8 pilares e entenda como o método se aplica à sua etapa acadêmica.
        </p>
        <a
          href="#sistema"
          className="inline-flex items-center gap-2 text-primary-foreground font-heading font-semibold text-sm border-b-2 border-accent pb-1 hover:text-accent transition-colors"
        >
          Saiba mais sobre o método →
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
