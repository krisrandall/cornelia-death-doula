# Cornelia - death doula website

Read [`WHY.md`](WHY.md) before changing anything here. The short version: this
is a five-page static Astro site whose real constraint is that **Cornelia must
be able to change it herself by talking to an AI**. Keep it that way.

## The rules of this repo

1. **Words go in `content/`, never in `.astro` files.** Page prose lives in
   `content/pages/*.md`; every fact (email, town, times, phone, crisis numbers)
   lives in `content/site.json`. If you find yourself typing a sentence into a
   component, you are in the wrong file.
2. **Write in her voice, not in brochure.** The copy came from a recorded
   conversation, and the instruction at the time was explicit: use her exact
   words wherever they exist. Plain, direct, unsentimental, no euphemism for
   dying. If you need new words about something she has not spoken about, say so
   rather than inventing a feeling she has not expressed.
3. **Never claim a qualification.** She has a death doula certificate from a
   course through Denise Love. She is not a nurse, doctor, counsellor,
   psychologist, chaplain or funeral director, and the About page says so. Do
   not soften that.
4. **Never state the law as fact.** Home vigils, keeping a body at home,
   transporting a body, burial and shroud rules all vary by Australian state.
   The site says it depends on where you are and that finding out is part of her
   job. Keep that hedge.
5. **No tracking, no cookies, no forms that collect anything.** If a contact form
   is ever added, it collects a name, an email and a message, and nothing else.
6. **Blank means hidden.** Empty values in `site.json` switch their block off
   rather than rendering an empty line. Preserve that when adding fields
   (`has()` in `src/site.ts`).

## Layout

- `content/site.json` - the facts. Also carries `_todo_*` keys for the blanks.
- `content/pages/*.md` - one file per page; frontmatter drives the structured
  bits of the home page (hero, cards, pull quote, closing band).
- `src/content.config.ts` - the schema for that frontmatter.
- `src/pages/[slug].astro` - renders every page but home. A new markdown file
  becomes a new page with no code change.
- `src/styles/global.css` - the whole design, as tokens on `:root`. One left
  edge shared by the masthead, hero and body text; light and dark themes.

## Commands

```bash
npm run dev      # http://localhost:4321
npm run build    # -> dist/
```

A build failure is usually YAML frontmatter: indented list markers must be
`- `, and the em-dash pass that was run over the content once before is happy to
eat them.

## Open blanks

[`NEEDED-FROM-CORNELIA.md`](NEEDED-FROM-CORNELIA.md) is the live list - domain,
email, town, photo, the story about her dad, the fourth drop-in hour. Do not
invent values for any of them.
