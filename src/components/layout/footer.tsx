"use client";

import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Contact", href: "/#contact" },
];

const services = [
  {
    label: "Computer System Validation",
    href: "/services/computer-system-validation",
  },
  {
    label: "Quality Assurance",
    href: "/services/quality-assurance",
  },
  {
    label: "SAP Services",
    href: "/services/sap-services",
  },
  {
    label: "Cloud Services",
    href: "/services/cloud-services",
  },
  {
    label: "Project Management",
    href: "/services/project-management",
  },
  {
    label: "Website Development",
    href: "/services/website-development",
  },
];

export function Footer() {
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
              Technology, validation and quality expertise for regulated
              environments.
            </p>

            <Link
              href="/#contact"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            >
              Start a conversation
              <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-[var(--foreground)]">
              Navigation
            </h2>

            <nav className="mt-4 flex flex-col gap-3" aria-label="Footer navigation">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-[var(--foreground)]">
              Services
            </h2>

            <nav className="mt-4 flex flex-col gap-3" aria-label="Footer services">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="text-sm text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
                >
                  {service.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-[var(--foreground)]">
              Contact
            </h2>

            <div className="mt-4 flex flex-col gap-4 text-sm text-[var(--foreground-muted)]">
              <a
                href="mailto:info@qcsvservices.in"
                className="inline-flex items-center gap-3 transition-colors hover:text-[var(--foreground)]"
              >
                <Mail aria-hidden="true" className="h-4 w-4 shrink-0" />
                <span>info@qcsvservices.in</span>
              </a>

              <div className="inline-flex items-center gap-3">
                <MapPin aria-hidden="true" className="h-4 w-4 shrink-0" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[var(--border)] py-6 text-sm text-[var(--foreground-subtle)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} QCSV Services. All rights reserved.
          </p>

          <div className="flex gap-5">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
