import { useEffect, useState } from "react";

const links = [
  { href: "#esencia", label: "Esencia" },
  { href: "#raices", label: "Raíces" },
  { href: "#equilibrio", label: "Equilibrio" },
  { href: "#vocacion", label: "Vocación" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#lab", label: "Laboratorio" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="container-edit flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="font-serif text-lg tracking-tight">
          Cristina <span className="italic text-muted-foreground">Soriano</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="underline-grow hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center gap-2 text-sm bg-foreground text-background px-4 py-2 rounded-full hover:opacity-90 transition"
        >
          Conectemos →
        </a>
        <button
          aria-label="Abrir menú"
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="block w-6 h-px bg-foreground mb-1.5" />
          <span className="block w-6 h-px bg-foreground" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container-edit py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
