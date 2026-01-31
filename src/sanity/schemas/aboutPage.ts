import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'aboutPage',
  title: 'Über Mich Seite',
  type: 'document',
  fields: [
    // Hero
    defineField({
      name: 'hero',
      title: 'Hero Bereich',
      type: 'object',
      fields: [
        { name: 'label', title: 'Label', type: 'string' },
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'description', title: 'Beschreibung', type: 'text', rows: 3 },
        { name: 'image', title: 'Portrait Bild', type: 'image', options: { hotspot: true } },
        { name: 'yearsExperience', title: 'Jahre Erfahrung', type: 'number' },
        { name: 'athletesCount', title: 'Anzahl Athleten', type: 'number' },
      ],
    }),
    // Philosophy
    defineField({
      name: 'philosophy',
      title: 'Philosophie',
      type: 'object',
      fields: [
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'content', title: 'Inhalt', type: 'array', of: [{ type: 'block' }] },
      ],
    }),
    // Qualifications
    defineField({
      name: 'qualifications',
      title: 'Qualifikationen',
      type: 'object',
      fields: [
        { name: 'title', title: 'Titel', type: 'string' },
        { 
          name: 'items', 
          title: 'Qualifikationen Liste', 
          type: 'array', 
          of: [{ type: 'string' }] 
        },
      ],
    }),
    // Timeline
    defineField({
      name: 'timeline',
      title: 'Meilensteine',
      type: 'object',
      fields: [
        { name: 'title', title: 'Titel', type: 'string' },
        {
          name: 'milestones',
          title: 'Meilensteine',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'year', title: 'Jahr', type: 'string' },
              { name: 'title', title: 'Titel', type: 'string' },
              { name: 'description', title: 'Beschreibung', type: 'string' },
            ],
          }],
        },
      ],
    }),
    // SEO
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
      return { title: 'Über Mich Seite' };
    },
  },
});
