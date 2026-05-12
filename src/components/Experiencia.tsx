import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const exps = [
  {
    year: "2021",
    company: "Centro de MENAs",
    role: "Acompañamiento socioeducativo",
    text: "Trabajo con niñas marroquíes. Inteligencia emocional aplicada, talleres sociales e impacto humano real. La empatía como metodología.",
    tone: "humano",
  },
  {
    year: "2022",
    company: "Deloitte",
    role: "Recursos Humanos · Big Four",
    text: "Talento, procesos y entorno corporativo de alto rendimiento. Mirada estructural a la organización a gran escala.",
    link: "https://www.deloitte.com/es/es.html",
    tone: "corporativo",
  },
  {
    year: "Actualidad",
    company: "Meycar Automotive · MEYLE A.G.",
    role: "Gestión 360º & optimización",
    text: "Liderazgo, visión estratégica e innovación operativa. Polivalencia entre RRHH, operaciones y análisis empresarial.",
    link: "https://www.meyle.com/es",
    tone: "estratégico",
  },
];

const meycarBlocks = [
  {
    title: "RRHH & talento",
    items: ["Selección de personal", "Formación continua", "Resolución de conflictos", "Gestión humana"],
  },
  {
    title: "Operaciones & administración",
    items: ["Pedidos y logística", "Inventarios", "Automatización", "Eficiencia operativa"],
  },
  {
    title: "Visión empresarial",
    items: ["Análisis de costes", "Optimización", "Mejora continua", "Diseño de procesos"],
  },
];

export function Experiencia() {
  return (
    <section id="experiencia" className="relative py-28 md:py-40">
      <div className="container-edit">
        <SectionTitle
          eyebrow="05 — Experiencia profesional"
          title={<>Entre la estructura corporativa <span className="italic text-bluegray">y el impacto humano.</span></>}
        />

        <div className="mt-16 space-y-px bg-border rounded-2xl overflow-hidden">
          {exps.map((e, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <article className="grid md:grid-cols-12 gap-6 bg-background p-8 md:p-10 group hover:bg-accent transition-colors duration-500">
                <div className="md:col-span-2">
                  <p className="eyebrow">{e.year}</p>
                </div>
                <div className="md:col-span-7">
                  <h3 className="font-serif text-2xl md:text-3xl">{e.company}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.role}</p>
                  <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">{e.text}</p>
                  {e.link && (
                    <a href={e.link} target="_blank" rel="noreferrer" className="inline-block mt-4 text-sm underline-grow">
                      Visitar ↗
                    </a>
                  )}
                </div>
                <div className="md:col-span-3 flex md:justify-end items-start">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-bluegray border border-bluegray/40 rounded-full px-3 py-1.5">
                    {e.tone}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Meycar deep dive */}
        <div className="mt-24">
          <Reveal>
            <p className="eyebrow">Caso actual · Meycar</p>
            <h3 className="font-serif text-3xl md:text-5xl mt-4 max-w-3xl">
              Gestión 360º <span className="italic text-bluegray">y optimización empresarial.</span>
            </h3>
            <p className="mt-5 max-w-2xl text-muted-foreground">
              Liderazgo, visión estratégica, innovación y polivalencia. Tres frentes que conviven
              en el día a día.
            </p>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {meycarBlocks.map((b, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="h-full rounded-2xl bg-card border border-border p-7">
                  <h4 className="font-serif text-xl">{b.title}</h4>
                  <ul className="mt-5 space-y-2.5">
                    {b.items.map((it) => (
                      <li key={it} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="mt-2 w-1 h-1 rounded-full bg-bluegray" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 rounded-2xl gradient-warm p-8 md:p-12 border border-border">
              <p className="eyebrow">Caso de éxito</p>
              <h4 className="font-serif text-2xl md:text-3xl mt-3 max-w-3xl">
                Contratación de Cristian, formador técnico de la empresa.
              </h4>
              <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
                Un proceso de selección en el que el ajuste cultural y la visión a largo plazo
                pesaron tanto como el dossier técnico. Resultado: incorporación clave que hoy
                forma al resto del equipo.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
