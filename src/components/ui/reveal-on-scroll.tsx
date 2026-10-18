"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Fades elements in as they scroll into view. Mark an element with
 * `data-reveal` (and optionally `data-reveal-delay="80"` in milliseconds).
 * Content stays visible without JavaScript, and nothing animates for visitors
 * who prefer reduced motion.
 */
export function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    const reset = (element: HTMLElement) => {
      element.classList.remove("qcsv-reveal-hidden", "is-visible");
      element.style.transitionDelay = "";
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const element = entry.target as HTMLElement;
          observer.unobserve(element);

          const delay = Number(element.dataset.revealDelay ?? 0);
          element.style.transitionDelay = `${delay}ms`;
          element.classList.add("is-visible");

          const finish = () => reset(element);
          element.addEventListener("transitionend", finish, { once: true });
          window.setTimeout(finish, 1500 + delay);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );

    for (const element of targets) {
      const box = element.getBoundingClientRect();
      // Anything already on screen stays put, so the top of a page never flickers.
      if (box.top < window.innerHeight * 0.92 && box.bottom > 0) continue;
      element.classList.add("qcsv-reveal-hidden");
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
      targets.forEach(reset);
    };
  }, [pathname]);

  return null;
}
