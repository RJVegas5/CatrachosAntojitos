"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Heart, Flame, Star } from "lucide-react";
import MarqueeBanner from "@/components/MarqueeBanner";
import ImageWithFallback from "@/components/ImageWithFallback";

const VALUES = [
  { icon: Heart, title: "Family First",    desc: "Every recipe comes from our family's kitchen in Honduras. We cook like your abuela would — with patience, love, and no shortcuts." },
  { icon: Flame, title: "Made Fresh Daily", desc: "Tortillas pressed by hand every morning. Beans slow-cooked overnight. Fresh crema, fresh queso, fresh everything." },
  { icon: Star,  title: "Community Pride", desc: "We're more than a food truck — we're a piece of Honduran culture in Las Vegas. Every plate tells our story." },
];

export default function AboutClient() {
  return (
    <div className="pt-20 bg-[#1C1008]">

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1920&h=900&fit=crop&q=80"
            alt="Honduran food"
            fill className="object-cover" fallbackEmoji="🍽️" sizes="100vw" priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C1008]/80 via-[#1C1008]/60 to-[#1C1008]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1008]/80 to-transparent" />
        </div>
        <div className="relative py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="max-w-xl">
            <span className="text-[#D4891A] text-xs font-bold tracking-[0.3em] uppercase mb-5 block">Our Story</span>
            <h1 className="font-display text-[#F4E4C1] text-6xl md:text-8xl leading-none mb-6">
              MADE WITH<br /><span className="gradient-gold">HONDURAN</span><br />HEART
            </h1>
            <p className="text-[#F4E4C1]/65 text-lg leading-relaxed">
              We didn't open a food truck. We brought Honduras to Las Vegas.
            </p>
          </motion.div>
        </div>
      </section>

      <MarqueeBanner />

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Photos */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="relative h-[440px] rounded-3xl overflow-hidden mb-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop&q=85"
                  alt="Food spread"
                  fill className="object-cover" fallbackEmoji="🍽️" sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { src: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=300&h=200&fit=crop&q=80", emoji: "🫓" },
                  { src: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=300&h=200&fit=crop&q=80", emoji: "🍌" },
                  { src: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=300&h=200&fit=crop&q=80", emoji: "🥩" },
                ].map((p, i) => (
                  <div key={i} className="relative h-28 rounded-2xl overflow-hidden">
                    <ImageWithFallback src={p.src} alt="Food" fill className="object-cover" fallbackEmoji={p.emoji} sizes="25vw" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Text */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="lg:pt-8">
              <span className="text-[#D4891A] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">How It Started</span>
              <h2 className="font-display text-[#F4E4C1] text-4xl md:text-5xl leading-none mb-7">
                BORN FROM<br />TRADITION
              </h2>
              <div className="space-y-4 text-[#F4E4C1]/60 text-base leading-relaxed">
                <p>Catrachos Antojitos was born from something simple: a longing for the flavors of home. When our family first arrived in Las Vegas, nothing tasted quite right. The baleadas were missing that hand-pressed tortilla texture. The beans weren't slow-cooked the Honduran way.</p>
                <p>So we started cooking — first for family, then for friends, then for neighbors who started showing up every weekend with empty plates and hungry smiles. Word spread fast. "You need to sell this." We heard it so many times we finally believed it.</p>
                <p>We launched the truck with one mission: bring authentic Honduran antojitos to Las Vegas and make every customer feel like they're eating at a family table in Tegucigalpa. Every recipe came from our grandmothers. Every tortilla is still pressed by hand every morning.</p>
                <p>No shortcuts. No compromises. Just real Honduran food, made with love.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F4E4C1] texture-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#8B1A1A] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">What Drives Us</span>
            <h2 className="font-display text-[#1C1008] text-5xl md:text-6xl leading-none">OUR VALUES</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <motion.div key={v.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-[#1C1008] rounded-3xl p-8 text-center shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-[#8B1A1A] flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-7 h-7 text-[#D4891A]" />
                </div>
                <h3 className="font-display text-[#F4E4C1] text-2xl mb-3">{v.title}</h3>
                <p className="text-[#F4E4C1]/50 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Honduras Pride */}
      <section className="py-20 bg-[#8B1A1A] texture-grain relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="font-display text-[25vw] text-[#F4E4C1]/4 leading-none select-none">HN</span>
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <span className="text-6xl block mb-6">🇭🇳</span>
          <h2 className="font-display text-[#F4E4C1] text-5xl md:text-6xl leading-none mb-6">
            PROUD TO BE<br /><span className="gradient-gold">CATRACHO</span>
          </h2>
          <p className="text-[#F4E4C1]/65 text-base leading-relaxed mb-4">
            "Catracho" is what we call ourselves — Hondurans. It's a word worn with pride. Our food is a celebration of where we come from: the street vendors of Tegucigalpa, the family kitchens of San Pedro Sula, the Sunday markets of Comayagua.
          </p>
          <p className="text-[#F4E4C1]/65 text-base leading-relaxed">
            Every baleada is a piece of Honduras. Every tajada is a connection to home. We serve our food with that pride on every plate.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2A1A0E]">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="font-display text-[#F4E4C1] text-4xl mb-4">COME TASTE THE STORY</h2>
          <p className="text-[#F4E4C1]/50 text-base mb-8">Find us around Las Vegas or book us for your next event.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/locations"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#D4891A] text-[#1C1008] font-bold text-sm hover:bg-[#F0A830] transition-colors">
              Find the Truck <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/catering"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-[#F4E4C1]/15 text-[#F4E4C1] font-bold text-sm hover:border-[#F4E4C1]/35 transition-colors">
              Book Catering
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
