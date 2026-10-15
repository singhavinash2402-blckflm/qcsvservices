import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";
import { privacyPolicy } from "@/config/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How QCSV Services collects, uses and protects personal information submitted through this website.",
  alternates: { canonical: "/privacy" }
};

export default function PrivacyPage() {
  return <LegalPage document={privacyPolicy} />;
}
