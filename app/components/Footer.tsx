"use client";

import Link from "next/link";
import "./Footer.css";

const services = [
  {
    title: "Integrated Facilities Service",
    href: "/services/integrated-facilities-service",
  },
  {
    title: "Technical & Trade Services",
    href: "/services/technical-and-trades-services",
  },
  {
    title: "Cleaning & Janitorial Services",
    href: "/services/cleaning-and-janitorial-services",
  },
  {
    title: "Seasonal Care",
    href: "/services/seasonal-care",
  },
  {
    title: "Construction Management & Support",
    href: "/services/construction-management-and-support",
  },
  {
    title: "Emergency & Planned Maintenance",
    href: "/services/emergency-and-planned-maintenance",
  },
  {
    title: "Specialty Services",
    href: "/services/specialty-services",
  },
];

const exploreLinks = [
  { title: "Industries", href: "/industries" },
  { title: "Our Approach", href: "/our-approach" },
  { title: "About Access", href: "/about-us" },
    { title: "Blogs", href: "/blogs" },
  { title: "Contact Us", href: "/contact-us" },
];

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <img
                src="/images/access-logo.png"
                alt="Access Maintenance"
              />
            </Link>

            <p className="footer-tagline">
              Integrated Facilities Service.
              <br />
              Practical support for the places
              <br />
              your business depends on.
            </p>

            <a href="tel:+18665193436" className="footer-phone">
              866 519 3436
            </a>

            <a
              href="mailto:info@accessmaintenance.ca"
              className="footer-email"
            >
              info@accessmaintenance.ca
            </a>
          </div>

          <div className="footer-links">
            <div className="footer-column footer-services">
              <h3>Our Services</h3>

              <div className="footer-link-list">
                {services.map((service) => (
                  <Link href={service.href} key={service.title}>
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="footer-column footer-explore">
              <h3>Explore Access</h3>

              <div className="footer-link-list">
                {exploreLinks.map((link) => (
                  <Link href={link.href} key={link.title}>
                    {link.title}
                  </Link>
                ))}
              </div>

              <p className="footer-supporting-text">
                Supporting commercial, public and operational properties
                across Ontario.
              </p>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
         <p>
  © 2026 Access Maintenance · All rights reserved. Designed and Developed by{" "}
  <a
    href="https://socialsimba.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="footer-social-simba"
  >
    Social Simba
  </a>
</p>

          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}