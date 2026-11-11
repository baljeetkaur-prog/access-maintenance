"use client";

import Link from "next/link";
import "./Solutions.css";
import {
  FaClipboardList,
  FaFileAlt,
  FaHeadset,
  FaTools,
  FaUsersCog,
  FaShieldAlt,
} from "react-icons/fa";

export default function Solutions() {
  return (
    <main className="solutions-page">
      <section className="solutions-hero">
        <div className="solutions-container">
          {/* Breadcrumb */}
          <div className="solutions-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Solutions</span>
          </div>

          {/* Hero Heading */}
          <div className="solutions-hero-heading">
            <div className="solutions-eyebrow">
              <span className="solutions-eyebrow-line"></span>
              <span>Solutions</span>
            </div>

            <div className="solutions-hero-grid">
              <h1>A clear plan for every operating priority.</h1>

              <div className="solutions-hero-side">
                <p>
                  Site planning, dedicated reporting, 24/7 response and
                  coordinated delivery. Access connects the services and
                  information your facility needs to keep moving.
                </p>

                <Link
                  href="/contact-us"
                  className="solutions-cta"
                >
                  Discuss your requirements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* Solutions Cards Section */}
      <section className="solutions-cards-section">
        <div className="solutions-container">
          {/* Section Heading */}
          <div className="solutions-cards-heading">
            <div className="solutions-eyebrow">
              <span className="solutions-eyebrow-line"></span>
              <span>Solutions for your site</span>
            </div>

            <div className="solutions-cards-heading-grid">
              <h2>Planned. Coordinated. Documented.</h2>

              <p>
                Combine the right solutions around your assets, operating
                hours and priorities, with clear responsibilities from
                mobilization to closeout.
              </p>
            </div>
          </div>

          {/* Solutions Grid */}
          <div className="solutions-cards-grid">
            {/* Card 1 */}
            <div className="solutions-card">
              <div className="solutions-card-top">
                <FaClipboardList className="solutions-card-icon" />
                <span className="solutions-card-number">01</span>
              </div>

              <h3>Site Planning &amp; Mobilization</h3>

              <p>
                Turn site requirements into a clear scope, coordinated
                schedule and practical delivery plan.
              </p>

              <Link href="/solutions/site-planning" className="solutions-card-link">
                Explore solution
              </Link>
            </div>

            {/* Card 2 */}
            <div className="solutions-card">
              <div className="solutions-card-top">
                <FaFileAlt className="solutions-card-icon" />
                <span className="solutions-card-number">02</span>
              </div>

              <h3>Dedicated Reporting</h3>

              <p>
                Document attendance, completed work, photographs and
                outstanding items in records your team can use.
              </p>

              <Link href="/solutions/dedicated-reporting" className="solutions-card-link">
                Explore solution
              </Link>
            </div>

            {/* Card 3 */}
            <div className="solutions-card">
              <div className="solutions-card-top">
                <FaHeadset className="solutions-card-icon" />
                <span className="solutions-card-number">03</span>
              </div>

              <h3>24/7 Response &amp; Escalation</h3>

              <p>
                Round-the-clock response coordination, clear escalation
                routes and practical follow-through for operational sites.
              </p>

              <Link href="/solutions/24-7-response" className="solutions-card-link">
                Explore solution
              </Link>
            </div>

            {/* Card 4 */}
            <div className="solutions-card">
              <div className="solutions-card-top">
                <FaTools className="solutions-card-icon" />
                <span className="solutions-card-number">04</span>
              </div>

              <h3>Preventive Maintenance</h3>

              <p>
                Connect inspections, recurring tasks and planned repairs
                around the condition of your assets.
              </p>

              <Link href="/solutions/preventive-maintenance" className="solutions-card-link">
                Explore solution
              </Link>
            </div>

            {/* Card 5 */}
            <div className="solutions-card">
              <div className="solutions-card-top">
                <FaUsersCog className="solutions-card-icon" />
                <span className="solutions-card-number">05</span>
              </div>

              <h3>Crew &amp; Contractor Coordination</h3>

              <p>
                Bring crews, technical trades and specialist contractors
                together around one coordinated plan.
              </p>

              <Link href="/solutions/workforce-coordination" className="solutions-card-link">
                Explore solution
              </Link>
            </div>

            {/* Card 6 */}
            <div className="solutions-card">
              <div className="solutions-card-top">
                <FaShieldAlt className="solutions-card-icon" />
                <span className="solutions-card-number">06</span>
              </div>

              <h3>Safety &amp; Operating Continuity</h3>

              <p>
                Coordinate work areas, access and operating windows around
                live facilities and public-facing environments.
              </p>

              <Link href="/solutions/operating-continuity" className="solutions-card-link">
                Explore solution
              </Link>
            </div>
          </div>
        </div>
      </section>
      
{/* From Planning to Follow-through Section */}
<section className="solutions-approach-section">
  <div className="solutions-approach-container">
    <div className="solutions-approach-heading">
      <div className="solutions-approach-eyebrow">
        <span className="solutions-approach-eyebrow-line"></span>
        <span>From planning to follow-through</span>
      </div>

      <h2>One connected way of working.</h2>
    </div>

    <div className="solutions-approach-steps">
      <div className="solutions-approach-step">
        <div className="solutions-approach-step-line"></div>
        <span className="solutions-approach-step-number">01</span>
        <h3>Understand the site</h3>
        <p>
          Start with your assets, operating hours, access requirements
          and priorities.
        </p>
      </div>

      <div className="solutions-approach-step">
        <div className="solutions-approach-step-line"></div>
        <span className="solutions-approach-step-number">02</span>
        <h3>Build the plan</h3>
        <p>
          Define the scope, schedule, people and approval process.
        </p>
      </div>

      <div className="solutions-approach-step">
        <div className="solutions-approach-step-line"></div>
        <span className="solutions-approach-step-number">03</span>
        <h3>Coordinate the work</h3>
        <p>
          Bring the right service resources together and keep your
          team informed.
        </p>
      </div>

      <div className="solutions-approach-step">
        <div className="solutions-approach-step-line"></div>
        <span className="solutions-approach-step-number">04</span>
        <h3>Close the loop</h3>
        <p>
          Document completion, photographs, exceptions and next actions.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Solutions CTA Section */}
<section className="solutions-cta-section">
  <div className="solutions-cta-container">
    <div className="solutions-cta-content">
      <div className="solutions-cta-eyebrow">
        <span className="solutions-cta-eyebrow-line"></span>
        <span>Your site. A clear next step.</span>
      </div>

      <div className="solutions-cta-main">
        <div className="solutions-cta-text">
          <h2>Let’s build your site plan.</h2>

          <p>
            Tell us about your facility, scope and priorities. We’ll help
            define the next step.
          </p>
        </div>

        <div className="solutions-cta-action">
          <Link
            href="/contact-us"
            className="solutions-cta-button"
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