import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { GALLERY, type GalleryItem } from "@/data/gallery";
import { Reveal } from "@/components/site/Reveal";
import { JharokhaDivider } from "@/components/ornaments";

const FILTERS: (GalleryItem["cat"] | "All")[] = ["All", "Restaurant", "Food", "Interior", "Events", "Families", "Celebrations"];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Shahi Pind · Bhopal" },
      { name: "description", content: "Step inside Shahi Pind — interiors, signature plates, celebrations and family moments." },
      { property: "og:title", content: "Gallery — Shahi Pind" },
      { property: "og:description", content: "A royal lens on Bhopal's favourite Punjabi restaurant." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [cat, setCat] = useState<(typeof FILTERS)[number]>("All");
  const items = useMemo(() => (cat === "All" ? GALLERY : GALLERY.filter((g) => g.cat === cat)), [cat]);

  return (
    <>
      <section className="pt-40 pb-12">
        <div className="mx-auto max-w-7xl px-6 text-center sm:px-8">
          <Reveal><JharokhaDivider label="The Royal Lens" /></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[clamp(2.4rem,6vw,5rem)] uppercase leading-[1] text-[color:var(--cream)]">
              Moments At <span className="text-saffron-grad">Shahi Pind.</span>
            </h1>
          </Reveal>
        </div>
      </section>
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setCat(f)}
                className={`rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] transition-all ${
                  cat === f
                    ? "bg-saffron-grad text-[color:var(--royal-deep)] glow-saffron"
                    : "border border-[color:var(--gold)]/30 text-[color:var(--cream)]/80 hover:text-[color:var(--cream)]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
            {items.map((g, i) => (
              <Reveal key={g.src + i} delay={(i % 8) * 0.03}>
                <figure className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-[color:var(--gold)]/20 transition-all hover:glow-warm">
                  <img src={g.src} alt={g.alt} loading="lazy" className={`w-full object-cover transition-transform duration-700 hover:scale-110 ${g.ratio === "tall" ? "aspect-[3/4]" : g.ratio === "wide" ? "aspect-[4/3]" : "aspect-square"}`} />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}