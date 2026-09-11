import type { LucideIcon } from "lucide-react";

type IconProps = {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: {
    container: "h-9 w-9 rounded-[var(--radius-md)]",
    icon: "h-4 w-4",
  },
  md: {
    container: "h-11 w-11 rounded-[var(--radius-md)]",
    icon: "h-5 w-5",
  },
  lg: {
    container: "h-14 w-14 rounded-[var(--radius-lg)]",
    icon: "h-6 w-6",
  },
};

export function Icon({
  icon: IconComponent,
  size = "md",
  className = "",
}: IconProps) {
  const sizes = sizeClasses[size];

  return (
    <span
      className={`inline-flex items-center justify-center border border-[var(--primary)]/20 bg-[var(--primary)]/10 text-[var(--primary)] ${sizes.container} ${className}`}
    >
      <IconComponent
        aria-hidden="true"
        className={sizes.icon}
      />
    </span>
  );
}
