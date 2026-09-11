import type { Metadata } from "next";
import Link from "next/link";
import { Compass, Eye, Flag } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Mission & Vision",
  description: "QCSV's mission and vision for technology, validation, quality and execution.",
};

export default function MissionVisionPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <main>
        <section className="relative isolate overflow-hidden"><div aria-hidden="true" className="qcsv-ambient-glow -left-24 top-20" /><div aria-hidden="true" className="qcsv-ambient-glow -right-32 bottom-0 bg-[rgba(99,102,241,0.1)]" /><Container><div className="relative grid gap-12 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><div className="max-w-3xl"><SectionHeading eyebrow="MISSION & VISION" title="A clear purpose for technology, validation and quality support." description="QCSV's mission and vision direction is centered on helping organizations approach complex technology initiatives with clear validation, quality and delivery support." /><Link href="/#contact" className="mt-9 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">Explore how QCSV can help</Link></div><Card className="relative overflow-hidden p-7 sm:p-9"><div aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10" /><Icon icon={Compass} size="lg" /><h2 className="mt-6 max-w-sm font-display text-2xl font-bold text-[var(--foreground)]">Purpose and direction, kept practical.</h2><p className="mt-4 max-w-sm text-sm leading-6 text-[var(--foreground-muted)]">The current QCSV material supports a purpose grounded in technology, validation, quality and execution.</p></Card></div></Container></section>

        <Section className="bg-[var(--surface)]"><Container><div className="grid gap-6 md:grid-cols-2"><Card className="p-7 sm:p-9"><Icon icon={Flag} size="md" /><h2 className="mt-5 font-display text-2xl font-bold text-[var(--foreground)]">Mission direction</h2><p className="mt-4 text-base leading-7 text-[var(--foreground-muted)]">Help organizations approach complex technology initiatives with clear validation, quality and delivery support.</p><p className="mt-5 text-sm leading-6 text-[var(--foreground-subtle)]">Official mission wording requires client confirmation.</p></Card><Card className="p-7 sm:p-9"><Icon icon={Eye} size="md" /><h2 className="mt-5 font-display text-2xl font-bold text-[var(--foreground)]">Vision direction</h2><p className="mt-4 text-base leading-7 text-[var(--foreground-muted)]">Be a trusted technology partner for organizations where dependable execution and quality matter.</p><p className="mt-5 text-sm leading-6 text-[var(--foreground-subtle)]">Official vision wording requires client confirmation.</p></Card></div></Container></Section>

        <Section><Container><SectionHeading eyebrow="WHAT THIS MEANS" title="Regulatory expertise, technology, quality and execution." description="These themes provide a concise way to organize QCSV's positioning without adding unsupported company history, scale, credentials or outcomes." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[["Regulatory expertise", "Validation and quality context for regulated technology environments."], ["Technology", "Technology support shaped around the confirmed project need."], ["Quality", "Quality-focused documentation and delivery support."], ["Execution", "Structured coordination from planning through handover."]].map(([title, description]) => <Card key={title} className="p-6"><h3 className="font-display text-lg font-semibold text-[var(--foreground)]">{title}</h3><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">{description}</p></Card>)}</div></Container></Section>

        <Section spacing="large"><Container><div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-12 text-center sm:px-10"><SectionHeading align="center" eyebrow="START A CONVERSATION" title="Explore how QCSV can support your initiative." description="Discuss your technology, validation or quality requirements with QCSV." /><Link href="/about/our-approach" className="mt-8 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-strong)] bg-transparent px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors hover:bg-[var(--surface)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">View our approach</Link></div></Container></Section>
      </main>
      <Footer />
    </div>
  );
}
