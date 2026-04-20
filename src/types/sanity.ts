export type Locale = 'es' | 'en';

export interface LocaleString {
  es?: string;
  en?: string;
}

export interface LocaleText {
  es?: string;
  en?: string;
}

export interface SanityImage {
  _type: 'image';
  asset: { _ref: string; _type: 'reference' };
  alt?: string;
}

export interface Cta {
  label: LocaleString;
  href: string;
  variant?: 'primary' | 'outline';
}

export interface Stat {
  num: LocaleString;
  label: LocaleString;
}

export interface Pillar {
  num: string;
  title: LocaleString;
  desc?: LocaleText;
}

export interface ProductCard {
  level: LocaleString;
  name: LocaleString;
  desc?: LocaleText;
  photo?: SanityImage;
  includes?: LocaleString[];
  price?: string;
  currency?: string;
  cta?: Cta;
  featured?: boolean;
  featuredLabel?: LocaleString;
}

export interface PreviewCard {
  level: LocaleString;
  name: LocaleString;
  meta?: LocaleString[];
  days?: LocaleString[];
  extra?: LocaleText;
  cta?: Cta;
  featured?: boolean;
}

export interface TimelineStep {
  time: LocaleString;
  title: LocaleString;
  desc?: LocaleText;
}

export interface HeroSection {
  tag?: LocaleString;
  title?: LocaleText;
  titleEmphasis?: LocaleString;
  subtitle?: LocaleText;
  ctas?: Cta[];
  photo?: SanityImage;
  badgeValue?: LocaleString;
  badgeLabel?: LocaleText;
}

export interface AboutSection {
  label?: LocaleString;
  title?: LocaleText;
  titleEmphasis?: LocaleString;
  subtitle?: LocaleText;
  quote?: LocaleText;
  photo?: SanityImage;
  photoBadge?: LocaleString;
  certs?: string[];
  stats?: Stat[];
}

export interface ParadigmSection {
  label?: LocaleString;
  title?: LocaleText;
  titleEmphasis?: LocaleString;
  pillars?: Pillar[];
}

export interface ProductsSection {
  label?: LocaleString;
  title?: LocaleText;
  titleEmphasis?: LocaleString;
  subtitle?: LocaleText;
  cards?: ProductCard[];
}

export interface PreviewSection {
  label?: LocaleString;
  title?: LocaleText;
  titleEmphasis?: LocaleString;
  subtitle?: LocaleText;
  cards?: PreviewCard[];
}

export interface HabitsSection {
  label?: LocaleString;
  title?: LocaleText;
  titleEmphasis?: LocaleString;
  quote?: LocaleText;
  tips?: LocaleText[];
}

export interface TimelineSection {
  label?: LocaleString;
  title?: LocaleText;
  titleEmphasis?: LocaleString;
  steps?: TimelineStep[];
}

export interface CtaSection {
  label?: LocaleString;
  title?: LocaleText;
  titleEmphasis?: LocaleString;
  subtitle?: LocaleText;
  cta?: Cta;
}

export interface LandingPage {
  _id: string;
  _type: 'landingPage';
  hero?: HeroSection;
  about?: AboutSection;
  paradigm?: ParadigmSection;
  products?: ProductsSection;
  preview?: PreviewSection;
  habits?: HabitsSection;
  timeline?: TimelineSection;
  cta?: CtaSection;
}

export interface SiteSettings {
  _id: 'siteSettings';
  _type: 'siteSettings';
  title?: LocaleString;
  description?: LocaleText;
  ogImage?: SanityImage;
  nav?: Array<{ label: LocaleString; href: string }>;
}
