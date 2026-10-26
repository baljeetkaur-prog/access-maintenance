
"use client";

import Link from "next/link";
import "./Maintenance.css";

export default function Maintenance() {
  return (
    <main className="maintenance-page">
      {/* Hero Section */}
      <section className="maintenance-hero">
        <div className="maintenance-container">
          <div className="maintenance-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/solutions">Solutions</Link>
          </div>

          <div className="maintenance-hero-heading">
            <div className="maintenance-eyebrow">
              <span className="maintenance-eyebrow-line" />
              <span>Solutions</span>
            </div>

            <div className="maintenance-hero-grid">
              <h1>Preventive Maintenance</h1>

              <div className="maintenance-hero-side">
                <p>
                  Connect inspections, recurring tasks and planned repairs around the condition of your assets.
                </p>

                <Link
                  href="/contact-us"
                  className="maintenance-cta"
                >
                  Discuss your requirements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <nav
        className="maintenance-nav"
        aria-label="Dedicated reporting sections"
      >
        <div className="maintenance-nav-container">
          <a href="#reporting-overview">Overview</a>
          <a href="#reporting-solution">Your solution</a>
          <a href="#reporting-deliverables">Deliverables</a>
          <a href="#reporting-connected-services">Connected Services</a>
        </div>
      </nav>

      {/* Overview Section */}
      <section
        id="reporting-overview"
        className="maintenance-overview"
      >
        <div className="maintenance-overview-container">
          <div className="maintenance-overview-content">
            <div className="maintenance-overview-eyebrow">
              <span className="maintenance-overview-eyebrow-line" />
              <span>Built around your operations</span>
            </div>

            <h2>Stay ahead of the next repair.</h2>

            <p>
              Access organizes routine maintenance around the assets, operating requirements and priorities of your site. Inspection findings feed into recurring service schedules and a prioritized repair list, bringing planned work and corrective actions into a program your team can track.
            </p>
          </div>
        </div>
      </section>

      {/* Your Solution Section */}
      <section
        id="reporting-solution"
        className="maintenance-solution"
      >
        <div className="maintenance-solution-container">
          <div className="maintenance-solution-heading">
            <div className="maintenance-solution-eyebrow">
              <span className="maintenance-solution-eyebrow-line" />
              <span>Your solution</span>
            </div>

            <h2>Define the plan. Connect the work.</h2>
          </div>

          <div className="maintenance-solution-grid">
            {/* Left Column */}
            <div className="maintenance-solution-column">
              <div className="maintenance-solution-item">
                <div className="maintenance-solution-divider" />
                <h3>Asset information</h3>
                <p>
                  Bring together equipment details, service history and site records to guide the maintenance plan.
                </p>
              </div>

              <div className="maintenance-solution-item">
                <div className="maintenance-solution-divider" />
                <h3>Prioritized repairs</h3>
                <p>
                Organize deficiencies by condition, operating impact and the decisions needed to proceed.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="maintenance-solution-column">
              <div className="maintenance-solution-item">
                <div className="maintenance-solution-divider" />
                <h3>Recurring service</h3>
                <p>
                  Schedule inspections and preventive tasks around operating windows and asset requirements.
                </p>
              </div>

              <div className="maintenance-solution-item">
                <div className="maintenance-solution-divider" />
                <h3>Program review</h3>
                <p>
                  Use completed work, repeat issues and new findings to keep the maintenance plan current.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visibility and Follow-through Section */}
      <section
        id="reporting-deliverables"
        className="maintenance-deliverables"
      >
        <div className="maintenance-deliverables-container">
          <div className="maintenance-deliverables-heading">
            <div className="maintenance-deliverables-eyebrow">
              <span className="maintenance-deliverables-eyebrow-line" />
              <span>Visibility and follow-through</span>
            </div>

            <h2>Know what to expect.</h2>
          </div>

          <div className="maintenance-deliverables-box">
            <h3>Included in the agreed solution</h3>

            <ul className="maintenance-deliverables-list">
              <li>An asset-led maintenance schedule</li>
              <li>A prioritized repair and deficiency list</li>
              <li>Completion records and program review actions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Connected Services Section */}
      <section
        id="reporting-connected-services"
        className="maintenance-connected"
      >
        <div className="maintenance-connected-container">
          <div className="maintenance-connected-heading">
            <div className="maintenance-connected-eyebrow">
              <span className="maintenance-connected-eyebrow-line" />
              <span>Connected services</span>
            </div>

            <h2>Put the solution to work.</h2>
          </div>

          <div className="maintenance-connected-grid">
            {/* Card 1 */}
            <article className="maintenance-connected-card">
              <div className="maintenance-connected-card-top">
         <svg
  className="maintenance-connected-icon"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.5"
  strokeLinecap="round"
  strokeLinejoin="round"
  aria-hidden="true"
>
  <rect x="5" y="4" width="14" height="17" rx="2" />
  <path d="M9 4.5V3h6v1.5" />
  <path d="m8 12 2 2 5-5" />
  <path d="M8 17h8" />
</svg>

                <span className="maintenance-connected-number">
                  01
                </span>
              </div>

              <h3>Planned & Preventive Maintenance</h3>

              <p>
                Turn recurring tasks and known building needs into an organized maintenance program.
              </p>

              <Link
                href="/services/emergency-and-planned-maintenance/planned-and-preventive-maintenance"
                className="maintenance-connected-link"
              >
                Explore services
              </Link>
            </article>

            {/* Card 2 */}
            <article className="maintenance-connected-card">
              <div className="maintenance-connected-card-top">
               <svg
  className="maintenance-connected-icon"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.5"
  strokeLinecap="round"
  strokeLinejoin="round"
  aria-hidden="true"
>
  <rect x="4" y="3" width="16" height="18" rx="2" />
  <path d="m7 8 1.5 1.5L11 7" />
  <path d="M13 8h4" />
  <path d="m7 14 1.5 1.5L11 13" />
  <path d="M13 14h4" />
</svg>

                <span className="maintenance-connected-number">
                  02
                </span>
              </div>

              <h3>Asset & Maintenance Planning</h3>

              <p>
              Organize asset information and maintenance priorities to support better repair and replacement decisions.
              </p>

              <Link
                href="/services/integrated-facilities-service/asset-and-maintenance-planning"
                className="maintenance-connected-link"
              >
                Explore services
              </Link>
            </article>

            {/* Card 3 */}
            <article className="maintenance-connected-card">
              <div className="maintenance-connected-card-top">

<svg
  className="maintenance-connected-icon"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.5"
  strokeLinecap="round"
  strokeLinejoin="round"
  aria-hidden="true"
>
  <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
  <path d="M19.4 15a7.8 7.8 0 0 0 .1-1l1.6-1.2-1.6-2.8-1.9.6a7.5 7.5 0 0 0-1.7-1L15.6 7h-3.2l-.3 2.6a7.5 7.5 0 0 0-1.7 1l-1.9-.6-1.6 2.8L8.5 14a7.8 7.8 0 0 0 .1 1l-1.6 1.2 1.6 2.8 1.9-.6a7.5 7.5 0 0 0 1.7 1l.3 2.6h3.2l.3-2.6a7.5 7.5 0 0 0 1.7-1l1.9.6 1.6-2.8L19.4 15Z" />
</svg>


                <span className="maintenance-connected-number">
                  03
                </span>
              </div>

              <h3>Facility Inspections & Deficiency Lists</h3>

              <p>
               Structured site reviews that turn observed conditions into actionable work lists.
              </p>

              <Link
                href="/services/emergency-and-planned-maintenance/facility-inspections-and-deficiency-lists"
                className="maintenance-connected-link"
              >
                Explore services
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="maintenance-final-cta">
        <div className="maintenance-final-cta-container">
          <div className="maintenance-final-cta-eyebrow">
            <span className="maintenance-final-cta-eyebrow-line" />
            <span>Your site. A clear next step.</span>
          </div>

          <div className="maintenance-final-cta-main">
            <div className="maintenance-final-cta-text">
              <h2>Build the right solution for your site.</h2>

              <p>
                Tell us about your facility, scope and priorities. We’ll help define the next step.
              </p>
            </div>

            <div className="maintenance-final-cta-action">
              <Link
                href="/contact-us"
                className="maintenance-final-cta-button"
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
