import Link from "next/link";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { StoryGrid } from "@/components/shared/story-grid";
import type { Industry } from "@/config/industries";
import { services } from "@/config/services";

export function IndustryPage({ industry }: Readonly<{ industry: Industry }>) {
  const supporting = services.filter((service) =>
    industry.services.includes(service.slug)
  );

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header overlay />

      <main>
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
                    className="block py-4 transition-colors hover:bg-[var(--surface)]"
                  >
                    <h3 className="font-semibold text-[var(--foreground)]">
                      {service.name}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--foreground-muted)]">
                      {service.summary}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <StoryGrid
          titles={industry.stories}
          heading="Selected engagements in this industry"
        />

        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}
