import {
  ClipboardCheck,
  FileCheck2,
  FlaskConical,
  HardDrive,
  Layers3,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const successStories = [
  {
    title: "SAP Validation",
    location: "UK",
    industry: "Pharmaceuticals",
    icon: ClipboardCheck,
  },
  {
    title: "SAP Technical Upgrade",
    location: "US",
    industry: "Semiconductor",
    icon: Layers3,
  },
  {
    title: "LIMS Validation",
    location: "US",
    industry: "Pharmaceuticals",
    icon: FlaskConical,
  },
  {
    title: "Equipment Qualification",
    location: "Israel",
    industry: "Medical Devices",
    icon: HardDrive,
  },
  {
    title: "SAP GAP Assessment",
    location: "Israel",
    industry: "Pharmaceuticals",
    icon: FileCheck2,
  },
  {
    title: "SOP Preparation",
    location: "Israel",
    industry: "Pharmaceuticals",
    icon: FileCheck2,
  },
  {
    title: "Empower 3 Validation",
    location: "US",
    industry: "Pharmaceuticals",
    icon: ClipboardCheck,
  },
];

export function SuccessStories() {
  return (
    <Section id="success-stories" className="bg-[var(--surface)]">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="SUCCESS STORIES"
              title="Experience across validation, technology and quality initiatives."
              description="Explore selected QCSV engagements across regulated industries and technology-driven environments."
            />
          </div>

          <button
            type="button"
            className="inline-flex shrink-0 items-center text-sm font-semibold text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
          >
            View all success stories
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </button>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {successStories.map((story) => (
            <Card
              key={`${story.title}-${story.location}`}
              interactive
              className="flex h-full flex-col p-6"
            >
              <Icon icon={story.icon} size="md" />

              <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[var(--foreground-subtle)]">
                <span>{story.location}</span>
                <span aria-hidden="true">•</span>
                <span>{story.industry}</span>
              </div>

              <h3 className="mt-3 font-display text-xl font-semibold text-[var(--foreground)]">
                {story.title}
              </h3>

              <button
                type="button"
                className="mt-6 inline-flex items-center text-sm font-semibold text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
              >
                Read case study
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </button>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}