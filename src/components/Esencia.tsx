import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const pillars = [
  {
    n: "01",
    title: "Análisis & emoción",
    body: "Mente analítica con observación atenta del comportamiento humano. Empatía e intensidad emocional como herramientas de trabajo.",
  },
  {
    n: "02",
    title: "Rol social",
    body: "Conectar personas, integrar grupos, escuchar de verdad. Un interés genuino por entender al otro antes que por convencerle.",
  },
  {
    n: "03",
    title: "Creatividad & estructura",
    body: "Organizada y perfeccionista, con pensamiento creativo y una obsesión positiva por los detalles que hacen la diferencia.",
  },
  {
    n: "04",
    title: "Filosofía vital",
    body: "Mentalidad optimista, orientación a soluciones, curiosidad y ganas de experimentar con visión expansiva.",
  },
];

export function Esencia() {
  return (
    <section id="esencia" className="relative py-28 md:py-40">
      <div className="container-edit">
        <SectionTitle
          eyebrow="01 — Quién soy"
          title={<>Esencia <span className="italic text-bluegray">y energía.</span></>}
          intro="Madrileña, vibrante, extrovertida y con una energía inagotable. No paso por la vida: la siento con intensidad, la analizo y la transformo en acción."
        />

        <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08} className="bg-background p-8 md:p-10 group hover:bg-accent transition-colors duration-500">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-serif text-3xl text-bluegray">{p.n}</span>
                <h3 className="font-serif text-2xl md:text-3xl">{p.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{p.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <figure className="mt-20 md:mt-28 max-w-3xl mx-auto text-center">
            <blockquote className="font-serif italic text-2xl md:text-4xl leading-snug text-balance">
              “La curiosa paradoja es que cuando me acepto tal como soy, entonces puedo cambiar.”
            </blockquote>
            <figcaption className="eyebrow mt-6">— Carl Rogers</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
