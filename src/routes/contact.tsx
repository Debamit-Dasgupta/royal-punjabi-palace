import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, MapPin, Phone, Send } from "lucide-react";
import { SITE } from "@/lib/site";
import { contactMessage, waLink } from "@/lib/whatsapp";
import { Reveal } from "@/components/site/Reveal";
import { JharokhaDivider } from "@/components/ornaments";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Shahi Pind · Bhopal" },
      { name: "description", content: "Reach Shahi Pind on Ayodhya Bypass Road, Bhopal. Call 8962612121 or WhatsApp us 12 PM – 11:30 PM." },
      { property: "og:title", content: "Contact Shahi Pind" },
      { property: "og:description", content: "Ayodhya Bypass, Bhopal · 8962612121 · Open 12 PM – 11:30 PM." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    const url = waLink(contactMessage(form));
    window.open(url, "_blank", "noopener");
  };

  return (
    <>
      <section className="pt-40 pb-12">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <Reveal><JharokhaDivider label="Get In Touch" /></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[clamp(2.4rem,6vw,5rem)] uppercase leading-[1] text-[color:var(--cream)]">
              Come Say <span className="text-saffron-grad">Sat Sri Akaal.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-[color:var(--gold)]/25 bg-[color:var(--royal-soft)]/40 p-8 sm:p-10">
              <h2 className="font-display text-2xl uppercase text-[color:var(--cream)]">Send A Message</h2>
              <p className="mt-2 text-sm text-[color:var(--cream)]/70">Your message will open in WhatsApp — we usually reply within minutes.</p>
              <form onSubmit={onSubmit} className="mt-7 space-y-4">
                <Field label="Your Name" required value={form.name} onChange={(v) => setForm((f) => ({ ...f, name: v }))} />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Phone" value={form.phone} onChange={(v) => setForm((f) => ({ ...f, phone: v }))} type="tel" />
                  <Field label="Email" value={form.email} onChange={(v) => setForm((f) => ({ ...f, email: v }))} type="email" />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">Message</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    rows={5}
                    className="mt-2 w-full rounded-xl border border-[color:var(--gold)]/25 bg-[color:var(--royal-deep)]/50 px-4 py-3 text-sm text-[color:var(--cream)] outline-none focus:border-[color:var(--saffron)]"
                  />
                </div>
                <button type="submit" className="btn-shimmer inline-flex items-center gap-2 rounded-full bg-saffron-grad px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--royal-deep)] glow-saffron">
                  Send via WhatsApp <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="flex flex-col gap-6">
              <div className="overflow-hidden rounded-3xl border border-[color:var(--gold)]/25">
                <iframe
                  title="Shahi Pind location"
                  src={SITE.mapsEmbed}
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <ul className="space-y-5 rounded-3xl border border-[color:var(--gold)]/25 bg-[color:var(--royal-soft)]/40 p-8 text-[color:var(--cream)]/85">
                <li className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--saffron)]" /><span>{SITE.address.line1}<br />{SITE.address.line2}<br />{SITE.address.region} {SITE.address.postal}</span></li>
                <li className="flex gap-3"><Phone className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--saffron)]" /><a href={`tel:${SITE.phoneIntl}`} className="hover:text-[color:var(--saffron)]">{SITE.phone}</a></li>
                <li className="flex gap-3"><Clock className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--saffron)]" /><span>Open Daily · {SITE.hours}</span></li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, value, onChange, required, type = "text" }: { label: string; value: string; onChange: (v: string) => void; required?: boolean; type?: string }) {
  return (
    <div>
      <label className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">{label}{required && " *"}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-[color:var(--gold)]/25 bg-[color:var(--royal-deep)]/50 px-4 py-3 text-sm text-[color:var(--cream)] outline-none focus:border-[color:var(--saffron)]"
      />
    </div>
  );
}