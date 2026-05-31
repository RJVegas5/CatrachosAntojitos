"use client";

const LAUNCH_PHRASES = [
  "🎉 Grand Opening Coming Soon",
  "⭐ Join the VIP List",
  "🇭🇳 Authentic Honduran Food in Las Vegas",
  "📅 Now Accepting Catering Inquiries",
  "🔔 Be First to Know When We Open",
  "🫓 Fresh Baleadas Coming to Las Vegas",
  "🥟 Golden Pastelitos Made Fresh Daily",
  "🍌 Crispy Tajadas Con Sabor",
  "💍 Catering: Weddings · Quinceañeras · Events",
];

const DARK_PHRASES = [
  "✦ Hecho Con Amor",
  "✦ Honduran Street Food",
  "✦ Las Vegas · Henderson · Summerlin",
  "✦ Plato Típico Hondureño",
  "✦ Family Recipes · Fresh Daily",
  "✦ Catering Available Now",
  "✦ Coming Summer 2026",
  "✦ North Las Vegas",
];

export default function MarqueeBanner({
  reverse = false,
  dark = false,
}: {
  reverse?: boolean;
  dark?: boolean;
}) {
  const phrases = dark ? DARK_PHRASES : LAUNCH_PHRASES;
  const doubled = [...phrases, ...phrases];

  return (
    <div
      className={`overflow-hidden py-3 border-y ${
        dark
          ? "bg-[#1C1008] border-[#F4E4C1]/5"
          : "bg-[#8B1A1A] border-[#F0A830]/15"
      }`}
    >
      <div
        className={`flex whitespace-nowrap ${
          reverse ? "animate-marquee-rtl" : "animate-marquee"
        }`}
      >
        {doubled.map((phrase, i) => (
          <span
            key={i}
            className={`inline-block mx-6 text-sm font-bold tracking-wider ${
              dark ? "text-[#F4E4C1]/35" : "text-[#F4E4C1]/90"
            }`}
          >
            {phrase}
          </span>
        ))}
      </div>
    </div>
  );
}
