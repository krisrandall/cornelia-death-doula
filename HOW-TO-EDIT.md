# Changing your own website

Cornelia - this is for you. You do not need to understand any of the code, and
you cannot break the site in a way that cannot be undone.

## The short version

Everything you would ever want to change lives in **two places**:

1. **`content/site.json`** - your facts. Your email, your phone number, your
   town, the drop-in times, what is in the menu.
2. **`content/pages/`** - your words. One file per page:
   - `home.md` - the front page
   - `about.md` - about you
   - `how-i-can-help.md` - what you offer
   - `drop-in-hours.md` - the free hours and the death café
   - `contact.md` - how to reach you

Everything else is plumbing.

## Changing words

Open the file, change the words, save. That is genuinely all. The text is plain
English with a few marks in it:

```
## A heading on the page

Just a normal paragraph. A blank line starts a new one.

> A quote. These come out big and set apart - good for the lines you most
> want people to read.

- a bullet
- another bullet

[words people click](/contact)
```

## Talking to an AI instead

This is the way it was built for. Open the folder with Claude Code and say
something like:

> On the about page, replace the training paragraph with this: *(paste what you
> want it to say)*

or

> Add a new section to How I can help, about sitting with families overnight.

or

> My email is cornelia@example.com - put it on the site.

or

> Change Thursday's drop-in hour to 6pm.

You can also just talk. If it is easier to say a thing out loud than to type it,
record a voice memo, and ask the AI to turn it into a paragraph in your voice -
that is how most of the words on this site got written in the first place.

**One rule for the AI:** the words on this site should sound like you, not like
a brochure. If something comes back sounding smooth and empty, say *"that
doesn't sound like me, here is how I would say it"* and paste your version. Your
version is almost always better.

## Seeing your changes before anyone else does

```
npm run dev
```

Then open http://localhost:4321 in a browser. It updates as you save. Press
`Ctrl+C` in the terminal to stop it.

## Putting the changes live

```
git add -A
git commit -m "changed the drop-in hours"
git push
```

Or ask the AI to do it: *"save this and put it live"*. The site rebuilds itself
a minute or two later.

## Things to be careful about

- **`content/site.json` is fussy about punctuation.** Every line needs its
  commas and quote marks exactly where they are. If you break it the site will
  refuse to build - which is the good outcome, because nothing goes live broken.
  Ask the AI to fix it.
- **Don't delete `slug:` or `title:`** from the top of a page file. They are how
  the page knows its own address.
- **Anything wrapped in `<!--` and `-->` is invisible** on the real site. There
  is a note like that in `about.md` waiting for the story about your dad -
  delete those two markers and it appears.

## If you break something

Nothing is lost - every previous version is kept. Ask the AI to *"undo my last
change"*, or run `git checkout .` to throw away everything you have changed
since the last save.
