import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { EVENTS } from "@/data/events";
import { Reveal } from "../site/Reveal";
import { SectionHeading } from "../site/SectionHeading";

export function Events() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-royal-grad" />
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Celebrations"
          title={<>Every Meal Deserves<br /><span className="text-saffron-grad">A Celebration.</span></>}
          description="From mehendi nights to IPL finals — we host the loudest, warmest, most well-fed gatherings in Bhopal."
        />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {EVENTS.map((e, i) => (
            <Reveal key={e.title} delay={(i % 5) * 0.04}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-[color:var(--gold)]/20 bg-[color:var(--royal-deep)]/55 p-6 transition-all duration-500 hover:border-[color:var(--saffron)]/60 hover:bg-[color:var(--royal-soft)]/40">
                <e.icon
                  className="h-7 w-7 text-[color:var(--saffron)] transition-transform duration-500 group-hover:scale-110"
                  strokeWidth={1.8}
                />
                <h3 className="mt-5 font-display text-lg uppercase leading-tight text-[color:var(--cream)]">
                  {e.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[color:var(--cream)]/65">
                  {e.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/celebrations"
            className="btn-shimmer inline-flex items-center gap-2 rounded-full bg-saffron-grad px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--royal-deep)] glow-saffron"
          >
            Plan Your Celebration <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}