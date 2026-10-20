"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { siteConfig } from "@/config/site";

/** Notice strip above the menu. Shows nothing unless siteConfig.announcement is set. */
export function AnnouncementBar({ visible }: Readonly<{ visible: boolean }>) {
  const notice = siteConfig.announcement;
  const [dismissed, setDismissed] = useState(false);

  if (!notice || dismissed) return null;

  return (
    <div
      inert={!visible}
      className={`overflow-hidden bg-[var(--primary)] text-white transition-[max-height] duration-300 ${
        visible ? "max-h-16" : "max-h-0"
      }`}
    >
      <div className="qcsv-container-wide flex min-h-10 items-center justify-between gap-4 py-2 text-sm">
        <p>
          {notice.text}
          {notice.href ? (
            <Link
              href={notice.href}
              className="ml-2 font-semibold underline underline-offset-4"
            >
              {notice.linkLabel ?? "Learn more"}
            </Link>
          ) : null}
        </p>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss announcement"
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full hover:bg-white/15"
        >
          <X aria-hidden="true" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
