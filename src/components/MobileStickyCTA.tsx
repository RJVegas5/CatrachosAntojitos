"use client";
import Link from "next/link";
import { ShoppingBag, CalendarDays } from "lucide-react";
import { BRAND } from "@/lib/data";

export default function MobileStickyCTA() {
  return (
    <div className="mobile-sticky-cta md:hidden">
      <a
        href={BRAND.uberEats}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-white/10 text-white text-sm font-bold border border-white/20"
      >
        <ShoppingBag className="w-4 h-4" />
        Order Now
      </a>
      <Link
        href="/catering"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-[#e8a020] text-[#1a0e08] text-sm font-bold"
      >
        <CalendarDays className="w-4 h-4" />
        Book Catering
      </Link>
    </div>
  );
}
