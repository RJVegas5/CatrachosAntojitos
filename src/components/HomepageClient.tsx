"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, CalendarDays, ChevronDown,
  MapPin, Star, Users, Heart, Bell,
} from "lucide-react";
import MarqueeBanner from "./MarqueeBanner";
import ImageWithFallback from "./ImageWithFallback";
import VIPWaitlist from "./VIPWaitlist";
import LaunchCountdown from "./LaunchCountdown";
import { InstagramIcon, TikTokIcon } from "./SocialIcons";
import { BRAND, MENU_ITEMS, LAUNCH_AREA, CATERING_EVENT_CARDS } from "@/lib/data";

/* ─── data ─── */
const GALLERY_ITEMS = [
  { src: "https://images.pexels.com/photos/7613678/pexels-photo-7613678.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop", alt: "Baleada", emoji: "🫓", label: "Baleadas" },
  { src: "https://images.unsplash.com/photo-1624128082323-beb6b8b508db?w=800&h=600&fit=crop&q=80", alt: "Pastelitos", emoji: "🥟", label: "Pastelitos" },
  { src: "https://images.pexels.com/photos/5041489/pexels-photo-5041489.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop", alt: "Plato Típico", emoji: "🍽️", label: "Plato Típico" },
  { src: "https://images.unsplash.com/photo-1563336522-c3bd728d3b45?w=800&h=600&fit=crop&q=80", alt: "Maduros", emoji: "🍌", label: "Maduros" },
  { src: "https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop", alt: "Carne Asada", emoji: "🥩", label: "Carne Asada" },
  { src: "https://images.pexels.com/photos/6133872/pexels-photo-6133872.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop", alt: "Elotes", emoji: "🌽", label: "Elotes Locos" },
];

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: 30 + (i / 18) * 65,
  y: 8 + ((i * 37) % 84),
  size: 2 + (i % 3),
  delay: (i * 0.22) % 4,
  duration: 3 + (i % 4),
  opacity: 0.15 + (i % 5) * 0.06,
}));

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const fadeSlide = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] } },
};

export default function HomepageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const truckY = useTransform(scrollY, [0, 700], [0, 80]);

  return (
    <div className="overflow-x-hidden">

      {/* ══════════════════════════════════════════
          HERO — COMING SOON VERSION
      ══════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-[#100904]">

        {/* background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full
            bg-[radial-gradient(ellipse_at_center,_rgba(212,137,26,0.12)_0%,_transparent_70%)]" />
          <div className="absolute -top-20 right-1/4 w-[40vw] h-[40vw] rounded-full
            bg-[radial-gradient(ellipse_at_center,_rgba(139,26,26,0.15)_0%,_transparent_70%)]" />
        </div>

        {/* bokeh particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {PARTICLES.map((p) => (
            <motion.div key={p.id}
              className="absolute rounded-full bg-[#F0A830]"
              style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
              animate={{ opacity: [p.opacity * 0.4, p.opacity, p.opacity * 0.4], scale: [1, 1.4, 1] }}
              transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>

        {/* Truck image — right side */}
        <motion.div style={{ y: truckY }} className="absolute inset-y-0 right-0 w-full lg:w-[62%] pointer-events-none">
          <motion.div className="relative w-full h-full"
            initial={{ scale: 1.06 }} animate={{ scale: 1 }}
            transition={{ duration: 9, ease: "easeOut" }}>
            <Image src="/food-truck.png" alt="Catrachos Antojitos food truck — coming soon to Las Vegas"
              fill className="object-cover object-left" priority sizes="(max-width:1024px) 100vw,62vw" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#100904] via-[#100904]/75 lg:via-[#100904]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#100904]/60 via-transparent to-[#100904]/30" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
          <div className="max-w-[580px]">

            {/* badge */}
            <motion.div initial={{ opacity:0, y:-12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full
                bg-[#D4891A]/15 border border-[#D4891A]/30 mb-7">
              <span className="w-2 h-2 rounded-full bg-[#F0A830] animate-pulse" />
              <span className="text-[#D4891A] text-xs font-bold tracking-[0.22em] uppercase">
                Grand Opening — Las Vegas 2026
              </span>
            </motion.div>

            {/* headline */}
            <motion.div variants={stagger} initial="hidden" animate="show" className="mb-5">
              <motion.h1 variants={fadeSlide} className="font-display text-[#F4E4C1] leading-none mb-1"
                style={{ fontSize:"clamp(3.2rem,8vw,5.5rem)" }}>LAS VEGAS'</motion.h1>
              <motion.h1 variants={fadeSlide} className="font-display leading-none mb-1"
                style={{ fontSize:"clamp(3.2rem,8vw,5.5rem)" }}>
                <span className="gradient-gold">HONDURAN</span>
              </motion.h1>
              <motion.h1 variants={fadeSlide} className="font-display text-[#F4E4C1]/70 leading-none"
                style={{ fontSize:"clamp(2rem,5vw,3.5rem)" }}>FOOD TRUCK IS COMING</motion.h1>
            </motion.div>

            <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.45, duration:0.6 }}
              className="text-[#F4E4C1]/60 text-base leading-relaxed mb-7 max-w-[440px]">
              Authentic Honduran street food made from family recipes — giant baleadas, crispy tajadas, golden pastelitos, and more. Get on the VIP list for exclusive launch-day access.
            </motion.p>

            {/* social proof pills */}
            <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.55, duration:0.55 }}
              className="flex flex-wrap gap-2.5 mb-8">
              {[
                { icon:"★", text:"Family Recipes" },
                { icon:"🇭🇳", text:"Honduran-Owned" },
                { icon:"📅", text:"Catering Available Now" },
                { icon:"🔔", text:"VIP Early Access" },
              ].map((p) => (
                <div key={p.text} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
                  bg-[#1C1008] border border-[#F4E4C1]/8">
                  <span className="text-xs">{p.icon}</span>
                  <span className="text-[#F4E4C1]/60 text-xs font-medium">{p.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.65, duration:0.55 }}
              className="flex flex-wrap gap-3 mb-10">
              <a href="#vip-waitlist"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl
                  bg-[#D4891A] text-[#1C1008] font-bold text-sm tracking-wide
                  hover:bg-[#F0A830] transition-colors glow-gold-anim">
                <Bell className="w-4 h-4" />Join the VIP List
              </a>
              <Link href="/catering"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl
                  bg-[#8B1A1A] text-[#F4E4C1] font-bold text-sm tracking-wide
                  hover:bg-[#B52020] transition-colors">
                <CalendarDays className="w-4 h-4" />Book Catering
              </Link>
              <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl
                  bg-[#1C1008]/80 border-2 border-[#F4E4C1]/15 text-[#F4E4C1]
                  font-bold text-sm hover:border-[#F4E4C1]/35 transition-all">
                <InstagramIcon className="w-4 h-4" />Follow on IG
              </a>
            </motion.div>

            {/* Countdown card */}
            <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.85, duration:0.6 }}
              className="relative overflow-hidden rounded-2xl border border-[#D4891A]/20
                bg-[#1C1008]/80 backdrop-blur-xl p-5 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4891A]/5 via-transparent to-[#8B1A1A]/5 pointer-events-none" />
              <div className="relative">
                <p className="text-[#D4891A] text-xs font-bold uppercase tracking-widest mb-4">
                  🚀 Grand Opening Countdown
                </p>
                <LaunchCountdown />
                <p className="text-[#F4E4C1]/30 text-[10px] mt-3 uppercase tracking-widest">
                  Target: Labor Day Weekend · Las Vegas, NV
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown className="w-5 h-5 text-[#F4E4C1]/20 animate-bounce" />
        </motion.div>
      </section>

      {/* ── MARQUEE ── */}
      <MarqueeBanner />

      {/* ══════════════════════════════════════════
          VIP WAITLIST — primary conversion
      ══════════════════════════════════════════ */}
      <section id="vip-waitlist" className="py-24 bg-[#F4E4C1] texture-dots relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,_rgba(139,26,26,0.06)_0%,_transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
              <span className="text-[#8B1A1A] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">VIP Early Access</span>
              <h2 className="font-display text-[#1C1008] leading-none mb-5"
                style={{ fontSize:"clamp(2.8rem,6vw,5rem)" }}>
                BE FIRST<br />WHEN WE<br /><span className="text-[#8B1A1A]">OPEN</span>
              </h2>
              <p className="text-[#1C1008]/60 text-base leading-relaxed mb-6">
                Thousands of Hondurans and Latin food lovers in Las Vegas have been waiting for authentic baleadas, tajadas, and pastelitos made the real way. Be first through the door.
              </p>
              <div className="space-y-3">
                {[
                  { icon: "🔔", text: "First notification when we open" },
                  { icon: "🎁", text: "Exclusive VIP launch-day perks" },
                  { icon: "📅", text: "Priority catering booking access" },
                  { icon: "🇭🇳", text: "Direct updates from the family" },
                ].map((b) => (
                  <div key={b.text} className="flex items-center gap-3">
                    <span className="text-lg">{b.icon}</span>
                    <span className="text-[#1C1008]/65 text-sm font-medium">{b.text}</span>
                  </div>
                ))}
              </div>
              {/* social proof */}
              <div className="mt-8 flex items-center gap-3 p-4 rounded-2xl bg-[#1C1008]/5 border border-[#1C1008]/8">
                <div className="flex -space-x-2">
                  {["👩🏽","🧑🏾","👨🏻","👩🏿","🧑🏽"].map((e,i) => (
                    <span key={i} className="w-8 h-8 rounded-full bg-[#8B1A1A]/20 border-2 border-[#F4E4C1]
                      flex items-center justify-center text-sm">{e}</span>
                  ))}
                </div>
                <p className="text-[#1C1008]/55 text-xs leading-snug">
                  <strong className="text-[#1C1008]/80">Hundreds already signed up.</strong><br />
                  Join the waitlist before we open.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity:0, x:24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:0.1 }}>
              <VIPWaitlist dark source="homepage-section" />
            </motion.div>
          </div>
        </div>
      </section>

      <MarqueeBanner reverse dark />

      {/* ══════════════════════════════════════════
          FOOD GALLERY — cinematic
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-[#1C1008]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <span className="text-[#D4891A] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">What's Coming</span>
          <h2 className="font-display text-[#F4E4C1] leading-none"
            style={{ fontSize:"clamp(2.8rem,6vw,5rem)" }}>
            THE MENU<br /><span className="gradient-gold">PREVIEW</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div key={item.alt}
              initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true, margin:"-40px" }} transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                i === 0 ? "lg:col-span-2 lg:row-span-2 h-64 lg:h-auto" : "h-48"
              }`}>
              <ImageWithFallback src={item.src} alt={item.alt} fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                fallbackEmoji={item.emoji}
                sizes={i===0 ? "(max-width:1024px) 50vw,66vw" : "(max-width:1024px) 50vw,33vw"} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1008]/80 via-transparent to-transparent
                group-hover:from-[#8B1A1A]/60 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-display text-[#F4E4C1] leading-none"
                  style={{ fontSize: i===0 ? "2rem" : "1.25rem" }}>
                  {item.label.toUpperCase()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/menu"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2
              border-[#D4891A]/30 text-[#D4891A] font-bold text-sm hover:bg-[#D4891A]/10
              transition-colors">
            Preview Full Menu <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MEET THE FAMILY
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#F4E4C1] texture-dots relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} className="lg:col-span-2">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-[#1C1008]/20">
                <Image src="/food-truck.png" alt="The family behind Catrachos Antojitos"
                  fill className="object-cover object-center" sizes="(max-width:1024px) 100vw,40vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1008]/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-4 h-4 text-[#D4891A]" />
                    <span className="text-[#D4891A] text-xs font-bold uppercase tracking-widest">Hecho Con Amor</span>
                  </div>
                  <p className="font-display text-[#F4E4C1] text-xl leading-tight">Made with Love<br />From Honduras</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ delay:0.1 }} className="lg:col-span-3">
              <span className="text-[#8B1A1A] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Our Story</span>
              <h2 className="font-display text-[#1C1008] leading-none mb-7"
                style={{ fontSize:"clamp(2.5rem,5vw,4rem)" }}>
                MEET THE FAMILY<br /><span className="text-[#8B1A1A]">BEHIND</span><br />CATRACHOS
              </h2>
              <div className="space-y-4 text-[#1C1008]/65 text-base leading-relaxed">
                <p>
                  Catrachos Antojitos is a family dream — born in Honduras, nurtured in Las Vegas. We are a Honduran woman-owned business built on one simple belief: that the most authentic, most delicious Honduran street food deserves a home in Las Vegas.
                </p>
                <p>
                  Every recipe in our menu comes directly from our family's kitchen in Honduras. We press tortillas by hand, slow-cook the beans overnight, and use the same seasonings our grandmothers used in Tegucigalpa. Nothing is outsourced. Nothing is shortcuts.
                </p>
                <p>
                  We started cooking for family. Then for neighbors. Then the city started asking. Now we're bringing it all — the baleadas, the pastelitos, the tajadas, the plato típico — to Las Vegas, officially.
                </p>
                <p className="font-semibold text-[#8B1A1A]">
                  Las Vegas has waited long enough for real Honduran food. We're almost ready. 🇭🇳
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#vip-waitlist"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#8B1A1A] text-[#F4E4C1]
                    font-bold text-sm hover:bg-[#B52020] transition-colors">
                  Join Our Journey <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#1C1008]/15
                    text-[#1C1008] font-bold text-sm hover:border-[#8B1A1A] transition-colors">
                  Full Story
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CATERING — accepting inquiries NOW
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#2A1A0E] texture-grain relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,_rgba(139,26,26,0.2)_0%,_transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full
              bg-[#D4891A]/15 border border-[#D4891A]/25 text-[#D4891A] text-xs font-bold
              tracking-widest uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-[#4ADE80] pulse-live" />
              Now Accepting Bookings
            </span>
            <h2 className="font-display text-[#F4E4C1] leading-none mb-4"
              style={{ fontSize:"clamp(2.8rem,7vw,5.5rem)" }}>
              CATERING FOR<br /><span className="gradient-gold">ANY EVENT</span>
            </h2>
            <p className="text-[#F4E4C1]/55 text-base max-w-xl mx-auto">
              We're not open yet — but we ARE accepting catering inquiries. Lock in your event date now and be among the first to experience Catrachos Antojitos.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {CATERING_EVENT_CARDS.map((card, i) => (
              <motion.div key={card.title}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay: i * 0.07 }}
                whileHover={{ y:-4 }}
                className="p-6 rounded-2xl bg-[#1C1008]/60 border border-[#F4E4C1]/6
                  hover:border-[#D4891A]/25 transition-all group text-center">
                <span className="text-3xl block mb-3">{card.emoji}</span>
                <h3 className="font-display text-[#F4E4C1] text-xl mb-2">{card.title.toUpperCase()}</h3>
                <p className="text-[#F4E4C1]/45 text-xs leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/catering"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-xl
                bg-[#D4891A] text-[#1C1008] font-bold text-base tracking-wide
                hover:bg-[#F0A830] transition-colors glow-gold-anim">
              <CalendarDays className="w-5 h-5" />Request a Catering Quote
            </Link>
            <p className="text-[#F4E4C1]/30 text-xs mt-3">We serve 50–500+ guests · Las Vegas, Henderson, Summerlin</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SOCIAL FOLLOW
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-[#1C1008] border-t border-[#F4E4C1]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
              <span className="text-[#D4891A] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Follow Our Journey</span>
              <h2 className="font-display text-[#F4E4C1] leading-none mb-5"
                style={{ fontSize:"clamp(2.5rem,5vw,4rem)" }}>
                WATCH US<br />BUILD THIS
              </h2>
              <p className="text-[#F4E4C1]/55 text-base leading-relaxed mb-7">
                Follow us on Instagram and TikTok as we prepare for our Las Vegas launch — behind-the-scenes kitchen prep, food truck progress, and a whole lot of Honduran flavor.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-6 py-3 rounded-xl
                    bg-gradient-to-r from-[#833ab4] to-[#fd1d1d] text-white font-bold text-sm
                    hover:opacity-90 transition-opacity">
                  <InstagramIcon className="w-4 h-4" />@catrachosantojitos
                </a>
                <a href={BRAND.tiktok} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-6 py-3 rounded-xl
                    bg-[#2A1A0E] border border-[#F4E4C1]/10 text-[#F4E4C1] font-bold text-sm
                    hover:border-[#F4E4C1]/25 transition-colors">
                  <TikTokIcon className="w-4 h-4" />TikTok
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity:0, x:24 }} whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }} transition={{ delay:0.1 }}>
              <div className="grid grid-cols-3 gap-2">
                {GALLERY_ITEMS.slice(0, 6).map((item, i) => (
                  <motion.a key={i} href={BRAND.instagram} target="_blank" rel="noopener noreferrer"
                    initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}
                    transition={{ delay: i * 0.06 }}
                    className="relative aspect-square rounded-xl overflow-hidden group">
                    <ImageWithFallback src={item.src} alt={item.alt} fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      fallbackEmoji={item.emoji} sizes="33vw" />
                    <div className="absolute inset-0 bg-[#8B1A1A]/0 group-hover:bg-[#8B1A1A]/50 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section className="bg-[#2A1A0E] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#D4891A] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Got Questions?</span>
            <h2 className="font-display text-[#F4E4C1]" style={{ fontSize:"clamp(2rem,5vw,3.5rem)" }}>FREQUENTLY ASKED</h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* SEO content */}
      <section className="bg-[#1C1008] py-14 border-t border-[#F4E4C1]/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-sm text-[#F4E4C1]/28 leading-relaxed">
            <div>
              <h3 className="text-[#F4E4C1]/50 font-bold mb-2 text-xs uppercase tracking-widest">Honduran Food Las Vegas</h3>
              <p>Catrachos Antojitos is bringing authentic Honduran street food to Las Vegas — hand-pressed baleadas, crispy pastelitos, golden tajadas, and the real Plato Típico Hondureño. Coming 2026.</p>
            </div>
            <div>
              <h3 className="text-[#F4E4C1]/50 font-bold mb-2 text-xs uppercase tracking-widest">Food Truck Catering Las Vegas</h3>
              <p>Honduran food truck catering now available for Las Vegas, Henderson, Summerlin, and North Las Vegas. Corporate events, weddings, quinceañeras — 50 to 500+ guests.</p>
            </div>
            <div>
              <h3 className="text-[#F4E4C1]/50 font-bold mb-2 text-xs uppercase tracking-widest">Baleadas Las Vegas</h3>
              <p>Las Vegas' first dedicated Honduran baleada food truck. Fresh hand-pressed baleadas made daily from our family's recipe. Grand opening coming Fall 2026.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── FAQ ─── */
const FAQS = [
  { q: "When is Catrachos Antojitos opening?",                  a: "We're targeting our grand opening for Labor Day Weekend 2026 in Las Vegas. Join the VIP waitlist and you'll be the first to know the exact date and location." },
  { q: "Can I book catering even though you're not open yet?",  a: "Absolutely — yes! We're currently accepting catering inquiries and deposits for future events. Many dates are already being reserved. Submit your inquiry on our Catering page." },
  { q: "Where will the truck be located?",                      a: "We'll be rolling around Las Vegas, Henderson, Summerlin, and North Las Vegas. Join the VIP list and follow us on Instagram for daily location updates once we open." },
  { q: "What is a baleada?",                                    a: "A baleada is Honduras' most beloved street food — a thick, hand-pressed flour tortilla filled with creamy refried beans, crema, and queso fresco. Ours are made from our family recipe." },
  { q: "Do you have vegetarian options?",                       a: "Yes! The Baleada Sencilla, Pastelitos de Papa, Tajadas Solas, Maduros, and all our aguas frescas are vegetarian-friendly." },
  { q: "How do I stay updated?",                                a: "Join our VIP waitlist above and follow @catrachosantojitos on Instagram and TikTok for behind-the-scenes updates and launch announcements." },
];

function FAQAccordion() {
  const [open, setOpen] = useState<number|null>(null);
  return (
    <div className="space-y-2">
      {FAQS.map((faq, i) => (
        <motion.div key={i} layout className="rounded-xl overflow-hidden border border-[#F4E4C1]/8 bg-[#1C1008]">
          <button onClick={() => setOpen(open===i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left">
            <span className="text-[#F4E4C1] font-semibold text-sm leading-snug">{faq.q}</span>
            <motion.span animate={{ rotate: open===i ? 180 : 0 }} transition={{ duration:0.25 }}
              className="text-[#D4891A] shrink-0">
              <ChevronDown className="w-4 h-4" />
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open===i && (
              <motion.div key="c" initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }}
                exit={{ height:0, opacity:0 }} transition={{ duration:0.3 }} className="overflow-hidden">
                <p className="px-5 pb-4 text-[#F4E4C1]/55 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
