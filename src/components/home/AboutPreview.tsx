import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import feast from "@/assets/feast-flatlay.jpg";
import { Reveal } from "../site/Reveal";
import { JharokhaDivider, OrnateFrame } from "../ornaments";

export function AboutPreview() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <OrnateFrame className="relative aspect-square w-full overflow-hidden rounded-3xl border border-[color:var(--gold)]/30">
            <img
              src={feast}
              alt="Punjabi royal feast at Shahi Pind"
              loading="lazy"
              width={1600}
              height={1600}
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(80% 60% at 50% 100%, transparent, color-mix(in oklab, var(--royal-deep) 70%, transparent))",
              }}
            />
          </OrnateFrame>
        </Reveal>

        <div>
          <Reveal>
            <JharokhaDivider label="Our Story" className="justify-start" />
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-4xl uppercase leading-tight text-[color:var(--cream)] sm:text-5xl">
              The Royal Taste of <span className="text-saffron-grad">Punjab.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-[color:var(--cream)]/80">
              Shahi Pind was born from a simple, stubborn belief — that Punjab's food deserves
              the same ceremony as Punjab's weddings. We grind our own masalas before sunrise.
              We knead our dough by hand. We season our tandoors until they hum.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-base leading-relaxed text-[color:var(--cream)]/75">
              Then we wrap it all in the warmth of a Punjabi household — the loud welcomes, the
              "thoda aur khao", the way Bauji insists on paying. That's not a dining concept.
              That's a homecoming.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[color:var(--saffron)] hover:text-[color:var(--gold)]"
            >
              Discover Our Heritage <ChevronRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}