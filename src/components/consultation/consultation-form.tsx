"use client";

import { usePathname } from "next/navigation";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";

const serviceOptions = [
  ...services.map((service) => service.name),
  "Something else"
];

const labelClass = "mb-2 block text-sm font-semibold text-[var(--foreground)]";

type Props = Readonly<{
  /** Makes field ids unique when the form appears twice on a page. */
  idPrefix: string;
  defaultService?: string;
}>;

export function ConsultationForm({ idPrefix, defaultService = "" }: Props) {
  const pathname = usePathname();
  const [status, setStatus] = useState<"idle" | "not-connected">("idle");

  // The enquiry service is connected in the next phase. Until then the form
  // must not submit, because a plain form post would put personal details in
  // the page address.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("not-connected");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="source" value={pathname} />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block" htmlFor={`${idPrefix}-name`}>
          <span className={labelClass}>Name</span>
          <Input
            id={`${idPrefix}-name`}
            name="name"
            placeholder="Your name"
            autoComplete="name"
            required
          />
        </label>
        <label className="block" htmlFor={`${idPrefix}-company`}>
          <span className={labelClass}>Company</span>
          <Input
            id={`${idPrefix}-company`}
            name="company"
            placeholder="Company name"
            autoComplete="organization"
            required
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block" htmlFor={`${idPrefix}-email`}>
          <span className={labelClass}>Business email</span>
          <Input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            placeholder="name@company.com"
            autoComplete="email"
            required
          />
        </label>
        <label className="block" htmlFor={`${idPrefix}-phone`}>
          <span className={labelClass}>Phone (optional)</span>
          <Input
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            placeholder="Phone number"
            autoComplete="tel"
          />
        </label>
      </div>

      <label className="block" htmlFor={`${idPrefix}-service`}>
        <span className={labelClass}>Area of interest</span>
        <Select
          id={`${idPrefix}-service`}
          name="service"
          required
          defaultValue={defaultService}
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </label>

      <label className="block" htmlFor={`${idPrefix}-message`}>
        <span className={labelClass}>Message</span>
        <Textarea
          id={`${idPrefix}-message`}
          name="message"
          placeholder="Tell us about the system, site or process you are working on"
          rows={5}
          required
        />
      </label>

      <Button type="submit" className="w-full sm:w-auto">
        Send enquiry
      </Button>

      {status === "not-connected" ? (
        <p
          role="status"
          className="rounded-[var(--radius-md)] bg-[var(--surface)] p-4 text-sm text-[var(--foreground-muted)]"
        >
          This form is not connected yet, so nothing was sent. Please email us
          at{" "}
          <a
            className="font-semibold text-[var(--primary-text)] underline"
            href={`mailto:${siteConfig.contact.email}`}
          >
            {siteConfig.contact.email}
          </a>{" "}
          for now.
        </p>
      ) : null}
    </form>
  );
}
