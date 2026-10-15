import Link from "next/link";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { StoryGrid } from "@/components/shared/story-grid";
import { ReadMore } from "@/components/ui/read-more";
import { services, type Service } from "@/config/services";

export function ServicePage({ service }: Readonly<{ service: Service }>) {
  const related = services
    .filter((item) => item.slug !== service.slug)
    .sort(
      (a, b) =>
        Number(b.group === service.group) - Number(a.group === service.group)
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header overlay />

      <main>
        <PageHero
          image={service.image}
          title={service.headline}
          summary={service.summary}
          breadcrumb={[
            { label: "Services", href: "/services" },
            { label: service.group }
          ]}
          secondary={{ label: "All services", href: "/services" }}
        />

        <section className="qcsv-container-wide grid gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-5 text-lg leading-8 text-[var(--foreground-muted)]">
            {service.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
              {service.coverTitle}
            </h2>
            <ol className="mt-6 divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {service.covers.map((item, index) => (
                <li key={item.title} className="flex gap-4 py-4">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 text-sm font-semibold text-[var(--primary-text)]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)]">
                      {item.title}
                    </h3>
                    {item.detail ? (
                      <p className="mt-1 text-sm text-[var(--foreground-muted)]">
                        {item.detail}
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <StoryGrid
          slugs={service.stories}
          heading="Where we have applied this"
        />

        <section className="qcsv-container-wide py-16 md:py-24">
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-[var(--foreground)] md:text-4xl">
            Related services
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group rounded-3xl border border-[var(--border)] p-6 transition-colors hover:bg-[var(--surface)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--primary-text)]">
                  {item.group}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-[var(--foreground)]">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-[var(--foreground-muted)]">
                  {item.summary}
                </p>
                <ReadMore className="mt-4 text-[var(--foreground)]" />
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
