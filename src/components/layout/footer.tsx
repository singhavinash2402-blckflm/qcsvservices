import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { ConsultationButton } from "@/components/consultation/consultation-button";
import { ScrollLink } from "@/components/ui/scroll-link";
import { industries } from "@/config/industries";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";

const company = [
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Success stories", href: "/success-stories" },
  { label: "Services", href: "/services" }
];

const linkClass =
  "text-sm text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]";
const headingClass = "text-sm font-semibold text-[var(--foreground)]";

export function Footer() {
  const { email, phone, phoneHref, addressLines } = siteConfig.contact;

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="qcsv-container-wide">
        <div className="grid gap-12 py-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-[var(--foreground)]"
            >
              QCSV Services
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--foreground-muted)]">
              Validation and quality support for pharmaceutical and life
              sciences organisations.
            </p>

            <ConsultationButton className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">
              Request a consultation
              <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
            </ConsultationButton>

            <div className="mt-8 space-y-3 text-sm text-[var(--foreground-muted)]">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 hover:text-[var(--foreground)]"
              >
                <Mail aria-hidden="true" className="h-4 w-4 shrink-0" />
                {email}
              </a>
              <a
                href={phoneHref}
                className="flex items-center gap-3 hover:text-[var(--foreground)]"
              >
                <Phone aria-hidden="true" className="h-4 w-4 shrink-0" />
                {phone}
              </a>
              <address className="flex items-start gap-3 not-italic">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0"
                />
                <span>{addressLines.join(", ")}</span>
              </address>
            </div>
          </div>

          <nav aria-label="Footer services" className="lg:col-span-4">
            <h2 className={headingClass}>Services</h2>
            <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className={linkClass}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer industries" className="lg:col-span-2">
            <h2 className={headingClass}>Industries</h2>
            <ul className="mt-4 space-y-3">
              {industries.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className={linkClass}
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer company" className="lg:col-span-2">
            <h2 className={headingClass}>Company</h2>
            <ul className="mt-4 space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <ScrollLink href="/#contact" className={linkClass}>
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-[var(--border)] py-6 text-sm text-[var(--foreground-subtle)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[var(--foreground)]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[var(--foreground)]">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
