import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Validation schema
const downloadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(5, 'Phone number is required'),
  company: z.string().min(1, 'Company name is required'),
  caseStudyTitle: z.string().min(1, 'Case study title is required'),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const result = downloadSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: result.error.format() },
        { status: 400 }
      );
    }

    const { name, email, phone, company, caseStudyTitle } = result.data;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.ethereal.email',
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER || 'ethereal.user@ethereal.email',
        pass: process.env.SMTP_PASSWORD || 'etherealpass',
      },
    });

    // Send lead notification to the team
    const mailOptions = {
      from: `"DevLogix Website" <${process.env.SMTP_FROM || process.env.SMTP_USER || 'noreply@devlogix.com.pk'}>`,
      to: 'hello@devlogix.com.pk',
      replyTo: email,
      subject: `📄 Case Study PDF Requested: ${caseStudyTitle}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
          <div style="padding: 30px; background: #0B1221; border-radius: 8px 8px 0 0;">
            <h2 style="color: #ffffff; font-size: 18px; margin: 0 0 6px 0;">📄 Case Study PDF Requested</h2>
            <p style="color: #0d938c; font-size: 14px; margin: 0; font-weight: bold;">${caseStudyTitle}</p>
          </div>
          <div style="padding: 24px 30px; background: #ffffff; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
            <p style="font-size: 14px; color: #64748b; margin: 0 0 16px 0;">
              A visitor has requested the PDF for the above case study. Here are their details:
            </p>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #334155; width: 120px; border-bottom: 1px solid #f1f5f9;">Name</td>
                <td style="padding: 10px 0; color: #1e293b; border-bottom: 1px solid #f1f5f9;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #334155; border-bottom: 1px solid #f1f5f9;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}" style="color: #0d938c; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #334155; border-bottom: 1px solid #f1f5f9;">Phone</td>
                <td style="padding: 10px 0; color: #1e293b; border-bottom: 1px solid #f1f5f9;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #334155;">Company</td>
                <td style="padding: 10px 0; color: #1e293b;">${company}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <p style="font-size: 12px; color: #94a3b8; margin: 0;">
              Please send the case study PDF to this lead and follow up accordingly.
            </p>
          </div>
        </div>
      `,
    };

    if (process.env.SMTP_HOST || process.env.NODE_ENV === 'development') {
      const info = await transporter.sendMail(mailOptions);
      console.log('Case study lead notification sent:', info.messageId);

      if (info.messageId && process.env.SMTP_HOST?.includes('ethereal')) {
        console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
      }
    } else {
      console.warn('SMTP not configured, skipping email send.');
    }

    return NextResponse.json({ success: true, message: 'Your request has been received.' }, { status: 200 });

  } catch (error) {
    console.error('Error sending lead notification:', error);
    return NextResponse.json(
      { error: 'Failed to send. Please try again later.' },
      { status: 500 }
    );
  }
}
