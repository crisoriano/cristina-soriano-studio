import { Reveal } from "./Reveal";

export function SectionTitle({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <p className="eyebrow mb-5">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.15}>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
