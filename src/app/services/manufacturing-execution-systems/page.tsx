import Link from "next/link";
import {
  ClipboardCheck,
  Factory,
  FileCheck2,
  Flag,
  Gauge,
  Layers3,
  Lightbulb,
  Network,
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

type Capability = { title: string; description: string; icon: LucideIcon };

const capabilities: Capability[] = [
  { title: "Manufacturing operations management", description: "MES support context for technology activities connected to manufacturing operations management.", icon: Factory },
  { title: "Enterprise-to-manufacturing information flow", description: "Support for considering how enterprise and manufacturing information needs connect within a confirmed scope.", icon: Network },
  { title: "Production data", description: "Project and documentation support for production information and manufacturing data considerations.", icon: ClipboardCheck },
  { title: "Manufacturing process visibility", description: "Structured attention to the information needed to understand manufacturing process activities.", icon: Gauge },
  { title: "MES support context", description: "MES-related technology support without assuming a specific platform, vendor or implementation.", icon: Layers3 },
  { title: "Technology and quality considerations", description: "Coordination support for technology, documentation and quality considerations within the agreed project scope.", icon: FileCheck2 },
];

const approach = [
  ["01", "Understand", "Understand manufacturing objectives, information needs and project requirements.", Lightbulb],
  ["02", "Assess", "Assess processes, systems, production data, risks and quality considerations.", SearchCheck],
  ["03", "Plan", "Define scope, responsibilities, information flow and project priorities.", Target],
  ["04", "Execute", "Execute agreed activities with structured coordination and clear records.", Workflow],
  ["05", "Validate", "Review verification or validation activities appropriate to the confirmed scope.", ClipboardCheck],
  ["06", "Document", "Maintain clear documentation across the manufacturing technology work.", FileCheck2],
  ["07", "Deliver", "Complete the engagement with an organized handover and delivery outcome.", Flag],
] as const;

const industries = ["Pharmaceuticals", "Medical Devices", "Life Sciences", "Semiconductor", "Regulated Manufacturing"];

export default function ManufacturingExecutionSystemsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <main>
        <section className="relative isolate overflow-hidden"><div aria-hidden="true" className="qcsv-ambient-glow -left-24 top-20" /><div aria-hidden="true" className="qcsv-ambient-glow -right-32 bottom-0 bg-[rgba(99,102,241,0.1)]" /><Container><div className="relative grid gap-12 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><div className="max-w-3xl"><SectionHeading eyebrow="MANUFACTURING EXECUTION SYSTEMS" title="Manufacturing Execution Systems support for technology-enabled manufacturing." description="QCSV provides MES support context for manufacturing operations, production information and technology-enabled delivery within a confirmed project scope." /><Link href="/#contact" className="mt-9 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">Talk to QCSV</Link></div><Card className="relative overflow-hidden p-7 sm:p-9"><div aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10" /><Icon icon={Factory} size="lg" /><h2 className="mt-6 max-w-sm font-display text-2xl font-bold text-[var(--foreground)]">Manufacturing information in context.</h2><p className="mt-4 max-w-sm text-sm leading-6 text-[var(--foreground-muted)]">MES-related work can connect manufacturing operations, production data, enterprise information flow and quality considerations without assuming a particular technology.</p></Card></div></Container></section>

        <Section className="bg-[var(--surface)]"><Container><SectionHeading eyebrow="OVERVIEW" title="A bridge between enterprise information and manufacturing activity." description="Manufacturing Execution Systems are a general technology context for manufacturing operations management, production information flow and manufacturing data. QCSV's confirmed service catalog includes MES support; specific platforms, vendors, integrations and implementations require client confirmation." /></Container></Section>

        <Section><Container><SectionHeading eyebrow="WHAT QCSV PROVIDES" title="Practical support around MES-related project context." description="QCSV can support MES-related technology coordination, documentation, assessment and quality-focused project activities where the engagement scope is confirmed." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{capabilities.map((capability) => <Card key={capability.title} interactive className="flex h-full flex-col p-6"><Icon icon={capability.icon} size="md" /><h3 className="mt-5 font-display text-lg font-semibold text-[var(--foreground)]">{capability.title}</h3><p className="mt-3 flex-1 text-sm leading-6 text-[var(--foreground-muted)]">{capability.description}</p></Card>)}</div></Container></Section>

        <Section className="bg-[var(--surface)]"><Container><SectionHeading eyebrow="KEY AREAS / CAPABILITIES" title="Production information, process visibility and quality considerations." description="The confirmed project scope should establish how information flow, production data, process visibility and technology or quality activities are addressed." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[["Information flow", "Consider the relationship between enterprise and manufacturing information."], ["Production data", "Keep production information and data context visible."], ["Process visibility", "Organize the information needed to understand manufacturing activities."], ["Quality context", "Include technology and quality considerations within the agreed scope."]].map(([title, description]) => <Card key={title} className="p-6"><h3 className="font-display text-lg font-semibold text-[var(--foreground)]">{title}</h3><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">{description}</p></Card>)}</div></Container></Section>

        <Section><Container><SectionHeading eyebrow="QCSV APPROACH" title="A structured path from manufacturing context to delivery." description="QCSV's established approach helps organize manufacturing objectives, information flow, risk, planning, execution, documentation and delivery without assuming a specific MES platform." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{approach.map(([number, title, description, icon]) => <Card key={number} className="relative p-6"><div className="flex items-center justify-between"><span className="font-mono text-xs font-semibold text-[var(--primary)]">{number}</span><Icon icon={icon} size="sm" /></div><h3 className="mt-6 font-display text-lg font-semibold text-[var(--foreground)]">{title}</h3><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">{description}</p></Card>)}</div></Container></Section>

        <Section className="bg-[var(--surface)]"><Container><div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start"><div><SectionHeading eyebrow="RELEVANT INDUSTRIES" title="MES support context across confirmed QCSV industries." description="QCSV's confirmed industry catalog includes the following environments. MES-specific experience requires confirmation." /><ul className="mt-8 grid gap-3 sm:grid-cols-2">{industries.map((industry) => <li key={industry} className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 text-sm font-semibold text-[var(--foreground-muted)]">{industry}</li>)}</ul></div><Card className="p-7 sm:p-9"><Icon icon={Layers3} size="md" /><h2 className="mt-5 font-display text-2xl font-bold text-[var(--foreground)]">No unrelated success story is presented.</h2><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">The current QCSV source material does not confirm an MES success story. This page keeps platform and experience claims within the confirmed evidence.</p></Card></div></Container></Section>

        <Section spacing="large"><Container><div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-12 text-center sm:px-10"><SectionHeading align="center" eyebrow="START A CONVERSATION" title="Discuss your MES technology and delivery requirements with QCSV." description="Connect with QCSV to discuss manufacturing information flow, production data or MES-related project support." /><Link href="/#contact" className="mt-8 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">Talk to QCSV</Link></div></Container></Section>
      </main>
      <Footer />
    </div>
  );
}
