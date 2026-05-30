"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MapPin, Clock, Navigation, ShoppingBag, ArrowRight, CalendarDays, Phone, Star, ChevronDown } from "lucide-react";
import MarqueeBanner from "./MarqueeBanner";
import ImageWithFallback from "./ImageWithFallback";
import { InstagramIcon, TikTokIcon } from "./SocialIcons";
import { BRAND, MENU_ITEMS, TODAY_LOCATION } from "@/lib/data";

const FEATURED = MENU_ITEMS.filter(
  (i) => i.badges.includes("Best Seller") || i.badges.includes("Popular")
).slice(0, 6);

// Floating sticker badges on the hero
const STICKERS = [
  { emoji: "🫓", label: "Baleadas",   rotate: "-rotate-6", pos: "top-32 right-[42%] lg:right-[35%]",  delay: 0 },
  { emoji: "🍌", label: "Tajadas",    rotate: "rotate-8",  pos: "top-48 right-[12%] lg:right-[8%]",  delay: 0.15 },
  { emoji: "🥟", label: "Pastelitos", rotate: "-rotate-3", pos: "bottom-40 right-[28%] lg:right-[22%]", delay: 0.3 },
  { emoji: "🇭🇳", label: "Honduras",  rotate: "rotate-5",  pos: "top-24 right-[22%] lg:right-[16%]",  delay: 0.1 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const } }),
};

export default function HomepageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const imgY    = useTransform(scrollY, [0, 600], [0, 140]);
  const textY   = useTransform(scrollY, [0, 400], [0, -60]);

  return (
    <div className="overflow-x-hidden">

      {/* ─────────────────────────────────────────────
          HERO — Split diagonal layout
      ───────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-[#1C1008]">

        {/* Right-side food photo with parallax */}
        <motion.div style={{ y: imgY }} className="absolute inset-0">
          <div className="absolute inset-0 lg:left-[42%]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=900&fit=crop&q=85"
              alt="Honduran street food"
              fill
              className="object-cover object-center"
              fallbackEmoji="🍽️"
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </div>
          {/* Diagonal overlay — dark on left, transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1008] via-[#1C1008]/92 lg:via-[#1C1008]/80 to-[#1C1008]/40 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1008]/80 via-transparent to-[#1C1008]/30" />
          {/* Diagonal cut edge */}
          <div className="hidden lg:block absolute inset-y-0 left-[38%] w-32 bg-gradient-to-r from-[#1C1008] to-transparent" />
        </motion.div>

        {/* Floating sticker badges */}
        {STICKERS.map((s) => (
          <motion.div
            key={s.label}
            className={`absolute z-20 hidden sm:flex ${s.pos} ${s.rotate} flex-col items-center gap-1 select-none pointer-events-none`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + s.delay, duration: 0.5, type: "spring" }}
          >
            <div className={`animate-float-${["a","b","c","a"][STICKERS.indexOf(s)]}`}>
              <div className="bg-[#1C1008]/70 backdrop-blur-sm border-2 border-[#F0A830]/40 rounded-2xl px-3 py-2 text-center shadow-xl">
                <span className="text-2xl block">{s.emoji}</span>
                <span className="font-display text-[#F0A830] text-xs tracking-widest">{s.label}</span>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Hero content */}
        <motion.div style={{ y: textY }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-32 w-full">
          <div className="max-w-xl lg:max-w-2xl">

            {/* Live pill */}
            <motion.div variants={fadeUp} custom={0} initial="hidden" animate="show"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#2A1A0E] border border-[#F0A830]/25 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4ADE80] pulse-live shrink-0" />
              <span className="text-[#F4E4C1]/80 text-xs font-bold tracking-[0.2em] uppercase">Open Today · Summerlin</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeUp} custom={1} initial="hidden" animate="show"
              className="font-display text-[clamp(4rem,12vw,8rem)] leading-[0.9] text-[#F4E4C1] mb-2">
              AUTHENTIC
            </motion.h1>
            <motion.div variants={fadeUp} custom={2} initial="hidden" animate="show" className="mb-2">
              <span className="font-display text-[clamp(4rem,12vw,8rem)] leading-[0.9] gradient-gold">
                HONDURAN
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={3} initial="hidden" animate="show"
              className="font-display text-[clamp(3.2rem,9vw,6rem)] leading-[0.95] text-[#F4E4C1]/70 mb-8">
              STREET FOOD
            </motion.h1>

            {/* Sub */}
            <motion.p variants={fadeUp} custom={4} initial="hidden" animate="show"
              className="text-[#F4E4C1]/65 text-base sm:text-lg leading-relaxed mb-10 max-w-md">
              Fresh baleadas, crispy pastelitos, loaded tajadas, and traditional Honduran plates — made with heart in Las Vegas.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} custom={5} initial="hidden" animate="show"
              className="flex flex-wrap gap-3 mb-12">
              <a href={BRAND.uberEats} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#D4891A] text-[#1C1008] font-bold text-sm tracking-wide hover:bg-[#F0A830] transition-colors glow-gold-anim">
                <ShoppingBag className="w-4 h-4" />Order Online
              </a>
              <Link href="/menu"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-transparent border-2 border-[#F4E4C1]/20 text-[#F4E4C1] font-bold text-sm tracking-wide hover:border-[#F4E4C1]/50 transition-colors">
                View Menu
              </Link>
              <Link href="/catering"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#8B1A1A] text-[#F4E4C1] font-bold text-sm tracking-wide hover:bg-[#B52020] transition-colors">
                <CalendarDays className="w-4 h-4" />Book Catering
              </Link>
            </motion.div>

            {/* Social proof strip */}
            <motion.div variants={fadeUp} custom={6} initial="hidden" animate="show"
              className="flex items-center gap-4 flex-wrap">
              <div className="flex -space-x-2">
                {["🧑🏽","👩🏾","🧔🏻","👩🏽","🧑🏿"].map((e, i) => (
                  <span key={i} className="w-8 h-8 rounded-full bg-[#2A1A0E] border-2 border-[#1C1008] flex items-center justify-center text-sm">{e}</span>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_,i) => <Star key={i} className="w-3.5 h-3.5 fill-[#F0A830] text-[#F0A830]" />)}
                </div>
                <p className="text-[#F4E4C1]/50 text-xs">5,000+ happy customers in Las Vegas</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Today's Location Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0, duration: 0.6, ease: [.25,.46,.45,.94] }}
          className="absolute bottom-8 right-4 sm:right-8 lg:right-12 z-20 w-72 bg-[#1C1008]/85 backdrop-blur-xl rounded-2xl border border-[#F0A830]/20 p-5 shadow-2xl"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4ADE80] pulse-live" />
              <span className="text-[#4ADE80] text-xs font-bold uppercase tracking-widest">Live Today</span>
            </div>
            <span className="text-[#F4E4C1]/30 text-[10px] font-medium uppercase tracking-wider">Truck Location</span>
          </div>
          <p className="font-display text-[#F4E4C1] text-xl leading-tight mb-1">{TODAY_LOCATION.name}</p>
          <div className="flex items-start gap-1.5 mb-1">
            <MapPin className="w-3 h-3 text-[#D4891A] mt-0.5 shrink-0" />
            <p className="text-[#F4E4C1]/55 text-xs leading-snug">{TODAY_LOCATION.address}</p>
          </div>
          <div className="flex items-center gap-1.5 mb-4">
            <Clock className="w-3 h-3 text-[#D4891A] shrink-0" />
            <p className="text-[#F4E4C1]/55 text-xs">{TODAY_LOCATION.hours}</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <a href={TODAY_LOCATION.mapsUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-[#F4E4C1]/15 text-[#F4E4C1]/80 text-xs font-bold hover:border-[#F4E4C1]/35 transition-colors">
              <Navigation className="w-3 h-3" />Directions
            </a>
            <a href={BRAND.uberEats} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#D4891A] text-[#1C1008] text-xs font-bold hover:bg-[#F0A830] transition-colors">
              <ShoppingBag className="w-3 h-3" />Order Now
            </a>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10">
          <ChevronDown className="w-4 h-4 text-[#F4E4C1]/25 animate-bounce" />
        </motion.div>
      </section>

      {/* ─── MARQUEE ─── */}
      <MarqueeBanner />

      {/* ─────────────────────────────────────────────
          WHAT WE SERVE — cream background break
      ───────────────────────────────────────────── */}
      <section className="bg-[#F4E4C1] py-20 texture-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <span className="text-[#8B1A1A] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">What We Serve</span>
              <h2 className="font-display text-[#1C1008] text-5xl md:text-7xl leading-none">
                FROM THE<br /><span className="text-[#8B1A1A]">TRUCK</span>
              </h2>
            </div>
            <Link href="/menu"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#1C1008] text-[#1C1008] font-bold text-sm hover:bg-[#1C1008] hover:text-[#F4E4C1] transition-colors self-start lg:self-auto">
              Full Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURED.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="group rounded-2xl overflow-hidden bg-[#1C1008] shadow-xl shadow-[#1C1008]/20 flex flex-col"
                whileHover={{ y: -6 }}
              >
                <div className="relative h-52 overflow-hidden shrink-0">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    fallbackEmoji={item.fallbackEmoji}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1008]/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {item.badges.map((b) => (
                      <span key={b} className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                        b === "Best Seller" ? "bg-[#D4891A] text-[#1C1008]" :
                        b === "Popular"     ? "bg-[#8B1A1A] text-[#F4E4C1]" :
                        b === "New"         ? "bg-[#003087] text-white" :
                        "bg-[#2A1A0E] text-[#F4E4C1]"
                      }`}>{b}</span>
                    ))}
                  </div>
                  {item.spicy && (
                    <span className="absolute top-3 right-3 text-base">🌶️</span>
                  )}
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-[#F4E4C1] font-bold text-base mb-2 leading-snug">{item.name}</h3>
                  <p className="text-[#F4E4C1]/50 text-sm leading-relaxed flex-1 line-clamp-2">{item.description}</p>
                  <a href={BRAND.uberEats} target="_blank" rel="noopener noreferrer"
                    className="mt-4 w-full py-2.5 rounded-xl bg-[#D4891A]/15 hover:bg-[#D4891A] text-[#D4891A] hover:text-[#1C1008] text-xs font-bold text-center transition-all border border-[#D4891A]/30 hover:border-transparent">
                    Order This Dish
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MarqueeBanner reverse dark />

      {/* ─────────────────────────────────────────────
          TODAY'S LOCATION — bold red section
      ───────────────────────────────────────────── */}
      <section className="bg-[#8B1A1A] py-20 relative overflow-hidden texture-grain">
        <div className="absolute inset-0 opacity-5 texture-lines" />
        {/* Big background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="font-display text-[18vw] text-[#F4E4C1]/5 leading-none tracking-tight whitespace-nowrap select-none">
            LAS VEGAS
          </span>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-[#F0A830] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">We're Out There</span>
              <h2 className="font-display text-5xl md:text-7xl text-[#F4E4C1] leading-none mb-6">
                FIND<br />THE TRUCK
              </h2>
              <p className="text-[#F4E4C1]/70 text-base leading-relaxed mb-8">
                We roll through Las Vegas, Henderson, Summerlin, and North Las Vegas. Check our schedule or follow us on Instagram for real-time location drops.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/locations"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F4E4C1] text-[#1C1008] font-bold text-sm hover:bg-[#F0A830] transition-colors">
                  <MapPin className="w-4 h-4" />Weekly Schedule
                </Link>
                <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#F4E4C1]/30 text-[#F4E4C1] font-bold text-sm hover:border-[#F4E4C1]/60 transition-colors">
                  <InstagramIcon className="w-4 h-4" />Follow on IG
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              {/* Location card */}
              <div className="bg-[#1C1008]/60 backdrop-blur-sm rounded-3xl border border-[#F0A830]/20 p-7 shadow-2xl">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-3 h-3 rounded-full bg-[#4ADE80] pulse-live" />
                  <span className="text-[#4ADE80] font-bold text-sm uppercase tracking-widest">Open Today</span>
                </div>
                <p className="font-display text-[#F4E4C1] text-3xl mb-3 leading-tight">{TODAY_LOCATION.name}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-[#F4E4C1]/60 text-sm">
                    <MapPin className="w-3.5 h-3.5 text-[#F0A830] shrink-0" />{TODAY_LOCATION.address}
                  </div>
                  <div className="flex items-center gap-2 text-[#F4E4C1]/60 text-sm">
                    <Clock className="w-3.5 h-3.5 text-[#F0A830] shrink-0" />{TODAY_LOCATION.hours}
                  </div>
                </div>
                <a href={TODAY_LOCATION.mapsUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#F0A830] text-[#1C1008] font-bold text-sm hover:bg-[#F5C842] transition-colors">
                  <Navigation className="w-4 h-4" />Get Directions on Google Maps
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          OUR STORY — diagonal cut, cream again
      ───────────────────────────────────────────── */}
      <section className="bg-[#F4E4C1] py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Photos collage */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 grid grid-cols-2 gap-3"
            >
              <div className="col-span-2 relative h-52 rounded-2xl overflow-hidden">
                <ImageWithFallback src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop&q=80" alt="Honduran food" fill className="object-cover" fallbackEmoji="🍽️" sizes="50vw" />
              </div>
              <div className="relative h-36 rounded-2xl overflow-hidden">
                <ImageWithFallback src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=300&h=240&fit=crop&q=80" alt="Plantains" fill className="object-cover" fallbackEmoji="🍌" sizes="25vw" />
              </div>
              <div className="relative h-36 rounded-2xl overflow-hidden bg-[#8B1A1A] flex items-center justify-center">
                <div className="text-center p-4">
                  <p className="font-display text-[#F0A830] text-4xl leading-none">10+</p>
                  <p className="text-[#F4E4C1] text-xs font-bold mt-1 uppercase tracking-wide">Years of<br />Flavor</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-3"
            >
              <span className="text-[#8B1A1A] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Our Story</span>
              <h2 className="font-display text-[#1C1008] text-5xl md:text-6xl leading-none mb-6">
                BORN IN<br /><span className="text-[#8B1A1A]">HONDURAS,</span><br />MADE IN LAS VEGAS
              </h2>
              <p className="text-[#1C1008]/65 text-base leading-relaxed mb-4">
                Catrachos Antojitos started the way the best things do — with family recipes, homesickness, and a burning desire to share the flavors of Honduras with the world. When nothing in Las Vegas tasted like home, we started cooking.
              </p>
              <p className="text-[#1C1008]/65 text-base leading-relaxed mb-8">
                Today we press tortillas by hand every morning, slow-cook the beans overnight, and serve every plate with the same pride as a Sunday meal in Tegucigalpa.
              </p>
              <Link href="/about"
                className="inline-flex items-center gap-2 font-bold text-[#8B1A1A] text-sm tracking-wide hover:gap-4 transition-all">
                Read Our Full Story <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          CATERING CTA — dark, bold
      ───────────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden bg-[#1C1008] texture-grain">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1920&h=800&fit=crop&q=70"
            alt="Catering event"
            fill
            className="object-cover opacity-20"
            fallbackEmoji="🎉"
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-[#D4891A] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Catering Services</span>
            <h2 className="font-display text-[#F4E4C1] text-5xl sm:text-7xl md:text-8xl leading-none mb-6">
              BRING<br /><span className="gradient-gold">HONDURAS</span><br />TO YOUR EVENT
            </h2>
            <p className="text-[#F4E4C1]/60 text-lg max-w-lg mx-auto mb-8">
              Weddings · Quinceañeras · Corporate Events · Birthday Parties · Church Events · School Events
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/catering"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-[#D4891A] text-[#1C1008] font-bold text-base tracking-wide hover:bg-[#F0A830] transition-colors glow-gold-anim">
                <CalendarDays className="w-5 h-5" />Get a Free Quote
              </Link>
              <a href={`tel:${BRAND.phone}`}
                className="inline-flex items-center gap-2 px-10 py-5 rounded-xl border-2 border-[#F4E4C1]/20 text-[#F4E4C1] font-bold text-base tracking-wide hover:border-[#F4E4C1]/50 transition-colors">
                <Phone className="w-5 h-5" />Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SOCIAL — dark with grid
      ───────────────────────────────────────────── */}
      <section className="bg-[#1C1008] py-20 border-t border-[#F4E4C1]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div>
              <span className="text-[#D4891A] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">@catrachosantojitos</span>
              <h2 className="font-display text-[#F4E4C1] text-4xl md:text-5xl leading-none">FOLLOW THE TRUCK</h2>
            </div>
            <div className="flex gap-3">
              <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2A1A0E] border border-[#F4E4C1]/10 text-[#F4E4C1] text-sm font-bold hover:border-[#F4E4C1]/25 transition-colors">
                <InstagramIcon className="w-4 h-4" /> Instagram
              </a>
              <a href={BRAND.tiktok} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2A1A0E] border border-[#F4E4C1]/10 text-[#F4E4C1] text-sm font-bold hover:border-[#F4E4C1]/25 transition-colors">
                <TikTokIcon className="w-4 h-4" /> TikTok
              </a>
            </div>
          </div>

          {/* Social photo grid */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {[
              { src: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=300&h=300&fit=crop&q=80", emoji: "🫓" },
              { src: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=300&h=300&fit=crop&q=80", emoji: "🍽️" },
              { src: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=300&h=300&fit=crop&q=80", emoji: "🍌" },
              { src: "https://images.unsplash.com/photo-1598103442097-8b74394b95c8?w=300&h=300&fit=crop&q=80", emoji: "🥩" },
              { src: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=300&h=300&fit=crop&q=80", emoji: "🌽" },
              { src: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=300&h=300&fit=crop&q=80", emoji: "🔥" },
            ].map((p, i) => (
              <motion.a
                key={i}
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative aspect-square rounded-xl overflow-hidden group"
              >
                <ImageWithFallback
                  src={p.src}
                  alt={`Instagram post ${i+1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  fallbackEmoji={p.emoji}
                  sizes="(max-width: 640px) 33vw, 16vw"
                />
                <div className="absolute inset-0 bg-[#8B1A1A]/0 group-hover:bg-[#8B1A1A]/50 transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          FAQ — dark accordion
      ───────────────────────────────────────────── */}
      <section className="bg-[#2A1A0E] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#D4891A] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Got Questions?</span>
            <h2 className="font-display text-[#F4E4C1] text-4xl md:text-5xl">FREQUENTLY ASKED</h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SEO CONTENT — keyword-rich, light
      ───────────────────────────────────────────── */}
      <section className="bg-[#1C1008] py-16 border-t border-[#F4E4C1]/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-sm text-[#F4E4C1]/35 leading-relaxed">
            <div>
              <h3 className="text-[#F4E4C1]/60 font-bold mb-3 text-xs uppercase tracking-widest">Honduran Food Las Vegas</h3>
              <p>Catrachos Antojitos is Las Vegas' home for authentic Honduran street food. From hand-pressed baleadas to crispy pastelitos, we bring the real flavors of Honduras to the Las Vegas valley.</p>
            </div>
            <div>
              <h3 className="text-[#F4E4C1]/60 font-bold mb-3 text-xs uppercase tracking-widest">Food Truck Catering Las Vegas</h3>
              <p>Looking for Honduran food truck catering in Las Vegas? We serve Henderson, Summerlin, North Las Vegas, and the greater Las Vegas valley. Book us for corporate events, weddings, and parties.</p>
            </div>
            <div>
              <h3 className="text-[#F4E4C1]/60 font-bold mb-3 text-xs uppercase tracking-widest">Baleadas Near Me</h3>
              <p>Searching for baleadas in Las Vegas? Our truck serves fresh hand-pressed baleadas daily. Follow us on Instagram or check our schedule to find us near you today.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
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
        <motion.div key={i} layout className="rounded-xl overflow-hidden border border-[#F4E4C1]/8 bg-[#1C1008]">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
          >
            <span className="text-[#F4E4C1] font-semibold text-sm leading-snug">{faq.q}</span>
            <motion.span
              animate={{ rotate: open === i ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="text-[#D4891A] shrink-0"
            >
              <ChevronDown className="w-4 h-4" />
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-4 text-[#F4E4C1]/55 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

