import {
  Factory,
  FlaskConical,
  HeartPulse,
  Microchip,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const industries = [
  {
    name: "Pharmaceuticals",
    href: "/industries/pharmaceuticals",
    image: "/images/industries/pharmaceuticals.jpg",
    description:
      "Technology, validation and quality support for pharmaceutical environments.",
    icon: FlaskConical,
  },
  {
    name: "Medical Devices",
    href: "/industries/medical-devices",
    image: "/images/industries/medical-devices.jpg",
    description:
      "Quality and technology support for medical device organizations and regulated systems.",
    icon: HeartPulse,
  },
  {
    name: "Life Sciences",
    href: "/industries/life-sciences",
    image: "/images/industries/life-sciences.jpg",
    description:
      "Technology and validation expertise supporting life sciences operations.",
    icon: ShieldCheck,
  },
  {
    name: "Semiconductor",
    href: "/industries/semiconductor",
    image: "/images/industries/semiconductor.jpg",
    description:
      "Technology and project support for semiconductor and technology-driven manufacturing.",
    icon: Microchip,
  },
  {
    name: "Regulated Manufacturing",
    href: "/industries/regulated-manufacturing",
    image: "/images/industries/regulated-manufacturing.jpg",
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
            <Link
              key={industry.name}
              href={industry.href}
              className="block h-full rounded-[var(--radius-md)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"
            >
              <Card interactive className="flex h-full flex-col overflow-hidden p-0">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={industry.image}
                    alt={`${industry.name} industry context`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <Icon icon={industry.icon} size="md" />

                <h3 className="mt-5 font-display text-xl font-semibold text-[var(--foreground)]">
                  {industry.name}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-[var(--foreground-muted)]">
                  {industry.description}
                </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}