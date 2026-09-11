# QCSV Services - System Interface Specification

## 1. Purpose

This document defines the current user-interface, navigation, design-system and interaction contracts for the QCSV Services website.

It is the implementation-level UI reference for the project.

The website is built using:

- Next.js
- React
- TypeScript
- Tailwind CSS
- next-themes
- lucide-react

This document must remain aligned with the actual implementation.

## 2. Product Positioning

Approved website positioning:

Technology, validation and quality expertise for regulated environments.

Core positioning:

Regulatory expertise + technology + quality + execution.

The interface should communicate:

- Technology capability
- Validation expertise
- Quality
- Professional execution
- Regulated-industry credibility
- Trust
- Modern enterprise capability

The visual language must not make QCSV appear primarily to be a manufacturing company.

## 3. Design Principles

The interface should be:

- Modern
- Professional
- Premium
- Spacious
- Structured
- Accessible
- Responsive
- Technically credible
- Easy to navigate
- Maintainable
- Scalable

Avoid:

- Excessive visual effects
- Heavy 3D
- Excessive parallax
- Generic technology clichés
- Generic handshake imagery
- Manufacturing-heavy visual treatment
- Excessive gradients
- Excessive glassmorphism
- Unnecessary animation
- Dense text blocks
- Unsupported marketing claims

## 4. Technology Contract

Current application stack:

- Next.js 16.3.4
- React 19.3.0
- TypeScript 6.0.3
- Tailwind CSS 3.4.17
- next-themes 0.4.6
- lucide-react 1.44.0

Build commands:

- npm run dev
- npm run build
- npm run start

The development and production build commands currently use:

next dev --webpack
next build --webpack

Do not change the build strategy without an explicit technical decision.

## 5. Global Layout

The global application structure is:

Root Layout
  |
  +-- Theme Provider
  |
  +-- Header
  |
  +-- Page Content
  |
  +-- Footer

The application must maintain consistent:

- Container widths
- Typography
- Spacing
- Colors
- Border treatment
- Button styles
- Theme behavior
- Responsive behavior

## 6. Global Header

Desktop navigation:

- Home
- Services
- Industries
- Success Stories
- About
- Contact
- Theme Toggle
- Start a conversation

The Services navigation contains grouped service categories.

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

Header requirements:

- Consistent across pages
- Clear navigation hierarchy
- Keyboard accessible
- Visible focus states
- Working Services dropdown
- Working mobile navigation
- Theme-compatible

## 7. Mobile Navigation

Mobile navigation provides access to all primary routes.

Required capabilities:

- Open menu
- Close menu
- Services submenu
- Navigation to all primary routes
- Keyboard Escape handling where applicable
- Theme toggle

Mobile navigation must not remove access to any primary page.

## 8. Theme System

The application supports:

- Light theme
- Dark theme
- System preference

Theme implementation uses next-themes.

The ThemeToggle component must remain hydration-safe.

The interface must remain readable and functional in both themes.

## 9. Typography

Display typography uses the configured display font for:

- Hero headlines
- Major page headings
- Section headings
- High-priority titles

Body typography uses the configured sans font for:

- Paragraphs
- Navigation
- Buttons
- Form labels
- Supporting content

Monospace typography is reserved for technical or code-oriented content.

Typography should maintain clear hierarchy without excessive font sizing.

## 10. Color System

Current QCSV brand references include:

- Primary: #0EA5E9
- Secondary: #6366F1
- Accent: #10B981
- Ink: #070B14

Semantic CSS variables should be preferred over hardcoded colors inside reusable components.

Theme-specific values must remain compatible with light and dark modes.

## 11. Layout Containers

The design system provides reusable container utilities.

Primary content width:

1200px

Wide content width:

1400px

Pages should use shared Container components rather than repeatedly defining independent max-width systems.

## 12. Spacing

Sections should use consistent vertical rhythm.

Spacing should support:

- Clear hierarchy
- Comfortable reading
- Visual separation
- Responsive adaptation

Avoid arbitrary spacing when an existing design-system utility provides the required layout.

## 13. Border Radius

The primary QCSV card radius is approximately:

20px

Rounded components should remain consistent with the established design system.

Do not introduce unrelated radius systems without a design decision.

## 14. Shadows

Reusable shadow tokens include:

Card shadow:

0 8px 30px rgba(0,0,0,.35)

Glow shadow:

0 0 35px rgba(14,165,233,.25)

Shadows should be used selectively.

The site should not become visually dependent on glow effects.

## 15. Core UI Components

Current reusable UI components include:

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

Components should remain:

- Reusable
- Typed
- Small
- Composable
- Accessible

## 16. Button Contract

The Button component supports:

- Primary
- Secondary
- Outline
- Ghost

Buttons must:

- Use semantic button behavior where appropriate.
- Have readable text.
- Provide visible hover states.
- Provide focus states.
- Work in both themes.
- Avoid unnecessary animation.

The current Button component does not support an asChild API.

Do not implement usage based on an assumed asChild prop.

## 17. Card Contract

Cards may be:

- Informational
- Navigational
- Interactive

The Card component supports the established interactive behavior.

Cards should not be used as decorative containers when a simpler semantic element is more appropriate.

## 18. Icon Contract

Icons use lucide-react.

The Icon component accepts a Lucide icon definition.

Supported size levels include:

- sm
- md
- lg

Decorative icons should use appropriate aria-hidden behavior.

## 19. Form Controls

Current reusable form controls include:

- Input
- Textarea
- Select

These are simple HTML wrappers.

They do not currently accept:

- label props
- options props

Labels and option elements should be composed explicitly at the page or component level.

Forms must not imply backend functionality that does not exist.

## 20. Section Heading Contract

SectionHeading supports:

- eyebrow
- title
- description
- alignment

Alignment options:

- left
- center

Section headings should be used consistently for major page sections.

## 21. Homepage Interface

Homepage structure:

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

## 22. Homepage Hero

Eyebrow:

VALIDATION • TECHNOLOGY • QUALITY

Headline:

Technology, validation and quality expertise for regulated environments.

Primary CTA:

Explore Our Services

Secondary CTA:

Talk to QCSV

The hero should communicate:

- Technology
- Validation
- Quality
- Regulated environments
- Professional capability

The hero image should be technology-led.

Do not use manufacturing imagery as the primary homepage visual language.

## 23. Services Interface

The approved service catalog contains 12 services.

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

Each service card must link only to an implemented route.

## 24. Service Detail Page Contract

Individual service pages should maintain a consistent structure.

Typical structure:

Page Hero
  |
Service Introduction
  |
Capabilities / Areas of Focus
  |
Approach / Delivery Context
  |
Relevant Supporting Content
  |
Related Success Story where appropriate
  |
CTA

The exact sections may vary depending on approved content.

Service pages must not invent:

- Certifications
- Client names
- Outcomes
- Quantitative metrics
- Regulatory approvals
- Guarantees

## 25. Industries Interface

Current industry pages:

- Pharmaceuticals
- Medical Devices
- Life Sciences
- Semiconductor
- Regulated Manufacturing

Industry pages should explain the context in which QCSV services may be relevant.

Industry imagery may be more domain-specific than homepage imagery.

The purpose is to establish relevance without making unsupported claims about clients or regulatory status.

## 26. About Interface

Current About routes:

- /about
- /about/mission-vision
- /about/our-approach
- /about/why-qcsv

The About experience should communicate:

- Who QCSV is
- Mission and vision
- Approach
- Reasons to consider QCSV

Do not add unsupported leadership, employee-count, geography or corporate-history claims.

## 27. Success Stories Interface

Current route:

/success-stories

Confirmed stories:

1. SAP Validation - UK - Pharmaceuticals
2. SAP Technical Upgrade - US - Semiconductor
3. LIMS Validation - US - Pharmaceuticals
4. Equipment Qualification - Israel - Medical Devices
5. SAP GAP Assessment - Israel - Pharmaceuticals
6. SOP Preparation - Israel - Pharmaceuticals
7. Empower 3 Validation - US - Pharmaceuticals

Success story presentation must remain factual.

Do not invent:

- Client identities
- Project values
- Timelines
- Quantitative outcomes
- ROI
- Certifications
- Awards
- Testimonials

## 28. Contact Interface

The Contact experience should provide a clear path for users to start a conversation with QCSV.

Current UI must not imply:

- CRM integration
- Automated email delivery
- Backend API
- Ticketing system
- Database persistence

unless those capabilities are actually implemented and tested.

Future integrations may be added as part of a later platform version.

## 29. Footer

The footer should contain:

- QCSV positioning
- Navigation
- Selected services
- Relevant site links
- Contact path
- Copyright information

Footer links must only point to implemented routes.

Privacy and Terms should not be represented as active routes until those pages are implemented.

## 30. Imagery Contract

Image hierarchy:

1. Technology / IT
2. Validation / Quality
3. Regulated industry context

Approximate target:

70 percent Technology / Digital / Consulting
20 percent Validation / Quality / Process
10 percent Industry-specific

Homepage imagery should be technology-led.

Industry pages may use more specialized industry imagery.

Success stories should use neutral technical imagery unless approved project-specific imagery exists.

Do not use competitor imagery.

Do not use client source images publicly unless approved.

## 31. Image Accessibility

Every informative image must have meaningful alternative text.

Decorative images should use appropriate decorative semantics.

Alt text should describe the purpose or meaningful subject of the image rather than unnecessarily repeating surrounding copy.

## 32. Responsive Contract

The interface must support:

- Mobile
- Tablet
- Laptop
- Desktop
- Large desktop

Required responsive checks include:

- Header
- Navigation
- Hero
- Cards
- Grids
- Images
- Typography
- CTAs
- Footer

Minimum functional viewport:

320px

## 33. Accessibility Contract

The interface must support:

- Keyboard navigation
- Focus visibility
- Semantic HTML
- Accessible controls
- Meaningful labels
- Sufficient color contrast
- Reduced motion
- Logical heading hierarchy
- Appropriate image alternatives

Accessibility should be validated before production release.

## 34. Motion

Motion should be:

- Restrained
- Purposeful
- Fast enough to avoid slowing interaction
- Disabled or reduced when the user prefers reduced motion

Avoid:

- Continuous decorative animations
- Large parallax systems
- Excessive page transitions
- Animation that interferes with reading

## 35. Navigation Interaction Rules

Desktop Services dropdown:

- Opens through the Services navigation interaction.
- Displays grouped services.
- Provides direct links.
- Supports keyboard interaction.
- Escape closes the dropdown.

Mobile Services navigation:

- Supports expanding and collapsing service groups.
- Provides direct links.
- Escape closes applicable navigation state.

Navigation must not create dead-end pages.

## 36. Link Rules

Internal links must use actual implemented routes.

Before adding a link:

1. Confirm destination route exists.
2. Confirm route is appropriate for the content.
3. Confirm destination is included in the approved sitemap where applicable.

Never create placeholder navigation links to nonexistent pages.

## 37. Content Rules

Public content must:

- Use approved QCSV terminology.
- Remain concise.
- Be original.
- Avoid competitor copying.
- Avoid unsupported claims.
- Use confirmed client material as the source of truth.

External research informs internal validation but does not need to appear as public citations on normal service pages.

## 38. SEO Interface Requirements

Every public page should eventually provide:

- Page title
- Meta description
- Canonical URL where appropriate
- Open Graph metadata where appropriate
- Semantic headings
- Descriptive URLs
- Appropriate structured data where justified

SEO implementation must be validated before production.

## 39. Performance Interface Requirements

The interface should minimize:

- Unnecessary client components
- Large JavaScript bundles
- Oversized images
- Duplicate assets
- Unnecessary dependencies
- Layout shifts
- Blocking resources

Prefer:

- Server rendering where practical
- Optimized image handling
- Reusable CSS
- Static content where appropriate
- Lazy loading where useful

## 40. Browser Compatibility

The website should be validated on current versions of:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari where available

Browser-specific issues should be documented and resolved before production release.

## 41. Error and Empty States

Where applicable, the interface should provide meaningful states for:

- Loading
- Error
- Empty content
- Invalid form input
- Failed submission

Do not create fake loading states merely for visual effect.

## 42. Design-System Change Rules

Before changing a shared UI component:

1. Identify all current usages.
2. Confirm the required behavior.
3. Check light and dark themes.
4. Check responsive behavior.
5. Check accessibility.
6. Run typecheck.
7. Run lint.
8. Run production build.
9. Review affected pages.

Shared component changes must not be treated as isolated page changes.

## 43. Current Route Inventory

Current application page routes:

/
/about
/about/mission-vision
/about/our-approach
/about/why-qcsv
/industries
/industries/life-sciences
/industries/medical-devices
/industries/pharmaceuticals
/industries/regulated-manufacturing
/industries/semiconductor
/services
/services/audits-assessments
/services/cloud-services
/services/computer-system-validation
/services/it-infrastructure-qualification
/services/it-staffing
/services/manufacturing-execution-systems
/services/project-documentation
/services/project-management
/services/quality-assurance
/services/sap-services
/services/serialization
/services/website-development
/success-stories

System-generated routes:

/robots.txt
/sitemap.xml

## 44. Current UI Implementation Status

Completed:

- Global header
- Desktop navigation
- Services dropdown
- Mobile navigation
- Theme toggle
- Footer
- Homepage
- Services overview
- 12 service detail pages
- About pages
- Industry pages
- Success Stories page
- Responsive foundation
- Reusable UI components
- Image integration
- Theme infrastructure

Current stage:

Pre-UAT / Client Review Preparation

Remaining interface validation:

- Full responsive browser review
- Visual consistency review
- Accessibility review
- Performance review
- Client feedback
- UAT fixes
- Production verification

## 45. Definition of Done for UI

A UI change is complete when:

- Requirements are satisfied.
- Correct route is used.
- Responsive behavior works.
- Light theme works.
- Dark theme works.
- Keyboard interaction works where applicable.
- Accessible names and semantics are correct.
- Images have appropriate alternatives.
- No unsupported claims are introduced.
- Existing shared components are reused where appropriate.
- Typecheck passes.
- Lint passes.
- Production build passes.
- Visual behavior is reviewed.

## 46. Future UI Expansion

V2 may introduce:

- CMS-driven content
- Insights
- Search
- Dynamic success stories
- Managed media
- Content administration

V3 may introduce:

- Authenticated administration
- Node.js API
- PostgreSQL
- CRM integrations
- Email service integrations
- Analytics platform
- Advanced forms

These features are not part of the current V1 implementation unless explicitly implemented.

## 47. Interface Principle

The QCSV interface should remain:

Modern enough to represent a technology company, structured enough for enterprise users, credible enough for regulated environments, accessible enough for broad audiences, and simple enough to maintain.

## 48. Document Control

Document:

SYSTEM_INTERFACE.md

Purpose:

Current UI, design-system, navigation and interaction specification.

Status:

Active

SDLC stage:

Pre-UAT / Client Review Preparation

This document must be updated whenever there is a material change to:

- Navigation
- Design system
- Theme behavior
- Shared UI components
- Responsive behavior
- Accessibility requirements
- Page structure
- Visual asset strategy
- User interaction patterns
