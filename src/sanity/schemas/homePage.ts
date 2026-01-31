import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'homePage',
  title: 'Startseite',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Bereich',
      type: 'object',
      fields: [
        { name: 'title', title: 'Titel', type: 'string', validation: (Rule) => Rule.required() },
        { name: 'subtitle', title: 'Untertitel', type: 'string' },
        { name: 'ctaText', title: 'Button Text', type: 'string' },
        { name: 'ctaLink', title: 'Button Link', type: 'string' },
        { name: 'secondaryCtaText', title: 'Zweiter Button Text', type: 'string' },
        { name: 'secondaryCtaLink', title: 'Zweiter Button Link', type: 'string' },
        { name: 'backgroundImage', title: 'Hintergrundbild', type: 'image', options: { hotspot: true } },
      ],
    }),
    // About Section
    defineField({
      name: 'aboutSection',
      title: 'Über Mich Bereich',
      type: 'object',
      fields: [
        { name: 'label', title: 'Label', type: 'string' },
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'description', title: 'Beschreibung', type: 'text', rows: 5 },
        { name: 'image', title: 'Bild', type: 'image', options: { hotspot: true } },
        { 
          name: 'stats', 
          title: 'Statistiken', 
          type: 'array', 
          of: [{ 
            type: 'object', 
            fields: [
              { name: 'value', title: 'Wert', type: 'string' },
              { name: 'label', title: 'Label', type: 'string' },
            ] 
          }] 
        },
      ],
    }),
    // Services Preview
    defineField({
      name: 'servicesSection',
      title: 'Services Bereich',
      type: 'object',
      fields: [
        { name: 'label', title: 'Label', type: 'string' },
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'description', title: 'Beschreibung', type: 'text' },
      ],
    }),
    // Testimonials
    defineField({
      name: 'testimonialsSection',
      title: 'Testimonials Bereich',
      type: 'object',
      fields: [
        { name: 'label', title: 'Label', type: 'string' },
        { name: 'title', title: 'Titel', type: 'string' },
      ],
    }),
    // CTA Section
    defineField({
      name: 'ctaSection',
      title: 'Call-to-Action Bereich',
      type: 'object',
      fields: [
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'description', title: 'Beschreibung', type: 'text' },
        { name: 'buttonText', title: 'Button Text', type: 'string' },
        { name: 'buttonLink', title: 'Button Link', type: 'string' },
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
      return { title: 'Startseite' };
    },
  },
});
