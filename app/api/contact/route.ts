import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const recipientEmail = "infosiddjain@gmail.com";

    // SMTP Transporter configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE !== "false", // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER || recipientEmail,
        pass: process.env.SMTP_PASS || process.env.EMAIL_PASS || "",
      },
    });

    const mailOptions = {
      from: `"${name} (Expense Contact)" <${process.env.SMTP_USER || recipientEmail}>`,
      replyTo: email,
      to: recipientEmail,
      subject: `[Expense App Inquiry] ${subject || "Contact Form"}: from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; background-color: #0B0F0E; color: #F4F7F6; border-radius: 16px; max-width: 600px; margin: 0 auto; border: 1px solid #27312E;">
          <h2 style="color: #2DD4A8; margin-top: 0; border-bottom: 1px solid #27312E; padding-bottom: 12px;">
            Expense App — New Contact Message
          </h2>
          <p style="margin: 12px 0;"><strong style="color: #A7B3AF;">Name:</strong> ${name}</p>
          <p style="margin: 12px 0;"><strong style="color: #A7B3AF;">Email:</strong> <a href="mailto:${email}" style="color: #2DD4A8;">${email}</a></p>
          <p style="margin: 12px 0;"><strong style="color: #A7B3AF;">Topic:</strong> ${subject}</p>
          <hr style="border: 0; border-top: 1px solid #27312E; margin: 20px 0;" />
          <p style="margin: 8px 0;"><strong style="color: #A7B3AF;">Message:</strong></p>
          <div style="background-color: #121817; padding: 16px; border-radius: 12px; border: 1px solid #27312E; color: #F4F7F6; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          <hr style="border: 0; border-top: 1px solid #27312E; margin: 20px 0;" />
          <p style="font-size: 11px; color: #6F7C78; text-align: center; margin: 0;">
            Sent automatically from Expense App Website contact form to ${recipientEmail}
          </p>
        </div>
      `,
    };

    // If SMTP Credentials exist, send email via transport; otherwise output mock log
    if (process.env.SMTP_PASS || process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions);
    } else {
      console.log("Nodemailer payload ready to send to", recipientEmail, mailOptions);
    }

    return NextResponse.json({
      success: true,
      message: "Email message submitted to infosiddjain@gmail.com successfully!",
    });
  } catch (error: any) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process email message." },
      { status: 500 }
    );
  }
}
