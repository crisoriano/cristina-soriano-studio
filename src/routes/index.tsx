import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Esencia } from "@/components/Esencia";
import { Raices } from "@/components/Raices";
import { Equilibrio } from "@/components/Equilibrio";
import { Vocacion } from "@/components/Vocacion";
import { Experiencia } from "@/components/Experiencia";
import { Lab } from "@/components/Lab";
import { Contacto } from "@/components/Contacto";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cristina Soriano — Portfolio · Marketing, Psicología y Gestión 360º" },
      {
        name: "description",
        content:
          "Portfolio personal de Cristina Soriano. Marketing digital, psicología y gestión organizacional. Una visión 360º donde la estrategia se encuentra con el factor humano.",
      },
      { property: "og:title", content: "Cristina Soriano — Portfolio" },
      {
        property: "og:description",
        content:
          "Optimizando procesos y conectando personas. Portfolio premium de marketing, psicología y gestión 360º.",
      },
      { property: "og:type", content: "profile" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Esencia />
      <Raices />
      <Equilibrio />
      <Vocacion />
      <Experiencia />
      <Lab />
      <Contacto />
    </main>
  );
}
