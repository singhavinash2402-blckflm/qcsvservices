import Image from "next/image";

/** Width to height ratio of the horizontal logo artwork. */
const RATIO = 668.575 / 143.1;

type LogoProps = Readonly<{
  /** "on-dark" always uses the white-text version, for photos and dark bands. */
  variant?: "auto" | "on-dark";
  height?: number;
  priority?: boolean;
}>;

export function Logo({ variant = "auto", height = 40, priority }: LogoProps) {
  const size = { width: Math.round(height * RATIO), height };
  const style = { width: "auto", height } as const;

  if (variant === "on-dark") {
    return (
      <Image
        src="/brand/logo-horizontal-for-dark-bg.svg"
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
        src="/brand/logo-horizontal-color.svg"
        alt=""
        {...size}
        style={style}
        priority={priority}
        unoptimized
        className="dark:hidden"
      />
      <Image
        src="/brand/logo-horizontal-for-dark-bg.svg"
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
