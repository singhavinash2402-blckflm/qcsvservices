"use client";

import Image from "next/image";
import { ScrollLink } from "@/components/ui/scroll-link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/config/home";

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(
      () => setActive((current) => (current + 1) % heroSlides.length),
      7500
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-[#0b0f14] text-white">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.src}
          aria-hidden="true"
          className={`absolute inset-0 -z-20 transition-opacity duration-[1400ms] ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover ${index === active ? "qcsv-kenburns" : ""}`}
          />
        </div>
      ))}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(6,12,18,0.55)_0%,rgba(6,12,18,0.15)_40%,rgba(6,12,18,0.82)_100%)]"
      />

      <div className="qcsv-container-wide relative pb-20 pt-40 md:pb-24">
        <h1 className="max-w-5xl text-5xl font-bold leading-[0.98] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
          Validation and quality, built for pharma.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
          QCSV Services helps pharmaceutical and life sciences teams validate
          computerised systems, qualify infrastructure and equipment, and
          prepare the documentation that goes with them.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ScrollLink
            href="/#contact"
            className="inline-flex min-h-12 items-center rounded-full bg-white px-7 text-sm font-semibold text-[#0b0f14] transition-transform hover:scale-[1.03]"
          >
            Request a consultation
          </ScrollLink>
          <ScrollLink
            href="/services"
            className="inline-flex min-h-12 items-center rounded-full border-2 border-white px-7 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Explore services
          </ScrollLink>
        </div>

        <div className="mt-10 flex gap-2" role="group" aria-label="Hero image">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show image ${index + 1}`}
              aria-current={index === active}
              className={`h-1 w-9 rounded-full transition-colors ${
                index === active ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
