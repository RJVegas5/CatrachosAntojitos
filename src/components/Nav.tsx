"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BRAND } from "@/lib/data";

const links = [
  { href: "/menu",      label: "Menu" },
  { href: "/locations", label: "Find The Truck", highlight: true },
  { href: "/catering",  label: "Catering" },
  { href: "/about",     label: "Our Story" },
  { href: "/contact",   label: "Contact" },
];

export default function Nav() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-[#1C1008]/96 backdrop-blur-lg border-b border-[#F4E4C1]/5 shadow-xl shadow-black/40"
        : "bg-transparent"
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <Link href="/" className="shrink-0 group">
          <div
            className="relative h-11 w-32 bg-white rounded-xl px-1 py-0.5
              group-hover:scale-105 transition-transform"
            style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
          >
            <Image
              src="/catrachos-logo.png"
              alt="Catrachos Antojitos — Honduran Street Food Las Vegas"
              fill
              className="object-contain p-0.5"
              sizes="128px"
              priority
            />
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-0.5">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors rounded-lg ${
                pathname === l.href
                  ? "text-[#F0A830]"
                  : l.highlight
                  ? "text-[#D4891A] hover:text-[#F0A830]"
                  : "text-[#F4E4C1]/70 hover:text-[#F4E4C1]"
              }`}>
                {l.label}
                {pathname === l.href && (
                  <motion.span layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-[#8B1A1A]/25 -z-10" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a href="/#vip-waitlist"
            className="px-4 py-2 text-sm font-bold text-[#D4891A] hover:text-[#F0A830] transition-colors">
            🔔 Get Notified
          </a>
          <Link href="/catering"
            className="px-5 py-2.5 rounded-lg bg-[#8B1A1A] text-[#F4E4C1] text-sm font-bold
              hover:bg-[#B52020] transition-colors border border-[#F0A830]/15">
            Book Catering
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-[#F4E4C1] p-2" aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity:0, y:-8 }} animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:-8 }} transition={{ duration:0.2 }}
            className="md:hidden bg-[#1C1008]/98 backdrop-blur-xl border-t border-[#F4E4C1]/5">
            <div className="px-4 py-5 space-y-1">
              {links.map((l) => (
                <Link key={l.href} href={l.href}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    pathname === l.href
                      ? "text-[#F0A830] bg-[#8B1A1A]/20"
                      : l.highlight
                      ? "text-[#D4891A]"
                      : "text-[#F4E4C1]/70 hover:text-[#F4E4C1]"
                  }`}>
                  {l.label}
                </Link>
              ))}
              <div className="pt-3 flex gap-2">
                <a href="/#vip-waitlist"
                  className="flex-1 py-3 rounded-xl bg-[#D4891A] text-[#1C1008] text-sm font-bold text-center">
                  🔔 Get Notified
                </a>
                <Link href="/catering"
                  className="flex-1 py-3 rounded-xl bg-[#8B1A1A] text-[#F4E4C1] text-sm font-bold text-center">
                  Book Catering
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
