export const siteConfig = {
  name: "QCSV Services",
  legalName: "QCSV Services Private Limited",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://qcsvservices.in",
  title: "Validation and Quality Support for Pharma and Life Sciences",
  description:
    "QCSV Services helps pharmaceutical and life sciences organisations validate computerised systems, qualify infrastructure and equipment, and prepare the documentation that goes with them.",
  ogImage: {
    url: "/og-default.jpg",
    width: 1200,
    height: 630,
    alt: "QCSV Services: validation and quality support for pharma and life sciences"
  },
  /** Contact details come from the old website. Confirm with the client before launch. */
  contact: {
    email: "info@qcsvservices.in",
    phone: "+91 93247 54416",
    phoneHref: "tel:+919324754416",
    addressLines: [
      "QCSV Services Private Limited",
      "Madauli, Bhullanpur PAC",
      "Varanasi, Uttar Pradesh 221108",
      "India"
    ]
  }
} as const;

/** Only the production deployment should be indexed by search engines. */
export const isProduction = process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV === "production"
  : process.env.NODE_ENV === "production";
