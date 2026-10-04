import type { HTMLAttributes } from "react";

interface StatProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  detail?: string;
}

export function Stat({
  value,
  label,
  detail,
  className = "",
  ...props
}: StatProps) {
  return (
    <div
      className={`text-center ${className}`}
      {...props}
    >
      <div className="font-display text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
        {value}
      </div>

      <div className="mt-2 text-sm font-semibold text-[var(--foreground-muted)]">
        {label}
      </div>

      {detail ? (
        <div className="mt-1 text-xs text-[var(--foreground-subtle)]">
          {detail}
        </div>
      ) : null}
    </div>
  );
}
