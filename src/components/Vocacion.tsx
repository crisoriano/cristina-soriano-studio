import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const milestones = [
  {
    year: "2017 — 2021",
    title: "Psicología · La ciencia del apoyo",
    text: "Una elección del corazón. El mundo de la empresa me atraía, pero necesitaba entender el porqué de las personas. Especialización en psicología laboral y social.",
  },
  {
    year: "2024 — 2025",
    title: "Máster en Marketing Digital · ESIC",
    text: "Si la psicología enseñó el porqué, ESIC enseñó el cómo conectar en el ecosistema digital. Estrategia, analítica data-driven y customer journey.",
    link: "https://www.esic.edu/",
  },
];

const focus = [
  { t: "Estrategia & visión de negocio", d: "El marketing como palanca de crecimiento alineada con objetivos financieros y operativos." },
  { t: "Analítica data-driven", d: "Validar hipótesis psicológicas con datos. Convertir métricas en decisiones." },
  { t: "Customer journey & UX", d: "Procesos cognitivos aplicados al viaje del cliente. Cada touchpoint, fluido y humano." },
];

const certs = [
  { t: "IA Generativa: ChatGPT & Copilot", s: "Optimización y automatización creativa.", h: "Liberar tiempo de lo mecánico para lo humano." },
  { t: "Nóminas, S.S. y Contratación", s: "Ciclo administrativo y legal del empleado.", h: "Garantizar transparencia y tranquilidad." },
  { t: "Dirección de RRHH", s: "Visión estratégica del capital humano.", h: "Construir culturas donde las personas florecen." },
  { t: "Microsoft Office 365", s: "Gestión avanzada de datos y colaboración.", h: "Estructura y claridad en la comunicación." },
  { t: "Inglés Avanzado · C1", s: "Inmersión total en Idaho, USA.", h: "Conectar con personas y mercados globales." },
  { t: "Movilidad & Logística", s: "Carné B y vehículo propio.", h: "Disponibilidad total para nuevos retos." },
];

export function Vocacion() {
  return (
    <section id="vocacion" className="relative py-28 md:py-40 bg-secondary">
      <div className="container-edit">
        <SectionTitle
          eyebrow="04 — Vocación académica"
          title={<>Psicología con <span className="italic text-bluegray">mentalidad empresarial.</span></>}
          intro="Mi camino no fue lineal, pero sí muy consciente. Una fusión entre comprensión humana profunda y visión empresarial estratégica."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-10">
          {milestones.map((m, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="rounded-2xl bg-background p-8 md:p-10 h-full border border-border">
                <p className="eyebrow">{m.year}</p>
                <h3 className="font-serif text-2xl md:text-3xl mt-3">{m.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{m.text}</p>
                {m.link && (
                  <a href={m.link} target="_blank" rel="noreferrer" className="inline-block mt-5 text-sm underline-grow">
                    esic.edu ↗
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <Reveal>
            <h3 className="font-serif text-2xl md:text-3xl mb-8">Enfoque del máster</h3>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {focus.map((f, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="rounded-2xl bg-background p-7 h-full border border-border">
                  <h4 className="font-serif text-xl">{f.t}</h4>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <Reveal>
            <h3 className="font-serif text-2xl md:text-3xl mb-8">Cursos & certificaciones</h3>
          </Reveal>
          <div className="rounded-2xl border border-border bg-background overflow-hidden">
            <div className="hidden md:grid md:grid-cols-12 px-6 py-4 text-[10px] tracking-[0.25em] uppercase text-muted-foreground border-b border-border">
              <div className="col-span-5">Curso</div>
              <div className="col-span-4">Enfoque estratégico</div>
              <div className="col-span-3">Valor humanista</div>
            </div>
            {certs.map((c, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className="grid md:grid-cols-12 px-6 py-5 border-b border-border last:border-0 hover:bg-accent transition-colors">
                  <div className="md:col-span-5 font-serif text-lg">{c.t}</div>
                  <div className="md:col-span-4 text-sm text-muted-foreground mt-2 md:mt-0">{c.s}</div>
                  <div className="md:col-span-3 text-sm italic text-bluegray mt-2 md:mt-0">{c.h}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
