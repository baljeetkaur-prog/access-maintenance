"use client";

import Link from "next/link";
import "./About.css";
import FooterCta from "../components/FooterCta";
import {
  FaFileAlt,
  FaClipboardCheck,
  FaShieldAlt,
  FaHandshake,
} from "react-icons/fa";

export default function About() {
  return (
    <main className="about-page">
<section className="about-hero">
  <div className="about-container">
    <div className="about-breadcrumb">
      <Link href="/">Home</Link>
      <span>/</span>
      <span>About Access</span>
    </div>

    <div className="about-hero-content">
      <div className="about-hero-left">
        <div className="about-eyebrow">
          <span className="about-eyebrow-line"></span>
          <span>About Access</span>
        </div>

        <h1>
          Practical capability.
          <br />
          Clear accountability.
        </h1>

        <p className="about-hero-description">
          Coordinated maintenance for the buildings, grounds and
          infrastructure that people rely on every day.
        </p>

        <div className="about-hero-action">
          <Link href="/contact-us" className="about-talk-button">
            <span>Talk to our team</span>
            <span className="about-talk-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        </div>

        <div className="about-hero-divider"></div>

        <p className="about-hero-tagline">
          Facilities. People. Performance.
        </p>
      </div>

      <div className="about-hero-right">
        <img
          src="/images/access-station-crew.jpg"
          alt="Access Maintenance crew working on site"
        />
      </div>
    </div>
  </div>
</section>
<section className="about-work-section">
  <div className="about-work-container">
    <div className="about-work-left">
      <div className="about-work-eyebrow">
        <span className="about-work-eyebrow-line"></span>
        <span>Our company</span>
      </div>

      <h2>
        A partner for
        <br />
        the full picture.
      </h2>
    </div>

    <div className="about-work-right">
      <p>
        Access Maintenance is an Ontario-based maintenance company
        operating under AGHS Corp. We support commercial properties,
        transit environments, public facilities and industrial sites
        with coordinated services that address the needs of each location.
      </p>

      <p>
        Our work brings together facilities maintenance, technical trades,
        cleaning, grounds care, snow and ice management, construction
        support and specialty services. That breadth gives clients a
        practical way to manage routine upkeep, repairs, seasonal demands
        and urgent work through one point of coordination.
      </p>

      <p>
        Public access, operating hours, weather, equipment and the
        condition of existing assets all influence how work should be
        delivered. We plan around those realities, coordinate the
        resources required and keep clients informed as the work progresses.
      </p>

      <Link href="/services" className="about-work-link">
        <span>Explore Services</span>
        <span className="about-work-link-arrow" aria-hidden="true">
          ↗
        </span>
      </Link>
    </div>
  </div>
</section>

<section className="about-stats-section">
  <div className="about-stats-container">
    <div className="about-stats-card">
      <h3>4.5M</h3>
      <h4>Sq ft managed and maintained</h4>
      <p>Across the facilities and sites we support.</p>
    </div>

    <div className="about-stats-card">
      <h3>35+</h3>
      <h4>Pieces of equipment</h4>
      <p>Fleet resources supporting site and seasonal operations.</p>
    </div>

    <div className="about-stats-card">
      <h3>7</h3>
      <h4>Connected service groups</h4>
      <p>Maintenance, repairs and specialty work around your site.</p>
    </div>

    <div className="about-stats-card">
      <h3>Digital</h3>
      <h4>Work records &amp; reporting</h4>
      <p>FastField and Quickbase support tracking and visibility.</p>
    </div>
  </div>
</section>
<section className="about-direction-section">
  <div className="about-direction-container">
    <div className="about-direction-image">
      <img
        src="/images/access-about-site-care.jpg"
        alt="Access Maintenance supporting site care and facility operations"
      />
    </div>

    <div className="about-direction-content">
      <div className="about-direction-eyebrow">
        <span className="about-direction-eyebrow-line"></span>
        <span>Our direction</span>
      </div>

      <h2>Keep essential<br/> places working well.</h2>

      <div className="about-direction-block">
        <h3>Our purpose</h3>
        <p>
          Help clients maintain safe, functional and well-presented
          environments through the everyday work that protects their
          facilities and supports their operations.
        </p>
      </div>

      <div className="about-direction-block">
        <h3>Our vision</h3>
        <p>
          Be the maintenance partner clients can build around. We aim to
          earn long-term trust through dependable delivery, useful
          reporting and a clear understanding of each client’s priorities.
        </p>
      </div>

      <Link href="/services" className="about-direction-link">
        <span>See how we connect the work</span>
        <span className="about-direction-link-arrow" aria-hidden="true">
          ↗
        </span>
      </Link>
    </div>
  </div>
</section>
<section className="about-values-section">
  <div className="about-values-container">
    <div className="about-values-heading">
      <div className="about-values-eyebrow">
        <span className="about-values-eyebrow-line"></span>
        <span>Our values</span>
      </div>

      <h2>The standards behind our work.</h2>

      <p>
        What we expect of ourselves, in every working relationship
        and every scope.
      </p>
    </div>

    <div className="about-values-grid">
      <article className="about-value-card">
        <div className="about-value-icon">
          <FaFileAlt aria-hidden="true" />
        </div>

        <h3>Integrity</h3>
        <p>
          Be clear about the scope, communicate honestly and record the
          work accurately. Clients should know what has been completed
          and what still needs attention.
        </p>
      </article>

      <article className="about-value-card">
        <div className="about-value-icon">
          <FaClipboardCheck aria-hidden="true" />
        </div>

        <h3>Ownership</h3>
        <p>
          Follow an issue through from assignment to completion. Raise
          concerns early, coordinate the next step and keep responsibility
          clear throughout the work.
        </p>
      </article>

      <article className="about-value-card">
        <div className="about-value-icon">
          <FaShieldAlt aria-hidden="true" />
        </div>

        <h3>Safety</h3>
        <p>
          Consider the people, equipment and surroundings before starting.
          Plan the task, identify hazards and coordinate the controls and
          access requirements appropriate to the site.
        </p>
      </article>

      <article className="about-value-card">
        <div className="about-value-icon">
          <FaHandshake aria-hidden="true" />
        </div>

        <h3>Partnership</h3>
        <p>
          Understand the client’s operation and work with the people who
          know it best. Listen, share useful information and shape
          maintenance around the site’s priorities.
        </p>
      </article>
    </div>
  </div>
</section>
<section className="about-culture-section">
  <div className="about-culture-container">
    <div className="about-culture-content">
      <div className="about-culture-eyebrow">
        <span className="about-culture-eyebrow-line"></span>
        <span>Our culture</span>
      </div>

      <h2>Good work starts with how we work.</h2>

      <p className="about-culture-intro">
        Preparation, communication and follow-through connect our people
        in the field with the clients and communities they support.
      </p>

      <div className="about-culture-divider"></div>

      <div className="about-culture-list">
        <article className="about-culture-item">
          <span className="about-culture-check" aria-hidden="true">
            ✓
          </span>
          <div>
            <h3>Prepare for the site</h3>
            <p>
              Review the scope, access conditions and operating constraints
              so crews arrive with a clear understanding of the work.
            </p>
          </div>
        </article>

        <div className="about-culture-item-divider"></div>

        <article className="about-culture-item">
          <span className="about-culture-check" aria-hidden="true">
            ✓
          </span>
          <div>
            <h3>Keep coordination clear</h3>
            <p>
              Connect field teams, supervisors and client contacts around
              the task, with responsibilities and next steps understood.
            </p>
          </div>
        </article>

        <div className="about-culture-item-divider"></div>

        <article className="about-culture-item">
          <span className="about-culture-check" aria-hidden="true">
            ✓
          </span>
          <div>
            <h3>Make work visible</h3>
            <p>
              Use photographs, service records and digital reporting to
              show completed work and identify outstanding needs.
            </p>
          </div>
        </article>

        <div className="about-culture-item-divider"></div>

        <article className="about-culture-item">
          <span className="about-culture-check" aria-hidden="true">
            ✓
          </span>
          <div>
            <h3>Learn from the work</h3>
            <p>
              Use site observations and client feedback to improve planning,
              address recurring issues and strengthen the next service visit.
            </p>
          </div>
        </article>
      </div>
    </div>

    <div className="about-culture-image">
      <img
        src="/images/access-about-team-at-work.jpg"
        alt="Access Maintenance team working together on site"
      />
    </div>
  </div>
</section>
<section className="about-people-section">
  <div className="about-people-container">
    <div className="about-people-content">
      <div className="about-people-eyebrow">
        <span className="about-people-eyebrow-line"></span>
        <span>People make the difference</span>
      </div>

      <h2>Bring pride to practical work.</h2>

      <p>
        Interested in working with Access? Tell us about your experience
        and the work you do.
      </p>
    </div>

    <div className="about-people-action">
      <a href="/contact-us" className="about-people-button">
        <span>Introduce yourself</span>
        <span className="about-people-button-arrow" aria-hidden="true">
          ↗
        </span>
      </a>
    </div>
  </div>
</section>
<section className="about-cta-section">
  <div className="about-cta-container">
    <div className="about-cta-content">
      <div className="about-cta-eyebrow">
        <span className="about-cta-eyebrow-line"></span>
        <span>Your site. A clear next step.</span>
      </div>

      <div className="about-cta-main">
        <div className="about-cta-text">
          <h2>Let’s talk about your site.</h2>

          <p>
            Ongoing maintenance, a defined repair project or support for
            seasonal operations. Tell us about your location, priorities
            and requirements.
          </p>
        </div>

        <div className="about-cta-action">
          <Link href="/contact-us" className="about-cta-button">
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