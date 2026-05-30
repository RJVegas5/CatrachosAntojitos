"use client";
import { Flame } from "lucide-react";

const phrases = [
  "Honduran Street Food",
  "Fresh Baleadas",
  "Catering Available",
  "Las Vegas Food Truck",
  "Pastelitos Made Fresh",
  "Tajadas Con Sabor",
  "Plato Típico Hondureño",
  "Book Us For Your Event",
  "Order on Uber Eats",
];

export default function MarqueeBanner() {
  const doubled = [...phrases, ...phrases];
  return (
    <div className="bg-gradient-to-r from-[#7c1d27] via-[#9e1f1f] to-[#7c1d27] py-2.5 overflow-hidden border-y border-[#e8a020]/20">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((phrase, i) => (
          <span key={i} className="inline-flex items-center gap-3 mx-6 text-[#f5e6c8] text-sm font-medium tracking-wide">
            <Flame className="w-3.5 h-3.5 text-[#e8a020] shrink-0" />
            {phrase}
          </span>
        ))}
      </div>
    </div>
  );
}
