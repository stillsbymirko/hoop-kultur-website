import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'location',
  title: 'Trainingshalle',
  type: 'document',
  icon: () => '📍',
  fields: [
    defineField({
      name: 'name',
      title: 'Hallen-Name',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Adresse',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'Stadt',
      type: 'string',
    }),
    defineField({
      name: 'postalCode',
      title: 'PLZ',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Beschreibung',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'openingHours',
      title: 'Öffnungszeiten',
      type: 'object',
      fields: [
        { name: 'weekdays', title: 'Mo-Fr', type: 'string' },
        { name: 'weekend', title: 'Sa-So', type: 'string' },
      ],
    }),
    defineField({
      name: 'transport',
      title: 'Anfahrt',
      type: 'object',
      fields: [
        { name: 'publicTransport', title: 'ÖPNV', type: 'string' },
        { name: 'parking', title: 'Parken', type: 'string' },
      ],
    }),
    defineField({
      name: 'googleMapsUrl',
      title: 'Google Maps URL',
      type: 'url',
    }),
    defineField({
      name: 'images',
      title: 'Hallenbilder',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'address' },
  },
});
