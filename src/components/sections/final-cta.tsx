import { ArrowRight, MessageCircle } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function FinalCTA() {
    return (
        <Section id="contact-cta" spacing="large">
            <Container>
                <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
                    <div className="qcsv-ambient-glow -right-32 -top-32" />

                    <div className="relative z-10 max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                            LET&apos;S WORK TOGETHER
                        </p>

                        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                            Ready to discuss your technology, validation or quality needs?
                        </h2>

                        <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--foreground-muted)] sm:text-lg">
                            Connect with QCSV to discuss your project requirements,
                            technology environment and areas where our expertise can help.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                href="#services"
                                className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)]"
                            >
                                Explore Our Services
                                <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
                            </a>

                            <a
                                href="#contact"
                                className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-strong)] bg-transparent px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors hover:bg-[var(--surface)]"
                            >
                                <MessageCircle aria-hidden="true" className="mr-2 h-4 w-4" />
                                Talk to QCSV
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}