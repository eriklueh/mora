#!/usr/bin/env node
// Parses legacy/mora_ebook_v4.html into legacy/parsed-chapters.json.
// The source HTML is a single-page landing built from <section> blocks rather
// than traditional book chapters, so this script treats each top-level
// <section> as one chapter and uses the first heading inside it as the title.
//
// Assumes no nested <section> elements (verified in the current source).

import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const INPUT = resolve(ROOT, 'legacy/mora_ebook_v4.html');
const OUTPUT = resolve(ROOT, 'legacy/parsed-chapters.json');

const SECTION_RE = /<section\b([^>]*)>([\s\S]*?)<\/section>/g;
const HEADING_RE = /<h([1-3])\b[^>]*>([\s\S]*?)<\/h\1>/;
const ATTR_RE = (name) => new RegExp(`${name}="([^"]*)"`, 'i');

function stripTags(html) {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getAttr(attrs, name) {
  const m = attrs.match(ATTR_RE(name));
  return m ? m[1] : undefined;
}

function firstHeading(html) {
  const m = html.match(HEADING_RE);
  if (!m) return undefined;
  // Heading may contain <span class="es">…</span><span class="en">…</span> for i18n.
  // Prefer the Spanish version if present, otherwise fall back to stripped text.
  const esMatch = m[2].match(/<span\s+class="es"[^>]*>([\s\S]*?)<\/span>/i);
  return stripTags(esMatch ? esMatch[1] : m[2]);
}

async function main() {
  const html = await readFile(INPUT, 'utf8');
  const chapters = [];

  let order = 1;
  for (const match of html.matchAll(SECTION_RE)) {
    const [, attrs, inner] = match;
    const sectionId = getAttr(attrs, 'id');
    const sectionClass = getAttr(attrs, 'class');
    const title = firstHeading(inner) ?? sectionId ?? `section-${order}`;
    chapters.push({
      order,
      title,
      sectionId,
      sectionClass,
      html: inner.trim(),
    });
    order += 1;
  }

  await writeFile(OUTPUT, JSON.stringify(chapters, null, 2), 'utf8');
  console.log(`Parsed ${chapters.length} section(s) -> ${OUTPUT}`);
  for (const c of chapters) {
    console.log(`  #${c.order}  ${c.title}  [${c.sectionId ?? '-'}]`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
