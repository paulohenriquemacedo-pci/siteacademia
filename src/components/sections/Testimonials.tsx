import { useFadeIn } from "@/hooks/useFadeIn";

const Testimonials = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="bg-gray-section py-20 md:py-28 px-4">
      <div ref={ref} className="container mx-auto">
        <h2
          className={`font-heading font-bold text-2xl md:text-3xl text-primary text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Depoimentos
        </h2>

        <div
          className={`border-2 border-dashed border-border rounded-lg p-12 text-center transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-muted-foreground font-serif italic">
            Esta seção será atualizada com depoimentos reais de pós-graduandos que utilizaram o Sistema A.C.A.D.E.M.I.A.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-4">Em breve</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
