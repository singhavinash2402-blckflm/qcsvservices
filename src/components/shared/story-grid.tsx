import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { ReadMore } from "@/components/ui/read-more";
import { stories, storyHref, storyMeta } from "@/config/stories";

export function StoryGrid({
  slugs,
  heading
}: Readonly<{ slugs: readonly string[]; heading: string }>) {
  const items = stories.filter((story) => slugs.includes(story.slug));
  if (items.length === 0) return null;

  return (
    <section className="bg-[var(--surface)] py-16 md:py-24">
      <div className="qcsv-container-wide">
        <h2 className="text-3xl font-bold tracking-[-0.03em] text-[var(--foreground)] md:text-4xl">
          {heading}
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((story, index) => (
            <Link
              key={story.slug}
              data-reveal
              data-reveal-delay={(index % 3) * 80}
              href={storyHref(story)}
              className="group flex flex-col rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
            >
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                {story.title}
              </h3>
              <p className="mb-3 mt-1 text-sm font-semibold text-[var(--primary-text)]">
                {storyMeta(story)}
              </p>
              <p className="flex-1 text-sm leading-relaxed text-[var(--foreground-muted)]">
                {story.summary}
              </p>
              <ReadMore className="mt-5 text-[var(--foreground)]" />
            </Link>
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
