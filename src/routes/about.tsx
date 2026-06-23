import { createFileRoute } from "@tanstack/react-router";
import { ChefHat, Flame, Heart, Leaf, Sparkles } from "lucide-react";
import hero from "@/assets/hero-interior.jpg";
import feast from "@/assets/feast-flatlay.jpg";
import family from "@/assets/celebration-family.jpg";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { BrassCard } from "@/components/site/BrassCard";
import { CTABand } from "@/components/home/CTABand";
import { JharokhaDivider, OrnateFrame } from "@/components/ornaments";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Shahi Pind — The Royal Taste of Punjab" },
      { name: "description", content: "Our story, our chefs, our promise. How Shahi Pind became Bhopal's royal Punjabi celebration destination." },
      { property: "og:title", content: "About Shahi Pind" },
      { property: "og:description", content: "Three generations of Punjabi hospitality, plated for Bhopal." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-40 pb-20">
        <img src={hero} alt="Royal Punjabi interior at Shahi Pind" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(180deg, color-mix(in oklab, var(--royal-deep) 90%, transparent), var(--royal))" }} />
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <Reveal><JharokhaDivider label="Our Story" /></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[clamp(2.4rem,6vw,5rem)] uppercase leading-[1] text-[color:var(--cream)]">
              Three Generations.
              <br /><span className="text-saffron-grad">One Royal Table.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-base text-[color:var(--cream)]/80 sm:text-lg">
              From a roadside dhaba in rural Punjab to Bhopal's most loved royal restaurant — this is how Shahi Pind earned its crown.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <OrnateFrame className="aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[color:var(--gold)]/30">
              <img src={feast} alt="Royal Punjabi feast" className="h-full w-full object-cover" loading="lazy" />
            </OrnateFrame>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="The Royal Taste of Punjab"
              title={<>Born In A Pind. <br/><span className="text-saffron-grad">Crowned In Bhopal.</span></>}
            />
            <div className="mt-8 space-y-4 text-[color:var(--cream)]/80">
              <p>It started with Bauji's tandoor — a clay oven dug into the soil of a small village outside Amritsar, where the same family has been kneading dough and grinding masalas since 1962.</p>
              <p>Three generations later, we carried that tandoor — and the recipes that fed weddings, harvests and homecomings — to the heart of Bhopal. Shahi Pind is what happens when a village kitchen puts on royal silks.</p>
              <p>Today we host birthdays, anniversaries, IPL nights and weddings — and every single plate still tastes the way Bauji insisted: bold, generous, and impossible to forget.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionHeading eyebrow="What We Stand For" title={<>Mission, Vision <span className="text-saffron-grad">& Vows.</span></>} />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Heart, t: "Our Mission", d: "To make every guest feel like family — and every meal feel like a celebration the family planned for weeks." },
              { icon: Sparkles, t: "Our Vision", d: "To become the name Bhopal whispers first when someone asks: where should we celebrate this?" },
              { icon: ChefHat, t: "Chef Philosophy", d: "Cook like Bauji is watching. Plate like a king is arriving. Serve like a guest is more important than the meal." },
              { icon: Leaf, t: "Fresh Ingredients", d: "Vegetables hand-picked before sunrise. Spices ground daily. Dairy delivered within hours. No shortcuts — ever." },
              { icon: Flame, t: "The Dining Experience", d: "Brass plates. Copper bowls. Hand-painted jharokhas. The room is the first course." },
              { icon: Sparkles, t: "Hospitality, The Punjabi Way", d: "Loud welcomes, soft service, and the constant, gentle insistence on one more helping." },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i * 0.04}>
                <BrassCard className="h-full">
                  <v.icon className="h-8 w-8 text-[color:var(--saffron)]" />
                  <h3 className="mt-5 font-display text-xl uppercase text-[color:var(--cream)]">{v.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--cream)]/72">{v.d}</p>
                </BrassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionHeading eyebrow="Restaurant Interior" title={<>A Room That <span className="text-saffron-grad">Hosts You.</span></>} />
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {[hero, family, feast].map((src, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-[color:var(--gold)]/25">
                  <img src={src} alt="Inside Shahi Pind" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}