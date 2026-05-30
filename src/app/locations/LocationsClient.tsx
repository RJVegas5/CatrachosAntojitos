"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Clock, Navigation, CalendarDays, Truck } from "lucide-react";
import { WEEKLY_SCHEDULE, TODAY_LOCATION } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import MarqueeBanner from "@/components/MarqueeBanner";

const UPCOMING_EVENTS = [
  { name: "Summerlin Night Market", date: "June 7, 2026", location: "1980 Festival Plaza Dr", time: "5:00 PM – 10:00 PM" },
  { name: "Las Vegas Food Truck Fest", date: "June 14, 2026", location: "Downtown Container Park", time: "12:00 PM – 8:00 PM" },
  { name: "Henderson Community Fair", date: "June 21, 2026", location: "Henderson Pavilion", time: "10:00 AM – 6:00 PM" },
  { name: "Arts District Saturday Market", date: "June 28, 2026", location: "Arts District LV", time: "9:00 AM – 2:00 PM" },
];

export default function LocationsClient() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-b from-[#0f0805] to-[#1a0e08] overflow-hidden">
        <div className="absolute inset-0 texture-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#7c1d27/20_0%,_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#e8a020] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">Find Us</span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#f5e6c8] mb-5">
              <span className="gradient-text">Locations</span> & Schedule
            </h1>
            <p className="text-[#f5e6c8]/60 text-lg max-w-xl mx-auto">
              We roll around Las Vegas daily. Here's where to find us this week.
            </p>
          </motion.div>
        </div>
      </section>

      <MarqueeBanner />

      {/* Today's Location */}
      <section className="py-16 bg-[#1a0e08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-r from-[#7c1d27] to-[#9e1f1f] p-8 md:p-12 mb-16"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-[#22c55e] badge-pulse" />
                  <span className="text-[#22c55e] text-sm font-bold uppercase tracking-wider">We're Open Today!</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{TODAY_LOCATION.name}</h2>
                <div className="flex items-center gap-2 mb-1.5">
                  <MapPin className="w-4 h-4 text-[#f5c842]" />
                  <p className="text-white/80 text-sm">{TODAY_LOCATION.address}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#f5c842]" />
                  <p className="text-white/80 text-sm">{TODAY_LOCATION.hours}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a href={TODAY_LOCATION.mapsUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/15 border border-white/25 text-white font-bold hover:bg-white/25 transition-colors">
                  <Navigation className="w-4 h-4" />Get Directions
                </a>
                <a href="https://ubereats.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#e8a020] text-[#1a0e08] font-bold hover:bg-[#f5c842] transition-colors">
                  Order Now
                </a>
              </div>
            </div>
          </motion.div>

          {/* Weekly Schedule */}
          <SectionHeading eyebrow="This Week" title="Weekly Schedule" />
          <div className="grid gap-3 mb-16">
            {WEEKLY_SCHEDULE.map((day, i) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-2xl border transition-all ${
                  day.active
                    ? "bg-[#7c1d27]/15 border-[#e8a020]/30"
                    : "bg-[#0f0805] border-[#7c1d27]/15 opacity-80"
                }`}
              >
                <div className="flex items-center gap-3 sm:w-36">
                  {day.active ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] badge-pulse shrink-0" />
                  ) : (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#7c1d27]/40 shrink-0" />
                  )}
                  <span className={`font-bold text-sm ${day.active ? "text-[#e8a020]" : "text-[#f5e6c8]/60"}`}>
                    {day.day}
                    {day.active && <span className="ml-2 text-[10px] text-[#22c55e] font-bold">TODAY</span>}
                  </span>
                </div>
                <div className="flex-1 sm:flex sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="text-[#f5e6c8] font-semibold text-sm">{day.location}</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#e8a020]" />
                      <p className="text-[#f5e6c8]/50 text-xs">{day.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 mt-2 sm:mt-0">
                    <Clock className="w-3.5 h-3.5 text-[#e8a020]" />
                    <span className="text-[#f5e6c8]/60 text-sm">{day.hours}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Upcoming Events */}
          <SectionHeading eyebrow="Mark Your Calendar" title="Upcoming Events" />
          <div className="grid sm:grid-cols-2 gap-4 mb-16">
            {UPCOMING_EVENTS.map((event, i) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-lift p-5 rounded-2xl bg-[#0f0805] border border-[#7c1d27]/20"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#7c1d27]/20 shrink-0">
                    <CalendarDays className="w-5 h-5 text-[#e8a020]" />
                  </div>
                  <div>
                    <h3 className="text-[#f5e6c8] font-bold text-sm mb-1">{event.name}</h3>
                    <p className="text-[#e8a020] text-xs font-semibold mb-1">{event.date}</p>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <MapPin className="w-3 h-3 text-[#f5e6c8]/40" />
                      <p className="text-[#f5e6c8]/50 text-xs">{event.location}</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-[#f5e6c8]/40" />
                      <p className="text-[#f5e6c8]/50 text-xs">{event.time}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Us */}
      <section className="py-16 bg-[#0f0805]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <Truck className="w-12 h-12 text-[#e8a020] mx-auto mb-5" />
          <h2 className="text-3xl font-bold text-[#f5e6c8] mb-4">Book Us for Your Event</h2>
          <p className="text-[#f5e6c8]/60 mb-8 text-lg">
            Want Catrachos Antojitos at your festival, market, or private event? We'd love to roll up and serve your guests!
          </p>
          <Link href="/catering"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#e8a020] to-[#f5c842] text-[#1a0e08] font-bold text-lg hover:scale-105 transition-transform">
            Request a Booking
          </Link>
        </div>
      </section>
    </div>
  );
}
