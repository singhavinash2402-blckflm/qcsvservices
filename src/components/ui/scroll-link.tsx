"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";

/**
 * A Link that scrolls smoothly to an on-page section (for example "/#contact")
 * when the visitor is already on that page, and navigates normally otherwise.
 */
export function ScrollLink({
  href,
  onClick,
  ...props
}: ComponentProps<typeof Link>) {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || typeof href !== "string") return;

    const [path, hash] = href.split("#");
    if (!hash || (path || "/") !== pathname) return;

    const target = document.getElementById(hash);
    if (!target) return;

    event.preventDefault();
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    target.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start"
    });
    window.history.pushState(null, "", `#${hash}`);
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
