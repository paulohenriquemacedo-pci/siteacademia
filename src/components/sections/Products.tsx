import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useFadeIn } from "@/hooks/useFadeIn";

const products = [
  {
    title: "Pesquisador Produtivo: o Sistema A.C.A.D.E.M.I.A",
    desc: "O guia completo com 8 módulos, exercícios e referências.",
    badge: "Produto Principal",
    featured: true,
    cta: "Adquirir →",
    href: "https://pagelivro.sistemaacademia.com.br/",
  },
  {
    title: "Quiz Diagnóstico",
    desc: "48 perguntas para descobrir seu perfil acadêmico.",
    badge: "Gratuito",
    featured: false,
    cta: "Fazer o quiz →",
    href: "https://quiz.sistemaacademia.com.br/",
  },
  {
    title: "E-book: Escrita Científica",
    desc: "Guia prático para destravar sua escrita acadêmica.",
    cta: "Saiba mais →",
  },
  {
    title: "E-book: Saúde Mental na Pós",
    desc: "Estratégias para preservar o bem-estar durante a pós-graduação.",
    cta: "Saiba mais →",
  },
  {
    title: "Guia de IA para Pesquisadores",
    desc: "Como usar ferramentas de IA de forma ética e produtiva.",
    cta: "Saiba mais →",
  },
  {
    title: "Sprint de 14 Dias",
    desc: "Programa intensivo para retomar o ritmo de produção.",
    cta: "Saiba mais →",
  },
];

const Products = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="produtos" className="py-14 md:py-20 px-4">
      <div ref={ref} className="container mx-auto">
        <h2
          className={`font-heading font-bold text-2xl md:text-3xl text-primary text-center mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Ecossistema de Produtos
        </h2>
        <p
          className={`text-center text-muted-foreground max-w-xl mx-auto mb-12 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Ferramentas complementares para cada etapa da sua jornada acadêmica.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div
              key={p.title}
              className={`rounded-lg border bg-background p-6 flex flex-col transition-all duration-700 ${p.featured ? "border-accent border-2 ring-1 ring-accent/20" : ""} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 2) * 80}ms` }}
            >
              {p.badge && (
                <Badge className={`self-start mb-3 text-xs ${p.featured ? "bg-accent text-accent-foreground" : "bg-secondary text-secondary-foreground"}`}>
                  {p.badge}
                </Badge>
              )}
              <h3 className="font-heading font-bold text-base text-primary mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground flex-1 mb-4">{p.desc}</p>
              <Button asChild variant={p.featured ? "default" : "outline"} size="sm" className={p.featured ? "bg-accent hover:bg-accent/90 text-accent-foreground" : ""}>
                <a href={p.href || "#"} target={p.href ? "_blank" : undefined} rel={p.href ? "noopener noreferrer" : undefined}>{p.cta}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
