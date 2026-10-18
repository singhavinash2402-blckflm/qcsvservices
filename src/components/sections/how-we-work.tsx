const steps = [
  {
    title: "Understand",
    text: "We start with your processes, systems and timelines, and agree what done looks like."
  },
  {
    title: "Plan",
    text: "We set out the validation or project plan, the risks to manage and the deliverables you will need."
  },
  {
    title: "Test and document",
    text: "We prepare and run the testing, review the evidence and keep the documentation consistent with it."
  },
  {
    title: "Release and support",
    text: "We close the project with a validation summary report and a system release, then support your team afterwards."
  }
];

export function HowWeWork() {
  return (
    <section id="how-we-work" className="bg-[var(--surface)] py-20 md:py-28">
      <div className="qcsv-container-wide">
        <h2 className="max-w-3xl text-4xl font-bold tracking-[-0.03em] text-[var(--foreground)] md:text-5xl">
          A clear path from requirement to release.
        </h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              data-reveal
              data-reveal-delay={index * 100}
              key={step.title}
              className="border-t-2 border-[var(--primary)] pt-5"
            >
              <p className="text-sm font-semibold text-[var(--primary-text)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-[var(--foreground)]">
                {step.title}
              </h3>
              <p className="mt-3 text-[var(--foreground-muted)]">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
