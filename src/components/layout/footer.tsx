import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { ConsultationButton } from "@/components/consultation/consultation-button";
import { Logo } from "@/components/layout/logo";
import { ScrollLink } from "@/components/ui/scroll-link";
import { siteConfig } from "@/config/site";

const links = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Success stories", href: "/success-stories" },
  { label: "About", href: "/about" }
];

export function Footer() {
  const { email, phone, phoneHref, addressLines } = siteConfig.contact;

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="qcsv-container-wide">
        <div className="grid gap-10 py-12 md:grid-cols-[1.1fr_1fr] md:items-start">
          <div>
            <Link
              href="/"
              aria-label="QCSV Services home"
              className="inline-flex"
            >
              <Logo height={44} />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--foreground-muted)]">
              Validation and quality support for pharmaceutical and life
              sciences organisations.
            </p>
            <ConsultationButton className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">
              Request a consultation
              <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
            </ConsultationButton>
          </div>

          <div className="space-y-3 text-sm text-[var(--foreground-muted)] md:justify-self-end">
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
            <address className="flex max-w-xs items-start gap-3 not-italic">
              <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{addressLines.join(", ")}</span>
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[var(--border)] py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 font-medium text-[var(--foreground)]">
              {links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[var(--primary-text)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <ScrollLink
                  href="/#contact"
                  className="hover:text-[var(--primary-text)]"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </nav>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[var(--foreground-subtle)]">
            <span>
              © {new Date().getFullYear()} {siteConfig.legalName}
            </span>
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
