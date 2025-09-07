import type { Metadata } from "next";
import "./globals.css";
import { site } from "../lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: "%s · Jan International",
  },
  description: site.description,
  openGraph: {
    type: "website",
    url: site.url,
    title: site.name,
    description: site.description,
    siteName: site.name,
    locale: site.locale,
    images: [{ url: "/assets/hero.jpg", width: 1200, height: 630, alt: "Smoky Mountains" }],
  },
  twitter: {
    card: "summary_large_image",
    site: site.twitter,
    creator: site.twitter,
    title: site.name,
    description: site.description,
    images: ["/assets/hero.jpg"],
  },
  alternates: {
    canonical: site.url,
  },
  icons: { shortcut: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
