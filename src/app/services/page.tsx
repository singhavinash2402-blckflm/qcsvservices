import Link from "next/link";
import Image from "next/image";
import {
  Cloud,
  ClipboardCheck,
  Code2,
  FileCheck2,
  FolderKanban,
  Gauge,
  HardDrive,
  Layers3,
  Network,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { serviceHrefByName } from "@/config/service-catalog";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type Service = {
  name: string;
  description: string;
  icon: LucideIcon;
};

type ServiceGroup = {
  title: string;
  description: string;
  services: Service[];
};

const serviceGroups: ServiceGroup[] = [
  {
    title: "Validation & Quality",
    description:
      "Validation, qualification and quality support for regulated technology environments.",
    services: [
      {
        name: "Computer System Validation",
        description:
          "Validation support for computerized systems and related project activities.",
        icon: ClipboardCheck,
      },
      {
        name: "Quality Assurance",
        description:
          "Quality assurance support for structured technology and project delivery.",
        icon: ShieldCheck,
      },
      {
        name: "IT Infrastructure Qualification",
        description:
          "Qualification support for IT infrastructure and technology environments.",
        icon: HardDrive,
      },
      {
        name: "Audits / Assessments",
        description:
          "Structured audits and assessments for technology and quality activities.",
        icon: Gauge,
      },
    ],
  },
  {
    title: "Enterprise Technology",
    description:
      "Enterprise technology services for platforms, manufacturing systems and cloud environments.",
    services: [
      {
        name: "SAP Services",
        description:
          "Services supporting SAP environments and related technology initiatives.",
        icon: Layers3,
      },
      {
        name: "Manufacturing Execution Systems",
        description:
          "Support for manufacturing execution systems and associated project needs.",
        icon: Workflow,
      },
      {
        name: "Serialization",
        description:
          "Serialization services for technology and product traceability initiatives.",
        icon: Network,
      },
      {
        name: "Cloud Services",
        description:
          "Cloud services supporting technology environments and modernization work.",
        icon: Cloud,
      },
    ],
  },
  {
    title: "Project Delivery",
    description:
      "Practical delivery support across technology, validation and quality initiatives.",
    services: [
      {
        name: "Project Management",
        description:
          "Project planning, coordination and delivery support for technology initiatives.",
        icon: FolderKanban,
      },
      {
        name: "Project Documentation",
        description:
          "Structured documentation support throughout project activities and delivery.",
        icon: FileCheck2,
      },
      {
        name: "IT Staffing",
        description:
          "IT staffing support aligned with project and delivery requirements.",
        icon: Users,
      },
    ],
  },
  {
    title: "Digital",
    description:
      "Digital capabilities supporting modern web and technology initiatives.",
    services: [
      {
        name: "Website Development",
        description:
          "Website development support for modern business and technology needs.",
        icon: Code2,
      },
    ],
  },
];

const industries = [
  "Pharmaceuticals",
  "Medical Devices",
  "Life Sciences",
  "Semiconductor",
  "Regulated Manufacturing",
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />

      <main>
        <section className="relative isolate overflow-hidden">
          <div
            aria-hidden="true"
            className="qcsv-ambient-glow -left-24 top-24"
          />
          <div
            aria-hidden="true"
            className="qcsv-ambient-glow -right-32 bottom-0 bg-[rgba(99,102,241,0.1)]"
          />

          <Container>
            <div className="relative py-20 md:py-28">
              <div className="max-w-4xl">
                <SectionHeading
                  eyebrow="OUR SERVICES"
                  title="Technology, validation and quality expertise for regulated environments."
                  description="QCSV provides validation, quality, enterprise technology and project delivery services designed to support organizations across regulated and technology-driven environments."
                />

                <Link
                  href="/#contact"
                  className="mt-9 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
                >
                  Talk to QCSV
                </Link>
              </div>
            </div>

            <div className="relative mt-10 h-48 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] sm:h-56 lg:h-64">
              <Image
                src="/images/services/services-overview.jpg"
                alt="Enterprise technology workspace with screens and connected systems"
                fill
                sizes="(min-width: 1024px) 1200px, 100vw"
                className="object-cover object-center"
              />
            </div>
          </Container>
        </section>

        <Section>
          <Container>
            <div className="space-y-16">
              {serviceGroups.map((group) => (
                <div key={group.title}>
                  <div className="max-w-3xl">
                    <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
                      {group.title}
                    </h2>
                    <p className="mt-3 text-base leading-7 text-[var(--foreground-muted)] sm:text-lg">
                      {group.description}
                    </p>
                  </div>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {group.services.map((service) => (
                      <Link
                        key={service.name}
                        href={serviceHrefByName[service.name]}
                        className="block h-full rounded-[var(--radius-md)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"
                      >
                        <Card interactive className="flex h-full flex-col p-6">
                          <Icon icon={service.icon} size="md" />
                          <h3 className="mt-5 font-display text-lg font-semibold text-[var(--foreground)]">
                            {service.name}
                          </h3>
                          <p className="mt-3 flex-1 text-sm leading-6 text-[var(--foreground-muted)]">
                            {service.description}
                          </p>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="bg-[var(--surface)]">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <SectionHeading
                eyebrow="HOW WE SUPPORT"
                title="Capabilities that come together around complex technology initiatives."
                description="QCSV brings together technology, validation, quality and project delivery capabilities to support complex technology initiatives."
              />

              <div>
                <h2 className="font-display text-2xl font-bold text-[var(--foreground)]">
                  Industries we support
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {industries.map((industry) => (
                    <li
                      key={industry}
                      className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 text-sm font-semibold text-[var(--foreground-muted)]"
                    >
                      {industry}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        <Section spacing="large">
          <Container>
            <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-12 text-center sm:px-10">
              <SectionHeading
                align="center"
                eyebrow="START A CONVERSATION"
                title="Discuss your technology, validation or quality needs with QCSV."
                description="Connect with QCSV to discuss the capabilities and project support that fit your initiative."
              />
              <Link
                href="/#contact"
                className="mt-8 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                Talk to QCSV
              </Link>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
