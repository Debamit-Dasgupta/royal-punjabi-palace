const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export type GalleryItem = {
  src: string;
  alt: string;
  cat: "Restaurant" | "Food" | "Interior" | "Events" | "Families" | "Celebrations";
  ratio?: "tall" | "wide" | "square";
};

export const GALLERY: GalleryItem[] = [
  { src: u("photo-1517248135467-4c7edcad34c4"), alt: "Royal restaurant interior", cat: "Interior", ratio: "wide" },
  { src: u("photo-1626500155210-71fbd2ff80a8"), alt: "Dal makhani in copper", cat: "Food", ratio: "square" },
  { src: u("photo-1606491956689-2ea866880c84"), alt: "Tandoor starters platter", cat: "Food", ratio: "tall" },
  { src: u("photo-1543353071-873f17a7a088"), alt: "Family celebration", cat: "Families", ratio: "wide" },
  { src: u("photo-1603894584373-5ac82b2ae398"), alt: "Butter chicken", cat: "Food", ratio: "square" },
  { src: u("photo-1414235077428-338989a2e8c0"), alt: "Lounge seating", cat: "Restaurant", ratio: "tall" },
  { src: u("photo-1567620905732-2d1ec7ab7445"), alt: "Birthday celebration", cat: "Celebrations", ratio: "square" },
  { src: u("photo-1555396273-367ea4eb4db5"), alt: "Tandoor chef at work", cat: "Restaurant", ratio: "wide" },
  { src: u("photo-1633945274405-b6c8069047b0"), alt: "Shahi biryani", cat: "Food", ratio: "square" },
  { src: u("photo-1552566626-52f8b828add9"), alt: "Private dining cabin", cat: "Interior", ratio: "tall" },
  { src: u("photo-1559339352-11d035aa65de"), alt: "Wedding event setup", cat: "Events", ratio: "wide" },
  { src: u("photo-1606471191009-63994c53433b"), alt: "Royal dessert plating", cat: "Food", ratio: "square" },
];