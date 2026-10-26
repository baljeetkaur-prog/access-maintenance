"use client";

import Link from "next/link";
import "./IndustriesSection.css";

const industries = [
  {
    number: "01",
    title: "Transit & Rail",
    description:
      "Facility and site services planned around stations, operating windows and public interfaces.",
    href: "/industries/transit-rail",
  },
  {
    number: "02",
    title: "Municipal & Public Facilities",
    description:
      "Maintenance, cleaning and seasonal services for properties that serve the public.",
    href: "/industries/municipal-public-facilities",
  },
  {
    number: "03",
    title: "Commercial Properties",
    description:
      "Technical trades, cleaning and exterior programmes for occupied commercial sites.",
    href: "/industries/commercial-properties",
  },
  {
    number: "04",
    title: "Industrial & Logistics",
    description:
      "Building and exterior support around site movement, access requirements and active operations.",
    href: "/industries/industrial-logistics",
  },
];

export default function IndustriesSection() {
  return (
    <section className="industries-section">
      <div className="industries-container">

        <div className="industries-heading">
          <div className="industries-heading-left">
            <div className="industries-eyebrow">
              <span className="industries-eyebrow-line"></span>
              <span>Industries</span>
            </div>

            <h2>Built for your operating environment.</h2>
          </div>

          <div className="industries-heading-right">
            <p>
              A public station, an office and a warehouse have different
              priorities. The service plan should reflect them.
            </p>
          </div>
        </div>

        <div className="industries-list">
          {industries.map((industry) => (
          <Link
  href={industry.href}
  className="industry-row"
  key={industry.number}
>
  <div className="industry-number">
    {industry.number}
  </div>

  <div className="industry-title">
    <h3>{industry.title}</h3>
  </div>

  <div className="industry-description">
    <p>{industry.description}</p>
  </div>

  <div className="industry-link-wrap">
    <span className="industry-link">
      Explore Sector
    </span>
  </div>
</Link>
          ))}
        </div>

      </div>
    </section>
  );
}