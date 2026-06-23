import { Flame, Leaf } from "lucide-react";
import { SIGNATURE_DISHES, type Dish } from "@/data/dishes";
import { Reveal } from "../site/Reveal";
import { SectionHeading } from "../site/SectionHeading";
import { RoyalBadge } from "../ornaments";

function SpiceLevel({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Spice level ${n} of 3`}>
      {[0, 1, 2].map((i) => (
        <Flame
          key={i}
          className={`h-3.5 w-3.5 ${i < n ? "text-[color:var(--saffron)] fill-[color:var(--saffron)]" : "text-[color:var(--cream)]/25"}`}
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

function DishCard({ dish }: { dish: Dish }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-[color:var(--gold)]/25 bg-[color:var(--royal-soft)]/40 transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--saffron)]/60 hover:glow-warm">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={dish.img}
          alt={dish.name}
          loading="lazy"
          width={900}
          height={675}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 50%, color-mix(in oklab, var(--saffron) 35%, transparent), transparent 75%)",
          }}
        />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span
            className={`grid h-7 w-7 place-items-center rounded-full ring-1 ${
              dish.veg
                ? "bg-emerald-500/20 text-emerald-300 ring-emerald-400/50"
                : "bg-rose-600/25 text-rose-200 ring-rose-400/50"
            }`}
            aria-label={dish.veg ? "Vegetarian" : "Non-vegetarian"}
          >
            <Leaf className="h-3.5 w-3.5" />
          </span>
          {dish.badge && <RoyalBadge>{dish.badge}</RoyalBadge>}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl uppercase leading-tight text-[color:var(--cream)]">
            {dish.name}
          </h3>
          <SpiceLevel n={dish.spice} />
        </div>
        <p className="mt-2 text-sm leading-relaxed text-[color:var(--cream)]/70">
          {dish.desc}
        </p>
      </div>
    </article>
  );
}

export function SignatureDishes() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Royal Signatures"
          title={<>Punjab On <span className="text-saffron-grad">Every Plate.</span></>}
          description="Eight dishes that built Shahi Pind's reputation. Order one, order all — there are no wrong answers."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SIGNATURE_DISHES.map((d, i) => (
            <Reveal key={d.name} delay={(i % 4) * 0.05}>
              <DishCard dish={d} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export { DishCard };