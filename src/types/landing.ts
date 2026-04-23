export type Locale = 'es' | 'en';

export interface LocaleString {
  es: string;
  en: string;
}

export interface Cta {
  label: LocaleString;
  href: string;
  variant?: 'primary' | 'outline';
}

export interface NavLink {
  label: LocaleString;
  href: string;
}

export interface Stat {
  num: LocaleString;
  label: LocaleString;
}

export interface Pillar {
  num: string;
  title: LocaleString;
  desc: LocaleString;
}

export interface Include {
  text: LocaleString;
}

export interface ProductCard {
  slug: string;
  stripePriceId: string;
  level: LocaleString;
  name: LocaleString;
  desc: LocaleString;
  includes: LocaleString[];
  price: string;
  photoVariant: 'rose' | 'lilac' | 'sand';
  photoLabel: LocaleString;
  ctaLabel: LocaleString;
  featured?: boolean;
  featuredLabel?: LocaleString;
  levelColor?: string;
}

export interface Bundle {
  stripePriceId: string;
  badge: LocaleString;
  title: LocaleString;
  desc: LocaleString;
  includes: LocaleString[];
  priceStrike: LocaleString;
  priceLabel: LocaleString;
  priceSuffix: LocaleString;
  ctaLabel: LocaleString;
}

export interface PreviewDay {
  text: LocaleString;
}

export interface PreviewCard {
  stripePriceId: string;
  level: LocaleString;
  name: LocaleString;
  meta: LocaleString[];
  days: LocaleString[];
  extra: LocaleString;
  ctaLabel: LocaleString;
  variant: 'rose' | 'lilac' | 'sand';
  featured?: boolean;
  levelColor?: string;
}

export interface HabitTip {
  text: LocaleString;
}

export interface TimelineStep {
  dot: '1' | '2' | '3' | '4';
  time: LocaleString;
  title: LocaleString;
  desc: LocaleString;
}

export interface Hero {
  tag: LocaleString;
  title: LocaleString;
  titleEmphasis: LocaleString;
  subtitleLines: LocaleString[];
  ctas: Cta[];
  badge: {
    value: string;
    valueSuffix: LocaleString;
    label: LocaleString;
  };
  photoLabel: LocaleString;
}

export interface About {
  label: LocaleString;
  title: LocaleString;
  titleEmphasis: LocaleString;
  subtitleLines: LocaleString[];
  quote: LocaleString;
  certs: string[];
  stats: Stat[];
  photoLabel: LocaleString;
  photoBadge: LocaleString;
}

export interface Paradigm {
  label: LocaleString;
  title: LocaleString;
  titleEmphasis: LocaleString;
  pillars: Pillar[];
}

export interface Products {
  label: LocaleString;
  title: LocaleString;
  titleEmphasis: LocaleString;
  subtitle: LocaleString;
  cards: ProductCard[];
  bundle: Bundle;
}

export interface Preview {
  label: LocaleString;
  title: LocaleString;
  titleEmphasis: LocaleString;
  subtitle: LocaleString;
  cards: PreviewCard[];
}

export interface Habits {
  label: LocaleString;
  title: LocaleString;
  titleEmphasis: LocaleString;
  quote: LocaleString;
  tips: HabitTip[];
}

export interface Timeline {
  label: LocaleString;
  title: LocaleString;
  titleEmphasis: LocaleString;
  steps: TimelineStep[];
}

export interface FooterCta {
  label: LocaleString;
  title: LocaleString;
  titleEmphasis: LocaleString;
  subtitle: LocaleString;
  cta: Cta;
  signoff: string;
}

export interface Contact {
  whatsapp: string;
}

export interface LandingContent {
  meta: { title: string; description: LocaleString };
  contact: Contact;
  nav: { logo: string; links: NavLink[] };
  hero: Hero;
  about: About;
  paradigm: Paradigm;
  products: Products;
  preview: Preview;
  habits: Habits;
  timeline: Timeline;
  footerCta: FooterCta;
}
