"use client";

import { FaPhoneAlt } from "react-icons/fa";
import "./CtaSection.css";

export default function CtaSection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-eyebrow">
            <span className="cta-eyebrow-line"></span>
            <span>When the unexpected happens</span>
          </div>

          <h2>Need urgent facility support?</h2>

          <p>
            Call to discuss the issue and confirm attendance. Existing clients
            can use their agreed escalation contact.
          </p>
        </div>

        <div className="cta-action">
          <a href="tel:+18665193436" className="cta-button">
            <FaPhoneAlt />
            <span>Call 866 519 3436</span>
          </a>
        </div>
      </div>
    </section>
  );
}