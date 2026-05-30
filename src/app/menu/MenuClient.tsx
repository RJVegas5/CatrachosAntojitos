"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ShoppingBag, Flame, Leaf } from "lucide-react";
import { MENU_CATEGORIES, MENU_ITEMS } from "@/lib/data";
import MarqueeBanner from "@/components/MarqueeBanner";
import ImageWithFallback from "@/components/ImageWithFallback";
import { BRAND } from "@/lib/data";

const BADGE_STYLE: Record<string, string> = {
  "Best Seller": "bg-[#D4891A] text-[#1C1008]",
  "Popular":     "bg-[#8B1A1A] text-[#F4E4C1]",
  "New":         "bg-[#003087] text-white",
  "Vegetarian":  "bg-emerald-700 text-white",
};

const CATEGORY_EMOJI: Record<string, string> = {
  All:        "🍽️",
  Baleadas:   "🫓",
  Pastelitos: "🥟",
  Tajadas:    "🍌",
  Plates:     "🍛",
  Sides:      "🌽",
  Drinks:     "🥤",
};

export default function MenuClient() {
  const [active, setActive] = useState<string>("All");

  const filtered = active === "All" ? MENU_ITEMS : MENU_ITEMS.filter((i) => i.category === active);

  return (
    <div className="pt-20 bg-[#1C1008] min-h-screen">

      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-[#2A1A0E] texture-grain">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,_rgba(139,26,26,0.3)_0%,_transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[#D4891A] text-xs font-bold tracking-[0.3em] uppercase mb-5 block">Catrachos Antojitos</span>
            <h1 className="font-display text-[#F4E4C1] text-6xl md:text-8xl leading-none mb-4">
              THE MENU
            </h1>
            <p className="text-[#F4E4C1]/55 text-base sm:text-lg max-w-md mx-auto mb-8">
              Everything made fresh. Every order made with love. The flavors of Honduras — right here in Las Vegas.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={BRAND.uberEats} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#D4891A] text-[#1C1008] font-bold text-sm tracking-wide hover:bg-[#F0A830] transition-colors">
                <ShoppingBag className="w-4 h-4" />Order on Uber Eats
              </a>
              <a href={BRAND.doorDash} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#8B1A1A] text-[#F4E4C1] font-bold text-sm tracking-wide hover:bg-[#B52020] transition-colors">
                <ShoppingBag className="w-4 h-4" />Order on DoorDash
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <MarqueeBanner />

      {/* Menu */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category tabs */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 mb-12">
            {MENU_CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActive(cat)}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition-all shrink-0 ${
                  active === cat
                    ? "bg-[#8B1A1A] text-[#F4E4C1] shadow-lg shadow-[#8B1A1A]/30"
                    : "bg-[#2A1A0E] text-[#F4E4C1]/60 hover:text-[#F4E4C1] border border-[#F4E4C1]/8"
                }`}
              >
                <span>{CATEGORY_EMOJI[cat]}</span>
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  whileHover={{ y: -6 }}
                  className="group rounded-2xl overflow-hidden bg-[#2A1A0E] border border-[#F4E4C1]/6 flex flex-col shadow-lg"
                >
                  {/* Image */}
                  <div className="relative h-52 shrink-0 overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-600"
                      fallbackEmoji={item.fallbackEmoji}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1008]/80 via-[#1C1008]/20 to-transparent" />

                    {/* Badges top-left */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {item.badges.map((b) => (
                        <span key={b} className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${BADGE_STYLE[b] ?? "bg-[#2A1A0E] text-[#F4E4C1]"}`}>
                          {b}
                        </span>
                      ))}
                    </div>

                    {/* Tags top-right */}
                    <div className="absolute top-3 right-3 flex flex-col gap-1.5 items-end">
                      {item.spicy && (
                        <span title="Spicy" className="w-7 h-7 rounded-full bg-red-600/90 flex items-center justify-center">
                          <Flame className="w-3.5 h-3.5 text-white" />
                        </span>
                      )}
                      {item.vegetarian && (
                        <span title="Vegetarian" className="w-7 h-7 rounded-full bg-emerald-700/90 flex items-center justify-center">
                          <Leaf className="w-3.5 h-3.5 text-white" />
                        </span>
                      )}
                    </div>

                    {/* Category pill bottom */}
                    <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full bg-[#1C1008]/70 backdrop-blur-sm text-[#F4E4C1]/60 text-[10px] font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-[#F4E4C1] font-bold text-sm mb-2 leading-snug">{item.name}</h3>
                    <p className="text-[#F4E4C1]/45 text-xs leading-relaxed flex-1 line-clamp-3">{item.description}</p>
                    <a
                      href={BRAND.uberEats}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 w-full py-2.5 rounded-xl bg-[#D4891A]/12 hover:bg-[#D4891A] text-[#D4891A] hover:text-[#1C1008] text-xs font-bold text-center transition-all border border-[#D4891A]/25 hover:border-transparent"
                    >
                      Add to Order ↗
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mt-10 pt-8 border-t border-[#F4E4C1]/6">
            <span className="flex items-center gap-1.5 text-[#F4E4C1]/40 text-xs">
              <Flame className="w-3.5 h-3.5 text-red-500" /> Spicy
            </span>
            <span className="flex items-center gap-1.5 text-[#F4E4C1]/40 text-xs">
              <Leaf className="w-3.5 h-3.5 text-emerald-500" /> Vegetarian
            </span>
            <span className="flex items-center gap-1.5 text-[#F4E4C1]/40 text-xs">
              <span className="px-2 py-0.5 rounded-full bg-[#D4891A] text-[#1C1008] text-[9px] font-bold">Best Seller</span> Customer Favorite
            </span>
          </div>
        </div>
      </section>

      {/* Catering CTA */}
      <section className="bg-[#8B1A1A] py-16 texture-grain">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="font-display text-[#F4E4C1] text-4xl md:text-5xl mb-4">WANT IT ALL AT YOUR EVENT?</h2>
          <p className="text-[#F4E4C1]/65 text-base mb-7">We bring the full Catrachos Antojitos truck to your venue.</p>
          <Link href="/catering"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#D4891A] text-[#1C1008] font-bold text-sm hover:bg-[#F0A830] transition-colors">
            Book Catering Now
          </Link>
        </div>
      </section>
    </div>
  );
}
