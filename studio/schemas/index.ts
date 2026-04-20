// Objects
import localeString from './objects/localeString';
import localeText from './objects/localeText';
import cta from './objects/cta';

// Section objects
import heroSection from './sections/heroSection';
import aboutSection from './sections/aboutSection';
import paradigmSection from './sections/paradigmSection';
import productsSection from './sections/productsSection';
import previewSection from './sections/previewSection';
import habitsSection from './sections/habitsSection';
import timelineSection from './sections/timelineSection';
import ctaSection from './sections/ctaSection';

// Documents
import landingPage from './documents/landingPage';
import siteSettings from './siteSettings';

export const schemaTypes = [
  // Documents
  landingPage,
  siteSettings,
  // Sections
  heroSection,
  aboutSection,
  paradigmSection,
  productsSection,
  previewSection,
  habitsSection,
  timelineSection,
  ctaSection,
  // Shared objects
  cta,
  localeString,
  localeText,
];
