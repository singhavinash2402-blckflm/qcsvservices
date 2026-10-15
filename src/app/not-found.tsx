import Link from "next/link";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <main id="main-content" className="qcsv-container-wide py-24 md:py-36">
        <p className="text-sm font-semibold text-[var(--primary-text)]">404</p>
        <h1 className="mt-3 text-4xl font-bold tracking-[-0.035em] text-[var(--foreground)] md:text-6xl">
          We could not find that page.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-[var(--foreground-muted)]">
          The page may have moved or the address may be mistyped. These links
          should get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center rounded-full bg-[var(--foreground)] px-7 text-sm font-semibold text-[var(--background)]"
          >
            Go to the home page
          </Link>
          <Link
            href="/services"
            className="inline-flex min-h-12 items-center rounded-full border-2 border-[var(--foreground)] px-7 text-sm font-semibold text-[var(--foreground)]"
          >
            Browse services
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
