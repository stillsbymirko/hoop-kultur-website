import { groq } from 'next-sanity';

// Site Settings
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`;

// Navigation
export const navigationQuery = groq`*[_type == "navigation"][0]`;

// Footer
export const footerQuery = groq`*[_type == "footer"][0]`;

// Home Page
export const homePageQuery = groq`*[_type == "homePage"][0]`;

// About Page
export const aboutPageQuery = groq`*[_type == "aboutPage"][0]`;

// Services
export const servicesQuery = groq`*[_type == "service"] | order(order asc)`;
export const servicesPageQuery = groq`*[_type == "servicesPage"][0]`;

// Pricing
export const pricingPlansQuery = groq`*[_type == "pricingPlan"] | order(order asc)`;
export const pricingPageQuery = groq`*[_type == "pricingPage"][0]`;

// Testimonials
export const testimonialsQuery = groq`*[_type == "testimonial" && isActive == true]`;

// Location
export const locationQuery = groq`*[_type == "location"][0]`;
export const hallePageQuery = groq`*[_type == "hallePage"][0]`;

// Contact
export const contactPageQuery = groq`*[_type == "contactPage"][0]`;
