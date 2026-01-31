import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Leistung',
  type: 'document',
  icon: () => '🏀',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'z.B. Target, Users, Zap, Trophy, Clock, Star',
    }),
    defineField({
      name: 'description',
      title: 'Kurzbeschreibung',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'order',
      title: 'Reihenfolge',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Reihenfolge',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'description' },
  },
});
