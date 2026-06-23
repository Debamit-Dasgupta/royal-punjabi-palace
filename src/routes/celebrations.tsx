import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import family from "@/assets/celebration-family.jpg";
import { EVENTS } from "@/data/events";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { BrassCard } from "@/components/site/BrassCard";
import { JharokhaDivider, OrnateFrame } from "@/components/ornaments";
import { CTABand } from "@/components/home/CTABand";

export const Route = createFileRoute("/celebrations")({
  head: () => ({
    meta: [
      { title: "Celebrations & Events — Shahi Pind · Bhopal" },
      { name: "description", content: "Birthdays, anniversaries, corporate dinners, IPL nights, festivals and weddings — hosted with royal Punjabi flair at Shahi Pind, Bhopal." },
      { property: "og:title", content: "Celebrations & Events — Shahi Pind" },
      { property: "og:description", content: "Turnkey royal hospitality for Bhopal's biggest moments." },
      { property: "og:url", content: "/celebrations" },
    ],
    links: [{ rel: "canonical", href: "/celebrations" }],
  }),
  component: CelebrationsPage,
});

function CelebrationsPage() {
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Reveal><JharokhaDivider label="Celebrations & Events" className="justify-start" /></Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-[clamp(2.4rem,6vw,5rem)] uppercase leading-[1] text-[color:var(--cream)]">
                Celebrate <span className="text-saffron-grad">Bigger.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--cream)]/80">
                From intimate cake-cuttings to 200-guest sangeets, Shahi Pind is built to host the moments that matter. Private cabins, dedicated stewards, custom menus, and the loudest cheer in Bhopal.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <Link to="/reservation" className="btn-shimmer animate-royal-pulse mt-8 inline-flex items-center gap-2 rounded-full bg-saffron-grad px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--royal-deep)] glow-saffron">
                Book Your Celebration <ChevronRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <Reveal>
            <OrnateFrame className="aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[color:var(--gold)]/30">
              <img src={family} alt="Family celebration at Shahi Pind" className="h-full w-full object-cover" loading="lazy" />
            </OrnateFrame>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionHeading eyebrow="Occasions We Host" title={<>Every Reason To <span className="text-saffron-grad">Gather.</span></>} />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EVENTS.map((e, i) => (
              <Reveal key={e.title} delay={(i % 3) * 0.05}>
                <BrassCard className="h-full">
                  <e.icon className="h-8 w-8 text-[color:var(--saffron)]" />
                  <h3 className="mt-5 font-display text-xl uppercase text-[color:var(--cream)]">{e.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--cream)]/72">{e.desc}</p>
                </BrassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}