import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { Reveal } from "../site/Reveal";
import { SectionHeading } from "../site/SectionHeading";

export function LocationCard() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Visit Us"
          title={<>Find Your Way <span className="text-saffron-grad">Home.</span></>}
        />
        <Reveal>
          <div className="mt-14 grid overflow-hidden rounded-3xl border border-[color:var(--gold)]/25 bg-[color:var(--royal-soft)]/40 lg:grid-cols-[1.1fr_1fr]">
            <div className="aspect-[4/3] lg:aspect-auto">
              <iframe
                title="Shahi Pind on Google Maps"
                src={SITE.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 360 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="flex flex-col justify-center gap-6 p-8 sm:p-12">
              <div>
                <h3 className="font-display text-3xl uppercase text-[color:var(--cream)]">Shahi Pind</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[color:var(--gold)]">
                  Ayodhya Bypass · Bhopal
                </p>
              </div>
              <ul className="space-y-4 text-[color:var(--cream)]/85">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--saffron)]" />
                  <span>
                    {SITE.address.line1}<br />
                    {SITE.address.line2}<br />
                    {SITE.address.region} {SITE.address.postal}
                  </span>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--saffron)]" />
                  <span>Open Daily · {SITE.hours}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--saffron)]" />
                  <a href={`tel:${SITE.phoneIntl}`} className="hover:text-[color:var(--saffron)]">
                    {SITE.phone}
                  </a>
                </li>
              </ul>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer inline-flex w-fit items-center gap-2 rounded-full bg-saffron-grad px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--royal-deep)] glow-saffron"
              >
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}