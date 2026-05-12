import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import book from "@/assets/book.jpg";

export function Lab() {
  return (
    <section id="lab" className="relative py-28 md:py-40 bg-foreground text-background overflow-hidden">
      <div className="blob bg-bluegray w-[40rem] h-[40rem] -top-40 -right-40 opacity-20 animate-float" />
      <div className="container-edit relative">
        <div className="max-w-3xl">
          <Reveal><p className="eyebrow text-background/60">06 — Laboratorio de ideas</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight mt-5">
              Emprendimiento, IA <span className="italic text-beige">y proyectos digitales.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-20 grid md:grid-cols-12 gap-8">
          {/* YouTube */}
          <Reveal className="md:col-span-6">
            <a
              href="https://www.youtube.com/@vibingfreemusic4116"
              target="_blank"
              rel="noreferrer"
              className="group block h-full rounded-2xl border border-background/15 p-8 hover:bg-background/5 transition-colors"
            >
              <p className="eyebrow text-background/60">2021 · YouTube</p>
              <h3 className="font-serif text-3xl mt-3">Vibing Free Music</h3>
              <p className="mt-4 text-background/70 leading-relaxed">
                Canal de Lofi para estudiar y concentrarse. Psicología ambiental aplicada al
                bienestar y la productividad.
              </p>
              <span className="inline-flex items-center gap-2 mt-6 text-sm text-beige underline-grow">
                youtube.com/@vibingfreemusic4116 ↗
              </span>
            </a>
          </Reveal>

          {/* Blog */}
          <Reveal delay={0.1} className="md:col-span-6">
            <a
              href="https://fitmindedformula.blogspot.com/?m=1"
              target="_blank"
              rel="noreferrer"
              className="group block h-full rounded-2xl border border-background/15 p-8 hover:bg-background/5 transition-colors"
            >
              <p className="eyebrow text-background/60">2022 · Blog & afiliación</p>
              <h3 className="font-serif text-3xl mt-3">The Fitness Formula</h3>
              <p className="mt-4 text-background/70 leading-relaxed">
                Más que un blog de fitness: un ecosistema de salud integral con marketing de
                afiliación, psicología del consumidor y nichos digitales.
              </p>
              <span className="inline-flex items-center gap-2 mt-6 text-sm text-beige underline-grow">
                fitmindedformula.blogspot.com ↗
              </span>
            </a>
          </Reveal>

          {/* Book */}
          <Reveal delay={0.15} className="md:col-span-7">
            <a
              href="https://www.amazon.es/dp/B0BX4PKCWT"
              target="_blank"
              rel="noreferrer"
              className="group grid grid-cols-5 gap-6 rounded-2xl bg-background/5 border border-background/15 p-6 md:p-8 hover:bg-background/10 transition-colors"
            >
              <div className="col-span-2 rounded-xl overflow-hidden aspect-[4/5]">
                <img src={book} alt="Libro Swipe Right" loading="lazy" width={1024} height={1280} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="col-span-3 flex flex-col justify-center">
                <p className="eyebrow text-background/60">Libro publicado</p>
                <h3 className="font-serif text-2xl md:text-3xl mt-3">
                  Swipe Right: la evolución del amor en la era digital
                </h3>
                <p className="mt-4 text-sm text-background/70 leading-relaxed">
                  IA, tecnología y relaciones humanas vistas desde la psicología moderna. De idea
                  a producto real publicado.
                </p>
                <span className="mt-5 text-sm text-beige underline-grow">Ver en Amazon ↗</span>
              </div>
            </a>
          </Reveal>

          {/* Identity Lab */}
          <Reveal delay={0.2} className="md:col-span-5">
            <div className="h-full rounded-2xl bg-beige text-foreground p-8 flex flex-col">
              <p className="eyebrow">Actualidad · con mi hermano</p>
              <h3 className="font-serif text-3xl mt-3">Identity Lab</h3>
              <p className="mt-4 text-sm text-foreground/70 leading-relaxed">
                Branding, programación y NFC. Sustituimos el CV tradicional por una huella digital
                única: web-portfolio narrativo, visual e interactivo.
              </p>
              <p className="mt-4 text-sm italic text-bluegray leading-relaxed">
                “No estamos creando webs, estamos construyendo puentes entre el talento y la
                oportunidad.”
              </p>
              <span className="mt-auto pt-6 text-xs uppercase tracking-[0.25em] text-foreground/60">
                Próximamente · landing
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <figure className="mt-24 max-w-3xl">
            <blockquote className="font-serif italic text-2xl md:text-3xl leading-snug text-background/90">
              “La inteligencia emocional es la capacidad de reconocer nuestros propios sentimientos
              y los de los demás.”
            </blockquote>
            <figcaption className="eyebrow text-background/60 mt-5">— Daniel Goleman</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
