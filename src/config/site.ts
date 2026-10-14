export const siteConfig = {
  name: "QCSV Services",
  legalName: "QCSV Services Private Limited",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://qcsvservices.in",
  title: "Validation and Quality Support for Pharma and Life Sciences",
  description:
    "QCSV Services helps pharmaceutical and life sciences organisations validate computerised systems, qualify infrastructure and equipment, and prepare the documentation that goes with them."
} as const;

/** Only the production deployment should be indexed by search engines. */
export const isProduction = process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV === "production"
  : process.env.NODE_ENV === "production";
