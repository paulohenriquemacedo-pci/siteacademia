import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import logoAcademia from "@/assets/logo-sistema-academia.png";

const navLinks = [
  { label: "O Método", href: "#sistema" },
  { label: "O Problema", href: "#problema" },
  { label: "Base Científica", href: "#ciencia" },
  { label: "Produtos", href: "#produtos" },
  { label: "Sobre", href: "#sobre" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img
            src={logoAcademia}
            alt="Logomarca Sistema A.C.A.D.E.M.I.A."
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading text-sm">
            <a href="#produtos">Conheça o livro →</a>
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-foreground hover:text-accent transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading mt-2">
                <a href="#produtos" onClick={() => setOpen(false)}>Conheça o livro →</a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
