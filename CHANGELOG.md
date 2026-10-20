# Changelog

Notable changes to the QCSV Services website, newest first.

## October 2026

### Quality and operations

- Scroll reveal animation, card hover lift and an optional announcement bar
- README rewritten; architecture, runbook, brand, and test documents added
- Browser tests, accessibility scan, screenshot capture and Lighthouse workflow added
- Content-Security-Policy added in report-only mode; richer organisation data for search engines

### Brand and contact

- Approved logo applied: header (compact version), footer, favicon, app icons, manifest, share image
- Four-column footer
- Working enquiry form: server-side validation, spam protection, delivery through Resend
- Search engines blocked by default until `NEXT_PUBLIC_ALLOW_INDEXING=true`; canonical host set to www

### Content and pages

- Pharma-led home page with photo hero, service tiles, industry panels, stories and FAQ
- Twelve service pages generated from one template with approved content and framework diagrams
- Five industry pages, a single About page, one Success Stories page with full client text
- Consultation popup on every call to action; Read more links on every card
- Privacy Policy and Terms of Use pages; 404 and error pages; sitemap, robots and skip link

### Foundation

- Line endings normalised, code formatted, CI added (typecheck, lint, format, build)
- Teal design tokens, single typeface, security headers, compressed photography
- Dependabot enabled
