import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { waLink } from "@/lib/whatsapp";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className={`grid h-11 w-11 place-items-center rounded-full bg-[color:var(--royal-soft)] text-[color:var(--cream)] ring-1 ring-[color:var(--gold)]/40 transition-all duration-300 ${
          showTop ? "opacity-100 translate-y-0" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp className="h-4 w-4" />
      </button>
      <Link
        to="/reservation"
        aria-label="Reserve a table"
        className="animate-royal-pulse hidden h-12 items-center gap-2 rounded-full bg-saffron-grad px-5 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--royal-deep)] glow-saffron md:inline-flex"
      >
        Reserve
      </Link>
      <a
        href={`tel:${SITE.phoneIntl}`}
        aria-label="Call Shahi Pind"
        className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--royal-soft)] text-[color:var(--cream)] ring-1 ring-[color:var(--gold)]/40 transition-all hover:scale-105"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={waLink("Namaste Shahi Pind 🙏 I'd like to know more.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="animate-breathe grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.55)]"
      >
        <MessageCircle className="h-7 w-7" fill="currentColor" strokeWidth={0} />
      </a>
    </div>
  );
}