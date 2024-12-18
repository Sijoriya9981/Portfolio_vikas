import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { email, subject, message } = await req.json();
        console.log("Received Data:", email, subject, message);

        // Create transporter with Gmail App password
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "vks609995@gmail.com",
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        const mailOptions = {
            from: '"vks" <vks609995@gmail.com>',
            to: "vikassijoriya2121@gmail.com",
            subject: subject,
            html: `
              <h1>${subject}</h1>
              <p>New message submitted from contact form:</p>
              <p><strong>Sender:</strong> ${email}</p>
              <p><strong>Message:</strong> ${message}</p>
          `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info);

        // Return successful JSON response
        return NextResponse.json({ success: true, info });
    } catch (error) {
        console.error("Email sending error:", error);

        // Return error response with status 500
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
