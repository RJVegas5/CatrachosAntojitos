"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LAUNCH_DATE } from "@/lib/data";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function getTimeLeft(): TimeLeft {
  const diff = Math.max(0, LAUNCH_DATE.getTime() - Date.now());
  return {
    days:    Math.floor(diff / 86_400_000),
    hours:   Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000)  / 60_000),
    seconds: Math.floor((diff % 60_000)     / 1_000),
  };
}

function Pad({ n }: { n: number }) {
  return String(n).padStart(2, "0");
}

export default function LaunchCountdown({ dark = false }: { dark?: boolean }) {
  const [t, setT] = useState<TimeLeft>(getTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setT(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days",    value: t.days    },
    { label: "Hours",   value: t.hours   },
    { label: "Minutes", value: t.minutes },
    { label: "Seconds", value: t.seconds },
  ];

  const numClass = dark
    ? "text-[#1C1008]"
    : "text-[#F4E4C1]";
  const labelClass = dark
    ? "text-[#1C1008]/50"
    : "text-[#F4E4C1]/45";
  const boxClass = dark
    ? "bg-[#1C1008]/10 border-[#1C1008]/15"
    : "bg-[#1C1008]/50 border-[#F4E4C1]/8";

  return (
    <div className="flex items-center gap-3 sm:gap-5">
      {units.map((u, i) => (
        <div key={u.label} className="flex items-center gap-3 sm:gap-5">
          <div className={`flex flex-col items-center px-4 py-3 rounded-2xl border backdrop-blur-sm ${boxClass}`}>
            <motion.span
              key={mounted ? u.value : "loading"}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`font-display leading-none ${numClass}`}
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              {mounted ? <Pad n={u.value} /> : "--"}
            </motion.span>
            <span className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${labelClass}`}>
              {u.label}
            </span>
          </div>
          {i < 3 && (
            <span className={`font-display text-2xl leading-none mb-4 ${dark ? "text-[#8B1A1A]" : "text-[#D4891A]"}`}>
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
