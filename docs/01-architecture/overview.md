# Architecture overview

A short guide for any developer who picks this project up.

## Stack

- Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 3
- Pages are generated at build time. There is no database and no CMS.
- One server action sends enquiry email through the Resend REST API.
- Hosting on Vercel. GitHub Actions runs checks. Dependabot proposes updates.

## How content works

All wording and settings live in typed files under `src/config/`. Page templates read from
them, so a content change is a small edit to one file and the menu, footer, sitemap and forms
follow automatically.

| Content         | File                       | Generates                                |
| --------------- | -------------------------- | ---------------------------------------- |
| Services        | `src/config/services.ts`   | `/services`, `/services/[slug]`, menus   |
| Industries      | `src/config/industries.ts` | `/industries`, `/industries/[slug]`      |
| Success stories | `src/config/stories.ts`    | `/success-stories`, home and page cards  |
| About           | `src/config/about.ts`      | `/about`, home "Why QCSV"                |
| Home page       | `src/config/home.ts`       | Hero slides, tiles, industries, FAQs     |
| Legal           | `src/config/legal.ts`      | `/privacy`, `/terms`                     |
| Site settings   | `src/config/site.ts`       | Name, address, contact, indexing, banner |

## Enquiry flow

```text
Visitor fills the form (popup or home page)
  -> server action (src/app/actions/enquiry.ts)
       1. hidden trap field filled? stop quietly
       2. validate every field (src/lib/enquiry.ts)
       3. minimum fill time, then per-visitor limit (5 per hour)
       4. check email settings exist
       5. POST to Resend: from CONTACT_FROM_EMAIL, to CONTACT_TO_EMAIL, reply-to visitor
  -> visitor sees a success message, or a message with the mailbox address if sending failed
```

Nothing is stored. The rate limit is held in memory per server instance, so it slows casual
abuse but is not a hard guarantee.

## Layout and styling

- Header: transparent over a photo hero, solid after scrolling. Pages with a hero pass `overlay`.
- Theme: light by default with a dark toggle. Colours are CSS variables in `src/app/globals.css`.
- Scroll reveal and the hero slideshow respect "reduce motion" and never hide content without
  JavaScript.
- The `Logo` component chooses the right logo file for the background and theme.

## Search and sharing

- Each page sets title, description and canonical link. Sitemap, robots, manifest and icons come
  from files in `src/app/`.
- Indexing is controlled by `NEXT_PUBLIC_ALLOW_INDEXING` and the production check in
  `src/config/site.ts`.
- Organisation structured data is added in `src/app/layout.tsx`.

## Security

- Headers set in `next.config.ts`: no-sniff, frame, referrer, permissions, HSTS.
- A Content-Security-Policy runs in report-only mode first. Check the browser console on the
  live site, then switch the header name to `Content-Security-Policy` to enforce it.
- No secrets in the repository. Email settings are environment variables.
- Forms: validation, trap field, minimum fill time and rate limiting, all on the server.

## Decisions and trade-offs

| Decision                           | Why                                                          |
| ---------------------------------- | ------------------------------------------------------------ |
| Content in typed config, no CMS    | Small site, few edits, no extra service to pay for or secure |
| Resend REST call, no SDK           | One fewer dependency to keep updated                         |
| One About page with sections       | The four small pages held little; one page reads better      |
| Popup form on every call to action | Visitors keep their place on the page                        |
| Compact logo in the header         | The tagline is unreadable at header size                     |
| `next build --webpack`             | Chosen early in the project; revisit when upgrading Next.js  |

## Known limits

- Logo artwork is traced from a small board image. A designer's master vector would be cleaner.
- The in-memory rate limit resets when the server restarts. Add Cloudflare Turnstile if spam appears.
- Legal pages are drafts reviewed by the client, not by a lawyer.
