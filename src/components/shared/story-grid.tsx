import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { homeStories } from "@/config/home";

export function StoryGrid({
  titles,
  heading
}: Readonly<{ titles: readonly string[]; heading: string }>) {
  const stories = homeStories.filter((story) => titles.includes(story.title));
  if (stories.length === 0) return null;

  return (
    <section className="bg-[var(--surface)] py-16 md:py-24">
      <div className="qcsv-container-wide">
        <h2 className="text-3xl font-bold tracking-[-0.03em] text-[var(--foreground)] md:text-4xl">
          {heading}
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.title}
              className="rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6"
            >
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                {story.title}
              </h3>
              <p className="mb-3 mt-1 text-sm font-semibold text-[var(--primary-text)]">
                {story.meta}
              </p>
              <p className="text-sm leading-relaxed text-[var(--foreground-muted)]">
                {story.summary}
              </p>
            </article>
          ))}
        </div>
        <Link
          href="/success-stories"
          className="mt-6 inline-flex items-center text-sm font-semibold text-[var(--foreground)] underline-offset-4 hover:underline"
        >
          View all success stories
          <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
