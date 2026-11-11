"use client";

import Link from "next/link";
import "./Industries.css";

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

export default function Industries() {
return ( <main className="industries-page">
{/* Hero Section */} <section className="industries-hero"> <div className="industries-container">
{/* Breadcrumb */} <div className="industries-breadcrumb"> <Link href="/">Home</Link> <span>/</span> <span>Industries</span> </div>
      {/* Hero Content */}
      <div className="industries-hero-heading">
        <div className="industries-eyebrow">
          <span className="industries-eyebrow-line"></span>
          <span>Industries</span>
        </div>

        <div className="industries-hero-grid">
          <h1>Every site has its own priorities.</h1>

          <div className="industries-hero-side">
            <p>
              Facility and site support for commercial, public, transit
              and industrial environments.
            </p>

            <Link href="/contact" className="industries-cta">
              Discuss your requirements
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Sectors Section */}
  <section className="industries-section">
    <div className="industries-container">

      <div className="industries-list">
        {industries.map((industry) => (
          <Link
            href={industry.href}
            className="industry-row"
            key={industry.number}
          >
            <div className="industry-number">{industry.number}</div>

            <div className="industry-title">
              <h3>{industry.title}</h3>
            </div>

            <div className="industry-description">
              <p>{industry.description}</p>
            </div>

            <div className="industry-link-wrap">
              <span className="industry-link">Explore Sector</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
  {/* Footer CTA Section */}
  <section className="footer-cta-section">
    <div className="footer-cta-container">
      <div className="footer-cta-content">
        <div className="footer-cta-eyebrow">
          <span className="footer-cta-eyebrow-line"></span>
          <span>Your site. A clear next step.</span>
        </div>

        <div className="footer-cta-main">
          <div className="footer-cta-text">
            <h2>Discuss your site requirements.</h2>

            <p>
              Tell us about your facility, scope and priorities. We’ll help
              define the next step.
            </p>
          </div>

          <div className="footer-cta-action">
            <Link
              href="/contact-us"
              className="footer-cta-button"
            >
              Request a proposal
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>

</main>

);
}
