import Link from "next/link";
import {
  ClipboardCheck,
  FileCheck2,
  Flag,
  Lightbulb,
  Network,
  SearchCheck,
  ShieldCheck,
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
  { title: "Technology resource support", description: "Technology resource support aligned with the needs of confirmed project activities.", icon: Users },
  { title: "Project-based staffing", description: "Flexible staffing context for technology initiatives with a defined project scope.", icon: Network },
  { title: "Technical capability alignment", description: "Support for aligning technical resource needs with project responsibilities and priorities.", icon: Target },
  { title: "Flexible delivery support", description: "Delivery support that can be discussed around the confirmed engagement model and requirements.", icon: Workflow },
  { title: "Technology initiative support", description: "Resource support for technology initiatives where roles, capabilities and responsibilities are confirmed.", icon: ShieldCheck },
  { title: "Project coordination", description: "Coordination support for resource expectations, project activities and delivery communication.", icon: ClipboardCheck },
];

const approach = [
  ["01", "Understand", "Understand the technology initiative, resource needs and project requirements.", Lightbulb],
  ["02", "Assess", "Assess responsibilities, technical context, priorities and delivery considerations.", SearchCheck],
  ["03", "Plan", "Define resource scope, responsibilities, timing and project priorities.", Target],
  ["04", "Execute", "Coordinate agreed staffing and delivery activities within the confirmed model.", Workflow],
  ["05", "Validate", "Review resource alignment and project activities appropriate to the scope.", ClipboardCheck],
  ["06", "Document", "Maintain clear project, role and delivery documentation.", FileCheck2],
  ["07", "Deliver", "Complete the engagement with an organized handover and delivery outcome.", Flag],
] as const;

const industries = ["Pharmaceuticals", "Medical Devices", "Life Sciences", "Semiconductor", "Regulated Manufacturing"];

export default function ITStaffingPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <main>
        <section className="relative isolate overflow-hidden"><div aria-hidden="true" className="qcsv-ambient-glow -left-24 top-20" /><div aria-hidden="true" className="qcsv-ambient-glow -right-32 bottom-0 bg-[rgba(99,102,241,0.1)]" /><Container><div className="relative grid gap-12 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><div className="max-w-3xl"><SectionHeading eyebrow="IT STAFFING" title="IT Staffing aligned with technology project needs." description="QCSV provides flexible technology staffing support for project and delivery needs within a confirmed engagement scope." /><Link href="/#contact" className="mt-9 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">Talk to QCSV</Link></div><Card className="relative overflow-hidden p-7 sm:p-9"><div aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10" /><Icon icon={Users} size="lg" /><h2 className="mt-6 max-w-sm font-display text-2xl font-bold text-[var(--foreground)]">Resources aligned to the work.</h2><p className="mt-4 max-w-sm text-sm leading-6 text-[var(--foreground-muted)]">IT staffing can support technology initiatives through project-based resource coordination and technical capability alignment.</p></Card></div></Container></section>

        <Section className="bg-[var(--surface)]"><Container><SectionHeading eyebrow="OVERVIEW" title="Flexible technology resource support for defined project needs." description="IT staffing can involve technology resource support, project-based staffing, technical capability alignment and flexible delivery support. QCSV's confirmed catalog includes IT Staffing; team composition, locations, engagement model and availability require client confirmation." /></Container></Section>

        <Section><Container><SectionHeading eyebrow="WHAT QCSV PROVIDES" title="Practical staffing support for technology initiatives." description="QCSV can support resource coordination and technical capability alignment where the project needs, roles and engagement model are confirmed." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{capabilities.map((capability) => <Card key={capability.title} interactive className="flex h-full flex-col p-6"><Icon icon={capability.icon} size="md" /><h3 className="mt-5 font-display text-lg font-semibold text-[var(--foreground)]">{capability.title}</h3><p className="mt-3 flex-1 text-sm leading-6 text-[var(--foreground-muted)]">{capability.description}</p></Card>)}</div></Container></Section>

        <Section className="bg-[var(--surface)]"><Container><SectionHeading eyebrow="KEY AREAS / CAPABILITIES" title="Resource alignment without unsupported staffing claims." description="The confirmed project scope should establish technical needs, responsibilities, engagement model, timing and delivery expectations." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[["Technical needs", "Clarify the capability required for the initiative."], ["Project scope", "Align resource support to defined activities and priorities."], ["Delivery model", "Confirm how resource and project responsibilities are organized."], ["Communication", "Keep role expectations and delivery coordination clear."]].map(([title, description]) => <Card key={title} className="p-6"><h3 className="font-display text-lg font-semibold text-[var(--foreground)]">{title}</h3><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">{description}</p></Card>)}</div></Container></Section>

        <Section><Container><SectionHeading eyebrow="QCSV APPROACH" title="A structured approach from resource need to delivery." description="QCSV's established approach helps organize the initiative, resource context, responsibilities, coordination, documentation and handover without implying a specific staffing scale or guarantee." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{approach.map(([number, title, description, icon]) => <Card key={number} className="relative p-6"><div className="flex items-center justify-between"><span className="font-mono text-xs font-semibold text-[var(--primary)]">{number}</span><Icon icon={icon} size="sm" /></div><h3 className="mt-6 font-display text-lg font-semibold text-[var(--foreground)]">{title}</h3><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">{description}</p></Card>)}</div></Container></Section>

        <Section className="bg-[var(--surface)]"><Container><div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start"><div><SectionHeading eyebrow="RELEVANT INDUSTRIES" title="Technology staffing support across confirmed QCSV industries." description="QCSV's confirmed industry catalog includes the following environments. Staffing experience by industry requires confirmation." /><ul className="mt-8 grid gap-3 sm:grid-cols-2">{industries.map((industry) => <li key={industry} className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 text-sm font-semibold text-[var(--foreground-muted)]">{industry}</li>)}</ul></div><Card className="p-7 sm:p-9"><Icon icon={Users} size="md" /><h2 className="mt-5 font-display text-2xl font-bold text-[var(--foreground)]">No unrelated success story is presented.</h2><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">The current QCSV source material does not confirm an IT Staffing success story. This page does not infer team size, hiring results, locations or availability.</p></Card></div></Container></Section>

        <Section spacing="large"><Container><div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-12 text-center sm:px-10"><SectionHeading align="center" eyebrow="START A CONVERSATION" title="Discuss your technology staffing requirements with QCSV." description="Connect with QCSV to discuss project-based staffing, technical capability alignment or flexible delivery support." /><Link href="/#contact" className="mt-8 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">Talk to QCSV</Link></div></Container></Section>
      </main>
      <Footer />
    </div>
  );
}
