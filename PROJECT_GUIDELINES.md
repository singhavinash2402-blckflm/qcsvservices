# QCSV Services - Project Guidelines

## 1. Project Overview

QCSV Services is being developed as a modern, professional technology services website for regulated and technology-driven environments.

Approved positioning:

Technology, validation and quality expertise for regulated environments.

Core positioning:

Regulatory expertise + technology + quality + execution.

The website must communicate QCSV as a credible technology and quality services partner serving organizations that operate in regulated and technology-driven environments.

Reference websites such as Artixio, NNIT and QBridge are used only for inspiration and benchmarking. Their content, visual identity, imagery, layouts and proprietary language must not be copied.

---

## 2. Project Objectives

The website must:

- Establish a modern and credible digital presence for QCSV.
- Clearly communicate QCSV service capabilities.
- Explain the industries and environments QCSV supports.
- Present confirmed success stories without inventing outcomes.
- Provide clear paths for prospective clients to contact QCSV.
- Support light and dark visual themes.
- Be responsive across desktop, tablet and mobile devices.
- Provide a strong foundation for future content and platform expansion.
- Maintain high standards for accessibility, performance, SEO and maintainability.
- Follow a controlled SDLC from planning through production and future releases.

Performance, accessibility and SEO targets are validation goals. They must not be represented as achieved until measured and verified.

---

## 3. SDLC

The project follows this lifecycle:

1. Discovery
2. Requirements
3. Information Architecture
4. UX / UI Design
5. Technical Architecture
6. Development
7. Functional Testing
8. Responsive and Browser Testing
9. Client Review
10. UAT
11. CI/CD Hardening
12. Production Deployment
13. Production Validation
14. Continuous Improvement

Current SDLC status:

PRE-UAT / CLIENT REVIEW PREPARATION

Completed:

- Discovery and positioning
- Requirements definition
- Information architecture
- Sitemap and navigation planning
- Design-system foundation
- Next.js technical foundation
- Theme infrastructure
- Homepage
- Global navigation
- Services overview
- 12 individual service pages
- About section
- Industries section
- Success Stories section
- Visual asset integration
- Asset cleanup and source-material separation
- Initial automated validation
- Production build validation

Current work:

- Responsive visual QA
- Browser validation
- Content consistency review
- Documentation alignment
- Asset and license governance
- Client-review preparation
- Preview deployment preparation

Next stages:

- Vercel Preview deployment
- Client review
- Revision cycle
- Formal UAT
- SEO hardening
- Performance validation
- Accessibility validation
- CI/CD hardening
- Production deployment
- Domain connection for qcsvservices.in
- Production smoke testing
- Post-launch monitoring

The production domain must not be connected until client review, UAT and release readiness are complete.

---

## 4. Approved Technology Stack

Application:

- Next.js 16.3.4
- React 19.3.0
- TypeScript 6.0.3
- Tailwind CSS 3.4.17

UI and utilities:

- next-themes 0.4.6
- lucide-react 1.44.0

Tooling:

- ESLint
- Prettier
- Git
- GitHub
- GitHub Actions
- Vercel

Build commands currently use Webpack:

- next dev --webpack
- next build --webpack

The Webpack fallback is intentional because the current Tailwind/PostCSS setup experienced CSS parsing issues with the default Next.js Turbopack path.

Do not migrate to Tailwind CSS 4 or change the build system without a deliberate architecture decision.

---

## 5. Environments

The planned environment flow is:

Local Development
        |
        v
Vercel Preview / Client UAT
        |
        v
Production
qcsvservices.in

Local:

Used for development and automated validation.

Vercel Preview:

Used for client review, responsive testing, browser testing, UAT and final release verification.

Production:

Production domain is qcsvservices.in.

Production deployment occurs only after formal approval and release readiness checks.

---

## 6. Repository

GitHub repository:

https://github.com/singhavinash2402-blckflm/qcsvservices

Local repository:

C:\Work\QCSV_Services_workspace\qcsvservices

Current development branch:

phase-3-foundation

The main branch remains the production baseline until the current logical development batch is reviewed and approved.

Current known baseline:

main / origin/main
6c7bd36

Do not push unfinished work directly to main.

---

## 7. Application Structure

Current project structure:

qcsvservices/
|
+-- .github/
|   +-- workflows/
|
+-- docs/
|   +-- 04-content/
|   +-- 05-design/
|       +-- source-material/
|
+-- public/
|   +-- images/
|       +-- about/
|       +-- hero/
|       +-- industries/
|       +-- services/
|       +-- success-stories/
|   +-- icons/
|   +-- logos/
|
+-- src/
|   +-- app/
|       +-- about/
|       +-- industries/
|       +-- services/
|       +-- success-stories/
|   +-- components/
|       +-- layout/
|       +-- sections/
|       +-- theme/
|       +-- ui/
|   +-- config/
|   +-- lib/
|
+-- tests/
|
+-- .env.example
+-- eslint.config.mjs
+-- next.config.ts
+-- package.json
+-- postcss.config.mjs
+-- tailwind.config.ts
+-- tsconfig.json

---

## 8. Approved Sitemap

Primary navigation:

- Home
- Services
- Industries
- Success Stories
- About
- Contact
- Theme Toggle

About:

- /about
- /about/mission-vision
- /about/our-approach
- /about/why-qcsv

Services:

- /services
- /services/computer-system-validation
- /services/quality-assurance
- /services/it-infrastructure-qualification
- /services/audits-assessments
- /services/sap-services
- /services/manufacturing-execution-systems
- /services/serialization
- /services/cloud-services
- /services/project-management
- /services/project-documentation
- /services/it-staffing
- /services/website-development

Industries:

- /industries
- /industries/pharmaceuticals
- /industries/medical-devices
- /industries/life-sciences
- /industries/semiconductor
- /industries/regulated-manufacturing

Success Stories:

- /success-stories

System routes:

- /
- /robots.txt
- /sitemap.xml

Do not create navigation links to routes that do not exist.

Privacy and Terms pages remain future production requirements and must not be represented as functional routes until implemented.

---

## 9. Approved Service Catalog

The following 12 service areas are the source of truth.

Validation and Quality:

1. Computer System Validation
2. Quality Assurance
3. IT Infrastructure Qualification
4. Audits / Assessments

Enterprise Technology:

5. SAP Services
6. Manufacturing Execution Systems
7. Serialization
8. Cloud Services

Project Delivery:

9. Project Management
10. Project Documentation
11. IT Staffing

Digital:

12. Website Development

No additional service claims should be added without client confirmation.

---

## 10. Industry Positioning

Current industry positioning includes:

- Pharmaceuticals
- Medical Devices
- Life Sciences
- Semiconductor
- Regulated Manufacturing

QCSV should primarily be presented as a technology and services company supporting regulated and technology-driven environments.

The website must not visually position QCSV as a manufacturing company.

Visual hierarchy should generally follow:

1. Technology / IT Services
2. Validation / Quality / Digital Systems
3. Regulated Industry Context

---

## 11. Confirmed Success Stories

The following success stories are confirmed:

1. SAP Validation - UK - Pharmaceuticals
2. SAP Technical Upgrade - US - Semiconductor
3. LIMS Validation - US - Pharmaceuticals
4. Equipment Qualification - Israel - Medical Devices
5. SAP GAP Assessment - Israel - Pharmaceuticals
6. SOP Preparation - Israel - Pharmaceuticals
7. Empower 3 Validation - US - Pharmaceuticals

Do not invent:

- Client names
- Quantitative outcomes
- Certifications
- Awards
- Regulatory approvals
- Cost savings
- Performance metrics
- Technology claims
- Testimonials

unless the client explicitly provides and approves them.

---

## 12. Content Governance

Client-provided material is the primary source of truth.

External research may be used internally to validate terminology, industry concepts and general context.

Public website copy must:

- Sound like QCSV.
- Remain concise and credible.
- Avoid copying competitor wording.
- Avoid unsupported regulatory claims.
- Avoid implying certifications or approvals.
- Avoid guarantees of compliance or audit success.
- Distinguish QCSV capabilities from general industry concepts.

Do not present QCSV as certified, approved, accredited or officially partnered with any organization unless explicitly confirmed by the client.

---

## 13. Visual Design Direction

The visual identity should communicate:

- Modern enterprise technology
- Professional consulting
- Regulated-industry credibility
- Quality
- Trust
- Technical capability
- Execution

The design should be:

- Clean
- Premium
- Spacious
- Structured
- Professional
- Technically credible
- Restrained in animation

Avoid:

- Excessive glow effects
- Heavy 3D
- Excessive glassmorphism
- Large parallax effects
- Generic laptop stock imagery
- Generic handshake imagery
- Generic office imagery
- Manufacturing-heavy visuals across the entire website
- Artificially futuristic AI imagery
- Competitor imagery or copied visual identity

---

## 14. Theme

The website must support:

- Light theme
- Dark theme
- System theme detection

Theme infrastructure uses next-themes.

The theme toggle must remain hydration-safe.

Reduced-motion preferences must be respected.

---

## 15. Visual Asset Strategy

Visual assets are categorized as:

1. Technology / IT
2. Validation / Quality
3. Regulated industry context
4. Supporting corporate imagery

Target visual balance:

Approximately 70 percent Technology / Digital / Consulting
Approximately 20 percent Validation / Quality / Process
Approximately 10 percent Industry-specific context

Approved public assets:

- public/images/about/about-qcsv.jpg
- public/images/hero/qcsv-home-hero.jpg
- public/images/services/services-overview.jpg
- public/images/services/validation-quality.jpg
- public/images/services/enterprise-technology.jpg
- public/images/services/project-delivery.jpg
- public/images/services/website-development.jpg
- public/images/industries/pharmaceuticals.jpg
- public/images/industries/medical-devices.jpg
- public/images/industries/life-sciences.jpg
- public/images/industries/semiconductor.jpg
- public/images/industries/regulated-manufacturing.jpg
- public/images/success-stories/success-stories.jpg

Unused and duplicate images must not remain in public web assets.

Client-provided source/reference material belongs under:

docs/05-design/source-material/

Client source material must not be exposed as public web assets unless specifically approved.

---

## 16. Asset Licensing and Governance

For externally sourced imagery, maintain an asset/license record containing:

- Asset ID
- Filename
- Source website
- Source URL
- Creator when available
- Download date
- License/reference information
- Intended website usage
- Approval status

External images must be:

- Copyright-safe
- Appropriately licensed
- Client-owned
- Or otherwise approved for website use

Do not copy imagery from competitor/reference websites.

---

## 17. Homepage Structure

Approved homepage structure:

1. Header
2. Hero
3. Services
4. Industries
5. Why QCSV
6. Success Stories
7. Methodology
8. Final CTA
9. Contact
10. Footer

Hero eyebrow:

VALIDATION • TECHNOLOGY • QUALITY

Hero headline:

Technology, validation and quality expertise for regulated environments.

Primary CTA:

Explore Our Services

Secondary CTA:

Talk to QCSV

The hero visual should be technology-led and should not resemble a manufacturing-company homepage.

---

## 18. Navigation Rules

Desktop navigation:

- Home
- Services
- Industries
- Success Stories
- About
- Contact
- Theme Toggle
- Start a conversation

Services are grouped as:

Validation and Quality:

- Computer System Validation
- Quality Assurance
- IT Infrastructure Qualification
- Audits / Assessments

Enterprise Technology:

- SAP Services
- Manufacturing Execution Systems
- Serialization
- Cloud Services

Project Delivery:

- Project Management
- Project Documentation
- IT Staffing

Digital:

- Website Development

Mobile navigation must provide equivalent access to all primary routes.

---

## 19. Component Architecture

Reusable components should be preferred over duplicated page-level markup.

Current component groups:

- components/layout
- components/sections
- components/theme
- components/ui

Reusable UI includes:

- Button
- Badge
- Card
- Container
- Section
- SectionHeading
- Stat
- Icon
- Input
- Textarea
- Select
- ThemeToggle

Components must remain simple and composable.

Do not introduce abstraction only for the sake of abstraction.

---

## 20. Accessibility

Accessibility is a release requirement.

The application should:

- Use semantic HTML.
- Provide accessible names for interactive controls.
- Support keyboard navigation.
- Maintain visible focus states.
- Maintain sufficient color contrast.
- Respect reduced-motion preferences.
- Use meaningful heading hierarchy.
- Provide meaningful alternative text for informative images.
- Avoid relying solely on color to communicate information.

Accessibility scores must be measured before being claimed.

---

## 21. Responsive Design

The site must work across:

- Mobile
- Tablet
- Laptop
- Desktop
- Large desktop displays

Minimum functional expectation:

320px and above.

Responsive layouts must be tested rather than relying only on CSS assumptions.

---

## 22. Performance

Performance is a validation objective.

The project should prioritize:

- Optimized images
- Appropriate image dimensions
- Efficient CSS
- Minimal client-side JavaScript
- Static rendering where practical
- Avoidance of unnecessary dependencies
- Proper metadata
- Efficient fonts
- Lazy loading where appropriate

Performance targets must be measured using tools such as Lighthouse before being reported as achieved.

Do not claim a specific Lighthouse score or Core Web Vitals result without measurement.

---

## 23. SEO

SEO implementation should include:

- Meaningful page titles
- Meta descriptions
- Semantic headings
- Canonical URLs where appropriate
- Sitemap
- Robots configuration
- Open Graph metadata where appropriate
- Descriptive image alt text
- Clean URLs
- Structured data where justified

SEO scores must be measured before being represented as achieved.

---

## 24. Security

Security requirements include:

- No secrets committed to Git.
- Environment variables must be used for environment-specific configuration.
- .env.example contains placeholders only.
- Avoid unnecessary client-side exposure of configuration.
- Keep dependencies reasonably current.
- Do not expose internal documents through public/.
- Review forms and external integrations before production.
- Follow secure coding practices.

---

## 25. Forms and Contact

The contact experience must be implemented only to the level supported by the current architecture.

Do not imply that a backend, email delivery system, CRM or API exists unless it has actually been implemented and tested.

Future integrations may include:

- Node.js API
- PostgreSQL
- CRM
- Email service
- CMS

These are future architecture possibilities, not current capabilities.

---

## 26. Future Architecture

V1 - Current:

Next.js frontend with static / application-rendered content.

V2 - Planned:

Headless CMS or content management layer for:

- Services
- Success stories
- Insights
- Pages
- Media
- Content updates

V3 - Possible:

Next.js
|
Node.js API
|
PostgreSQL
|
Admin / CMS / Integrations

Backend architecture must not be introduced prematurely.

---

## 27. Testing Strategy

Static validation:

- npm run typecheck
- npm run lint
- npm run build
- npm run format:check

Functional validation:

- Navigation
- Services dropdown
- Mobile menu
- Theme toggle
- Internal links
- CTA links
- Service pages
- Industry pages
- About pages
- Success Stories
- Contact experience

Responsive validation:

- Mobile
- Tablet
- Desktop
- Large desktop

Browser validation should cover modern Chrome, Edge, Firefox and Safari where available.

Production validation should verify:

- Domain
- HTTPS
- Sitemap
- Robots
- Metadata
- Images
- Navigation
- Theme
- Contact paths
- Console errors
- Build status

---

## 28. Current Automated QA Baseline

The current project has passed:

- TypeScript type checking
- ESLint
- Production build

The production build successfully generated the current application routes.

Automated success does not replace browser-based visual QA or client UAT.

---

## 29. Git Workflow

Use logical development batches.

Recommended workflow:

Develop
  |
Validate
  |
Review diff
  |
Commit
  |
Push development branch
  |
Preview deployment
  |
Client review / UAT
  |
Production release

Do not commit unrelated work together.

Do not push unfinished work to main.

Before a significant commit:

git status
git diff --stat
git diff
npm run typecheck
npm run lint
npm run build

---

## 30. Documentation Governance

The project-controlled documentation includes:

- PROJECT_GUIDELINES.md
- README.md
- SYSTEM_INTERFACE.md

Documentation must remain aligned with the actual implementation.

When architecture, navigation, design system or SDLC status changes materially, the relevant documentation must be updated.

Documentation must not describe planned functionality as already implemented.

---

## 31. Source of Truth Hierarchy

When information conflicts, use this order:

1. Explicit client-approved requirements
2. Confirmed client-provided source material
3. Current approved project decisions
4. Current implementation
5. Internal research
6. Reference websites

Reference websites must never override client requirements.

---

## 32. Prohibited Claims

Do not invent or imply:

- Client names
- Client logos
- Certifications
- Awards
- Regulatory approvals
- Formal partnerships
- Guaranteed compliance
- Guaranteed audit outcomes
- Quantified savings
- Quantified performance
- Team size
- Revenue
- Geographic presence
- Technology partnerships
- Product ownership
- Unsupported case-study results
- Unsupported testimonials

All such claims require explicit client confirmation.

---

## 33. Change Management

Before implementing a significant change:

1. Confirm the requirement.
2. Check existing architecture.
3. Check whether a reusable component exists.
4. Update documentation if architecture changes.
5. Implement the smallest maintainable solution.
6. Run validation.
7. Review visual and functional impact.
8. Commit only when the logical batch is complete.

Avoid unnecessary rewrites.

---

## 34. Current Release Readiness

The website is currently:

FEATURE-COMPLETE FOR INITIAL CLIENT REVIEW, BUT NOT PRODUCTION-READY.

Remaining release gates:

- Vercel Preview deployment
- Responsive/browser QA
- Client review
- Revision cycle
- UAT
- SEO validation
- Accessibility validation
- Performance validation
- CI/CD review
- Legal pages
- Production configuration
- Production deployment checklist
- Domain/DNS validation
- Final client approval

---

## 35. Definition of Done

A feature or release is considered complete only when:

- Requirements are satisfied.
- UI is implemented.
- Responsive behavior is validated.
- Accessibility considerations are addressed.
- Links and routes work.
- No unsupported claims were introduced.
- Images are appropriately sourced.
- Typecheck passes.
- Lint passes.
- Production build passes.
- Relevant documentation is updated.
- Git diff is reviewed.
- Client/UAT requirements are satisfied where applicable.

---

## 36. Project Principle

The QCSV website should remain:

Modern enough to represent a technology company, credible enough for regulated environments, simple enough to maintain, and scalable enough to evolve into a broader digital platform.
