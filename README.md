# j3tus.github.io

Personal portfolio. The live site is https://jetus.org (repo `j3tus/jetus.org`); this repo is also deployed on Vercel, and https://j3tus.github.io forwards to jetus.org.

## What is here

- `public/` holds the portfolio itself: a static page (`index.html`, `css/`, `js/`, `assets/`) with launch videos for each project.
- `next.config.mjs` serves that page at `/`, adds security headers and long-lived caching for versioned files, and redirects the old `/p/<project>` and `/r/<repo>` URLs to the matching panel on the home page.
- `src/app` is the original Next.js site. It is untouched and is no longer served at `/`.

## Rollback

The version before the redesign is saved as tag `backup-pre-cream-20261115` and branch `backup/pre-cream-20261115`.
To go back: `git revert` the redesign commit(s) on `main`, or reset `main` to that tag.

## Development

```bash
pnpm install
pnpm dev
```

## j3tus.github.io

`pages-redirect/` is published by `.github/workflows/pages.yml` and simply forwards visitors to https://jetus.org.
The old `CNAME` (`jetus.uk`) was removed on 2026-11-15: that domain no longer exists at the .uk registry, which made j3tus.github.io redirect to a dead address.
