"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, X } from "lucide-react";
import VIPWaitlist from "./VIPWaitlist";

export default function FloatingCTA() {
  const [visible, setVisible]   = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const h = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      {/* Floating pill button */}
      <AnimatePresence>
        {visible && !expanded && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => setExpanded(true)}
            className="fixed bottom-24 md:bottom-8 right-4 z-40 flex items-center gap-2
              px-5 py-3 rounded-full bg-[#D4891A] text-[#1C1008] font-bold text-sm
              shadow-2xl shadow-[#D4891A]/30 hover:bg-[#F0A830] transition-colors glow-gold-anim"
          >
            <Bell className="w-4 h-4" />
            Get Notified
          </motion.button>
        )}
      </AnimatePresence>

      {/* Expanded panel */}
      <AnimatePresence>
        {expanded && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setExpanded(false)} />
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="fixed bottom-0 left-0 right-0 sm:bottom-8 sm:right-6 sm:left-auto
                z-50 w-full sm:w-[420px]"
            >
              <div className="relative">
                <button onClick={() => setExpanded(false)}
                  className="absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full bg-[#2A1A0E]
                    border border-[#F4E4C1]/10 flex items-center justify-center
                    text-[#F4E4C1]/60 hover:text-[#F4E4C1] transition-colors">
                  <X className="w-4 h-4" />
                </button>
                <VIPWaitlist source="floating-cta" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
