import {
  ClipboardCheck,
  FileCheck2,
  Flag,
  Lightbulb,
  SearchCheck,
  Target,
  Workflow,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand business objectives, technology landscape and project requirements.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Assess",
    description:
      "Assess current processes, systems, risks and applicable quality requirements.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Plan",
    description:
      "Define the delivery approach, scope, responsibilities and project priorities.",
    icon: Target,
  },
  {
    number: "04",
    title: "Execute",
    description:
      "Execute project activities with structured coordination and quality-focused delivery.",
    icon: Workflow,
  },
  {
    number: "05",
    title: "Validate",
    description:
      "Perform validation and qualification activities appropriate to the project.",
    icon: ClipboardCheck,
  },
  {
    number: "06",
    title: "Document",
    description:
      "Maintain clear and structured documentation throughout the engagement.",
    icon: FileCheck2,
  },
  {
    number: "07",
    title: "Deliver",
    description:
      "Complete the engagement with an organized handover and delivery outcome.",
    icon: Flag,
  },
];

export function Methodology() {
  return (
    <Section id="methodology">
      <Container>
        <SectionHeading
          eyebrow="OUR APPROACH"
          title="A structured approach from understanding to delivery."
          description="QCSV follows a structured project approach designed to bring clarity, quality and accountability across technology and validation initiatives."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <Card key={step.number} className="relative p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-[var(--primary)]">
                  {step.number}
                </span>

                <Icon icon={step.icon} size="sm" />
              </div>

              <h3 className="mt-6 font-display text-lg font-semibold text-[var(--foreground)]">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--foreground-muted)]">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}