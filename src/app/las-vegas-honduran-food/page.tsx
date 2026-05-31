import type { Metadata } from "next";
import Link from "next/link";
import VIPWaitlist from "@/components/VIPWaitlist";
import LaunchCountdown from "@/components/LaunchCountdown";

export const metadata: Metadata = {
  title: "Honduran Food Las Vegas | Authentic Baleadas, Tajadas & More",
  description: "Las Vegas is finally getting authentic Honduran street food. Catrachos Antojitos brings fresh baleadas, pastelitos, tajadas, and traditional Honduran plates to Las Vegas. Join the VIP waitlist.",
  keywords: ["Honduran food Las Vegas", "authentic Honduran Las Vegas", "Honduras restaurant Las Vegas", "Catrachos Antojitos"],
  alternates: { canonical: "https://catrachosantojitos.com/las-vegas-honduran-food" },
};

export default function Page() {
  return (
    <div className="pt-24 bg-[#1C1008] min-h-screen">
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-[#D4891A] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Coming Soon</span>
        <h1 className="font-display text-[#F4E4C1] leading-none mb-6" style={{ fontSize:"clamp(2.5rem,6vw,5rem)" }}>
          AUTHENTIC HONDURAN<br /><span className="gradient-gold">FOOD IN LAS VEGAS</span>
        </h1>
        <p className="text-[#F4E4C1]/60 text-lg leading-relaxed mb-6 max-w-2xl">
          Las Vegas has been waiting for real Honduran street food. Catrachos Antojitos is a family-owned Honduran food truck bringing the authentic flavors of Honduras to Las Vegas — fresh baleadas, crispy pastelitos, loaded tajadas, and traditional Honduran plates made from family recipes passed down for generations.
        </p>
        <p className="text-[#F4E4C1]/60 text-base leading-relaxed mb-10 max-w-2xl">
          We're opening in Fall 2026 and serving Las Vegas, Henderson, Summerlin, and North Las Vegas. Join the VIP waitlist to be first in line.
        </p>
        <div className="mb-12">
          <p className="text-[#D4891A] text-xs font-bold uppercase tracking-widest mb-5">🚀 Grand Opening Countdown</p>
          <LaunchCountdown />
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            {["Baleadas — Honduras' #1 Street Food","Pastelitos — Golden Fried Corn Pockets","Tajadas — Crispy Fried Green Plantains","Plato Típico — The Full Honduran Plate","Aguas Frescas — Jamaica & Horchata"].map((item) => (
              <div key={item} className="flex items-center gap-3 text-[#F4E4C1]/70 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4891A] shrink-0" />{item}
              </div>
            ))}
          </div>
          <VIPWaitlist source="seo-honduran-food" compact />
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/menu" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#8B1A1A] text-[#F4E4C1] font-bold text-sm hover:bg-[#B52020] transition-colors">Preview the Menu</Link>
          <Link href="/catering" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#D4891A]/30 text-[#D4891A] font-bold text-sm hover:bg-[#D4891A]/10 transition-colors">Book Catering Now</Link>
        </div>
      </section>
    </div>
  );
}
