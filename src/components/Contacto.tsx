import { useState } from "react";
import { Reveal } from "./Reveal";

export function Contacto() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contacto" className="relative py-28 md:py-40">
      <div className="container-edit">
        <Reveal>
          <p className="eyebrow">07 — Contacto</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-serif text-4xl md:text-7xl leading-[1.02] tracking-tight mt-5 max-w-4xl text-balance">
            ¿Hacemos que las cosas <span className="italic text-bluegray">sucedan?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Si has llegado hasta aquí, ya sabes que me muevo entre la estrategia analítica y la
            intuición emocional. Estoy lista para aplicar este bagaje en nuevos retos donde la
            innovación y el factor humano sean la prioridad.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-8">
            <Reveal>
              <ContactRow label="Email" value="cristina.soriano@meycar.es" href="mailto:cristina.soriano@meycar.es" />
            </Reveal>
            <Reveal delay={0.05}>
              <ContactRow label="LinkedIn" value="Cristina Soriano González" href="https://www.linkedin.com/in/cristina-soriano-gonzalez" />
            </Reveal>
            <Reveal delay={0.1}>
              <ContactRow label="Currículum" value="Descargar CV (PDF)" href="/CV_Cristina_Soriano_Gonzalez.pdf" />
            </Reveal>
            <Reveal delay={0.15}>
              <ContactRow label="Ubicación" value="Madrid, España · Disponible para viajar" />
            </Reveal>
          </div>

          <Reveal delay={0.1} className="md:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-2xl border border-border bg-card p-8 md:p-10 space-y-5"
            >
              <Field label="Nombre" name="name" />
              <Field label="Email" name="email" type="email" />
              <Field label="Empresa (opcional)" name="company" />
              <div>
                <label className="eyebrow block mb-2">Mensaje</label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-base resize-none transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 rounded-full text-sm font-medium hover:opacity-90 transition disabled:opacity-60"
              >
                {sent ? "Mensaje enviado ✓" : "Conectemos"}
                {!sent && <span className="transition-transform group-hover:translate-x-1">→</span>}
              </button>
            </form>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-24 font-serif italic text-xl md:text-2xl text-muted-foreground max-w-3xl">
            Sensibilidad humana. Inteligencia estratégica. Capacidad de ejecución real.
          </p>
        </Reveal>
      </div>

      <footer className="mt-24 border-t border-border">
        <div className="container-edit py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Cristina Soriano · Hecho con intención.</span>
          <span className="eyebrow">Madrid · MMXXVI</span>
        </div>
      </footer>
    </section>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = (
    <div className="group border-b border-border pb-5 flex items-baseline justify-between gap-6">
      <span className="eyebrow">{label}</span>
      <span className="font-serif text-xl md:text-2xl text-right group-hover:text-bluegray transition-colors">
        {value}
      </span>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow block mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-base transition-colors"
      />
    </div>
  );
}
