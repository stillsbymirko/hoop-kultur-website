import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Seiten-Einstellungen',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Seiten-Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteDescription',
      title: 'Seiten-Beschreibung',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'contact',
      title: 'Kontaktdaten',
      type: 'object',
      fields: [
        { name: 'email', title: 'E-Mail', type: 'string' },
        { name: 'phone', title: 'Telefon', type: 'string' },
        { name: 'whatsapp', title: 'WhatsApp Nummer', type: 'string' },
        { name: 'address', title: 'Adresse', type: 'text', rows: 2 },
        { name: 'city', title: 'Stadt', type: 'string' },
      ],
    }),
    defineField({
      name: 'social',
      title: 'Social Media',
      type: 'object',
      fields: [
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
        { name: 'youtube', title: 'YouTube URL', type: 'url' },
        { name: 'tiktok', title: 'TikTok URL', type: 'url' },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'Standard SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Titel', type: 'string' },
        { name: 'metaDescription', title: 'Meta Beschreibung', type: 'text', rows: 3 },
        { name: 'ogImage', title: 'Social Share Bild', type: 'image' },
      ],
    }),
  ],
  preview: {
    select: { title: 'siteName' },
  },
});
