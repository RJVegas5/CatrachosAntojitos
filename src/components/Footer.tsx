import Link from "next/link";
import { Flame, MapPin, Phone, Mail } from "lucide-react";
import { InstagramIcon, TikTokIcon, FacebookIcon } from "./SocialIcons";
import { BRAND } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#0f0805] border-t border-[#7c1d27]/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e8a020] to-[#7c1d27] flex items-center justify-center">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="block text-[#f5e6c8] font-bold text-base tracking-wide">CATRACHOS</span>
                <span className="block text-[#e8a020] text-[11px] tracking-[0.2em] uppercase">Antojitos</span>
              </div>
            </div>
            <p className="text-[#f5e6c8]/50 text-sm leading-relaxed mb-5">
              Authentic Honduran street food bringing the flavors of Honduras to Las Vegas. Made with heart, served with pride.
            </p>
            <div className="flex gap-3">
              <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#7c1d27]/30 flex items-center justify-center text-[#f5e6c8]/60 hover:text-[#e8a020] hover:bg-[#7c1d27]/60 transition-all">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href={BRAND.tiktok} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#7c1d27]/30 flex items-center justify-center text-[#f5e6c8]/60 hover:text-[#e8a020] hover:bg-[#7c1d27]/60 transition-all">
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a href={BRAND.facebook} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#7c1d27]/30 flex items-center justify-center text-[#f5e6c8]/60 hover:text-[#e8a020] hover:bg-[#7c1d27]/60 transition-all">
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#e8a020] font-bold text-sm uppercase tracking-widest mb-4">Explore</h3>
            <ul className="space-y-2">
              {[
                { href: "/menu", label: "Full Menu" },
                { href: "/locations", label: "Find the Truck" },
                { href: "/catering", label: "Catering Services" },
                { href: "/about", label: "Our Story" },
                { href: "/contact", label: "Contact Us" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#f5e6c8]/60 hover:text-[#e8a020] text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Order */}
          <div>
            <h3 className="text-[#e8a020] font-bold text-sm uppercase tracking-widest mb-4">Order Online</h3>
            <ul className="space-y-3">
              <li>
                <a href={BRAND.uberEats} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#f5e6c8]/60 hover:text-[#e8a020] text-sm transition-colors">
                  <span className="w-2 h-2 rounded-full bg-[#06C167] inline-block"></span>
                  Order on Uber Eats
                </a>
              </li>
              <li>
                <a href={BRAND.doorDash} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#f5e6c8]/60 hover:text-[#e8a020] text-sm transition-colors">
                  <span className="w-2 h-2 rounded-full bg-[#FF3008] inline-block"></span>
                  Order on DoorDash
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="text-[#e8a020] font-bold text-sm uppercase tracking-widest mb-3">Menu Highlights</h3>
              <ul className="space-y-1 text-[#f5e6c8]/50 text-sm">
                <li>🫓 Baleadas</li>
                <li>🥙 Pastelitos</li>
                <li>🍌 Tajadas</li>
                <li>🍽️ Plato Típico</li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#e8a020] font-bold text-sm uppercase tracking-widest mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[#f5e6c8]/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-[#e8a020] shrink-0" />
                <span>Las Vegas, NV & Surrounding Areas</span>
              </li>
              <li className="flex items-center gap-2 text-[#f5e6c8]/60 text-sm">
                <Phone className="w-4 h-4 text-[#e8a020] shrink-0" />
                <a href={`tel:${BRAND.phone}`} className="hover:text-[#e8a020] transition-colors">{BRAND.phone}</a>
              </li>
              <li className="flex items-center gap-2 text-[#f5e6c8]/60 text-sm">
                <Mail className="w-4 h-4 text-[#e8a020] shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-[#e8a020] transition-colors">{BRAND.email}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#7c1d27]/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#f5e6c8]/30 text-xs">
            © {new Date().getFullYear()} Catrachos Antojitos. All rights reserved.
          </p>
          <p className="text-[#f5e6c8]/20 text-xs">
            Authentic Honduran Street Food · Las Vegas, NV
          </p>
        </div>
      </div>
    </footer>
  );
}
