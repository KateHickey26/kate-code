import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message, middleName } = await req.json();

    const headers = req.headers;
    const userAgent = headers.get("user-agent") || "Unknown";
    const forwarded = headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0] : "Unknown";

    // SendGrid email configuration
    const transporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: 587,
      auth: {
        user: "apikey", // SendGrid API key
        pass: process.env.SENDGRID_API_KEY,
      },
    });

    // Honeypot trap — if filled, it's likely a bot
    if (middleName) {
      // Send a bot alert to monitoring address
      await transporter.sendMail({
        from: "alert@kate-code.com",
        to: "kate.hickey26@gmail.com",
        subject: "🚨 Bot submission detected by honeypot",
        text: `A bot-like submission was blocked via the honeypot field.\n\n
        Submitted name: ${name}\n
        Middle name: ${middleName}\n
        Email: ${email}\n
        Message: ${message}\n\n
        Request Info:\n
        IP Address: ${ip}\n
        User Agent: ${userAgent}\n
        Timestamp: ${new Date().toISOString()}`,
      });
      return NextResponse.json(
        { error: "Suspicious activity detected." },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Valid message
    await transporter.sendMail({
      from: "hello@kate-code.com", 
      to: process.env.EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\n
      Email: ${email}\n
      Message: ${message}\n\n
      Request Info:\n
      IP Address: ${ip}\n
      User Agent: ${userAgent}\n
      Timestamp: ${new Date().toISOString()}`,
    });

    return NextResponse.json(
      { message: "Thanks for reaching out! Your message has been sent." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json(
      { error: "Somethig went wrong. Please try again later." },
      { status: 500 }
    );
  }
}