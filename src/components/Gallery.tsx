"use client";
import { useEffect, useState } from "react";

type ImgItem = { src: string; alt?: string };

export default function Gallery() {
  const [images, setImages] = useState<ImgItem[]>([]);

  useEffect(() => {
    fetch("/assets/buckhorn-index.json", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => {
        const list: string[] = Array.isArray(data?.images) ? data.images : [];
        const items = list.slice(0, 12).map((src, i) => ({
          src,
          alt: `Buckhorn Inn view ${i + 1}`,
        }));
        if (items.length) setImages(items);
      })
      .catch(() => {
        // Fallback: first 6 local jpgs if manifest missing
        const fallback = Array.from({ length: 6 }, (_, i) => i + 1).map((n) => ({
          src: `/assets/buckhorn${n}.jpg`,
          alt: `Buckhorn Inn view ${n}`,
        }));
        setImages(fallback);
      });
  }, []);

  return (
    <section id="gallery" className="section">
      <div className="container">
        <h2>Photo Gallery</h2>
        <div className="grid gallery-grid">
          {images.map((img) => (
            <a key={img.src} href={img.src} target="_blank" rel="noreferrer" className="tile">
              <img src={img.src} alt={img.alt ?? "Gallery image"} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

