import Link from "next/link";
import {
  ClipboardCheck,
  FileCheck2,
  Flag,
  FlaskConical,
  HardDrive,
  Lightbulb,
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

type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const capabilities: Capability[] = [
  {
    title: "Validation planning and execution",
    description:
      "Structured support for planning and carrying out validation activities with attention to intended use and system risk.",
    icon: ClipboardCheck,
  },
  {
    title: "Requirements and validation documentation",
    description:
      "Clear documentation support for requirements, validation activities and the decisions that shape the work.",
    icon: FileCheck2,
  },
  {
    title: "Risk-based assessment",
    description:
      "Assessment support focused on intended use, system risk and the appropriate level of validation activity.",
    icon: SearchCheck,
  },
  {
    title: "Testing and verification",
    description:
      "Testing and verification support for computerized system activities and documented evidence.",
    icon: FlaskConical,
  },
  {
    title: "Validation lifecycle documentation",
    description:
      "Organized documentation support throughout the validation lifecycle, including controlled changes.",
    icon: HardDrive,
  },
  {
    title: "Quality-focused project support",
    description:
      "Project support that keeps quality, data integrity considerations and clear coordination in view.",
    icon: Target,
  },
];

const approach = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand business objectives, technology landscape and project requirements.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Assess",
    description:
      "Assess current processes, systems, risks and applicable quality requirements.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Plan",
    description:
      "Define the delivery approach, scope, responsibilities and project priorities.",
    icon: Target,
  },
  {
    number: "04",
    title: "Execute",
    description:
      "Execute project activities with structured coordination and quality-focused delivery.",
    icon: Workflow,
  },
  {
    number: "05",
    title: "Validate",
    description:
      "Perform validation and qualification activities appropriate to the project.",
    icon: ClipboardCheck,
  },
  {
    number: "06",
    title: "Document",
    description:
      "Maintain clear and structured documentation throughout the engagement.",
    icon: FileCheck2,
  },
  {
    number: "07",
    title: "Deliver",
    description:
      "Complete the engagement with an organized handover and delivery outcome.",
    icon: Flag,
  },
];

const industries = [
  "Pharmaceuticals",
  "Medical Devices",
  "Life Sciences",
  "Regulated Manufacturing",
];

const relatedStories = [
  { title: "SAP Validation", location: "UK", industry: "Pharmaceuticals" },
  { title: "LIMS Validation", location: "US", industry: "Pharmaceuticals" },
  {
    title: "Empower 3 Validation",
    location: "US",
    industry: "Pharmaceuticals",
  },
];

export default function ComputerSystemValidationPage() {
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
                  eyebrow="COMPUTER SYSTEM VALIDATION"
                  title="Computer System Validation for regulated technology environments."
                  description="QCSV provides validation support for computerized systems in regulated environments."
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
                <Icon icon={ClipboardCheck} size="lg" />
                <h2 className="mt-6 max-w-sm font-display text-2xl font-bold text-[var(--foreground)]">
                  A structured foundation for validation work.
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--foreground-muted)]">
                  QCSV supports the planning, assessment, testing and documentation activities that make up a validation engagement.
                </p>
              </Card>
            </div>
          </Container>
        </section>

        <Section className="bg-[var(--surface)]">
          <Container>
            <SectionHeading
              eyebrow="OVERVIEW"
              title="Validation support shaped around intended use, system risk and the lifecycle."
              description="Computer System Validation is a structured way to plan, assess, test and document computerized system activities. A risk-based validation or assurance approach considers intended use and system risk while keeping requirements, testing, lifecycle documentation, data integrity considerations and controlled changes in view. QCSV provides validation support without claiming adherence to a specific framework unless confirmed by the client."
            />
          </Container>
        </Section>

        <Section>
          <Container>
            <SectionHeading
              eyebrow="WHAT QCSV PROVIDES"
              title="Practical support across the validation lifecycle."
              description="QCSV can support the core planning, documentation, assessment, testing and project activities associated with Computer System Validation. The specific systems, deliverables, standards and responsibilities require confirmation for each engagement."
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
              title="Validation decisions connected to the system lifecycle."
              description="The confirmed project scope should determine how intended use, system risk, data integrity, controlled changes and validation evidence are addressed."
            />

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Intended use", "Keep the system purpose and context visible when planning validation activities."],
                ["System risk", "Use risk considerations to help shape appropriate assessment and verification."],
                ["Lifecycle records", "Maintain documentation across planning, testing, changes and delivery."],
                ["Data integrity", "Keep data integrity considerations visible within the confirmed project scope."],
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

        <Section className="bg-[var(--surface)]">
          <Container>
            <SectionHeading
              eyebrow="OUR APPROACH"
              title="A structured approach from understanding to delivery."
              description="QCSV follows a consistent project approach designed to bring clarity, quality and accountability to validation initiatives."
            />

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {approach.map((step) => (
                <Card key={step.number} className="relative p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-[var(--primary)]">
                      {step.number}
                    </span>
                    <Icon icon={step.icon} size="sm" />
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold text-[var(--foreground)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
                    {step.description}
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
                  title="Support for regulated and technology-driven environments."
                  description="QCSV supports validation initiatives across the following confirmed industries."
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

              <div>
                <SectionHeading
                  eyebrow="RELATED SUCCESS STORIES"
                  title="Selected validation engagements."
                  description="Explore confirmed QCSV validation engagements across regulated environments."
                />
                <div className="mt-8 space-y-3">
                  {relatedStories.map((story) => (
                    <Card
                      key={story.title}
                      className="flex items-center gap-4 p-5"
                    >
                      <Icon icon={ClipboardCheck} size="sm" />
                      <div>
                        <h3 className="font-display text-base font-semibold text-[var(--foreground)]">
                          {story.title}
                        </h3>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[var(--foreground-subtle)]">
                          {story.location} <span aria-hidden="true">•</span>{" "}
                          {story.industry}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Section spacing="large">
          <Container>
            <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-12 text-center sm:px-10">
              <SectionHeading
                align="center"
                eyebrow="START A CONVERSATION"
                title="Discuss your validation requirements with QCSV."
                description="Connect with QCSV to discuss Computer System Validation support for your technology initiative."
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
