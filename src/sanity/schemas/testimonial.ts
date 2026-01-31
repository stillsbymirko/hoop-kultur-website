import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Kundenstimme',
  type: 'document',
  icon: () => '⭐',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Rolle / Info',
      type: 'string',
      description: 'z.B. "Basketballspieler, 16 Jahre"',
    }),
    defineField({
      name: 'quote',
      title: 'Zitat',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'rating',
      title: 'Bewertung (1-5)',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5),
      initialValue: 5,
    }),
    defineField({
      name: 'isActive',
      title: 'Aktiv (auf Seite anzeigen)',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'image' },
  },
});
