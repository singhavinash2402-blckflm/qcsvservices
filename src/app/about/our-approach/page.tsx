import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardCheck, FileCheck2, Flag, Lightbulb, SearchCheck, Target, Workflow } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Our Approach",
  description: "QCSV's structured approach from understanding to delivery.",
};

const steps = [
  ["01", "Understand", "Understand the environment, objectives, technology landscape and project requirements.", Lightbulb],
  ["02", "Assess", "Assess needs, processes, systems, dependencies, risks and applicable quality considerations.", SearchCheck],
  ["03", "Plan", "Define the delivery approach, scope, responsibilities and project priorities.", Target],
  ["04", "Execute", "Execute project activities with structured coordination and clear responsibilities.", Workflow],
  ["05", "Validate", "Perform validation, verification or review activities appropriate to the confirmed scope.", ClipboardCheck],
  ["06", "Document", "Maintain clear decisions, evidence and structured documentation throughout the engagement.", FileCheck2],
  ["07", "Deliver", "Complete the engagement with an organized handover and delivery outcome.", Flag],
] as const;

export default function OurApproachPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <main>
        <section className="relative isolate overflow-hidden"><div aria-hidden="true" className="qcsv-ambient-glow -left-24 top-20" /><div aria-hidden="true" className="qcsv-ambient-glow -right-32 bottom-0 bg-[rgba(99,102,241,0.1)]" /><Container><div className="relative grid gap-12 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><div className="max-w-3xl"><SectionHeading eyebrow="OUR APPROACH" title="A structured approach from understanding to delivery." description="QCSV organizes technology, validation, quality and project-delivery work through a practical sequence that keeps scope, risk, responsibilities, evidence and handover visible." /><Link href="/#contact" className="mt-9 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">Discuss your initiative</Link></div><Card className="relative overflow-hidden p-7 sm:p-9"><div aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10" /><Icon icon={Workflow} size="lg" /><h2 className="mt-6 max-w-sm font-display text-2xl font-bold text-[var(--foreground)]">Clarity at each stage of the work.</h2><p className="mt-4 max-w-sm text-sm leading-6 text-[var(--foreground-muted)]">The sequence can be applied to confirmed project needs without assuming a universal tool, framework or outcome.</p></Card></div></Container></section>

        <Section className="bg-[var(--surface)]"><Container><SectionHeading eyebrow="THE QCSV METHOD" title="Understand the environment. Execute with structure." description="The seven-step methodology is confirmed in the current QCSV project material. Detailed methods, tools, governance and role ownership require client confirmation." /></Container></Section>

        <Section><Container><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{steps.map(([number, title, description, icon]) => <Card key={number} className="relative p-6"><div className="flex items-center justify-between"><span className="font-mono text-xs font-semibold text-[var(--primary)]">{number}</span><Icon icon={icon} size="sm" /></div><h2 className="mt-6 font-display text-lg font-semibold text-[var(--foreground)]">{title}</h2><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">{description}</p></Card>)}</div></Container></Section>

        <Section className="bg-[var(--surface)]"><Container><SectionHeading eyebrow="POSITIONING" title="Regulatory expertise, technology, quality and execution." description="QCSV's approach connects these four themes without claiming a specific regulatory framework, certification or guaranteed result." /><div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link href="/services" className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">Explore services</Link><Link href="/about/why-qcsv" className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-strong)] bg-transparent px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors hover:bg-[var(--surface)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">Why QCSV</Link></div></Container></Section>
      </main>
      <Footer />
    </div>
  );
}
