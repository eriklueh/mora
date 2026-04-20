import groq from 'groq';

export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings" && _id == "siteSettings"][0]{
    title,
    description,
    ogImage,
    nav
  }
`;

export const BOOK_QUERY = groq`
  *[_type == "book"][0]{
    _id,
    _type,
    title,
    subtitle,
    description,
    coverImage,
    author->{_id, _type, name, bio, photo, socialLinks},
    "chapters": chapters[]->{
      _id,
      _type,
      title,
      slug,
      order,
      summary
    } | order(order asc)
  }
`;

export const ALL_CHAPTER_SLUGS_QUERY = groq`
  *[_type == "chapter" && defined(slug.current)].slug.current
`;

export const CHAPTER_BY_SLUG_QUERY = groq`
  *[_type == "chapter" && slug.current == $slug][0]{
    _id,
    _type,
    title,
    slug,
    order,
    summary,
    body
  }
`;
