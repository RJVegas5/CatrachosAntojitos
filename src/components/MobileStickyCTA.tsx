"use client";
import Link from "next/link";
import { Bell, CalendarDays } from "lucide-react";

export default function MobileStickyCTA() {
  return (
    <div className="mobile-cta-bar">
      <a href="#vip-waitlist"
        className="col-span-2 flex items-center justify-center gap-2 py-3.5
          bg-[#D4891A] text-[#1C1008] text-xs font-bold tracking-wide uppercase">
        <Bell className="w-4 h-4" />
        Get Notified at Launch
      </a>
      <Link href="/catering"
        className="col-span-2 flex items-center justify-center gap-2 py-3.5
          bg-[#8B1A1A] text-[#F4E4C1] text-xs font-bold tracking-wide uppercase">
        <CalendarDays className="w-4 h-4" />
        Book Catering
      </Link>
    </div>
  );
}
