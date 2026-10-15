import { ConsultationButton } from "@/components/consultation/consultation-button";
import Image from "next/image";
import Link from "next/link";

type PageHeroProps = Readonly<{
  image: string;
  title: string;
  summary: string;
  breadcrumb?: { label: string; href?: string }[];
  secondary?: { label: string; href: string };
  consultationService?: string;
}>;

export function PageHero({
  image,
  title,
  summary,
  breadcrumb,
  secondary,
  consultationService
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b0f14] text-white">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(6,12,18,0.6)_0%,rgba(6,12,18,0.85)_100%)]"
      />
      <div className="qcsv-container-wide pb-16 pt-20 md:pb-24 md:pt-28">
        {breadcrumb ? (
          <nav aria-label="Breadcrumb" className="text-sm text-white/70">
            {breadcrumb.map((item, index) => (
              <span key={item.label}>
                {index > 0 ? <span aria-hidden="true"> / </span> : null}
                {item.href ? (
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                ) : (
                  item.label
                )}
              </span>
            ))}
          </nav>
        ) : null}
        <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.02] tracking-[-0.035em] sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/85">{summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ConsultationButton
            service={consultationService}
            className="inline-flex min-h-12 items-center rounded-full bg-white px-7 text-sm font-semibold text-[#0b0f14] transition-transform hover:scale-[1.03]"
          >
            Request a consultation
          </ConsultationButton>
          {secondary ? (
            <Link
              href={secondary.href}
              className="inline-flex min-h-12 items-center rounded-full border-2 border-white px-7 text-sm font-semibold text-white hover:bg-white/10"
            >
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
