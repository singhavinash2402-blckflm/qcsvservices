import Image from "next/image";
import Link from "next/link";
import { ReadMore } from "@/components/ui/read-more";
import { homeServices } from "@/config/home";

const spans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7"
];

export function Services() {
  return (
    <section id="services" className="qcsv-container-wide py-16 md:py-24">
      <h2 className="text-4xl font-bold tracking-[-0.03em] text-[var(--foreground)] md:text-5xl">
        What we do
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-[var(--foreground-muted)]">
        Bring in QCSV for a single service or for the whole project lifecycle,
        from the first requirement to the final report.
      </p>

      <div className="mt-10 grid gap-4 lg:grid-cols-12">
        {homeServices.map((service, index) => (
          <Link
            key={service.title}
            href={service.href}
            data-reveal
            data-reveal-delay={index * 80}
            className={`group relative isolate flex min-h-[340px] items-end overflow-hidden rounded-[var(--radius-lg)] text-white lg:min-h-[400px] ${spans[index]}`}
          >
            <Image
              src={service.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="-z-20 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent_30%,rgba(5,10,16,0.88)_100%)]"
            />
            <div className="p-7">
              <h3 className="text-2xl font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="mt-2 max-w-md text-sm text-white/90">
                {service.description}
              </p>
              {service.tags.length > 0 ? (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              ) : null}
              <ReadMore label="Explore" className="mt-5 text-white" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
