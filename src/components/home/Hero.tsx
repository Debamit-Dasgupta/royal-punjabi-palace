import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ChevronRight, Star } from "lucide-react";
import heroBg from "@/assets/hero-interior.jpg";
import { DottedFrame, RoyalStar, Sunburst } from "../ornaments";
import { SITE } from "@/lib/site";

const BADGES = ["Family Friendly", "Drive Through", "Dine In", "Delivery"];

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <img
        src={heroBg}
        alt="Royal Punjabi restaurant interior at Shahi Pind, Bhopal"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--royal-deep) 88%, transparent), color-mix(in oklab, var(--royal-deep) 72%, transparent) 45%, color-mix(in oklab, var(--royal-deep) 96%, transparent))",
        }}
      />
      <Sunburst className="pointer-events-none absolute -right-40 -top-40 h-[900px] w-[900px] text-[color:var(--saffron)] opacity-30 animate-slow-spin" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 pb-24 pt-32 sm:px-8 lg:pt-40">
        <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/35 bg-[color:var(--royal-deep)]/40 px-4 py-1.5 backdrop-blur"
            >
              <RoyalStar className="h-3 w-3 text-[color:var(--saffron)]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[color:var(--gold)]">
                Bhopal · Est. Royal Dining
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-7 font-display text-[clamp(2.6rem,7vw,5.5rem)] uppercase leading-[0.95] text-balance text-[color:var(--cream)]"
            >
              Taste Punjab
              <br />
              Like <span className="text-saffron-grad">Royalty.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--cream)]/85 sm:text-lg"
            >
              Authentic Punjabi flavours. Royal hospitality. Celebrations that
              feel like a palace banquet — every single night, in the heart of Bhopal.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/reservation"
                className="btn-shimmer animate-royal-pulse inline-flex items-center gap-2 rounded-full bg-saffron-grad px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--royal-deep)] glow-saffron"
              >
                Reserve Your Table <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/50 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--cream)] backdrop-blur transition-all hover:bg-[color:var(--royal-soft)]/50"
              >
                View Menu
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5 text-[color:var(--gold)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <span className="text-sm font-bold text-[color:var(--cream)]">{SITE.rating}</span>
                <span className="text-xs uppercase tracking-wider text-[color:var(--cream)]/60">
                  · {SITE.reviews}+ reviews
                </span>
              </div>
              <div className="hidden h-4 w-px bg-[color:var(--gold)]/40 md:block" />
              <ul className="flex flex-wrap gap-2">
                {BADGES.map((b) => (
                  <li
                    key={b}
                    className="rounded-full border border-[color:var(--gold)]/30 bg-[color:var(--royal-deep)]/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--cream)]/85 backdrop-blur"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative hidden lg:col-span-4 lg:block"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
              <Sunburst className="absolute inset-0 text-[color:var(--saffron)] opacity-40" />
              <DottedFrame className="absolute inset-3 text-[color:var(--gold)]" />
              <div className="absolute inset-8 grid place-items-center text-center">
                <div>
                  <div className="font-slab text-[10px] uppercase tracking-[0.4em] text-[color:var(--cream)]">
                    Shahi Pind
                  </div>
                  <div className="mt-3 font-display text-5xl leading-none text-[color:var(--saffron)]">
                    523+
                  </div>
                  <div className="mt-3 font-slab text-xs uppercase tracking-[0.3em] text-[color:var(--cream)]/85">
                    Royal Memories<br />Made Every Week
                  </div>
                  <div className="mt-5 flex justify-center gap-1 text-[color:var(--gold)]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{
          background: "linear-gradient(180deg, transparent, var(--royal))",
        }}
      />
    </section>
  );
}