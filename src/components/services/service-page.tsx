import Link from "next/link";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { StoryGrid } from "@/components/shared/story-grid";
import { frameworks } from "@/components/services/frameworks";
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

  const Framework = service.framework ? frameworks[service.framework] : null;

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header overlay />

      <main id="main-content">
        <PageHero
          image={service.image}
          title={service.headline}
          summary={service.summary}
          breadcrumb={[
            { label: "Services", href: "/services" },
            { label: service.group }
          ]}
          secondary={{ label: "All services", href: "/services" }}
          consultationService={service.name}
        />

        <section
          data-reveal
          className="qcsv-container-wide grid gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr]"
        >
          <div className="space-y-5 text-lg leading-8 text-[var(--foreground-muted)]">
            {service.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {service.why ? (
              <div className="border-t border-[var(--border)] pt-6">
                <h2 className="text-xl font-bold tracking-tight text-[var(--foreground)]">
                  Why it matters
                </h2>
                <p className="mt-3 text-base leading-7">{service.why}</p>
              </div>
            ) : null}
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

        {Framework ? (
          <section className="bg-[var(--surface)] py-16 md:py-24">
            <div className="qcsv-container-wide">
              <h2 className="text-3xl font-bold tracking-[-0.03em] text-[var(--foreground)] md:text-4xl">
                {Framework.title}
              </h2>
              <div data-reveal className="mt-10">
                <Framework.Component />
              </div>
            </div>
          </section>
        ) : null}

        {service.process || service.deliverables ? (
          <section
            data-reveal
            className="qcsv-container-wide grid gap-12 py-16 md:py-24 lg:grid-cols-2"
          >
            {service.process ? (
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
                  {service.process.title}
                </h2>
                {service.process.numbered ? (
                  <ol className="mt-6 space-y-4">
                    {service.process.items.map((item, index) => (
                      <li key={item} className="flex gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-bold text-white">
                          {index + 1}
                        </span>
                        <span className="pt-1 text-[var(--foreground-muted)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ul className="mt-6 space-y-3">
                    {service.process.items.map((item) => (
                      <li
                        key={item}
                        className="border-l-2 border-[var(--primary)] pl-4 text-[var(--foreground-muted)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : null}
            {service.deliverables ? (
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
                  Typical deliverables
                </h2>
                <p className="mt-6 leading-7 text-[var(--foreground-muted)]">
                  {service.deliverables}
                </p>
              </div>
            ) : null}
          </section>
        ) : null}

        {service.faqs && service.faqs.length > 0 ? (
          <section
            className={`qcsv-container-wide pb-16 md:pb-24 ${
              Framework && !service.process && !service.deliverables
                ? "pt-16 md:pt-24"
                : ""
            }`}
          >
            <h2 className="text-3xl font-bold tracking-[-0.03em] text-[var(--foreground)] md:text-4xl">
              Common questions
            </h2>
            <div className="mt-6 max-w-3xl">
              {service.faqs.map((item) => (
                <details
                  key={item.q}
                  className="qcsv-faq border-b border-[var(--border)] py-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold tracking-tight text-[var(--foreground)]">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-[var(--foreground-muted)]">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        ) : null}

        <StoryGrid
          slugs={service.stories}
          heading="Where we have applied this"
        />

        <section className="qcsv-container-wide py-16 md:py-24">
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-[var(--foreground)] md:text-4xl">
            Related services
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {related.map((item, index) => (
              <Link
                key={item.slug}
                data-reveal
                data-reveal-delay={index * 80}
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

        <CtaBand service={service.name} />
      </main>

      <Footer />
    </div>
  );
}
