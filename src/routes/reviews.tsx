import { createFileRoute } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";
import { REVIEWS } from "@/data/reviews";
import { SITE } from "@/lib/site";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { JharokhaDivider } from "@/components/ornaments";
import { CTABand } from "@/components/home/CTABand";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Shahi Pind · 4.7★ on Google" },
      { name: "description", content: "523+ Google reviews. Read why Bhopal calls Shahi Pind their royal celebration destination." },
      { property: "og:title", content: "Reviews — Shahi Pind" },
      { property: "og:description", content: "4.7★ · 523+ reviews. Loved by Bhopal." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <section className="pt-40 pb-12">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <Reveal><JharokhaDivider label="Royal Approvals" /></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[clamp(2.4rem,6vw,5rem)] uppercase leading-[1] text-[color:var(--cream)]">
              Loved By <span className="text-saffron-grad">Bhopal.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 inline-flex items-center gap-4 rounded-full border border-[color:var(--gold)]/30 bg-[color:var(--royal-soft)]/40 px-6 py-3">
              <span className="font-display text-3xl text-saffron-grad">{SITE.rating}</span>
              <div className="flex gap-0.5 text-[color:var(--gold)]">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" strokeWidth={0} />)}
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--cream)]/80">{SITE.reviews}+ Google Reviews</span>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={(i % 3) * 0.05}>
                <article className="flex h-full flex-col rounded-2xl border border-[color:var(--gold)]/25 bg-[color:var(--royal-soft)]/40 p-6">
                  <Quote className="h-7 w-7 text-[color:var(--saffron)]/60" />
                  <p className="mt-4 flex-1 font-slab text-base leading-relaxed text-[color:var(--cream)]">"{r.text}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-saffron-grad text-sm font-bold uppercase text-[color:var(--royal-deep)]">
                      {r.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[color:var(--cream)]">{r.name}</div>
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-[color:var(--cream)]/55">
                        <div className="flex gap-0.5 text-[color:var(--gold)]">
                          {Array.from({ length: r.rating }).map((_, k) => <Star key={k} className="h-3 w-3 fill-current" strokeWidth={0} />)}
                        </div>
                        <span>· {r.date}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}