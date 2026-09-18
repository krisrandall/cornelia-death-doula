# Still needed before this site goes live

Nothing here is a code problem. These are the things only Cornelia can answer.
Each one is one line in a file, and the site works without them - it just gets
better with them.

## Blocking - the site should not be published without these

- [ ] **An email address** for the site. Anything else on the page is decoration
      if there is no way to get in touch. → `email` in `content/site.json`
- [ ] **The domain**, which she already owns. → `url` in `content/site.json`
- [ ] **Insurance.** Not a website field, but the other of the two things she
      named as the precursors to starting. The site invites people to make
      contact; that invitation should not go out first.

## Nearly blocking

- [ ] **The town**, and the area she will travel to. → `town` and `region` in
      `content/site.json`. Leave them blank and the site simply never mentions a
      place, which is worse than saying it plainly.
- [ ] **Does she want her surname on the site?** → `fullName`
- [ ] **A phone number, or not.** → `phone`. Blank means it is not shown
      anywhere, which is a perfectly good answer.
- [ ] **Confirm the training wording.** The About page currently says: *"I
      trained as a death doula through Denise Love, at a course in Hervey Bay
      earlier this year, and I hold a death doula certificate."* That is what
      she said in the conversation, but a public claim about a qualification
      should be checked word for word against the certificate.

## Makes the site much better

- [ ] **A photograph of her.** People decide whether to trust a death doula from
      her face. → drop it in `public/images/` (see the note in that folder).
- [ ] **The story about her dad**, and how it turned into this work. There is a
      hidden placeholder waiting for it in `content/pages/about.md`.
- [ ] **The fourth drop-in hour.** Three are in the site (Mon 9am, Thu 7.30pm,
      Fri 2pm); a fourth was set aside in the planning conversation but never
      landed on a time. → `dropIn.times`
- [ ] **The hospital.** Once the Down Under room is agreed, put the hospital's
      real name in `dropIn.place` and set `dropIn.confirmed` to `true`. The page
      currently tells people the place is still being settled.
- [ ] **Whose Country.** The acknowledgement in the footer is generic until we
      know the town. → `acknowledgement`

## Worth deciding, but later

- [ ] **Prices.** The site says the first conversation is free, that she charges
      beyond that, and that she will always say the cost up front - and names no
      figures. That is a defensible choice for now. If she would rather publish
      a rate, it goes in the "What it costs" section of `how-i-can-help.md`.
- [ ] **A contact form**, instead of the email link. See README.
- [ ] **Stories from people she has sat with.** She named this herself as the
      thing that would carry the most weight - *"I wish we'd had access to this
      sort of a service."* Worth asking for one, in writing, the first time
      someone says it to her.
