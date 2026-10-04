import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
};

export function Card({
  interactive = false,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`qcsv-card ${
        interactive
          ? "transition-transform duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
          : ""
      } ${className}`}
      {...props}
    />
  );
}
