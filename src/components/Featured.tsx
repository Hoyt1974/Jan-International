import { buckhorn } from "../lib/seo";

export default function Featured() {
  return (
    <section id="featured" className="section">
      <div className="container">
        <h2>{buckhorn.title}</h2>

        <article className="card">
          {/* Cover image */}
          <img
            src={buckhorn.hero}
            alt="Buckhorn Inn — main lodge exterior"
            className="cover"
          />

          {/* Body */}
          <div className="card-body">
            <p>Buckhorn Inn — main lodge exterior</p>
          </div>
        </article>
      </div>
    </section>
  );
}
