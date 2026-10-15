import { Mail, MapPin, Phone } from "lucide-react";

import { ConsultationForm } from "@/components/consultation/consultation-form";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site";

export function Contact() {
  const { email, phone, phoneHref, addressLines } = siteConfig.contact;

  return (
    <Section id="contact" className="bg-[var(--surface)]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="max-w-xl">
            <Badge variant="primary">CONTACT QCSV</Badge>

            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Tell us what your project needs.
            </h2>

            <p className="mt-5 text-base leading-7 text-[var(--foreground-muted)] sm:text-lg">
              Share the system, site or process you are working on and we will
              suggest a way to support it.
            </p>

            <div className="mt-8 space-y-5 text-sm">
              <div className="flex items-start gap-4">
                <Mail
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary-text)]"
                />
                <div>
                  <p className="font-semibold text-[var(--foreground)]">
                    Email
                  </p>
                  <a
                    href={`mailto:${email}`}
                    className="mt-1 block text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary-text)]"
                />
                <div>
                  <p className="font-semibold text-[var(--foreground)]">
                    Phone
                  </p>
                  <a
                    href={phoneHref}
                    className="mt-1 block text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                  >
                    {phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary-text)]"
                />
                <div>
                  <p className="font-semibold text-[var(--foreground)]">
                    Address
                  </p>
                  <address className="mt-1 not-italic text-[var(--foreground-muted)]">
                    {addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              </div>
            </div>
          </div>

          <div className="qcsv-card p-6 sm:p-8">
            <ConsultationForm idPrefix="contact" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
