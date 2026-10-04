import type { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  wide?: boolean;
};

export function Container({
  wide = false,
  className = "",
  ...props
}: ContainerProps) {
  return (
    <div
      className={`${wide ? "qcsv-container-wide" : "qcsv-container"} ${className}`}
      {...props}
    />
  );
}
