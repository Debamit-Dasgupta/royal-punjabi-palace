import { JharokhaDivider } from "../ornaments";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <Reveal>
          <JharokhaDivider label={eyebrow} className={isCenter ? "" : "justify-start"} />
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-6 font-display text-4xl uppercase leading-[1.05] text-[color:var(--cream)] sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-base leading-relaxed text-[color:var(--cream)]/75 sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}