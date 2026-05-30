"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin, Clock, Navigation, ShoppingBag, Star, Users, Truck,
  ChevronRight, ArrowRight, CalendarDays,
} from "lucide-react";
import { InstagramIcon, TikTokIcon } from "./SocialIcons";
import MarqueeBanner from "./MarqueeBanner";
import SectionHeading from "./SectionHeading";
import { BRAND, MENU_ITEMS, TODAY_LOCATION } from "@/lib/data";

const FEATURED_ITEMS = MENU_ITEMS.filter((i) => i.badges.includes("Best Seller") || i.badges.includes("Popular")).slice(0, 6);

const STATS = [
  { icon: Star, value: "4.9★", label: "Customer Rating" },
  { icon: Users, value: "5,000+", label: "Happy Customers" },
  { icon: Truck, value: "7 Days", label: "On the Road" },
  { icon: CalendarDays, value: "200+", label: "Events Catered" },
];

export default function HomepageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 180]);

  return (
    <div className="overflow-x-hidden">
      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image with parallax */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 -top-20 -bottom-20">
          <Image
            src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1920&q=90"
            alt="Catrachos Antojitos food"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0805]/90 via-[#1a0e08]/75 to-[#1a0e08]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0805] via-transparent to-[#0f0805]/30" />

        {/* Texture */}
        <div className="absolute inset-0 texture-overlay opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8a020]/15 border border-[#e8a020]/30 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#e8a020] badge-pulse" />
              <span className="text-[#e8a020] text-sm font-bold tracking-wider uppercase">Las Vegas Food Truck</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#f5e6c8] leading-[1.05] mb-6"
            >
              Authentic <br />
              <span className="gradient-text text-glow">Honduran</span>
              <br /> Street Food
              <br />
              <span className="text-[#f5e6c8]/80 text-4xl sm:text-5xl">in Las Vegas</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-[#f5e6c8]/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl"
            >
              Fresh baleadas, pastelitos, tajadas, and traditional Honduran favorites made with heart.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href={BRAND.uberEats}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-[#e8a020] to-[#f5c842] text-[#1a0e08] font-bold text-base hover:shadow-lg hover:shadow-[#e8a020]/30 hover:scale-105 transition-all glow-gold"
              >
                <ShoppingBag className="w-5 h-5" />
                Order Online
              </a>
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-[#f5e6c8] font-bold text-base hover:bg-white/15 hover:scale-105 transition-all"
              >
                View Menu
              </Link>
              <Link
                href="/catering"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-[#7c1d27] to-[#9e1f1f] text-white font-bold text-base hover:from-[#9e1f1f] hover:to-[#c62c2c] hover:scale-105 transition-all glow-burgundy"
              >
                <CalendarDays className="w-5 h-5" />
                Book Catering
              </Link>
            </motion.div>
          </div>

          {/* Today's Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-14 lg:mt-0 lg:absolute lg:right-8 lg:bottom-16 xl:right-16 bg-[#1a0e08]/80 backdrop-blur-xl border border-[#e8a020]/25 rounded-2xl p-5 max-w-xs w-full shadow-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] badge-pulse" />
              <span className="text-[#22c55e] text-xs font-bold uppercase tracking-wider">Open Today</span>
            </div>
            <h3 className="text-[#f5e6c8] font-bold text-base mb-1">{TODAY_LOCATION.name}</h3>
            <div className="flex items-start gap-1.5 mb-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#e8a020] mt-0.5 shrink-0" />
              <p className="text-[#f5e6c8]/60 text-xs leading-snug">{TODAY_LOCATION.address}</p>
            </div>
            <div className="flex items-center gap-1.5 mb-5">
              <Clock className="w-3.5 h-3.5 text-[#e8a020] shrink-0" />
              <p className="text-[#f5e6c8]/60 text-xs">{TODAY_LOCATION.hours}</p>
            </div>
            <div className="flex gap-2">
              <a
                href={TODAY_LOCATION.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#7c1d27]/60 text-[#f5e6c8] text-xs font-bold hover:bg-[#7c1d27] transition-colors border border-[#7c1d27]"
              >
                <Navigation className="w-3 h-3" />
                Directions
              </a>
              <a
                href={BRAND.uberEats}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#e8a020] text-[#1a0e08] text-xs font-bold hover:bg-[#f5c842] transition-colors"
              >
                <ShoppingBag className="w-3 h-3" />
                Order Now
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-10 bg-gradient-to-b from-[#e8a020]/0 to-[#e8a020]/60" />
          <span className="text-[#f5e6c8]/30 text-xs tracking-widest uppercase">Scroll</span>
        </motion.div>
      </section>

      {/* ── MARQUEE ── */}
      <MarqueeBanner />

      {/* ── STATS ── */}
      <section className="py-14 bg-[#0f0805]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-[#1a0e08] border border-[#7c1d27]/20"
              >
                <s.icon className="w-6 h-6 text-[#e8a020] mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-[#f5e6c8] mb-1">{s.value}</div>
                <div className="text-[#f5e6c8]/50 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED MENU ── */}
      <section className="py-20 bg-[#1a0e08] texture-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="From the Kitchen"
            title="Our Most-Loved Dishes"
            subtitle="Every item made fresh, every order made with love. The flavors of Honduras, right here in Las Vegas."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {FEATURED_ITEMS.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-lift group rounded-2xl overflow-hidden bg-[#0f0805] border border-[#7c1d27]/20"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0805]/80 to-transparent" />
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {item.badges.map((b) => (
                      <span key={b} className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                        b === "Best Seller" ? "bg-[#e8a020] text-[#1a0e08]" :
                        b === "Popular" ? "bg-[#7c1d27] text-white" :
                        b === "New" ? "bg-[#0038a8] text-white" :
                        "bg-[#2c1810] text-[#f5e6c8]"
                      }`}>{b}</span>
                    ))}
                    {item.spicy && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-red-600 text-white">🌶 Spicy</span>
                    )}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-[#f5e6c8] font-bold text-base">{item.name}</h3>
                    <span className="text-[#e8a020] font-bold text-base shrink-0 ml-2">{item.price}</span>
                  </div>
                  <p className="text-[#f5e6c8]/50 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#7c1d27] to-[#9e1f1f] text-white font-bold hover:from-[#9e1f1f] hover:to-[#c62c2c] transition-all glow-burgundy"
            >
              View Full Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="py-20 bg-gradient-to-br from-[#7c1d27]/20 to-[#0f0805]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[440px] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=85"
                  alt="Honduran food preparation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0805]/60 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-4 bg-[#e8a020] text-[#1a0e08] rounded-2xl p-4 shadow-xl">
                <p className="font-bold text-2xl">10+</p>
                <p className="text-xs font-medium">Years of Flavor</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#e8a020] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#f5e6c8] mb-6 leading-tight">
                Made with <span className="gradient-text">Honduran</span> Heart
              </h2>
              <p className="text-[#f5e6c8]/65 text-base leading-relaxed mb-5">
                Catrachos Antojitos was born from a deep love of Honduran culture, family recipes, and the desire to share authentic flavors with Las Vegas. Every baleada, every pastelito, every plate is a piece of home.
              </p>
              <p className="text-[#f5e6c8]/65 text-base leading-relaxed mb-8">
                We use fresh tortillas pressed daily, slow-cooked beans, and traditional seasonings that take you straight to the streets of Tegucigalpa.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#e8a020] font-bold hover:gap-3 transition-all"
              >
                Read Our Story <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ORDER ONLINE ── */}
      <section className="py-16 bg-[#0f0805]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Order Now" title="Get It Delivered" subtitle="Craving Honduran? We deliver through your favorite apps." centered />
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <a href={BRAND.uberEats} target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-[#1a0e08] border border-[#7c1d27]/30 text-[#f5e6c8] font-bold hover:border-[#e8a020]/40 hover:bg-[#1a0e08]/80 transition-all card-lift">
              <span className="w-3 h-3 rounded-full bg-[#06C167]" />
              Order on Uber Eats
            </a>
            <a href={BRAND.doorDash} target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-[#1a0e08] border border-[#7c1d27]/30 text-[#f5e6c8] font-bold hover:border-[#e8a020]/40 hover:bg-[#1a0e08]/80 transition-all card-lift">
              <span className="w-3 h-3 rounded-full bg-[#FF3008]" />
              Order on DoorDash
            </a>
          </div>
        </div>
      </section>

      {/* ── CATERING CTA ── */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1920&q=80"
          alt="Catering event"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0805]/95 to-[#7c1d27]/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-[#e8a020] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">Catering Services</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#f5e6c8] mb-5 leading-tight">
                Bring Honduras to <span className="gradient-text">Your Event</span>
              </h2>
              <p className="text-[#f5e6c8]/70 text-lg mb-8">
                Corporate events, weddings, birthday parties, church gatherings — we bring the full food truck experience directly to your venue.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {["Corporate Events", "Weddings", "Birthday Parties", "Church Events", "School Events"].map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#f5e6c8]/80 text-sm">
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href="/catering"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#e8a020] to-[#f5c842] text-[#1a0e08] font-bold text-lg hover:scale-105 transition-transform glow-gold"
              >
                Get a Catering Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL ── */}
      <section className="py-20 bg-[#0f0805]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Follow the Truck"
            title="We're on Social Media"
            subtitle="Follow us for daily locations, behind-the-scenes content, and food that'll make you hungry."
            centered
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {[
              { href: BRAND.instagram, icon: InstagramIcon, label: "@catrachosantojitos", platform: "Instagram", color: "from-[#833ab4] to-[#fd1d1d]" },
              { href: BRAND.tiktok, icon: TikTokIcon, label: "@catrachosantojitos", platform: "TikTok", color: "from-[#010101] to-[#69C9D0]" },
            ].map((s) => (
              <a key={s.platform} href={s.href} target="_blank" rel="noopener noreferrer"
                className={`flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r ${s.color} text-white font-bold hover:scale-105 transition-transform shadow-lg`}>
                <s.icon />
                <div className="text-left">
                  <p className="text-xs opacity-70">{s.platform}</p>
                  <p className="text-sm">{s.label}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Placeholder social posts grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=300&q=80",
              "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&q=80",
              "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&q=80",
              "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&q=80",
              "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=300&q=80",
              "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=300&q=80",
            ].map((src, i) => (
              <motion.a
                key={i}
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative aspect-square rounded-xl overflow-hidden group"
              >
                <Image src={src} alt="Social post" fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw" />
                <div className="absolute inset-0 bg-[#7c1d27]/0 group-hover:bg-[#7c1d27]/40 transition-colors flex items-center justify-center">
                  <InstagramIcon className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SNIPPET ── */}
      <section className="py-16 bg-[#1a0e08]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Common Questions" centered />
          {[
            { q: "Where is the food truck located?", a: "We rotate around Las Vegas daily. Check our Locations page or follow us on Instagram for real-time updates." },
            { q: "Do you offer catering?", a: "Yes! We cater corporate events, weddings, birthday parties, and more. Visit our Catering page to submit an inquiry." },
            { q: "Can I order online?", a: "Yes — through Uber Eats and DoorDash for delivery, or order in person at the truck." },
            { q: "Are there vegetarian options?", a: "Absolutely. Our Pastelitos de Papa and Baleada Sencilla are vegetarian-friendly. Ask us about customizing any order." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border-b border-[#7c1d27]/20 py-5"
            >
              <h3 className="text-[#f5e6c8] font-semibold mb-2 text-base">{item.q}</h3>
              <p className="text-[#f5e6c8]/55 text-sm leading-relaxed">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
