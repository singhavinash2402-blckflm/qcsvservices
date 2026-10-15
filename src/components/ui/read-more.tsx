import { ArrowRight } from "lucide-react";

/** Visual "Read more" affordance. Place inside a link that has the `group` class. */
export function ReadMore({
  label = "Read more",
  className = ""
}: Readonly<{ label?: string; className?: string }>) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-sm font-semibold ${className}`}
    >
      {label}
      <ArrowRight
        aria-hidden="true"
        className="h-4 w-4 transition-transform group-hover:translate-x-1"
      />
    </span>
  );
}
