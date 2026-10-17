import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "QCSV",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0B3566",
    icons: [
      { src: "/icons/app-icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/app-icon-512.png", sizes: "512x512", type: "image/png" }
    ]
  };
}
