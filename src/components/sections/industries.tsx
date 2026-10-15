"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ReadMore } from "@/components/ui/read-more";
import { homeIndustries } from "@/config/home";

export function Industries() {
  const [open, setOpen] = useState(0);

  return (
    <section id="industries" className="qcsv-container-wide pb-16 md:pb-24">
      <h2 className="text-4xl font-bold tracking-[-0.03em] text-[var(--foreground)] md:text-5xl">
        Industries we work in
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-[var(--foreground-muted)]">
        We work where regulation shapes how technology is used: pharmaceutical
        companies, medical device makers, life sciences organisations, regulated
        manufacturers and technology manufacturers.
      </p>

      <div className="mt-10 flex flex-col gap-3 lg:h-[600px] lg:flex-row">
        {homeIndustries.map((industry, index) => {
          const isOpen = index === open;
          return (
            <Link
              key={industry.name}
              href={industry.href}
              onMouseEnter={() => setOpen(index)}
              onFocus={() => setOpen(index)}
              className={`group relative isolate flex min-h-[220px] items-end overflow-hidden rounded-[var(--radius-lg)] text-white lg:min-h-0 lg:flex-1 lg:transition-[flex] lg:duration-500 ${
                isOpen ? "lg:flex-[3.2]" : ""
              }`}
            >
              <Image
                src={industry.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="-z-20 object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(5,10,16,0.1),rgba(5,10,16,0.85))]"
              />
              <div className="p-6 lg:min-w-[240px]">
                <h3 className="text-2xl font-semibold tracking-tight">
                  {industry.name}
                </h3>
                <p
                  className={`mt-2 overflow-hidden text-sm text-white/90 transition-all duration-500 lg:max-h-0 lg:opacity-0 ${
                    isOpen ? "lg:max-h-32 lg:opacity-100" : ""
                  }`}
                >
                  {industry.description}
                </p>
                <ReadMore
                  label="Learn more"
                  className={`mt-3 text-white ${isOpen ? "" : "lg:hidden"}`}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
