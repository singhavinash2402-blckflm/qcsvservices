import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ScrollLink } from "@/components/ui/scroll-link";
import { homeStories } from "@/config/home";
import { services, type Service } from "@/config/services";

export function ServicePage({ service }: Readonly<{ service: Service }>) {
  const stories = homeStories.filter((story) =>
    service.stories.includes(story.title)
  );
  const related = services
    .filter((item) => item.slug !== service.slug)
    .sort(
      (a, b) =>
        Number(b.group === service.group) - Number(a.group === service.group)
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />

      <main>
        <section className="relative isolate overflow-hidden bg-[#0b0f14] text-white">
          <Image
            src={service.image}
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
            <nav aria-label="Breadcrumb" className="text-sm text-white/70">
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
              <span aria-hidden="true"> / </span>
              <span>{service.group}</span>
            </nav>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.02] tracking-[-0.035em] sm:text-6xl">
              {service.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/85">
              {service.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ScrollLink
                href="/#contact"
                className="inline-flex min-h-12 items-center rounded-full bg-white px-7 text-sm font-semibold text-[#0b0f14] transition-transform hover:scale-[1.03]"
              >
                Request a consultation
              </ScrollLink>
              <Link
                href="/services"
                className="inline-flex min-h-12 items-center rounded-full border-2 border-white px-7 text-sm font-semibold text-white hover:bg-white/10"
              >
                All services
              </Link>
            </div>
          </div>
        </section>

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

        {stories.length > 0 ? (
          <section className="bg-[var(--surface)] py-16 md:py-24">
            <div className="qcsv-container-wide">
              <h2 className="text-3xl font-bold tracking-[-0.03em] text-[var(--foreground)] md:text-4xl">
                Where we have applied this
              </h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {stories.map((story) => (
                  <article
                    key={story.title}
                    className="rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6"
                  >
                    <h3 className="text-lg font-semibold text-[var(--foreground)]">
                      {story.title}
                    </h3>
                    <p className="mb-3 mt-1 text-sm font-semibold text-[var(--primary-text)]">
                      {story.meta}
                    </p>
                    <p className="text-sm leading-relaxed text-[var(--foreground-muted)]">
                      {story.summary}
                    </p>
                  </article>
                ))}
              </div>
              <Link
                href="/success-stories"
                className="mt-6 inline-flex items-center text-sm font-semibold text-[var(--foreground)] underline-offset-4 hover:underline"
              >
                View all success stories
                <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </section>
        ) : null}

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
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-[#0b0f14] py-16 text-white md:py-24">
          <div className="qcsv-container-wide flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <h2 className="max-w-2xl text-3xl font-bold tracking-[-0.03em] md:text-5xl">
              Tell us what your project needs.
            </h2>
            <ScrollLink
              href="/#contact"
              className="inline-flex min-h-12 items-center self-start rounded-full bg-white px-7 text-sm font-semibold text-[#0b0f14] transition-transform hover:scale-[1.03]"
            >
              Request a consultation
            </ScrollLink>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
