
"use client";

import Link from "next/link";
import "./Commercial.css";
import {
  FaBuilding,
  FaTools,
  FaBroom,
  FaLeaf,
} from "react-icons/fa";

export default function Commercial() {
  return (
    <main className="commercial-page">
      {/* Hero Section */}
      <section className="commercial-hero">
        <div className="commercial-container">
          <div className="commercial-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/industries">Industries</Link>
          </div>

          <div className="commercial-hero-heading">
            <div className="commercial-eyebrow">
              <span className="commercial-eyebrow-line"></span>
              <span>Industries</span>
            </div>

            <div className="commercial-hero-grid">
              <h1>Commercial Properties</h1>

              <div className="commercial-hero-side">
                <p>
                  Technical trades, cleaning and exterior programmes for
                  occupied commercial sites.
                </p>

                <Link
                  href="/contact-us"
                  className="commercial-cta"
                >
                  Discuss your requirements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Operating Environment Section */}
<section className="commercial-environment">
  <div className="commercial-container">
    <div className="commercial-environment-intro">
      <div className="commercial-environment-heading">
        <div className="commercial-environment-label">
          <span className="commercial-environment-label-line"></span>
          <span>Your operating environment</span>
        </div>

        <h2>A plan shaped by the site.</h2>
      </div>

      <p>
        Commercial property teams need clear work packages and an efficient
        route for day-to-day requests. Connect recurring services, responsive
        repairs and planned improvements through defined responsibilities and
        reporting. The site plan should account for occupants, visitors, tenant
        communication and business hours.
      </p>
    </div>

    <div className="commercial-environment-grid">
      <div className="commercial-environment-item">
        <h3>Occupants and visitors</h3>
        <p>
          Agree on work windows, notices and the areas that remain in use.
        </p>
      </div>

      <div className="commercial-environment-item">
        <h3>Property presentation</h3>
        <p>
          Set practical standards for grounds, common areas, finishes and
          cleaning.
        </p>
      </div>

      <div className="commercial-environment-item">
        <h3>Work coordination</h3>
        <p>
          Create a clear process for requests, approvals, attendance and
          closeout.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Relevant Services Section */}
<section className="commercial-services">
  <div className="commercial-container">
    <div className="commercial-services-heading">
      <div className="commercial-services-label">
        <span className="commercial-services-label-line"></span>
        <span>Relevant services</span>
      </div>

      <h2>Build the right service mix.</h2>
    </div>

  
<div className="commercial-services-grid">
  {/* Card 01 */}
  <div className="commercial-service-card">
    <div className="commercial-service-card-top">
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M12 7V4h8v3M9 7h14v21H9z" />
        <path d="M13 12h6M13 17h6M13 22h3" />
        <path d="M5 12v12M3 15l2-3 2 3M3 21l2 3 2-3" />
      </svg>
      <span>01</span>
    </div>

    <h3>Integrated Facilities Service</h3>
    <p>
      Bring day-to-day facility operations, maintenance planning and
      work requests together under a clear service structure.
    </p>
    <div className="commercial-service-tags">
      Facility Operations &amp; Maintenance · Asset &amp; Maintenance
      Planning · Work Orders &amp; Digital Reporting
    </div>

    <Link href="/services" className="commercial-service-link">
      Explore Services
    </Link>
  </div>

  {/* Card 02 */}
  <div className="commercial-service-card">
    <div className="commercial-service-card-top">
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M6 25L24 7M19 7h5v5" />
        <path d="M7 9l4-4 5 5-4 4z" />
        <path d="M17 17l7 7M20 24h4v-4" />
        <path d="M5 27h10" />
      </svg>
      <span>02</span>
    </div>

    <h3>Technical &amp; Trades Services</h3>
    <p>
      Electrical, plumbing, HVAC, handyman and emergency service
      requirements coordinated around your facility.
    </p>
    <div className="commercial-service-tags">
      Electrical · Plumbing · HVAC
    </div>

    <Link href="/services" className="commercial-service-link">
      Explore Services
    </Link>
  </div>

  {/* Card 03 */}
  <div className="commercial-service-card">
    <div className="commercial-service-card-top">
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M6 12h20M8 12l2-7h12l2 7M9 12v15h14V12" />
        <path d="M12 17h8M12 21h8M12 25h5" />
        <path d="M4 5l2 2M28 5l-2 2" />
      </svg>
      <span>03</span>
    </div>

    <h3>Cleaning &amp; Janitorial Services</h3>
    <p>
      Recurring janitorial, response cleaning and defined specialist
      cleaning scopes for working environments.
    </p>
    <div className="commercial-service-tags">
      Commercial Janitorial Programmes · Floor &amp; Carpet Care ·
      Window &amp; Glass Cleaning
    </div>

    <Link href="/services" className="commercial-service-link">
      Explore Services
    </Link>
  </div>

  {/* Card 04 */}
  <div className="commercial-service-card">
    <div className="commercial-service-card-top">
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 28V13M16 19c-7 0-10-4-10-10 7 0 10 4 10 10Z" />
        <path d="M16 15c0-6 4-10 10-10 0 7-4 10-10 10Z" />
        <path d="M6 28h20M10 24h12" />
      </svg>
      <span>04</span>
    </div>

    <h3>Grounds &amp; Landscape Maintenance</h3>
    <p>
      Grounds maintenance, seasonal programmes and defined landscape
      scopes for commercial and operational properties.
    </p>
    <div className="commercial-service-tags">
      Grounds Maintenance · Landscape Care · Seasonal &amp; Winter
      Operations
    </div>

    <Link href="/services" className="commercial-service-link">
      Explore Services
    </Link>
  </div>
</div>

  </div>
</section>

{/* First Conversation Section */}
<section className="commercial-conversation">
  <div className="commercial-conversation-container">
    <div className="commercial-conversation-label">
      <span className="commercial-conversation-label-line"></span>
      <span>Site requirements</span>
    </div>

    <h2>Define your operating priorities.</h2>

    <p>
      Property type and city; occupied hours; required services; current
      task list; tenant interfaces; service frequency and approval process.
    </p>
  </div>
</section>
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
