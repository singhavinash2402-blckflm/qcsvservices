import { serviceGroupOrder, services } from "@/config/services";

export const serviceGroups = serviceGroupOrder.map((title) => ({
  title,
  services: services
    .filter((service) => service.group === title)
    .map((service) => ({
      name: service.name,
      href: `/services/${service.slug}`
    }))
}));

export const serviceHrefByName = Object.fromEntries(
  services.map((service) => [service.name, `/services/${service.slug}`])
) as Record<string, string>;
