import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'news',
    title: 'Official Transmissions (Newsroom)',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Headline', type: 'string' }),
        defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
        defineField({
            name: 'type', title: 'Type', type: 'string', options: {
                list: ['Press Release', 'Company Update', 'Expansion', 'Award', 'Partnership']
            }
        }),
        defineField({ name: 'date', title: 'Date', type: 'date' }),
        defineField({ name: 'location', title: 'Location', type: 'string', description: 'e.g., DUBAI, UAE' }),
        defineField({ name: 'excerpt', title: 'Summary', type: 'text' }),
        defineField({ name: 'coverImage', title: 'Cover Image', type: 'image' }),
        defineField({ name: 'isFeatured', title: 'Feature on Newsroom?', type: 'boolean' }),
        defineField({ name: 'content', title: 'Release Content', type: 'array', of: [{ type: 'block' }] }),
    ],
})