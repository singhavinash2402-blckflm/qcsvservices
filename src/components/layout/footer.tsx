"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

const services = [
  { label: "Data & Analytics", href: "/#services" },
  { label: "Cloud Solutions", href: "/#services" },
  { label: "Digital Engineering", href: "/#services" },
  { label: "Technology Consulting", href: "/#services" },
];

export function Footer() {
    const router = useRouter();
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="qcsv-container-wide">
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-display text-xl font-bold tracking-tight text-[var(--foreground)]"
            >
              QCSV<span className="text-[var(--primary)]">.</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--foreground-muted)]">
              Practical technology, data, cloud, and digital solutions that
              help organizations modernize and grow.
            </p>

            <Button
              className="mt-6"
              onClick={() => {
                router.push("/#contact");
              }}
            >
              Start a conversation
              <ArrowRight
                aria-hidden="true"
                className="ml-2 h-4 w-4"
              />
            </Button>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold text-[var(--foreground)]">
              Navigation
            </h2>

            <nav
              className="mt-4 flex flex-col gap-3"
              aria-label="Footer navigation"
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold text-[var(--foreground)]">
              Services
            </h2>

            <nav
              className="mt-4 flex flex-col gap-3"
              aria-label="Footer services"
            >
              {services.map((service) => (
                <Link
                  key={service.label}
                  href={service.href}
                  className="w-fit text-sm text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
                >
                  {service.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold text-[var(--foreground)]">
              Contact
            </h2>

            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-3">
                <Mail
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]"
                />

                <a
                  href="mailto:info@qcsvservices.in"
                  className="text-sm text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
                >
                  info@qcsvservices.in
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]"
                />

                <span className="text-sm text-[var(--foreground-muted)]">
                  India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[var(--border)] py-6 text-sm text-[var(--foreground-subtle)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} QCSV Services. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              href="/privacy"
              className="transition-colors hover:text-[var(--foreground)]"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-[var(--foreground)]"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}