import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServicePage } from "@/components/services/service-page";
import { siteConfig } from "@/config/site";
import { getService, services } from "@/config/services";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.name,
    description: `${service.summary} ${service.intro[0]}`.slice(0, 300),
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | QCSV Services`,
      description: service.summary,
      images: [siteConfig.ogImage],
      url: `/services/${service.slug}`
    }
  };
}

export default async function ServiceRoute({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return <ServicePage service={service} />;
}
