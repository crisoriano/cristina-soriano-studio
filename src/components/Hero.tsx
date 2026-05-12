import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import portrait from "@/assets/hero-portrait.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden grain">
      {/* ambient blobs */}
      <div className="blob bg-beige w-[40rem] h-[40rem] -top-40 -left-40 animate-float" />
      <div className="blob bg-bluegray/40 w-[34rem] h-[34rem] top-1/3 -right-40 animate-float" style={{ animationDelay: "-3s" }} />

      <motion.div style={{ y, opacity }} className="relative container-edit pt-32 md:pt-40 pb-20">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-7 order-2 md:order-1">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="eyebrow mb-6"
            >
              Portfolio · Madrid, ES
            </motion.p>
            <h1 className="font-serif text-[2.6rem] sm:text-6xl md:text-7xl leading-[1.02] tracking-tight text-balance">
              <SplitWords text="Cristina" />
              <br />
              <span className="italic text-bluegray"><SplitWords text="Soriano" delay={0.15} /></span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty"
            >
              Optimizando procesos y conectando personas: una visión 360º del marketing y la
              gestión organizacional.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#esencia"
                className="group inline-flex items-center gap-3 bg-foreground text-background px-6 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition"
              >
                Descubrir mi historia
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#contacto" className="text-sm text-muted-foreground underline-grow">
                o saltar a contacto
              </a>
            </motion.div>
          </div>

          <div className="md:col-span-5 order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-glow"
            >
              <img
                src={portrait}
                alt="Retrato de Cristina Soriano"
                width={1024}
                height={1280}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[10px] uppercase tracking-[0.25em] text-background/90">
                <span>Esencia</span>
                <span>2026 / MMXXVI</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] uppercase text-muted-foreground flex flex-col items-center gap-3"
      >
        Scroll
        <span className="block h-10 w-px bg-foreground/40 animate-pulse" />
      </motion.div>
    </section>
  );
}

function SplitWords({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-block">
      {text.split("").map((c, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: delay + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
        >
          {c}
        </motion.span>
      ))}
    </span>
  );
}
