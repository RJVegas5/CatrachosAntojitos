"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Heart, Flame, Star, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import MarqueeBanner from "@/components/MarqueeBanner";

const VALUES = [
  { icon: Heart, title: "Family First", desc: "Every recipe comes from our family's kitchen in Honduras. We cook like your abuela would." },
  { icon: Flame, title: "Made Fresh Daily", desc: "Tortillas pressed by hand every morning. Beans slow-cooked overnight. No shortcuts, ever." },
  { icon: Star, title: "Community Pride", desc: "We're more than a food truck — we're a piece of Honduran culture in Las Vegas." },
];

export default function AboutClient() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1920&q=80"
          alt="Honduran food"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0805]/95 to-[#0f0805]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0805] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="text-[#e8a020] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#f5e6c8] mb-5 leading-tight">
              Made with <span className="gradient-text">Honduran</span> Heart
            </h1>
            <p className="text-[#f5e6c8]/70 text-xl leading-relaxed">
              We didn't open a food truck. We brought Honduras to Las Vegas.
            </p>
          </motion.div>
        </div>
      </section>

      <MarqueeBanner />

      {/* Story */}
      <section className="py-20 bg-[#1a0e08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <SectionHeading eyebrow="How It Started" title="Born from Tradition" />
              <div className="space-y-4 text-[#f5e6c8]/65 text-base leading-relaxed">
                <p>
                  Catrachos Antojitos was born from something simple: a longing for the flavors of home. When our family first arrived in Las Vegas, nothing tasted quite right. The baleadas were missing that hand-pressed tortilla texture. The beans weren't slow-cooked the Honduran way. The pastelitos just didn't have that crunch.
                </p>
                <p>
                  So we started cooking — first for family, then for friends, then for neighbors who started showing up every weekend with empty plates and hungry smiles. Word spread fast. "You need to sell this." We heard it so many times we finally believed it.
                </p>
                <p>
                  We launched the truck with a simple mission: bring authentic Honduran antojitos to Las Vegas and make every customer feel like they're eating at a family table in Tegucigalpa. We use the same recipes passed down from our grandmothers. We press tortillas by hand every single morning. We slow-cook the beans overnight.
                </p>
                <p>
                  No shortcuts. No compromises. Just real Honduran food, made with love.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
              <div className="relative h-[480px] rounded-3xl overflow-hidden mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=85"
                  alt="Our food"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0805]/60 to-transparent" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&q=80",
                  "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&q=80",
                  "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=300&q=80",
                ].map((src, i) => (
                  <div key={i} className="relative h-24 rounded-xl overflow-hidden">
                    <Image src={src} alt="Food" fill className="object-cover" sizes="33vw" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#0f0805]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What Drives Us" title="Our Values" centered />
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-[#1a0e08] border border-[#7c1d27]/20 text-center card-lift"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7c1d27] to-[#9e1f1f] flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-7 h-7 text-[#e8a020]" />
                </div>
                <h3 className="text-[#f5e6c8] font-bold text-lg mb-3">{v.title}</h3>
                <p className="text-[#f5e6c8]/55 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Honduras section */}
      <section className="py-20 bg-[#1a0e08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#7c1d27]/20 via-[#0f0805] to-[#0038a8]/10 border border-[#7c1d27]/20 p-10 md:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-4xl mb-6 block">🇭🇳</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#f5e6c8] mb-5 leading-tight">
                Proud to Be <span className="gradient-text">Catracho</span>
              </h2>
              <p className="text-[#f5e6c8]/65 text-base leading-relaxed mb-6">
                "Catracho" is what we call ourselves — Hondurans. It's a word worn with pride. Our food is a celebration of where we come from: the street vendors of Tegucigalpa, the family kitchens of San Pedro Sula, the Sunday markets of Comayagua.
              </p>
              <p className="text-[#f5e6c8]/65 text-base leading-relaxed">
                Every baleada is a piece of Honduras. Every tajada is a connection to home. We serve our food with that pride on every plate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0f0805]">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#f5e6c8] mb-4">Come Taste the Story</h2>
          <p className="text-[#f5e6c8]/60 mb-8">Find us around Las Vegas or book us for your next event.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/locations"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#7c1d27] text-white font-bold hover:bg-[#9e1f1f] transition-colors">
              Find the Truck <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/catering"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#e8a020] to-[#f5c842] text-[#1a0e08] font-bold hover:scale-105 transition-transform">
              Book Catering
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
