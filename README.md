# corneliadeathdoula - website

![The home page](docs/screenshot-home.png)

A small static site for Cornelia, death doula. Astro, no database, no build
server, no CMS. Five pages, deployed as plain files.

Read [`WHY.md`](WHY.md) first for what it is for, and
[`HOW-TO-EDIT.md`](HOW-TO-EDIT.md) for the non-technical version of everything
below. Outstanding blanks are in
[`NEEDED-FROM-CORNELIA.md`](NEEDED-FROM-CORNELIA.md).

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # -> dist/
npm run preview    # serve the built site
```

## Where things are

| Path | What it is |
|---|---|
| `content/site.json` | Every fact: name, town, email, phone, drop-in times, crisis numbers. One place. |
| `content/pages/*.md` | One markdown file per page. The words. |
| `src/pages/index.astro` | The home page (hero, cards, pull quote - all driven by `home.md` frontmatter). |
| `src/pages/[slug].astro` | Every other page, rendered from its markdown file. |
| `src/components/` | Header, footer, and the small blocks the pages switch on. |
| `src/styles/global.css` | The entire design. Colours and type are tokens on `:root`. |
| `public/` | Favicon, robots.txt, and any images. |

**Adding a page** means adding a markdown file to `content/pages/` with `slug`,
`title` and `order` in its frontmatter, then adding it to `nav` in
`content/site.json` if it should appear in the menu. No code change.

## Deploying

The build output in `dist/` is static files - it will run anywhere. Two easy
options:

**Cloudflare Pages or Netlify (recommended for Cornelia).** Connect the GitHub
repo, build command `npm run build`, output directory `dist`. Point the domain
at it in their dashboard. Every push deploys itself, so if she asks an AI to
change a word and it pushes, the site updates.

**GitHub Pages (what it runs on now).** Every push to `main` deploys to
<https://krisrandall.github.io/cornelia-death-doula/> through
`.github/workflows/deploy.yml`. Because that address has a sub-path, the
workflow builds with `SITE_BASE=/cornelia-death-doula`; `astro.config.mjs` puts
that prefix on every root link, including the ones in the markdown. When her own
domain goes on, delete the two `SITE_` lines from the workflow, add a
`public/CNAME` containing the bare domain, and point the DNS at GitHub.

Before either: set `url` in `content/site.json` to the real domain, or the
canonical links and social previews will point at `example.com`.

## Deliberate omissions

- **No contact form.** A form needs a backend, a spam defence and somewhere for
  submissions to land - and a `mailto:` link works today. If a form is wanted
  later, Formspree or Netlify Forms is a twenty-minute job.
- **No analytics.** Nothing on this site tracks anybody. That is a reasonable
  default for a site about dying. Plausible or Fathom can be added in
  `src/layouts/Base.astro` if she ever wants numbers.
- **No cookie banner**, because there are no cookies.
- **One external request**, for the EB Garamond webfont. Everything else is
  self-hosted.
