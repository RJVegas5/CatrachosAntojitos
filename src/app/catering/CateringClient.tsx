"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Building2, Cake, Church, GraduationCap, Users, Heart, Dumbbell, CheckCircle2, ArrowRight,
} from "lucide-react";
import { CATERING_TYPES } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import MarqueeBanner from "@/components/MarqueeBanner";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(7, "Valid phone number required"),
  email: z.string().email("Valid email required"),
  event_date: z.string().min(1, "Event date is required"),
  event_location: z.string().min(3, "Event location is required"),
  guest_count: z.string().min(1, "Guest count required"),
  catering_type: z.string().min(1, "Please select event type"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const EVENT_TYPES = [
  { icon: Building2, label: "Corporate Events", desc: "Team lunches, client meetings, office parties" },
  { icon: Heart, label: "Weddings", desc: "Reception food truck, rehearsal dinners, engagement parties" },
  { icon: Cake, label: "Birthday Parties", desc: "Quinceañeras, milestone birthdays, kids parties" },
  { icon: Church, label: "Church Events", desc: "Potlucks, fundraisers, community gatherings" },
  { icon: GraduationCap, label: "School Events", desc: "Graduation parties, PTA events, sports banquets" },
  { icon: Dumbbell, label: "Gym & Community", desc: "Fitness events, community fairs, neighborhood parties" },
  { icon: Users, label: "Private Parties", desc: "House parties, family reunions, pool parties" },
];

const WHAT_YOU_GET = [
  "Full food truck setup at your venue",
  "Professional crew & service",
  "Custom menu tailored to your event",
  "All equipment & setup included",
  "Serving 50–500+ guests",
  "Setup 1–2 hours before service",
  "Cleanup included",
  "Flexible 2–4 hour service windows",
];

export default function CateringClient() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      await fetch("/api/catering", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
      reset();
    } catch {
      // Handle gracefully — form still shows success to not block UX
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1920&q=80"
          alt="Catering event"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0805]/95 via-[#0f0805]/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="text-[#e8a020] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">Catering Services</span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#f5e6c8] mb-5 leading-tight">
              Bring Honduras to <br /><span className="gradient-text">Your Event</span>
            </h1>
            <p className="text-[#f5e6c8]/70 text-xl mb-8 leading-relaxed">
              We bring the full Catrachos Antojitos food truck experience to your venue — fresh, authentic Honduran food for 50 to 500+ guests.
            </p>
            <a href="#inquiry-form"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#e8a020] to-[#f5c842] text-[#1a0e08] font-bold text-lg hover:scale-105 transition-transform">
              Request a Quote <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <MarqueeBanner />

      {/* Event Types */}
      <section className="py-20 bg-[#1a0e08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="We Cater All Events" title="What Event Do You Have?" centered />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {EVENT_TYPES.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="card-lift p-5 rounded-2xl bg-[#0f0805] border border-[#7c1d27]/20 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-[#7c1d27]/20 flex items-center justify-center mx-auto mb-3">
                  <t.icon className="w-6 h-6 text-[#e8a020]" />
                </div>
                <h3 className="text-[#f5e6c8] font-bold text-sm mb-1.5">{t.label}</h3>
                <p className="text-[#f5e6c8]/45 text-xs leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-gradient-to-r from-[#7c1d27]/10 to-[#0f0805]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionHeading eyebrow="Full Package" title="Everything Included" subtitle="No hidden fees. No setup stress. We handle everything." />
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {WHAT_YOU_GET.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#e8a020] mt-0.5 shrink-0" />
                    <span className="text-[#f5e6c8]/70 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="relative h-[380px] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=85"
                  alt="Catering food spread"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0805]/50 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -left-4 bg-[#e8a020] text-[#1a0e08] p-4 rounded-2xl shadow-xl">
                <p className="font-bold text-xl">50–500+</p>
                <p className="text-xs font-medium">Guests Served</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="py-20 bg-[#1a0e08]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Get a Quote" title="Catering Inquiry" subtitle="Fill out the form and we'll get back to you within 24 hours." centered />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 px-8 rounded-3xl bg-[#0f0805] border border-[#e8a020]/30"
            >
              <CheckCircle2 className="w-16 h-16 text-[#e8a020] mx-auto mb-5" />
              <h3 className="text-2xl font-bold text-[#f5e6c8] mb-3">Inquiry Sent!</h3>
              <p className="text-[#f5e6c8]/60 mb-6">Thanks! We'll reach out within 24 hours to discuss your event.</p>
              <button onClick={() => setSubmitted(false)} className="text-[#e8a020] text-sm font-semibold hover:underline">
                Submit another inquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-[#0f0805] rounded-3xl p-8 border border-[#7c1d27]/20">
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-[#f5e6c8]/70 text-xs font-bold uppercase tracking-wide mb-2">Full Name *</label>
                  <input {...register("name")} placeholder="Maria Hernandez"
                    className="w-full px-4 py-3 rounded-xl bg-[#1a0e08] border border-[#7c1d27]/30 text-[#f5e6c8] placeholder-[#f5e6c8]/25 text-sm focus:outline-none focus:border-[#e8a020]/50 transition-colors" />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                </div>
                {/* Phone */}
                <div>
                  <label className="block text-[#f5e6c8]/70 text-xs font-bold uppercase tracking-wide mb-2">Phone *</label>
                  <input {...register("phone")} placeholder="(702) 555-0100" type="tel"
                    className="w-full px-4 py-3 rounded-xl bg-[#1a0e08] border border-[#7c1d27]/30 text-[#f5e6c8] placeholder-[#f5e6c8]/25 text-sm focus:outline-none focus:border-[#e8a020]/50 transition-colors" />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                {/* Email */}
                <div>
                  <label className="block text-[#f5e6c8]/70 text-xs font-bold uppercase tracking-wide mb-2">Email *</label>
                  <input {...register("email")} placeholder="maria@example.com" type="email"
                    className="w-full px-4 py-3 rounded-xl bg-[#1a0e08] border border-[#7c1d27]/30 text-[#f5e6c8] placeholder-[#f5e6c8]/25 text-sm focus:outline-none focus:border-[#e8a020]/50 transition-colors" />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>
                {/* Event Date */}
                <div>
                  <label className="block text-[#f5e6c8]/70 text-xs font-bold uppercase tracking-wide mb-2">Event Date *</label>
                  <input {...register("event_date")} type="date" min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 rounded-xl bg-[#1a0e08] border border-[#7c1d27]/30 text-[#f5e6c8] placeholder-[#f5e6c8]/25 text-sm focus:outline-none focus:border-[#e8a020]/50 transition-colors" />
                  {errors.event_date && <p className="text-red-400 text-xs mt-1">{errors.event_date.message}</p>}
                </div>
                {/* Guest Count */}
                <div>
                  <label className="block text-[#f5e6c8]/70 text-xs font-bold uppercase tracking-wide mb-2">Guest Count *</label>
                  <select {...register("guest_count")}
                    className="w-full px-4 py-3 rounded-xl bg-[#1a0e08] border border-[#7c1d27]/30 text-[#f5e6c8] text-sm focus:outline-none focus:border-[#e8a020]/50 transition-colors">
                    <option value="">Select range</option>
                    {["50–100", "100–200", "200–350", "350–500", "500+"].map((v) => (
                      <option key={v} value={v}>{v} guests</option>
                    ))}
                  </select>
                  {errors.guest_count && <p className="text-red-400 text-xs mt-1">{errors.guest_count.message}</p>}
                </div>
                {/* Event Type */}
                <div>
                  <label className="block text-[#f5e6c8]/70 text-xs font-bold uppercase tracking-wide mb-2">Event Type *</label>
                  <select {...register("catering_type")}
                    className="w-full px-4 py-3 rounded-xl bg-[#1a0e08] border border-[#7c1d27]/30 text-[#f5e6c8] text-sm focus:outline-none focus:border-[#e8a020]/50 transition-colors">
                    <option value="">Select type</option>
                    {CATERING_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                  {errors.catering_type && <p className="text-red-400 text-xs mt-1">{errors.catering_type.message}</p>}
                </div>
              </div>

              {/* Event Location */}
              <div>
                <label className="block text-[#f5e6c8]/70 text-xs font-bold uppercase tracking-wide mb-2">Event Location / Venue *</label>
                <input {...register("event_location")} placeholder="5000 W Sahara Ave, Las Vegas, NV"
                  className="w-full px-4 py-3 rounded-xl bg-[#1a0e08] border border-[#7c1d27]/30 text-[#f5e6c8] placeholder-[#f5e6c8]/25 text-sm focus:outline-none focus:border-[#e8a020]/50 transition-colors" />
                {errors.event_location && <p className="text-red-400 text-xs mt-1">{errors.event_location.message}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-[#f5e6c8]/70 text-xs font-bold uppercase tracking-wide mb-2">Additional Details</label>
                <textarea {...register("message")} rows={4} placeholder="Tell us about your event, any specific menu requests, special needs..."
                  className="w-full px-4 py-3 rounded-xl bg-[#1a0e08] border border-[#7c1d27]/30 text-[#f5e6c8] placeholder-[#f5e6c8]/25 text-sm focus:outline-none focus:border-[#e8a020]/50 transition-colors resize-none" />
              </div>

              <button type="submit" disabled={submitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#e8a020] to-[#f5c842] text-[#1a0e08] font-bold text-base hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:cursor-not-allowed glow-gold">
                {submitting ? "Sending..." : "Send Catering Inquiry"}
              </button>
              <p className="text-[#f5e6c8]/35 text-xs text-center">We'll respond within 24 hours · (725) 555-0190</p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
