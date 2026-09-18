// @ts-check
import { defineConfig } from 'astro/config';
import site from './content/site.json' with { type: 'json' };

// `site.url` lives in content/site.json so there is one place to change it
// when the real domain is pointed at this site.
export default defineConfig({
  site: site.url,
  trailingSlash: 'ignore',
  markdown: {
    smartypants: true,
  },
});
