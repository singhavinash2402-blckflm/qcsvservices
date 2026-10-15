"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

import { ReadMore } from "@/components/ui/read-more";
import { stories, storyHref, storyMeta } from "@/config/stories";

export function SuccessStories() {
  const rail = useRef<HTMLDivElement>(null);
  const scroll = (direction: 1 | -1) =>
    rail.current?.scrollBy({ left: direction * 400, behavior: "smooth" });

  return (
    <section
      id="success-stories"
      className="bg-[#0b0f14] py-20 text-white md:py-28"
    >
      <div className="qcsv-container-wide">
        <h2 className="text-4xl font-bold tracking-[-0.03em] md:text-5xl">
          Selected engagements
        </h2>
        <p className="mt-4 max-w-2xl text-white/70">
          Customers across industries come to us with specific business
          challenges, and we build individual solutions for them. These
          engagements show the work behind the headlines. Customer names are
          withheld.
        </p>

        <div
          ref={rail}
          tabIndex={0}
          aria-label="Success stories"
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5"
        >
          {stories.map((story) => (
            <Link
              key={story.slug}
              href={storyHref(story)}
              className="group flex min-h-[300px] w-[min(380px,84vw)] shrink-0 snap-start flex-col rounded-3xl border border-white/10 bg-[#131a21] p-7 transition-colors hover:border-white/30"
            >
              <h3 className="text-xl font-semibold tracking-tight">
                {story.title}
              </h3>
              <p className="mb-4 mt-2 text-sm font-semibold text-[#6fd0d8]">
                {storyMeta(story)}
              </p>
              <p className="flex-1 text-sm leading-relaxed text-white/70">
                {story.summary}
              </p>
              <ReadMore className="mt-5 text-white" />
            </Link>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-3">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Previous stories"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 hover:bg-white/10"
          >
            <ArrowLeft aria-hidden="true" className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Next stories"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 hover:bg-white/10"
          >
            <ArrowRight aria-hidden="true" className="h-5 w-5" />
          </button>
          <Link
            href="/success-stories"
            className="ml-3 text-sm font-semibold text-white underline-offset-4 hover:underline"
          >
            View all success stories
          </Link>
        </div>
      </div>
    </section>
  );
}
