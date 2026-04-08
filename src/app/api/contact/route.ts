import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Define the validation schema
const contactSchema = z.object({
  service: z.string().min(1, "Service is required"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  budget: z.string().min(1, "Budget is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  nda: z.boolean().optional(),
  botField: z.string().max(0).optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Validate data
    const validatedData = contactSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: validatedData.error.format() },
        { status: 400 }
      );
    }

    const { service, name, email, phone, budget, message, nda, botField } = validatedData.data;

    // 2. Honeypot check for spam proofing
    if (botField !== undefined && botField !== '') {
      // It's a bot, but return a success so they don't know they are blocked
      console.warn('Spam submission blocked via honeypot:', { name, email });
      return NextResponse.json({ success: true, message: 'Message received.' });
    }

    // 3. Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.ethereal.email',
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER || 'ethereal.user@ethereal.email',
        pass: process.env.SMTP_PASSWORD || 'etherealpass',
      },
      // Note: In production you might need secure: true if port is 465
    });

    // 4. Construct email content
    const mailOptions = {
        from: `"${name}" <${process.env.SMTP_FROM || process.env.SMTP_USER || 'noreply@devlogix.com.pk'}>`, 
        to: process.env.CONTACT_EMAIL_TO || 'leads@devlogix.com.pk',
        replyTo: email,
        subject: `New Lead Inquiry: ${service} - ${name}`,
        text: `
New Lead Inquiry from DevLogix Platform
---------------------------------------

Service Required: ${service}

Contact Details:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Budget: ${budget}

Message:
${message}

NDA Requested: ${nda ? 'Yes' : 'No'}
        `,
        html: `
        <div style="font-family: Arial, sans-serif; max-w: 600px; margin: 0 auto; color: #333;">
            <h2 style="color: #0e3c61;">New Lead Inquiry</h2>
            <p><strong>Service Required:</strong> ${service}</p>
            
            <h3 style="border-bottom: 1px solid #eee; padding-bottom: 5px;">Contact Details</h3>
            <ul>
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
                <li><strong>Phone:</strong> ${phone}</li>
                <li><strong>Budget:</strong> ${budget}</li>
            </ul>

            <h3 style="border-bottom: 1px solid #eee; padding-bottom: 5px;">Project Description</h3>
            <p style="white-space: pre-wrap; background: #f8fafc; padding: 15px; border-radius: 5px;">${message}</p>
            
            <p style="margin-top: 20px;">
                <strong>NDA Requested:</strong> ${nda ? '<span style="color: green;">Yes</span>' : 'No'}
            </p>
        </div>
        `
    };

    // 5. Send Email
    // Only send if environmental variables are actually defined, or during testing
    if (process.env.SMTP_HOST || process.env.NODE_ENV === 'development') {
        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        
        // Log preview URL if using ethereal email
        if (info.messageId && process.env.SMTP_HOST?.includes('ethereal')) {
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        }
    } else {
        console.warn('SMTP not configured, skipping actual email send.');
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully.' }, { status: 200 });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
