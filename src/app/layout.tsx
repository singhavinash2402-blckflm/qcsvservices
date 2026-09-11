import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://qcsvservices.in"),
  title: {
    default: "QCSV Services | Technology & Digital Services",
    template: "%s | QCSV Services",
  },
  description:
    "QCSV Services delivers modern technology, data, cloud, and digital solutions for businesses.",
  alternates: {
    canonical: "https://qcsvservices.in",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
