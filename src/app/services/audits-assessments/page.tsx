import Link from "next/link";
import {
  ClipboardCheck,
  FileCheck2,
  Flag,
  Gauge,
  ListChecks,
  SearchCheck,
  ShieldAlert,
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

type Capability = { title: string; description: string; icon: LucideIcon };

const capabilities: Capability[] = [
  {
    title: "Current-state assessment",
    description:
      "Review support focused on understanding the current technology or quality context.",
    icon: SearchCheck,
  },
  {
    title: "Gap identification",
    description:
      "Structured consideration of gaps between the current state and the confirmed review scope.",
    icon: ListChecks,
  },
  {
    title: "Risk-based evaluation",
    description:
      "Evaluation support that considers risks, priorities and the evidence available for review.",
    icon: ShieldAlert,
  },
  {
    title: "Documentation review",
    description:
      "Review support for project, technology and quality documentation within the agreed scope.",
    icon: FileCheck2,
  },
  {
    title: "Findings",
    description:
      "Clear organization and documentation of findings from the confirmed assessment activities.",
    icon: ClipboardCheck,
  },
  {
    title: "Recommendations",
    description:
      "Practical recommendations for consideration after the assessment and findings review.",
    icon: Target,
  },
  {
    title: "Readiness and improvement support",
    description:
      "Support for readiness or improvement planning where included in the confirmed scope.",
    icon: Workflow,
  },
];

const approach = [
  ["01", "Understand", "Understand the assessment purpose, current state and review requirements.", Gauge],
  ["02", "Assess", "Assess available information, processes, systems, risks and documentation.", SearchCheck],
  ["03", "Plan", "Define scope, responsibilities, evidence and assessment priorities.", Target],
  ["04", "Execute", "Carry out the agreed review activities with structured coordination.", Workflow],
  ["05", "Validate", "Review findings and supporting information appropriate to the scope.", ClipboardCheck],
  ["06", "Document", "Record findings, recommendations and relevant assessment information.", FileCheck2],
  ["07", "Deliver", "Complete the engagement with an organized handover and next-step context.", Flag],
] as const;

const industries = ["Pharmaceuticals", "Medical Devices", "Life Sciences", "Semiconductor", "Regulated Manufacturing"];

const relatedStories = [
  { title: "SAP GAP Assessment", location: "Israel", industry: "Pharmaceuticals" },
];

export default function AuditsAssessmentsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <main>
        <section className="relative isolate overflow-hidden">
          <div aria-hidden="true" className="qcsv-ambient-glow -left-24 top-20" />
          <div aria-hidden="true" className="qcsv-ambient-glow -right-32 bottom-0 bg-[rgba(99,102,241,0.1)]" />
          <Container>
            <div className="relative grid gap-12 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="max-w-3xl">
                <SectionHeading
                  eyebrow="AUDITS / ASSESSMENTS"
                  title="Audits and assessments for technology and quality environments."
                  description="QCSV provides structured assessment support for technology, quality and project requirements within a confirmed scope."
                />
                <Link href="/#contact" className="mt-9 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">Talk to QCSV</Link>
              </div>
              <Card className="relative overflow-hidden p-7 sm:p-9">
                <div aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10" />
                <Icon icon={SearchCheck} size="lg" />
                <h2 className="mt-6 max-w-sm font-display text-2xl font-bold text-[var(--foreground)]">A clearer view of the current state.</h2>
                <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--foreground-muted)]">Assessment work can organize evidence, gaps, findings and recommendations without implying regulatory inspection authority or guaranteed outcomes.</p>
              </Card>
            </div>
          </Container>
        </section>

        <Section className="bg-[var(--surface)]">
          <Container>
            <SectionHeading
              eyebrow="OVERVIEW"
              title="Structured review support for informed next steps."
              description="An assessment may examine the current state, identify gaps, evaluate risk, review documentation, record findings and develop recommendations. Readiness or improvement support can be considered when it is part of the confirmed scope. QCSV does not claim regulatory inspection authority, guaranteed compliance or guaranteed audit success."
            />
          </Container>
        </Section>

        <Section>
          <Container>
            <SectionHeading eyebrow="WHAT QCSV PROVIDES" title="Assessment capabilities organized around the review scope." description="QCSV can support current-state review, gap identification, documentation review, findings and recommendations. The assessment type, deliverables and qualifications require client confirmation." />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability) => (
                <Card key={capability.title} interactive className="flex h-full flex-col p-6">
                  <Icon icon={capability.icon} size="md" />
                  <h3 className="mt-5 font-display text-lg font-semibold text-[var(--foreground)]">{capability.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-[var(--foreground-muted)]">{capability.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="bg-[var(--surface)]">
          <Container>
            <SectionHeading eyebrow="KEY AREAS / CAPABILITIES" title="From current-state evidence to practical recommendations." description="The emphasis can be adapted to the confirmed assignment, keeping review findings and next-step considerations distinct from any regulatory determination." />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Current state", "Establish the technology, quality or project context under review."],
                ["Gaps and risk", "Organize gaps and risk considerations for discussion."],
                ["Findings", "Document observations supported by the agreed review evidence."],
                ["Next steps", "Frame recommendations and improvement priorities without guarantees."],
              ].map(([title, description]) => (
                <Card key={title} className="p-6"><h3 className="font-display text-lg font-semibold text-[var(--foreground)]">{title}</h3><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">{description}</p></Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <SectionHeading eyebrow="QCSV APPROACH" title="A structured path from assessment scope to delivery." description="QCSV's established approach helps organize the purpose, evidence, review, documentation and handover for an assessment or related project activity." />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {approach.map(([number, title, description, icon]) => (
                <Card key={number} className="relative p-6"><div className="flex items-center justify-between"><span className="font-mono text-xs font-semibold text-[var(--primary)]">{number}</span><Icon icon={icon} size="sm" /></div><h3 className="mt-6 font-display text-lg font-semibold text-[var(--foreground)]">{title}</h3><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">{description}</p></Card>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="bg-[var(--surface)]">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <SectionHeading eyebrow="RELEVANT INDUSTRIES" title="Assessment support across confirmed QCSV industries." description="QCSV's confirmed industry catalog includes the following environments. Specific assessment experience requires confirmation." />
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">{industries.map((industry) => <li key={industry} className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 text-sm font-semibold text-[var(--foreground-muted)]">{industry}</li>)}</ul>
              </div>
              <div>
                <SectionHeading eyebrow="RELATED SUCCESS STORIES" title="A confirmed assessment engagement." description="The following QCSV story is directly relevant to Audits / Assessments. No additional details or outcomes are confirmed." />
                <div className="mt-8 space-y-3">{relatedStories.map((story) => <Card key={story.title} className="flex items-center gap-4 p-5"><Icon icon={SearchCheck} size="sm" /><div><h3 className="font-display text-base font-semibold text-[var(--foreground)]">{story.title}</h3><p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[var(--foreground-subtle)]">{story.location} <span aria-hidden="true">•</span> {story.industry}</p></div></Card>)}</div>
              </div>
            </div>
          </Container>
        </Section>

        <Section spacing="large"><Container><div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-12 text-center sm:px-10"><SectionHeading align="center" eyebrow="START A CONVERSATION" title="Discuss your assessment requirements with QCSV." description="Connect with QCSV to discuss a current-state assessment, gap review or quality-focused improvement need." /><Link href="/#contact" className="mt-8 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">Talk to QCSV</Link></div></Container></Section>
      </main>
      <Footer />
    </div>
  );
}
