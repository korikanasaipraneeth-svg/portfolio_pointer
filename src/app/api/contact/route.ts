import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

    const timestamp = new Date().toISOString();
    const dispatchId = `DSP-${Date.now().toString(36).toUpperCase()}`;

    // Configurable SMTP Server Environment Variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const toEmail = process.env.CONTACT_TO_EMAIL || "korikanasaipraneeth@gmail.com";

    let deliveryMethod = "server_log";

    if (smtpHost && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"PRANEETH.AI Dispatch" <${smtpUser}>`,
          to: toEmail,
          replyTo: email,
          subject: `[PRANEETH.AI INTAKE] ${subject || "New Inquiry"} from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "N/A"}\nTimestamp: ${timestamp}\n\nMessage:\n${message}`,
          html: `
            <div style="font-family: sans-serif; background-color: #08090B; color: #F3F2F2; padding: 24px; border-radius: 8px;">
              <h2 style="color: #C72C46; margin-top: 0;">New Inquiry Received — PRANEETH.AI</h2>
              <p><strong>From:</strong> ${name} (<a href="mailto:${email}" style="color: #E05269;">${email}</a>)</p>
              <p><strong>Subject:</strong> ${subject || "General Inquiry"}</p>
              <p><strong>Dispatch ID:</strong> <code style="color: #C72C46;">${dispatchId}</code></p>
              <div style="background-color: #15161B; border-left: 3px solid #C72C46; padding: 16px; margin: 20px 0; border-radius: 4px;">
                <p style="white-space: pre-wrap; margin: 0; line-height: 1.5;">${message}</p>
              </div>
              <p style="font-size: 11px; color: #92939B;">Received on ${new Date(timestamp).toLocaleString()}</p>
            </div>
          `,
        });

        deliveryMethod = "smtp_live";
      } catch (smtpErr: any) {
        console.error("[SMTP ERROR]", smtpErr);
        deliveryMethod = "smtp_fallback_logged";
      }
    } else {
      console.log(`[DISPATCH LOG ${timestamp}] ID: ${dispatchId}`);
      console.log(`From: ${name} <${email}>`);
      console.log(`Subject: ${subject || "None"}`);
      console.log(`Message:\n${message}`);
    }

    return NextResponse.json({
      success: true,
      message: "Dispatch received successfully. Korikana Sai Praneeth will review your inquiry shortly.",
      dispatchId,
      deliveryMethod,
      timestamp,
      recipient: toEmail,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: "Internal dispatch gateway error. Please try again or email directly." },
      { status: 500 }
    );
  }
}
