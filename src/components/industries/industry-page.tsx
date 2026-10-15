import Link from "next/link";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { StoryGrid } from "@/components/shared/story-grid";
import { ReadMore } from "@/components/ui/read-more";
import type { Industry } from "@/config/industries";
import { services } from "@/config/services";

export function IndustryPage({ industry }: Readonly<{ industry: Industry }>) {
  const supporting = services.filter((service) =>
    industry.services.includes(service.slug)
  );

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header overlay />

      <main id="main-content">
        <PageHero
          image={industry.image}
          title={industry.headline}
          summary={industry.summary}
          breadcrumb={[
            { label: "Industries", href: "/industries" },
            { label: industry.name }
          ]}
          secondary={{ label: "All industries", href: "/industries" }}
        />

        <section className="qcsv-container-wide grid gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-5 text-lg leading-8 text-[var(--foreground-muted)]">
            {industry.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="border-t border-[var(--border)] pt-6">
              <h2 className="text-xl font-bold tracking-tight text-[var(--foreground)]">
                Where we help
              </h2>
              <p className="mt-3 text-base leading-7">{industry.whereWeHelp}</p>
            </div>
            {industry.challenge ? (
              <div className="rounded-3xl bg-[var(--surface)] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--primary-text)]">
                  A common challenge
                </p>
                <p className="mt-2 text-base leading-7">{industry.challenge}</p>
              </div>
            ) : null}
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
              Services most relevant here
            </h2>
            <ul className="mt-6 divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {supporting.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group block py-4 transition-colors hover:bg-[var(--surface)]"
                  >
                    <h3 className="font-semibold text-[var(--foreground)]">
                      {service.name}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--foreground-muted)]">
                      {service.summary}
                    </p>
                    <ReadMore className="mt-2 text-[var(--foreground)]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <StoryGrid
          slugs={industry.stories}
          heading="Selected engagements in this industry"
        />

        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}
