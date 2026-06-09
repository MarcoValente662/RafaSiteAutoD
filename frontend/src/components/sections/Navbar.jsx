import { useEffect, useState } from "react";
import { BUSINESS, whatsappUrl } from "@/constants/business";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre", id: "sobre" },
  { href: "#servicos", label: "Serviços", id: "servicos" },
  { href: "#galeria", label: "Galeria", id: "galeria" },
  { href: "#depoimentos", label: "Depoimentos", id: "depoimentos" },
  { href: "#faq", label: "FAQ", id: "faq" },
  { href: "#contato", label: "Contacto", id: "contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <a
          href="#top"
          data-testid="logo-link"
          className="font-heading text-lg sm:text-xl tracking-tight flex items-center gap-2 whitespace-nowrap"
        >
          <span className="inline-block w-2 h-2 bg-[#D4AF37] shrink-0" />
          <span className="font-medium">{BUSINESS.name}</span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-${l.id}`}
              className="text-sm text-white/70 hover:text-[#D4AF37] transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-whatsapp-cta"
            className="hidden md:inline-flex btn-gold text-sm whitespace-nowrap"
          >
            Contactar
          </a>
          <button
            data-testid="mobile-menu-toggle"
            className="lg:hidden p-2 text-white"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div data-testid="mobile-menu" className="lg:hidden glass-nav border-t border-white/5">
          <nav className="px-4 sm:px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-[#D4AF37] text-base tracking-wide py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-gold text-sm justify-center mt-2"
            >
              Contactar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
