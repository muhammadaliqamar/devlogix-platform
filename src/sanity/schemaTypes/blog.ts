import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'blog',
    title: 'Intelligence Briefings (Blog)',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Headline', type: 'string' }),
        defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
        defineField({ name: 'category', title: 'Category', type: 'string' }),
        defineField({ name: 'readTime', title: 'Read Time', type: 'string', description: 'e.g., 5 min read' }),
        defineField({ name: 'publishedAt', title: 'Published Date', type: 'date' }),
        defineField({ name: 'excerpt', title: 'Executive Summary (Excerpt)', type: 'text', rows: 3 }),
        defineField({ name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'isFeatured', title: 'Feature on Nexus?', type: 'boolean' }),

        // RICH TEXT CONTENT
        defineField({ name: 'content', title: 'Dossier Content', type: 'array', of: [{ type: 'block' }] }),
    ],
})