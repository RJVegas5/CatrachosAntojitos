"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { InstagramIcon, TikTokIcon, FacebookIcon } from "@/components/SocialIcons";
import { BRAND } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import MarqueeBanner from "@/components/MarqueeBanner";

export default function ContactClient() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-[#0f0805] to-[#1a0e08] overflow-hidden relative">
        <div className="absolute inset-0 texture-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#7c1d27/20_0%,_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#e8a020] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">Get In Touch</span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#f5e6c8] mb-5">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-[#f5e6c8]/60 text-lg max-w-md mx-auto">
              Questions, catering requests, or just want to say hi — we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <MarqueeBanner />

      <section className="py-20 bg-[#1a0e08]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-[#f5e6c8] mb-6">Contact Info</h2>
                <div className="space-y-4">
                  <a href={`tel:${BRAND.phone}`} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-[#7c1d27]/20 flex items-center justify-center shrink-0 group-hover:bg-[#7c1d27]/40 transition-colors">
                      <Phone className="w-4 h-4 text-[#e8a020]" />
                    </div>
                    <div>
                      <p className="text-[#f5e6c8]/40 text-xs uppercase tracking-wide">Phone</p>
                      <p className="text-[#f5e6c8] font-semibold text-sm group-hover:text-[#e8a020] transition-colors">{BRAND.phone}</p>
                    </div>
                  </a>
                  <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-[#7c1d27]/20 flex items-center justify-center shrink-0 group-hover:bg-[#7c1d27]/40 transition-colors">
                      <Mail className="w-4 h-4 text-[#e8a020]" />
                    </div>
                    <div>
                      <p className="text-[#f5e6c8]/40 text-xs uppercase tracking-wide">Email</p>
                      <p className="text-[#f5e6c8] font-semibold text-sm group-hover:text-[#e8a020] transition-colors">{BRAND.email}</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#7c1d27]/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#e8a020]" />
                    </div>
                    <div>
                      <p className="text-[#f5e6c8]/40 text-xs uppercase tracking-wide">Service Area</p>
                      <p className="text-[#f5e6c8] font-semibold text-sm">Las Vegas, NV & Surrounding Areas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#7c1d27]/20 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-[#e8a020]" />
                    </div>
                    <div>
                      <p className="text-[#f5e6c8]/40 text-xs uppercase tracking-wide">Hours</p>
                      <p className="text-[#f5e6c8] font-semibold text-sm">Mon–Fri: 11AM–9PM</p>
                      <p className="text-[#f5e6c8] font-semibold text-sm">Sat: 10AM–9PM</p>
                      <p className="text-[#f5e6c8] font-semibold text-sm">Sun: 11AM–6PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-[#f5e6c8] font-bold text-sm uppercase tracking-widest mb-4">Follow the Truck</h3>
                <div className="space-y-3">
                  {[
                    { href: BRAND.instagram, Icon: InstagramIcon, label: "@catrachosantojitos", platform: "Instagram" },
                    { href: BRAND.tiktok, Icon: TikTokIcon, label: "@catrachosantojitos", platform: "TikTok" },
                    { href: BRAND.facebook, Icon: FacebookIcon, label: "Catrachos Antojitos", platform: "Facebook" },
                  ].map((s) => (
                    <a key={s.platform} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 group p-3 rounded-xl hover:bg-[#0f0805] transition-colors">
                      <div className="w-9 h-9 rounded-lg bg-[#7c1d27]/20 flex items-center justify-center group-hover:bg-[#7c1d27]/40 transition-colors">
                        <s.Icon />
                      </div>
                      <div>
                        <p className="text-[#f5e6c8]/40 text-xs">{s.platform}</p>
                        <p className="text-[#f5e6c8] text-sm font-semibold group-hover:text-[#e8a020] transition-colors">{s.label}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#7c1d27]/20 to-[#0f0805] border border-[#7c1d27]/20">
                <p className="text-[#f5e6c8] font-bold text-sm mb-2">Looking for catering?</p>
                <p className="text-[#f5e6c8]/55 text-xs mb-3">Use our dedicated catering form for a faster response.</p>
                <Link href="/catering" className="text-[#e8a020] text-sm font-bold hover:underline">
                  Go to Catering Page →
                </Link>
              </div>
            </motion.div>

            {/* Map placeholder + quick message */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h2 className="text-2xl font-bold text-[#f5e6c8] mb-6">Send a Message</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#f5e6c8]/60 text-xs font-bold uppercase tracking-wide mb-2">Name</label>
                    <input type="text" placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-[#0f0805] border border-[#7c1d27]/30 text-[#f5e6c8] placeholder-[#f5e6c8]/25 text-sm focus:outline-none focus:border-[#e8a020]/50 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[#f5e6c8]/60 text-xs font-bold uppercase tracking-wide mb-2">Email</label>
                    <input type="email" placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#0f0805] border border-[#7c1d27]/30 text-[#f5e6c8] placeholder-[#f5e6c8]/25 text-sm focus:outline-none focus:border-[#e8a020]/50 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-[#f5e6c8]/60 text-xs font-bold uppercase tracking-wide mb-2">Subject</label>
                  <input type="text" placeholder="What's this about?"
                    className="w-full px-4 py-3 rounded-xl bg-[#0f0805] border border-[#7c1d27]/30 text-[#f5e6c8] placeholder-[#f5e6c8]/25 text-sm focus:outline-none focus:border-[#e8a020]/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-[#f5e6c8]/60 text-xs font-bold uppercase tracking-wide mb-2">Message</label>
                  <textarea rows={5} placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-xl bg-[#0f0805] border border-[#7c1d27]/30 text-[#f5e6c8] placeholder-[#f5e6c8]/25 text-sm focus:outline-none focus:border-[#e8a020]/50 transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#7c1d27] to-[#9e1f1f] text-white font-bold hover:from-[#9e1f1f] hover:to-[#c62c2c] transition-all hover:scale-[1.01] glow-burgundy">
                  Send Message
                </button>
              </form>

              {/* Map placeholder */}
              <div className="mt-6 rounded-2xl overflow-hidden h-52 bg-[#0f0805] border border-[#7c1d27]/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-[#7c1d27]/40 mx-auto mb-2" />
                  <p className="text-[#f5e6c8]/30 text-sm">Las Vegas, NV & Surrounding Areas</p>
                  <a href="https://maps.google.com/?q=Las+Vegas+NV" target="_blank" rel="noopener noreferrer"
                    className="text-[#e8a020] text-xs mt-2 block hover:underline">Open in Google Maps</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
