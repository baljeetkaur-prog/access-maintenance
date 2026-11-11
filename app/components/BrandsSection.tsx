"use client";

import "./BrandsSection.css";

const brands = [
  { name: "Mosaic", image: "/images/mosaic.webp" },
  { name: "TTC", image: "/images/ttc.webp" },
  { name: "Metrolinx", image: "/images/metrolinx.webp" },
  { name: "Metro", image: "/images/metro.webp" },
  { name: "Keolis", image: "/images/keolis.png" },
  { name: "Waterloo", image: "/images/waterloo.svg" },
  { name: "Crosslinx", image: "/images/crosslinx.webp" },
];

export default function BrandsSection() {
  return (
    <section className="brands-section">
      <div className="brands-container">
        <div className="brands-heading">
          <h2>Trusted by</h2>
        </div>

        <div className="brands-divider"></div>

        <div className="brands-marquee">
          <div className="brands-track">
            {[...brands, ...brands].map((brand, index) => (
              <div className="brand-item" key={`${brand.name}-${index}`}>
                <img src={brand.image} alt={brand.name} />
              </div>
            ))}
          </div>
        </div>

        <div className="brands-divider brands-bottom-divider"></div>
      </div>
    </section>
  );
}