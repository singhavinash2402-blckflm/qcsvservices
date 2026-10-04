import Link from "next/link";
import {
  AlertTriangle,
  ClipboardCheck,
  FileCheck2,
  Flag,
  Gauge,
  GitBranch,
  Lightbulb,
  ListChecks,
  SearchCheck,
  Target,
  Users,
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
  { title: "Project planning", description: "Planning support that establishes objectives, activities, responsibilities and delivery priorities.", icon: ClipboardCheck },
  { title: "Scope and schedule", description: "Support for clarifying project scope, sequencing work and maintaining schedule visibility.", icon: ListChecks },
  { title: "Dependencies", description: "Coordination support for dependencies between project activities, teams and decisions.", icon: GitBranch },
  { title: "Risk and issue management", description: "Structured consideration and tracking of project risks, issues and response priorities.", icon: AlertTriangle },
  { title: "Stakeholder coordination", description: "Support for clear communication, responsibilities and coordination across project stakeholders.", icon: Users },
  { title: "Quality and delivery tracking", description: "Project visibility across quality activities, progress, priorities and delivery status.", icon: Gauge },
];

const approach = [
  ["01", "Understand", "Understand objectives, scope, stakeholders and project requirements.", Lightbulb],
  ["02", "Assess", "Assess activities, dependencies, risks, issues and delivery context.", SearchCheck],
  ["03", "Plan", "Define scope, schedule, responsibilities and project priorities.", Target],
  ["04", "Execute", "Coordinate structured execution across the agreed project activities.", Workflow],
  ["05", "Validate", "Review progress, quality activities and evidence appropriate to the scope.", ClipboardCheck],
  ["06", "Document", "Maintain clear project records, decisions and delivery information.", FileCheck2],
  ["07", "Deliver", "Complete the engagement with an organized handover and delivery outcome.", Flag],
] as const;

const industries = ["Pharmaceuticals", "Medical Devices", "Life Sciences", "Semiconductor", "Regulated Manufacturing"];

export default function ProjectManagementPage() {
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
                <SectionHeading eyebrow="PROJECT MANAGEMENT" title="Project Management for structured technology delivery." description="QCSV provides project planning, coordination and delivery support for technology, validation and quality initiatives within a confirmed project scope." />
                <Link href="/#contact" className="mt-9 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">Talk to QCSV</Link>
              </div>
              <Card className="relative overflow-hidden p-7 sm:p-9">
                <div aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10" />
                <Icon icon={ClipboardCheck} size="lg" />
                <h2 className="mt-6 max-w-sm font-display text-2xl font-bold text-[var(--foreground)]">Clear priorities for complex delivery.</h2>
                <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--foreground-muted)]">Project management can connect scope, schedule, dependencies, risks, stakeholders, quality activities and structured execution.</p>
              </Card>
            </div>
          </Container>
        </section>

        <Section className="bg-[var(--surface)]"><Container><SectionHeading eyebrow="OVERVIEW" title="Planning and coordination around the work that matters." description="Project management brings together planning, scope and schedule, dependencies, risk and issue management, stakeholder coordination, quality and delivery tracking, and structured execution. QCSV's specific project roles, methods and responsibilities require client confirmation." /></Container></Section>

        <Section><Container><SectionHeading eyebrow="WHAT QCSV PROVIDES" title="Practical coordination for technology initiatives." description="QCSV can support project planning, delivery coordination and structured execution where the engagement scope is confirmed." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{capabilities.map((capability) => <Card key={capability.title} interactive className="flex h-full flex-col p-6"><Icon icon={capability.icon} size="md" /><h3 className="mt-5 font-display text-lg font-semibold text-[var(--foreground)]">{capability.title}</h3><p className="mt-3 flex-1 text-sm leading-6 text-[var(--foreground-muted)]">{capability.description}</p></Card>)}</div></Container></Section>

        <Section className="bg-[var(--surface)]"><Container><SectionHeading eyebrow="KEY AREAS / CAPABILITIES" title="Delivery visibility from scope through handover." description="The confirmed project scope should define how planning, dependencies, risks, stakeholders, quality activities and delivery tracking are managed." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[["Scope and schedule", "Keep the work, sequence and timing visible."], ["Dependencies", "Coordinate activities that rely on people, decisions or deliverables."], ["Risks and issues", "Track project concerns and response priorities."], ["Delivery tracking", "Maintain visibility across quality, progress and handover."]].map(([title, description]) => <Card key={title} className="p-6"><h3 className="font-display text-lg font-semibold text-[var(--foreground)]">{title}</h3><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">{description}</p></Card>)}</div></Container></Section>

        <Section><Container><SectionHeading eyebrow="QCSV APPROACH" title="A structured approach from understanding to delivery." description="QCSV's established approach provides a practical sequence for planning, assessing, executing, reviewing, documenting and delivering project work." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{approach.map(([number, title, description, icon]) => <Card key={number} className="relative p-6"><div className="flex items-center justify-between"><span className="font-mono text-xs font-semibold text-[var(--primary)]">{number}</span><Icon icon={icon} size="sm" /></div><h3 className="mt-6 font-display text-lg font-semibold text-[var(--foreground)]">{title}</h3><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">{description}</p></Card>)}</div></Container></Section>

        <Section className="bg-[var(--surface)]"><Container><div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start"><div><SectionHeading eyebrow="RELEVANT INDUSTRIES" title="Project delivery support across confirmed QCSV industries." description="QCSV's confirmed industry catalog includes the following environments. Project-management experience by industry requires confirmation." /><ul className="mt-8 grid gap-3 sm:grid-cols-2">{industries.map((industry) => <li key={industry} className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 text-sm font-semibold text-[var(--foreground-muted)]">{industry}</li>)}</ul></div><Card className="p-7 sm:p-9"><Icon icon={Workflow} size="md" /><h2 className="mt-5 font-display text-2xl font-bold text-[var(--foreground)]">No unrelated success story is presented.</h2><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">The current QCSV source material does not confirm a Project Management success story. This page keeps project roles and outcomes within the confirmed evidence.</p></Card></div></Container></Section>

        <Section spacing="large"><Container><div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-12 text-center sm:px-10"><SectionHeading align="center" eyebrow="START A CONVERSATION" title="Discuss project management support for your technology initiative." description="Connect with QCSV to discuss planning, coordination, risk, delivery tracking or structured execution needs." /><Link href="/#contact" className="mt-8 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">Talk to QCSV</Link></div></Container></Section>
      </main>
      <Footer />
    </div>
  );
}
