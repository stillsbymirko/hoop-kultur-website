// Schema exports
import siteSettings from './siteSettings';
import homePage from './homePage';
import aboutPage from './aboutPage';
import service from './service';
import pricingPlan from './pricingPlan';
import testimonial from './testimonial';
import location from './location';
import contactPage from './contactPage';
import servicesPage from './servicesPage';
import pricingPage from './pricingPage';
import hallePage from './hallePage';
import navigation from './navigation';
import footer from './footer';

export const schemaTypes = [
  // Einstellungen
  siteSettings,
  navigation,
  footer,
  
  // Seiten
  homePage,
  aboutPage,
  servicesPage,
  pricingPage,
  hallePage,
  contactPage,
  
  // Inhalte
  service,
  pricingPlan,
  testimonial,
  location,
];
