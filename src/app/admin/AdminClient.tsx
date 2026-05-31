"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users, Settings, Lock, Eye, EyeOff, Bell,
  LogOut, Flame, CalendarDays, Download, RefreshCw,
} from "lucide-react";

const ADMIN_PASSWORD = "catrachos2024";

const NAV_ITEMS = [
  { id: "leads",    icon: Bell,         label: "Launch Leads"      },
  { id: "catering", icon: CalendarDays, label: "Catering Inquiries" },
  { id: "settings", icon: Settings,     label: "Settings"          },
];

type Lead = {
  id: string;
  created_at: string;
  first_name: string;
  email: string;
  phone: string;
  interested_in_catering: boolean;
  source: string;
  status: string;
};

const MOCK_LEADS: Lead[] = [
  { id:"1", created_at:"2026-05-30T14:22:00Z", first_name:"Maria",   email:"maria@gmail.com",    phone:"(702)555-0111", interested_in_catering:true,  source:"homepage-section", status:"new" },
  { id:"2", created_at:"2026-05-30T13:10:00Z", first_name:"Carlos",  email:"carlos@email.com",   phone:"(702)555-0122", interested_in_catering:false, source:"floating-cta",     status:"new" },
  { id:"3", created_at:"2026-05-30T11:45:00Z", first_name:"Jasmine", email:"jasmine@icloud.com", phone:"(702)555-0133", interested_in_catering:true,  source:"locations-page",   status:"contacted" },
  { id:"4", created_at:"2026-05-29T22:10:00Z", first_name:"Roberto", email:"rob@gmail.com",      phone:"(702)555-0144", interested_in_catering:false, source:"homepage-section", status:"new" },
  { id:"5", created_at:"2026-05-29T19:33:00Z", first_name:"Ana",     email:"ana@yahoo.com",      phone:"(702)555-0155", interested_in_catering:true,  source:"floating-cta",     status:"new" },
];

const MOCK_CATERING = [
  { id:"1", name:"Sarah Johnson",  email:"sarah@corp.com",     phone:"(702)555-0211", event_date:"2026-09-20", event_location:"MGM Grand",      guest_count:"200–350", catering_type:"Corporate Event",         message:"Annual company party", status:"new"       },
  { id:"2", name:"Carlos Mendez",  email:"carlos@gmail.com",   phone:"(702)555-0222", event_date:"2026-10-15", event_location:"Summerlin Home", guest_count:"50–100",  catering_type:"Birthday Party / Quinceañera", message:"Daughter's 15th birthday", status:"contacted" },
  { id:"3", name:"Pastor Rivera",  email:"pastor@church.org",  phone:"(702)555-0233", event_date:"2026-11-08", event_location:"Church of LV",   guest_count:"100–200", catering_type:"Church Event",            message:"Annual church picnic", status:"booked"    },
];

export default function AdminClient() {
  const [authed,  setAuthed]  = useState(false);
  const [pw,      setPw]      = useState("");
  const [showPw,  setShowPw]  = useState(false);
  const [authErr, setAuthErr] = useState(false);
  const [section, setSection] = useState("leads");
  const [leads,   setLeads]   = useState<Lead[]>(MOCK_LEADS);
  const [loading, setLoading] = useState(false);
  const [filter,  setFilter]  = useState<"all"|"catering">("all");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) { setAuthed(true); setAuthErr(false); }
    else setAuthErr(true);
  };

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/waitlist");
      const json = await res.json();
      if (json.configured && json.leads.length > 0) setLeads(json.leads);
    } catch { /* use mock */ }
    finally { setLoading(false); }
  };

  useEffect(() => { if (authed && section === "leads") fetchLeads(); }, [authed, section]);

  const displayed = filter === "catering" ? leads.filter((l) => l.interested_in_catering) : leads;

  const exportCSV = () => {
    const rows = [
      ["Name","Email","Phone","Catering?","Source","Date","Status"],
      ...displayed.map((l) => [
        l.first_name, l.email, l.phone,
        l.interested_in_catering ? "Yes" : "No",
        l.source, l.created_at.split("T")[0], l.status,
      ]),
    ];
    const csv = rows.map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a"); a.href = url; a.download = "launch-leads.csv"; a.click();
  };

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f0805] px-4">
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4891A] to-[#8B1A1A] flex items-center justify-center mx-auto mb-4">
              <Flame className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-[#F4E4C1]">Admin Dashboard</h1>
            <p className="text-[#F4E4C1]/40 text-sm mt-1">Catrachos Antojitos</p>
          </div>
          <form onSubmit={handleLogin} className="bg-[#1C1008] rounded-2xl p-6 border border-[#8B1A1A]/20">
            <label className="block text-[#F4E4C1]/55 text-xs font-bold uppercase tracking-widest mb-2">Password</label>
            <div className="relative mb-4">
              <input type={showPw ? "text" : "password"} value={pw} onChange={(e) => setPw(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 pr-11 rounded-xl bg-[#0f0805] border border-[#8B1A1A]/25
                  text-[#F4E4C1] text-sm focus:outline-none focus:border-[#D4891A]/50" />
              <button type="button" onClick={() => setShowPw(!showPw)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#F4E4C1]/35 hover:text-[#F4E4C1]/60">
                {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {authErr && <p className="text-red-400 text-xs mb-3">Incorrect password.</p>}
            <button type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#8B1A1A] to-[#B52020]
                text-white font-bold flex items-center justify-center gap-2 hover:from-[#B52020] hover:to-[#D42020] transition-all">
              <Lock className="w-4 h-4" />Sign In
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0805] flex">
      {/* Sidebar */}
      <aside className="w-60 bg-[#1C1008] border-r border-[#F4E4C1]/5 flex flex-col p-5 shrink-0">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D4891A] to-[#8B1A1A] flex items-center justify-center">
            <Flame className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-[#F4E4C1] font-bold text-sm">CATRACHOS</p>
            <p className="text-[#D4891A] text-[9px] tracking-widest uppercase">Admin</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          {NAV_ITEMS.map((item) => (
            <button key={item.id} onClick={() => setSection(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                section === item.id
                  ? "bg-[#8B1A1A]/30 text-[#D4891A] font-semibold"
                  : "text-[#F4E4C1]/50 hover:text-[#F4E4C1] hover:bg-white/5"}`}>
              <item.icon className="w-4 h-4 shrink-0" />
              {item.label}
              {item.id === "leads" && (
                <span className="ml-auto bg-[#D4891A] text-[#1C1008] text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                  {leads.filter((l) => l.status === "new").length}
                </span>
              )}
            </button>
          ))}
        </nav>
        <button onClick={() => setAuthed(false)}
          className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-[#F4E4C1]/35 hover:text-red-400 text-sm transition-colors">
          <LogOut className="w-4 h-4" />Sign Out
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-5xl">

          {/* ── LAUNCH LEADS ── */}
          {section === "leads" && (
            <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-[#F4E4C1]">Launch Leads</h1>
                  <p className="text-[#F4E4C1]/35 text-sm mt-0.5">{leads.length} people on the VIP waitlist</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={fetchLeads}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#2A1A0E] border border-[#F4E4C1]/8
                      text-[#F4E4C1]/60 text-xs font-bold hover:text-[#F4E4C1] transition-colors">
                    <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />Refresh
                  </button>
                  <button onClick={exportCSV}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#D4891A] text-[#1C1008] text-xs font-bold hover:bg-[#F0A830] transition-colors">
                    <Download className="w-3.5 h-3.5" />Export CSV
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label:"Total Leads",     value: leads.length },
                  { label:"Catering Interest", value: leads.filter((l) => l.interested_in_catering).length },
                  { label:"New (Unread)",    value: leads.filter((l) => l.status === "new").length },
                ].map((s) => (
                  <div key={s.label} className="bg-[#1C1008] rounded-2xl border border-[#F4E4C1]/6 p-4 text-center">
                    <p className="font-display text-[#D4891A] text-3xl">{s.value}</p>
                    <p className="text-[#F4E4C1]/40 text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Filter */}
              <div className="flex gap-2 mb-4">
                {(["all","catering"] as const).map((f) => (
                  <button key={f} onClick={() => setFilter(f)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                      filter===f ? "bg-[#8B1A1A] text-[#F4E4C1]" : "bg-[#2A1A0E] text-[#F4E4C1]/50 hover:text-[#F4E4C1]"}`}>
                    {f === "all" ? "All Leads" : "Catering Interest"}
                  </button>
                ))}
              </div>

              {/* Table */}
              <div className="bg-[#1C1008] rounded-2xl border border-[#F4E4C1]/6 overflow-hidden">
                <div className="grid grid-cols-6 gap-3 px-4 py-2.5 bg-[#0f0805] text-[#F4E4C1]/30 text-[10px] font-bold uppercase tracking-widest">
                  <span>Name</span><span className="col-span-2">Email</span><span>Phone</span><span>Catering?</span><span>Date</span>
                </div>
                {displayed.map((lead) => (
                  <div key={lead.id}
                    className="grid grid-cols-6 gap-3 px-4 py-3 border-t border-[#F4E4C1]/5 items-center hover:bg-[#2A1A0E]/50 transition-colors">
                    <div className="flex items-center gap-2">
                      {lead.status === "new" && <span className="w-1.5 h-1.5 rounded-full bg-[#D4891A] shrink-0" />}
                      <span className="text-[#F4E4C1] font-semibold text-sm">{lead.first_name}</span>
                    </div>
                    <span className="col-span-2 text-[#F4E4C1]/55 text-xs truncate">{lead.email}</span>
                    <span className="text-[#F4E4C1]/55 text-xs">{lead.phone}</span>
                    <span className={`text-xs font-bold ${lead.interested_in_catering ? "text-[#4ADE80]" : "text-[#F4E4C1]/25"}`}>
                      {lead.interested_in_catering ? "✓ Yes" : "—"}
                    </span>
                    <span className="text-[#F4E4C1]/30 text-xs">{lead.created_at?.split("T")[0]}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 rounded-xl bg-[#1C1008] border border-[#D4891A]/10">
                <p className="text-[#D4891A] text-xs font-semibold mb-1">Connect Supabase to see real data</p>
                <p className="text-[#F4E4C1]/35 text-xs">Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your Vercel environment variables, then run the SQL migration to activate live tracking.</p>
              </div>
            </motion.div>
          )}

          {/* ── CATERING INQUIRIES ── */}
          {section === "catering" && (
            <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}>
              <h1 className="text-2xl font-bold text-[#F4E4C1] mb-6">Catering Inquiries</h1>
              <div className="space-y-4">
                {MOCK_CATERING.map((inq) => (
                  <div key={inq.id} className="bg-[#1C1008] rounded-2xl border border-[#F4E4C1]/6 p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-[#F4E4C1] font-bold">{inq.name}</h3>
                        <p className="text-[#F4E4C1]/45 text-sm">{inq.email} · {inq.phone}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                        inq.status==="new"       ? "bg-[#D4891A]/20 text-[#D4891A]" :
                        inq.status==="contacted" ? "bg-blue-500/20 text-blue-400" :
                                                   "bg-green-500/20 text-green-400"}`}>
                        {inq.status}
                      </span>
                    </div>
                    <div className="grid sm:grid-cols-4 gap-2 text-xs text-[#F4E4C1]/40">
                      <span><strong className="text-[#D4891A]">Date:</strong> {inq.event_date}</span>
                      <span><strong className="text-[#D4891A]">Guests:</strong> {inq.guest_count}</span>
                      <span><strong className="text-[#D4891A]">Type:</strong> {inq.catering_type}</span>
                      <span><strong className="text-[#D4891A]">Venue:</strong> {inq.event_location}</span>
                    </div>
                    {inq.message && <p className="text-[#F4E4C1]/35 text-xs mt-2 italic">"{inq.message}"</p>}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── SETTINGS ── */}
          {section === "settings" && (
            <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}>
              <h1 className="text-2xl font-bold text-[#F4E4C1] mb-6">Settings</h1>
              <div className="bg-[#1C1008] rounded-2xl border border-[#F4E4C1]/6 p-6 space-y-4">
                {[
                  { label:"Business Phone", value:"(725) 555-0190" },
                  { label:"Business Email", value:"info@catrachosantojitos.com" },
                  { label:"Instagram Handle", value:"@catrachosantojitos" },
                  { label:"Launch Date Target", value:"September 5, 2026" },
                ].map((s) => (
                  <div key={s.label}>
                    <label className="block text-[#F4E4C1]/45 text-xs uppercase tracking-widest mb-1.5">{s.label}</label>
                    <input defaultValue={s.value}
                      className="w-full px-4 py-3 rounded-xl bg-[#0f0805] border border-[#8B1A1A]/20
                        text-[#F4E4C1] text-sm focus:outline-none focus:border-[#D4891A]/50" />
                  </div>
                ))}
                <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#8B1A1A] to-[#B52020] text-white font-bold text-sm hover:opacity-90 transition-opacity">
                  Save Settings
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
