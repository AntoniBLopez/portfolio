# Personal Portfolio

Bilingual (English / Spanish) portfolio for a full-stack developer, doubling as a
sales site for two service lines: web development and AI business automation.

Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4 and
`next-intl`.

## Getting started

```bash
pnpm install
cp .env.example .env.local   # optional, only needed for the contact form
pnpm dev
```

Open http://localhost:3000 — you will be redirected to `/en` or `/es` based on
your browser language.

## Scripts

| Command            | Purpose                                  |
| ------------------ | ---------------------------------------- |
| `pnpm dev`         | Development server                       |
| `pnpm build`       | Production build                         |
| `pnpm start`       | Serve the production build               |
| `pnpm lint`        | ESLint                                   |
| `pnpm exec tsc --noEmit` | Type check without emitting output |

## Making it yours

Almost everything you need to change lives in **one file**:

### `src/config/`

Canonical contact and social details. Import from `@/config` — do not hardcode
them in components:

- `contact.email` / `mailto` — from `src/config/contact.ts`
- `links` / `socialLinks` — GitHub, LinkedIn, Fiverr from `src/config/links.ts`
- `images.portrait` — from `src/config/images.ts`

### `src/content/site.ts`

Search it for `TODO`. It holds your name, role, location, booking link,
production domain, work history, all six project case studies, and both service
offerings with their packages, process steps and FAQs. Email and social URLs are
pulled from `src/config/`. Every visitor-facing string is a `{ en, es }` pair.

The values you must replace before going live:

- `profile.name`, `profile.initials`, `profile.location`
- `profile.calendarUrl`
- `profile.url` — your real domain, used for canonical URLs, sitemap and JSON-LD
- `experience[]` — your real roles, dates and outcomes
- `projects[].metrics` — the numbers are illustrative placeholders
- `services[].packages[].price` — confirm these match what you actually sell
- `roiExample` — the figures behind the savings calculation on the AI page

### `messages/en.json` and `messages/es.json`

UI chrome only: navigation labels, button text, section headings, form labels
and validation messages, plus page titles and meta descriptions under
`Metadata`.

### Project images

Project cards and case studies currently render an icon on a gradient instead of
a screenshot, so the site looks intentional while placeholders are in place. To
use real screenshots, drop images into `public/` and replace the `ProjectVisual`
component in `src/components/project-card.tsx` with `next/image`.

### CV download

`profile.resumeUrl` points at `/cv.pdf`. Add that file to `public/` if you want
to link to it.

## Contact form

The form posts to a server action in `src/app/actions/contact.ts`, which
validates with Zod and delivers through [Resend](https://resend.com).

1. Create a free Resend account and an API key.
2. Put it in `.env.local` as `RESEND_API_KEY`.
3. Set `CONTACT_TO_EMAIL` if you want enquiries somewhere other than
   `profile.email`.

Until the key exists the form returns a clear "email delivery is not configured"
message and the page still offers the booking link and a direct `mailto:`.

The action includes a honeypot field and a per-instance rate limit of three
submissions per minute per IP. On a serverless platform with many instances that
limit is best-effort; move it to a shared store (for example Upstash Redis) if
you start getting abuse.

## Project structure

```
messages/            en.json / es.json — UI strings
src/
  app/
    [locale]/        All pages; this layout is the root layout
      page.tsx       Landing page
      projects/      Index and [slug] case studies
      services/      web-development and ai-automation
      opengraph-image.tsx
      not-found.tsx
    actions/         Server actions
    sitemap.ts       Localised sitemap with hreflang alternates
    robots.ts
    globals.css      Design tokens and theme palettes
  components/
    sections/        Landing page sections
    service/         Building blocks shared by both service pages
    ui/              Primitives: Button, Card, Badge, Section, Reveal, Icon
  content/site.ts    All personal and commercial content
  i18n/              next-intl routing, navigation and request config
  lib/               cn(), SEO helpers, contact schema
  proxy.ts           Locale negotiation (called middleware.ts before Next.js 16)
```

## Internationalisation notes

Routing is prefix-based: `/en/...` and `/es/...`. Adding a locale means adding it
to `src/i18n/routing.ts`, creating `messages/<locale>.json`, and adding the third
value to every `{ en, es }` pair in `src/content/site.ts`.

Two version-specific details worth remembering:

- Next.js 16 renamed `middleware.ts` to `proxy.ts`.
- `next-intl` v4 requires `getRequestConfig` to return an explicit `locale`.

Missing either one produces "Unable to find next-intl locale".

## Theming

The palette is defined as CSS custom properties in `src/app/globals.css`, with
dark as the default and a light variant under `[data-theme="light"]`. The blue
ramp is `--color-brand-50` through `--color-brand-950`; change those to rebrand
the whole site.

Theme choice is stored in `localStorage` and applied by an inline script in
`<head>` before first paint, so there is no flash on load.

## Accessibility

- Skip-to-content link, semantic landmarks and a single `h1` per page
- Visible focus rings on every interactive element
- The FAQ uses native `<details>`, so it works without JavaScript
- All animation respects `prefers-reduced-motion`

## Deploying

The site is fully static apart from the contact action, so any Node host works.
On Vercel: import the repository, add the environment variables from
`.env.example`, and deploy. Set `profile.url` to the final domain first so
canonical URLs, `hreflang` tags and the sitemap are correct.
