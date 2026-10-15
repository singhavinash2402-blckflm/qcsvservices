import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import {
  aboutIntro,
  aboutOverview,
  approach,
  makingTheDifference,
  mission,
  vision,
  whyQcsv
} from "@/config/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "QCSV Services Private Limited is a life sciences quality service and solution partner, including IT consulting and services.",
  alternates: { canonical: "/about" }
};

const sections = [
  { id: "overview", label: "Who we are" },
  { id: "mission-vision", label: "Mission and vision" },
  { id: "approach", label: "Our approach" },
  { id: "why-qcsv", label: "Why QCSV" }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header overlay />

      <main>
        <PageHero
          image="/images/about/about-qcsv.jpg"
          title="About QCSV Services."
          summary={aboutIntro}
          secondary={{ label: "Our services", href: "/services" }}
        />

        <nav aria-label="On this page" className="qcsv-container-wide pt-10">
          <ul className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="inline-flex rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--surface)]"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section
          id="overview"
          className="qcsv-container-wide grid gap-10 py-16 md:py-24 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16"
        >
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-[var(--foreground)] md:text-4xl">
            Who we are
          </h2>
          <div className="space-y-5 text-lg leading-8 text-[var(--foreground-muted)]">
            {aboutOverview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section
          id="mission-vision"
          className="bg-[var(--surface)] py-16 md:py-24"
        >
          <div className="qcsv-container-wide grid gap-6 md:grid-cols-2">
            {[
              { title: "Our mission", text: mission },
              { title: "Our vision", text: vision }
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)] p-8 md:p-10"
              >
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--primary-text)]">
                  {item.title}
                </h2>
                <p className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-[var(--foreground)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="qcsv-container-wide py-16 md:py-24">
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-[var(--foreground)] md:text-4xl">
            Making the difference
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {makingTheDifference.map((item) => (
              <div
                key={item.title}
                className="border-t-2 border-[var(--primary)] pt-5"
              >
                <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[var(--foreground-muted)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="approach" className="bg-[var(--surface)] py-16 md:py-24">
          <div className="qcsv-container-wide grid gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16">
            <h2 className="text-3xl font-bold tracking-[-0.03em] text-[var(--foreground)] md:text-4xl">
              Our approach
            </h2>
            <p className="text-xl leading-9 text-[var(--foreground-muted)]">
              {approach}
            </p>
          </div>
        </section>

        <section id="why-qcsv" className="qcsv-container-wide py-16 md:py-24">
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-[var(--foreground)] md:text-4xl">
            Why QCSV
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {whyQcsv.map((reason) => (
              <div
                key={reason.title}
                className="rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)] p-8"
              >
                <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
                  {reason.title}
                </h3>
                <p className="mt-3 text-[var(--foreground-muted)]">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}
