import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // e.g., mail.devlogix.io
    port: 465,
    secure: true,
    auth: {
        user: process.env.SMTP_USER, // e.g., notifications@devlogix.io
        pass: process.env.SMTP_PASS,
    },
});

export const sendEmail = async (to: string, subject: string, html: string) => {
    await transporter.sendMail({
        from: '"DevLogix Intel" <notifications@devlogix.com.pk>',
        to,
        subject,
        html,
    });
};