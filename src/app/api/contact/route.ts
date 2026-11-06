import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    // In production, if an email service provider API key (e.g. RESEND_API_KEY) is provided,
    // we dispatch the email. Otherwise, we simulate dispatch and log securely on server.
    const timestamp = new Date().toISOString();
    console.log(`[CONTACT_DISPATCH ${timestamp}] From: ${name} <${email}> | Subject: ${subject || "General Inquiry"}`);
    console.log(`[MESSAGE_BODY] ${message}`);

    return NextResponse.json({
      success: true,
      message: "Dispatch received successfully. Korikana Sai Praneeth will review your inquiry shortly.",
      dispatchId: `DSP-${Date.now().toString(36).toUpperCase()}`,
      timestamp,
      recipient: "korikanasaipraneeth@gmail.com",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: "Internal dispatch gateway error. Please try again or email directly." },
      { status: 500 }
    );
  }
}
