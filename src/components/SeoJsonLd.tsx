import Script from "next/script";
import { site, buckhorn } from "../lib/seo";

export default function SeoJsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Jan International Realty",
    url: site.url,
    areaServed: "Great Smoky Mountains, Tennessee",
    description: site.description,
  };

  const listing = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: buckhorn.title,
    description: buckhorn.description,
    url: `${site.url}/#featured`,
    address: { "@type": "PostalAddress", addressLocality: "Gatlinburg", addressRegion: "TN", addressCountry: "US" },
    image: [`${site.url}${buckhorn.hero}`],
  };

  return (
    <>
      <Script id="jsonld-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <Script id="jsonld-listing" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listing) }} />
    </>
  );
}
