
"use client";

import Link from "next/link";
import "./Reporting.css";

export default function Reporting() {
  return (
    <main className="dedicated-reporting-page">
      {/* Hero Section */}
      <section className="dedicated-reporting-hero">
        <div className="dedicated-reporting-container">
          <div className="dedicated-reporting-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/solutions">Solutions</Link>
          </div>

          <div className="dedicated-reporting-hero-heading">
            <div className="dedicated-reporting-eyebrow">
              <span className="dedicated-reporting-eyebrow-line" />
              <span>Solutions</span>
            </div>

            <div className="dedicated-reporting-hero-grid">
              <h1>Dedicated Reporting</h1>

              <div className="dedicated-reporting-hero-side">
                <p>
                  Document attendance, completed work, photographs and outstanding items in records your team can use.
                </p>

                <Link
                  href="/contact-us"
                  className="dedicated-reporting-cta"
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
        className="dedicated-reporting-nav"
        aria-label="Dedicated reporting sections"
      >
        <div className="dedicated-reporting-nav-container">
          <a href="#reporting-overview">Overview</a>
          <a href="#reporting-solution">Your solution</a>
          <a href="#reporting-deliverables">Deliverables</a>
          <a href="#reporting-connected-services">Connected Services</a>
        </div>
      </nav>

      {/* Overview Section */}
      <section
        id="reporting-overview"
        className="dedicated-reporting-overview"
      >
        <div className="dedicated-reporting-overview-container">
          <div className="dedicated-reporting-overview-content">
            <div className="dedicated-reporting-overview-eyebrow">
              <span className="dedicated-reporting-overview-eyebrow-line" />
              <span>Built around your operations</span>
            </div>

            <h2>A clear record of the work and the next action.</h2>

            <p>
              Access uses digital field reporting and work-order records to connect the task with its location, asset and outcome. Service reports capture attendance, findings, corrective work and photographs, with deficiencies and follow-up actions recorded for the facility team. Reporting formats and review schedules are aligned with your contract requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Your Solution Section */}
      <section
        id="reporting-solution"
        className="dedicated-reporting-solution"
      >
        <div className="dedicated-reporting-solution-container">
          <div className="dedicated-reporting-solution-heading">
            <div className="dedicated-reporting-solution-eyebrow">
              <span className="dedicated-reporting-solution-eyebrow-line" />
              <span>Your solution</span>
            </div>

            <h2>Define the plan. Connect the work.</h2>
          </div>

          <div className="dedicated-reporting-solution-grid">
            {/* Left Column */}
            <div className="dedicated-reporting-solution-column">
              <div className="dedicated-reporting-solution-item">
                <div className="dedicated-reporting-solution-divider" />
                <h3>Work-order visibility</h3>
                <p>
                  Connect the ticket, site, asset, assigned technician and service activity in one record.
                </p>
              </div>

              <div className="dedicated-reporting-solution-item">
                <div className="dedicated-reporting-solution-divider" />
                <h3>Photographic evidence</h3>
                <p>
                 Include relevant site and work photographs to support findings and the completion record.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="dedicated-reporting-solution-column">
              <div className="dedicated-reporting-solution-item">
                <div className="dedicated-reporting-solution-divider" />
                <h3>Attendance and completion</h3>
                <p>
                  Capture dispatch, arrival and work times alongside the actions taken and completion notes.
                </p>
              </div>

              <div className="dedicated-reporting-solution-item">
                <div className="dedicated-reporting-solution-divider" />
                <h3>Management reporting</h3>
                <p>
                  Organize service, monthly and seasonal reports with deficiencies, recommendations and open actions as required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visibility and Follow-through Section */}
      <section
        id="reporting-deliverables"
        className="dedicated-reporting-deliverables"
      >
        <div className="dedicated-reporting-deliverables-container">
          <div className="dedicated-reporting-deliverables-heading">
            <div className="dedicated-reporting-deliverables-eyebrow">
              <span className="dedicated-reporting-deliverables-eyebrow-line" />
              <span>Visibility and follow-through</span>
            </div>

            <h2>Know what to expect.</h2>
          </div>

          <div className="dedicated-reporting-deliverables-box">
            <h3>Included in the agreed solution</h3>

            <ul className="dedicated-reporting-deliverables-list">
              <li>Service records with work details and photographs</li>
              <li>Deficiency and follow-up lists</li>
              <li>Reports aligned with the agreed review schedule</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Connected Services Section */}
      <section
        id="reporting-connected-services"
        className="dedicated-reporting-connected"
      >
        <div className="dedicated-reporting-connected-container">
          <div className="dedicated-reporting-connected-heading">
            <div className="dedicated-reporting-connected-eyebrow">
              <span className="dedicated-reporting-connected-eyebrow-line" />
              <span>Connected services</span>
            </div>

            <h2>Put the solution to work.</h2>
          </div>

          <div className="dedicated-reporting-connected-grid">
            {/* Card 1 */}
            <article className="dedicated-reporting-connected-card">
              <div className="dedicated-reporting-connected-card-top">
         <svg
  className="dedicated-reporting-connected-icon"
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

                <span className="dedicated-reporting-connected-number">
                  01
                </span>
              </div>

              <h3>Work Orders & Digital Reporting</h3>

              <p>
                Clear visibility from the first request to the completion record.
              </p>

              <Link
                href="/services/integrated-facilities-service/work-orders-and-digital-reporting"
                className="dedicated-reporting-connected-link"
              >
                Explore services
              </Link>
            </article>

            {/* Card 2 */}
            <article className="dedicated-reporting-connected-card">
              <div className="dedicated-reporting-connected-card-top">
               <svg
  className="dedicated-reporting-connected-icon"
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

                <span className="dedicated-reporting-connected-number">
                  02
                </span>
              </div>

              <h3>Facility Inspections & Deficiency Lists</h3>

              <p>
                Structured site reviews that turn observed conditions into actionable work lists.
              </p>

              <Link
                href="/services/emergency-and-planned-maintenance/facility-inspections-and-deficiency-lists"
                className="dedicated-reporting-connected-link"
              >
                Explore services
              </Link>
            </article>

            {/* Card 3 */}
            <article className="dedicated-reporting-connected-card">
              <div className="dedicated-reporting-connected-card-top">

<svg
  className="dedicated-reporting-connected-icon"
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


                <span className="dedicated-reporting-connected-number">
                  03
                </span>
              </div>

              <h3>Facility Operations & Maintenance</h3>

              <p>
                Day-to-day facility requirements brought into a coordinated operating plan.
              </p>

              <Link
                href="/services/integrated-facilities-service/facility-operations-and-maintenance"
                className="dedicated-reporting-connected-link"
              >
                Explore services
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="dedicated-reporting-final-cta">
        <div className="dedicated-reporting-final-cta-container">
          <div className="dedicated-reporting-final-cta-eyebrow">
            <span className="dedicated-reporting-final-cta-eyebrow-line" />
            <span>Your site. A clear next step.</span>
          </div>

          <div className="dedicated-reporting-final-cta-main">
            <div className="dedicated-reporting-final-cta-text">
              <h2>Build the right solution for your site.</h2>

              <p>
                Tell us about your facility, scope and priorities. We’ll help define the next step.
              </p>
            </div>

            <div className="dedicated-reporting-final-cta-action">
              <Link
                href="/contact-us"
                className="dedicated-reporting-final-cta-button"
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
