import { homeFaqs } from "@/config/home";

export function Faq() {
  return (
    <section id="faq" className="qcsv-container-wide py-20 md:py-28">
      <h2 className="text-4xl font-bold tracking-[-0.03em] text-[var(--foreground)] md:text-5xl">
        Common questions
      </h2>
      <div className="mt-8 max-w-3xl">
        {homeFaqs.map((item, index) => (
          <details
            key={item.q}
            data-reveal
            data-reveal-delay={index * 60}
            className="qcsv-faq border-b border-[var(--border)] py-5"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-semibold tracking-tight text-[var(--foreground)]">
              {item.q}
            </summary>
            <p className="mt-3 text-[var(--foreground-muted)]">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
