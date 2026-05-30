import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Log the inquiry server-side (visible in Vercel logs)
    console.log("New catering inquiry:", {
      name: body.name,
      email: body.email,
      phone: body.phone,
      event_date: body.event_date,
      event_location: body.event_location,
      guest_count: body.guest_count,
      catering_type: body.catering_type,
    });

    // TODO: Connect Supabase or email service here when ready
    // Option A: npm install @supabase/supabase-js → save to DB
    // Option B: npm install resend → send email notification

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Catering inquiry error:", err);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
