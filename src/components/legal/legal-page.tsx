import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { LegalDocument } from "@/config/legal";

export function LegalPage({ document }: Readonly<{ document: LegalDocument }>) {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />

      <main className="qcsv-container-wide py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-[-0.035em] text-[var(--foreground)] md:text-5xl">
            {document.title}
          </h1>
          <p className="mt-3 text-sm font-semibold text-[var(--primary-text)]">
            Last updated {document.updated}
          </p>
          <p className="mt-6 text-lg leading-8 text-[var(--foreground-muted)]">
            {document.intro}
          </p>

          <div className="mt-12 space-y-10">
            {document.sections.map((section, index) => (
              <section key={section.heading}>
                <h2 className="text-xl font-bold tracking-tight text-[var(--foreground)]">
                  {index + 1}. {section.heading}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-3 leading-7 text-[var(--foreground-muted)]"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-[var(--foreground-muted)]">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="leading-7">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
