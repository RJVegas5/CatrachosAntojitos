"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, CalendarDays, Bell, ArrowRight } from "lucide-react";
import MarqueeBanner from "@/components/MarqueeBanner";
import LaunchCountdown from "@/components/LaunchCountdown";
import VIPWaitlist from "@/components/VIPWaitlist";
import { BRAND, LAUNCH_AREA } from "@/lib/data";
import { InstagramIcon } from "@/components/SocialIcons";

const AREAS = [
  { name: "Las Vegas",       neighborhoods: "Downtown, Fremont, Arts District, Spring Valley" },
  { name: "Henderson",       neighborhoods: "Green Valley, Anthem, Inspirada" },
  { name: "Summerlin",       neighborhoods: "Festival Grounds, Downtown Summerlin" },
  { name: "North Las Vegas", neighborhoods: "Bruce St, Carey, Cheyenne" },
];

export default function LocationsClient() {
  return (
    <div className="pt-20 bg-[#1C1008]">

      {/* Hero */}
      <section className="relative py-24 bg-[#2A1A0E] overflow-hidden texture-grain">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_40%_50%,_rgba(139,26,26,0.2)_0%,_transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                bg-[#D4891A]/15 border border-[#D4891A]/25 text-[#D4891A] text-xs font-bold
                tracking-widest uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-[#F0A830] animate-pulse" />
                Coming to Las Vegas
              </span>
              <h1 className="font-display text-[#F4E4C1] leading-none mb-5"
                style={{ fontSize:"clamp(3rem,8vw,6rem)" }}>
                OPENING<br /><span className="gradient-gold">SOON</span><br />IN LAS VEGAS
              </h1>
              <p className="text-[#F4E4C1]/55 text-base leading-relaxed mb-6 max-w-md">
                We're not parked yet — but we're coming. Catrachos Antojitos will be rolling through Las Vegas, Henderson, Summerlin, and North Las Vegas starting Fall 2026.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#notify"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D4891A]
                    text-[#1C1008] font-bold text-sm hover:bg-[#F0A830] transition-colors">
                  <Bell className="w-4 h-4" />Get Notified at Launch
                </a>
                <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2
                    border-[#F4E4C1]/15 text-[#F4E4C1] font-bold text-sm hover:border-[#F4E4C1]/35 transition-colors">
                  <InstagramIcon className="w-4 h-4" />Follow on Instagram
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity:0, x:24 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.2 }}>
              <div className="bg-[#1C1008]/60 backdrop-blur-sm rounded-3xl border border-[#D4891A]/20 p-7 shadow-2xl">
                <p className="text-[#D4891A] text-xs font-bold uppercase tracking-widest mb-5">
                  🚀 Launch Countdown
                </p>
                <LaunchCountdown />
                <div className="mt-6 pt-5 border-t border-[#F4E4C1]/8">
                  <div className="flex items-center gap-2 text-[#F4E4C1]/50 text-sm">
                    <MapPin className="w-4 h-4 text-[#D4891A]" />
                    Target Area: {LAUNCH_AREA}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <MarqueeBanner />

      {/* Service areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[#D4891A] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Where We'll Be</span>
            <h2 className="font-display text-[#F4E4C1] leading-none" style={{ fontSize:"clamp(2.5rem,5vw,4rem)" }}>
              SERVICE AREAS
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {AREAS.map((area, i) => (
              <motion.div key={area.name}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay: i*0.08 }}
                className="p-6 rounded-2xl bg-[#2A1A0E] border border-[#F4E4C1]/6">
                <MapPin className="w-5 h-5 text-[#D4891A] mb-3" />
                <h3 className="font-display text-[#F4E4C1] text-xl mb-2">{area.name.toUpperCase()}</h3>
                <p className="text-[#F4E4C1]/40 text-xs leading-relaxed">{area.neighborhoods}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Notify */}
      <section id="notify" className="py-20 bg-[#F4E4C1] texture-dots">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#8B1A1A] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Be First</span>
            <h2 className="font-display text-[#1C1008] leading-none mb-3" style={{ fontSize:"clamp(2.5rem,5vw,4rem)" }}>
              GET NOTIFIED<br />WHEN WE OPEN
            </h2>
            <p className="text-[#1C1008]/55 text-base">Join the VIP waitlist and we'll tell you our exact opening date, location, and any launch-day specials.</p>
          </div>
          <VIPWaitlist dark source="locations-page" />
        </div>
      </section>

      {/* Catering CTA */}
      <section className="py-16 bg-[#8B1A1A] texture-grain">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display text-[#F4E4C1] text-4xl md:text-5xl mb-4">
            NEED US FOR AN EVENT?
          </h2>
          <p className="text-[#F4E4C1]/65 text-base mb-7">
            We're not open yet, but we ARE booking catering right now for upcoming events in Las Vegas and surrounding areas.
          </p>
          <Link href="/catering"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
              bg-[#D4891A] text-[#1C1008] font-bold text-sm hover:bg-[#F0A830] transition-colors">
            Request Catering Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
