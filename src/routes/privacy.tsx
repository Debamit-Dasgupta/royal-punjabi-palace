import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { JharokhaDivider } from "@/components/ornaments";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Shahi Pind" },
      { name: "description", content: "How Shahi Pind handles the personal information you share with us." },
      { property: "og:title", content: "Privacy Policy — Shahi Pind" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <article className="pt-40 pb-24">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <Reveal><JharokhaDivider label="Privacy" /></Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-6 text-center font-display text-4xl uppercase text-[color:var(--cream)] sm:text-5xl">
            Privacy <span className="text-saffron-grad">Policy</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="prose prose-invert mt-10 max-w-none text-[color:var(--cream)]/80 [&_h2]:font-display [&_h2]:uppercase [&_h2]:text-[color:var(--cream)] [&_a]:text-[color:var(--saffron)]">
            <p>This Privacy Policy explains how Shahi Pind ("we", "our") collects and uses information when you visit our website or make a reservation.</p>
            <h2>Information We Collect</h2>
            <p>When you fill the reservation or contact form, your message opens in WhatsApp — your name, phone number, and the details you share reach us through WhatsApp. We do not store this data on our website.</p>
            <h2>Cookies</h2>
            <p>This site uses only essential cookies required for the website to function. We do not run third-party tracking.</p>
            <h2>Third-Party Services</h2>
            <p>We use Google Maps to show our location. Their privacy policy applies to that embed.</p>
            <h2>Contact</h2>
            <p>Questions? WhatsApp or call us at 8962612121.</p>
            <p className="text-xs text-[color:var(--cream)]/55">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long" })}</p>
          </div>
        </Reveal>
      </div>
    </article>
  );
}