import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/", disallow: ["/wp-admin/", "/wp-includes/"] }, sitemap: "https://xbase.co.kr/wp-sitemap.xml", host: "https://xbase.co.kr" }; }
