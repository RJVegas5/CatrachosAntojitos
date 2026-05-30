"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin, Clock, Menu, CalendarDays, Users, Settings, Lock,
  Eye, EyeOff, LayoutDashboard, Bell, LogOut, Flame,
} from "lucide-react";

const ADMIN_PASSWORD = "catrachos2024";

const NAV_ITEMS = [
  { id: "location", icon: MapPin, label: "Today's Location" },
  { id: "schedule", icon: CalendarDays, label: "Weekly Schedule" },
  { id: "menu", icon: Menu, label: "Menu Items" },
  { id: "catering", icon: Users, label: "Catering Inquiries" },
  { id: "settings", icon: Settings, label: "Settings" },
];

type Inquiry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  event_date: string;
  event_location: string;
  guest_count: string;
  catering_type: string;
  message: string;
  status: string;
};

const MOCK_INQUIRIES: Inquiry[] = [
  { id: "1", name: "Sarah Johnson", email: "sarah@company.com", phone: "(702) 555-0111", event_date: "2026-07-04", event_location: "MGM Grand Ballroom", guest_count: "200–350", catering_type: "Corporate Event", message: "Annual summer party", status: "new" },
  { id: "2", name: "Carlos Mendez", email: "carlos@gmail.com", phone: "(702) 555-0122", event_date: "2026-06-15", event_location: "Summerlin Backyard", guest_count: "50–100", catering_type: "Birthday Party", message: "Quinceañera for my daughter", status: "contacted" },
  { id: "3", name: "Pastor Rivera", email: "pastor@iglesia.org", phone: "(702) 555-0133", event_date: "2026-06-28", event_location: "Church of Jesus Christ LV", guest_count: "100–200", catering_type: "Church Event", message: "Annual church picnic", status: "booked" },
];

export default function AdminClient() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [authError, setAuthError] = useState(false);
  const [activeSection, setActiveSection] = useState("location");

  // Location form state
  const [location, setLocation] = useState({
    name: "Summerlin Festival Grounds",
    address: "1980 Festival Plaza Dr, Las Vegas, NV 89135",
    hours: "10:00 AM – 9:00 PM",
  });
  const [locationSaved, setLocationSaved] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) {
      setAuthed(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const handleLocationSave = (e: React.FormEvent) => {
    e.preventDefault();
    setLocationSaved(true);
    setTimeout(() => setLocationSaved(false), 3000);
  };

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f0805] px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#e8a020] to-[#7c1d27] flex items-center justify-center mx-auto mb-4">
              <Flame className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-[#f5e6c8]">Admin Dashboard</h1>
            <p className="text-[#f5e6c8]/50 text-sm mt-1">Catrachos Antojitos</p>
          </div>
          <form onSubmit={handleLogin} className="bg-[#1a0e08] rounded-2xl p-6 border border-[#7c1d27]/20">
            <label className="block text-[#f5e6c8]/60 text-xs font-bold uppercase tracking-wide mb-2">Password</label>
            <div className="relative mb-4">
              <input
                type={showPw ? "text" : "password"}
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 pr-11 rounded-xl bg-[#0f0805] border border-[#7c1d27]/30 text-[#f5e6c8] text-sm focus:outline-none focus:border-[#e8a020]/50 transition-colors"
              />
              <button type="button" onClick={() => setShowPw(!showPw)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#f5e6c8]/40 hover:text-[#f5e6c8]/70">
                {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {authError && <p className="text-red-400 text-xs mb-3">Incorrect password. Try again.</p>}
            <button type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#7c1d27] to-[#9e1f1f] text-white font-bold hover:from-[#9e1f1f] hover:to-[#c62c2c] transition-all flex items-center justify-center gap-2">
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
      <aside className="w-64 bg-[#1a0e08] border-r border-[#7c1d27]/20 flex flex-col p-5 shrink-0">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#e8a020] to-[#7c1d27] flex items-center justify-center">
            <Flame className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-[#f5e6c8] font-bold text-sm">CATRACHOS</p>
            <p className="text-[#e8a020] text-[10px] tracking-widest">ADMIN</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          <div className="text-[#f5e6c8]/30 text-[10px] uppercase tracking-widest mb-3 px-3">Management</div>
          {NAV_ITEMS.map((item) => (
            <button key={item.id} onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                activeSection === item.id
                  ? "bg-[#7c1d27]/30 text-[#e8a020] font-semibold"
                  : "text-[#f5e6c8]/60 hover:text-[#f5e6c8] hover:bg-white/5"
              }`}>
              <item.icon className="w-4 h-4 shrink-0" />
              {item.label}
            </button>
          ))}
        </nav>

        <button onClick={() => setAuthed(false)}
          className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-[#f5e6c8]/40 hover:text-red-400 text-sm transition-colors">
          <LogOut className="w-4 h-4" />Sign Out
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-4xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-[#f5e6c8]">
                {NAV_ITEMS.find((n) => n.id === activeSection)?.label}
              </h1>
              <p className="text-[#f5e6c8]/40 text-sm mt-0.5">Manage your truck's content</p>
            </div>
            <div className="flex items-center gap-2 text-[#f5e6c8]/40 text-sm">
              <Bell className="w-4 h-4" />
              <span>{MOCK_INQUIRIES.filter((i) => i.status === "new").length} new inquiries</span>
            </div>
          </div>

          {/* Sections */}
          {activeSection === "location" && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
              <div className="bg-[#1a0e08] rounded-2xl border border-[#7c1d27]/20 p-6">
                <h2 className="text-[#f5e6c8] font-bold mb-5">Update Today's Location</h2>
                <form onSubmit={handleLocationSave} className="space-y-4">
                  <div>
                    <label className="block text-[#f5e6c8]/60 text-xs uppercase tracking-wide mb-1.5">Location Name</label>
                    <input value={location.name} onChange={(e) => setLocation({ ...location, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0f0805] border border-[#7c1d27]/30 text-[#f5e6c8] text-sm focus:outline-none focus:border-[#e8a020]/50" />
                  </div>
                  <div>
                    <label className="block text-[#f5e6c8]/60 text-xs uppercase tracking-wide mb-1.5">Address</label>
                    <input value={location.address} onChange={(e) => setLocation({ ...location, address: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0f0805] border border-[#7c1d27]/30 text-[#f5e6c8] text-sm focus:outline-none focus:border-[#e8a020]/50" />
                  </div>
                  <div>
                    <label className="block text-[#f5e6c8]/60 text-xs uppercase tracking-wide mb-1.5">Hours</label>
                    <input value={location.hours} onChange={(e) => setLocation({ ...location, hours: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0f0805] border border-[#7c1d27]/30 text-[#f5e6c8] text-sm focus:outline-none focus:border-[#e8a020]/50" />
                  </div>
                  <button type="submit"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#7c1d27] to-[#9e1f1f] text-white font-bold hover:from-[#9e1f1f] hover:to-[#c62c2c] transition-all">
                    {locationSaved ? "✓ Saved!" : "Save Location"}
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {activeSection === "catering" && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
              <div className="space-y-4">
                {MOCK_INQUIRIES.map((inquiry) => (
                  <div key={inquiry.id} className="bg-[#1a0e08] rounded-2xl border border-[#7c1d27]/20 p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-[#f5e6c8] font-bold">{inquiry.name}</h3>
                        <p className="text-[#f5e6c8]/50 text-sm">{inquiry.email} · {inquiry.phone}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                        inquiry.status === "new" ? "bg-[#e8a020]/20 text-[#e8a020]" :
                        inquiry.status === "contacted" ? "bg-blue-500/20 text-blue-400" :
                        inquiry.status === "booked" ? "bg-green-500/20 text-green-400" :
                        "bg-red-500/20 text-red-400"
                      }`}>{inquiry.status}</span>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-3 text-xs text-[#f5e6c8]/50">
                      <span><strong className="text-[#e8a020]">Date:</strong> {inquiry.event_date}</span>
                      <span><strong className="text-[#e8a020]">Guests:</strong> {inquiry.guest_count}</span>
                      <span><strong className="text-[#e8a020]">Type:</strong> {inquiry.catering_type}</span>
                    </div>
                    <p className="text-[#f5e6c8]/50 text-xs mt-2"><strong className="text-[#f5e6c8]/70">Venue:</strong> {inquiry.event_location}</p>
                    {inquiry.message && <p className="text-[#f5e6c8]/40 text-xs mt-1 italic">"{inquiry.message}"</p>}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === "menu" && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
              <div className="bg-[#1a0e08] rounded-2xl border border-[#7c1d27]/20 p-6">
                <p className="text-[#f5e6c8]/60 text-sm">
                  Connect Supabase to enable full menu management. Edit <code className="bg-[#0f0805] px-1.5 py-0.5 rounded text-[#e8a020]">src/lib/data.ts</code> to update menu items directly, or configure Supabase to manage items via this dashboard.
                </p>
                <div className="mt-4 p-4 rounded-xl bg-[#0f0805] border border-[#7c1d27]/15">
                  <p className="text-[#e8a020] text-sm font-semibold mb-2">Setup Instructions</p>
                  <ol className="text-[#f5e6c8]/50 text-xs space-y-1 list-decimal list-inside">
                    <li>Create a Supabase project at supabase.com</li>
                    <li>Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local</li>
                    <li>Run the SQL migrations in /supabase/migrations</li>
                    <li>Menu items will then be editable from this dashboard</li>
                  </ol>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === "schedule" && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
              <div className="bg-[#1a0e08] rounded-2xl border border-[#7c1d27]/20 p-6">
                <p className="text-[#f5e6c8]/60 text-sm mb-4">Weekly schedule management — connect Supabase or update <code className="bg-[#0f0805] px-1.5 py-0.5 rounded text-[#e8a020]">src/lib/data.ts</code>.</p>
                <div className="space-y-2">
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((d) => (
                    <div key={d} className="flex items-center gap-4 p-3 rounded-xl bg-[#0f0805]">
                      <span className="text-[#f5e6c8]/50 text-sm w-24 shrink-0">{d}</span>
                      <input placeholder="Location name..." className="flex-1 px-3 py-1.5 rounded-lg bg-[#1a0e08] border border-[#7c1d27]/20 text-[#f5e6c8] text-xs focus:outline-none focus:border-[#e8a020]/40" />
                      <input placeholder="Hours..." className="w-40 px-3 py-1.5 rounded-lg bg-[#1a0e08] border border-[#7c1d27]/20 text-[#f5e6c8] text-xs focus:outline-none focus:border-[#e8a020]/40" />
                    </div>
                  ))}
                  <button className="mt-2 px-5 py-2.5 rounded-xl bg-[#7c1d27] text-white text-sm font-bold hover:bg-[#9e1f1f] transition-colors">
                    Save Schedule
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === "settings" && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
              <div className="bg-[#1a0e08] rounded-2xl border border-[#7c1d27]/20 p-6">
                <h2 className="text-[#f5e6c8] font-bold mb-5">Site Settings</h2>
                <div className="space-y-4">
                  {[
                    { label: "Business Phone", value: "(725) 555-0190" },
                    { label: "Business Email", value: "info@catrachosantojitos.com" },
                    { label: "Uber Eats Link", value: "https://ubereats.com/..." },
                    { label: "DoorDash Link", value: "https://doordash.com/..." },
                  ].map((s) => (
                    <div key={s.label}>
                      <label className="block text-[#f5e6c8]/60 text-xs uppercase tracking-wide mb-1.5">{s.label}</label>
                      <input defaultValue={s.value}
                        className="w-full px-4 py-3 rounded-xl bg-[#0f0805] border border-[#7c1d27]/30 text-[#f5e6c8] text-sm focus:outline-none focus:border-[#e8a020]/50" />
                    </div>
                  ))}
                  <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#7c1d27] to-[#9e1f1f] text-white font-bold hover:from-[#9e1f1f] hover:to-[#c62c2c] transition-all">
                    Save Settings
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
