import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { ConsultationProvider } from "@/components/consultation/consultation-provider";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { isProduction, siteConfig } from "@/config/site";
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
    description: siteConfig.description
  },
  twitter: { card: "summary_large_image" },
  robots: isProduction
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
        <ThemeProvider>
          <ConsultationProvider>{children}</ConsultationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
