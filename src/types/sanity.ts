import type { PortableTextBlock } from '@portabletext/types';

export interface SanitySlug {
  _type: 'slug';
  current: string;
}

export interface SanityImage {
  _type: 'image';
  asset: { _ref: string; _type: 'reference' };
  alt?: string;
}

export interface Author {
  _id: string;
  _type: 'author';
  name: string;
  bio?: PortableTextBlock[];
  photo?: SanityImage;
  socialLinks?: Array<{ label: string; url: string }>;
}

export interface Chapter {
  _id: string;
  _type: 'chapter';
  title: string;
  slug: SanitySlug;
  order: number;
  body: PortableTextBlock[];
  summary?: string;
}

export interface Book {
  _id: string;
  _type: 'book';
  title: string;
  subtitle?: string;
  author?: Author;
  coverImage?: SanityImage;
  description?: PortableTextBlock[];
  chapters: Chapter[];
}

export interface SiteSettings {
  _id: 'siteSettings';
  _type: 'siteSettings';
  title: string;
  description?: string;
  ogImage?: SanityImage;
  nav?: Array<{ label: string; href: string }>;
}
