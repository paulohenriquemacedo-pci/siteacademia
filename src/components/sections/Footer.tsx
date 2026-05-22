import { Link } from "react-router-dom";
import logoAcademia from "@/assets/logo-sistema-academia.png";

const footerNav = [
  { label: "O que é", href: "#o-que-e" },
  { label: "Problemas", href: "#problemas" },
  { label: "Os 8 pilares", href: "#sistema" },
  { label: "Para quem é", href: "#publico" },
  { label: "FAQ", href: "#faq" },
];

const Footer = () => (
  <footer className="bg-navy-dark py-12 md:py-16 px-4">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {/* Brand */}
        <div>
          <img
            src={logoAcademia}
            alt="Logomarca Sistema A.C.A.D.E.M.I.A."
            className="h-24 w-auto mb-3 brightness-0 invert"
          />
          <p className="text-primary-foreground/50 text-xs">
            Método de produtividade sustentável para a pós-graduação brasileira.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-heading font-bold text-xs text-primary-foreground/70 uppercase tracking-wider mb-3">Navegação</h4>
          <nav className="flex flex-col gap-2">
            {footerNav.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-bold text-xs text-primary-foreground/70 uppercase tracking-wider mb-3">Contato</h4>
          <div className="text-sm text-primary-foreground/50 space-y-2">
            <p>contato@sistemaacademia.com.br</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-xs text-primary-foreground/30">© 2025 Método PCI LTDA. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <Link to="/termos" className="text-xs text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors">Termos de Uso</Link>
          <Link to="/privacidade" className="text-xs text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors">Privacidade</Link>
          <Link to="/admin" className="text-xs text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors">Admin</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
