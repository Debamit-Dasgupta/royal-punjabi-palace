export const SITE = {
  name: "Shahi Pind",
  tagline: "The Royal Taste of Punjab",
  phone: "8962612121",
  phoneIntl: "+918962612121",
  waNumber: "918962612121",
  hours: "12:00 PM – 11:30 PM",
  priceRange: "₹400 – ₹1600",
  rating: 4.7,
  reviews: 523,
  address: {
    line1: "Ayodhya Bypass Road, K-Sector",
    line2: "Ayodhya Nagar, Bhopal",
    region: "Madhya Pradesh",
    postal: "462010",
    country: "IN",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Shahi+Pind+Ayodhya+Bypass+Road+Bhopal",
  mapsEmbed:
    "https://www.google.com/maps?q=Shahi+Pind+Ayodhya+Bypass+Road+Bhopal&output=embed",
  socials: {
    instagram: "https://instagram.com/shahipind",
    facebook: "https://facebook.com/shahipind",
    google: "https://g.page/shahipind",
  },
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/celebrations", label: "Celebrations" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;