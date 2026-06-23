import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { REVIEWS } from "@/data/reviews";
import { Reveal } from "../site/Reveal";
import { SectionHeading } from "../site/SectionHeading";
import { SITE } from "@/lib/site";

export function Reviews() {
  const [i, setI] = useState(0);
  const r = REVIEWS[i];

  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Royal Approvals"
          title={<>Loved By <span className="text-saffron-grad">Bhopal.</span></>}
        />
        <Reveal>
          <div className="mx-auto mt-14 grid max-w-5xl items-center gap-8 rounded-3xl border border-[color:var(--gold)]/25 bg-[color:var(--royal-soft)]/40 p-8 sm:p-12 lg:grid-cols-[280px_1fr]">
            <div className="text-center lg:border-r lg:border-[color:var(--gold)]/30 lg:pr-8 lg:text-left">
              <div className="font-display text-6xl text-saffron-grad leading-none">{SITE.rating}</div>
              <div className="mt-2 flex justify-center gap-0.5 text-[color:var(--gold)] lg:justify-start">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-5 w-5 fill-current" strokeWidth={0} />
                ))}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.25em] text-[color:var(--cream)]/70">
                {SITE.reviews}+ Google Reviews
              </div>
            </div>
            <div className="relative min-h-[200px]">
              <Quote className="absolute -top-2 left-0 h-10 w-10 text-[color:var(--saffron)]/30" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="pl-10 font-slab text-lg leading-relaxed text-[color:var(--cream)] sm:text-xl">
                    "{r.text}"
                  </p>
                  <div className="mt-6 flex items-center gap-3 pl-10">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-saffron-grad text-sm font-bold uppercase text-[color:var(--royal-deep)]">
                      {r.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[color:var(--cream)]">{r.name}</div>
                      <div className="text-[11px] uppercase tracking-wider text-[color:var(--cream)]/55">
                        {r.city} · {r.date}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="mt-8 flex justify-end gap-2 pl-10">
                <button
                  type="button"
                  aria-label="Previous review"
                  onClick={() => setI((p) => (p - 1 + REVIEWS.length) % REVIEWS.length)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--gold)]/40 text-[color:var(--cream)] hover:bg-[color:var(--royal-deep)]/60"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next review"
                  onClick={() => setI((p) => (p + 1) % REVIEWS.length)}
                  className="grid h-10 w-10 place-items-center rounded-full bg-saffron-grad text-[color:var(--royal-deep)]"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}