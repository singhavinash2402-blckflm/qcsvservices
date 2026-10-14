import { ScrollLink } from "@/components/ui/scroll-link";

export function CtaBand() {
  return (
    <section className="bg-[#0b0f14] py-16 text-white md:py-24">
      <div className="qcsv-container-wide flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <h2 className="max-w-2xl text-3xl font-bold tracking-[-0.03em] md:text-5xl">
          Tell us what your project needs.
        </h2>
        <ScrollLink
          href="/#contact"
          className="inline-flex min-h-12 items-center self-start rounded-full bg-white px-7 text-sm font-semibold text-[#0b0f14] transition-transform hover:scale-[1.03]"
        >
          Request a consultation
        </ScrollLink>
      </div>
    </section>
  );
}
