"use client";

const PHRASES_A = [
  "🫓 Hand-Pressed Baleadas",
  "🌮 Fresh Daily",
  "🍌 Crispy Tajadas",
  "🇭🇳 Honduran Street Food",
  "🥟 Golden Pastelitos",
  "🔥 Las Vegas Food Truck",
  "⭐ Catering Available",
  "🎉 Book Us For Your Event",
];

const PHRASES_B = [
  "✦ Plato Típico",
  "✦ Aguas Frescas",
  "✦ Carne Asada",
  "✦ Baleadas Las Vegas",
  "✦ Maduros",
  "✦ Order on Uber Eats",
  "✦ North Las Vegas",
  "✦ Henderson • Summerlin",
];

export default function MarqueeBanner({ reverse = false, dark = false }: { reverse?: boolean; dark?: boolean }) {
  const phrases = reverse ? PHRASES_B : PHRASES_A;
  const doubled = [...phrases, ...phrases];
  return (
    <div className={`overflow-hidden py-3 border-y ${dark ? "bg-[#1C1008] border-[#F4E4C1]/5" : "bg-[#8B1A1A] border-[#F0A830]/15"}`}>
      <div className={`flex whitespace-nowrap ${reverse ? "animate-marquee-rtl" : "animate-marquee"}`}>
        {doubled.map((phrase, i) => (
          <span key={i} className={`inline-block mx-5 text-sm font-bold tracking-wider ${dark ? "text-[#F4E4C1]/40" : "text-[#F4E4C1]/90"}`}>
            {phrase}
          </span>
        ))}
      </div>
    </div>
  );
}
