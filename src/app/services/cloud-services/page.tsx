import Link from "next/link";
import {
  Cloud,
  CloudCog,
  ClipboardCheck,
  FileCheck2,
  Flag,
  Gauge,
  HardDrive,
  Lightbulb,
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

type Capability = { title: string; description: string; icon: LucideIcon };

const capabilities: Capability[] = [
  { title: "Cloud adoption", description: "Support context for planning cloud adoption around confirmed technology and project needs.", icon: Cloud },
  { title: "Cloud infrastructure and services", description: "Cloud infrastructure and service-model discussions within the agreed project scope.", icon: CloudCog },
  { title: "Migration and modernization", description: "Project coordination and documentation support for migration or modernization activities where confirmed.", icon: Workflow },
  { title: "Scalability and availability", description: "Consideration of scalability and availability as general cloud planning topics, without guarantees.", icon: Gauge },
  { title: "Security and data considerations", description: "Support for keeping security and data considerations visible in cloud project discussions.", icon: LockKeyhole },
  { title: "Regulated-environment context", description: "Cloud support context for regulated environments, with specific responsibilities requiring confirmation.", icon: ClipboardCheck },
];

const approach = [
  ["01", "Understand", "Understand business objectives, cloud context and project requirements.", Lightbulb],
  ["02", "Assess", "Assess services, architecture context, risks, data and quality considerations.", SearchCheck],
  ["03", "Plan", "Define migration, modernization, documentation and delivery priorities.", Target],
  ["04", "Execute", "Execute agreed activities with structured coordination and clear records.", Workflow],
  ["05", "Validate", "Review verification or qualification activities appropriate to the confirmed scope.", ClipboardCheck],
  ["06", "Document", "Maintain clear documentation for cloud decisions, activities and handover.", FileCheck2],
  ["07", "Deliver", "Complete the engagement with an organized handover and delivery outcome.", Flag],
] as const;

const industries = ["Pharmaceuticals", "Medical Devices", "Life Sciences", "Semiconductor", "Regulated Manufacturing"];

export default function CloudServicesPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <main>
        <section className="relative isolate overflow-hidden"><div aria-hidden="true" className="qcsv-ambient-glow -left-24 top-20" /><div aria-hidden="true" className="qcsv-ambient-glow -right-32 bottom-0 bg-[rgba(99,102,241,0.1)]" /><Container><div className="relative grid gap-12 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><div className="max-w-3xl"><SectionHeading eyebrow="CLOUD SERVICES" title="Cloud Services for modern technology environments." description="QCSV provides cloud-focused technology and project support for adoption, modernization and delivery activities within a confirmed scope." /><Link href="/#contact" className="mt-9 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">Talk to QCSV</Link></div><Card className="relative overflow-hidden p-7 sm:p-9"><div aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10" /><Icon icon={Cloud} size="lg" /><h2 className="mt-6 max-w-sm font-display text-2xl font-bold text-[var(--foreground)]">Cloud decisions grounded in project context.</h2><p className="mt-4 max-w-sm text-sm leading-6 text-[var(--foreground-muted)]">Cloud work can involve service models, modernization, scalability, availability, security and data considerations. The specific technology scope is confirmed for each engagement.</p></Card></div></Container></section>

        <Section className="bg-[var(--surface)]"><Container><SectionHeading eyebrow="OVERVIEW" title="Cloud support shaped around adoption, delivery and data considerations." description="Cloud computing includes infrastructure, platform and software service models, as well as adoption, migration and modernization considerations. QCSV's confirmed service catalog includes Cloud Services; specific providers, architectures, security responsibilities and regulated-environment experience require client confirmation." /></Container></Section>

        <Section><Container><SectionHeading eyebrow="WHAT QCSV PROVIDES" title="Practical support for cloud-focused technology activities." description="QCSV can support cloud project coordination, assessment, documentation and technology delivery activities where the engagement scope is confirmed. No provider specialization or performance guarantee is implied." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{capabilities.map((capability) => <Card key={capability.title} interactive className="flex h-full flex-col p-6"><Icon icon={capability.icon} size="md" /><h3 className="mt-5 font-display text-lg font-semibold text-[var(--foreground)]">{capability.title}</h3><p className="mt-3 flex-1 text-sm leading-6 text-[var(--foreground-muted)]">{capability.description}</p></Card>)}</div></Container></Section>

        <Section className="bg-[var(--surface)]"><Container><SectionHeading eyebrow="KEY AREAS / CAPABILITIES" title="Cloud planning with security, data and delivery in view." description="The confirmed project scope should establish the service model, migration or modernization activity, availability needs, security responsibilities and data considerations." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[["Service models", "Clarify the infrastructure, platform or software service context."], ["Modernization", "Organize migration or modernization activities within the project scope."], ["Availability", "Consider availability as a planning topic without making guarantees."], ["Security and data", "Keep security and data responsibilities visible and confirmed."]].map(([title, description]) => <Card key={title} className="p-6"><h3 className="font-display text-lg font-semibold text-[var(--foreground)]">{title}</h3><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">{description}</p></Card>)}</div></Container></Section>

        <Section><Container><SectionHeading eyebrow="QCSV APPROACH" title="A structured approach from cloud context to delivery." description="QCSV's established approach helps organize objectives, service context, risk, planning, execution, verification, documentation and handover without assuming a particular cloud provider." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{approach.map(([number, title, description, icon]) => <Card key={number} className="relative p-6"><div className="flex items-center justify-between"><span className="font-mono text-xs font-semibold text-[var(--primary)]">{number}</span><Icon icon={icon} size="sm" /></div><h3 className="mt-6 font-display text-lg font-semibold text-[var(--foreground)]">{title}</h3><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">{description}</p></Card>)}</div></Container></Section>

        <Section className="bg-[var(--surface)]"><Container><div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start"><div><SectionHeading eyebrow="RELEVANT INDUSTRIES" title="Cloud support context across confirmed QCSV industries." description="QCSV's confirmed industry catalog includes the following environments. Cloud-specific experience in each industry requires confirmation." /><ul className="mt-8 grid gap-3 sm:grid-cols-2">{industries.map((industry) => <li key={industry} className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 text-sm font-semibold text-[var(--foreground-muted)]">{industry}</li>)}</ul></div><Card className="p-7 sm:p-9"><Icon icon={HardDrive} size="md" /><h2 className="mt-5 font-display text-2xl font-bold text-[var(--foreground)]">No unrelated success story is presented.</h2><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">The current QCSV source material does not confirm a Cloud Services success story. This page does not infer provider specialization, security certification or cloud outcomes.</p></Card></div></Container></Section>

        <Section spacing="large"><Container><div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-12 text-center sm:px-10"><SectionHeading align="center" eyebrow="START A CONVERSATION" title="Discuss your cloud technology requirements with QCSV." description="Connect with QCSV to discuss cloud adoption, modernization, security or data considerations within a confirmed project scope." /><Link href="/#contact" className="mt-8 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">Talk to QCSV</Link></div></Container></Section>
      </main>
      <Footer />
    </div>
  );
}
