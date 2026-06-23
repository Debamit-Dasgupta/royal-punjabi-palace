export type Dish = {
  name: string;
  desc: string;
  veg: boolean;
  spice: 0 | 1 | 2 | 3;
  badge?: "Chef Recommended" | "Popular" | "Royal Signature";
  img: string;
};

const u = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const SIGNATURE_DISHES: Dish[] = [
  {
    name: "Dal Makhani",
    desc: "Slow-simmered black lentils, single-origin butter, a whisper of smoke. The dish that started it all.",
    veg: true,
    spice: 1,
    badge: "Royal Signature",
    img: u("photo-1626500155210-71fbd2ff80a8"),
  },
  {
    name: "Butter Chicken",
    desc: "Tandoor-charred chicken, velvet tomato gravy, finished tableside with cream and crushed fenugreek.",
    veg: false,
    spice: 2,
    badge: "Popular",
    img: u("photo-1603894584373-5ac82b2ae398"),
  },
  {
    name: "Paneer Pasanda",
    desc: "Royal stuffed cottage cheese pillows in a saffron cashew gravy. A Mughal-era heirloom.",
    veg: true,
    spice: 1,
    badge: "Chef Recommended",
    img: u("photo-1631452180519-c014fe946bc7"),
  },
  {
    name: "Angara Paneer Tikka",
    desc: "Coal-smoked paneer marinated overnight in yoghurt, ajwain and Kashmiri chilli.",
    veg: true,
    spice: 3,
    img: u("photo-1567188040759-fb8a883dc6d8"),
  },
  {
    name: "Veg Manchurian",
    desc: "The Indo-Chinese classic done royal — hand-rolled, wok-tossed, glossy with our house sauce.",
    veg: true,
    spice: 2,
    img: u("photo-1626100134240-5f1d6f3a4f6d"),
  },
  {
    name: "Crispy Corn Masala",
    desc: "Sweet corn crisped to gold, dusted with chaat masala, finished with curry leaf and lime.",
    veg: true,
    spice: 1,
    img: u("photo-1606491956689-2ea866880c84"),
  },
  {
    name: "Seekh Kebab",
    desc: "Hand-minced lamb on iron skewers, kissed by charcoal, rested on smoky onions.",
    veg: false,
    spice: 2,
    badge: "Chef Recommended",
    img: u("photo-1599487488170-d11ec9c172f0"),
  },
  {
    name: "Shahi Dum Biryani",
    desc: "Aged basmati, slow-dum-sealed for an hour, opened tableside for the steam to rise.",
    veg: false,
    spice: 2,
    badge: "Royal Signature",
    img: u("photo-1633945274405-b6c8069047b0"),
  },
];