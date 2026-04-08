import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import path from 'path';
import fs from 'fs';

// Validation schema for the case study download form
const downloadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(5, 'Phone number is required'),
  company: z.string().min(1, 'Company name is required'),
  caseStudyTitle: z.string().min(1, 'Case study title is required'),
  caseStudySlug: z.string().min(1, 'Case study slug is required'),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Validate
    const result = downloadSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: result.error.format() },
        { status: 400 }
      );
    }

    const { name, email, phone, company, caseStudyTitle, caseStudySlug } = result.data;

    // 2. Setup transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.ethereal.email',
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER || 'ethereal.user@ethereal.email',
        pass: process.env.SMTP_PASSWORD || 'etherealpass',
      },
    });

    // 3. Look for the PDF file
    // Convention: /public/case-studies/pdfs/{slug}.pdf
    const pdfPath = path.join(process.cwd(), 'public', 'case-studies', 'pdfs', `${caseStudySlug}.pdf`);
    const pdfExists = fs.existsSync(pdfPath);

    // 4. Send the PDF to the user
    const userMailOptions = {
      from: `"DevLogix" <${process.env.SMTP_FROM || process.env.SMTP_USER || 'noreply@devlogix.com.pk'}>`,
      to: email,
      subject: `Your Case Study: ${caseStudyTitle} — DevLogix`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
          <div style="padding: 40px 30px; background: #0B1221; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; font-size: 22px; margin: 0 0 8px 0;">Your Case Study Is Ready</h1>
            <p style="color: #94a3b8; font-size: 14px; margin: 0;">${caseStudyTitle}</p>
          </div>
          <div style="padding: 30px; background: #ffffff; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
            <p style="font-size: 15px; line-height: 1.6;">Hi <strong>${name}</strong>,</p>
            <p style="font-size: 15px; line-height: 1.6;">
              Thank you for your interest! ${pdfExists ? 'Please find the case study attached to this email.' : 'Our team will follow up with the detailed case study shortly.'}
            </p>
            <p style="font-size: 15px; line-height: 1.6;">
              If you'd like to discuss how we can achieve similar results for <strong>${company}</strong>, feel free to reply to this email or 
              <a href="https://devlogix.com.pk/contact" style="color: #0d938c; text-decoration: none; font-weight: bold;">schedule a consultation</a>.
            </p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
            <p style="font-size: 12px; color: #94a3b8;">
              DevLogix — Shaping the Digital Horizons<br/>
              <a href="https://devlogix.com.pk" style="color: #0d938c;">devlogix.com.pk</a>
            </p>
          </div>
        </div>
      `,
      ...(pdfExists && {
        attachments: [
          {
            filename: `${caseStudyTitle.replace(/[^a-zA-Z0-9\s]/g, '')}.pdf`,
            path: pdfPath,
          },
        ],
      }),
    };

    // 5. Notify the DevLogix team (internal lead notification)
    const internalMailOptions = {
      from: `"DevLogix CRM" <${process.env.SMTP_FROM || process.env.SMTP_USER || 'noreply@devlogix.com.pk'}>`,
      to: process.env.CONTACT_EMAIL_TO || 'leads@devlogix.com.pk',
      replyTo: email,
      subject: `📄 Case Study Lead: ${caseStudyTitle} — ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #0d938c;">New Case Study Download</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 130px;">Case Study:</td><td>${caseStudyTitle}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Name:</td><td>${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td>${phone}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Company:</td><td>${company}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">PDF Sent:</td><td>${pdfExists ? '✅ Yes (attached)' : '❌ No (PDF not found, follow up required)'}</td></tr>
          </table>
        </div>
      `,
    };

    // 6. Send both emails
    if (process.env.SMTP_HOST || process.env.NODE_ENV === 'development') {
      const userInfo = await transporter.sendMail(userMailOptions);
      console.log('Case study PDF sent to user:', userInfo.messageId);

      const internalInfo = await transporter.sendMail(internalMailOptions);
      console.log('Internal lead notification sent:', internalInfo.messageId);

      if (userInfo.messageId && process.env.SMTP_HOST?.includes('ethereal')) {
        console.log('Preview URL (user):', nodemailer.getTestMessageUrl(userInfo));
      }
    } else {
      console.warn('SMTP not configured, skipping email send.');
    }

    return NextResponse.json({ success: true, message: 'Case study sent to your email.' }, { status: 200 });

  } catch (error) {
    console.error('Error sending case study email:', error);
    return NextResponse.json(
      { error: 'Failed to send. Please try again later.' },
      { status: 500 }
    );
  }
}
