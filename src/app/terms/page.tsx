import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";
import { termsOfUse } from "@/config/legal";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that apply when you use the QCSV Services website.",
  alternates: { canonical: "/terms" }
};

export default function TermsPage() {
  return <LegalPage document={termsOfUse} />;
}
