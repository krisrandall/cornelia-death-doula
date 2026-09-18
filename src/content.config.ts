import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const action = z.object({
  label: z.string(),
  href: z.string(),
  primary: z.boolean().optional(),
});

/**
 * Every page on the site is one markdown file in `content/pages/`.
 * The words live there; this file only describes what shape they can take.
 */
const pages = defineCollection({
  loader: glob({ base: './content/pages', pattern: '**/*.md' }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string().optional(),
    order: z.number().default(99),
    intro: z.string().optional(),

    // Home page only.
    hero: z
      .object({
        line: z.string(),
        intro: z.string(),
        actions: z.array(action).default([]),
      })
      .optional(),
    ways: z
      .object({
        heading: z.string(),
        items: z.array(
          z.object({
            title: z.string(),
            body: z.string(),
            href: z.string().optional(),
            linkLabel: z.string().optional(),
          }),
        ),
      })
      .optional(),
    pull: z.object({ quote: z.string() }).optional(),
    closing: z
      .object({
        heading: z.string(),
        body: z.string(),
        action: action.optional(),
      })
      .optional(),

    // Switches for the blocks that are built from content/site.json.
    showDropInTimes: z.boolean().default(false),
    showContactDetails: z.boolean().default(false),
  }),
});

export const collections = { pages };
