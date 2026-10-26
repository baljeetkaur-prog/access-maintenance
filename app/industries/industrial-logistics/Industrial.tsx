"use client";

import Link from "next/link";
import "./Industrial.css";

export default function Industrial() {
  return (
    <main className="industrial-page">
      {/* Hero Section */}
      <section className="industrial-hero">
        <div className="industrial-container">
          <div className="industrial-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/industries">Industries</Link>
          </div>

          <div className="industrial-hero-heading">
            <div className="industrial-eyebrow">
              <span className="industrial-eyebrow-line"></span>
              <span>Industries</span>
            </div>

            <div className="industrial-hero-grid">
              <h1>Industrial &amp; Logistics</h1>

              <div className="industrial-hero-side">
                <p>
                  Building and exterior support around site movement,
                  access requirements and active operations.
                </p>

                <Link
                  href="/contact-us"
                  className="industrial-cta"
                >
                  Discuss your requirements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* Operating Environment Section */}
      <section className="industrial-environment">
        <div className="industrial-container">
          <div className="industrial-environment-intro">
            <div className="industrial-environment-heading">
              <div className="industrial-environment-label">
                <span className="industrial-environment-label-line"></span>
                <span>Your operating environment</span>
              </div>

              <h2>A plan shaped by the site.</h2>
            </div>

            <p>
              Industrial and logistics properties require careful attention
              to access and sequencing. Define the building or exterior scope,
              understand vehicle and operating interfaces and establish the
              resources and records needed for the work. General facility
              support and specialist production-system work must have clear
              boundaries.
            </p>
          </div>

          <div className="industrial-environment-grid">
            <div className="industrial-environment-item">
              <h3>Site movement</h3>
              <p>
                Plan work areas around loading, deliveries and controlled
                vehicle routes.
              </p>
            </div>

            <div className="industrial-environment-item">
              <h3>Access and sequencing</h3>
              <p>
                Confirm working windows, site rules and the required
                coordination before mobilization.
              </p>
            </div>

            <div className="industrial-environment-item industrial-environment-documentation">
              <h3>Scope boundaries</h3>
              <p>
                Identify the exact assets and tasks included, together with
                specialist requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* Relevant Services Section */}
      <section className="industrial-services">
        <div className="industrial-container">
          <div className="industrial-services-heading">
            <div className="industrial-services-label">
              <span className="industrial-services-label-line"></span>
              <span>Relevant services</span>
            </div>

            <h2>Build the right service mix.</h2>
          </div>

          <div className="industrial-services-grid">
            {/* Card 01 */}
            <div className="industrial-service-card">
              <div className="industrial-service-card-top">
                <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
                  <path d="M6 25L24 7M19 7h5v5" />
                  <path d="M7 9l4-4 5 5-4 4z" />
                  <path d="M17 17l7 7M20 24h4v-4" />
                  <path d="M5 27h10" />
                </svg>
                <span>01</span>
              </div>

              <h3>Technical &amp; Trades Services</h3>

              <p>
                Electrical, plumbing, HVAC, handyman and emergency service
                requirements coordinated around your facility.
              </p>

              <div className="industrial-service-tags">
                Electrical · Plumbing · HVAC
              </div>

              <Link href="/services" className="industrial-service-link">
                Explore Services
              </Link>
            </div>

            {/* Card 02 */}
            <div className="industrial-service-card">
              <div className="industrial-service-card-top">
                <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
                  <path d="M5 27h22M8 27V13l8-6 8 6v14" />
                  <path d="M12 27v-8h8v8M11 14h2M19 14h2" />
                  <path d="M4 8h7M7.5 4.5v7" />
                </svg>
                <span>02</span>
              </div>

              <h3>Construction Management &amp; Support</h3>

              <p>
                Planning and coordination for defined construction,
                renovation and facility-improvement work packages.
              </p>

              <div className="industrial-service-tags">
                Project &amp; Contractor Coordination · Renovations &amp;
                Reinstatement · Civil &amp; Site Repair Support
              </div>

              <Link href="/services" className="industrial-service-link">
                Explore Services
              </Link>
            </div>

            {/* Card 03 */}
            <div className="industrial-service-card">
              <div className="industrial-service-card-top">
                <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
                  <path d="M16 4v24M7 10l18 12M25 10L7 22" />
                  <path d="M16 4l-3 4M16 4l3 4M16 28l-3-4M16 28l3-4" />
                  <path d="M7 10l5 1M7 10l1 5M25 22l-5-1M25 22l-1-5" />
                  <path d="M25 10l-5 1M25 10l-1 5M7 22l5-1M7 22l1-5" />
                </svg>
                <span>03</span>
              </div>

              <h3>Snow &amp; Ice Management</h3>

              <p>
                Snow clearing, ice control and service records for commercial
                properties, public facilities and operating sites.
              </p>

              <div className="industrial-service-tags">
                Snow Clearing · Ice Control · Winter Site Safety
              </div>

              <Link href="/services" className="industrial-service-link">
                Explore Services
              </Link>
            </div>

            {/* Card 04 */}
            <div className="industrial-service-card">
              <div className="industrial-service-card-top">
                <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
                  <path d="M7 5h18v22H7z" />
                  <path d="M11 10h10M11 15h10M11 20h6" />
                  <path d="M4 9H2v16h18v-2" />
                </svg>
                <span>04</span>
              </div>

              <h3>Specialty Services</h3>

              <p>
                Hydrovac, environmental services, consulting, oil interceptors
                and anti-slip support for specific site requirements.
              </p>

              <div className="industrial-service-tags">
                Hydrovac · Environmental Services · Consulting
              </div>

              <Link href="/services" className="industrial-service-link">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* First Conversation Section */}
<section className="industrial-conversation">
  <div className="industrial-conversation-container">
    <div className="industrial-conversation-label">
      <span className="industrial-conversation-label-line"></span>
      <span>Site requirements</span>
    </div>

    <h2>Define your operating priorities.</h2>

    <p>
      Site layout; vehicle routes; operating hours; required tasks; asset
      details; access restrictions; site contact and documentation
      requirements.
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