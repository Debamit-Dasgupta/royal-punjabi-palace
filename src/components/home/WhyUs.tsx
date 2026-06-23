import { ChefHat, Crown, Flame, Heart, Sparkles, Utensils } from "lucide-react";
import { BrassCard } from "../site/BrassCard";
import { Reveal } from "../site/Reveal";
import { SectionHeading } from "../site/SectionHeading";

const REASONS = [
  { icon: ChefHat, title: "Authentic Punjabi Cuisine", desc: "Recipes carried through three generations, ingredients ground in our own kitchen daily." },
  { icon: Crown, title: "Royal Ambience", desc: "Hand-painted jharokhas, brass lanterns, deep purple velvet — designed like a Patiala mahal." },
  { icon: Heart, title: "Family Dining", desc: "Comfortable, child-friendly, generous portions. Built for the people you love." },
  { icon: Sparkles, title: "Private Celebrations", desc: "Cabins, cake-cutting, surprise décor — turnkey hosts for your big day." },
  { icon: Flame, title: "Fresh, Daily Ingredients", desc: "Hand-picked vegetables, fresh-pounded masalas, no shortcuts. Ever." },
  { icon: Utensils, title: "Exceptional Hospitality", desc: "Stewards trained the old-fashioned way — anticipate, never interrupt, always smile." },
];

export function WhyUs() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Why Shahi Pind"
          title={<>Made For <span className="text-saffron-grad">Memories.</span></>}
          description="Six reasons Bhopal keeps choosing us — for their first date, their tenth anniversary, and every reason in between."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05}>
              <BrassCard className="h-full">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-saffron-grad text-[color:var(--royal-deep)] glow-saffron">
                  <r.icon className="h-7 w-7" strokeWidth={2.2} />
                </div>
                <h3 className="mt-6 font-display text-2xl uppercase leading-tight text-[color:var(--cream)]">
                  {r.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--cream)]/72">
                  {r.desc}
                </p>
              </BrassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}