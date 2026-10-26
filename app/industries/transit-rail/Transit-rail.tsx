"use client";

import Link from "next/link";
import "./Transit-rail.css";

export default function TransitRail() {
  return (
    <main className="transit-rail-page">
      {/* Hero Section */}
      <section className="transit-rail-hero">
        <div className="transit-rail-container">
          <div className="transit-rail-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/industries">Industries</Link>
          </div>

          <div className="transit-rail-hero-heading">
            <div className="transit-rail-eyebrow">
              <span className="transit-rail-eyebrow-line"></span>
              <span>Industries</span>
            </div>

            <div className="transit-rail-hero-grid">
              <h1>Transit &amp; Rail</h1>

              <div className="transit-rail-hero-side">
                <p>
                  Facility and site services planned around stations,
                  operating windows and public interfaces.
                </p>

                <Link
                  href="/contact-us"
                  className="transit-rail-cta"
                >
                  Discuss your requirements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
        <section className="transit-rail-environment">
        <div className="transit-rail-container">
          
<div className="transit-rail-environment-intro">
  <div className="transit-rail-environment-heading">
    <div className="transit-rail-environment-label">
      <span className="transit-rail-environment-label-line"></span>
      <span>Your operating environment</span>
    </div>

    <h2>A plan shaped by the site.</h2>
  </div>

  <p>
    Transit maintenance needs to fit the operating environment.
    Define access requirements, service interfaces and the work
    window before selecting the delivery plan. Access coordinates
    agreed building, seasonal and site scopes with clear
    supervision and completion records.
  </p>
</div>


          <div className="transit-rail-environment-grid">
            <div className="transit-rail-environment-item">
              <h3>Operating windows</h3>
              <p>
                Plan the work around service, site movement and the agreed
                access arrangements.
              </p>
            </div>

            <div className="transit-rail-environment-item">
              <h3>Public interfaces</h3>
              <p>
                Identify passenger routes, work zones and the communication
                needed for changing conditions.
              </p>
            </div>

            <div className="transit-rail-environment-item transit-rail-documentation">
              <h3>Documentation</h3>
              <p>
                Define site records, completion photographs and exception
                reporting for the assignment.
              </p>
            </div>
          </div>
        </div>
      </section>
<section className="transit-rail-services">
  <div className="transit-rail-container">
    <div className="transit-rail-services-heading">
      <div className="transit-rail-services-label">
        <span className="transit-rail-services-label-line"></span>
        <span>Relevant services</span>
      </div>

      <h2>Build the right service mix.</h2>
    </div>

    <div className="transit-rail-services-grid">
      {/* Card 01 */}
      <div className="transit-rail-service-card">
        <div className="transit-rail-service-card-top">
          <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M12 7V4h8v3M9 7h14v21H9z" />
            <path d="M13 12h6M13 17h6M13 22h3" />
            <path d="M5 12v12M3 15l2-3 2 3M3 21l2 3 2-3" />
          </svg>
          <span>01</span>
        </div>

        <h3>Technical &amp; Trades Services</h3>
        <p>
          Electrical, plumbing, HVAC, handyman and emergency service
          requirements coordinated around your facility.
        </p>
        <div className="transit-rail-service-tags">
          Electrical · Plumbing · HVAC
        </div>

        <Link href="/services" className="transit-rail-service-link">
          Explore Services
        </Link>
      </div>

      {/* Card 02 */}
      <div className="transit-rail-service-card">
        <div className="transit-rail-service-card-top">
          <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M16 4v24M5.6 10l20.8 12M5.6 22l20.8-12" />
            <path d="M16 4l-3 4M16 4l3 4M16 28l-3-4M16 28l3-4" />
            <path d="M5.6 10l5 .2M5.6 10l1.5 4.5M26.4 22l-5-.2M26.4 22l-1.5-4.5" />
            <path d="M5.6 22l1.5-4.5M5.6 22l5-.2M26.4 10l-1.5 4.5M26.4 10l-5 .2" />
          </svg>
          <span>02</span>
        </div>

        <h3>Snow &amp; Ice Management</h3>
        <p>
          Snow clearing, ice control and service records for commercial
          properties, public facilities and operating sites.
        </p>
        <div className="transit-rail-service-tags">
          Snow Clearing · Ice Control · Winter Response
        </div>

        <Link href="/services" className="transit-rail-service-link">
          Explore Services
        </Link>
      </div>

      {/* Card 03 */}
      <div className="transit-rail-service-card">
        <div className="transit-rail-service-card-top">
          <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M16 28V13M16 19c-7 0-10-4-10-10 7 0 10 4 10 10Z" />
            <path d="M16 15c0-6 4-10 10-10 0 7-4 10-10 10Z" />
            <path d="M6 28h20M10 24h12" />
          </svg>
          <span>03</span>
        </div>

        <h3>Grounds &amp; Landscape Maintenance</h3>
        <p>
          Grounds maintenance, seasonal programmes and defined landscape
          scopes for commercial and operational properties.
        </p>
        <div className="transit-rail-service-tags">
          Grounds Maintenance · Landscape Care · Seasonal Programmes
        </div>

        <Link href="/services" className="transit-rail-service-link">
          Explore Services
        </Link>
      </div>

      {/* Card 04 */}
      <div className="transit-rail-service-card">
        <div className="transit-rail-service-card-top">
          <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M5 12h22M7 12l2-7h14l2 7M8 12v15h16V12" />
            <path d="M12 17h8M12 21h8M12 25h5" />
            <path d="M4 5l2 2M28 5l-2 2" />
          </svg>
          <span>04</span>
        </div>

        <h3>Cleaning &amp; Janitorial Services</h3>
        <p>
          Recurring janitorial, response cleaning and defined specialist
          cleaning scopes for working environments.
        </p>
        <div className="transit-rail-service-tags">
          Commercial Janitorial Programmes · Floor &amp; Carpet Care ·
          Window &amp; Glass Cleaning
        </div>

        <Link href="/services" className="transit-rail-service-link">
          Explore Services
        </Link>
      </div>
    </div>
  </div>
</section>
{/* First Conversation Section */}
<section className="transit-rail-conversation">
  <div className="transit-rail-conversation-container">
    <div className="transit-rail-conversation-label">
      <span className="transit-rail-conversation-label-line"></span>
      <span>Site requirements</span>
    </div>

    <h2>Define your operating priorities.</h2>

    <p>
      Site locations; service hours; access and induction requirements;
      passenger interfaces; planned tasks; contract reporting requirements.
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