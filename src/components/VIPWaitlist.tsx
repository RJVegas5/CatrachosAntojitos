"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Star, Users } from "lucide-react";

const schema = z.object({
  first_name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Phone required"),
  interested_in_catering: z.boolean().optional(),
});
type Form = z.infer<typeof schema>;

interface Props {
  dark?: boolean;
  source?: string;
  compact?: boolean;
}

export default function VIPWaitlist({ dark = false, source = "homepage", compact = false }: Props) {
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<Form>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: Form) => {
    setBusy(true);
    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });
      setDone(true);
    } catch {
      setDone(true); // still show success to user
    } finally {
      setBusy(false);
    }
  };

  const bg     = dark ? "bg-[#F4E4C1]"           : "bg-[#1C1008]/80 backdrop-blur-xl";
  const border = dark ? "border-[#1C1008]/15"     : "border-[#D4891A]/20";
  const input  = dark
    ? "bg-white border-[#1C1008]/15 text-[#1C1008] placeholder-[#1C1008]/30 focus:border-[#8B1A1A]/50"
    : "bg-[#2A1A0E] border-[#F4E4C1]/10 text-[#F4E4C1] placeholder-[#F4E4C1]/20 focus:border-[#D4891A]/50";
  const label  = dark ? "text-[#1C1008]/55" : "text-[#F4E4C1]/55";
  const head   = dark ? "text-[#1C1008]"    : "text-[#F4E4C1]";
  const sub    = dark ? "text-[#1C1008]/55" : "text-[#F4E4C1]/45";
  const check  = dark ? "border-[#1C1008]/25 text-[#1C1008]/60" : "border-[#F4E4C1]/15 text-[#F4E4C1]/50";

  return (
    <AnimatePresence mode="wait">
      {done ? (
        <motion.div key="success"
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          className={`rounded-3xl border ${bg} ${border} p-8 text-center`}>
          <motion.div
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.1 }}>
            <CheckCircle2 className="w-14 h-14 text-[#D4891A] mx-auto mb-4" />
          </motion.div>
          <h3 className={`font-display text-3xl mb-2 ${head}`}>YOU'RE ON THE LIST!</h3>
          <p className={`text-sm leading-relaxed ${sub}`}>
            We'll notify you the moment we open. Get ready — Las Vegas is about to taste something special. 🇭🇳
          </p>
        </motion.div>
      ) : (
        <motion.div key="form"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className={`rounded-3xl border ${bg} ${border} ${compact ? "p-6" : "p-8"}`}>

          {!compact && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-4 h-4 text-[#D4891A]" />
                <span className={`text-xs font-bold uppercase tracking-widest ${sub}`}>VIP Early Access</span>
              </div>
              <h3 className={`font-display text-3xl md:text-4xl leading-none mb-2 ${head}`}>
                JOIN THE VIP LIST
              </h3>
              <p className={`text-sm leading-relaxed ${sub}`}>
                Be first to know when we open. VIP members get exclusive launch-day perks.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <Users className="w-3.5 h-3.5 text-[#D4891A]" />
                <span className={`text-xs ${sub}`}>Hundreds of Hondurans in Las Vegas already signed up</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div className={compact ? "grid sm:grid-cols-3 gap-3" : "grid sm:grid-cols-2 gap-3"}>
              <div className={compact ? "" : ""}>
                {!compact && <label className={`block text-xs font-bold uppercase tracking-widest mb-1.5 ${label}`}>First Name *</label>}
                <input {...register("first_name")} placeholder="First Name"
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${input}`} />
                {errors.first_name && <p className="text-red-400 text-xs mt-1">{errors.first_name.message}</p>}
              </div>
              <div>
                {!compact && <label className={`block text-xs font-bold uppercase tracking-widest mb-1.5 ${label}`}>Email *</label>}
                <input {...register("email")} type="email" placeholder="Email Address"
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${input}`} />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
              </div>
              <div className={compact ? "" : "sm:col-span-2"}>
                {!compact && <label className={`block text-xs font-bold uppercase tracking-widest mb-1.5 ${label}`}>Phone *</label>}
                <input {...register("phone")} type="tel" placeholder="Phone Number"
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-colors ${input}`} />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
              </div>
            </div>

            <label className={`flex items-center gap-3 cursor-pointer py-1 ${check}`}>
              <input {...register("interested_in_catering")} type="checkbox"
                className="w-4 h-4 rounded accent-[#D4891A]" />
              <span className="text-xs font-medium">I'm also interested in catering for an event</span>
            </label>

            <button type="submit" disabled={busy}
              className="w-full py-4 rounded-xl bg-[#D4891A] hover:bg-[#F0A830] text-[#1C1008]
                font-bold text-sm tracking-widest uppercase transition-colors
                disabled:opacity-60 disabled:cursor-not-allowed glow-gold-anim">
              {busy ? "Sending..." : "🔔 Notify Me at Launch →"}
            </button>
            <p className={`text-center text-[10px] ${sub}`}>No spam. Launch notification only.</p>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
