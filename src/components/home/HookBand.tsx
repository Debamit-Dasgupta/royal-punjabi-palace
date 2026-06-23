import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { DottedFrame, JharokhaDivider, Sunburst } from "../ornaments";
import { Reveal } from "../site/Reveal";

export function HookBand() {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-royal-grad" />
      <Sunburst className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[1100px] w-[1100px] -translate-x-1/2 -translate-y-1/2 text-[color:var(--saffron)] opacity-25" />

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8">
        <DottedFrame className="absolute inset-0 -m-2 text-[color:var(--gold)]/70" />
        <div className="relative px-4 py-12 text-center sm:px-12 sm:py-20">
          <Reveal>
            <JharokhaDivider label="The Shahi Pind Promise" />
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-8 font-display text-[clamp(2.4rem,7vw,5rem)] uppercase leading-[0.95] text-[color:var(--cream)]">
              Not Just Dinner.
              <br />
              <span className="text-saffron-grad">A Royal Experience.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-7 max-w-2xl text-base text-[color:var(--cream)]/80 sm:text-lg">
              From quiet birthdays to thunderous wedding nights, every table at Shahi Pind is set
              to turn ordinary moments into stories your family will tell for decades.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              to="/reservation"
              className="btn-shimmer mt-10 inline-flex items-center gap-2 rounded-full bg-saffron-grad px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--royal-deep)] glow-saffron"
            >
              Book Your Royal Table <ChevronRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}