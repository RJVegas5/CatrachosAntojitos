"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin, Clock, Navigation, ShoppingBag, Star,
  ArrowRight, CalendarDays, Phone, ChevronDown,
} from "lucide-react";
import MarqueeBanner from "./MarqueeBanner";
import ImageWithFallback from "./ImageWithFallback";
import { InstagramIcon, TikTokIcon } from "./SocialIcons";
import { BRAND, MENU_ITEMS, TODAY_LOCATION } from "@/lib/data";

/* ─── constants ─── */
const FEATURED = MENU_ITEMS.filter(
  (i) => i.badges.includes("Best Seller") || i.badges.includes("Popular")
).slice(0, 6);

const DISH_STRIP = [
  { label: "Baleadas",   emoji: "🫓", img: MENU_ITEMS[0].image,  fallback: "🫓" },
  { label: "Pastelitos", emoji: "🥟", img: MENU_ITEMS[4].image,  fallback: "🥟" },
  { label: "Tajadas",    emoji: "🍌", img: MENU_ITEMS[7].image,  fallback: "🍌" },
  { label: "Carne Asada",emoji: "🥩", img: MENU_ITEMS[12].image, fallback: "🥩" },
  { label: "Plato Típico",emoji:"🍽️",img: MENU_ITEMS[10].image, fallback: "🍽️" },
  { label: "Maduros",    emoji: "🍌", img: MENU_ITEMS[14].image, fallback: "🍌" },
];

/* ─── floating bokeh particles ─── */
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: 30 + Math.random() * 65,   // stay in right 65% of screen
  y: 10 + Math.random() * 80,
  size: 2 + Math.random() * 4,
  delay: Math.random() * 4,
  duration: 3 + Math.random() * 4,
  opacity: 0.15 + Math.random() * 0.35,
}));

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const fadeSlide = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] } },
};

export default function HomepageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const truckY = useTransform(scrollY, [0, 700], [0, 80]);

  return (
    <div className="overflow-x-hidden">

      {/* ══════════════════════════════════════════════
          HERO — TRUCK IMAGE CENTREPIECE
      ══════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-[#100904]"
      >
        {/* ── BACKGROUND GLOW behind truck ── */}
        <div className="absolute inset-0 pointer-events-none">
          {/* warm amber radial glow — centred right */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full
            bg-[radial-gradient(ellipse_at_center,_rgba(212,137,26,0.12)_0%,_transparent_70%)]" />
          {/* deep red accent top-right */}
          <div className="absolute -top-20 right-1/4 w-[40vw] h-[40vw] rounded-full
            bg-[radial-gradient(ellipse_at_center,_rgba(139,26,26,0.15)_0%,_transparent_70%)]" />
        </div>

        {/* ── BOKEH PARTICLES (Edison bulbs feel) ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {PARTICLES.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-[#F0A830]"
              style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
              animate={{ opacity: [p.opacity * 0.4, p.opacity, p.opacity * 0.4], scale: [1, 1.4, 1] }}
              transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>

        {/* ── TRUCK IMAGE — right side, parallax ── */}
        <motion.div
          style={{ y: truckY }}
          className="absolute inset-y-0 right-0 w-full lg:w-[62%] pointer-events-none"
        >
          {/* cinematic slow zoom on the truck */}
          <motion.div
            className="relative w-full h-full"
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 9, ease: "easeOut" }}
          >
            <Image
              src="/food-truck.png"
              alt="Catrachos Antojitos food truck with crowd in Las Vegas"
              fill
              className="object-cover object-left"
              priority
              sizes="(max-width: 1024px) 100vw, 62vw"
            />
          </motion.div>

          {/* left-to-dark gradient so text is readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#100904] via-[#100904]/75 lg:via-[#100904]/50 to-transparent" />
          {/* bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#100904]/60 via-transparent to-[#100904]/30" />
        </motion.div>

        {/* ── HERO CONTENT ── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
          <div className="max-w-[560px]">

            {/* top badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full
                bg-[#D4891A]/15 border border-[#D4891A]/30 mb-7"
            >
              <span className="text-base">🇭🇳</span>
              <span className="text-[#D4891A] text-xs font-bold tracking-[0.22em] uppercase">
                Las Vegas Honduran Food Truck
              </span>
            </motion.div>

            {/* headline — staggered */}
            <motion.div variants={stagger} initial="hidden" animate="show" className="mb-5">
              <motion.h1 variants={fadeSlide}
                className="font-display text-[#F4E4C1] leading-none mb-1"
                style={{ fontSize: "clamp(3.2rem, 8vw, 5.5rem)" }}>
                THE HONDURAN
              </motion.h1>
              <motion.h1 variants={fadeSlide}
                className="font-display leading-none mb-1"
                style={{ fontSize: "clamp(3.2rem, 8vw, 5.5rem)" }}>
                <span className="gradient-gold">FOOD TRUCK</span>
              </motion.h1>
              <motion.h1 variants={fadeSlide}
                className="font-display text-[#F4E4C1]/70 leading-none"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                EVERYONE'S TALKING ABOUT
              </motion.h1>
            </motion.div>

            {/* subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="text-[#F4E4C1]/60 text-base leading-relaxed mb-7 max-w-[440px]"
            >
              Authentic Honduran street food made from family recipes, served fresh throughout Las Vegas — from giant baleadas and crispy tajadas to full catering for weddings, events, and parties.
            </motion.p>

            {/* social proof pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.55 }}
              className="flex flex-wrap items-center gap-2.5 mb-8"
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1C1008] border border-[#F4E4C1]/8">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_,i) => <Star key={i} className="w-3 h-3 fill-[#D4891A] text-[#D4891A]" />)}
                </div>
                <span className="text-[#F4E4C1]/60 text-xs font-medium">5-Star Rated</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1C1008] border border-[#F4E4C1]/8">
                <span className="text-[#4ADE80] text-xs">●</span>
                <span className="text-[#F4E4C1]/60 text-xs font-medium">Fresh Daily</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1C1008] border border-[#F4E4C1]/8">
                <span className="text-[#D4891A] text-xs">★</span>
                <span className="text-[#F4E4C1]/60 text-xs font-medium">Catracho-Owned</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1C1008] border border-[#F4E4C1]/8">
                <span className="text-[#F4E4C1]/60 text-xs font-medium">Available For Catering</span>
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.55 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a href={BRAND.uberEats} target="_blank" rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-7 py-4 rounded-xl
                  bg-[#D4891A] text-[#1C1008] font-bold text-sm tracking-wide overflow-hidden
                  hover:bg-[#F0A830] transition-colors glow-gold-anim">
                <ShoppingBag className="w-4 h-4" />
                Order Online
              </a>
              <Link href="/locations"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl
                  bg-[#1C1008]/80 backdrop-blur border-2 border-[#F4E4C1]/15
                  text-[#F4E4C1] font-bold text-sm tracking-wide
                  hover:border-[#D4891A]/50 hover:bg-[#1C1008] transition-all">
                <MapPin className="w-4 h-4" />
                Find The Truck
              </Link>
              <Link href="/catering"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl
                  bg-[#8B1A1A] text-[#F4E4C1] font-bold text-sm tracking-wide
                  hover:bg-[#B52020] transition-colors">
                <CalendarDays className="w-4 h-4" />
                Book Catering
              </Link>
            </motion.div>

            {/* Live location card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl border border-[#D4891A]/20
                bg-[#1C1008]/80 backdrop-blur-xl p-5 max-w-sm shadow-2xl"
            >
              {/* subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4891A]/5 via-transparent to-[#8B1A1A]/5 pointer-events-none" />

              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4ADE80] pulse-live" />
                    <span className="text-[#4ADE80] text-xs font-bold uppercase tracking-widest">
                      📍 Find Us Today
                    </span>
                  </div>
                </div>

                <p className="font-display text-[#F4E4C1] text-xl leading-tight mb-2">
                  {TODAY_LOCATION.name}
                </p>

                <div className="flex flex-col gap-1 mb-4">
                  <div className="flex items-center gap-1.5 text-[#F4E4C1]/50 text-xs">
                    <MapPin className="w-3 h-3 text-[#D4891A] shrink-0" />
                    {TODAY_LOCATION.address}
                  </div>
                  <div className="flex items-center gap-1.5 text-[#F4E4C1]/50 text-xs">
                    <Clock className="w-3 h-3 text-[#D4891A] shrink-0" />
                    Open Until 9 PM
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a href={TODAY_LOCATION.mapsUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl
                      border border-[#F4E4C1]/12 text-[#F4E4C1]/70 text-xs font-bold
                      hover:border-[#D4891A]/40 hover:text-[#D4891A] transition-all">
                    <Navigation className="w-3 h-3" /> Get Directions
                  </a>
                  <a href={BRAND.uberEats} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl
                      bg-[#D4891A] text-[#1C1008] text-xs font-bold
                      hover:bg-[#F0A830] transition-colors">
                    <ShoppingBag className="w-3 h-3" /> Order Now
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* scroll cue */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        >
          <ChevronDown className="w-5 h-5 text-[#F4E4C1]/20 animate-bounce" />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════
          DISH STRIP — below hero, immediate hunger
      ══════════════════════════════════════════════ */}
      <DishStrip />

      {/* ══════════════════════════════════════════════
          MARQUEE
      ══════════════════════════════════════════════ */}
      <MarqueeBanner />

      {/* ══════════════════════════════════════════════
          FEATURED MENU — cream section
      ══════════════════════════════════════════════ */}
      <section className="bg-[#F4E4C1] py-20 texture-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <span className="text-[#8B1A1A] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">From the Kitchen</span>
              <h2 className="font-display text-[#1C1008] leading-none" style={{ fontSize: "clamp(2.8rem,6vw,5rem)" }}>
                FROM THE<br /><span className="text-[#8B1A1A]">TRUCK</span>
              </h2>
            </div>
            <Link href="/menu"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#1C1008]
                text-[#1C1008] font-bold text-sm hover:bg-[#1C1008] hover:text-[#F4E4C1] transition-colors self-start lg:self-auto">
              Full Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURED.map((item, i) => (
              <motion.div key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl overflow-hidden bg-[#1C1008] shadow-xl flex flex-col"
              >
                <div className="relative h-52 overflow-hidden shrink-0">
                  <ImageWithFallback
                    src={item.image} alt={item.name} fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    fallbackEmoji={item.fallbackEmoji}
                    sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1008]/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {item.badges.map((b) => (
                      <span key={b} className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                        b === "Best Seller" ? "bg-[#D4891A] text-[#1C1008]" :
                        b === "Popular"     ? "bg-[#8B1A1A] text-[#F4E4C1]" :
                        "bg-[#003087] text-white"}`}>{b}</span>
                    ))}
                  </div>
                  {item.spicy && <span className="absolute top-3 right-3 text-base">🌶️</span>}
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-[#F4E4C1] font-bold text-base mb-2">{item.name}</h3>
                  <p className="text-[#F4E4C1]/50 text-sm leading-relaxed flex-1 line-clamp-2">{item.description}</p>
                  <a href={BRAND.uberEats} target="_blank" rel="noopener noreferrer"
                    className="mt-4 w-full py-2.5 rounded-xl bg-[#D4891A]/12 hover:bg-[#D4891A]
                      text-[#D4891A] hover:text-[#1C1008] text-xs font-bold text-center
                      transition-all border border-[#D4891A]/25 hover:border-transparent">
                    Order This Dish →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MarqueeBanner reverse dark />

      {/* ══════════════════════════════════════════════
          LOCATION — bold red section
      ══════════════════════════════════════════════ */}
      <section className="bg-[#8B1A1A] py-20 relative overflow-hidden texture-grain">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="font-display text-[18vw] text-[#F4E4C1]/4 leading-none select-none">LAS VEGAS</span>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
              <span className="text-[#F0A830] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">We're Out There</span>
              <h2 className="font-display text-[#F4E4C1] leading-none mb-6" style={{ fontSize:"clamp(3rem,7vw,5.5rem)" }}>
                FIND<br />THE TRUCK
              </h2>
              <p className="text-[#F4E4C1]/70 text-base leading-relaxed mb-8">
                We roll through Las Vegas, Henderson, Summerlin, and North Las Vegas. Follow us on Instagram for real-time daily drops.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/locations"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F4E4C1] text-[#1C1008]
                    font-bold text-sm hover:bg-[#F0A830] transition-colors">
                  <MapPin className="w-4 h-4" />Weekly Schedule
                </Link>
                <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#F4E4C1]/30
                    text-[#F4E4C1] font-bold text-sm hover:border-[#F4E4C1]/60 transition-colors">
                  <InstagramIcon className="w-4 h-4" />Follow on IG
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity:0, x:24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:0.1 }}>
              <div className="bg-[#1C1008]/60 backdrop-blur-sm rounded-3xl border border-[#F0A830]/20 p-7 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full bg-[#4ADE80] pulse-live" />
                  <span className="text-[#4ADE80] font-bold text-sm uppercase tracking-widest">Open Today</span>
                </div>
                <p className="font-display text-[#F4E4C1] text-3xl leading-tight mb-3">{TODAY_LOCATION.name}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-[#F4E4C1]/60 text-sm">
                    <MapPin className="w-3.5 h-3.5 text-[#F0A830] shrink-0" />{TODAY_LOCATION.address}
                  </div>
                  <div className="flex items-center gap-2 text-[#F4E4C1]/60 text-sm">
                    <Clock className="w-3.5 h-3.5 text-[#F0A830] shrink-0" />{TODAY_LOCATION.hours}
                  </div>
                </div>
                <a href={TODAY_LOCATION.mapsUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl
                    bg-[#F0A830] text-[#1C1008] font-bold text-sm hover:bg-[#F5C842] transition-colors">
                  <Navigation className="w-4 h-4" />Get Directions on Google Maps
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          ABOUT — cream, with the truck image again
      ══════════════════════════════════════════════ */}
      <section className="bg-[#F4E4C1] py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
              className="lg:col-span-2">
              <div className="relative h-[440px] rounded-3xl overflow-hidden shadow-2xl shadow-[#1C1008]/20">
                <Image src="/food-truck.png" alt="Catrachos Antojitos food truck" fill
                  className="object-cover object-left" sizes="(max-width:1024px) 100vw,40vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1008]/50 to-transparent" />
                {/* badge overlay */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-[#D4891A] text-[#1C1008] rounded-2xl px-4 py-3 flex items-center justify-between">
                    <div>
                      <p className="font-display text-2xl leading-none">5,000+</p>
                      <p className="text-xs font-bold opacity-70 mt-0.5">Happy Customers</p>
                    </div>
                    <div className="text-right">
                      <p className="font-display text-2xl leading-none">10+</p>
                      <p className="text-xs font-bold opacity-70 mt-0.5">Years of Flavor</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
              transition={{ delay:0.1 }} className="lg:col-span-3">
              <span className="text-[#8B1A1A] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Our Story</span>
              <h2 className="font-display text-[#1C1008] leading-none mb-6" style={{ fontSize:"clamp(2.8rem,6vw,4.5rem)" }}>
                BORN IN<br /><span className="text-[#8B1A1A]">HONDURAS,</span><br />MADE IN LAS VEGAS
              </h2>
              <p className="text-[#1C1008]/65 text-base leading-relaxed mb-4">
                Catrachos Antojitos started from one longing: the flavors of home. When nothing in Las Vegas tasted right — the baleadas, the beans, the crema — we started cooking our own. For family, then neighbors, then the whole city.
              </p>
              <p className="text-[#1C1008]/65 text-base leading-relaxed mb-8">
                Every tortilla is still pressed by hand every morning. Every bean pot slow-cooked overnight. The same recipes our grandmothers made in Tegucigalpa, served fresh in Las Vegas.
              </p>
              <Link href="/about"
                className="inline-flex items-center gap-2 font-bold text-[#8B1A1A] text-sm tracking-wide hover:gap-4 transition-all">
                Read Our Full Story <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CATERING CTA
      ══════════════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden bg-[#1C1008] texture-grain">
        <div className="absolute inset-0 opacity-15">
          <Image src="/food-truck.png" alt="" fill className="object-cover object-center" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1008]/98 via-[#1C1008]/85 to-[#1C1008]/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
            <span className="text-[#D4891A] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Catering Services</span>
            <h2 className="font-display text-[#F4E4C1] leading-none mb-6"
              style={{ fontSize:"clamp(3rem,9vw,7rem)" }}>
              BRING<br /><span className="gradient-gold">HONDURAS</span><br />TO YOUR EVENT
            </h2>
            <p className="text-[#F4E4C1]/60 text-lg max-w-lg mx-auto mb-8">
              Weddings · Quinceañeras · Corporate Events · Birthday Parties · Church Events · School Events
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/catering"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-[#D4891A] text-[#1C1008]
                  font-bold text-base tracking-wide hover:bg-[#F0A830] transition-colors glow-gold-anim">
                <CalendarDays className="w-5 h-5" />Get a Free Quote
              </Link>
              <a href={`tel:${BRAND.phone}`}
                className="inline-flex items-center gap-2 px-10 py-5 rounded-xl border-2 border-[#F4E4C1]/20
                  text-[#F4E4C1] font-bold text-base hover:border-[#F4E4C1]/50 transition-colors">
                <Phone className="w-5 h-5" />Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SOCIAL
      ══════════════════════════════════════════════ */}
      <section className="bg-[#1C1008] py-20 border-t border-[#F4E4C1]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div>
              <span className="text-[#D4891A] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">@catrachosantojitos</span>
              <h2 className="font-display text-[#F4E4C1]" style={{ fontSize:"clamp(2rem,5vw,4rem)" }}>FOLLOW THE TRUCK</h2>
            </div>
            <div className="flex gap-3">
              <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2A1A0E] border border-[#F4E4C1]/10
                  text-[#F4E4C1] text-sm font-bold hover:border-[#F4E4C1]/25 transition-colors">
                <InstagramIcon className="w-4 h-4" /> Instagram
              </a>
              <a href={BRAND.tiktok} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2A1A0E] border border-[#F4E4C1]/10
                  text-[#F4E4C1] text-sm font-bold hover:border-[#F4E4C1]/25 transition-colors">
                <TikTokIcon className="w-4 h-4" /> TikTok
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {[
              { src:"https://images.pexels.com/photos/7613678/pexels-photo-7613678.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop", emoji:"🫓" },
              { src:"https://images.unsplash.com/photo-1624128082323-beb6b8b508db?w=300&h=300&fit=crop&q=80", emoji:"🥟" },
              { src:"https://images.unsplash.com/photo-1567030492990-950d9855154b?w=300&h=300&fit=crop&q=80", emoji:"🍌" },
              { src:"https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop", emoji:"🥩" },
              { src:"https://images.unsplash.com/photo-1563336522-c3bd728d3b45?w=300&h=300&fit=crop&q=80", emoji:"🍌" },
              { src:"https://images.pexels.com/photos/6133872/pexels-photo-6133872.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop", emoji:"🌽" },
            ].map((p, i) => (
              <motion.a key={i} href={BRAND.instagram} target="_blank" rel="noopener noreferrer"
                initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}
                transition={{ delay: i*0.05 }}
                className="relative aspect-square rounded-xl overflow-hidden group">
                <ImageWithFallback src={p.src} alt={`Post ${i+1}`} fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  fallbackEmoji={p.emoji} sizes="(max-width:640px) 33vw,16vw" />
                <div className="absolute inset-0 bg-[#8B1A1A]/0 group-hover:bg-[#8B1A1A]/50 transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════ */}
      <section className="bg-[#2A1A0E] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#D4891A] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Got Questions?</span>
            <h2 className="font-display text-[#F4E4C1]" style={{ fontSize:"clamp(2rem,5vw,3.5rem)" }}>
              FREQUENTLY ASKED
            </h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* SEO content */}
      <section className="bg-[#1C1008] py-14 border-t border-[#F4E4C1]/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-sm text-[#F4E4C1]/30 leading-relaxed">
            <div>
              <h3 className="text-[#F4E4C1]/55 font-bold mb-3 text-xs uppercase tracking-widest">Honduran Food Las Vegas</h3>
              <p>Catrachos Antojitos is Las Vegas' home for authentic Honduran street food. Hand-pressed baleadas, crispy pastelitos, golden tajadas — the real flavors of Honduras, daily.</p>
            </div>
            <div>
              <h3 className="text-[#F4E4C1]/55 font-bold mb-3 text-xs uppercase tracking-widest">Food Truck Catering Las Vegas</h3>
              <p>Honduran food truck catering in Las Vegas, Henderson, Summerlin, and North Las Vegas. Corporate events, weddings, quinceañeras — we serve 50 to 500+ guests.</p>
            </div>
            <div>
              <h3 className="text-[#F4E4C1]/55 font-bold mb-3 text-xs uppercase tracking-widest">Baleadas Near Me Las Vegas</h3>
              <p>Looking for the best baleadas in Las Vegas? Catrachos Antojitos rolls through the valley every day. Follow us on Instagram or check the schedule to find the truck near you.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── DISH STRIP ─── */
function DishStrip() {
  return (
    <section className="bg-[#1C1008] py-12 border-b border-[#F4E4C1]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-2">
          {DISH_STRIP.map((dish, i) => (
            <Link key={dish.label} href="/menu">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative shrink-0 w-44 h-32 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <ImageWithFallback
                  src={dish.img}
                  alt={dish.label}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  fallbackEmoji={dish.fallback}
                  sizes="176px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1008]/90 via-[#1C1008]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="font-display text-[#F4E4C1] text-base leading-none">{dish.label.toUpperCase()}</p>
                </div>
              </motion.div>
            </Link>
          ))}
          {/* View all pill */}
          <Link href="/menu" className="shrink-0">
            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="w-32 h-32 rounded-2xl border-2 border-[#D4891A]/30 flex flex-col items-center
                justify-center gap-2 text-[#D4891A] hover:bg-[#D4891A]/10 transition-colors cursor-pointer"
            >
              <span className="font-display text-lg">SEE ALL</span>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ACCORDION ─── */
const FAQS = [
  { q: "Where is the Catrachos Antojitos food truck?", a: "We rotate around Las Vegas daily — Summerlin, Henderson, Downtown, Fremont Street, and more. Check our Locations page or follow @catrachosantojitos on Instagram for real-time location updates." },
  { q: "Do you offer catering in Las Vegas?", a: "Yes! We cater corporate events, weddings, quinceañeras, birthday parties, church events, school events, and community gatherings. We serve 50 to 500+ guests. Submit an inquiry on our Catering page." },
  { q: "Can I order Honduran food online?", a: "Absolutely — we're available on Uber Eats and DoorDash for delivery across Las Vegas. Or find the truck in person using our weekly schedule." },
  { q: "What is a baleada?", a: "A baleada is the ultimate Honduran street food — a thick, freshly hand-pressed flour tortilla filled with creamy refried beans, crema, and queso fresco. We make ours from scratch every morning." },
  { q: "Are there vegetarian options?", a: "Yes! Our Baleada Sencilla, Pastelitos de Papa, Tajadas Solas, Maduros, and all aguas frescas are vegetarian. Many items can be customized — just ask." },
];

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-2">
      {FAQS.map((faq, i) => (
        <motion.div key={i} layout
          className="rounded-xl overflow-hidden border border-[#F4E4C1]/8 bg-[#1C1008]">
          <button onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left">
            <span className="text-[#F4E4C1] font-semibold text-sm leading-snug">{faq.q}</span>
            <motion.span animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.25 }}
              className="text-[#D4891A] shrink-0">
              <ChevronDown className="w-4 h-4" />
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div key="content"
                initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                className="overflow-hidden">
                <p className="px-5 pb-4 text-[#F4E4C1]/55 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
