const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=80`;

export const INSTA_TILES: { src: string; alt: string }[] = [
  { src: "https://www.funfoodfrolic.com/wp-content/uploads/2023/04/Dal-Makhani-Blog-500x500.jpg", alt: "Dal Makhani moment" },
  { src: u("photo-1543353071-873f17a7a088"), alt: "Family celebration" },
  { src: u("photo-1603894584373-5ac82b2ae398"), alt: "Butter chicken" },
  { src: u("photo-1414235077428-338989a2e8c0"), alt: "Royal lounge" },
  { src: u("photo-1567620905732-2d1ec7ab7445"), alt: "Birthday surprise" },
  { src: u("photo-1606491956689-2ea866880c84"), alt: "Tandoor platter" },
  { src: u("photo-1633945274405-b6c8069047b0"), alt: "Biryani service" },
  { src: u("photo-1559339352-11d035aa65de"), alt: "Wedding event" },
  { src: u("photo-1606471191009-63994c53433b"), alt: "Dessert plating" },
];