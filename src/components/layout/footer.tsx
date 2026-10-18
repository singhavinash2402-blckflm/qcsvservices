import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { ConsultationButton } from "@/components/consultation/consultation-button";
import { Logo } from "@/components/layout/logo";
import { ScrollLink } from "@/components/ui/scroll-link";
import { siteConfig } from "@/config/site";

const navigation = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Success stories", href: "/success-stories" },
  { label: "About", href: "/about" }
];

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" }
];

const headingClass =
  "text-sm font-semibold uppercase tracking-[0.08em] text-[var(--foreground)]";
const linkClass =
  "text-sm text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]";

export function Footer() {
  const { email, phone, phoneHref, addressLines } = siteConfig.contact;

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="qcsv-container-wide">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1.2fr_0.8fr_0.8fr] lg:gap-12">
          <div>
            <Link
              href="/"
              aria-label="QCSV Services home"
              className="inline-flex"
            >
              <Logo height={44} />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-[var(--foreground-muted)]">
              Validation and quality support for pharmaceutical and life
              sciences organisations.
            </p>
            <ConsultationButton className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]">
              Request a consultation
              <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
            </ConsultationButton>
          </div>

          <div>
            <h2 className={headingClass}>Contact</h2>
            <div className="mt-4 space-y-3 text-sm text-[var(--foreground-muted)]">
              <address className="flex items-start gap-3 not-italic">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0"
                />
                <span>
                  {addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </address>
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
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className={headingClass}>Explore</h2>
            <ul className="mt-4 space-y-3">
              {navigation.map((item) => (
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

          <nav aria-label="Legal">
            <h2 className={headingClass}>Legal</h2>
            <ul className="mt-4 space-y-3">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-[var(--border)] py-6 text-sm text-[var(--foreground-subtle)]">
          © {new Date().getFullYear()} {siteConfig.legalName}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
