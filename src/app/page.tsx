// src/app/page.tsx
import Image from "next/image";

import Hero from "../components/Hero";              // you created this earlier
import Featured from "../components/Featured";      // your existing section
import Gallery from "../components/Gallery";        // your existing section
import Services from "../components/Services";      // your existing section
import Contact from "../components/Contact";        // your existing section
import WhySmokies from "../components/WhySmokies";  // NEW
import Footer from "../components/Footer";          // NEW

export const metadata = {
  title: "Jan International — Smoky Mountain Realty",
  description:
    "Landmark estates and lodging in the Smokies for international buyers and local dreamers alike.",
};

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <Hero />

      {/* FEATURED PROPERTY (Buckhorn) */}
      <Featured />

      {/* WHY THE SMOKIES (NEW) */}
      <WhySmokies />

      {/* GALLERY */}
      <Gallery />

      {/* SERVICES */}
      <Services />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER (NEW) */}
      <Footer />
    </main>
  );
}
