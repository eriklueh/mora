import groq from 'groq';

export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings" && _id == "siteSettings"][0]{
    title,
    description,
    ogImage,
    nav
  }
`;

export const LANDING_QUERY = groq`
  *[_type == "landingPage" && _id == "landingPage"][0]{
    hero,
    about,
    paradigm,
    products,
    preview,
    habits,
    timeline,
    cta
  }
`;
