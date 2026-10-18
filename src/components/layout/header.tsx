"use client";

import { Logo } from "@/components/layout/logo";
import { ConsultationButton } from "@/components/consultation/consultation-button";

import { ScrollLink } from "@/components/ui/scroll-link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { serviceGroups } from "@/config/service-catalog";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { MobileNavigation } from "@/components/layout/mobile-navigation";

const navigation = [
  { label: "Industries", href: "/industries" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" }
];

export function Header({
  overlay: overlayRequested = false
}: Readonly<{ overlay?: boolean }>) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesTriggerRef = useRef<HTMLButtonElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const overlay = overlayRequested && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      data-overlay={overlay}
      className={`${overlayRequested ? "fixed inset-x-0" : "sticky"} top-0 z-50 border-b transition-colors duration-300 ${
        overlay
          ? "border-transparent bg-transparent"
          : "border-transparent bg-[var(--background)] shadow-[0_1px_0_var(--border)]"
      }`}
    >
      <div className="qcsv-container-wide">
        <div className="flex min-h-16 items-center justify-between gap-6">
          <ScrollLink
            href="/"
            className="flex shrink-0 items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"
            aria-label="QCSV Services home"
          >
            <Logo
              variant={overlay ? "on-dark" : "auto"}
              compact
              height={44}
              priority
            />
          </ScrollLink>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary navigation"
          >
            <div
              className="relative flex items-center"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <ScrollLink
                href="/services"
                className="rounded-full px-4 py-2 text-[15px] font-medium text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                Services
              </ScrollLink>

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
                  className="absolute left-0 top-full z-50 mt-0 grid max-h-[calc(100vh-5rem)] w-[min(42rem,calc(100vw-2rem))] grid-cols-2 gap-x-6 gap-y-4 overflow-y-auto rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background)] p-4 shadow-[var(--shadow-card)]"
                  role="menu"
                >
                  {serviceGroups.map((group) => (
                    <div key={group.title}>
                      <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--primary-text)]">
                        {group.title}
                      </div>
                      <div className="mt-1.5">
                        {group.services.map((service) => (
                          <ScrollLink
                            key={service.name}
                            href={service.href}
                            onClick={() => setServicesOpen(false)}
                            className="block rounded-md px-2 py-1.5 text-sm text-[var(--foreground-muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
                            role="menuitem"
                          >
                            {service.name}
                          </ScrollLink>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            {navigation.map((item) => (
              <ScrollLink
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-[15px] font-medium text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                {item.label}
              </ScrollLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <ConsultationButton className="hidden sm:inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">
              Request a consultation
              <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
            </ConsultationButton>
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
}
