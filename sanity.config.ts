'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'h55l42m0';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'hoopkultur-studio',
  title: 'HOOPKULTUR CMS',
  
  projectId,
  dataset,
  
  plugins: [
    structureTool({
      structure: (S: any) =>
        S.list()
          .title('Inhalte')
          .items([
            // Einstellungen Gruppe
            S.listItem()
              .title('⚙️ Einstellungen')
              .child(
                S.list()
                  .title('Einstellungen')
                  .items([
                    S.listItem()
                      .title('Seiten-Einstellungen')
                      .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
                    S.listItem()
                      .title('Navigation')
                      .child(S.document().schemaType('navigation').documentId('navigation')),
                    S.listItem()
                      .title('Footer')
                      .child(S.document().schemaType('footer').documentId('footer')),
                  ])
              ),
            
            S.divider(),
            
            // Seiten Gruppe
            S.listItem()
              .title('📄 Seiten')
              .child(
                S.list()
                  .title('Seiten')
                  .items([
                    S.listItem()
                      .title('Startseite')
                      .child(S.document().schemaType('homePage').documentId('homePage')),
                    S.listItem()
                      .title('Über Mich')
                      .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
                    S.listItem()
                      .title('Leistungen')
                      .child(S.document().schemaType('servicesPage').documentId('servicesPage')),
                    S.listItem()
                      .title('Preise')
                      .child(S.document().schemaType('pricingPage').documentId('pricingPage')),
                    S.listItem()
                      .title('Trainingshalle')
                      .child(S.document().schemaType('hallePage').documentId('hallePage')),
                    S.listItem()
                      .title('Kontakt')
                      .child(S.document().schemaType('contactPage').documentId('contactPage')),
                  ])
              ),
            
            S.divider(),
            
            // Inhalte Gruppe
            S.listItem()
              .title('🏀 Leistungen')
              .schemaType('service')
              .child(S.documentTypeList('service').title('Leistungen')),
            
            S.listItem()
              .title('💰 Preispakete')
              .schemaType('pricingPlan')
              .child(S.documentTypeList('pricingPlan').title('Preispakete')),
            
            S.listItem()
              .title('⭐ Kundenstimmen')
              .schemaType('testimonial')
              .child(S.documentTypeList('testimonial').title('Kundenstimmen')),
            
            S.listItem()
              .title('📍 Trainingsort')
              .schemaType('location')
              .child(S.document().schemaType('location').documentId('location')),
          ])
    }),
    visionTool(),
  ],
  
  schema: {
    types: schemaTypes,
  },
});
