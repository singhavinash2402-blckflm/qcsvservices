# QCSV Services website

Website for QCSV Services Private Limited: validation, quality and regulated-systems
support for pharmaceutical and life sciences organisations.

- Live site: https://www.qcsvservices.in
- Repository: https://github.com/singhavinash2402-blckflm/qcsvservices

## 1. Positioning

The site presents QCSV as a pharma-focused validation and quality partner. It does not
claim certifications, approvals, named clients, awards or measurable results that the
client has not supplied. See "Content rules" below before adding any wording.

## 2. Technology

- Next.js 16 (App Router) with React 19 and TypeScript
- Tailwind CSS 3, `next-themes` (light default, dark toggle), `lucide-react`
- Enquiry email through the Resend REST API, called from a server action
- Vercel hosting, GitHub Actions CI, Dependabot updates
- The build uses webpack on purpose (`next build --webpack`)

## 3. Getting started

Requires Node.js 22 or newer.

```bash
npm ci
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

| Command                | What it does                                                  |
| ---------------------- | ------------------------------------------------------------- |
| `npm run dev`          | Start the development server                                  |
| `npm run build`        | Production build (also clears stale dev types, checks images) |
| `npm run typecheck`    | TypeScript check                                              |
| `npm run lint`         | ESLint                                                        |
| `npm run format:check` | Prettier check (CI runs this)                                 |
| `npm run format`       | Prettier write                                                |
| `npm run check:images` | List image paths used in code that are missing from `public`  |
| `npm run clean`        | Delete the `.next` folder                                     |

Before opening a pull request run `npm run typecheck && npm run lint && npm run format:check && npm run build`.
If a build fails with type errors about pages that no longer exist, run `npm run clean`.

## 4. Environment variables

Copy `.env.example` to `.env.local`. On Vercel, set the same names for Production and Preview.

| Name                         | Purpose                                                                         |
| ---------------------------- | ------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`       | Main public address, used for canonical links and the sitemap                   |
| `NEXT_PUBLIC_ALLOW_INDEXING` | `true` lets search engines index the production site. Any other value blocks it |
| `RESEND_API_KEY`             | Resend key with sending access                                                  |
| `CONTACT_TO_EMAIL`           | Mailbox that receives enquiries                                                 |
| `CONTACT_FROM_EMAIL`         | Sender address on the domain verified in Resend                                 |

Never commit real values. Email setup steps are in `docs/06-operations/email-setup.md`.

## 5. Where to edit things

Almost all wording lives in typed files under `src/config/`, not inside page components.

| To change                                      | Edit                                                                               |
| ---------------------------------------------- | ---------------------------------------------------------------------------------- |
| Company name, contact details, site address    | `src/config/site.ts`                                                               |
| Announcement bar above the menu                | `announcement` in `src/config/site.ts`                                             |
| The 12 services (text, groups, FAQs, images)   | `src/config/services.ts`                                                           |
| Industries                                     | `src/config/industries.ts`                                                         |
| Success stories                                | `src/config/stories.ts`                                                            |
| About page text                                | `src/config/about.ts`                                                              |
| Home page hero slides, tiles, industries, FAQs | `src/config/home.ts`                                                               |
| Privacy Policy and Terms of Use                | `src/config/legal.ts`                                                              |
| Page layouts                                   | `src/components/` and `src/app/`                                                   |
| Enquiry form and email                         | `src/components/consultation/`, `src/app/actions/enquiry.ts`, `src/lib/enquiry.ts` |

Service and industry pages are generated from the config, so adding a service means adding
one entry in `src/config/services.ts` (the menu, footer, sitemap and forms update themselves).

## 6. Project structure

```text
src/
  app/            routes, metadata, sitemap, robots, manifest, icons
  components/
    consultation/ popup, form and button for enquiries
    industries/   industry page template
    layout/       header, footer, logo, navigation, announcement bar
    sections/     home page sections
    services/     service page template and framework diagrams
    shared/       hero, call-to-action band, story cards
    ui/           small reusable controls
  config/         all site content and settings (see section 5)
  lib/            enquiry validation and email text
public/
  brand/          logo files (SVG)
  icons/          app icons
  images/         photography
scripts/          prebuild checks
docs/             content, design and operations notes
```

## 7. Images and brand

- Photography lives in `public/images/`. Keep each file under about 400 KB (2000 px wide, JPEG).
- Service photos are named after the service slug, for example `public/images/services/sap-services.jpg`.
- Logo files are in `public/brand/`: full logo, a compact version without the tagline (used in the
  header), light and dark versions, and one-colour versions. The `Logo` component picks the right one.
- Record each image's source and licence in `docs/05-design/asset-register.md`.

## 8. Search engines and sharing

- `NEXT_PUBLIC_ALLOW_INDEXING` must be `true` for the sitemap to be offered and pages to be indexable.
- Every page sets a canonical link, title and description. Social sharing uses `public/og-default.jpg`.
- `/sitemap.xml` is generated from the config, so it stays current when services change.

## 9. Branches, CI and deployment

- Work on a feature branch and open a pull request into `main`.
- CI (`.github/workflows/ci.yml`) runs typecheck, lint, format check and build on every pull request.
- Vercel builds a preview for each pull request and deploys `main` to production.
- Dependabot opens weekly update pull requests. Check CI is green before merging.

## 10. Content rules

- Client-provided material is the source of truth. Keep wording original and plain.
- Do not claim certifications, approvals (for example ISO, FDA), partnerships, awards, named
  clients, quantified results or guarantees unless the client confirms them in writing.
- Statements about how QCSV works, and the legal pages, must be confirmed by the client before launch.
- Keep QCSV company information separate from any personal project or employment details.

## 11. Open items

- Client to confirm contact details, the legal pages and wording marked for confirmation.
- Photo sources and licences still to be recorded in the asset register.
- Move hosting and the repository to client-owned accounts (see the handover notes).
- Browser tests, accessibility check and performance check.
