"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { serviceGroups } from "@/config/service-catalog";

const navigation = [
  { label: "Industries", href: "/industries" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        closeMenu();
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={menuButtonRef}
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border)] text-[var(--foreground)] transition-colors hover:bg-[var(--surface)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
      >
        {open ? (
          <X
            aria-hidden="true"
            className="h-5 w-5"
          />
        ) : (
          <Menu
            aria-hidden="true"
            className="h-5 w-5"
          />
        )}
      </button>

      {open ? (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-[var(--border)] bg-[var(--background)] px-4 py-5 shadow-[var(--shadow-card)]"
        >
          <nav
            className="qcsv-container flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            <Link
              href="/"
              onClick={closeMenu}
              className="rounded-[var(--radius-md)] px-4 py-3 text-sm font-medium text-[var(--foreground-muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            >
              Home
            </Link>

            <div className="flex items-center">
              <Link
                href="/services"
                onClick={closeMenu}
                className="flex min-h-11 flex-1 items-center rounded-[var(--radius-md)] px-4 py-3 text-sm font-medium text-[var(--foreground-muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                Services
              </Link>

              <button
                type="button"
                onClick={() => setServicesOpen((current) => !current)}
                className="flex min-h-11 items-center rounded-[var(--radius-md)] px-4 py-3 text-left text-sm font-medium text-[var(--foreground-muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
                aria-label="Toggle Services menu"
                aria-expanded={servicesOpen}
                aria-controls="mobile-services-menu"
              >
                <ChevronDown
                  aria-hidden="true"
                  className={`h-4 w-4 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {servicesOpen ? (
                <div id="mobile-services-menu" className="pb-2 pl-4" role="menu">
                  {serviceGroups.map((group) => (
                    <div key={group.title} className="pt-3">
                      <div className="px-4 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">
                        {group.title}
                      </div>
                      <div className="mt-1">
                        {group.services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            onClick={closeMenu}
                            className="block min-h-11 rounded-[var(--radius-md)] px-4 py-3 text-sm text-[var(--foreground-muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
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
                onClick={closeMenu}
                className="rounded-[var(--radius-md)] px-4 py-3 text-sm font-medium text-[var(--foreground-muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/#contact"
              onClick={closeMenu}
              className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            >
              Start a conversation
              <ArrowRight
                aria-hidden="true"
                className="ml-2 h-4 w-4"
              />
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
