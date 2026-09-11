import {
  Factory,
  FlaskConical,
  HeartPulse,
  Microchip,
  ShieldCheck,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const industries = [
  {
    name: "Pharmaceuticals",
    description:
      "Technology, validation and quality support for pharmaceutical environments.",
    icon: FlaskConical,
  },
  {
    name: "Medical Devices",
    description:
      "Quality and technology support for medical device organizations and regulated systems.",
    icon: HeartPulse,
  },
  {
    name: "Life Sciences",
    description:
      "Technology and validation expertise supporting life sciences operations.",
    icon: ShieldCheck,
  },
  {
    name: "Semiconductor",
    description:
      "Technology and project support for semiconductor and technology-driven manufacturing.",
    icon: Microchip,
  },
  {
    name: "Regulated Manufacturing",
    description:
      "Technology, quality and delivery support for regulated manufacturing environments.",
    icon: Factory,
  },
];

export function Industries() {
  return (
    <Section id="industries" className="bg-[var(--surface)]">
      <Container>
        <SectionHeading
          eyebrow="INDUSTRIES"
          title="Expertise for regulated and technology-driven industries."
          description="QCSV supports organizations where technology, quality, validation and reliable execution are essential to business operations."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Card
              key={industry.name}
              interactive
              className="flex h-full flex-col p-6"
            >
              <Icon icon={industry.icon} size="md" />

              <h3 className="mt-5 font-display text-xl font-semibold text-[var(--foreground)]">
                {industry.name}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-[var(--foreground-muted)]">
                {industry.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}