"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Flame } from "lucide-react";
import { MENU_CATEGORIES, MENU_ITEMS } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import MarqueeBanner from "@/components/MarqueeBanner";
import { BRAND } from "@/lib/data";

export default function MenuClient() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = activeCategory === "All"
    ? MENU_ITEMS
    : MENU_ITEMS.filter((i) => i.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0f0805] to-[#1a0e08]">
        <div className="absolute inset-0 texture-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#7c1d27/20_0%,_transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#e8a020] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">Catrachos Antojitos</span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#f5e6c8] mb-5">
              Our <span className="gradient-text">Menu</span>
            </h1>
            <p className="text-[#f5e6c8]/60 text-lg max-w-xl mx-auto mb-8">
              Traditional Honduran street food made fresh daily — from hand-pressed baleadas to crispy tajadas loaded with flavor.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={BRAND.uberEats} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#e8a020] to-[#f5c842] text-[#1a0e08] font-bold hover:scale-105 transition-transform">
                <ShoppingBag className="w-4 h-4" />Order on Uber Eats
              </a>
              <a href={BRAND.doorDash} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#7c1d27] text-white font-bold hover:bg-[#9e1f1f] transition-colors">
                <ShoppingBag className="w-4 h-4" />Order on DoorDash
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <MarqueeBanner />

      {/* Menu Content */}
      <section className="py-16 bg-[#1a0e08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-12 scrollbar-hide">
            {MENU_CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[#7c1d27] to-[#9e1f1f] text-white shadow-lg"
                    : "bg-[#0f0805] text-[#f5e6c8]/60 hover:text-[#e8a020] border border-[#7c1d27]/20"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04 }}
                  className="card-lift group rounded-2xl overflow-hidden bg-[#0f0805] border border-[#7c1d27]/20 flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0805]/70 to-transparent" />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                      {item.badges.map((b) => (
                        <span key={b} className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                          b === "Best Seller" ? "bg-[#e8a020] text-[#1a0e08]" :
                          b === "Popular" ? "bg-[#7c1d27] text-white" :
                          b === "New" ? "bg-[#0038a8] text-white" :
                          b === "Vegetarian" ? "bg-green-700 text-white" :
                          "bg-[#2c1810] text-[#f5e6c8]"
                        }`}>{b}</span>
                      ))}
                      {item.spicy && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-600 text-white flex items-center gap-0.5">
                          <Flame className="w-2.5 h-2.5" /> Spicy
                        </span>
                      )}
                    </div>
                    <span className="absolute bottom-3 right-3 bg-[#0f0805]/80 backdrop-blur px-2.5 py-1 rounded-lg text-[#e8a020] font-bold text-sm">
                      {item.price}
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-[#f5e6c8] font-bold text-sm mb-1.5">{item.name}</h3>
                    <p className="text-[#f5e6c8]/50 text-xs leading-relaxed flex-1">{item.description}</p>
                    <a
                      href={BRAND.uberEats}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 w-full py-2.5 rounded-lg bg-[#7c1d27]/30 hover:bg-[#7c1d27] text-[#f5e6c8] text-xs font-bold text-center transition-colors border border-[#7c1d27]/30"
                    >
                      Order This
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Catering CTA */}
      <section className="py-16 bg-[#0f0805]">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#f5e6c8] mb-4">Want the Whole Menu at Your Event?</h2>
          <p className="text-[#f5e6c8]/60 mb-6">We bring the full Catrachos Antojitos experience to your venue.</p>
          <Link href="/catering"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#e8a020] to-[#f5c842] text-[#1a0e08] font-bold hover:scale-105 transition-transform">
            Book Catering
          </Link>
        </div>
      </section>
    </div>
  );
}
