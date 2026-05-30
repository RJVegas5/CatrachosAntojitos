import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { InstagramIcon, TikTokIcon, FacebookIcon } from "./SocialIcons";
import { BRAND } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#0E0804] border-t border-[#F4E4C1]/5 pb-20 md:pb-0">

      {/* Top CTA strip */}
      <div className="bg-[#8B1A1A] py-10 texture-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            <p className="font-display text-[#F4E4C1] text-3xl md:text-4xl leading-none">HUNGRY? FIND THE TRUCK.</p>
            <p className="text-[#F4E4C1]/55 text-sm mt-1">Open 7 days a week across Las Vegas</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/locations"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F4E4C1] text-[#1C1008] font-bold text-sm hover:bg-[#F0A830] transition-colors">
              Find the Truck <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/catering"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#F4E4C1]/30 text-[#F4E4C1] font-bold text-sm hover:border-[#F4E4C1]/60 transition-colors">
              Book Catering
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#8B1A1A] flex items-center justify-center">
                <span className="font-display text-[#F0A830] text-lg">CA</span>
              </div>
              <div>
                <span className="block font-display text-[#F4E4C1] text-base tracking-wide">CATRACHOS</span>
                <span className="block text-[#D4891A] text-[9px] tracking-[0.3em] uppercase">Antojitos · Las Vegas</span>
              </div>
            </div>
            <p className="text-[#F4E4C1]/40 text-xs leading-relaxed mb-5 max-w-[220px]">
              Authentic Honduran street food bringing the flavors of home to Las Vegas since day one.
            </p>
            <div className="flex gap-2.5">
              {[
                { href: BRAND.instagram, Icon: InstagramIcon },
                { href: BRAND.tiktok,   Icon: TikTokIcon },
                { href: BRAND.facebook, Icon: FacebookIcon },
              ].map(({ href, Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#1C1008] border border-[#F4E4C1]/8 flex items-center justify-center text-[#F4E4C1]/50 hover:text-[#D4891A] hover:border-[#D4891A]/30 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-[#F4E4C1]/40 font-bold text-[10px] tracking-[0.3em] uppercase mb-4">Explore</h3>
            <ul className="space-y-2.5">
              {[
                ["/menu",      "Full Menu"],
                ["/locations", "Find the Truck"],
                ["/catering",  "Catering"],
                ["/about",     "Our Story"],
                ["/contact",   "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-[#F4E4C1]/55 hover:text-[#D4891A] text-sm transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Order */}
          <div>
            <h3 className="text-[#F4E4C1]/40 font-bold text-[10px] tracking-[0.3em] uppercase mb-4">Order Online</h3>
            <ul className="space-y-3">
              <li>
                <a href={BRAND.uberEats} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#F4E4C1]/55 hover:text-[#D4891A] text-sm transition-colors">
                  <span className="w-2 h-2 rounded-full bg-[#06C167] shrink-0" />Order on Uber Eats
                </a>
              </li>
              <li>
                <a href={BRAND.doorDash} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#F4E4C1]/55 hover:text-[#D4891A] text-sm transition-colors">
                  <span className="w-2 h-2 rounded-full bg-[#FF3008] shrink-0" />Order on DoorDash
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#F4E4C1]/40 font-bold text-[10px] tracking-[0.3em] uppercase mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2 text-[#F4E4C1]/55 hover:text-[#D4891A] text-sm transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#D4891A]" />{BRAND.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 text-[#F4E4C1]/55 hover:text-[#D4891A] text-sm transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#D4891A]" />{BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-[#F4E4C1]/55 text-sm">
                <MapPin className="w-3.5 h-3.5 text-[#D4891A] mt-0.5 shrink-0" />Las Vegas, NV & Surrounding Areas
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#F4E4C1]/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#F4E4C1]/20 text-xs">© {new Date().getFullYear()} Catrachos Antojitos. All rights reserved.</p>
          <p className="text-[#F4E4C1]/15 text-xs">Honduran Street Food · Las Vegas, NV</p>
        </div>
      </div>
    </footer>
  );
}
