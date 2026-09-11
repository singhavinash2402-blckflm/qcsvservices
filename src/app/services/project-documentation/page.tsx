import Link from "next/link";
import {
  ClipboardCheck,
  FileCheck2,
  FileText,
  Flag,
  GitBranch,
  Lightbulb,
  ListChecks,
  SearchCheck,
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

type Capability = { title: string; description: string; icon: LucideIcon };

const capabilities: Capability[] = [
  { title: "Structured project records", description: "Organized project records that keep decisions, activities and delivery information clear.", icon: FileText },
  { title: "Requirements documentation", description: "Documentation support for requirements, responsibilities and project expectations.", icon: ListChecks },
  { title: "Project planning documentation", description: "Clear planning records for scope, activities, priorities and delivery coordination.", icon: Target },
  { title: "Specifications", description: "Specification support where the document type and project responsibility are confirmed.", icon: FileCheck2 },
  { title: "Testing and validation documentation", description: "Testing or validation documentation support where applicable to the confirmed project scope.", icon: ClipboardCheck },
  { title: "Traceability", description: "Support for connecting requirements, activities, evidence and project decisions.", icon: GitBranch },
  { title: "Controlled documentation", description: "Documentation coordination that keeps review, version and change considerations visible.", icon: ShieldCheck },
];

const approach = [
  ["01", "Understand", "Understand documentation objectives, project context and stakeholder requirements.", Lightbulb],
  ["02", "Assess", "Assess existing records, requirements, dependencies and documentation needs.", SearchCheck],
  ["03", "Plan", "Define document scope, responsibilities, review points and priorities.", Target],
  ["04", "Execute", "Prepare and coordinate documentation activities within the agreed project scope.", Workflow],
  ["05", "Validate", "Review documentation and evidence appropriate to the project requirements.", ClipboardCheck],
  ["06", "Document", "Maintain controlled records, traceability and clear document history.", FileCheck2],
  ["07", "Deliver", "Complete the engagement with an organized documentation handover.", Flag],
] as const;

const industries = ["Pharmaceuticals", "Medical Devices", "Life Sciences", "Semiconductor", "Regulated Manufacturing"];

export default function ProjectDocumentationPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <main>
        <section className="relative isolate overflow-hidden"><div aria-hidden="true" className="qcsv-ambient-glow -left-24 top-20" /><div aria-hidden="true" className="qcsv-ambient-glow -right-32 bottom-0 bg-[rgba(99,102,241,0.1)]" /><Container><div className="relative grid gap-12 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><div className="max-w-3xl"><SectionHeading eyebrow="PROJECT DOCUMENTATION" title="Project Documentation for clear and controlled technology delivery." description="QCSV provides structured documentation support for technology, validation and quality-related project activities within a confirmed scope." /><Link href="/#contact" className="mt-9 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">Talk to QCSV</Link></div><Card className="relative overflow-hidden p-7 sm:p-9"><div aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10" /><Icon icon={FileText} size="lg" /><h2 className="mt-6 max-w-sm font-display text-2xl font-bold text-[var(--foreground)]">Records that keep project work connected.</h2><p className="mt-4 max-w-sm text-sm leading-6 text-[var(--foreground-muted)]">Project documentation can connect requirements, plans, specifications, evidence, traceability and controlled review across delivery activities.</p></Card></div></Container></section>

        <Section className="bg-[var(--surface)]"><Container><SectionHeading eyebrow="OVERVIEW" title="Documentation that supports clarity, traceability and delivery." description="Project documentation can include structured project records, requirements and planning documentation, specifications, testing or validation documentation where applicable, traceability and controlled documentation. QCSV's specific document types, ownership and tools require client confirmation." /></Container></Section>

        <Section><Container><SectionHeading eyebrow="WHAT QCSV PROVIDES" title="Practical documentation support for project activities." description="QCSV can support documentation planning, preparation, coordination and control across technology, validation and quality initiatives where the engagement scope is confirmed." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{capabilities.map((capability) => <Card key={capability.title} interactive className="flex h-full flex-col p-6"><Icon icon={capability.icon} size="md" /><h3 className="mt-5 font-display text-lg font-semibold text-[var(--foreground)]">{capability.title}</h3><p className="mt-3 flex-1 text-sm leading-6 text-[var(--foreground-muted)]">{capability.description}</p></Card>)}</div></Container></Section>

        <Section className="bg-[var(--surface)]"><Container><SectionHeading eyebrow="KEY AREAS / CAPABILITIES" title="A controlled record of what the project needs and does." description="The confirmed project scope should establish document types, authorship, review, approval, version control and traceability expectations." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[["Requirements", "Keep requirements and responsibilities clear."], ["Planning records", "Document scope, activities, priorities and decisions."], ["Evidence", "Connect testing or validation evidence where applicable."], ["Document control", "Keep reviews, versions and changes visible."]].map(([title, description]) => <Card key={title} className="p-6"><h3 className="font-display text-lg font-semibold text-[var(--foreground)]">{title}</h3><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">{description}</p></Card>)}</div></Container></Section>

        <Section><Container><SectionHeading eyebrow="QCSV APPROACH" title="A structured approach from requirements to handover." description="QCSV's established approach helps organize documentation objectives, requirements, planning, preparation, review, control and delivery without assuming a fixed document set." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{approach.map(([number, title, description, icon]) => <Card key={number} className="relative p-6"><div className="flex items-center justify-between"><span className="font-mono text-xs font-semibold text-[var(--primary)]">{number}</span><Icon icon={icon} size="sm" /></div><h3 className="mt-6 font-display text-lg font-semibold text-[var(--foreground)]">{title}</h3><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">{description}</p></Card>)}</div></Container></Section>

        <Section className="bg-[var(--surface)]"><Container><div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start"><div><SectionHeading eyebrow="RELEVANT INDUSTRIES" title="Documentation support across confirmed QCSV industries." description="QCSV's confirmed industry catalog includes the following environments. Documentation experience by industry requires confirmation." /><ul className="mt-8 grid gap-3 sm:grid-cols-2">{industries.map((industry) => <li key={industry} className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 text-sm font-semibold text-[var(--foreground-muted)]">{industry}</li>)}</ul></div><Card className="p-7 sm:p-9"><Icon icon={FileCheck2} size="md" /><h2 className="mt-5 font-display text-2xl font-bold text-[var(--foreground)]">No unrelated success story is presented.</h2><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">The current QCSV source material does not confirm a Project Documentation success story. This page keeps document scope and outcomes within the confirmed evidence.</p></Card></div></Container></Section>

        <Section spacing="large"><Container><div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-12 text-center sm:px-10"><SectionHeading align="center" eyebrow="START A CONVERSATION" title="Discuss project documentation support for your technology initiative." description="Connect with QCSV to discuss requirements, planning records, specifications, traceability or controlled documentation needs." /><Link href="/#contact" className="mt-8 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">Talk to QCSV</Link></div></Container></Section>
      </main>
      <Footer />
    </div>
  );
}
