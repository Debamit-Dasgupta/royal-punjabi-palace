import { Link } from "@tanstack/react-router";
import { Menu as MenuIcon, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import logoImg from "@/assets/logo.jpg";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[color:var(--royal-deep)]/85 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent, color-mix(in oklab, var(--gold) 60%, transparent), transparent)",
        }}
      />
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          to="/"
          className="group flex items-center gap-3"
          aria-label={`${SITE.name} — ${SITE.tagline}`}
        >
          <img
            src={logoImg}
            alt={`${SITE.name} logo`}
            width={56}
            height={56}
            className="h-12 w-12 rounded-full ring-2 ring-[color:var(--gold)]/60 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-base uppercase tracking-wider text-[color:var(--cream)]">
              {SITE.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--gold)]">
              {SITE.tagline}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-link text-[12px] font-semibold uppercase tracking-[0.18em] text-[color:var(--cream)]/85 hover:text-[color:var(--cream)]"
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${SITE.phoneIntl}`}
            className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[color:var(--cream)]/80 hover:text-[color:var(--saffron)] md:inline-flex"
          >
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
          <Link
            to="/reservation"
            className="btn-shimmer hidden rounded-full bg-saffron-grad px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--royal-deep)] glow-saffron transition-transform hover:scale-105 md:inline-block"
          >
            Reserve Table
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--gold)]/40 bg-[color:var(--royal-deep)]/60 text-[color:var(--cream)] lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-x-0 top-20 z-30 origin-top transform bg-[color:var(--royal-deep)]/98 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-8" aria-label="Mobile">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 font-display text-2xl uppercase tracking-wide text-[color:var(--cream)] hover:bg-[color:var(--royal-soft)]/50"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/reservation"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-saffron-grad px-5 py-3 text-center text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--royal-deep)]"
          >
            Reserve Table
          </Link>
        </nav>
      </div>
    </header>
  );
}