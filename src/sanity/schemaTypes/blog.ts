import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'blog',
    title: 'Blog Posts',
    type: 'document',
    fieldsets: [
        { name: 'seo', title: '🔍 SEO Metadata', options: { collapsible: true, collapsed: false } },
        { name: 'post', title: '📝 Post Content', options: { collapsible: true, collapsed: false } },
    ],
    fields: [
        // ─── SEO METADATA (Always First) ──────────────────────────
        defineField({
            name: 'seoTargetKeyword',
            title: 'Target Keyword',
            type: 'string',
            fieldset: 'seo',
            description: 'The primary keyword this post should rank for (e.g., "custom software development")',
            validation: Rule => Rule.required().warning('A target keyword is essential for SEO.'),
        }),
        defineField({
            name: 'seoSecondaryKeywords',
            title: 'Secondary Keywords',
            type: 'array',
            of: [{ type: 'string' }],
            fieldset: 'seo',
            description: 'Supporting keywords and long-tail variations (3-5 recommended)',
        }),
        defineField({
            name: 'seoMetaDescription',
            title: 'Meta Description',
            type: 'text',
            rows: 3,
            fieldset: 'seo',
            description: 'The snippet shown in Google search results. Keep it between 150-160 characters.',
            validation: Rule => Rule.max(170).warning('Meta descriptions over 160 characters may be truncated by Google.'),
        }),

        // ─── POST CONTENT ─────────────────────────────────────────
        defineField({ name: 'title', title: 'Title / Headline', type: 'string', fieldset: 'post', validation: Rule => Rule.required() }),
        defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, fieldset: 'post' }),
        defineField({ name: 'category', title: 'Category', type: 'string', fieldset: 'post' }),
        defineField({ name: 'readTime', title: 'Read Time', type: 'string', description: 'e.g., 5 min read', fieldset: 'post' }),
        defineField({ name: 'publishedAt', title: 'Published Date', type: 'date', fieldset: 'post' }),
        defineField({ name: 'excerpt', title: 'Summary (Excerpt)', type: 'text', rows: 3, fieldset: 'post' }),
        defineField({ name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true }, fieldset: 'post' }),
        defineField({ name: 'isFeatured', title: 'Feature This Post?', type: 'boolean', fieldset: 'post' }),
        defineField({ name: 'content', title: 'Full Content', type: 'array', of: [{ type: 'block' }], fieldset: 'post' }),
    ],
    preview: {
        select: { title: 'title', subtitle: 'category', media: 'coverImage' },
    },
})