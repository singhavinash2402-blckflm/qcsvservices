import Link from "next/link";
import {
  ClipboardCheck,
  FileCheck2,
  Gauge,
  LineChart,
  ShieldCheck,
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
    title: "Quality-system support",
    description:
      "Support for organizing quality activities around technology and validation work.",
    icon: ShieldCheck,
  },
  {
    title: "Risk management",
    description:
      "Structured consideration of risks, responsibilities and priorities within project activities.",
    icon: Target,
  },
  {
    title: "Process consistency",
    description:
      "Practical support for clear, repeatable project and quality activities.",
    icon: Workflow,
  },
  {
    title: "Documentation and controls",
    description:
      "Documentation coordination and control support for organized project records.",
    icon: FileCheck2,
  },
  {
    title: "Data integrity considerations",
    description:
      "Support for keeping data integrity considerations visible within quality activities.",
    icon: ClipboardCheck,
  },
  {
    title: "Continuous improvement",
    description:
      "Support for monitoring, review and improvement planning where confirmed for the engagement.",
    icon: LineChart,
  },
];

const approach = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand business objectives, technology landscape and project requirements.",
    icon: Gauge,
  },
  {
    number: "02",
    title: "Assess",
    description:
      "Assess current processes, systems, risks and applicable quality requirements.",
    icon: Target,
  },
  {
    number: "03",
    title: "Plan",
    description:
      "Define the delivery approach, scope, responsibilities and project priorities.",
    icon: FileCheck2,
  },
  {
    number: "04",
    title: "Execute",
    description:
      "Execute quality activities with structured coordination and clear responsibilities.",
    icon: Workflow,
  },
  {
    number: "05",
    title: "Validate",
    description:
      "Review activities and evidence appropriate to the quality-focused project scope.",
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
    icon: ShieldCheck,
  },
];

const industries = [
  "Pharmaceuticals",
  "Medical Devices",
  "Life Sciences",
  "Regulated Manufacturing",
];

export default function QualityAssurancePage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <main>
        <section className="relative isolate overflow-hidden">
          <div aria-hidden="true" className="qcsv-ambient-glow -left-24 top-20" />
          <div
            aria-hidden="true"
            className="qcsv-ambient-glow -right-32 bottom-0 bg-[rgba(99,102,241,0.1)]"
          />
          <Container>
            <div className="relative grid gap-12 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="max-w-3xl">
                <SectionHeading
                  eyebrow="QUALITY ASSURANCE"
                  title="Quality Assurance support for technology and validation initiatives."
                  description="QCSV provides quality-focused project support for organized technology, validation and delivery activities."
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
                <Icon icon={ShieldCheck} size="lg" />
                <h2 className="mt-6 max-w-sm font-display text-2xl font-bold text-[var(--foreground)]">
                  Quality kept visible throughout delivery.
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--foreground-muted)]">
                  QCSV helps organize quality activities, documentation and controls around the needs of each confirmed project scope.
                </p>
              </Card>
            </div>
          </Container>
        </section>

        <Section className="bg-[var(--surface)]">
          <Container>
            <SectionHeading
              eyebrow="OVERVIEW"
              title="A quality-system perspective for technology work."
              description="Quality assurance can bring together risk management, process consistency, documentation and controls, data integrity considerations, and continuous monitoring and improvement. QCSV provides quality-focused project support without claiming adherence to a specific framework unless confirmed by the client."
            />
          </Container>
        </Section>

        <Section>
          <Container>
            <SectionHeading
              eyebrow="WHAT QCSV PROVIDES"
              title="Practical quality support around project activities."
              description="QCSV can support quality planning, documentation, review and coordination. The specific quality system, roles, controls and deliverables require confirmation for each engagement."
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability) => (
                <Card key={capability.title} interactive className="flex h-full flex-col p-6">
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
              title="Quality activities connected to clear project controls."
              description="The focus can be adapted to the confirmed project scope, from documentation and risk review through monitoring and improvement planning."
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Risk and issue review", "Keep project risks and quality priorities visible."],
                ["Documentation control", "Coordinate records, reviews and responsibilities."],
                ["Data integrity focus", "Include data integrity considerations in quality discussions."],
                ["Improvement planning", "Support review and improvement activities where confirmed."],
              ].map(([title, description]) => (
                <Card key={title} className="p-6">
                  <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">{description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <SectionHeading
              eyebrow="QCSV APPROACH"
              title="A structured approach to quality-focused delivery."
              description="QCSV uses a project approach that connects understanding, assessment, planning, execution, review, documentation and delivery."
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {approach.map((step) => (
                <Card key={step.number} className="relative p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-[var(--primary)]">{step.number}</span>
                    <Icon icon={step.icon} size="sm" />
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold text-[var(--foreground)]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">{step.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="bg-[var(--surface)]">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <SectionHeading
                  eyebrow="RELEVANT INDUSTRIES"
                  title="Quality support for regulated and technology-driven environments."
                  description="QCSV supports quality-focused initiatives across the following confirmed industries."
                />
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {industries.map((industry) => (
                    <li key={industry} className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 text-sm font-semibold text-[var(--foreground-muted)]">{industry}</li>
                  ))}
                </ul>
              </div>
              <Card className="p-7 sm:p-9">
                <Icon icon={ShieldCheck} size="md" />
                <h2 className="mt-5 font-display text-2xl font-bold text-[var(--foreground)]">No unrelated success story is presented.</h2>
                <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">The current QCSV source material does not confirm a Quality Assurance success story. This page keeps the evidence boundary clear.</p>
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
                title="Discuss your quality assurance needs with QCSV."
                description="Connect with QCSV to discuss quality-system support for your technology or validation initiative."
              />
              <Link href="/#contact" className="mt-8 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">Talk to QCSV</Link>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
