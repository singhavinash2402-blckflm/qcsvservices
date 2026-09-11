import type { MetadataRoute } from "next";

const siteUrl = "https://qcsvservices.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
  ];
}
