import { site } from "../lib/seo";

export default async function sitemap() {
  const base = site.url;
  const now = new Date().toISOString();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/#gallery`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/#services`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/#contact`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
  ];
}
