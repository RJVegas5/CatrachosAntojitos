import { NextRequest, NextResponse } from "next/server";
import { supabase, isConfigured } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const lead = {
      first_name: body.first_name,
      email: body.email,
      phone: body.phone,
      interested_in_catering: body.interested_in_catering ?? false,
      source: body.source ?? "homepage",
    };

    console.log("New VIP waitlist lead:", lead);

    if (isConfigured) {
      const { error } = await supabase.from("waitlist_leads").insert([lead]);
      if (error) throw error;
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}

export async function GET() {
  if (!isConfigured) {
    return NextResponse.json({ leads: [], configured: false });
  }
  try {
    const { data, error } = await supabase
      .from("waitlist_leads")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return NextResponse.json({ leads: data, configured: true });
  } catch {
    return NextResponse.json({ leads: [], configured: false });
  }
}
