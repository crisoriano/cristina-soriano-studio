import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import idaho from "@/assets/idaho.jpg";

const timeline = [
  { year: "Verano 2016", label: "Madrid", text: "Maleta hecha, despedidas y un billete de ida hacia lo desconocido." },
  { year: "Otoño 2016", label: "Idaho, USA", text: "Nueva familia, nuevo idioma, nuevo invierno. Aprender a empezar de cero." },
  { year: "Primavera 2017", label: "Crecimiento", text: "Independencia, red de apoyo construida desde la nada y mente abierta al mundo." },
];

export function Raices() {
  return (
    <section id="raices" className="relative py-28 md:py-40 bg-secondary">
      <div className="container-edit">
        <SectionTitle
          eyebrow="02 — Raíces & adaptabilidad"
          title={<>El año que <span className="italic text-bluegray">lo cambió todo.</span></>}
          intro="2016. Un año entero en Idaho. Adaptación cultural, resiliencia y la certeza de que se puede construir hogar en cualquier rincón del planeta."
        />

        <div className="mt-16 grid md:grid-cols-12 gap-10 items-start">
          <Reveal className="md:col-span-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft">
              <img src={idaho} alt="Paisaje de Idaho al atardecer" loading="lazy" width={1600} height={1024} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase text-background/90 bg-foreground/40 backdrop-blur px-3 py-1.5 rounded-full">
                Madrid → Idaho
              </div>
            </div>
          </Reveal>

          <div className="md:col-span-6">
            <ol className="relative border-l border-border pl-8 space-y-10">
              {timeline.map((t, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <li className="relative">
                    <span className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-bluegray ring-4 ring-secondary" />
                    <p className="eyebrow">{t.year}</p>
                    <h3 className="font-serif text-2xl mt-2">{t.label}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{t.text}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-20 max-w-3xl font-serif italic text-2xl md:text-3xl leading-snug">
            “Aprendí que soy capaz de construir una vida y una red de apoyo en cualquier lugar del
            mundo.”
          </p>
        </Reveal>
      </div>
    </section>
  );
}
