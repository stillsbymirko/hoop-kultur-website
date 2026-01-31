import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'mainNav',
      title: 'Hauptnavigation',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Label (Deutsch)', type: 'string' },
          { name: 'labelEn', title: 'Label (Englisch)', type: 'string' },
          { name: 'href', title: 'Link', type: 'string' },
          { name: 'order', title: 'Reihenfolge', type: 'number' },
        ],
        preview: {
          select: { title: 'label', subtitle: 'href' },
        },
      }],
    }),
    defineField({
      name: 'footerNav',
      title: 'Footer Navigation',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Label', type: 'string' },
          { name: 'href', title: 'Link', type: 'string' },
        ],
      }],
    }),
    defineField({
      name: 'ctaButton',
      title: 'CTA Button',
      type: 'object',
      fields: [
        { name: 'label', title: 'Label (Deutsch)', type: 'string' },
        { name: 'labelEn', title: 'Label (Englisch)', type: 'string' },
        { name: 'href', title: 'Link', type: 'string' },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Navigation' };
    },
  },
});
