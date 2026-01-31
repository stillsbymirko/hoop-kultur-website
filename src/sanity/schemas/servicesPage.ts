import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'servicesPage',
  title: 'Leistungen Seite',
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
      return { title: 'Leistungen Seite' };
    },
  },
});
