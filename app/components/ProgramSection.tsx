"use client";

import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import "./ProgramSection.css";

const programPoints = [
  "Asset and condition reviews",
  "Recurring service schedules",
  "Prioritized repairs and follow-up",
  "Digital work records and photographs",
];

export default function ProgramSection() {
  return (
    <section className="program-section">
      <div className="program-container">
        <div className="program-grid">

          <div className="program-image">
            <img
              src="/images/access-floor-treatment.jpg"
              alt="Maintenance repair work"
            />
          </div>

          <div className="program-content">
            <div className="program-eyebrow">
              <span className="program-eyebrow-line"></span>
              <span>Proactive by design</span>
            </div>

            <h2>
              Stay ahead of
              <br />
              the next repair.
            </h2>

            <p className="program-description">
              Bring routine inspections, preventive tasks and planned
              improvements into a maintenance programme that fits your
              building.
            </p>

            <div className="program-points">
              {programPoints.map((point) => (
                <div className="program-point" key={point}>
                  <span className="program-check">
                    <FaCheck />
                  </span>

                  <span>{point}</span>
                </div>
              ))}
            </div>

            <Link
              href="/services/emergency-and-planned-maintenance"
              className="program-button"
            >
              Explore maintenance programmes
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}