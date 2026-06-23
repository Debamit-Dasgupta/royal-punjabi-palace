import { SITE } from "./site";

export function waLink(message: string): string {
  return `https://wa.me/${SITE.waNumber}?text=${encodeURIComponent(message)}`;
}

export function reservationMessage(d: {
  name: string;
  phone: string;
  guests: number | string;
  date: string;
  time: string;
  occasion?: string;
  message?: string;
}): string {
  return [
    `🪔 *Royal Reservation Request — Shahi Pind*`,
    ``,
    `*Name:* ${d.name}`,
    `*Phone:* ${d.phone}`,
    `*Guests:* ${d.guests}`,
    `*Date:* ${d.date}`,
    `*Time:* ${d.time}`,
    d.occasion ? `*Occasion:* ${d.occasion}` : null,
    d.message ? `*Message:* ${d.message}` : null,
    ``,
    `Please confirm my table. Dhanyavaad! 🙏`,
  ]
    .filter(Boolean)
    .join("\n");
}

export function contactMessage(d: {
  name: string;
  phone?: string;
  email?: string;
  message: string;
}): string {
  return [
    `Namaste Shahi Pind 🙏`,
    ``,
    `*Name:* ${d.name}`,
    d.phone ? `*Phone:* ${d.phone}` : null,
    d.email ? `*Email:* ${d.email}` : null,
    ``,
    d.message,
  ]
    .filter(Boolean)
    .join("\n");
}