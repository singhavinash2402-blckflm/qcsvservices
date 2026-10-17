import type { MetadataRoute } from "next";

import { allowIndexing, siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  // Previews, and production until launch sign-off, must not be crawled.
  if (!allowIndexing) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`
  };
}
