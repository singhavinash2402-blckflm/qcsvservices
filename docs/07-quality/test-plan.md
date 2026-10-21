# Test plan and release checklist

## Automated checks

| Check              | Command / where                   | What it covers                                                    |
| ------------------ | --------------------------------- | ----------------------------------------------------------------- |
| Type check         | `npm run typecheck` (CI)          | TypeScript errors                                                 |
| Lint               | `npm run lint` (CI)               | Code rules                                                        |
| Format             | `npm run format:check` (CI)       | Consistent style                                                  |
| Build              | `npm run build` (CI)              | Every page builds                                                 |
| Browser tests      | `npm run test:e2e`                | Pages load, navigation, header, popup, form paths, 404, robots    |
| Accessibility scan | part of `test:e2e`                | Automated WCAG checks on key pages (needs `@axe-core/playwright`) |
| Screenshots        | `npm run test:screens`            | Full-page images, desktop and phone, for visual review            |
| Lighthouse         | Quality workflow on pull requests | Performance, accessibility, best practice, SEO scores (advisory)  |

Browser tests start their own server on port 3100 with email settings blanked, so they never
send a real email.

Run the browser tests against a normal build (made without the Lighthouse indexing variable).
First-time setup: `npm install -D @playwright/test @axe-core/playwright`, then
`npx playwright install --with-deps chromium`, then `npm run build && npm run test:e2e`.

## Manual checks before a release

Browsers and devices: Chrome and Edge (desktop), Safari (iPhone), Chrome (Android), Firefox.
Widths: 360, 768, 1024, 1440 px.

- [ ] Home hero images, text and buttons read clearly; header turns solid when scrolling
- [ ] Menu works by keyboard (Tab, Enter, Escape) and on a phone; no Home link in mobile menu
- [ ] Every "Request a consultation" opens the popup; Escape and the X close it; focus returns
- [ ] Inline contact form and popup both send; the email arrives; Reply goes to the visitor
- [ ] Dark mode: text readable, logo switches to the dark version, no white boxes
- [ ] Every service, industry and story page: copy proofread, images load, Read more links work
- [ ] Footer links, phone link, email link, privacy and terms pages
- [ ] Share a link in WhatsApp or LinkedIn: title, description and image appear
- [ ] Tab icon (favicon) shows; "Add to home screen" icon looks right
- [ ] View source: one h1 per page, canonical link points to the main address
- [ ] `robots.txt` and `sitemap.xml` match the intended indexing state
- [ ] Browser console has no errors or Content-Security-Policy complaints
- [ ] Lighthouse report reviewed; scores recorded in `CHANGELOG.md` notes

## Running Lighthouse on your computer

Lighthouse reads the page as search engines would, so the production build must allow
indexing. Use quotes so Windows does not add a trailing space to the value.

Command Prompt:

```bash
set "NEXT_PUBLIC_ALLOW_INDEXING=true" && npm run build && npx @lhci/cli@0.14.0 autorun --config=lighthouserc.json
```

PowerShell:

```bash
$env:NEXT_PUBLIC_ALLOW_INDEXING="true"; npm run build; npx @lhci/cli@0.14.0 autorun --config=lighthouserc.json
```

Reports are written to `.lighthouseci`. Rebuild without the variable afterwards if you want
to test the normal "blocked from search engines" state.

## Performance targets (advisory)

Performance 80+, Accessibility 95+, Best practices 90+, SEO 95+ on mobile. Largest image
under about 400 KB. Investigate any page that falls below.

## Bug reporting

Record the page, device and browser, steps, what happened and what was expected, with a
screenshot. Fix on a branch, add a test if the bug can recur, then release.
