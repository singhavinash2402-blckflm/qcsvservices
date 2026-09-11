import {
  ClipboardCheck,
  FileCheck2,
  Layers3,
  ShieldCheck,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const strengths = [
  {
    title: "Validation Expertise",
    description:
      "Specialized support for computer system validation, qualification and regulated technology environments.",
    icon: ClipboardCheck,
  },
  {
    title: "Regulated Industry Focus",
    description:
      "Experience supporting technology and quality requirements across regulated and technology-driven industries.",
    icon: ShieldCheck,
  },
  {
    title: "Technology Capability",
    description:
      "Expertise across enterprise technology, SAP, manufacturing systems, cloud and digital solutions.",
    icon: Layers3,
  },
  {
    title: "Documentation & Quality",
    description:
      "Structured project documentation and quality-focused execution supporting reliable delivery.",
    icon: FileCheck2,
  },
];

export function WhyQCSV() {
  return (
    <Section id="why-qcsv">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-xl">
            <SectionHeading
              eyebrow="WHY QCSV"
              title="A quality-focused technology partner for regulated environments."
              description="QCSV brings together validation, quality, technology and project delivery capabilities to support organizations through complex technology initiatives."
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {strengths.map((strength) => (
              <Card key={strength.title} className="p-6">
                <Icon icon={strength.icon} size="md" />

                <h3 className="mt-5 font-display text-lg font-semibold text-[var(--foreground)]">
                  {strength.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
                  {strength.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}