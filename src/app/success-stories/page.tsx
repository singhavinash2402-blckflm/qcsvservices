import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardCheck, FileCheck2, FlaskConical, HardDrive, Layers3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Success Stories",
  description: "Confirmed QCSV engagements across validation, technology, quality and project delivery contexts.",
};

type Story = {
  title: string;
  location: string;
  industry: string;
  industryHref: string;
  category: string;
  relatedServices: Array<[string, string]>;
  icon: LucideIcon;
};

const stories: Story[] = [
  { title: "SAP Validation", location: "UK", industry: "Pharmaceuticals", industryHref: "/industries/pharmaceuticals", category: "SAP Services; Computer System Validation; Validation & Quality", relatedServices: [["SAP Services", "/services/sap-services"], ["Computer System Validation", "/services/computer-system-validation"]], icon: ClipboardCheck },
  { title: "SAP Technical Upgrade", location: "US", industry: "Semiconductor", industryHref: "/industries/semiconductor", category: "SAP Services; Enterprise Technology; Project Delivery", relatedServices: [["SAP Services", "/services/sap-services"], ["Project Management", "/services/project-management"]], icon: Layers3 },
  { title: "LIMS Validation", location: "US", industry: "Pharmaceuticals", industryHref: "/industries/pharmaceuticals", category: "Computer System Validation; Validation & Quality", relatedServices: [["Computer System Validation", "/services/computer-system-validation"], ["Project Documentation", "/services/project-documentation"]], icon: FlaskConical },
  { title: "Equipment Qualification", location: "Israel", industry: "Medical Devices", industryHref: "/industries/medical-devices", category: "IT Infrastructure Qualification; Validation & Quality", relatedServices: [["IT Infrastructure Qualification", "/services/it-infrastructure-qualification"], ["Computer System Validation", "/services/computer-system-validation"]], icon: HardDrive },
  { title: "SAP GAP Assessment", location: "Israel", industry: "Pharmaceuticals", industryHref: "/industries/pharmaceuticals", category: "SAP Services; Audits / Assessments; Validation & Quality", relatedServices: [["SAP Services", "/services/sap-services"], ["Audits / Assessments", "/services/audits-assessments"]], icon: FileCheck2 },
  { title: "SOP Preparation", location: "Israel", industry: "Pharmaceuticals", industryHref: "/industries/pharmaceuticals", category: "Project Documentation; Quality Assurance; Validation & Quality", relatedServices: [["Project Documentation", "/services/project-documentation"], ["Quality Assurance", "/services/quality-assurance"]], icon: FileCheck2 },
  { title: "Empower 3 Validation", location: "US", industry: "Pharmaceuticals", industryHref: "/industries/pharmaceuticals", category: "Computer System Validation; Validation & Quality", relatedServices: [["Computer System Validation", "/services/computer-system-validation"], ["Quality Assurance", "/services/quality-assurance"]], icon: ClipboardCheck },
];

export default function SuccessStoriesPage() {
  return <div className="min-h-screen bg-[var(--background)]"><Header /><main>
    <section className="relative isolate overflow-hidden"><div aria-hidden="true" className="qcsv-ambient-glow -left-24 top-20" /><div aria-hidden="true" className="qcsv-ambient-glow -right-32 bottom-0 bg-[rgba(99,102,241,0.1)]" /><Container><div className="relative py-20 md:py-28"><SectionHeading eyebrow="SUCCESS STORIES" title="Confirmed QCSV engagements across validation, technology and quality initiatives." description="The stories below show only the confirmed service, geography and industry information currently available. Challenge, approach and outcome details require client confirmation." /></div></Container></section>
    <Section className="bg-[var(--surface)]"><Container><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{stories.map((story) => <Card key={story.title} className="flex h-full flex-col p-6"><Icon icon={story.icon} size="md" /><div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[var(--foreground-subtle)]"><span>{story.location}</span><span aria-hidden="true">•</span><Link href={story.industryHref} className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">{story.industry}</Link></div><h2 className="mt-3 font-display text-xl font-semibold text-[var(--foreground)]">{story.title}</h2><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">{story.category}</p><div className="mt-6 border-t border-[var(--border)] pt-5"><p className="text-xs font-semibold uppercase tracking-wide text-[var(--foreground-subtle)]">Related services</p><div className="mt-2 flex flex-wrap gap-x-3 gap-y-2">{story.relatedServices.map(([name, href]) => <Link key={name} href={href} className="text-sm font-semibold text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">{name}</Link>)}</div></div><p className="mt-5 text-xs leading-5 text-[var(--foreground-subtle)]">Challenge, approach and outcome: client confirmation required.</p></Card>)}</div></Container></Section>
    <Section><Container><SectionHeading eyebrow="EVIDENCE BOUNDARY" title="Confirmed information, clearly separated from unknown detail." description="No client names, technologies, metrics, timelines, outcomes, certifications, approvals or awards are added to these stories. Additional narrative will require client confirmation." /><div className="mt-10 grid gap-5 md:grid-cols-3">{[["Confirmed", "Title, geography, industry and approved service/category relationships."], ["Client confirmation required", "Challenge, approach, scope and outcome details."], ["Not invented", "Clients, metrics, timelines, technologies, certifications, approvals or guarantees."]].map(([title, text]) => <Card key={title} className="p-6"><h2 className="font-display text-lg font-semibold text-[var(--foreground)]">{title}</h2><p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">{text}</p></Card>)}</div></Container></Section>
    <Section spacing="large"><Container><div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-12 text-center sm:px-10"><SectionHeading align="center" eyebrow="START A CONVERSATION" title="Discuss a technology, validation or quality requirement." description="Connect with QCSV to discuss the project context and appropriate service support." /><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/services" className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">Explore services</Link><Link href="/#contact" className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-strong)] bg-transparent px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors hover:bg-[var(--surface)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">Talk to QCSV</Link></div></div></Container></Section>
  </main><Footer /></div>;
}
