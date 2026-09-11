import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto text-center"
      : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
        {eyebrow}
      </div>

      <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-5 text-base leading-7 text-[var(--foreground-muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}