import { INSTA_TILES } from "@/data/instagram";
import { SITE } from "@/lib/site";
import { Reveal } from "../site/Reveal";
import { SectionHeading } from "../site/SectionHeading";

function IgIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

export function InstaGrid() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="@shahipind"
          title={<>Follow Our <span className="text-saffron-grad">Royal Journey.</span></>}
          description="Behind-the-scenes from the tandoor, fresh-out-of-the-kitchen food shots, and the best plates Bhopal posts every week."
        />
        <div className="mt-14 grid grid-cols-3 gap-2 sm:gap-3">
          {INSTA_TILES.map((t, i) => (
            <Reveal key={t.src + i} delay={(i % 3) * 0.04}>
              <a
                href={SITE.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-xl border border-[color:var(--gold)]/20"
                aria-label={t.alt}
              >
                <img
                  src={t.src}
                  alt={t.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 grid place-items-center bg-[color:var(--royal-deep)]/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <IgIcon className="h-8 w-8 text-[color:var(--cream)]" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={SITE.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer inline-flex items-center gap-3 rounded-full bg-saffron-grad px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--royal-deep)] glow-saffron"
          >
            <IgIcon className="h-4 w-4" /> Follow @shahipind
          </a>
        </div>
      </div>
    </section>
  );
}