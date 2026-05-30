// Supabase is not yet configured. Connect it later for admin DB features.
// When ready: npm install @supabase/supabase-js @supabase/ssr
// Then add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local

export type CateringInquiry = {
  id?: string;
  created_at?: string;
  name: string;
  phone: string;
  email: string;
  event_date: string;
  event_location: string;
  guest_count: string;
  catering_type: string;
  message: string;
  status?: "new" | "contacted" | "booked" | "declined";
};
