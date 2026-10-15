import { whyQcsv as reasons } from "@/config/about";

export function WhyQcsv() {
  return (
    <section id="why-qcsv" className="qcsv-container-wide py-20 md:py-28">
      <h2 className="text-4xl font-bold tracking-[-0.03em] text-[var(--foreground)] md:text-5xl">
        Why QCSV
      </h2>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {reasons.map((reason) => (
          <div
            key={reason.title}
            className="rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)] p-8"
          >
            <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
              {reason.title}
            </h3>
            <p className="mt-3 text-[var(--foreground-muted)]">{reason.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
