// @ts-check
import { defineConfig } from 'astro/config';
import site from './content/site.json' with { type: 'json' };

// Where the site is served from. On its own domain this is simply "/".
// While it is hosted at krisrandall.github.io/cornelia-death-doula/ the GitHub
// workflow sets SITE_BASE and SITE_URL; nothing else needs to know.
const base = process.env.SITE_BASE ?? '/';
const prefix = base.replace(/\/$/, '');

/**
 * Strips editor's notes, and fixes links for the sub-path.
 *
 * Links in the markdown are written from the site root ("/contact"), which is
 * how Cornelia should keep writing them. When the site lives under a sub-path
 * this puts the sub-path in front, at build time.
 */
function rehypeBaseLinks() {
  /** @param {any} node */
  const visit = (node) => {
    if (node.type === 'element') {
      const attr = node.tagName === 'a' ? 'href' : node.tagName === 'img' ? 'src' : null;
      const value = attr && node.properties?.[attr];
      if (prefix && typeof value === 'string' && value.startsWith('/') && !value.startsWith('//')) {
        node.properties[attr] = prefix + value;
      }
    }
    if (node.children) {
      // Notes left in <!-- comments --> are for whoever edits the file, not for
      // the public page source.
      node.children = node.children.filter(
        /** @param {any} child */ (child) =>
          child.type !== 'comment' &&
          !(child.type === 'raw' && /^\s*<!--[\s\S]*-->\s*$/.test(child.value)),
      );
      node.children.forEach(visit);
    }
  };
  return /** @param {any} tree */ (tree) => visit(tree);
}

export default defineConfig({
  site: process.env.SITE_URL ?? site.url,
  base,
  trailingSlash: 'ignore',
  markdown: {
    smartypants: true,
    // Always on (a no-op when there is no sub-path), so every build renders
    // markdown through the same processor.
    rehypePlugins: [rehypeBaseLinks],
  },
});
