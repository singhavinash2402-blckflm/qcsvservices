import type { MetadataRoute } from "next";

import { isProduction, siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  // Preview deployments must never be crawled.
  if (!isProduction) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`
  };
}
