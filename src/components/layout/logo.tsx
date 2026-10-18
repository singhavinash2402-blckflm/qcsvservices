import Image from "next/image";

/** Width to height ratios of the logo artwork (taken from each SVG viewBox). */
const RATIO = { full: 668.575 / 143.1, compact: 666.575 / 131.5 };

type LogoProps = Readonly<{
  /** "on-dark" always uses the white-text version, for photos and dark bands. */
  variant?: "auto" | "on-dark";
  /** Compact drops the tagline, so it stays legible at small sizes. */
  compact?: boolean;
  height?: number;
  priority?: boolean;
}>;

export function Logo({
  variant = "auto",
  compact = false,
  height = 40,
  priority
}: LogoProps) {
  const name = compact ? "logo-compact" : "logo-horizontal";
  const size = {
    width: Math.round(height * (compact ? RATIO.compact : RATIO.full)),
    height
  };
  const style = { width: "auto", height } as const;

  if (variant === "on-dark") {
    return (
      <Image
        src={`/brand/${name}-for-dark-bg.svg`}
        alt=""
        {...size}
        style={style}
        priority={priority}
        unoptimized
      />
    );
  }

  // "auto" follows the site theme: colour logo on light, white-text on dark.
  return (
    <>
      <Image
        src={`/brand/${name}-color.svg`}
        alt=""
        {...size}
        style={style}
        priority={priority}
        unoptimized
        className="dark:hidden"
      />
      <Image
        src={`/brand/${name}-for-dark-bg.svg`}
        alt=""
        {...size}
        style={style}
        priority={priority}
        unoptimized
        className="hidden dark:block"
      />
    </>
  );
}
