"use client";

import { usePathname } from "next/navigation";
import { useActionState, useEffect, useRef } from "react";

import { submitEnquiry } from "@/app/actions/enquiry";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  serviceOptions,
  type EnquiryField,
  type EnquiryState
} from "@/lib/enquiry";
import { siteConfig } from "@/config/site";

const labelClass = "mb-2 block text-sm font-semibold text-[var(--foreground)]";
const initialState: EnquiryState = { status: "idle" };

type Props = Readonly<{
  /** Makes field ids unique when the form appears twice on a page. */
  idPrefix: string;
  defaultService?: string;
}>;

export function ConsultationForm({ idPrefix, defaultService = "" }: Props) {
  const pathname = usePathname();
  const [state, formAction, pending] = useActionState(
    submitEnquiry,
    initialState
  );
  const startedAt = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (startedAt.current) startedAt.current.value = String(Date.now());
  }, []);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="rounded-[var(--radius-md)] bg-[var(--surface)] p-6"
      >
        <p className="text-lg font-semibold text-[var(--foreground)]">
          Enquiry sent
        </p>
        <p className="mt-2 text-[var(--foreground-muted)]">{state.message}</p>
      </div>
    );
  }

  const errors = state.fieldErrors ?? {};
  const field = (name: EnquiryField) => ({
    id: `${idPrefix}-${name}`,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${idPrefix}-${name}-error` : undefined
  });
  const error = (name: EnquiryField) =>
    errors[name] ? (
      <span
        id={`${idPrefix}-${name}-error`}
        className="mt-1.5 block text-sm text-red-600 dark:text-red-400"
      >
        {errors[name]}
      </span>
    ) : null;

  return (
    <form action={formAction} className="space-y-5">
      <input type="hidden" name="source" value={pathname} />
      <input type="hidden" name="startedAt" defaultValue="" ref={startedAt} />
      {/* Hidden from people. Bots that fill it are ignored. */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {state.status === "error" && state.message ? (
        <p
          role="alert"
          className="rounded-[var(--radius-md)] border border-red-300 bg-red-50 p-4 text-sm text-red-800 dark:border-red-500/40 dark:bg-red-500/10 dark:text-red-200"
        >
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block" htmlFor={`${idPrefix}-name`}>
          <span className={labelClass}>Name</span>
          <Input
            {...field("name")}
            placeholder="Your name"
            autoComplete="name"
            defaultValue={state.values?.name}
            required
          />
          {error("name")}
        </label>
        <label className="block" htmlFor={`${idPrefix}-company`}>
          <span className={labelClass}>Company</span>
          <Input
            {...field("company")}
            placeholder="Company name"
            autoComplete="organization"
            defaultValue={state.values?.company}
            required
          />
          {error("company")}
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block" htmlFor={`${idPrefix}-email`}>
          <span className={labelClass}>Business email</span>
          <Input
            {...field("email")}
            type="email"
            placeholder="name@company.com"
            autoComplete="email"
            defaultValue={state.values?.email}
            required
          />
          {error("email")}
        </label>
        <label className="block" htmlFor={`${idPrefix}-phone`}>
          <span className={labelClass}>Phone (optional)</span>
          <Input
            {...field("phone")}
            type="tel"
            placeholder="Phone number"
            autoComplete="tel"
            defaultValue={state.values?.phone}
          />
          {error("phone")}
        </label>
      </div>

      <label className="block" htmlFor={`${idPrefix}-service`}>
        <span className={labelClass}>Area of interest</span>
        <Select
          {...field("service")}
          required
          defaultValue={state.values?.service ?? defaultService}
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
        {error("service")}
      </label>

      <label className="block" htmlFor={`${idPrefix}-message`}>
        <span className={labelClass}>Message</span>
        <Textarea
          {...field("message")}
          placeholder="Tell us about the system, site or process you are working on"
          rows={5}
          defaultValue={state.values?.message}
          required
        />
        {error("message")}
      </label>

      <Button type="submit" disabled={pending} className="w-full sm:w-auto">
        {pending ? "Sending..." : "Send enquiry"}
      </Button>

      <p className="text-xs text-[var(--foreground-subtle)]">
        We use your details only to reply to this enquiry. You can also email us
        at{" "}
        <a
          className="underline hover:text-[var(--foreground)]"
          href={`mailto:${siteConfig.contact.email}`}
        >
          {siteConfig.contact.email}
        </a>
        .
      </p>
    </form>
  );
}
