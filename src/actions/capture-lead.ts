'use server'

import { z } from 'zod'
import { supabase } from '@/lib/supabase'

// 1. Define the Validation Schema (Security)
// This ensures we only accept valid emails and real names.
const LeadSchema = z.object({
    firstName: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    companyName: z.string().optional(),
    assetRequested: z.string().min(1, { message: "Asset ID is required" }),
})

// 2. Define the State type for our form
export type FormState = {
    message: string
    errors?: {
        firstName?: string[]
        email?: string[]
        companyName?: string[]
    }
    success?: boolean
}

// 3. The Server Action
export async function captureLead(prevState: FormState, formData: FormData): Promise<FormState> {

    // Extract data from the form
    const rawData = {
        firstName: formData.get('firstName'),
        email: formData.get('email'),
        companyName: formData.get('companyName'),
        assetRequested: formData.get('assetRequested'),
    }

    // Validate the data
    const validatedFields = LeadSchema.safeParse(rawData)

    // If validation fails, return errors to the frontend
    if (!validatedFields.success) {
        return {
            message: 'Missing or invalid fields',
            errors: validatedFields.error.flatten().fieldErrors,
            success: false
        }
    }

    const { firstName, email, companyName, assetRequested } = validatedFields.data

    // Insert into Supabase
    try {
        const { error } = await supabase
            .from('leads')
            .insert([
                {
                    first_name: firstName,
                    email: email,
                    company_name: companyName,
                    asset_requested: assetRequested
                },
            ])

        if (error) {
            console.error('Supabase Error:', error)
            return { message: 'Database Error: Failed to save lead.', success: false }
        }

        // TODO: Send Email via Resend (Phase 4)

        return { message: 'Success! Your download is on its way.', success: true }

    } catch (e) {
        return { message: 'Server Error: Something went wrong.', success: false }
    }
}