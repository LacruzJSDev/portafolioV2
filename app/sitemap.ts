import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { projects } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: site.url, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/proyectos`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/api`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    ...projects.map((p) => ({
      url: `${site.url}/proyectos/${p.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
