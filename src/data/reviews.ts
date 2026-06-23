export type Review = {
  name: string;
  date: string;
  rating: number;
  text: string;
  city?: string;
};

export const REVIEWS: Review[] = [
  {
    name: "Aarav Malhotra",
    city: "Bhopal",
    date: "2 weeks ago",
    rating: 5,
    text: "Celebrated my parents' 30th anniversary here. The dal makhani is legendary and the staff turned a dinner into a memory. Felt like royalty.",
  },
  {
    name: "Priya Sehgal",
    city: "Indore",
    date: "1 month ago",
    rating: 5,
    text: "Drove all the way from Indore for the butter chicken — worth every kilometre. The interior is straight out of a palace.",
  },
  {
    name: "Rohit Walia",
    city: "Bhopal",
    date: "3 weeks ago",
    rating: 5,
    text: "Best Punjabi food in Bhopal, period. Their seekh kebab is what dreams are made of. Drive-through is super fast too.",
  },
  {
    name: "Simran Kaur",
    city: "Delhi",
    date: "2 months ago",
    rating: 5,
    text: "As a Punjabi from Delhi, I'm picky. Shahi Pind passes — the sarson da saag tastes like my naani's. Khush ho gaya dil.",
  },
  {
    name: "Karan Bhatia",
    city: "Bhopal",
    date: "5 days ago",
    rating: 5,
    text: "We booked a private cabin for my daughter's birthday — they decorated it beautifully and gave us a free cake. Beyond service.",
  },
  {
    name: "Anjali Nair",
    city: "Bhopal",
    date: "1 week ago",
    rating: 4,
    text: "Loved the IPL screening night. Food, vibe, big screen — everything was top class. Will be back for the finals.",
  },
];