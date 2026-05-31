import { createClient } from "@supabase/supabase-js";

const url  = process.env.NEXT_PUBLIC_SUPABASE_URL  || "https://placeholder.supabase.co";
const key  = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";
const isConfigured = !url.includes("placeholder");

export const supabase = createClient(url, key);
export { isConfigured };

export type WaitlistLead = {
  id?: string;
  created_at?: string;
  first_name: string;
  email: string;
  phone: string;
  interested_in_catering: boolean;
  source?: string;
  status?: "new" | "contacted";
};
