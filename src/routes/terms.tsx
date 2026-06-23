import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { JharokhaDivider } from "@/components/ornaments";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Shahi Pind" },
      { name: "description", content: "Terms of use for the Shahi Pind website and reservation flow." },
      { property: "og:title", content: "Terms of Use — Shahi Pind" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <article className="pt-40 pb-24">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <Reveal><JharokhaDivider label="Terms" /></Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-6 text-center font-display text-4xl uppercase text-[color:var(--cream)] sm:text-5xl">
            Terms <span className="text-saffron-grad">Of Use</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="prose prose-invert mt-10 max-w-none text-[color:var(--cream)]/80 [&_h2]:font-display [&_h2]:uppercase [&_h2]:text-[color:var(--cream)]">
            <p>By using shahipind.com you agree to the following terms.</p>
            <h2>Reservations</h2>
            <p>Reservations are confirmed by Shahi Pind staff over WhatsApp. A reservation is not guaranteed until you receive an explicit confirmation message from our team.</p>
            <h2>Menu & Pricing</h2>
            <p>Menu items and prices on this website are indicative and may change without notice. The in-restaurant menu is the source of truth.</p>
            <h2>Photography</h2>
            <p>Some imagery is editorial or representative and may differ slightly from in-restaurant plating.</p>
            <h2>Intellectual Property</h2>
            <p>All trademarks, logos and copy on this site belong to Shahi Pind and may not be reproduced without permission.</p>
            <h2>Contact</h2>
            <p>For any clarification: 8962612121 · Ayodhya Bypass Road, Bhopal.</p>
          </div>
        </Reveal>
      </div>
    </article>
  );
}