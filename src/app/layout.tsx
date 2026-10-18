import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { ConsultationProvider } from "@/components/consultation/consultation-provider";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { allowIndexing, siteConfig } from "@/config/site";
import "./globals.css";

const sans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "en_IN",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage]
  },
  twitter: { card: "summary_large_image", images: [siteConfig.ogImage.url] },
  robots: allowIndexing
    ? { index: true, follow: true }
    : { index: false, follow: false }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={sans.variable}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[var(--foreground)] focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-[var(--background)]"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.name,
              legalName: siteConfig.legalName,
              url: siteConfig.url,
              description: siteConfig.description,
              logo: `${siteConfig.url}/icons/app-icon-512.png`
            })
          }}
        />
        <ThemeProvider>
          <ConsultationProvider>{children}</ConsultationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
