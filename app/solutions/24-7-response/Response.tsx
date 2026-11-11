
"use client";

import Link from "next/link";
import "./Response.css";

export default function Response() {
  return (
    <main className="response-page">
      {/* Hero Section */}
      <section className="response-hero">
        <div className="response-container">
          <div className="response-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/solutions">Solutions</Link>
          </div>

          <div className="response-hero-heading">
            <div className="response-eyebrow">
              <span className="response-eyebrow-line" />
              <span>Solutions</span>
            </div>

            <div className="response-hero-grid">
              <h1>24/7 Response & Escalation</h1>

              <div className="response-hero-side">
                <p>
                  Round-the-clock response coordination, clear escalation routes and practical follow-through for operational sites.
                </p>

                <Link
                  href="/contact-us"
                  className="response-cta"
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
        className="response-nav"
        aria-label="Dedicated reporting sections"
      >
        <div className="response-nav-container">
          <a href="#reporting-overview">Overview</a>
          <a href="#reporting-solution">Your solution</a>
          <a href="#reporting-deliverables">Deliverables</a>
          <a href="#reporting-connected-services">Connected Services</a>
        </div>
      </nav>

      {/* Overview Section */}
      <section
        id="reporting-overview"
        className="response-overview"
      >
        <div className="response-overview-container">
          <div className="response-overview-content">
            <div className="response-overview-eyebrow">
              <span className="response-overview-eyebrow-line" />
              <span>Built around your operations</span>
            </div>

            <h2>A defined response when operations need support.</h2>

            <p>
              Urgent work needs a response plan that is ready before an incident occurs. Access aligns escalation contacts, priority levels, site access and service resources with the requirements of your facility. Your service agreement defines the response arrangements; attendance, updates and follow-on repairs are coordinated through that plan.
            </p>
          </div>
        </div>
      </section>

      {/* Your Solution Section */}
      <section
        id="reporting-solution"
        className="response-solution"
      >
        <div className="response-solution-container">
          <div className="response-solution-heading">
            <div className="response-solution-eyebrow">
              <span className="response-solution-eyebrow-line" />
              <span>Your solution</span>
            </div>

            <h2>Define the plan. Connect the work.</h2>
          </div>

          <div className="response-solution-grid">
            {/* Left Column */}
            <div className="response-solution-column">
              <div className="response-solution-item">
                <div className="response-solution-divider" />
                <h3>Escalation routes</h3>
                <p>
                  Define who to contact, what information is needed and how an urgent requirement is escalated.
                </p>
              </div>

              <div className="response-solution-item">
                <div className="response-solution-divider" />
                <h3>After-hours access</h3>
                <p>
                Plan site contacts, entry arrangements and authorization for work outside regular operating hours.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="response-solution-column">
              <div className="response-solution-item">
                <div className="response-solution-divider" />
                <h3>Priority and coordination</h3>
                <p>
                  Assess the operating impact and coordinate the appropriate crew, trade or specialist support.
                </p>
              </div>

              <div className="response-solution-item">
                <div className="response-solution-divider" />
                <h3>Response records</h3>
                <p>
                  Document attendance, actions, outstanding repairs and the handover back to the facility team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visibility and Follow-through Section */}
      <section
        id="reporting-deliverables"
        className="response-deliverables"
      >
        <div className="response-deliverables-container">
          <div className="response-deliverables-heading">
            <div className="response-deliverables-eyebrow">
              <span className="response-deliverables-eyebrow-line" />
              <span>Visibility and follow-through</span>
            </div>

            <h2>Know what to expect.</h2>
          </div>

          <div className="response-deliverables-box">
            <h3>Included in the agreed solution</h3>

            <ul className="response-deliverables-list">
              <li>A site-specific response and escalation plan</li>
              <li>Defined priority, access and communication arrangements</li>
              <li>Attendance records and follow-up actions</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Urgent Facility Support */}
<section className="response-urgent-support">
  <div className="response-urgent-support-container">
    <div className="response-urgent-support-text">
      <h3>Need urgent facility support?</h3>
      <p>
        Call 866 519 3436. Existing clients can use their assigned escalation contact.
      </p>
    </div>

    <a
      href="tel:+18665193436"
      className="response-urgent-support-button"
      aria-label="Call Access at +1 866 519 3436"
    >
      Call Access
    </a>
  </div>
</section>

      {/* Connected Services Section */}
      <section
        id="reporting-connected-services"
        className="response-connected"
      >
        <div className="response-connected-container">
          <div className="response-connected-heading">
            <div className="response-connected-eyebrow">
              <span className="response-connected-eyebrow-line" />
              <span>Connected services</span>
            </div>

            <h2>Put the solution to work.</h2>
          </div>

          <div className="response-connected-grid">
            {/* Card 1 */}
            <article className="response-connected-card">
              <div className="response-connected-card-top">
         <svg
  className="response-connected-icon"
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

                <span className="response-connected-number">
                  01
                </span>
              </div>

              <h3>Emergency Services</h3>

              <p>
                24/7 response coordination for urgent facility requirements, with site-specific escalation and follow-up.
              </p>

              <Link
                href="/services/technical-and-trades-services/emergency-services"
                className="response-connected-link"
              >
                Explore services
              </Link>
            </article>

            {/* Card 2 */}
            <article className="response-connected-card">
              <div className="response-connected-card-top">
               <svg
  className="response-connected-icon"
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

                <span className="response-connected-number">
                  02
                </span>
              </div>

              <h3>Reactive Repairs & Corrective Maintenance</h3>

              <p>
               A practical route for everyday defects, breakdowns and unplanned repair requirements.
              </p>

              <Link
                href="/services/emergency-and-planned-maintenance/reactive-repairs-and-corrective-maintenance"
                className="response-connected-link"
              >
                Explore services
              </Link>
            </article>

            {/* Card 3 */}
            <article className="response-connected-card">
              <div className="response-connected-card-top">

<svg
  className="response-connected-icon"
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


                <span className="response-connected-number">
                  03
                </span>
              </div>

              <h3>Snow & Ice Management</h3>

              <p>
                Snow clearing, ice control and service records for commercial properties, public facilities and operating sites.
              </p>

              <Link
                href="/services/seasonal-care/snow-and-ice-management"
                className="response-connected-link"
              >
                Explore services
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="response-final-cta">
        <div className="response-final-cta-container">
          <div className="response-final-cta-eyebrow">
            <span className="response-final-cta-eyebrow-line" />
            <span>Your site. A clear next step.</span>
          </div>

          <div className="response-final-cta-main">
            <div className="response-final-cta-text">
              <h2>Build the right solution for your site.</h2>

              <p>
                Tell us about your facility, scope and priorities. We’ll help define the next step.
              </p>
            </div>

            <div className="response-final-cta-action">
              <Link
                href="/contact-us"
                className="response-final-cta-button"
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
