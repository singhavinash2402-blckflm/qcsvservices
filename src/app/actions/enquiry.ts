"use server";

import { headers } from "next/headers";

import {
  buildEmail,
  readValues,
  validate,
  type EnquiryState
} from "@/lib/enquiry";
import { siteConfig } from "@/config/site";

const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const MIN_FILL_MS = 2500;

// Best-effort limit per server instance. It slows down casual abuse; stronger
// protection (for example Cloudflare Turnstile) can be added if spam appears.
const hits = new Map<string, number[]>();

function rateLimited(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) hits.clear();
  return false;
}

const unavailable = (): EnquiryState => ({
  status: "error",
  message: `We could not send your enquiry just now. Please email us at ${siteConfig.contact.email} and we will get back to you.`
});

export async function submitEnquiry(
  _previous: EnquiryState,
  formData: FormData
): Promise<EnquiryState> {
  // Bots tend to fill the hidden field. Pretend it worked and send nothing.
  const honeypot = formData.get("website");
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return { status: "success", message: "Thank you." };
  }

  const values = readValues(formData);
  const fieldErrors = validate(values);
  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fieldErrors,
      values
    };
  }

  const startedAt = Number(formData.get("startedAt"));
  if (Number.isFinite(startedAt) && Date.now() - startedAt < MIN_FILL_MS) {
    return {
      status: "error",
      message: "That was very quick. Please check your details and send again.",
      values
    };
  }

  const requestHeaders = await headers();
  const ip =
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    requestHeaders.get("x-real-ip") ||
    "unknown";
  if (rateLimited(ip)) {
    return {
      status: "error",
      message:
        "You have sent several enquiries recently. Please try again later or email us directly.",
      values
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error(
      "Enquiry not sent: RESEND_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL is missing."
    );
    return { ...unavailable(), values };
  }

  const rawSource = formData.get("source");
  const source =
    typeof rawSource === "string" && rawSource.startsWith("/")
      ? rawSource.slice(0, 200)
      : "/";
  const { subject, text } = buildEmail(values, {
    source,
    submittedAt: new Date().toISOString()
  });

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: values.email,
        subject,
        text
      }),
      signal: AbortSignal.timeout(10000)
    });

    if (!response.ok) {
      // Log the status only, never the visitor's details.
      console.error(
        `Enquiry email failed: Resend returned ${response.status}.`
      );
      return { ...unavailable(), values };
    }
  } catch (error) {
    console.error(
      "Enquiry email failed:",
      error instanceof Error ? error.name : "unknown error"
    );
    return { ...unavailable(), values };
  }

  return {
    status: "success",
    message:
      "Thank you. We have received your enquiry and will reply to you by email."
  };
}
