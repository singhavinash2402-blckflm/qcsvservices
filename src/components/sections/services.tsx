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
import Link from "next/link";
import Image from "next/image";

import { Card } from "@/components/ui/card";
import { serviceHrefByName } from "@/config/service-catalog";
import { Icon } from "@/components/ui/icon";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const serviceGroups = [
  {
    title: "Validation & Quality",
    description:
      "Validation, qualification and quality support for regulated technology environments.",
    services: [
      {
        name: "Computer System Validation",
        description:
          "Support for validating computerized systems in regulated environments.",
        icon: ClipboardCheck,
      },
      {
        name: "Quality Assurance",
        description:
          "Quality-focused practices supporting compliant and controlled technology delivery.",
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
          "Structured assessments to evaluate technology, quality and compliance requirements.",
        icon: Gauge,
      },
    ],
  },
  {
    title: "Enterprise Technology",
    description:
      "Technology services supporting enterprise platforms, manufacturing systems and cloud environments.",
    services: [
      {
        name: "SAP Services",
        description:
          "SAP-focused services supporting enterprise technology and regulated operations.",
        icon: Layers3,
      },
      {
        name: "Manufacturing Execution Systems",
        description:
          "MES support for technology-enabled manufacturing environments.",
        icon: Workflow,
      },
      {
        name: "Serialization",
        description:
          "Serialization support for traceability and regulated product environments.",
        icon: Network,
      },
      {
        name: "Cloud Services",
        description:
          "Cloud-focused services supporting scalable and modern technology environments.",
        icon: Cloud,
      },
    ],
  },
  {
    title: "Project Delivery",
    description:
      "Practical delivery and project support across technology and regulated environments.",
    services: [
      {
        name: "Project Management",
        description:
          "Project planning, coordination and delivery support across technology initiatives.",
        icon: FolderKanban,
      },
      {
        name: "Project Documentation",
        description:
          "Structured documentation supporting project execution, quality and compliance.",
        icon: FileCheck2,
      },
      {
        name: "IT Staffing",
        description:
          "Flexible technology staffing support aligned with project and delivery needs.",
        icon: Users,
      },
    ],
  },
  {
    title: "Digital",
    description:
      "Digital engineering capabilities supporting modern web and technology initiatives.",
    services: [
      {
        name: "Website Development",
        description:
          "Professional website development for modern business and technology needs.",
        icon: Code2,
      },
    ],
  },
];

export function Services() {
  return (
    <Section id="services">
      <Container>
<SectionHeading
  eyebrow="OUR SERVICES"
  title="Technology and quality expertise for regulated environments."
  description="QCSV provides validation, quality, enterprise technology and project delivery services designed to support organizations across regulated and technology-driven environments."
/>
        <div className="relative mt-10 h-48 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] sm:h-56 lg:h-64">
          <Image
            src="/images/services/services-overview.jpg"
            alt="Enterprise technology workspace with screens and connected systems"
            fill
            sizes="(min-width: 1024px) 1200px, 100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="mt-12 space-y-12">
          {serviceGroups.map((group) => (
            <div key={group.title}>
              <div className="mb-6 max-w-2xl">
                <h3 className="font-display text-2xl font-bold text-[var(--foreground)]">
                  {group.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--foreground-muted)]">
                  {group.description}
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {group.services.map((service) => (
                  <Link
                    key={service.name}
                    href={serviceHrefByName[service.name]}
                    className="group block h-full rounded-[var(--radius-md)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"
                  >
                    <Card interactive className="flex h-full flex-col p-6">
                      <Icon icon={service.icon} size="md" />

                      <h4 className="mt-5 font-display text-lg font-semibold text-[var(--foreground)]">
                        {service.name}
                      </h4>

                      <p className="mt-3 flex-1 text-sm leading-6 text-[var(--foreground-muted)]">
                        {service.description}
                      </p>

                      <span className="mt-6 inline-flex items-center text-sm font-semibold text-[var(--primary)] transition-colors group-hover:text-[var(--primary-hover)]">
                        Learn more
                        <span aria-hidden="true" className="ml-2">
                          →
                        </span>
                      </span>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}