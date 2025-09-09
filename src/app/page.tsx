// app/page.tsx
import Image from "next/image";
import Link from "next/link";

import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery"; // you already have this
import Featured from "../components/Featured"; // you already have this
import Services from "../components/Services"; // you already have this

export const metadata = {
  title: "Jan International — Smoky Mountain Realty",
  description: "Landmark estates and lodging in the Smokies for international buyers.",
};

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <Hero />

      <section className="section">
        <div className="container">
          <Featured />
        </div>
      </section>

      <section id="gallery" className="section">
        <div className="container">
          <h2>Photo Gallery</h2>
          <div className="gallery-grid">
            <Gallery />
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <Services />
        </div>
      </section>

      {/* CONTACT */}
      <Contact />
    </main>
  );
}
