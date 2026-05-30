"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Flame } from "lucide-react";
import { BRAND } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/locations", label: "Locations" },
  { href: "/catering", label: "Catering" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1a0e08]/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-[#7c1d27]/30"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#e8a020] to-[#7c1d27] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <Flame className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight">
            <span className="block text-[#f5e6c8] font-bold text-sm tracking-wide">CATRACHOS</span>
            <span className="block text-[#e8a020] text-[10px] tracking-[0.2em] uppercase font-medium">Antojitos</span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === l.href
                    ? "text-[#e8a020] bg-[#e8a020]/10"
                    : "text-[#f5e6c8]/80 hover:text-[#e8a020] hover:bg-white/5"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href={BRAND.uberEats}
            target="_blank"
            className="text-sm font-medium text-[#f5e6c8]/70 hover:text-[#e8a020] transition-colors"
          >
            Uber Eats
          </Link>
          <Link
            href="/catering"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#7c1d27] to-[#9e1f1f] text-white text-sm font-bold hover:from-[#9e1f1f] hover:to-[#c62c2c] transition-all glow-burgundy"
          >
            Book Catering
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#f5e6c8] p-2 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1a0e08]/98 backdrop-blur-md border-t border-[#7c1d27]/30"
          >
            <ul className="px-4 py-4 space-y-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      pathname === l.href
                        ? "text-[#e8a020] bg-[#e8a020]/10"
                        : "text-[#f5e6c8]/80 hover:text-[#e8a020] hover:bg-white/5"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/catering"
                  className="block px-4 py-3 rounded-lg bg-gradient-to-r from-[#7c1d27] to-[#9e1f1f] text-white text-sm font-bold text-center"
                >
                  Book Catering
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
