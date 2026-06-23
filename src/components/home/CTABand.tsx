import { Link } from "@tanstack/react-router";
import { ChevronRight, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { Sunburst } from "../ornaments";
import { Reveal } from "../site/Reveal";

export function CTABand() {
  return (
    <section className="relative isolate overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 -z-10 bg-royal-grad" />
      <Sunburst className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[1100px] w-[1100px] -translate-x-1/2 -translate-y-1/2 text-[color:var(--saffron)] opacity-25" />
      <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
        <Reveal>
          <p className="font-slab text-xs uppercase tracking-[0.4em] text-[color:var(--gold)]">
            Because You Deserve It
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display text-[clamp(2.2rem,6vw,4.5rem)] uppercase leading-[0.95] text-[color:var(--cream)]">
            Your Special Moments
            <br />
            <span className="text-saffron-grad">Deserve A Stylish Setting.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/reservation"
              className="btn-shimmer animate-royal-pulse inline-flex items-center gap-2 rounded-full bg-saffron-grad px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--royal-deep)] glow-saffron"
            >
              Reserve Table <ChevronRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${SITE.phoneIntl}`}
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/50 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--cream)] hover:bg-[color:var(--royal-deep)]/60"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}