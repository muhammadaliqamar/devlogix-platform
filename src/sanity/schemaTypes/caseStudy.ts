import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'caseStudy',
    title: 'Mission Logs (Case Studies)',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Mission Title', type: 'string', validation: Rule => Rule.required() }),
        defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } }),
        defineField({ name: 'client', title: 'Client Name', type: 'string' }),
        defineField({
            name: 'category', title: 'Sector', type: 'string', options: {
                list: ['Fintech', 'AI & ML', 'Logistics', 'Healthcare', 'E-Commerce', 'Cybersecurity']
            }
        }),
        defineField({ name: 'impactStat', title: 'Impact Metric (The Hook)', type: 'string', description: 'e.g., 40% Reduction in OpEx' }),
        defineField({ name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'isFeatured', title: 'Featured Mission?', type: 'boolean', initialValue: false }),

        // THE WAR ROOM SIDEBAR DATA
        defineField({ name: 'timeline', title: 'Timeline', type: 'string', description: 'e.g., 8 Months' }),
        defineField({ name: 'services', title: 'Services Deployed', type: 'array', of: [{ type: 'string' }] }),
        defineField({ name: 'stack', title: 'Tech Stack', type: 'array', of: [{ type: 'string' }] }),
        defineField({
            name: 'stats',
            title: 'Key Stats (Detail Page)',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'label', type: 'string', title: 'Label' },
                    { name: 'value', type: 'string', title: 'Value' }
                ]
            }]
        }),

        // THE NARRATIVE
        defineField({ name: 'challenge', title: 'The Objective (Challenge)', type: 'array', of: [{ type: 'block' }] }),
        defineField({ name: 'solution', title: 'The Execution (Solution)', type: 'array', of: [{ type: 'block' }] }),

        // VISUAL EVIDENCE
        defineField({ name: 'gallery', title: 'Mission Gallery', type: 'array', of: [{ type: 'image' }] }),

        // TESTIMONIAL
        defineField({
            name: 'testimonial',
            title: 'Debrief (Testimonial)',
            type: 'object',
            fields: [
                { name: 'quote', type: 'text', title: 'Quote' },
                { name: 'author', type: 'string', title: 'Author' }
            ]
        }),
    ],
})