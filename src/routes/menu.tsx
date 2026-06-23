import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Flame, Leaf, Search } from "lucide-react";
import { CATEGORIES, MENU, type MenuCategory } from "@/data/menu";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { JharokhaDivider, RoyalBadge } from "@/components/ornaments";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Shahi Pind · Royal Punjabi · Bhopal" },
      { name: "description", content: "Explore Shahi Pind's full menu — Punjabi specials, tandoor, biryanis, breads, Indo-Chinese, and royal desserts." },
      { property: "og:title", content: "Menu — Shahi Pind" },
      { property: "og:description", content: "Signature Punjabi dishes, tandoor specials and biryani — full Shahi Pind menu." },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function SpiceLevel({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Spice ${n} of 3`}>
      {[0, 1, 2].map((i) => (
        <Flame key={i} className={`h-3 w-3 ${i < n ? "text-[color:var(--saffron)] fill-[color:var(--saffron)]" : "text-[color:var(--cream)]/25"}`} strokeWidth={0} />
      ))}
    </div>
  );
}

function MenuPage() {
  const [cat, setCat] = useState<MenuCategory | "All">("All");
  const [veg, setVeg] = useState<"all" | "veg" | "nonveg">("all");
  const [q, setQ] = useState("");

  const items = useMemo(() => {
    return MENU.filter((m) => {
      if (cat !== "All" && m.category !== cat) return false;
      if (veg === "veg" && !m.veg) return false;
      if (veg === "nonveg" && m.veg) return false;
      if (q && !`${m.name} ${m.desc}`.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [cat, veg, q]);

  return (
    <>
      <section className="pt-40 pb-12">
        <div className="mx-auto max-w-7xl px-6 text-center sm:px-8">
          <Reveal><JharokhaDivider label="A La Carte" /></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[clamp(2.4rem,6vw,5rem)] uppercase leading-[1] text-[color:var(--cream)]">
              The Royal <span className="text-saffron-grad">Menu.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-base text-[color:var(--cream)]/80">
              Hand-pounded masalas, charcoal tandoors, recipes carried for three generations.
              Prices in INR. ₹400 – ₹1600 average per person.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="sticky top-20 z-20 -mx-2 mb-10 rounded-2xl border border-[color:var(--gold)]/25 bg-[color:var(--royal-deep)]/80 px-4 py-4 backdrop-blur-xl">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--cream)]/50" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search butter chicken, paneer, biryani…"
                  className="w-full rounded-full border border-[color:var(--gold)]/20 bg-[color:var(--royal-soft)]/50 py-2.5 pl-10 pr-4 text-sm text-[color:var(--cream)] placeholder:text-[color:var(--cream)]/40 outline-none focus:border-[color:var(--saffron)]/70"
                />
              </div>
              <div className="flex gap-2">
                {(["all", "veg", "nonveg"] as const).map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVeg(v)}
                    className={`rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] transition-all ${
                      veg === v
                        ? "bg-saffron-grad text-[color:var(--royal-deep)] glow-saffron"
                        : "border border-[color:var(--gold)]/30 text-[color:var(--cream)]/80 hover:text-[color:var(--cream)]"
                    }`}
                  >
                    {v === "all" ? "All" : v === "veg" ? "Veg" : "Non-Veg"}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {(["All", ...CATEGORIES] as const).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCat(c as MenuCategory | "All")}
                  className={`rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] transition-all ${
                    cat === c
                      ? "bg-[color:var(--saffron)] text-[color:var(--royal-deep)]"
                      : "border border-[color:var(--gold)]/25 text-[color:var(--cream)]/70 hover:border-[color:var(--saffron)]/60 hover:text-[color:var(--cream)]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {items.length === 0 ? (
            <div className="rounded-2xl border border-[color:var(--gold)]/20 bg-[color:var(--royal-soft)]/30 p-12 text-center text-[color:var(--cream)]/70">
              No dishes matched. Try a different search or filter.
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((m, i) => (
                <Reveal key={m.name + i} delay={(i % 6) * 0.03}>
                  <article className="group flex gap-4 overflow-hidden rounded-2xl border border-[color:var(--gold)]/20 bg-[color:var(--royal-soft)]/40 p-4 transition-all duration-500 hover:border-[color:var(--saffron)]/60 hover:glow-warm">
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
                      <img src={m.img} alt={m.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <span
                        className={`absolute left-1.5 top-1.5 grid h-5 w-5 place-items-center rounded ring-1 ${
                          m.veg ? "bg-emerald-500/30 text-emerald-200 ring-emerald-400/60" : "bg-rose-600/30 text-rose-200 ring-rose-400/60"
                        }`}
                        aria-label={m.veg ? "Veg" : "Non-veg"}
                      >
                        <Leaf className="h-3 w-3" />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="truncate font-display text-base uppercase text-[color:var(--cream)]">{m.name}</h3>
                        <span className="font-slab text-sm text-[color:var(--saffron)]">{m.price}</span>
                      </div>
                      <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[color:var(--cream)]/65">{m.desc}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <SpiceLevel n={m.spice} />
                        {m.badge && <RoyalBadge className="text-[9px]!">{m.badge}</RoyalBadge>}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}