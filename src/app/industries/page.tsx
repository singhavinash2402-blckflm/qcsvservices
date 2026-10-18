import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { ReadMore } from "@/components/ui/read-more";
import { industries } from "@/config/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "QCSV Services supports pharmaceutical, medical device, life sciences, regulated manufacturing and semiconductor organisations.",
  alternates: { canonical: "/industries" }
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header overlay />

      <main id="main-content">
        <PageHero
          image="/images/industries/life-sciences.jpg"
          title="Industries we work in."
          summary="Validation, quality and delivery support for organisations where regulation shapes how technology is used."
        />

        <section className="qcsv-container-wide py-16 md:py-24">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <Link
                key={industry.slug}
                data-reveal
                data-reveal-delay={(index % 3) * 80}
                href={`/industries/${industry.slug}`}
                className="group overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)] transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={industry.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
                    {industry.name}
                  </h2>
                  <p className="mt-2 text-sm text-[var(--foreground-muted)]">
                    {industry.summary}
                  </p>
                  <ReadMore className="mt-4 text-[var(--foreground)]" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}
