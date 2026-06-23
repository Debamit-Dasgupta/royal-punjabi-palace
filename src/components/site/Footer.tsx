import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone, Star } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.7-1.6h1.6V4.3C16.3 4.2 15.3 4 14.1 4c-2.4 0-4 1.5-4 4.2v2.6H7.5V14h2.6v8h3.4z" />
    </svg>
  );
}
import logoAsset from "@/assets/logo.jpg.asset.json";
import { DottedFrame, JharokhaDivider } from "../ornaments";
import { NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[color:var(--royal-deep)] text-[color:var(--cream)]">
      <div className="absolute inset-x-0 top-0 h-px bg-[color:var(--gold)]/30" />
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <JharokhaDivider label="Aapka Swagat Hai" />
        <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logoAsset.url}
                alt=""
                width={56}
                height={56}
                className="h-14 w-14 rounded-full ring-2 ring-[color:var(--gold)]/60"
              />
              <div>
                <div className="font-display text-xl uppercase">{SITE.name}</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--gold)]">
                  {SITE.tagline}
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-[color:var(--cream)]/70">
              Punjab on every plate. Hospitality fit for a royal court. Bhopal's most loved
              celebration destination.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-[color:var(--gold)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
              ))}
              <span className="text-[color:var(--cream)]/80">
                {SITE.rating} · {SITE.reviews}+ reviews
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-slab text-xs uppercase tracking-[0.3em] text-[color:var(--saffron)]">
              Explore
            </h3>
            <ul className="mt-5 space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-[color:var(--cream)]/75 hover:text-[color:var(--saffron)]">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/reservation" className="text-[color:var(--cream)]/75 hover:text-[color:var(--saffron)]">
                  Reservation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-slab text-xs uppercase tracking-[0.3em] text-[color:var(--saffron)]">
              Visit
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-[color:var(--cream)]/80">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
                <span>
                  {SITE.address.line1},<br />
                  {SITE.address.line2}<br />
                  {SITE.address.region} {SITE.address.postal}
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
                <span>{SITE.hours} · Daily</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
                <a href={`tel:${SITE.phoneIntl}`} className="hover:text-[color:var(--saffron)]">
                  {SITE.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-slab text-xs uppercase tracking-[0.3em] text-[color:var(--saffron)]">
              Follow the Royal Journey
            </h3>
            <div className="mt-5 flex gap-3">
              {[
                { href: SITE.socials.instagram, icon: InstagramIcon, label: "Instagram" },
                { href: SITE.socials.facebook, icon: FacebookIcon, label: "Facebook" },
                { href: SITE.socials.google, icon: Star, label: "Google Reviews" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--gold)]/40 text-[color:var(--cream)] transition-all hover:bg-saffron-grad hover:text-[color:var(--royal-deep)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <Link
              to="/reservation"
              className="btn-shimmer mt-6 inline-block rounded-full bg-saffron-grad px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--royal-deep)] glow-saffron"
            >
              Reserve Your Table
            </Link>
          </div>
        </div>

        <div className="relative mt-14 pt-8">
          <DottedFrame className="absolute inset-x-0 -top-3 h-6 w-full text-[color:var(--gold)]/50" />
          <div className="flex flex-col items-center justify-between gap-3 text-center text-[11px] uppercase tracking-[0.25em] text-[color:var(--cream)]/55 md:flex-row md:text-left">
            <div>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
            <div className="flex gap-5">
              <Link to="/privacy" className="hover:text-[color:var(--saffron)]">Privacy</Link>
              <Link to="/terms" className="hover:text-[color:var(--saffron)]">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}