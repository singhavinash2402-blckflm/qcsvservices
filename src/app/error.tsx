"use client";

import Link from "next/link";

export default function ErrorPage({
  reset
}: Readonly<{ error: Error & { digest?: string }; reset: () => void }>) {
  return (
    <main
      id="main-content"
      className="qcsv-container-wide flex min-h-screen flex-col justify-center py-24"
    >
      <h1 className="text-4xl font-bold tracking-[-0.035em] text-[var(--foreground)] md:text-6xl">
        Something went wrong.
      </h1>
      <p className="mt-5 max-w-xl text-lg text-[var(--foreground-muted)]">
        Please try again. If the problem continues, contact us and we will help.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex min-h-12 items-center rounded-full bg-[var(--foreground)] px-7 text-sm font-semibold text-[var(--background)]"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex min-h-12 items-center rounded-full border-2 border-[var(--foreground)] px-7 text-sm font-semibold text-[var(--foreground)]"
        >
          Go to the home page
        </Link>
      </div>
    </main>
  );
}
