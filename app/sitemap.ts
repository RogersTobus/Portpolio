import type { MetadataRoute } from "next";
const pages = ["", "about", "impact", "work", "creative", "build", "thinking"];
export default function sitemap(): MetadataRoute.Sitemap { return pages.map((slug, i) => ({ url: `https://xbase.co.kr/${slug ? `${slug}/` : ""}`, lastModified: new Date(), changeFrequency: i === 0 ? "weekly" : "monthly", priority: i === 0 ? 1 : .8 })); }
