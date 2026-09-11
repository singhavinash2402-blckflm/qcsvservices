import Link from "next/link";
import {
  ClipboardCheck,
  FileCheck2,
  Flag,
  HardDrive,
  Layers3,
  Lightbulb,
  PencilRuler,
  SearchCheck,
  Settings2,
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
    title: "SAP enterprise technology support",
    description:
      "Support context for SAP-related enterprise technology activities within a confirmed project scope.",
    icon: Layers3,
  },
  {
    title: "SAP validation context",
    description:
      "Validation-related support where the SAP system and QCSV responsibilities are confirmed for the engagement.",
    icon: ClipboardCheck,
  },
  {
    title: "Technical upgrades",
    description:
      "Structured support for technical upgrade activities, without assuming a specific version or product scope.",
    icon: Settings2,
  },
  {
    title: "System changes",
    description:
      "Planning and documentation support for system changes within the agreed project boundaries.",
    icon: PencilRuler,
  },
  {
    title: "Documentation",
    description:
      "Clear project and system documentation support for coordinated enterprise technology work.",
    icon: FileCheck2,
  },
  {
    title: "Structured project delivery",
    description:
      "Project coordination support across scope, responsibilities, priorities and delivery activities.",
    icon: Workflow,
  },
];

const approach = [
  ["01", "Understand", "Understand the business context, SAP environment and project requirements.", Lightbulb],
  ["02", "Assess", "Assess system context, planned changes, risks and applicable quality requirements.", SearchCheck],
  ["03", "Plan", "Define scope, responsibilities, documentation and project priorities.", Target],
  ["04", "Execute", "Execute agreed activities with structured coordination and clear records.", Workflow],
  ["05", "Validate", "Perform validation or verification activities appropriate to the confirmed scope.", ClipboardCheck],
  ["06", "Document", "Maintain clear system, project and change documentation throughout the work.", FileCheck2],
  ["07", "Deliver", "Complete the engagement with an organized handover and delivery outcome.", Flag],
] as const;

const industries = ["Pharmaceuticals", "Medical Devices", "Life Sciences", "Semiconductor", "Regulated Manufacturing"];
const stories = [
  { title: "SAP Validation", location: "UK", industry: "Pharmaceuticals" },
  { title: "SAP Technical Upgrade", location: "US", industry: "Semiconductor" },
];

export default function SAPServicesPage() {
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
                <SectionHeading eyebrow="SAP SERVICES" title="SAP Services for enterprise technology environments." description="QCSV provides SAP-related technology and project support within a confirmed scope, including validation and technical upgrade contexts represented by existing QCSV success stories." />
                <Link href="/#contact" className="mt-9 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">Talk to QCSV</Link>
              </div>
              <Card className="relative overflow-hidden p-7 sm:p-9">
                <div aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10" />
                <Icon icon={Layers3} size="lg" />
                <h2 className="mt-6 max-w-sm font-display text-2xl font-bold text-[var(--foreground)]">Enterprise systems, project context and clear delivery.</h2>
                <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--foreground-muted)]">SAP-related work can involve core business operations, system changes, validation context and technical project delivery. The specific scope is confirmed for each engagement.</p>
              </Card>
            </div>
          </Container>
        </section>

        <Section className="bg-[var(--surface)]"><Container><SectionHeading eyebrow="OVERVIEW" title="SAP support shaped around business operations and project scope." description="SAP is an enterprise resource planning context connected to core business operations. QCSV's confirmed material supports an SAP service offering and two related engagements, while specific modules, versions, implementations and responsibilities require client confirmation." /></Container></Section>

        <Section><Container><SectionHeading eyebrow="WHAT QCSV PROVIDES" title="Practical support for SAP-related technology activities." description="QCSV can support SAP-related validation, technical upgrade, system-change, documentation and project-delivery activities where the engagement scope is confirmed." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{capabilities.map((capability) => <Card key={capability.title} interactive className="flex h-full flex-col p-6"><Icon icon={capability.icon} size="md" /><h3 className="mt-5 font-display text-lg font-semibold text-[var(--foreground)]">{capability.title}</h3><p className="mt-3 flex-1 text-sm leading-6 text-[var(--foreground-muted)]">{capability.description}</p></Card>)}</div></Container></Section>

        <Section className="bg-[var(--surface)]"><Container><SectionHeading eyebrow="KEY AREAS / CAPABILITIES" title="System changes and delivery activities kept connected." description="The confirmed project scope should make the relationship between enterprise technology work, validation context, documentation and delivery responsibilities clear." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[["Core operations", "Keep the business and technology context visible."], ["Technical upgrades", "Coordinate upgrade activities within the confirmed scope."], ["System changes", "Document changes and responsibilities clearly."], ["Project delivery", "Organize priorities, activities and handover." ]].map(([title, description]) => <Card key={title} className="p-6"><h3 className="font-display text-lg font-semibold text-[var(--foreground)]">{title}</h3><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">{description}</p></Card>)}</div></Container></Section>

        <Section><Container><SectionHeading eyebrow="QCSV APPROACH" title="A structured approach for enterprise technology delivery." description="QCSV's established approach helps organize SAP-related scope, risk, planning, execution, validation context, documentation and handover without assuming a specific product or framework." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{approach.map(([number, title, description, icon]) => <Card key={number} className="relative p-6"><div className="flex items-center justify-between"><span className="font-mono text-xs font-semibold text-[var(--primary)]">{number}</span><Icon icon={icon} size="sm" /></div><h3 className="mt-6 font-display text-lg font-semibold text-[var(--foreground)]">{title}</h3><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">{description}</p></Card>)}</div></Container></Section>

        <Section className="bg-[var(--surface)]"><Container><div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start"><div><SectionHeading eyebrow="RELEVANT INDUSTRIES" title="Enterprise technology support across confirmed QCSV industries." description="QCSV's confirmed industry catalog includes the following environments. SAP-specific experience is represented only by the confirmed stories shown." /><ul className="mt-8 grid gap-3 sm:grid-cols-2">{industries.map((industry) => <li key={industry} className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 text-sm font-semibold text-[var(--foreground-muted)]">{industry}</li>)}</ul></div><div><SectionHeading eyebrow="RELATED SUCCESS STORIES" title="Two confirmed SAP engagements." description="Only the confirmed service, location and industry are shown. No additional details or outcomes are asserted." /><div className="mt-8 space-y-3">{stories.map((story) => <Card key={story.title} className="flex items-center gap-4 p-5"><Icon icon={story.title === "SAP Validation" ? ClipboardCheck : HardDrive} size="sm" /><div><h3 className="font-display text-base font-semibold text-[var(--foreground)]">{story.title}</h3><p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[var(--foreground-subtle)]">{story.location} <span aria-hidden="true">•</span> {story.industry}</p></div></Card>)}</div></div></div></Container></Section>

        <Section spacing="large"><Container><div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-12 text-center sm:px-10"><SectionHeading align="center" eyebrow="START A CONVERSATION" title="Discuss your SAP technology or validation needs with QCSV." description="Connect with QCSV to discuss a confirmed SAP-related project scope, upgrade, validation or documentation need." /><Link href="/#contact" className="mt-8 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">Talk to QCSV</Link></div></Container></Section>
      </main>
      <Footer />
    </div>
  );
}
