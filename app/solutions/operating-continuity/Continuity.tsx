
"use client";

import Link from "next/link";
import "./Continuity.css";

export default function Continuity() {
  return (
    <main className="continuity-page">
      {/* Hero Section */}
      <section className="continuity-hero">
        <div className="continuity-container">
          <div className="continuity-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/solutions">Solutions</Link>
          </div>

          <div className="continuity-hero-heading">
            <div className="continuity-eyebrow">
              <span className="continuity-eyebrow-line" />
              <span>Solutions</span>
            </div>

            <div className="continuity-hero-grid">
              <h1>Safety & Operating Continuity</h1>

              <div className="continuity-hero-side">
                <p>
                  Coordinate work areas, access and operating windows around live facilities and public-facing environments.
                </p>

                <Link
                  href="/contact-us"
                  className="continuity-cta"
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
        className="continuity-nav"
        aria-label="Dedicated reporting sections"
      >
        <div className="continuity-nav-container">
          <a href="#reporting-overview">Overview</a>
          <a href="#reporting-solution">Your solution</a>
          <a href="#reporting-deliverables">Deliverables</a>
          <a href="#reporting-connected-services">Connected Services</a>
        </div>
      </nav>

      {/* Overview Section */}
      <section
        id="reporting-overview"
        className="continuity-overview"
      >
        <div className="continuity-overview-container">
          <div className="continuity-overview-content">
            <div className="continuity-overview-eyebrow">
              <span className="continuity-overview-eyebrow-line" />
              <span>Built around your operations</span>
            </div>

            <h2>Plan the work around the people using the site.</h2>

            <p>
              The service plan needs to reflect how the site operates. Access coordinates task planning, work-area boundaries, access arrangements and communication with the facility team. Public interfaces, non-revenue working windows and the return of work areas to service are considered throughout the assignment.
            </p>
          </div>
        </div>
      </section>

      {/* Your Solution Section */}
      <section
        id="reporting-solution"
        className="continuity-solution"
      >
        <div className="continuity-solution-container">
          <div className="continuity-solution-heading">
            <div className="continuity-solution-eyebrow">
              <span className="continuity-solution-eyebrow-line" />
              <span>Your solution</span>
            </div>

            <h2>Define the plan. Connect the work.</h2>
          </div>

          <div className="continuity-solution-grid">
            {/* Left Column */}
            <div className="continuity-solution-column">
              <div className="continuity-solution-item">
                <div className="continuity-solution-divider" />
                <h3>Task and site planning</h3>
                <p>
                  Address the task, site requirements and responsibilities before work starts.
                </p>
              </div>

              <div className="continuity-solution-item">
                <div className="continuity-solution-divider" />
                <h3>Operating windows</h3>
                <p>
                 Schedule disruptive tasks around facility requirements, including non-revenue hours where applicable.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="continuity-solution-column">
              <div className="continuity-solution-item">
                <div className="continuity-solution-divider" />
                <h3>Work-area coordination</h3>
                <p>
                  Plan staging, work boundaries and interfaces with public or occupied areas.
                </p>
              </div>

              <div className="continuity-solution-item">
                <div className="continuity-solution-divider" />
                <h3>Return to service</h3>
                <p>
                  Coordinate the completion review, work-area handover and any remaining restrictions or actions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visibility and Follow-through Section */}
      <section
        id="reporting-deliverables"
        className="continuity-deliverables"
      >
        <div className="continuity-deliverables-container">
          <div className="continuity-deliverables-heading">
            <div className="continuity-deliverables-eyebrow">
              <span className="continuity-deliverables-eyebrow-line" />
              <span>Visibility and follow-through</span>
            </div>

            <h2>Know what to expect.</h2>
          </div>

          <div className="continuity-deliverables-box">
            <h3>Included in the agreed solution</h3>

            <ul className="continuity-deliverables-list">
              <li>Site-specific work and access arrangements</li>
              <li>A schedule coordinated with operations</li>
              <li>A clear completion and return-to-service handover</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Connected Services Section */}
      <section
        id="reporting-connected-services"
        className="continuity-connected"
      >
        <div className="continuity-connected-container">
          <div className="continuity-connected-heading">
            <div className="continuity-connected-eyebrow">
              <span className="continuity-connected-eyebrow-line" />
              <span>Connected services</span>
            </div>

            <h2>Put the solution to work.</h2>
          </div>

          <div className="continuity-connected-grid">
            {/* Card 1 */}
            <article className="continuity-connected-card">
              <div className="continuity-connected-card-top">
         <svg
  className="continuity-connected-icon"
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

                <span className="continuity-connected-number">
                  01
                </span>
              </div>

              <h3>Facility Operations & Maintenance</h3>

              <p>
                Day-to-day facility requirements brought into a coordinated operating plan.
              </p>

              <Link
                href="/services/integrated-facilities-service/facility-operations-and-maintenance"
                className="continuity-connected-link"
              >
                Explore services
              </Link>
            </article>

            {/* Card 2 */}
            <article className="continuity-connected-card">
              <div className="continuity-connected-card-top">
               <svg
  className="continuity-connected-icon"
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

                <span className="continuity-connected-number">
                  02
                </span>
              </div>

              <h3>Civil & Site Repair Support</h3>

              <p>
                Practical site improvements and repair scopes coordinated around existing infrastructure.
              </p>

              <Link
                href="/services/construction-management-and-support/civil-and-site-repair-support"
                className="continuity-connected-link"
              >
                Explore services
              </Link>
            </article>

            {/* Card 3 */}
            <article className="continuity-connected-card">
              <div className="continuity-connected-card-top">

<svg
  className="continuity-connected-icon"
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


                <span className="continuity-connected-number">
                  03
                </span>
              </div>

              <h3>Project & Contractor Coordination</h3>

              <p>
               Bring trades, access arrangements and project milestones into one clear delivery plan.
              </p>

              <Link
                href="/services/construction-management-and-support/project-and-contractor-coordination"
                className="continuity-connected-link"
              >
                Explore services
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="continuity-final-cta">
        <div className="continuity-final-cta-container">
          <div className="continuity-final-cta-eyebrow">
            <span className="continuity-final-cta-eyebrow-line" />
            <span>Your site. A clear next step.</span>
          </div>

          <div className="continuity-final-cta-main">
            <div className="continuity-final-cta-text">
              <h2>Build the right solution for your site.</h2>

              <p>
                Tell us about your facility, scope and priorities. We’ll help define the next step.
              </p>
            </div>

            <div className="continuity-final-cta-action">
              <Link
                href="/contact-us"
                className="continuity-final-cta-button"
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
