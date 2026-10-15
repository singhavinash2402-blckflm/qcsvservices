import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { IndustryPage } from "@/components/industries/industry-page";
import { siteConfig } from "@/config/site";
import { getIndustry, industries } from "@/config/industries";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};

  return {
    title: industry.name,
    description: `${industry.summary} ${industry.intro[0]}`.slice(0, 300),
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: {
      title: `${industry.name} | QCSV Services`,
      description: industry.summary,
      images: [siteConfig.ogImage],
      url: `/industries/${industry.slug}`
    }
  };
}

export default async function IndustryRoute({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return <IndustryPage industry={industry} />;
}
