import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import creative from "@/assets/creative.jpg";

const sports = ["Equitación", "Voleibol", "Pádel", "Gimnasio"];
const social = ["Festivales", "Música en vivo", "Viajes", "Conversaciones largas"];
const refugio = ["Lectura", "Pintura", "Composición musical", "Introspección"];

export function Equilibrio() {
  return (
    <section id="equilibrio" className="relative py-28 md:py-40">
      <div className="container-edit">
        <SectionTitle
          eyebrow="03 — Equilibrio vital"
          title={<>Creatividad, emociones <span className="italic text-bluegray">y movimiento.</span></>}
          intro="Tres planos que se alimentan entre sí: lo social como combustible, el arte como refugio, el deporte como disciplina."
        />

        <div className="mt-16 grid md:grid-cols-12 gap-6">
          <Reveal className="md:col-span-7 md:row-span-2">
            <div className="relative aspect-[4/5] md:aspect-auto md:h-full rounded-2xl overflow-hidden shadow-soft">
              <img src={creative} alt="Refugio creativo: arte, música y lectura" loading="lazy" width={1200} height={1200} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-foreground/70 to-transparent text-background">
                <p className="eyebrow text-background/80">Refugio creativo</p>
                <p className="font-serif text-2xl mt-1">Arte que limpia el polvo de la vida cotidiana.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-5">
            <Card title="Vida social & viajes" tags={social} />
          </Reveal>
          <Reveal delay={0.2} className="md:col-span-5">
            <Card title="Disciplina deportiva" tags={sports} />
          </Reveal>
          <Reveal delay={0.3} className="md:col-span-5">
            <Card title="Refugio creativo" tags={refugio} />
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <figure className="mt-20 max-w-3xl mx-auto text-center">
            <blockquote className="font-serif italic text-2xl md:text-3xl leading-snug">
              “El arte limpia del alma el polvo de la vida cotidiana.”
            </blockquote>
            <figcaption className="eyebrow mt-5">— Pablo Picasso</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

function Card({ title, tags }: { title: string; tags: string[] }) {
  return (
    <div className="h-full rounded-2xl border border-border bg-card p-7 hover:shadow-soft transition-shadow">
      <h3 className="font-serif text-2xl">{title}</h3>
      <ul className="mt-5 flex flex-wrap gap-2">
        {tags.map((t) => (
          <li key={t} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
