import { ConsultationButton } from "@/components/consultation/consultation-button";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { CtaBand } from "@/components/shared/cta-band";
import { ReadMore } from "@/components/ui/read-more";
import { serviceGroupId, serviceGroupOrder, services } from "@/config/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Validation, quality, regulated systems and project delivery services for pharmaceutical and life sciences organisations.",
  alternates: { canonical: "/services" }
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header overlay />

      <main>
        <section className="relative isolate overflow-hidden bg-[#0b0f14] text-white">
          <Image
            src="/images/services/services-overview.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(6,12,18,0.6)_0%,rgba(6,12,18,0.85)_100%)]"
          />
          <div className="qcsv-container-wide pb-16 pt-20 md:pb-24 md:pt-28">
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.02] tracking-[-0.035em] sm:text-6xl">
              Services for regulated organisations.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/85">
              Validation, quality, regulated systems and delivery support, from
              the first requirement to the final report.
            </p>
            <ConsultationButton className="mt-8 inline-flex min-h-12 items-center rounded-full bg-white px-7 text-sm font-semibold text-[#0b0f14] transition-transform hover:scale-[1.03]">
              Request a consultation
            </ConsultationButton>
          </div>
        </section>

        {serviceGroupOrder.map((group) => (
          <section
            key={group}
            id={serviceGroupId(group)}
            className="qcsv-container-wide py-14 md:py-20 [&:not(:last-of-type)]:border-b [&:not(:last-of-type)]:border-[var(--border)]"
          >
            <h2 className="text-3xl font-bold tracking-[-0.03em] text-[var(--foreground)] md:text-4xl">
              {group}
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services
                .filter((service) => service.group === group)
                .map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)] transition-shadow hover:shadow-[var(--shadow-card)]"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={service.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
                        {service.name}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--foreground-muted)]">
                        {service.summary}
                      </p>
                      <ReadMore className="mt-4 text-[var(--foreground)]" />
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        ))}

        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}
