import type { Locale, LocaleString, LocaleText } from '@/types/sanity';

export const DEFAULT_LOCALE: Locale = 'es';

export function t(
  field: LocaleString | LocaleText | undefined,
  locale: Locale = DEFAULT_LOCALE,
  fallback: Locale = 'en',
): string {
  if (!field) return '';
  return field[locale] ?? field[fallback] ?? '';
}
