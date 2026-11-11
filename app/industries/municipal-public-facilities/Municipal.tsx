"use client";

import Link from "next/link";
import "./Municipal.css";

export default function Municipal() {
  return (
    <main className="municipal-page">
      {/* Hero Section */}
      <section className="municipal-hero">
        <div className="municipal-container">
          {/* Breadcrumb */}
          <div className="municipal-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/industries">Industries</Link>
          </div>

          {/* Hero Content */}
          <div className="municipal-hero-heading">
            <div className="municipal-eyebrow">
              <span className="municipal-eyebrow-line"></span>
              <span>Industries</span>
            </div>

            <div className="municipal-hero-grid">
              <h1>Municipal &amp; Public Facilities</h1>

              <div className="municipal-hero-side">
                <p>
                  Maintenance, cleaning and seasonal services for
                  properties that serve the public.
                </p>

                <Link
                  href="/contact-us"
                  className="municipal-cta"
                >
                  Discuss your requirements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Operating Environment Section */}
<section className="municipal-environment">
  <div className="municipal-container">
    <div className="municipal-environment-intro">
      <div className="municipal-environment-heading">
        <div className="municipal-environment-label">
          <span className="municipal-environment-label-line"></span>
          <span>Your operating environment</span>
        </div>

        <h2>A plan shaped by the site.</h2>
      </div>

      <p>
        Public facilities need scopes that are clear to operate and
        straightforward to review. Build the plan around property use,
        access priorities and the required service records. Align tasks,
        supervision and completion criteria with the agreed contract
        and the needs of the facility team.
      </p>
    </div>

    <div className="municipal-environment-grid">
      <div className="municipal-environment-item">
        <h3>Public use</h3>
        <p>
          Review how the property is used and which areas need to
          remain accessible.
        </p>
      </div>

      <div className="municipal-environment-item">
        <h3>Defined procurement</h3>
        <p>
          Connect the delivery plan to the specified scope,
          documentation and approval process.
        </p>
      </div>

      <div className="municipal-environment-item">
        <h3>Seasonal priorities</h3>
        <p>
          Coordinate grounds, winter and building-care requirements
          throughout the year.
        </p>
      </div>
    </div>
  </div>
</section>
{/* Relevant Services Section */}
<section className="municipal-services">
  <div className="municipal-container">
    <div className="municipal-services-heading">
      <div className="municipal-services-label">
        <span className="municipal-services-label-line"></span>
        <span>Relevant services</span>
      </div>

      <h2>Build the right service mix.</h2>
    </div>

    <div className="municipal-services-grid">
      {/* Card 01 */}
      <div className="municipal-service-card">
        <div className="municipal-service-card-top">
          <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M16 4v24M5.6 10l20.8 12M5.6 22l20.8-12" />
            <path d="M16 4l-3 4M16 4l3 4M16 28l-3-4M16 28l3-4" />
            <path d="M5.6 10l5 .2M5.6 10l1.5 4.5M26.4 22l-5-.2M26.4 22l-1.5-4.5" />
            <path d="M5.6 22l1.5-4.5M5.6 22l5-.2M26.4 10l-1.5 4.5M26.4 10l-5 .2" />
          </svg>
          <span>01</span>
        </div>

        <h3>Snow &amp; Ice Management</h3>

        <p>
          Snow clearing, ice control and service records for commercial
          properties, public facilities and operating sites.
        </p>
        <div className="municipal-service-tags">
  Snow Clearing · Ice Control · Winter Maintenance
</div>

        <Link href="/services" className="municipal-service-link">
          Explore Services
        </Link>
      </div>

      {/* Card 02 */}
      <div className="municipal-service-card">
        <div className="municipal-service-card-top">
          <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M16 28V13M16 19c-7 0-10-4-10-10 7 0 10 4 10 10Z" />
            <path d="M16 15c0-6 4-10 10-10 0 7-4 10-10 10Z" />
            <path d="M6 28h20M10 24h12" />
          </svg>
          <span>02</span>
        </div>

        <h3>Grounds &amp; Landscape Maintenance</h3>

        <p>
          Grounds maintenance, seasonal programmes and defined landscape
          scopes for commercial and operational properties.
        </p>
        <div className="municipal-service-tags">
  Lawn Care · Landscape Upkeep · Seasonal Grounds Maintenance
</div>

        <Link href="/services" className="municipal-service-link">
          Explore Services
        </Link>
      </div>

      {/* Card 03 */}
      <div className="municipal-service-card">
        <div className="municipal-service-card-top">
          <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M5 12h22M7 12l2-7h14l2 7M8 12v15h16V12" />
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

        <div className="municipal-service-tags">
          Commercial Janitorial Programmes · Floor &amp; Carpet Care ·
          Window &amp; Glass Cleaning
        </div>

        <Link href="/services" className="municipal-service-link">
          Explore Services
        </Link>
      </div>

      {/* Card 04 */}
      <div className="municipal-service-card">
        <div className="municipal-service-card-top">
          <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M4 28h24M7 28V13l9-7 9 7v15" />
            <path d="M12 28v-8h8v8M11 14h2M19 14h2M11 18h2M19 18h2" />
            <path d="M3 13l13-10 13 10" />
          </svg>
          <span>04</span>
        </div>

        <h3>Construction Management &amp; Support</h3>

        <p>
          Planning and coordination for defined construction, renovation
          and facility-improvement work packages.
        </p>

        <div className="municipal-service-tags">
          Project &amp; Contractor Coordination · Renovations &amp;
          Reinstatement · Civil &amp; Site Repair Support
        </div>

        <Link href="/services" className="municipal-service-link">
          Explore Services
        </Link>
      </div>
    </div>
  </div>
</section>

{/* First Conversation Section */}
<section className="municipal-conversation">
  <div className="municipal-conversation-container">
    <div className="municipal-conversation-label">
      <span className="municipal-conversation-label-line"></span>
      <span>Site requirements</span>
    </div>

    <h2>Define your operating priorities.</h2>

    <p>
      Facility locations; maintained areas; operating and public-use hours;
      scope documents; seasonal requirements; reporting and procurement
      contacts.
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