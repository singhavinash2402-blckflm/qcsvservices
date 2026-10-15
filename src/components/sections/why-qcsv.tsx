const reasons = [
  {
    title: "One agenda: yours.",
    text: "We build long-lasting customer relationships and focus on your goals."
  },
  {
    title: "Quality-assured delivery.",
    text: "Our aim is to deliver the highest standard of quality-assured services through the expertise and commitment of our team."
  },
  {
    title: "Solutions shaped to the project.",
    text: "We aim to deliver result-oriented, cost-effective and project-specific solutions, whatever the nature, complexity or size of the project."
  }
];

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
