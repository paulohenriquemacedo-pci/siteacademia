import { useFadeIn } from "@/hooks/useFadeIn";

const Manifesto = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="sobre" className="bg-primary py-20 md:py-28 px-4">
      <div ref={ref} className="container mx-auto">
        <h2
          className={`font-heading font-bold text-2xl md:text-3xl text-primary-foreground text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Sobre & Manifesto
        </h2>

        {/* Manifesto block */}
        <div
          className={`border-l-4 border-accent bg-white/5 rounded-r-lg p-6 md:p-8 max-w-3xl mx-auto mb-12 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="font-serif text-primary-foreground/90 text-base md:text-lg leading-relaxed italic">
            "Acreditamos que todo pós-graduando merece acesso a um método estruturado, cientificamente fundamentado,
            que respeite sua saúde mental e potencialize sua capacidade de contribuir para o conhecimento humano.
            A academia não precisa ser um ambiente de sofrimento — pode ser um espaço de crescimento, descoberta e realização."
          </p>
        </div>

        {/* Missão */}
        <div
          className={`text-center max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h3 className="font-heading font-bold text-lg text-primary-foreground mb-4">Nossa Missão</h3>
          <p className="text-primary-foreground/70 text-sm mb-8">
            Transformar a experiência da pós-graduação no Brasil através de métodos científicos de produtividade,
            promovendo uma cultura acadêmica mais saudável, produtiva e sustentável.
          </p>

          <div className="text-primary-foreground/40 text-xs space-y-1">
            <p className="font-heading font-semibold">Método PCI LTDA</p>
            <p>Goiânia, GO — Brasil</p>
            <p>© 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
