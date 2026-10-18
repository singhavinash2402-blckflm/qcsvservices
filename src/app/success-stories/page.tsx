import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { stories, storiesIntro, storyMeta } from "@/config/stories";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Selected QCSV Services engagements in SAP validation, LIMS validation, equipment qualification, gap assessments, SOP preparation and Empower validation.",
  alternates: { canonical: "/success-stories" }
};

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header overlay />

      <main id="main-content">
        <PageHero
          image="/images/success-stories/success-stories.jpg"
          title="Success stories."
          summary={storiesIntro}
        />

        <section className="qcsv-container-wide py-12 md:py-16">
          <nav aria-label="Stories on this page">
            <ul className="flex flex-wrap gap-2">
              {stories.map((story) => (
                <li key={story.slug}>
                  <a
                    href={`#${story.slug}`}
                    className="inline-flex rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--surface)]"
                  >
                    {story.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-12 divide-y divide-[var(--border)]">
            {stories.map((story) => (
              <article
                data-reveal
                key={story.slug}
                id={story.slug}
                className="grid gap-8 py-12 first:pt-0 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] lg:gap-16"
              >
                <header className="lg:sticky lg:top-28 lg:self-start">
                  <h2 className="text-3xl font-bold tracking-[-0.03em] text-[var(--foreground)] md:text-4xl">
                    {story.title}
                  </h2>
                  <p className="mt-3 text-sm font-semibold text-[var(--primary-text)]">
                    {storyMeta(story)}
                  </p>
                </header>

                <div>
                  <div className="space-y-4 text-lg leading-8 text-[var(--foreground-muted)]">
                    {story.background.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <h3 className="mt-8 text-xl font-semibold text-[var(--foreground)]">
                    Solution provided
                  </h3>
                  <p className="mt-3 leading-7 text-[var(--foreground-muted)]">
                    {story.solutionIntro}
                  </p>
                  <ol className="mt-4 space-y-3">
                    {story.steps.map((step, index) => (
                      <li key={step} className="flex gap-4">
                        <span
                          aria-hidden="true"
                          className="mt-0.5 w-6 shrink-0 text-sm font-semibold text-[var(--primary-text)]"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[var(--foreground-muted)]">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </article>
            ))}
          </div>
        </section>

        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}
