"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaBuilding,
  FaTools,
  FaHardHat,
} from "react-icons/fa";
import "./Approach.css";
import FooterCta from "../components/FooterCta";
const approachSteps = [
  {
    number: "01",
    title: "Understand the site",
    description:
      "Start with your assets, operating hours, access requirements and priorities.",
  },
  {
    number: "02",
    title: "Build the plan",
    description:
      "Define the scope, schedule, people and approval process.",
  },
  {
    number: "03",
    title: "Coordinate the work",
    description:
      "Bring the right service resources together and keep your team informed.",
  },
  {
    number: "04",
    title: "Close the loop",
    description:
      "Document completion, photographs, exceptions and next actions.",
  },
];

export default function Approach() {
return ( <main className="approach-page"> <section className="approach-hero"> <div className="approach-container">
{/* Breadcrumb */} <div className="approach-breadcrumb"> <Link href="/">Home</Link> <span>/</span> <span>Our Approach</span> </div>

      {/* Hero Heading */}
      <div className="approach-hero-heading">
        <div className="approach-eyebrow">
          <span className="approach-eyebrow-line"></span>
          <span>Our approach</span>
        </div>

        <div className="approach-hero-grid">
          <h1>Clear from the first conversation.</h1>

          <div className="approach-hero-side">
            <p>
              A practical process for everyday maintenance, specialist
              scopes and coordinated projects.
            </p>

            <Link href="/contact-us" className="approach-cta">
              Discuss your requirements
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Process Section */}
  <section className="approach-section">
    <div className="approach-container">
      <div className="approach-heading">
        <div className="approach-eyebrow">
          <span className="approach-eyebrow-line"></span>
          <span>A consistent delivery process</span>
        </div>

        <h2>Make every handover clear.</h2>
      </div>

      <div className="approach-steps">
        {approachSteps.map((step) => (
          <div className="approach-step" key={step.number}>
            <div className="approach-step-line"></div>

            <span className="approach-step-number">
              {step.number}
            </span>

            <h3>{step.title}</h3>

            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  {/* Visibility and Accountability Section */}
  <section className="approach-visibility-section">
    <div className="approach-container">
      <div className="approach-visibility-heading">
        <div className="approach-eyebrow">
          <span className="approach-eyebrow-line"></span>
          <span>Visibility and accountability</span>
        </div>

        <h2>Know what happened. Know what comes next.</h2>
      </div>

      <div className="approach-visibility-grid">
        <div className="approach-visibility-item">
          <h3>A clear assignment</h3>
          <p>
            Define the location, task, scope boundaries and authorization
            before work begins.
          </p>
        </div>

        <div className="approach-visibility-item">
          <h3>Site-specific planning</h3>
          <p>
            Account for access, working hours, public interfaces and
            operating constraints.
          </p>
        </div>

        <div className="approach-visibility-item">
          <h3>Work records</h3>
          <p>
            Use digital work orders, photographs and completion notes to
            document attendance.
          </p>
        </div>

        <div className="approach-visibility-item">
          <h3>Change control</h3>
          <p>
            Raise additional findings for a decision before expanding the
            scope.
          </p>
        </div>

        <div className="approach-visibility-item">
          <h3>Safety coordination</h3>
          <p>
            Confirm task planning, site requirements and responsibilities
            for the work.
          </p>
        </div>

        <div className="approach-visibility-item">
          <h3>Practical follow-up</h3>
          <p>
            Separate completed work from open items, recommendations and
            future repairs.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Ways to Work Together Section */}
  <section className="approach-services-section">
    <div className="approach-container">
      <div className="approach-services-heading">
        <div className="approach-eyebrow">
          <span className="approach-eyebrow-line"></span>
          <span>Ways to work together</span>
        </div>

        <h2>One task or an ongoing programme.</h2>
      </div>

      <div className="approach-services-grid">
        {/* Card 1 */}
        <div className="approach-service-card">
          <div className="approach-service-top">
            <div className="approach-service-icon">
              <FaBuilding />
            </div>
            <span className="approach-service-number">01</span>
          </div>

          <h3>Integrated Facilities Service</h3>

          <p className="approach-service-description">
            Bring technical trades, cleaning, grounds, winter operations
            and projects into a service plan built around your property.
          </p>

          <p className="approach-service-list">
            Facility Operations &amp; Maintenance · Asset &amp; Maintenance
            Planning · Work Orders &amp; Digital Reporting
          </p>

          <Link
            href="/services/integrated-facilities-service"
            className="approach-service-link"
          >
            Explore Services
          </Link>
        </div>

        {/* Card 2 */}
        <div className="approach-service-card">
          <div className="approach-service-top">
            <div className="approach-service-icon">
              <FaTools />
            </div>
            <span className="approach-service-number">02</span>
          </div>

          <h3>Emergency &amp; Planned Maintenance</h3>

          <p className="approach-service-description">
            Responsive support when issues arise. Proactive programmes
            that help you stay ahead of the next one.
          </p>

          <p className="approach-service-list">
            Emergency Services · Planned &amp; Preventive Maintenance ·
            Reactive Repairs &amp; Corrective Maintenance
          </p>

          <Link
            href="/services/emergency-and-planned-maintenance"
            className="approach-service-link"
          >
            Explore Services
          </Link>
        </div>

        {/* Card 3 */}
        <div className="approach-service-card">
          <div className="approach-service-top">
            <div className="approach-service-icon">
              <FaHardHat />
            </div>
            <span className="approach-service-number">03</span>
          </div>

          <h3>Construction Management &amp; Support</h3>

          <p className="approach-service-description">
            Planning and coordination for defined construction,
            renovation and facility-improvement work packages.
          </p>

          <p className="approach-service-list">
            Project &amp; Contractor Coordination · Renovations &amp;
            Reinstatement · Civil &amp; Site Repair Support
          </p>

          <Link
            href="/services/construction-management-and-support"
            className="approach-service-link"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  </section>
   <FooterCta />



</main>

);
}
