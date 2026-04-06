'use server'

import { sendEmail } from "@/lib/sendEmail";

export async function submitContactForm(formData: FormData) {
    const name = formData.get("fullName");
    const email = formData.get("email");
    const phone = formData.get("fullPhone"); // Combined code + number
    const message = formData.get("briefing");
    const type = formData.get("type"); // 'PARTNERSHIP' or 'RECRUITMENT'

    // 1. Validation (Basic)
    if (!email || !name) {
        return { success: false, message: "Missing coordinates." };
    }

    try {
        // 2. Send Notification to YOU (The Board)
        await sendEmail(
            "chairman@devlogix.io",
            `New ${type} Protocol Initiated`,
            `
        <h1>Incoming Transmission</h1>
        <p><strong>Agent:</strong> ${name}</p>
        <p><strong>Comms:</strong> ${email} | ${phone}</p>
        <p><strong>Briefing:</strong> ${message}</p>
      `
        );

        // 3. Send Confirmation to THEM (Auto-Reply)
        await sendEmail(
            email as string,
            "Protocol Initiated: DevLogix",
            `
        <div style="background:#0B1221; color:#fff; padding:20px;">
            <h2>Transmission Received.</h2>
            <p>We have logged your request. Our board is reviewing your dossier.</p>
            <p>Expect secure communication within 24 hours.</p>
            <br/>
            <p><strong>DevLogix Sovereign Systems</strong></p>
        </div>
      `
        );

        return { success: true };

    } catch (error) {
        console.error(error);
        return { success: false, message: "Transmission failed." };
    }
}