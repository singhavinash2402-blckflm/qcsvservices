"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

const capabilities = [
    {
        value: "Data",
        label: "Data & Analytics",
        detail: "Turn data into actionable insight",
    },
    {
        value: "Cloud",
        label: "Cloud & Modernization",
        detail: "Build scalable digital foundations",
    },
    {
        value: "Digital",
        label: "Digital Engineering",
        detail: "Create reliable technology solutions",
    },
];

export function Hero() {
    return (
        <section className="relative isolate overflow-hidden">
            <Image
                src="/images/hero/qcsv-home-hero.jpg"
                alt="Abstract enterprise technology system with connected digital patterns"
                fill
                priority
                sizes="100vw"
                className="absolute inset-0 -z-20 object-cover object-center"
            />
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,15,30,0.96)_0%,rgba(5,15,30,0.8)_42%,rgba(5,15,30,0.42)_100%)]"
            />

            <div
                aria-hidden="true"
                className="qcsv-ambient-glow -left-24 top-24"
            />

            <div
                aria-hidden="true"
                className="qcsv-ambient-glow -right-32 bottom-0 bg-[rgba(99,102,241,0.1)]"
            />

            <Container>
                <div className="relative flex min-h-[calc(100vh-4rem)] items-center py-20 md:py-28">
                    <div className="mx-auto w-full max-w-5xl text-center">
                        <Badge
                            variant="primary"
                            className="gap-2 px-4 py-2 text-xs tracking-[0.14em]"
                        >
                            <CheckCircle2
                                aria-hidden="true"
                                className="h-4 w-4"
                            />
                            NEXT-GEN TECHNOLOGY & DIGITAL SERVICES
                        </Badge>

                        <h1 className="mx-auto mt-8 max-w-5xl font-display text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl lg:text-7xl">
                            Building technology solutions that{" "}
                            <span className="qcsv-gradient-text">
                                move businesses forward.
                            </span>
                        </h1>

                        <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[var(--foreground-muted)] sm:text-lg md:text-xl">
                            QCSV Services helps organizations modernize data, cloud,
                            technology, and digital operations through practical, scalable
                            solutions built for measurable business impact.
                        </p>

                        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <Link
                                href="/#contact"
                                className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] w-full sm:w-auto"
                            >
                                Start a conversation
                                <ArrowRight
                                    aria-hidden="true"
                                    className="ml-2 h-4 w-4"
                                />
                            </Link>

                            <Link
                                href="/services"
                                className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-strong)] bg-transparent px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors hover:bg-[var(--surface)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] w-full sm:w-auto"
                            >
                                Explore our services
                            </Link>
                        </div>

                        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-4 border-t border-[var(--border)] pt-10 sm:grid-cols-3">
                            {capabilities.map((capability) => (
                                <div
                                    key={capability.label}
                                    className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] px-5 py-6 text-center"
                                >
                                    <div className="font-display text-xl font-bold text-[var(--foreground)]">
                                        {capability.value}
                                    </div>

                                    <div className="mt-2 text-sm font-semibold text-[var(--foreground-muted)]">
                                        {capability.label}
                                    </div>

                                    <div className="mt-1 text-xs leading-5 text-[var(--foreground-subtle)]">
                                        {capability.detail}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
