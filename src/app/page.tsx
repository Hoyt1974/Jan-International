import Featured from "../components/Featured";
import Gallery from "../components/Gallery";
import Services from "../components/Services";
import Contact from "../components/Contact";
import SeoJsonLd from "../components/SeoJsonLd";

export default function Home() {
  return (
    <main id="top">
      <SeoJsonLd />

      {/* Hero */}
      <section className="hero">
        <div className="overlay"></div>
        <div className="container hero-inner">
          <h1>Southern Hospitality. Global Welcome.</h1>
          <p>
            Discover landmark estates in the Great Smoky Mountains — curated for international buyers and
            local dreamers alike.
          </p>
        </div>
      </section>

      {/* Featured listing */}
      <Featured />

      {/* Gallery */}
      <Gallery />

      {/* Services */}
      <Services />

      {/* Contact */}
      <Contact />
    </main>
  );
}
