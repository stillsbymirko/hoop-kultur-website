import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'pricingPlan',
  title: 'Preispaket',
  type: 'document',
  icon: () => '💰',
  fields: [
    defineField({
      name: 'name',
      title: 'Paket Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Preis (€)',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'unit',
      title: 'Einheit',
      type: 'string',
      description: 'z.B. "pro Stunde", "für 5 Stunden"',
    }),
    defineField({
      name: 'description',
      title: 'Kurzbeschreibung',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'isPopular',
      title: 'Als "Beliebt" markieren',
      type: 'boolean',
      initialValue: false,
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
    select: { title: 'name', price: 'price' },
    prepare({ title, price }) {
      return { title, subtitle: `${price}€` };
    },
  },
});
