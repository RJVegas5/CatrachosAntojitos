"use client";
import { motion } from "framer-motion";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({ eyebrow, title, subtitle, centered = false, light = false }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      {eyebrow && (
        <span className="inline-block text-[#e8a020] text-xs font-bold tracking-[0.25em] uppercase mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight ${light ? "text-[#1a0e08]" : "text-[#f5e6c8]"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl leading-relaxed ${centered ? "mx-auto" : ""} ${light ? "text-[#2c1810]/70" : "text-[#f5e6c8]/60"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
