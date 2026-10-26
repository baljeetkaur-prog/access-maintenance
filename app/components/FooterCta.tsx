"use client";

import Link from "next/link";
import "./FooterCta.css";

export default function FooterCta() {
  return (
    <section className="footer-cta-section">
      <div className="footer-cta-container">
        <div className="footer-cta-content">
          <div className="footer-cta-eyebrow">
            <span className="footer-cta-eyebrow-line"></span>
            <span>Your site. A clear next step.</span>
          </div>

          <div className="footer-cta-main">
            <div className="footer-cta-text">
              <h2>Let’s plan the work ahead.</h2>

              <p>
                Tell us about your facility, scope and priorities. We’ll help
                define the next step.
              </p>
            </div>

            <div className="footer-cta-action">
              <Link
                href="/contact-us"
                className="footer-cta-button"
              >
                Request a proposal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}