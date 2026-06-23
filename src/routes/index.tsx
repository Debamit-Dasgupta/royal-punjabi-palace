import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { HookBand } from "@/components/home/HookBand";
import { WhyUs } from "@/components/home/WhyUs";
import { SignatureDishes } from "@/components/home/SignatureDishes";
import { AboutPreview } from "@/components/home/AboutPreview";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { Events } from "@/components/home/Events";
import { Reviews } from "@/components/home/Reviews";
import { InstaGrid } from "@/components/home/InstaGrid";
import { LocationCard } from "@/components/home/LocationCard";
import { CTABand } from "@/components/home/CTABand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shahi Pind — The Royal Taste of Punjab · Bhopal" },
      { name: "description", content: "Authentic Punjabi fine dining on Ayodhya Bypass Road, Bhopal. Royal ambience, signature dishes, family celebrations. 4.7★ · 523+ reviews." },
      { property: "og:title", content: "Shahi Pind — The Royal Taste of Punjab" },
      { property: "og:description", content: "Punjab on every plate. Royal hospitality on every visit. Reserve your table in Bhopal." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <HookBand />
      <WhyUs />
      <SignatureDishes />
      <AboutPreview />
      <GalleryPreview />
      <Events />
      <Reviews />
      <InstaGrid />
      <LocationCard />
      <CTABand />
    </>
  );
}
