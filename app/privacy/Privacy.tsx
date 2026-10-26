
"use client";

import Link from "next/link";
import "./Privacy.css";

export default function Privacy() {
  return (
    <main className="privacy-page">
      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="privacy-container">
          <div className="privacy-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Privacy</span>
          </div>

          <div className="privacy-hero-heading">
            <div className="privacy-eyebrow">
              <span className="privacy-eyebrow-line"></span>
              <span>Website information</span>
            </div>

            <div className="privacy-hero-grid">
              <h1>Privacy</h1>

              <div className="privacy-hero-side">
                <p>
                  Your privacy matters to us. Learn how Access Maintenance
                  handles the information you share when using our website.
                </p>

                <Link href="/contact-us" className="privacy-cta">
                  Discuss your requirements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section className="privacy-content-section">
        <div className="privacy-container">
          <div className="privacy-content">
            <h2>Privacy</h2>

            <p>
              Access Maintenance respects your privacy and understands the
              importance of protecting the information you share with us.
              This page explains how information may be collected and used
              when you visit our website or contact our team.
            </p>

            <h3>Information you provide</h3>

            <p>
              When you submit an enquiry or contact us through our website,
              you may provide information such as your name, email address,
              phone number, company details and the contents of your message.
              We use this information to respond to your enquiry, understand
              your requirements and communicate with you about our services.
            </p>

            <h3>How we use information</h3>

            <p>
              Information you provide may be used to respond to requests,
              follow up on service enquiries, communicate relevant
              information and manage our business communications. We aim to
              collect and use information only for appropriate purposes
              connected with our services and website.
            </p>

            <h3>Sharing of information</h3>

            <p>
              We do not intend to sell your personal information. Information
              may be shared with service providers where reasonably required
              to operate our website or handle enquiries, or where disclosure
              is required or permitted by applicable law. Any such handling
              should be limited to the relevant purpose.
            </p>

            <h3>Website security and retention</h3>

            <p>
              We take reasonable steps to protect information submitted
              through our website. However, no method of transmission or
              electronic storage can be guaranteed to be completely secure.
              Information is retained for as long as reasonably necessary
              for the purpose for which it was collected, subject to
              applicable legal requirements.
            </p>

            <h3>Cookies and external websites</h3>

            <p>
              Our website or its service providers may use cookies or similar
              technologies to support website functionality and understand
              website usage. Our website may also contain links to external
              websites. Their privacy practices are governed by their own
              policies, which we encourage you to review.
            </p>

            <h3>Your questions and this policy</h3>

            <p>
              If you have questions about how your information is handled,
              or would like to ask about information you have provided,
              please get in touch with our team. This policy may be updated
              from time to time to reflect changes in our website or
              information-handling practices.
            </p>

            <p className="privacy-contact-text">
              For questions about information you provide to Access
              Maintenance, contact{" "}
              <a href="mailto:info@accessmaintenance.ca">
                info@accessmaintenance.ca
              </a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}