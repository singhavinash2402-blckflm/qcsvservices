import { ThemeToggle } from "@/components/theme/theme-toggle";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <section className="qcsv-section flex min-h-screen items-center">
        <div className="qcsv-container">
          <div className="flex justify-end">
            <ThemeToggle />
          </div>

          <div className="mx-auto max-w-4xl py-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Next-Gen Technology & Digital Services
            </p>

            <h1 className="font-display text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Building technology solutions that move businesses forward.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--foreground-muted)]">
              QCSV Services helps organizations modernize technology, data,
              cloud, and digital operations through practical, scalable
              solutions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
