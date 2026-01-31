import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'contactPage',
  title: 'Kontakt Seite',
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
      name: 'contactInfo',
      title: 'Kontaktinfo Text',
      type: 'object',
      fields: [
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'description', title: 'Beschreibung', type: 'text' },
        { name: 'responseTime', title: 'Antwortzeit', type: 'string' },
      ],
    }),
    defineField({
      name: 'ctaCard',
      title: 'CTA Karte',
      type: 'object',
      fields: [
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'description', title: 'Beschreibung', type: 'text' },
        { name: 'buttonText', title: 'Button Text', type: 'string' },
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
      return { title: 'Kontakt Seite' };
    },
  },
});
