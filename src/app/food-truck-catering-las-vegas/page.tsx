import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Food Truck Catering Las Vegas | Honduran Food Truck Catering",
  description: "Book Catrachos Antojitos Honduran food truck for your Las Vegas event. Corporate events, weddings, quinceañeras, birthday parties & more. Now accepting 2026 catering inquiries.",
  keywords: ["food truck catering Las Vegas", "Honduran catering Las Vegas", "Las Vegas food truck events", "catering Las Vegas food truck"],
  alternates: { canonical: "https://catrachosantojitos.com/food-truck-catering-las-vegas" },
};

const cateringSchema = {
  "@context": "https://schema.org",
  "@type": "FoodService",
  name: "Catrachos Antojitos Catering",
  description: "Authentic Honduran food truck catering for events in Las Vegas, NV",
  url: "https://catrachosantojitos.com/food-truck-catering-las-vegas",
  areaServed: [
    { "@type": "City", name: "Las Vegas" },
    { "@type": "City", name: "Henderson" },
    { "@type": "Place", name: "Summerlin, Las Vegas" },
    { "@type": "City", name: "North Las Vegas" },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cateringSchema) }} />
      <div className="pt-24 bg-[#1C1008] min-h-screen">
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4ADE80]/10 border border-[#4ADE80]/25 text-[#4ADE80] text-xs font-bold tracking-widest uppercase mb-6">
            ● Now Accepting 2026 Bookings
          </span>
          <h1 className="font-display text-[#F4E4C1] leading-none mb-6" style={{ fontSize:"clamp(2.5rem,6vw,5rem)" }}>
            FOOD TRUCK CATERING<br /><span className="gradient-gold">LAS VEGAS</span>
          </h1>
          <p className="text-[#F4E4C1]/60 text-lg leading-relaxed mb-8 max-w-2xl">
            Catrachos Antojitos brings authentic Honduran street food directly to your venue. We're not open to the public yet — but we ARE accepting catering bookings for 2026 events in Las Vegas, Henderson, Summerlin, and North Las Vegas.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {["Corporate Events","Weddings","Quinceañeras & Birthdays","Church Events","School Events","Festivals & Markets","Private Parties","Gym & Community Events"].map((t) => (
              <div key={t} className="flex items-center gap-3 p-4 rounded-xl bg-[#2A1A0E] border border-[#F4E4C1]/6 text-[#F4E4C1]/70 text-sm">
                <span className="w-2 h-2 rounded-full bg-[#D4891A] shrink-0" />{t}
              </div>
            ))}
          </div>
          <div className="p-6 rounded-2xl bg-[#2A1A0E] border border-[#D4891A]/20 mb-8">
            <p className="text-[#F4E4C1] font-bold mb-2">Why book now?</p>
            <ul className="space-y-2 text-[#F4E4C1]/55 text-sm">
              {["Lock in your preferred date before we open","Priority scheduling for early inquiries","Serve 50–500+ guests","Las Vegas, Henderson, Summerlin & North LV coverage","Full setup, service, and cleanup included"].map((i) => (
                <li key={i} className="flex items-center gap-2"><span className="text-[#D4891A]">✓</span>{i}</li>
              ))}
            </ul>
          </div>
          <Link href="/catering"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-[#D4891A] text-[#1C1008] font-bold text-base hover:bg-[#F0A830] transition-colors">
            Submit Catering Inquiry →
          </Link>
        </section>
      </div>
    </>
  );
}
