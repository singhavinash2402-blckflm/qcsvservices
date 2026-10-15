import type { MetadataRoute } from "next";

import { industries } from "@/config/industries";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/industries",
  "/success-stories",
  "/privacy",
  "/terms"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes,
    ...services.map((service) => `/services/${service.slug}`),
    ...industries.map((industry) => `/industries/${industry.slug}`)
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date()
  }));
}
