import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardCheck, FileCheck2, Layers3, ShieldCheck } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Why QCSV",
  description: "Why QCSV brings together validation, quality, technology and execution.",
};

const strengths = [
  ["Validation expertise", "Support for computer system validation, qualification and regulated technology environments.", ClipboardCheck],
  ["Regulated-industry focus", "Technology and quality support across confirmed regulated and technology-driven industries.", ShieldCheck],
  ["Technology capability", "Enterprise technology, manufacturing systems, cloud and digital service contexts within confirmed scope.", Layers3],
  ["Documentation and quality", "Structured project documentation and quality-focused execution supporting reliable delivery.", FileCheck2],
] as const;

export default function WhyQCSVPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <main>
        <section className="relative isolate overflow-hidden"><div aria-hidden="true" className="qcsv-ambient-glow -left-24 top-20" /><div aria-hidden="true" className="qcsv-ambient-glow -right-32 bottom-0 bg-[rgba(99,102,241,0.1)]" /><Container><div className="relative grid gap-12 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><div className="max-w-3xl"><SectionHeading eyebrow="WHY QCSV" title="A quality-focused technology partner for regulated environments." description="QCSV brings together validation, quality, technology and project delivery capabilities to support organizations through complex technology initiatives." /><Link href="/#contact" className="mt-9 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">Discuss your requirements</Link></div><Card className="relative overflow-hidden p-7 sm:p-9"><div aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10" /><Icon icon={ShieldCheck} size="lg" /><h2 className="mt-6 max-w-sm font-display text-2xl font-bold text-[var(--foreground)]">Four capability themes, one practical focus.</h2><p className="mt-4 max-w-sm text-sm leading-6 text-[var(--foreground-muted)]">QCSV&apos;s confirmed positioning connects regulatory expertise, technology, quality and execution.</p></Card></div></Container></section>

        <Section className="bg-[var(--surface)]"><Container><SectionHeading eyebrow="WHAT QCSV BRINGS TOGETHER" title="Capabilities connected around complex technology initiatives." description="The current QCSV material identifies validation expertise, regulated-industry focus, technology capability, and documentation and quality as core themes. Specific differentiators and evidence require client confirmation." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{strengths.map(([title, description, icon]) => <Card key={title} className="p-6"><Icon icon={icon} size="md" /><h2 className="mt-5 font-display text-lg font-semibold text-[var(--foreground)]">{title}</h2><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">{description}</p></Card>)}</div></Container></Section>

        <Section><Container><SectionHeading eyebrow="EVIDENCE BOUNDARY" title="Credible positioning without unsupported comparisons." description="QCSV should be presented through confirmed capabilities and service areas, not through claims of being best, leading or premier. Customer evidence, qualifications, certifications, partnerships and measurable outcomes require client confirmation." /><div className="mt-10 grid gap-5 md:grid-cols-3"><Card className="p-6"><h2 className="font-display text-lg font-semibold text-[var(--foreground)]">Confirmed</h2><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">Validation, quality, technology, documentation and project-delivery themes are present in current source material.</p></Card><Card className="p-6"><h2 className="font-display text-lg font-semibold text-[var(--foreground)]">Context</h2><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">Regulated and technology-driven environments provide the audience and project context.</p></Card><Card className="p-6"><h2 className="font-display text-lg font-semibold text-[var(--foreground)]">Confirmation required</h2><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">Differentiators, customer evidence, qualifications and measurable outcomes require approval.</p></Card></div></Container></Section>

        <Section spacing="large"><Container><div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-12 text-center sm:px-10"><SectionHeading align="center" eyebrow="START A CONVERSATION" title="Discuss your technology, validation or quality needs." description="Connect with QCSV to discuss the project environment and support that fit your initiative." /><Link href="/#contact" className="mt-8 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">Talk to QCSV</Link></div></Container></Section>
      </main>
      <Footer />
    </div>
  );
}
