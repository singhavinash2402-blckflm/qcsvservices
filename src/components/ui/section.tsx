import type { HTMLAttributes } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  spacing?: "default" | "compact" | "large";
};

const spacingClasses = {
  compact: "py-12 md:py-16",
  default: "qcsv-section",
  large: "py-24 md:py-32",
};

export function Section({
  spacing = "default",
  className = "",
  ...props
}: SectionProps) {
  return (
    <section
      className={`${spacingClasses[spacing]} ${className}`}
      {...props}
    />
  );
}
