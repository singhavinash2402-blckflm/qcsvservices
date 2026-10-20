import type { NextConfig } from "next";

// Report-only for now: violations show in the browser console without blocking
// anything. Once the live site is clean, rename the key to
// "Content-Security-Policy" to enforce it (see docs/06-operations/runbook.md).
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'"
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()"
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains"
  },
  // The development server needs relaxed rules, so apply the policy to builds only.
  ...(process.env.NODE_ENV === "production"
    ? [
        {
          key: "Content-Security-Policy-Report-Only",
          value: contentSecurityPolicy
        }
      ]
    : [])
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      {
        source: "/about/mission-vision",
        destination: "/about#mission-vision",
        permanent: false
      },
      {
        source: "/about/our-approach",
        destination: "/about#approach",
        permanent: false
      },
      {
        source: "/about/why-qcsv",
        destination: "/about#why-qcsv",
        permanent: false
      }
    ];
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  }
};

export default nextConfig;
