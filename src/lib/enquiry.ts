import { services } from "@/config/services";

export const enquiryFields = [
  "name",
  "company",
  "email",
  "phone",
  "service",
  "message"
] as const;

export type EnquiryField = (typeof enquiryFields)[number];
export type EnquiryValues = Record<EnquiryField, string>;

export const serviceOptions = [
  ...services.map((service) => service.name),
  "Something else"
];

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<EnquiryField, string>>;
  /** Echoed back so the form keeps what the visitor typed after an error. */
  values?: Partial<EnquiryValues>;
};

const clean = (value: FormDataEntryValue | null, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export function readValues(formData: FormData): EnquiryValues {
  return {
    name: clean(formData.get("name"), 200),
    company: clean(formData.get("company"), 300),
    email: clean(formData.get("email"), 320),
    phone: clean(formData.get("phone"), 60),
    service: clean(formData.get("service"), 200),
    message: clean(formData.get("message"), 6000)
  };
}

export function validate(values: EnquiryValues) {
  const errors: Partial<Record<EnquiryField, string>> = {};

  if (values.name.length < 2 || values.name.length > 100) {
    errors.name = "Please enter your name.";
  }
  if (values.company.length < 2 || values.company.length > 150) {
    errors.company = "Please enter your company name.";
  }
  if (
    values.email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)
  ) {
    errors.email = "Please enter a valid email address.";
  }
  if (values.phone && !/^[0-9+()\-\s.]{6,30}$/.test(values.phone)) {
    errors.phone = "Please enter a valid phone number, or leave it blank.";
  }
  if (!serviceOptions.includes(values.service)) {
    errors.service = "Please choose an area of interest.";
  }
  if (values.message.length < 10 || values.message.length > 4000) {
    errors.message =
      "Please tell us a little about your project (10 to 4000 characters).";
  } else if ((values.message.match(/https?:\/\//gi) ?? []).length > 2) {
    errors.message = "Please remove some links from your message.";
  }

  return errors;
}

const oneLine = (text: string) => text.replace(/[\r\n]+/g, " ").trim();

export function buildEmail(
  values: EnquiryValues,
  meta: { source: string; submittedAt: string }
) {
  const subject = oneLine(
    `New website enquiry: ${values.service} (${values.name}, ${values.company})`
  ).slice(0, 180);

  const text = [
    "A new enquiry was sent through the QCSV Services website.",
    "",
    `Name: ${oneLine(values.name)}`,
    `Company: ${oneLine(values.company)}`,
    `Email: ${oneLine(values.email)}`,
    `Phone: ${values.phone ? oneLine(values.phone) : "Not given"}`,
    `Area of interest: ${values.service}`,
    "",
    "Message:",
    values.message,
    "",
    "---",
    `Sent from page: ${meta.source}`,
    `Sent at: ${meta.submittedAt}`,
    "Reply to this email to answer the visitor directly."
  ].join("\n");

  return { subject, text };
}
