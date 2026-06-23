import type { Dish } from "./dishes";

export type MenuItem = Dish & { price: string; category: MenuCategory };
export type MenuCategory =
  | "Starters"
  | "Punjabi Specials"
  | "Veg"
  | "Non Veg"
  | "Tandoor"
  | "Breads"
  | "Rice"
  | "Chinese"
  | "Desserts"
  | "Beverages";

export const CATEGORIES: MenuCategory[] = [
  "Starters",
  "Punjabi Specials",
  "Veg",
  "Non Veg",
  "Tandoor",
  "Breads",
  "Rice",
  "Chinese",
  "Desserts",
  "Beverages",
];

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=80`;

export const MENU: MenuItem[] = [
  // Starters
  { category: "Starters", name: "Paneer Tikka", desc: "Tandoor-charred paneer, yoghurt-ajwain marinade.", veg: true, spice: 2, price: "₹320", img: u("photo-1567188040759-fb8a883dc6d8") },
  { category: "Starters", name: "Hara Bhara Kebab", desc: "Spinach, peas, paneer, hand-rolled and pan-seared.", veg: true, spice: 1, price: "₹260", img: u("photo-1606491956689-2ea866880c84") },
  { category: "Starters", name: "Crispy Corn Masala", desc: "Golden corn, chaat masala, curry leaf.", veg: true, spice: 1, price: "₹240", img: u("photo-1606491956689-2ea866880c84"), badge: "Popular" },
  { category: "Starters", name: "Chicken Tikka", desc: "Boneless thigh, Kashmiri chilli, smoked onions.", veg: false, spice: 2, price: "₹380", img: u("photo-1603894584373-5ac82b2ae398") },
  { category: "Starters", name: "Seekh Kebab", desc: "Hand-minced lamb on iron skewers.", veg: false, spice: 2, price: "₹420", img: u("photo-1599487488170-d11ec9c172f0"), badge: "Chef Recommended" },

  // Punjabi Specials
  { category: "Punjabi Specials", name: "Dal Makhani", desc: "Slow-simmered black lentils, single-origin butter.", veg: true, spice: 1, price: "₹340", img: u("photo-1626500155210-71fbd2ff80a8"), badge: "Royal Signature" },
  { category: "Punjabi Specials", name: "Sarson da Saag with Makki di Roti", desc: "Winter mustard greens, hand-pressed corn flatbread, white butter.", veg: true, spice: 1, price: "₹360", img: u("photo-1631452180519-c014fe946bc7"), badge: "Chef Recommended" },
  { category: "Punjabi Specials", name: "Amritsari Kulcha", desc: "Stuffed potato kulcha, charcoal-baked, chickpea curry.", veg: true, spice: 1, price: "₹280", img: u("photo-1601050690597-df0568f70950") },
  { category: "Punjabi Specials", name: "Pind di Kadhi Pakora", desc: "Village-style chickpea kadhi, gram flour fritters.", veg: true, spice: 2, price: "₹300", img: u("photo-1631452180519-c014fe946bc7") },

  // Veg
  { category: "Veg", name: "Paneer Pasanda", desc: "Stuffed paneer in saffron-cashew gravy.", veg: true, spice: 1, price: "₹380", img: u("photo-1631452180519-c014fe946bc7"), badge: "Chef Recommended" },
  { category: "Veg", name: "Kadai Paneer", desc: "Capsicum, onion, freshly pounded kadai masala.", veg: true, spice: 2, price: "₹360", img: u("photo-1567188040759-fb8a883dc6d8") },
  { category: "Veg", name: "Malai Kofta", desc: "Cottage-cheese dumplings, almond-rich royal gravy.", veg: true, spice: 1, price: "₹340", img: u("photo-1631452180519-c014fe946bc7") },
  { category: "Veg", name: "Mix Veg Royal", desc: "Garden vegetables, brown onion gravy, kasuri methi.", veg: true, spice: 1, price: "₹290", img: u("photo-1631452180519-c014fe946bc7") },

  // Non Veg
  { category: "Non Veg", name: "Butter Chicken", desc: "Tandoor-charred chicken in velvet tomato gravy.", veg: false, spice: 2, price: "₹440", img: u("photo-1603894584373-5ac82b2ae398"), badge: "Popular" },
  { category: "Non Veg", name: "Mutton Rogan Josh", desc: "Slow-cooked Kashmiri lamb, fennel and red chilli.", veg: false, spice: 2, price: "₹540", img: u("photo-1604908554049-24c2cfdd9aa6") },
  { category: "Non Veg", name: "Chicken Lababdar", desc: "Twice-cooked chicken, cashew tomato, finished with cream.", veg: false, spice: 2, price: "₹420", img: u("photo-1603894584373-5ac82b2ae398") },

  // Tandoor
  { category: "Tandoor", name: "Angara Paneer Tikka", desc: "Coal-smoked paneer, Kashmiri chilli, ajwain.", veg: true, spice: 3, price: "₹360", img: u("photo-1567188040759-fb8a883dc6d8") },
  { category: "Tandoor", name: "Tandoori Chicken (Half)", desc: "Bone-in chicken, overnight marinade, charcoal kiss.", veg: false, spice: 2, price: "₹420", img: u("photo-1603894584373-5ac82b2ae398") },
  { category: "Tandoor", name: "Tandoori Pomfret", desc: "Whole fish, mustard-tamarind marinade, lime salt.", veg: false, spice: 2, price: "₹580", img: u("photo-1604908554049-24c2cfdd9aa6") },

  // Breads
  { category: "Breads", name: "Butter Naan", desc: "Soft, blistered, hand-stretched.", veg: true, spice: 0, price: "₹70", img: u("photo-1601050690597-df0568f70950") },
  { category: "Breads", name: "Lachha Paratha", desc: "Layered whole-wheat, ghee finish.", veg: true, spice: 0, price: "₹90", img: u("photo-1601050690597-df0568f70950") },
  { category: "Breads", name: "Garlic Naan", desc: "Roasted garlic, fresh coriander.", veg: true, spice: 0, price: "₹90", img: u("photo-1601050690597-df0568f70950") },
  { category: "Breads", name: "Tandoori Roti", desc: "Whole-wheat, charcoal-baked.", veg: true, spice: 0, price: "₹40", img: u("photo-1601050690597-df0568f70950") },

  // Rice
  { category: "Rice", name: "Shahi Dum Biryani (Veg)", desc: "Aged basmati, garden vegetables, sealed dum.", veg: true, spice: 2, price: "₹360", img: u("photo-1633945274405-b6c8069047b0"), badge: "Royal Signature" },
  { category: "Rice", name: "Shahi Dum Biryani (Chicken)", desc: "Marinated chicken, basmati, kewra, saffron.", veg: false, spice: 2, price: "₹460", img: u("photo-1633945274405-b6c8069047b0"), badge: "Royal Signature" },
  { category: "Rice", name: "Jeera Rice", desc: "Cumin-tempered long-grain basmati.", veg: true, spice: 0, price: "₹220", img: u("photo-1633945274405-b6c8069047b0") },

  // Chinese
  { category: "Chinese", name: "Veg Manchurian", desc: "Hand-rolled, wok-tossed, glossy house sauce.", veg: true, spice: 2, price: "₹280", img: u("photo-1626100134240-5f1d6f3a4f6d") },
  { category: "Chinese", name: "Hakka Noodles", desc: "Wok-fired noodles, julienned vegetables, dark soy.", veg: true, spice: 1, price: "₹260", img: u("photo-1626100134240-5f1d6f3a4f6d") },
  { category: "Chinese", name: "Chilli Chicken (Dry)", desc: "Crisp chicken, bell pepper, Sichuan kick.", veg: false, spice: 3, price: "₹360", img: u("photo-1603894584373-5ac82b2ae398") },

  // Desserts
  { category: "Desserts", name: "Gulab Jamun", desc: "Khoya dumplings, warm cardamom syrup.", veg: true, spice: 0, price: "₹140", img: u("photo-1606471191009-63994c53433b") },
  { category: "Desserts", name: "Shahi Phirni", desc: "Slow-cooked rice pudding, saffron, pistachio.", veg: true, spice: 0, price: "₹160", img: u("photo-1606471191009-63994c53433b"), badge: "Chef Recommended" },
  { category: "Desserts", name: "Kulfi Falooda", desc: "House-made kulfi, vermicelli, rose syrup.", veg: true, spice: 0, price: "₹180", img: u("photo-1606471191009-63994c53433b") },

  // Beverages
  { category: "Beverages", name: "Masala Chaas", desc: "Spiced buttermilk, fresh mint.", veg: true, spice: 0, price: "₹90", img: u("photo-1606471191009-63994c53433b") },
  { category: "Beverages", name: "Mango Lassi", desc: "Alphonso mango, hung curd, cardamom.", veg: true, spice: 0, price: "₹140", img: u("photo-1606471191009-63994c53433b") },
  { category: "Beverages", name: "Masala Chai", desc: "Hand-pounded spice blend, slow-simmered.", veg: true, spice: 0, price: "₹70", img: u("photo-1606471191009-63994c53433b") },
];