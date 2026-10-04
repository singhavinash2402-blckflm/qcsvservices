import type { Metadata } from "next";
import Link from "next/link";
import {
  Accessibility,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  FileCheck2,
  Flag,
  Gauge,
  GitBranch,
  Lightbulb,
  LayoutTemplate,
  LockKeyhole,
  SearchCheck,
  Target,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Website Development",
  description:
    "Structured website development support for credible, maintainable digital experiences.",
};

type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const capabilities: Capability[] = [
  {
    title: "Corporate and enterprise websites",
    description:
      "Structured website development support for professional corporate and enterprise digital experiences.",
    icon: LayoutTemplate,
  },
  {
    title: "Responsive web experiences",
    description:
      "Support for experiences designed to work across desktop, tablet and mobile contexts.",
    icon: Accessibility,
  },
  {
    title: "Information architecture",
    description:
      "Organization of page structure, navigation and content so the experience is clear to its intended audience.",
    icon: GitBranch,
  },
  {
    title: "Modern web development",
    description:
      "Frontend and web-development support within the technology scope confirmed for the project.",
    icon: Code2,
  },
  {
    title: "Integration-ready architecture",
    description:
      "Planning and implementation support that keeps future integration needs visible without assuming a specific system.",
    icon: Workflow,
  },
  {
    title: "Accessibility-conscious development",
    description:
      "Development that considers accessibility as part of content, structure, interaction and testing discussions.",
    icon: Accessibility,
  },
  {
    title: "Security-conscious development",
    description:
      "Security considerations kept visible throughout the confirmed development and delivery scope.",
    icon: LockKeyhole,
  },
  {
    title: "Performance-conscious implementation",
    description:
      "Implementation planning that considers performance without promising a particular score or result.",
    icon: Gauge,
  },
  {
    title: "Testing and quality validation",
    description:
      "Testing and review activities appropriate to the agreed website requirements and delivery scope.",
    icon: CheckCircle2,
  },
  {
    title: "Deployment and enhancement",
    description:
      "Deployment and ongoing enhancement support where those responsibilities are confirmed for the engagement.",
    icon: Target,
  },
];

const deliverables = [
  ["Discovery record", "A documented starting point for requirements, audience and project scope."],
  ["Information architecture", "A structured view of content, navigation and page relationships."],
  ["Website implementation", "The agreed web experience developed within the confirmed technology scope."],
  ["Testing record", "Documentation of testing and quality-review activities applicable to the project."],
  ["Deployment handover", "Handover information for deployment and next steps where included in scope."],
  ["Enhancement plan", "A basis for ongoing improvement discussions where continued support is confirmed."],
];

const approach = [
  ["01", "Discovery and requirements", "Understand the organization, audience, objectives and website requirements.", Lightbulb],
  ["02", "Information architecture", "Organize content, navigation and page relationships for the intended experience.", GitBranch],
  ["03", "UX/UI design", "Shape the experience and interface direction within the confirmed design scope.", LayoutTemplate],
  ["04", "Development", "Build the website within the agreed project and technology boundaries.", Code2],
  ["05", "Integration", "Coordinate integration needs where systems and responsibilities are confirmed.", Workflow],
  ["06", "Testing and validation", "Review the experience against agreed requirements and quality considerations.", ClipboardCheck],
  ["07", "Deployment", "Coordinate deployment activities where deployment responsibility is included in scope.", Flag],
  ["08", "Continuous improvement", "Discuss ongoing enhancement based on confirmed priorities and support needs.", Target],
] as const;

const industries = [
  "Pharmaceuticals",
  "Medical Devices",
  "Life Sciences",
  "Semiconductor",
  "Regulated Manufacturing",
];

export default function WebsiteDevelopmentPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />

      <main>
        <section className="relative isolate overflow-hidden">
          <div
            aria-hidden="true"
            className="qcsv-ambient-glow -left-24 top-20"
          />
          <div
            aria-hidden="true"
            className="qcsv-ambient-glow -right-32 bottom-0 bg-[rgba(99,102,241,0.1)]"
          />

          <Container>
            <div className="relative grid gap-12 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="max-w-3xl">
                <SectionHeading
                  eyebrow="WEBSITE DEVELOPMENT"
                  title="Website Development for credible, maintainable digital experiences."
                  description="QCSV provides structured, modern web development support for organizations that need a professional digital experience within a confirmed project scope."
                />

                <Link
                  href="/#contact"
                  className="mt-9 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
                >
                  Talk to QCSV
                </Link>
              </div>

              <Card className="relative overflow-hidden p-7 sm:p-9">
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10"
                />
                <Icon icon={Code2} size="lg" />
                <h2 className="mt-6 max-w-sm font-display text-2xl font-bold text-[var(--foreground)]">
                  Digital experiences built around clarity and care.
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--foreground-muted)]">
                  Website work can bring together content structure, responsive implementation, testing, quality review and deployment planning.
                </p>
              </Card>
            </div>
          </Container>
        </section>

        <Section className="bg-[var(--surface)]">
          <Container>
            <SectionHeading
              eyebrow="OVERVIEW"
              title="A structured web-development partner for modern organizations."
              description="Website development may include corporate and enterprise websites, responsive experiences, information architecture, modern frontend development, integration-ready architecture, accessibility-conscious and security-conscious implementation, performance-conscious delivery, testing, deployment and ongoing enhancement. QCSV's specific technology scope and responsibilities require confirmation."
            />
          </Container>
        </Section>

        <Section>
          <Container>
            <SectionHeading
              eyebrow="WHAT QCSV PROVIDES"
              title="Practical support across the website lifecycle."
              description="QCSV can support discovery, structure, development, integration, testing and deployment activities where the project requirements and delivery responsibilities are confirmed."
            />

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability) => (
                <Card
                  key={capability.title}
                  interactive
                  className="flex h-full flex-col p-6"
                >
                  <Icon icon={capability.icon} size="md" />
                  <h3 className="mt-5 font-display text-lg font-semibold text-[var(--foreground)]">
                    {capability.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-[var(--foreground-muted)]">
                    {capability.description}
                  </p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="bg-[var(--surface)]">
          <Container>
            <SectionHeading
              eyebrow="KEY AREAS / CAPABILITIES"
              title="A website foundation that keeps content, quality and delivery connected."
              description="The confirmed project scope should establish the website's content structure, integration needs, testing expectations, deployment responsibilities and ongoing support model."
            />

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Structured content", "Make information architecture and content relationships clear."],
                ["Responsive experience", "Consider desktop, tablet and mobile use throughout the work."],
                ["Quality review", "Include testing and quality validation appropriate to the requirements."],
                ["Ongoing enhancement", "Plan future improvements only where continued support is confirmed."],
              ].map(([title, description]) => (
                <Card key={title} className="p-6">
                  <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
                    {description}
                  </p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <SectionHeading
              eyebrow="DELIVERABLES"
              title="Clear outputs for each stage of the website project."
              description="Deliverables depend on the confirmed engagement scope, but may include the following planning, implementation and handover records."
            />

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {deliverables.map(([title, description]) => (
                <Card key={title} className="p-6">
                  <Icon icon={FileCheck2} size="sm" />
                  <h3 className="mt-5 font-display text-lg font-semibold text-[var(--foreground)]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
                    {description}
                  </p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="bg-[var(--surface)]">
          <Container>
            <SectionHeading
              eyebrow="QCSV APPROACH"
              title="A structured lifecycle from discovery to continuous improvement."
              description="This recommended delivery lifecycle provides a planning model for website projects. The actual sequence and responsibilities require confirmation for each engagement."
            />

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {approach.map(([number, title, description, icon]) => (
                <Card key={number} className="relative p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-[var(--primary)]">
                      {number}
                    </span>
                    <Icon icon={icon} size="sm" />
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold text-[var(--foreground)]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
                    {description}
                  </p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <SectionHeading
                  eyebrow="RELEVANT INDUSTRIES"
                  title="Digital experiences for confirmed QCSV industries."
                  description="QCSV's confirmed industry catalog includes the following environments. Website-development experience by industry requires confirmation."
                />
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {industries.map((industry) => (
                    <li
                      key={industry}
                      className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 text-sm font-semibold text-[var(--foreground-muted)]"
                    >
                      {industry}
                    </li>
                  ))}
                </ul>
              </div>

              <Card className="p-7 sm:p-9">
                <Icon icon={SearchCheck} size="md" />
                <h2 className="mt-5 font-display text-2xl font-bold text-[var(--foreground)]">
                  No unrelated success story is presented.
                </h2>
                <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
                  The current QCSV source material does not confirm a Website Development success story. This page does not infer portfolio details, client outcomes or technology experience.
                </p>
              </Card>
            </div>
          </Container>
        </Section>

        <Section spacing="large">
          <Container>
            <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-12 text-center sm:px-10">
              <SectionHeading
                align="center"
                eyebrow="START A CONVERSATION"
                title="Discuss your website development requirements with QCSV."
                description="Connect with QCSV to discuss a credible, maintainable digital experience and the project scope needed to deliver it."
              />
              <Link
                href="/#contact"
                className="mt-8 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                Talk to QCSV
              </Link>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
