
"use client";

import Link from "next/link";
import "./SitePlanning.css";

export default function SitePlanning() {
  return (
    <main className="site-planning-page">
      <section className="site-planning-hero">
        <div className="site-planning-container">
          {/* Breadcrumb */}
          <div className="site-planning-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/solutions">Solutions</Link>
          </div>

          {/* Hero Heading */}
          <div className="site-planning-hero-heading">
            <div className="site-planning-eyebrow">
              <span className="site-planning-eyebrow-line"></span>
              <span>Solutions</span>
            </div>

            <div className="site-planning-hero-grid">
              <h1>Site Planning &amp; Mobilization</h1>

              <div className="site-planning-hero-side">
                <p>
                  Turn site requirements into a clear scope, coordinated
                  schedule and practical delivery plan.
                </p>

                <Link
                  href="/contact-us"
                  className="site-planning-cta"
                >
                  Discuss your requirements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
{/* Section Navigation */}
<nav className="site-planning-nav" aria-label="Site planning sections">
  <div className="site-planning-nav-container">
    <a href="#overview">Overview</a>
    <a href="#your-solution">Your solution</a>
    <a href="#deliverables">Deliverables</a>
    <a href="#connected-services">Connected Services</a>
  </div>
</nav>

{/* Overview Section */}
<section id="overview" className="site-planning-overview">
  <div className="site-planning-overview-container">
    <div className="site-planning-overview-content">
      <div className="site-planning-overview-eyebrow">
        <span className="site-planning-overview-eyebrow-line"></span>
        <span>Built around your operations</span>
      </div>

      <h2>The right plan before the work begins.</h2>

      <p>
        Access brings the site information, operating constraints and
        service requirements into one plan. Work locations, access
        windows, resources and approval points are defined before
        mobilization, so your team knows what is scheduled and how it
        connects with day-to-day operations.
      </p>
    </div>
  </div>
</section>

{/* Your Solution Section */}
<section
  id="your-solution"
  className="site-planning-solution"
>
  <div className="site-planning-solution-container">
    {/* Section Heading */}
    <div className="site-planning-solution-heading">
      <div className="site-planning-solution-eyebrow">
        <span className="site-planning-solution-eyebrow-line"></span>
        <span>Your solution</span>
      </div>

      <h2>Define the plan. Connect the work.</h2>
    </div>

    {/* Solution Details */}
    <div className="site-planning-solution-grid">
      {/* Left Column */}
      <div className="site-planning-solution-column">
        <div className="site-planning-solution-item">
          <div className="site-planning-solution-divider"></div>

          <h3>Site review</h3>

          <p>
            Capture assets, work areas, operating hours, public
            interfaces and site priorities.
          </p>
        </div>

        <div className="site-planning-solution-item">
          <div className="site-planning-solution-divider"></div>

          <h3>Coordinated schedules</h3>

          <p>
            Organize rolling work schedules and operating windows
            with the facility team and other contractors.
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="site-planning-solution-column">
        <div className="site-planning-solution-item">
          <div className="site-planning-solution-divider"></div>

          <h3>Scope and responsibilities</h3>

          <p>
            Set out the tasks, service boundaries, approvals and
            responsibilities for each work package.
          </p>
        </div>

        <div className="site-planning-solution-item">
          <div className="site-planning-solution-divider"></div>

          <h3>Mobilization</h3>

          <p>
            Plan crew access, equipment, materials, staging and the
            handover into service.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Visibility and Follow-through Section */}
      <section className="site-planning-deliverables" id="deliverables">
        <div className="site-planning-deliverables-container">
          <div className="site-planning-deliverables-heading">
            <div className="site-planning-deliverables-eyebrow">
              <span className="site-planning-deliverables-eyebrow-line"></span>
              <span>Visibility and follow-through</span>
            </div>

            <h2>Know what to expect.</h2>
          </div>

          <div className="site-planning-deliverables-box">
            <h3>Included in the agreed solution</h3>

            <ul className="site-planning-deliverables-list">
              <li>A defined scope and site work plan</li>
              <li>A coordinated service schedule</li>
              <li>Access, approval and communication arrangements</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Connected Services Section */}
      <section
        className="site-planning-connected"
        id="connected-services"
      >
        <div className="site-planning-connected-container">
          <div className="site-planning-connected-heading">
            <div className="site-planning-connected-eyebrow">
              <span className="site-planning-connected-eyebrow-line"></span>
              <span>Connected services</span>
            </div>

            <h2>Put the solution to work.</h2>
          </div>

          <div className="site-planning-connected-grid">
            {/* Card 1 */}
            <article className="site-planning-connected-card">
              <div className="site-planning-connected-card-top">
                <svg
                  className="site-planning-connected-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M8 4v4h8V4" />
                  <path d="M8 13h3M8 16h8M15 13h1" />
                </svg>

                <span className="site-planning-connected-number">01</span>
              </div>

              <h3>Asset &amp; Maintenance Planning</h3>

              <p>
                Organize asset information and maintenance priorities to
                support better repair and replacement decisions.
              </p>

              <Link
                href="/services/integrated-facilities-service/asset-and-maintenance-planning"
                className="site-planning-connected-link"
              >
                Explore services
              </Link>
            </article>

            {/* Card 2 */}
            <article className="site-planning-connected-card">
              <div className="site-planning-connected-card-top">
                <svg
                  className="site-planning-connected-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 21h18" />
                  <path d="M5 21V8l7-5 7 5v13" />
                  <path d="M9 21v-6h6v6" />
                  <path d="M9 10h.01M15 10h.01" />
                </svg>

                <span className="site-planning-connected-number">02</span>
              </div>

              <h3>Project &amp; Contractor Coordination</h3>

              <p>
                Bring trades, access arrangements and project milestones
                into one clear delivery plan.
              </p>

              <Link
                href="/services/construction-management-and-support/project-and-contractor-coordination"
                className="site-planning-connected-link"
              >
                Explore services
              </Link>
            </article>

            {/* Card 3 */}
            <article className="site-planning-connected-card">
              <div className="site-planning-connected-card-top">
                <svg
                  className="site-planning-connected-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
                  <path d="m16 11 2 2 4-4" />
                </svg>

                <span className="site-planning-connected-number">03</span>
              </div>

              <h3>Consulting</h3>

              <p>
                Facility assessments, scope development and practical
                planning support for maintenance and improvement
                requirements.
              </p>

              <Link
                href="/services/specialty-services/consulting"
                className="site-planning-connected-link"
              >
                Explore services
              </Link>
            </article>
          </div>
        </div>
      </section>
      
      {/* Final Call to Action */}
      <section className="site-planning-final-cta">
        <div className="site-planning-final-cta-container">
          <div className="site-planning-final-cta-eyebrow">
            <span className="site-planning-final-cta-eyebrow-line"></span>
            <span>Your site. A clear next step.</span>
          </div>

          <div className="site-planning-final-cta-main">
            <div className="site-planning-final-cta-text">
              <h2>Build the right solution for your site.</h2>

              <p>
                Tell us about your facility, scope and priorities. We’ll help
                define the next step.
              </p>
            </div>

            <div className="site-planning-final-cta-action">
              <Link
                href="/contact-us"
                className="site-planning-final-cta-button"
              >
                Request a proposal
              </Link>
            </div>
          </div>
        </div>
      </section>






    </main>
  );
}
