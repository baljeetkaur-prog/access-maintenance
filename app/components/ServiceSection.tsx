"use client";

import Link from "next/link";
import {
  FaTools,
  FaBroom,
  FaLeaf,
  FaHardHat,
  FaWrench,
  FaWater,
} from "react-icons/fa";
import "./ServiceSection.css";

const serviceFamilies = [
  {
    number: "01",
    image: "/images/access-repair-detail.jpg",
    icon: FaTools,
    title: "Technical & Trades Services",
    description:
      "Electrical, plumbing, HVAC, handyman and emergency service requirements coordinated around your facility.",
    keywords: "Electrical · Plumbing · HVAC",
    href: "/services/technical-and-trades-services",
  },
  {
    number: "02",
    image: "/images/access-cleaning.jpg",
    icon: FaBroom,
    title: "Cleaning & Janitorial Services",
    description:
      "Recurring janitorial, response cleaning and defined specialist cleaning scopes for working environments.",
    keywords:
      "Commercial Janitorial Programmes · Floor & Carpet Care · Window & Glass Cleaning",
    href: "/services/cleaning-and-janitorial-services",
  },
  {
    number: "03",
    image: "/images/access-tractor-transport.jpg",
    icon: FaLeaf,
    title: "Seasonal Care",
    description:
      "Year-round exterior care, from winter response to healthy grounds and seasonal site readiness.",
    keywords:
      "Snow & Ice Management · Grounds & Landscape Maintenance · Green Roof Maintenance",
    href: "/services/seasonal-care",
  },
  {
    number: "04",
    image: "/images/access-renovation.jpg",
    icon: FaHardHat,
    title: "Construction Management & Support",
    description:
      "Planning and coordination for defined construction, renovation and facility-improvement work packages.",
    keywords:
      "Project & Contractor Coordination · Renovations & Reinstatement · Civil & Site Repair Support",
    href: "/services/construction-management-and-support",
  },
  {
    number: "05",
    image: "/images/access-slip-testing.jpg",
    icon: FaWrench,
    title: "Emergency & Planned Maintenance",
    description:
      "Responsive support when issues arise. Proactive programmes that help you stay ahead of the next one.",
    keywords:
      "Emergency Services · Planned & Preventive Maintenance · Reactive Repairs & Corrective Maintenance",
    href: "/services/emergency-and-planned-maintenance",
  },
  {
    number: "06",
    image: "/images/access-hydrovac-crew.jpg",
    icon: FaWater,
    title: "Specialty Services",
    description:
      "Hydrovac, environmental services, consulting, oil interceptors and anti-slip support for specific site requirements.",
    keywords:
      "Hydrovac · Environmental Services · Consulting",
    href: "/services/specialty-services",
  },
];

export default function ServiceSection() {
  return (
    <section className="service-section">
      <div className="service-container">

<div className="service-heading">
  <div className="service-heading-left">
    <div className="service-eyebrow">
      <span className="service-eyebrow-line"></span>
      <span>Our service families</span>
    </div>

    <h2>Depth across your site.</h2>
  </div>

  <div className="service-heading-right">
    <p>
      Explore the services that keep your property safe, presentable
      and ready for the people who rely on it.
    </p>
  </div>
</div>

        <div className="service-grid">
          {serviceFamilies.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.number}>
                <div className="service-card-image">
                  <img src={service.image} alt={service.title} />
                </div>

                <div className="service-card-content">

                  <div className="service-card-top">
                    <div className="service-card-icon">
                      <Icon />
                    </div>

                    <span className="service-card-number">
                      {service.number}
                    </span>
                  </div>

                  <h3>{service.title}</h3>

                  <p className="service-card-description">
                    {service.description}
                  </p>

                  <p className="service-card-keywords">
                    {service.keywords}
                  </p>

                  <Link
                    href={service.href}
                    className="service-card-link"
                  >
                    Explore Services
                  </Link>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}