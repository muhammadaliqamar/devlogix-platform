import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'career',
    title: 'The Roster (Careers)',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Role Title', type: 'string' }),
        defineField({
            name: 'department', title: 'Department', type: 'string', options: {
                list: ['Engineering', 'Design', 'R&D', 'Operations', 'Sales']
            }
        }),
        defineField({ name: 'location', title: 'Location', type: 'string' }),
        defineField({
            name: 'type', title: 'Type', type: 'string', options: {
                list: ['Full-Time', 'Contract', 'Hybrid']
            }
        }),
        defineField({ name: 'salary', title: 'Comp Package', type: 'string' }),
        defineField({ name: 'tags', title: 'Tech Tags', type: 'array', of: [{ type: 'string' }] }),
        defineField({ name: 'isActive', title: 'Hiring Now?', type: 'boolean', initialValue: true }),
    ],
})