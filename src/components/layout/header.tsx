"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { serviceGroups } from "@/config/service-catalog";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { MobileNavigation } from "@/components/layout/mobile-navigation";

const navigation = [
  { label: "Industries", href: "/industries" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && servicesOpen) {
        setServicesOpen(false);
        servicesTriggerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [servicesOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xl">
      <div className="qcsv-container-wide">
        <div className="flex min-h-16 items-center justify-between gap-6">
          <Link
            href="/"
            className="shrink-0 rounded-md font-display text-xl font-bold tracking-tight text-[var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"
            aria-label="QCSV Services home"
          >
            QCSV<span className="text-[var(--primary)]">.</span>
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary navigation"
          >
            <Link
              href="/"
              className="rounded-md px-3 py-2 text-sm font-medium text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            >
              Home
            </Link>

            <div className="relative flex items-center">
              <Link
                href="/services"
                className="rounded-md px-3 py-2 text-sm font-medium text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                Services
              </Link>

              <button
                ref={servicesTriggerRef}
                type="button"
                onClick={() => setServicesOpen((current) => !current)}
                className="inline-flex items-center rounded-md px-1 py-2 text-sm font-medium text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
                aria-label="Toggle Services menu"
                aria-expanded={servicesOpen}
                aria-controls="desktop-services-menu"
              >
                <ChevronDown
                  aria-hidden="true"
                  className={`h-4 w-4 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {servicesOpen ? (
                <div
                  id="desktop-services-menu"
                  className="absolute left-0 top-full z-50 mt-2 grid max-h-[calc(100vh-5rem)] w-[min(42rem,calc(100vw-2rem))] grid-cols-2 gap-x-6 gap-y-4 overflow-y-auto rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background)] p-4 shadow-[var(--shadow-card)]"
                  role="menu"
                >
                  {serviceGroups.map((group) => (
                    <div key={group.title}>
                      <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">
                        {group.title}
                      </div>
                      <div className="mt-1.5">
                        {group.services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            onClick={() => setServicesOpen(false)}
                            className="block rounded-md px-2 py-1.5 text-sm text-[var(--foreground-muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
                            role="menuitem"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <Link
              href="/#contact"
              className="hidden sm:inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            >
              Start a conversation
              <ArrowRight
                aria-hidden="true"
                className="ml-2 h-4 w-4"
              />
            </Link>
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
}