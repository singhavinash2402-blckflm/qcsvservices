import type { HTMLAttributes } from "react";

type BadgeVariant = "default" | "primary" | "success";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  default:
    "border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground-muted)]",
  primary:
    "border border-[var(--primary)]/20 bg-[var(--primary)]/10 text-[var(--primary)]",
  success:
    "border border-[var(--accent)]/20 bg-[var(--accent)]/10 text-[var(--accent)]",
};

export function Badge({
  variant = "default",
  className = "",
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-[var(--radius-full)] px-3 py-1 text-xs font-semibold ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}
