"use client";

import Link from "next/link";
import {
  FaBuilding,
  FaCogs,
  FaClipboardCheck,
} from "react-icons/fa";
import "./AboutSection.css";

const sectors = [
  "Commercial properties",
  "Transit & infrastructure",
  "Public facilities",
  "Industrial sites",
];

const sitePoints = [
  {
    title: "Care for the whole site",
    text: "Building systems, interiors, grounds and specialist requirements.",
  },
  {
    title: "Plan with confidence",
    text: "Clear scopes, coordinated schedules and defined responsibilities.",
  },
  {
    title: "See the work through",
    text: "Work-order tracking, completion records and practical next steps.",
  },
];

export default function AboutSection() {
  return (
    <section className="about-section">

      {/* =========================
          SECTORS
      ========================= */}

      <div className="about-container">
        <div className="about-sectors">
          {sectors.map((sector, index) => (
            <div className="about-sector" key={sector}>
              <span>{sector}</span>

              {index < sectors.length - 1 && (
                <div className="about-sector-divider"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="about-sectors-divider"></div>


      {/* =========================
          INTRO
      ========================= */}

      <div className="about-container">

        <div className="about-eyebrow">
          <span className="about-eyebrow-line"></span>
          <span>Built around your operations</span>
        </div>

        <div className="about-intro">
          <h2>One partner. More possibilities.</h2>

          <p>
            From a single repair to an integrated service programme, bring the
            work, the people and the follow-through into one clear plan.
          </p>
        </div>


        {/* =========================
            APPROACH CONTENT
        ========================= */}

        <div className="about-approach">

          {/* LEFT FEATURE BOX */}

          <div className="about-feature-box">

            <div className="about-feature-icon">
              <FaBuilding />
            </div>

            <h3>Integrated Facilities Service</h3>

            <p>
              Connect technical, cleaning, seasonal and project requirements
              around your site.
            </p>

            <Link
              href="/services/integrated-facilities-service"
              className="about-feature-link"
            >
              Discover the integrated approach
            </Link>

          </div>


          {/* RIGHT POINTS */}

          <div className="about-site-points">

            {sitePoints.map((point) => (
              <div className="about-site-point" key={point.title}>

                <h3>{point.title}</h3>

                <p>{point.text}</p>

                <div className="about-point-divider"></div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}