
"use client";

import Link from "next/link";
import "./Workforce.css";

export default function Workforce() {
  return (
    <main className="workforce-page">
      {/* Hero Section */}
      <section className="workforce-hero">
        <div className="workforce-container">
          <div className="workforce-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/solutions">Solutions</Link>
          </div>

          <div className="workforce-hero-heading">
            <div className="workforce-eyebrow">
              <span className="workforce-eyebrow-line" />
              <span>Solutions</span>
            </div>

            <div className="workforce-hero-grid">
              <h1>Crew & Contractor Coordination</h1>

              <div className="workforce-hero-side">
                <p>
                  Bring crews, technical trades and specialist contractors together around one coordinated plan.
                </p>

                <Link
                  href="/contact-us"
                  className="workforce-cta"
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
        className="workforce-nav"
        aria-label="Dedicated reporting sections"
      >
        <div className="workforce-nav-container">
          <a href="#reporting-overview">Overview</a>
          <a href="#reporting-solution">Your solution</a>
          <a href="#reporting-deliverables">Deliverables</a>
          <a href="#reporting-connected-services">Connected Services</a>
        </div>
      </nav>

      {/* Overview Section */}
      <section
        id="reporting-overview"
        className="workforce-overview"
      >
        <div className="workforce-overview-container">
          <div className="workforce-overview-content">
            <div className="workforce-overview-eyebrow">
              <span className="workforce-overview-eyebrow-line" />
              <span>Built around your operations</span>
            </div>

            <h2>Connected teams. Clear responsibilities.</h2>

            <p>
              Access coordinates the people and service interfaces that keep work moving. Assignments, site briefings, access windows and handovers connect direct service crews with specialist resources and the facility team, with changes and open decisions carried through to closeout.
            </p>
          </div>
        </div>
      </section>

      {/* Your Solution Section */}
      <section
        id="reporting-solution"
        className="workforce-solution"
      >
        <div className="workforce-solution-container">
          <div className="workforce-solution-heading">
            <div className="workforce-solution-eyebrow">
              <span className="workforce-solution-eyebrow-line" />
              <span>Your solution</span>
            </div>

            <h2>Define the plan. Connect the work.</h2>
          </div>

          <div className="workforce-solution-grid">
            {/* Left Column */}
            <div className="workforce-solution-column">
              <div className="workforce-solution-item">
                <div className="workforce-solution-divider" />
                <h3>Clear assignments</h3>
                <p>
                 Define each task, work area, resource requirement and point of coordination.
                </p>
              </div>

              <div className="workforce-solution-item">
                <div className="workforce-solution-divider" />
                <h3>Site briefings</h3>
                <p>
                 Communicate the planned work, operating constraints and interfaces before attendance.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="workforce-solution-column">
              <div className="workforce-solution-item">
                <div className="workforce-solution-divider" />
                <h3>Trade and contractor interfaces</h3>
                <p>
                  Sequence connected tasks and coordinate shared access, work areas and handovers.
                </p>
              </div>

              <div className="workforce-solution-item">
                <div className="workforce-solution-divider" />
                <h3>Change and closeout</h3>
                <p>
                 Track additional findings, approvals, completion records and responsibility for remaining work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visibility and Follow-through Section */}
      <section
        id="reporting-deliverables"
        className="workforce-deliverables"
      >
        <div className="workforce-deliverables-container">
          <div className="workforce-deliverables-heading">
            <div className="workforce-deliverables-eyebrow">
              <span className="workforce-deliverables-eyebrow-line" />
              <span>Visibility and follow-through</span>
            </div>

            <h2>Know what to expect.</h2>
          </div>

          <div className="workforce-deliverables-box">
            <h3>Included in the agreed solution</h3>

            <ul className="workforce-deliverables-list">
              <li>A coordinated resource and work schedule</li>
              <li>Defined task ownership and handover points</li>
              <li>A record of decisions, changes and open actions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Connected Services Section */}
      <section
        id="reporting-connected-services"
        className="workforce-connected"
      >
        <div className="workforce-connected-container">
          <div className="workforce-connected-heading">
            <div className="workforce-connected-eyebrow">
              <span className="workforce-connected-eyebrow-line" />
              <span>Connected services</span>
            </div>

            <h2>Put the solution to work.</h2>
          </div>

          <div className="workforce-connected-grid">
            {/* Card 1 */}
            <article className="workforce-connected-card">
              <div className="workforce-connected-card-top">
         <svg
  className="workforce-connected-icon"
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

                <span className="workforce-connected-number">
                  01
                </span>
              </div>

              <h3>Integrated Facilities Service</h3>

              <p>
               Bring technical trades, cleaning, grounds, winter operations and projects into a service plan built around your property.
              </p>

              <Link
                href="/services/integrated-facilities-service"
                className="workforce-connected-link"
              >
                Explore services
              </Link>
            </article>

            {/* Card 2 */}
            <article className="workforce-connected-card">
              <div className="workforce-connected-card-top">
               <svg
  className="workforce-connected-icon"
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

                <span className="workforce-connected-number">
                  02
                </span>
              </div>

              <h3>Project & Contractor Coordination</h3>

              <p>
               Bring trades, access arrangements and project milestones into one clear delivery plan.
              </p>

              <Link
                href="/services/construction-management-and-support/project-and-contractor-coordination"
                className="workforce-connected-link"
              >
                Explore services
              </Link>
            </article>

            {/* Card 3 */}
            <article className="workforce-connected-card">
              <div className="workforce-connected-card-top">

<svg
  className="workforce-connected-icon"
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


                <span className="workforce-connected-number">
                  03
                </span>
              </div>

              <h3>Technical & Trades Services</h3>

              <p>
                Electrical, plumbing, HVAC, handyman and emergency service requirements coordinated around your facility.
              </p>

              <Link
                href="/services/technical-and-trades-services"
                className="workforce-connected-link"
              >
                Explore services
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="workforce-final-cta">
        <div className="workforce-final-cta-container">
          <div className="workforce-final-cta-eyebrow">
            <span className="workforce-final-cta-eyebrow-line" />
            <span>Your site. A clear next step.</span>
          </div>

          <div className="workforce-final-cta-main">
            <div className="workforce-final-cta-text">
              <h2>Build the right solution for your site.</h2>

              <p>
                Tell us about your facility, scope and priorities. We’ll help define the next step.
              </p>
            </div>

            <div className="workforce-final-cta-action">
              <Link
                href="/contact-us"
                className="workforce-final-cta-button"
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
