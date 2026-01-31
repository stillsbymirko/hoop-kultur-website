import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'hallePage',
  title: 'Trainingshalle Seite',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Bereich',
      type: 'object',
      fields: [
        { name: 'label', title: 'Label', type: 'string' },
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'description', title: 'Beschreibung', type: 'text' },
      ],
    }),
    defineField({
      name: 'content',
      title: 'Inhaltsbereich',
      type: 'object',
      fields: [
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'description', title: 'Beschreibung', type: 'text', rows: 4 },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Titel', type: 'string' },
        { name: 'metaDescription', title: 'Meta Beschreibung', type: 'text', rows: 3 },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Trainingshalle Seite' };
    },
  },
});
