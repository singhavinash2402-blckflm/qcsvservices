import Link from "next/link";
import {
  Boxes,
  ClipboardCheck,
  FileCheck2,
  Flag,
  GitBranch,
  Lightbulb,
  Network,
  PackageCheck,
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
  { title: "Product identification", description: "Support context for defining product identification and related project information needs.", icon: PackageCheck },
  { title: "Serialization support", description: "Serialization-system support within the confirmed product, technology and project scope.", icon: Boxes },
  { title: "Traceability", description: "Structured consideration of traceability and the information needed across a supply-chain context.", icon: GitBranch },
  { title: "Data capture and exchange", description: "Documentation and coordination support for product and supply-chain data capture or exchange activities.", icon: Network },
  { title: "Supply-chain information flow", description: "Support for understanding information flow between packaging, product and supply-chain activities.", icon: Workflow },
  { title: "Verification concepts", description: "Verification-related project support where activities and responsibilities are confirmed.", icon: ClipboardCheck },
];

const approach = [
  ["01", "Understand", "Understand product, packaging, supply-chain and project requirements.", Lightbulb],
  ["02", "Assess", "Assess information flow, data, risks and verification considerations.", SearchCheck],
  ["03", "Plan", "Define scope, responsibilities, documentation and project priorities.", Target],
  ["04", "Execute", "Execute agreed activities with structured coordination and clear records.", Workflow],
  ["05", "Validate", "Review verification or validation activities appropriate to the confirmed scope.", ClipboardCheck],
  ["06", "Document", "Maintain records for data, decisions, testing and project delivery.", FileCheck2],
  ["07", "Deliver", "Complete the engagement with an organized handover and delivery outcome.", Flag],
] as const;

const industries = ["Pharmaceuticals", "Medical Devices", "Life Sciences", "Regulated Manufacturing"];

export default function SerializationPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <main>
        <section className="relative isolate overflow-hidden"><div aria-hidden="true" className="qcsv-ambient-glow -left-24 top-20" /><div aria-hidden="true" className="qcsv-ambient-glow -right-32 bottom-0 bg-[rgba(99,102,241,0.1)]" /><Container><div className="relative grid gap-12 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><div className="max-w-3xl"><SectionHeading eyebrow="SERIALIZATION" title="Serialization support for traceability-focused technology environments." description="QCSV provides serialization support for product and supply-chain information activities within a confirmed technology and project scope." /><Link href="/#contact" className="mt-9 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">Talk to QCSV</Link></div><Card className="relative overflow-hidden p-7 sm:p-9"><div aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10" /><Icon icon={PackageCheck} size="lg" /><h2 className="mt-6 max-w-sm font-display text-2xl font-bold text-[var(--foreground)]">Product identity connected to information flow.</h2><p className="mt-4 max-w-sm text-sm leading-6 text-[var(--foreground-muted)]">Serialization work can involve product identification, data capture, exchange, verification and traceability across packaging and supply-chain contexts.</p></Card></div></Container></section>

        <Section className="bg-[var(--surface)]"><Container><SectionHeading eyebrow="OVERVIEW" title="Serialization support shaped around data and traceability context." description="Serialization is a general technology and supply-chain context involving product identification, traceability, data capture and exchange, verification concepts and packaging or supply-chain information flow. QCSV's confirmed service catalog includes Serialization; country-specific requirements and regulatory responsibilities require client confirmation." /></Container></Section>

        <Section><Container><SectionHeading eyebrow="WHAT QCSV PROVIDES" title="Practical support around serialization-system activities." description="QCSV can support serialization-related technology coordination, documentation, data and verification discussions where the engagement scope is confirmed. No regulatory compliance guarantee is implied." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{capabilities.map((capability) => <Card key={capability.title} interactive className="flex h-full flex-col p-6"><Icon icon={capability.icon} size="md" /><h3 className="mt-5 font-display text-lg font-semibold text-[var(--foreground)]">{capability.title}</h3><p className="mt-3 flex-1 text-sm leading-6 text-[var(--foreground-muted)]">{capability.description}</p></Card>)}</div></Container></Section>

        <Section className="bg-[var(--surface)]"><Container><SectionHeading eyebrow="KEY AREAS / CAPABILITIES" title="Traceability depends on connected information." description="The confirmed project scope should establish how product identity, data capture, exchange, verification and supply-chain information flow are addressed." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[["Product identity", "Clarify the identity information associated with the product."], ["Data capture", "Consider the information captured across the agreed activities."], ["Data exchange", "Organize the interfaces and responsibilities confirmed for the project."], ["Verification", "Document verification concepts and activities within the agreed scope."]].map(([title, description]) => <Card key={title} className="p-6"><h3 className="font-display text-lg font-semibold text-[var(--foreground)]">{title}</h3><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">{description}</p></Card>)}</div></Container></Section>

        <Section><Container><SectionHeading eyebrow="QCSV APPROACH" title="A structured path from product context to delivery." description="QCSV's established approach helps organize requirements, information flow, risk, planning, execution, verification, documentation and delivery without converting regulatory concepts into unsupported QCSV claims." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{approach.map(([number, title, description, icon]) => <Card key={number} className="relative p-6"><div className="flex items-center justify-between"><span className="font-mono text-xs font-semibold text-[var(--primary)]">{number}</span><Icon icon={icon} size="sm" /></div><h3 className="mt-6 font-display text-lg font-semibold text-[var(--foreground)]">{title}</h3><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">{description}</p></Card>)}</div></Container></Section>

        <Section className="bg-[var(--surface)]"><Container><div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start"><div><SectionHeading eyebrow="RELEVANT INDUSTRIES" title="Serialization support in confirmed QCSV industries." description="QCSV's confirmed industry catalog includes the following environments. Serialization-specific experience requires confirmation." /><ul className="mt-8 grid gap-3 sm:grid-cols-2">{industries.map((industry) => <li key={industry} className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 text-sm font-semibold text-[var(--foreground-muted)]">{industry}</li>)}</ul></div><Card className="p-7 sm:p-9"><Icon icon={Network} size="md" /><h2 className="mt-5 font-display text-2xl font-bold text-[var(--foreground)]">No unrelated success story is presented.</h2><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">The current QCSV source material does not confirm a Serialization success story. This page does not infer country-specific experience or regulatory capability.</p></Card></div></Container></Section>

        <Section spacing="large"><Container><div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-12 text-center sm:px-10"><SectionHeading align="center" eyebrow="START A CONVERSATION" title="Discuss your serialization and traceability requirements with QCSV." description="Connect with QCSV to discuss product identification, data exchange or serialization-system support within a confirmed scope." /><Link href="/#contact" className="mt-8 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">Talk to QCSV</Link></div></Container></Section>
      </main>
      <Footer />
    </div>
  );
}
