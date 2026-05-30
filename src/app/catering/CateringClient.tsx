"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Building2, Cake, Church, GraduationCap, Users, Heart, Dumbbell,
  CheckCircle2, ArrowRight, Phone, Star,
} from "lucide-react";
import { CATERING_TYPES } from "@/lib/data";
import MarqueeBanner from "@/components/MarqueeBanner";
import ImageWithFallback from "@/components/ImageWithFallback";

const schema = z.object({
  name: z.string().min(2, "Name required"),
  phone: z.string().min(7, "Phone required"),
  email: z.string().email("Valid email required"),
  event_date: z.string().min(1, "Event date required"),
  event_location: z.string().min(3, "Event location required"),
  guest_count: z.string().min(1, "Guest count required"),
  catering_type: z.string().min(1, "Event type required"),
  message: z.string().optional(),
});
type FormData = z.infer<typeof schema>;

const EVENT_TYPES = [
  { icon: Building2, label: "Corporate",   desc: "Team lunches, client events, company parties" },
  { icon: Heart,     label: "Weddings",    desc: "Receptions, rehearsal dinners, engagement parties" },
  { icon: Cake,      label: "Birthdays",   desc: "Quinceañeras, milestone birthdays, kids' parties" },
  { icon: Church,    label: "Church",      desc: "Fundraisers, potlucks, community gatherings" },
  { icon: GraduationCap, label: "Schools", desc: "Graduation parties, sports banquets, PTA events" },
  { icon: Dumbbell,  label: "Fitness",     desc: "Gym events, community fairs, outdoor festivals" },
  { icon: Users,     label: "Private",     desc: "House parties, family reunions, pool parties" },
];

const INCLUDED = [
  "Full food truck setup at your venue",
  "Professional staff & service",
  "Custom menu for your event",
  "All equipment included",
  "50 to 500+ guests served",
  "Setup 1–2 hours before service",
  "Full cleanup after",
  "Flexible 2–4 hour service windows",
];

const TESTIMONIALS = [
  { name: "Maria G.", event: "Quinceañera · 150 guests", text: "The food was incredible! Every guest kept asking where we ordered from. Catrachos made our quinceañera unforgettable.", stars: 5 },
  { name: "James K.", event: "Corporate Event · 200 guests", text: "Professional, punctual, and the best Honduran food our team has ever tasted. We're booking them again next quarter.", stars: 5 },
  { name: "Pastor Rivera", event: "Church Picnic · 300 guests", text: "Our congregation loved it. The baleadas and tajadas were gone in the first hour! Highly recommend for any community event.", stars: 5 },
];

const inputClass = "w-full px-4 py-3 rounded-xl bg-[#1C1008] border border-[#F4E4C1]/10 text-[#F4E4C1] placeholder-[#F4E4C1]/20 text-sm focus:outline-none focus:border-[#D4891A]/50 transition-colors";
const labelClass = "block text-[#F4E4C1]/55 text-xs font-bold uppercase tracking-widest mb-2";

export default function CateringClient() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      await fetch("/api/catering", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setSubmitted(true);
      reset();
    } catch { setSubmitted(true); }
    finally { setSubmitting(false); }
  };

  return (
    <div className="pt-20 bg-[#1C1008]">

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1920&h=900&fit=crop&q=80"
          alt="Catering event"
          fill className="object-cover opacity-30" fallbackEmoji="🎉"
          sizes="100vw" priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1008]/95 via-[#1C1008]/80 to-[#1C1008]/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
            <span className="text-[#D4891A] text-xs font-bold tracking-[0.3em] uppercase mb-5 block">Catering Services</span>
            <h1 className="font-display text-[#F4E4C1] text-6xl md:text-8xl leading-none mb-6">
              BRING<br /><span className="gradient-gold">HONDURAS</span><br />TO YOUR EVENT
            </h1>
            <p className="text-[#F4E4C1]/65 text-lg leading-relaxed mb-8">
              We roll the full Catrachos Antojitos food truck experience right to your venue — fresh Honduran street food for 50 to 500+ guests.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#inquiry-form"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#D4891A] text-[#1C1008] font-bold text-sm tracking-wide hover:bg-[#F0A830] transition-colors">
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </a>
              <a href="tel:+17255550190"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-[#F4E4C1]/20 text-[#F4E4C1] font-bold text-sm hover:border-[#F4E4C1]/50 transition-colors">
                <Phone className="w-4 h-4" />Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <MarqueeBanner />

      {/* Event Types */}
      <section className="py-20 bg-[#F4E4C1] texture-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#8B1A1A] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">We Cater All Events</span>
            <h2 className="font-display text-[#1C1008] text-5xl md:text-6xl leading-none">WHAT'S YOUR EVENT?</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {EVENT_TYPES.map((t, i) => (
              <motion.a
                key={t.label}
                href="#inquiry-form"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-[#1C1008] text-center cursor-pointer group shadow-lg shadow-[#1C1008]/30"
              >
                <div className="w-12 h-12 rounded-xl bg-[#8B1A1A]/30 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#8B1A1A]/60 transition-colors">
                  <t.icon className="w-6 h-6 text-[#D4891A]" />
                </div>
                <h3 className="text-[#F4E4C1] font-bold text-sm mb-1.5">{t.label}</h3>
                <p className="text-[#F4E4C1]/40 text-xs leading-relaxed">{t.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 bg-[#2A1A0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-[#D4891A] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Everything Included</span>
              <h2 className="font-display text-[#F4E4C1] text-5xl leading-none mb-8">
                NO HIDDEN<br />FEES. NO STRESS.
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#D4891A] mt-0.5 shrink-0" />
                    <span className="text-[#F4E4C1]/65 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="relative h-[400px] rounded-3xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop&q=85"
                  alt="Food spread"
                  fill className="object-cover" fallbackEmoji="🍽️"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-5 -left-4 bg-[#D4891A] text-[#1C1008] rounded-2xl p-4 shadow-xl">
                <p className="font-display text-3xl leading-none">500+</p>
                <p className="text-xs font-bold mt-0.5">Max Guests</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#8B1A1A] texture-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-[#F4E4C1] text-4xl md:text-5xl">WHAT PEOPLE SAY</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-[#1C1008]/60 backdrop-blur-sm rounded-2xl p-6 border border-[#F4E4C1]/8">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.stars)].map((_, s) => <Star key={s} className="w-4 h-4 fill-[#D4891A] text-[#D4891A]" />)}
                </div>
                <p className="text-[#F4E4C1]/75 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                <div>
                  <p className="text-[#F4E4C1] font-bold text-sm">{t.name}</p>
                  <p className="text-[#D4891A] text-xs font-medium">{t.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="py-20 bg-[#1C1008]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#D4891A] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Get a Quote</span>
            <h2 className="font-display text-[#F4E4C1] text-5xl leading-none mb-3">LET'S TALK</h2>
            <p className="text-[#F4E4C1]/50 text-sm">We'll respond within 24 hours.</p>
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div key="success"
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 px-8 rounded-3xl bg-[#2A1A0E] border border-[#D4891A]/20">
                <CheckCircle2 className="w-16 h-16 text-[#D4891A] mx-auto mb-5" />
                <h3 className="font-display text-[#F4E4C1] text-4xl mb-3">SENT!</h3>
                <p className="text-[#F4E4C1]/55 text-sm mb-6">We'll be in touch within 24 hours to discuss your event.</p>
                <button onClick={() => setSubmitted(false)} className="text-[#D4891A] text-sm font-bold hover:underline">
                  Submit another inquiry
                </button>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 bg-[#2A1A0E] rounded-3xl p-8 border border-[#F4E4C1]/6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input {...register("name")} placeholder="Maria Hernandez" className={inputClass} />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Phone *</label>
                    <input {...register("phone")} type="tel" placeholder="(702) 555-0100" className={inputClass} />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Email *</label>
                    <input {...register("email")} type="email" placeholder="maria@example.com" className={inputClass} />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Event Date *</label>
                    <input {...register("event_date")} type="date" min={new Date().toISOString().split("T")[0]} className={inputClass} />
                    {errors.event_date && <p className="text-red-400 text-xs mt-1">{errors.event_date.message}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Guest Count *</label>
                    <select {...register("guest_count")} className={inputClass}>
                      <option value="">Select range</option>
                      {["50–100","100–200","200–350","350–500","500+"].map(v => <option key={v} value={v}>{v} guests</option>)}
                    </select>
                    {errors.guest_count && <p className="text-red-400 text-xs mt-1">{errors.guest_count.message}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Event Type *</label>
                    <select {...register("catering_type")} className={inputClass}>
                      <option value="">Select type</option>
                      {CATERING_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    {errors.catering_type && <p className="text-red-400 text-xs mt-1">{errors.catering_type.message}</p>}
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Venue / Address *</label>
                  <input {...register("event_location")} placeholder="5000 W Sahara Ave, Las Vegas, NV" className={inputClass} />
                  {errors.event_location && <p className="text-red-400 text-xs mt-1">{errors.event_location.message}</p>}
                </div>
                <div>
                  <label className={labelClass}>Additional Details</label>
                  <textarea {...register("message")} rows={4} placeholder="Tell us about your event, menu requests, anything we should know..." className={`${inputClass} resize-none`} />
                </div>
                <button type="submit" disabled={submitting}
                  className="w-full py-4 rounded-xl bg-[#D4891A] hover:bg-[#F0A830] text-[#1C1008] font-bold text-sm tracking-widest uppercase transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
                  {submitting ? "Sending..." : "Send Catering Inquiry →"}
                </button>
                <p className="text-[#F4E4C1]/25 text-xs text-center">We respond within 24 hours · (725) 555-0190</p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
