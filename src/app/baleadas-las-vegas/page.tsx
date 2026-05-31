import type { Metadata } from "next";
import Link from "next/link";
import VIPWaitlist from "@/components/VIPWaitlist";
import ImageWithFallback from "@/components/ImageWithFallback";

export const metadata: Metadata = {
  title: "Baleadas Las Vegas | Fresh Honduran Baleadas Coming to Las Vegas",
  description: "Catrachos Antojitos is bringing authentic Honduran baleadas to Las Vegas. Hand-pressed flour tortillas, refried beans, crema, and queso fresco. Join the VIP waitlist — grand opening Fall 2026.",
  keywords: ["baleadas Las Vegas", "Honduran baleadas Las Vegas", "baleada near me Las Vegas"],
  alternates: { canonical: "https://catrachosantojitos.com/baleadas-las-vegas" },
};

export default function Page() {
  return (
    <div className="pt-24 bg-[#1C1008] min-h-screen">
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-[#D4891A] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Coming Fall 2026</span>
        <h1 className="font-display text-[#F4E4C1] leading-none mb-5" style={{ fontSize:"clamp(2.5rem,6vw,5rem)" }}>
          BALEADAS IN<br /><span className="gradient-gold">LAS VEGAS</span>
        </h1>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[#F4E4C1]/60 text-base leading-relaxed mb-5">
              A baleada is Honduras' most beloved street food — a thick, hand-pressed flour tortilla folded with creamy refried beans, fresh crema, and crumbled queso fresco. Simple, filling, and absolutely delicious.
            </p>
            <p className="text-[#F4E4C1]/60 text-base leading-relaxed mb-5">
              At Catrachos Antojitos, we make our baleadas the real way — tortillas pressed by hand every morning, beans slow-cooked overnight, and traditional toppings from our family's recipe in Honduras.
            </p>
            <p className="text-[#F4E4C1]/60 text-base leading-relaxed mb-8">
              We offer the Baleada Sencilla (beans, crema, queso), Baleada Especial (with egg), Baleada de Pollo (grilled chicken), and Baleada de Carne (seasoned beef). Coming to Las Vegas Fall 2026.
            </p>
            <div className="relative h-56 rounded-2xl overflow-hidden mb-6">
              <ImageWithFallback src="https://images.pexels.com/photos/7613678/pexels-photo-7613678.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" alt="Baleada" fill className="object-cover" fallbackEmoji="🫓" sizes="(max-width:768px) 100vw,50vw" />
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/menu" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#8B1A1A] text-[#F4E4C1] font-bold text-sm hover:bg-[#B52020] transition-colors">View Full Menu</Link>
            </div>
          </div>
          <VIPWaitlist source="seo-baleadas" />
        </div>
      </section>
    </div>
  );
}
