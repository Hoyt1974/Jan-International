// src/components/WhySmokies.tsx
export default function WhySmokies() {
  const pics = [
    { src: "/assets/buckhorn9.jpg",  alt: "Great Smoky Mountains trails" },
    { src: "/assets/buckhorn10.jpg", alt: "Four-season scenery in the Smokies" },
    { src: "/assets/buckhorn11.jpg", alt: "Nature and wildlife in the Smokies" },
  ];

  return (
    <section id="why" className="section">
      <div className="container">
        <h2>Why the Smoky Mountains</h2>
        <p className="muted">
          America’s most visited national park, year-round attractions, and easy
          access from major hubs—perfect for retreats, investment, or a private escape.
        </p>

        <ul className="why-list">
          <li>14M+ annual park visitors and steady tourism</li>
          <li>Four-season fun: hiking, skiing, Dollywood, Anakeesta, Ober</li>
          <li>Strong short-term rental demand and repeat guests</li>
          <li>Southern hospitality, international welcome</li>
        </ul>

        <div className="grid-tiles">
          {pics.map((p) => (
            <div className="tile" key={p.src}>
              <img src={p.src} alt={p.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
