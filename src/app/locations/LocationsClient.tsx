"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Clock, Navigation, CalendarDays, Truck, ArrowRight } from "lucide-react";
import { WEEKLY_SCHEDULE, TODAY_LOCATION, BRAND } from "@/lib/data";
import MarqueeBanner from "@/components/MarqueeBanner";
import { InstagramIcon } from "@/components/SocialIcons";

const UPCOMING_EVENTS = [
  { name: "Summerlin Night Market",        date: "Jun 7, 2026",  location: "1980 Festival Plaza Dr",     time: "5 PM – 10 PM" },
  { name: "Las Vegas Food Truck Fest",     date: "Jun 14, 2026", location: "Downtown Container Park",    time: "12 PM – 8 PM" },
  { name: "Henderson Community Fair",      date: "Jun 21, 2026", location: "Henderson Pavilion",         time: "10 AM – 6 PM" },
  { name: "Arts District Saturday Market", date: "Jun 28, 2026", location: "Las Vegas Arts District",    time: "9 AM – 2 PM" },
];

export default function LocationsClient() {
  return (
    <div className="pt-20 bg-[#1C1008]">

      {/* Hero */}
      <section className="relative py-24 bg-[#2A1A0E] overflow-hidden texture-grain">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_30%_50%,_rgba(139,26,26,0.25)_0%,_transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-[#D4891A] text-xs font-bold tracking-[0.3em] uppercase mb-5 block">We Roll Around Las Vegas</span>
              <h1 className="font-display text-[#F4E4C1] text-6xl md:text-8xl leading-none mb-6">
                FIND<br /><span className="gradient-gold">THE TRUCK</span>
              </h1>
              <p className="text-[#F4E4C1]/55 text-base leading-relaxed max-w-md">
                We're out there every day — from Summerlin to Henderson, Downtown to North Las Vegas. Here's where to find us.
              </p>
            </motion.div>

            {/* Today card */}
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <div className="bg-[#8B1A1A] rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 texture-grain opacity-40" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-3 h-3 rounded-full bg-[#4ADE80] pulse-live" />
                    <span className="text-[#4ADE80] font-bold text-sm uppercase tracking-widest">Open Today</span>
                  </div>
                  <p className="font-display text-[#F4E4C1] text-4xl leading-none mb-4">{TODAY_LOCATION.name}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-[#F4E4C1]/70 text-sm">
                      <MapPin className="w-4 h-4 text-[#F0A830] shrink-0" />{TODAY_LOCATION.address}
                    </div>
                    <div className="flex items-center gap-2 text-[#F4E4C1]/70 text-sm">
                      <Clock className="w-4 h-4 text-[#F0A830] shrink-0" />{TODAY_LOCATION.hours}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a href={TODAY_LOCATION.mapsUrl} target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#F4E4C1]/15 border border-[#F4E4C1]/20 text-[#F4E4C1] font-bold text-sm hover:bg-[#F4E4C1]/25 transition-colors">
                      <Navigation className="w-4 h-4" />Directions
                    </a>
                    <a href={BRAND.uberEats} target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#D4891A] text-[#1C1008] font-bold text-sm hover:bg-[#F0A830] transition-colors">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <MarqueeBanner />

      {/* Weekly schedule */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-[#D4891A] text-xs font-bold tracking-[0.3em] uppercase mb-2 block">7 Days a Week</span>
              <h2 className="font-display text-[#F4E4C1] text-4xl md:text-5xl leading-none">WEEKLY SCHEDULE</h2>
            </div>
            <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-[#D4891A] text-sm font-bold hover:text-[#F0A830] transition-colors">
              <InstagramIcon className="w-4 h-4" />Live Updates
            </a>
          </div>

          <div className="space-y-2">
            {WEEKLY_SCHEDULE.map((day, i) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-4 sm:p-5 rounded-2xl border transition-all ${
                  day.active
                    ? "bg-[#8B1A1A]/15 border-[#D4891A]/30"
                    : "bg-[#2A1A0E] border-[#F4E4C1]/5"
                }`}
              >
                {/* Day */}
                <div className="flex items-center gap-3 sm:w-32 shrink-0">
                  {day.active
                    ? <span className="w-2.5 h-2.5 rounded-full bg-[#4ADE80] pulse-live shrink-0" />
                    : <span className="w-2.5 h-2.5 rounded-full bg-[#F4E4C1]/10 shrink-0" />}
                  <span className={`font-bold text-sm ${day.active ? "text-[#D4891A]" : "text-[#F4E4C1]/50"}`}>
                    {day.day}
                    {day.active && <span className="ml-2 bg-[#4ADE80]/15 text-[#4ADE80] text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wide">Today</span>}
                  </span>
                </div>

                {/* Location */}
                <div className="flex-1 min-w-0">
                  <p className={`font-semibold text-sm truncate ${day.active ? "text-[#F4E4C1]" : "text-[#F4E4C1]/60"}`}>{day.location}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#D4891A] shrink-0" />
                    <p className="text-[#F4E4C1]/35 text-xs truncate">{day.address}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <Clock className="w-3.5 h-3.5 text-[#D4891A]" />
                  <span className={`text-sm ${day.active ? "text-[#F4E4C1]/80" : "text-[#F4E4C1]/40"}`}>{day.hours}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-[#F4E4C1] texture-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-[#8B1A1A] text-xs font-bold tracking-[0.3em] uppercase mb-2 block">Mark Your Calendar</span>
              <h2 className="font-display text-[#1C1008] text-4xl md:text-5xl leading-none">UPCOMING EVENTS</h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {UPCOMING_EVENTS.map((event, i) => (
              <motion.div key={event.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-[#1C1008] rounded-2xl p-5 shadow-xl group hover:shadow-2xl transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#8B1A1A]/30 flex items-center justify-center mb-4 group-hover:bg-[#8B1A1A]/60 transition-colors">
                  <CalendarDays className="w-5 h-5 text-[#D4891A]" />
                </div>
                <p className="text-[#D4891A] text-xs font-bold mb-1.5 uppercase tracking-wide">{event.date}</p>
                <h3 className="text-[#F4E4C1] font-bold text-sm mb-2 leading-snug">{event.name}</h3>
                <div className="space-y-1">
                  <p className="flex items-center gap-1.5 text-[#F4E4C1]/40 text-xs"><MapPin className="w-3 h-3" />{event.location}</p>
                  <p className="flex items-center gap-1.5 text-[#F4E4C1]/40 text-xs"><Clock className="w-3 h-3" />{event.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Us / Instagram */}
      <section className="py-20 bg-[#2A1A0E]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Truck className="w-12 h-12 text-[#D4891A] mx-auto mb-6" />
          <h2 className="font-display text-[#F4E4C1] text-4xl md:text-5xl leading-none mb-4">WANT US AT YOUR EVENT?</h2>
          <p className="text-[#F4E4C1]/55 text-base leading-relaxed mb-8">
            Book Catrachos Antojitos for your market, festival, or private event. We love showing up and making it unforgettable.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/catering"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#D4891A] text-[#1C1008] font-bold text-sm hover:bg-[#F0A830] transition-colors">
              Request a Booking <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-[#F4E4C1]/15 text-[#F4E4C1] font-bold text-sm hover:border-[#F4E4C1]/35 transition-colors">
              <InstagramIcon className="w-4 h-4" />Follow for Live Updates
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
