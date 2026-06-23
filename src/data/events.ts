import { Cake, Calendar, Crown, Flame, Heart, PartyPopper, Sparkles, Trophy, Users, Utensils } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type EventCard = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

export const EVENTS: EventCard[] = [
  { title: "Birthday Parties", desc: "Decorated tables, cake-cutting, royal birthday platter.", icon: Cake },
  { title: "Anniversaries", desc: "Candle-lit booths, surprise dessert, framed memories.", icon: Heart },
  { title: "Corporate Dinners", desc: "Private cabins, projector, curated multi-course menus.", icon: Users },
  { title: "Kitty Parties", desc: "Afternoon kitty packages, photo backdrop, ladies' lounge.", icon: Sparkles },
  { title: "IPL Live Screening", desc: "Big screen, à-la-carte snacks, the loudest cheer in Bhopal.", icon: Trophy },
  { title: "Lohri & Baisakhi", desc: "Live folk music, makki-sarson feasts, bonfire vibes.", icon: Flame },
  { title: "Diwali Specials", desc: "Festive thalis, marigold décor, sweet hampers to take home.", icon: PartyPopper },
  { title: "New Year's Eve", desc: "Live counters, DJ, royal countdown menu till 12:00 AM.", icon: Calendar },
  { title: "Wedding Functions", desc: "Mehendi, sangeet, reception — turnkey royal hospitality.", icon: Crown },
  { title: "Private Dining", desc: "Reserved jharokhas, dedicated steward, signature tasting.", icon: Utensils },
];