# j3tus.github.io

Personal portfolio, served on the custom domain in `CNAME`.

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
