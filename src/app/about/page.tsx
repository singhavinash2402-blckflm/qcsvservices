import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardCheck, Compass, Layers3, Workflow } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "About QCSV",
  description:
    "Learn how QCSV brings together regulatory expertise, technology, quality and execution.",
};

const focusAreas = [
  ["Regulatory expertise", "Validation and quality context for regulated technology environments.", ClipboardCheck, "/about/why-qcsv"],
  ["Technology", "Enterprise and digital technology support shaped around confirmed project needs.", Layers3, "/services"],
  ["Quality", "Quality-focused documentation, assessment and delivery support.", Compass, "/about/our-approach"],
  ["Execution", "Structured planning, coordination and handover across technology initiatives.", Workflow, "/about/our-approach"],
] as const;

export default function AboutPage() {
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
                <SectionHeading
                  eyebrow="ABOUT QCSV"
                  title="A technology, validation and quality partner for complex environments."
                  description="QCSV brings together regulatory expertise, technology, quality and execution to support organizations across regulated and technology-driven environments."
                />
                <Link href="/#contact" className="mt-9 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">Discuss your requirements</Link>
              </div>
              <Card className="relative overflow-hidden p-7 sm:p-9">
                <div aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10" />
                <Icon icon={Layers3} size="lg" />
                <h2 className="mt-6 max-w-sm font-display text-2xl font-bold text-[var(--foreground)]">Four connected areas of focus.</h2>
                <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--foreground-muted)]">QCSV&apos;s positioning connects technology work with validation context, quality considerations and structured execution.</p>
              </Card>
            </div>
          </Container>
        </section>

        <Section className="bg-[var(--surface)]"><Container><SectionHeading eyebrow="OUR POSITIONING" title="Technology, validation and quality support for complex environments." description="Organizations operating in regulated or technology-driven environments may need coordinated technology delivery, validation support, quality-focused documentation and structured execution. QCSV's specific company history and differentiators require client confirmation." /></Container></Section>

        <Section><Container><SectionHeading eyebrow="FOCUS AREAS" title="Regulatory expertise, technology, quality and execution." description="Explore the four positioning themes that shape the QCSV story." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{focusAreas.map(([title, description, icon, href]) => <Link key={title} href={href} className="block h-full rounded-[var(--radius-md)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"><Card interactive className="flex h-full flex-col p-6"><Icon icon={icon} size="md" /><h3 className="mt-5 font-display text-lg font-semibold text-[var(--foreground)]">{title}</h3><p className="mt-3 flex-1 text-sm leading-6 text-[var(--foreground-muted)]">{description}</p><span className="mt-6 text-sm font-semibold text-[var(--primary)]">Explore focus area <span aria-hidden="true">→</span></span></Card></Link>)}</div></Container></Section>

        <Section className="bg-[var(--surface)]"><Container><div className="grid gap-5 md:grid-cols-3"><Link href="/about/mission-vision" className="block h-full rounded-[var(--radius-md)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"><Card className="h-full p-6"><h2 className="font-display text-xl font-semibold text-[var(--foreground)]">Mission &amp; Vision</h2><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">Purpose and direction connected to technology, validation, quality and execution.</p></Card></Link><Link href="/about/our-approach" className="block h-full rounded-[var(--radius-md)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"><Card className="h-full p-6"><h2 className="font-display text-xl font-semibold text-[var(--foreground)]">Our Approach</h2><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">A seven-step sequence from understanding to delivery.</p></Card></Link><Link href="/about/why-qcsv" className="block h-full rounded-[var(--radius-md)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"><Card className="h-full p-6"><h2 className="font-display text-xl font-semibold text-[var(--foreground)]">Why QCSV</h2><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">Confirmed capability themes without unsupported comparative claims.</p></Card></Link></div></Container></Section>

        <Section spacing="large"><Container><div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-12 text-center sm:px-10"><SectionHeading align="center" eyebrow="START A CONVERSATION" title="Discuss your technology, validation or quality requirements." description="Connect with QCSV to discuss the environment, capabilities and project support that fit your initiative." /><Link href="/#contact" className="mt-8 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">Talk to QCSV</Link></div></Container></Section>
      </main>
      <Footer />
    </div>
  );
}
