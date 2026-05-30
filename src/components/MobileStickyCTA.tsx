"use client";
import Link from "next/link";
import { ShoppingBag, MapPin, CalendarDays, Phone } from "lucide-react";
import { BRAND } from "@/lib/data";

const buttons = [
  {
    label: "Order",
    icon: ShoppingBag,
    href: BRAND.uberEats,
    external: true,
    bg: "bg-[#D4891A]",
    text: "text-[#1C1008]",
  },
  {
    label: "Find Us",
    icon: MapPin,
    href: "/locations",
    external: false,
    bg: "bg-[#2A1A0E]",
    text: "text-[#F4E4C1]",
  },
  {
    label: "Catering",
    icon: CalendarDays,
    href: "/catering",
    external: false,
    bg: "bg-[#8B1A1A]",
    text: "text-[#F4E4C1]",
  },
  {
    label: "Call",
    icon: Phone,
    href: `tel:${BRAND.phone}`,
    external: true,
    bg: "bg-[#2A1A0E]",
    text: "text-[#F4E4C1]",
  },
];

export default function MobileStickyCTA() {
  return (
    <div className="mobile-cta-bar">
      {buttons.map((b) => {
        const Icon = b.icon;
        const className = `flex flex-col items-center justify-center gap-1 py-3 ${b.bg} ${b.text} text-[10px] font-bold tracking-wide uppercase active:opacity-80 transition-opacity`;
        return b.external ? (
          <a key={b.label} href={b.href} target={b.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer" className={className}>
            <Icon className="w-4 h-4" />
            {b.label}
          </a>
        ) : (
          <Link key={b.label} href={b.href} className={className}>
            <Icon className="w-4 h-4" />
            {b.label}
          </Link>
        );
      })}
    </div>
  );
}
