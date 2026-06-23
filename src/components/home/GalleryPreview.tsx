import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { GALLERY } from "@/data/gallery";
import { Reveal } from "../site/Reveal";
import { SectionHeading } from "../site/SectionHeading";

const PREVIEW = GALLERY.slice(0, 8);

export function GalleryPreview() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="The Royal Lens"
          title={<>Inside The <span className="text-saffron-grad">Palace.</span></>}
        />
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {PREVIEW.map((g, i) => (
            <Reveal key={g.src} delay={(i % 4) * 0.04}>
              <figure
                className={`group relative overflow-hidden rounded-2xl border border-[color:var(--gold)]/20 ${
                  i === 0 || i === 5 ? "sm:col-span-2 sm:row-span-2 aspect-square" : "aspect-square"
                }`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[color:var(--royal-deep)]/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/50 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--cream)] hover:bg-[color:var(--royal-soft)]/50"
          >
            See Full Gallery <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}