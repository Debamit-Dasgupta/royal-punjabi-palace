import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, ChevronRight, Clock, Users } from "lucide-react";
import { reservationMessage, waLink } from "@/lib/whatsapp";
import { Reveal } from "@/components/site/Reveal";
import { JharokhaDivider, RoyalStar } from "@/components/ornaments";

export const Route = createFileRoute("/reservation")({
  head: () => ({
    meta: [
      { title: "Reserve A Table — Shahi Pind · Bhopal" },
      { name: "description", content: "Reserve your royal table at Shahi Pind, Ayodhya Bypass Road, Bhopal. Confirmation via WhatsApp within minutes." },
      { property: "og:title", content: "Reserve A Table — Shahi Pind" },
      { property: "og:description", content: "Birthdays, anniversaries, family dinners — book your table now." },
      { property: "og:url", content: "/reservation" },
    ],
    links: [{ rel: "canonical", href: "/reservation" }],
  }),
  component: ReservationPage,
});

const OCCASIONS = ["Family Dinner", "Birthday", "Anniversary", "Corporate", "Kitty Party", "Other"];

function ReservationPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    guests: "4",
    date: "",
    time: "20:00",
    occasion: "Family Dinner",
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.date) return;
    window.open(waLink(reservationMessage(form)), "_blank", "noopener");
  };

  return (
    <>
      <section className="pt-40 pb-12">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <Reveal><JharokhaDivider label="Royal Reservation" /></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[clamp(2.4rem,6vw,5rem)] uppercase leading-[1] text-[color:var(--cream)]">
              Reserve Your <span className="text-saffron-grad">Royal Table.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-base text-[color:var(--cream)]/80">
              Tell us when you'd like to dine. We'll confirm on WhatsApp within minutes and reserve a table fit for royalty.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <Reveal>
            <form onSubmit={onSubmit} className="relative rounded-3xl border border-[color:var(--gold)]/30 bg-[color:var(--royal-soft)]/40 p-8 sm:p-12">
              <RoyalStar className="absolute -top-4 left-1/2 h-8 w-8 -translate-x-1/2 text-[color:var(--saffron)]" />
              <div className="grid gap-5 sm:grid-cols-2">
                <RField label="Your Name" required value={form.name} onChange={(v) => setForm((f) => ({ ...f, name: v }))} />
                <RField label="Phone Number" required type="tel" value={form.phone} onChange={(v) => setForm((f) => ({ ...f, phone: v }))} />
                <RField label="Guests" required icon={<Users className="h-4 w-4" />} type="number" min={1} max={50} value={form.guests} onChange={(v) => setForm((f) => ({ ...f, guests: v }))} />
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">Occasion</label>
                  <select
                    value={form.occasion}
                    onChange={(e) => setForm((f) => ({ ...f, occasion: e.target.value }))}
                    className="mt-2 w-full rounded-xl border border-[color:var(--gold)]/25 bg-[color:var(--royal-deep)]/50 px-4 py-3 text-sm text-[color:var(--cream)] outline-none focus:border-[color:var(--saffron)]"
                  >
                    {OCCASIONS.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <RField label="Date" required type="date" icon={<Calendar className="h-4 w-4" />} value={form.date} onChange={(v) => setForm((f) => ({ ...f, date: v }))} />
                <RField label="Time" required type="time" icon={<Clock className="h-4 w-4" />} value={form.time} onChange={(v) => setForm((f) => ({ ...f, time: v }))} />
              </div>
              <div className="mt-5">
                <label className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">Anything special? (optional)</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  rows={3}
                  placeholder="Seating preference, dietary notes, surprise plan…"
                  className="mt-2 w-full rounded-xl border border-[color:var(--gold)]/25 bg-[color:var(--royal-deep)]/50 px-4 py-3 text-sm text-[color:var(--cream)] outline-none focus:border-[color:var(--saffron)]"
                />
              </div>
              <button type="submit" className="btn-shimmer animate-royal-pulse mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-saffron-grad px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--royal-deep)] glow-saffron">
                Reserve via WhatsApp <ChevronRight className="h-4 w-4" />
              </button>
              <p className="mt-4 text-center text-[11px] text-[color:var(--cream)]/60">
                Your details open in WhatsApp — we'll confirm within minutes.
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function RField({ label, value, onChange, required, type = "text", icon, min, max }: { label: string; value: string; onChange: (v: string) => void; required?: boolean; type?: string; icon?: React.ReactNode; min?: number; max?: number }) {
  return (
    <div>
      <label className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">{label}{required && " *"}</label>
      <div className="relative mt-2">
        {icon && <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[color:var(--cream)]/55">{icon}</span>}
        <input
          type={type}
          required={required}
          value={value}
          min={min}
          max={max}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full rounded-xl border border-[color:var(--gold)]/25 bg-[color:var(--royal-deep)]/50 py-3 pr-4 text-sm text-[color:var(--cream)] outline-none focus:border-[color:var(--saffron)] ${icon ? "pl-10" : "pl-4"}`}
        />
      </div>
    </div>
  );
}