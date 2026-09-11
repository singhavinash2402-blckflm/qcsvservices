import type { Metadata } from "next";
import Link from "next/link";
import { Factory, FlaskConical, HeartPulse, Microchip, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = { title: "Industries", description: "QCSV technology, validation, quality and delivery context across regulated and technology-driven industries." };

type Industry = { name: string; href: string; description: string; icon: LucideIcon };
const industries: Industry[] = [
  { name: "Pharmaceuticals", href: "/industries/pharmaceuticals", description: "Technology, validation and quality support for pharmaceutical environments.", icon: FlaskConical },
  { name: "Medical Devices", href: "/industries/medical-devices", description: "Technology and quality support for medical-device organizations and regulated systems.", icon: HeartPulse },
  { name: "Life Sciences", href: "/industries/life-sciences", description: "Technology, data, validation and quality context across life-sciences operations.", icon: ShieldCheck },
  { name: "Semiconductor", href: "/industries/semiconductor", description: "Technology and project support for semiconductor and technology-driven manufacturing.", icon: Microchip },
  { name: "Regulated Manufacturing", href: "/industries/regulated-manufacturing", description: "Technology, quality and delivery support for regulated manufacturing environments.", icon: Factory },
];

export default function IndustriesPage() {
  return <div className="min-h-screen bg-[var(--background)]"><Header /><main>
    <section className="relative isolate overflow-hidden"><div aria-hidden="true" className="qcsv-ambient-glow -left-24 top-20" /><div aria-hidden="true" className="qcsv-ambient-glow -right-32 bottom-0 bg-[rgba(99,102,241,0.1)]" /><Container><div className="relative py-20 md:py-28"><SectionHeading eyebrow="INDUSTRIES" title="Technology, validation and quality support for regulated environments." description="QCSV supports organizations where technology, quality, validation and reliable execution are important to business operations." /></div></Container></section>
    <Section className="bg-[var(--surface)]"><Container><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{industries.map((industry) => <Link key={industry.name} href={industry.href} className="block h-full rounded-[var(--radius-md)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"><Card interactive className="flex h-full flex-col p-6"><Icon icon={industry.icon} size="md" /><h2 className="mt-5 font-display text-xl font-semibold text-[var(--foreground)]">{industry.name}</h2><p className="mt-3 flex-1 text-sm leading-6 text-[var(--foreground-muted)]">{industry.description}</p><span className="mt-6 text-sm font-semibold text-[var(--primary)]">Explore industry <span aria-hidden="true">→</span></span></Card></Link>)}</div></Container></Section>
    <Section spacing="large"><Container><div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-12 text-center sm:px-10"><SectionHeading align="center" eyebrow="START A CONVERSATION" title="Discuss your industry context with QCSV." description="Connect with QCSV to discuss technology, validation, quality and delivery needs." /><Link href="/#contact" className="mt-8 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">Talk to QCSV</Link></div></Container></Section>
  </main><Footer /></div>;
}
