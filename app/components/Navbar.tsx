"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import "./Navbar.css";


const staticServices = [
  {
    title: "Integrated Facilities Service",
    href: "/services/integrated-facilities-service",
    subServices: [
        {
            title: "Facility Operations & Maintenance", 
            href: "facilities"
        }, 
        {
            title: "Asset & Maintenance Planning", 
            href: "asset"
        }, 
        {
            title: "Work Orders & Digital Reporting", 
            href: "work"
        }
    ],
  },
  {
    title: "Technical & Trade Services",
    href: "/services/technical-trades",
    subServices: [
         {
            title: "Electrical", 
            href: "electrical"
        }, 
              {
            title: "Plumbing", 
            href: "plumbing"
        }, 
              {
            title: "HVAC", 
            href: "hvac"
        }, 
              {
            title: "Handyman", 
            href: "handyman"
        }, 
                {
            title: "Building Fabric & Interior Repairs", 
            href: "fabric"
        }, 
                   {
            title: "Emergency Services", 
            href: "emergency"
        }, 
        

    ],
  },
  {
    title: "Cleaning & Janitorial Services",
    href: "/services/cleaning-janitorial",
    subServices: [
        {
            title: "Commercial Janitorial Programmes", 
            href: "janitorial"   
        }, 
        {
            title: "Floor & Carpet Care", 
            href: "floor"
        }, 
        {
            title: "Window & Glass Cleaning", 
            href: "window"
        }, 
        {
            title: "Pressure Washing & Exterior Cleaning", 
            href: "pressure"
        }, 
        {
            title: "Graffiti Removal", 
            href: "graffiti"
        }, 
        {
            title: "Post-Construction & Turnover Cleaning", 
            href: "post"
        }, 
        {
            title: "Disinfection & Deep Cleaning", 
            href: "disinfection"
        }, 
        {
            title: "Emergency & Response Cleaning", 
            href: "emergency"
        }
    ],
  },
  {
    title: "Seasonal Care",
    href: "/services/seasonal-care",
    subServices: [
        {
            title: "Snow & Ice Management", 
            href: "snow"
        }, 
        {
            title: "Grounds & Landscape Maintenance", 
            href: "grounds"
        }, 
        {
            title: "Green Roof Maintenance", 
            href: "green"
        }, 
        {
            title: "Spring & Fall Cleanup", 
            href: "spring"
        }, 
        {
            title: "Parking Lot & Site Care", 
            href: "parking"
        }
    ],
  },
  {
    title: "Construction Management & Support",
    href: "/services/construction-management",
    subServices: [
        {
            title: "Project & Contractor Coordination", 
            href: "project"
        }, 
        {
            title: "Renovations & Reinstatement", 
            href: "renovations"
        }, 
        {
            title: "Civil & Site Repair Support", 
            href: "civil"
        }
    ],
  },
  {
    title: "Emergency & Planned Maintenance",
    href: "/services/maintenance",
    subServices: [
        {
            title: "Emergency Services", 
            href: "emergency"
        }, 
        {
            title: "Planned & Preventive Maintenance", 
            href: "planned"
        }, 
        {
            title: "Reactive Repairs & Corrective Maintenance", 
            href: "reactive"
        }, 
        {
            title: "Facility Inspections & Deficiency Lists", 
            href: "facility"
        }
    ],
  },
  {
    title: "Specialty Services",
    href: "/services/specialty",
    subServices: [
        {
            title: "Hydrovac", 
            href: "hydrovac"
        }, 
        {
            title: "Environmental Services", 
            href: "Environmental Services"
        }, 
        {
            title: "Consulting", 
            href: "consulting"
        }, 
        {
            title: "Oil Interceptors", 
            href: "oil"
        }, 
        {
            title: "Anti Slip", 
            href: "anti"
        }, 
        {
            title: "Sump Pit & Catch Basin Cleaning", 
            href: "sump"
        }, 
        {
            title: "Industrial & Equipment Cleaning", 
            href: "industrial"
        }
    ],
  },
];
type ServiceMenuItem = {
  title: string;
  href: string;
};

type ServiceMenuCategory = {
  title: string;
  href: string;
  subServices: ServiceMenuItem[];
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getServiceHref(
  serviceLink: string | undefined,
  serviceName: string,
  categorySlug: string
) {
  const rawLink = serviceLink?.trim().replace(/\/+$/, "");

  const serviceSlug = rawLink
    ? rawLink.split("/").filter(Boolean).pop()
    : slugify(serviceName);

  return `/services/${categorySlug}/${serviceSlug || slugify(serviceName)}`;
}


export default function Navbar() {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const [openService, setOpenService] = useState<string | null>(null);

// Display static services immediately.
const [services, setServices] =
  useState<ServiceMenuCategory[]>(staticServices);

useEffect(() => {
  let cancelled = false;

  async function fetchServices() {
    try {
      const response = await fetch("/api/categories", {
        cache: "no-store",
      });

 if (!response.ok) {
  const errorDetails = await response.text();

  console.error("Service categories API failed:", {
    status: response.status,
    statusText: response.statusText,
    details: errorDetails,
  });

  return; // Keep the static menu.
}

      const result = await response.json();

      // Support common API response formats.
      const categories = Array.isArray(result)
        ? result
        : Array.isArray(result.categories)
          ? result.categories
          : Array.isArray(result.data)
            ? result.data
            : [];

      const backendServices: ServiceMenuCategory[] = categories
        .filter(
          (category: any) =>
            category.isActive !== false &&
            category.name &&
            category.slug
        )
        .map((category: any) => {
          const categoryHref = `/services/${category.slug}`;

  const subServices: ServiceMenuItem[] = (
  Array.isArray(category.services) ? category.services : []
)
  .filter(
    (service: any) =>
      service.isActive !== false && service.name
  )
  .map((service: any) => ({
    title: service.name,
    href: getServiceHref(
      service.link,
      service.name,
      category.slug
    ),
  }));

          return {
            title: category.name,
            href: categoryHref,
            subServices,
          };
        });

      // Replace static data only when backend data exists.
      if (!cancelled && backendServices.length > 0) {
        setServices(backendServices);
      }
    } catch (error) {
      console.error("Could not load navbar services:", error);

      // No state change: static services stay visible.
    }
  }

  fetchServices();

  return () => {
    cancelled = true;
  };
}, []);

  return (
    <header className="site-header">
      {/* Top Bar */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-tagline">
            FACILITIES. PEOPLE. PERFORMANCE.
          </div>

          <a href="tel:+18665193436" className="topbar-phone">
            <FaPhoneAlt />
            <span>866 519 3436</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-navbar">
        <div className="navbar-inner">
          {/* Logo */}
          <Link href="/" className="navbar-logo">
            <img
              src="/images/access-logo.png"
              alt="Access Maintenance"
            />
          </Link>

          {/* Navigation Links */}
          <div className="navbar-links">
            {/* Services */}
            <div className="services-nav-item">
              <Link href="/services" className="services-nav-link">
                <span>Services</span>
                <FaChevronDown className="services-chevron" />
              </Link>

              {/* Services Mega Menu */}
              <div className="services-mega-menu">
                <div className="services-mega-inner">
                  {/* Mega Menu Header */}
                  <div className="services-menu-header">
                    <div className="services-menu-intro">
                      <span className="services-small-title">
                        A connected service offering
                      </span>

                      <h2>
                        Everything your site needs to keep moving.
                      </h2>
                    </div>

                    <Link
                      href="/services"
                      className="view-all-services"
                    >
                      View all services
                    </Link>
                  </div>

                  {/* Divider */}
                  <div className="services-divider" />

                  {/* Services */}
                  <div className="services-grid">
                    {services.map((service) => (
                      <div
                        className="service-column"
                        key={service.title}
                      >
                        <Link
                          href={service.href}
                          className="service-category"
                        >
                          {service.title}
                        </Link>

                        {service.subServices.length > 0 && (
                          <div className="service-subcategories">

{service.subServices.map((subService) => (
  <Link
    key={subService.title}
    href={subService.href}
  >
    {subService.title}
  </Link>
))}

                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Other Navigation Links */}
                   <Link href="/solutions">Solutions</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/our-approach">Our Approach</Link>
            <Link href="/about-us">About Access</Link>
          </div>

          {/* Request a Proposal */}
   {/* Desktop Proposal Button */}
<Link
  href="/contact-us"
  className="proposal-button"
>
  Request a proposal
</Link>

{/* Mobile Menu Button */}
<button
  type="button"
  className="mobile-menu-button"
  onClick={() => setIsMobileMenuOpen(true)}
  aria-label="Open menu"
>
  <FaBars />
</button>
        </div>
      </nav>
      {/* Mobile Sidebar */}
<div
  className={`mobile-menu-overlay ${
    isMobileMenuOpen ? "active" : ""
  }`}
  onClick={() => setIsMobileMenuOpen(false)}
/>

<aside
  className={`mobile-sidebar ${
    isMobileMenuOpen ? "active" : ""
  }`}
>
  {/* Sidebar Header */}
  <div className="mobile-sidebar-header">
    <div>
      <span className="mobile-sidebar-eyebrow">
        Explore Access
      </span>

      <span className="mobile-sidebar-subtitle">
        Facility and site services
      </span>
    </div>

    <button
      type="button"
      className="mobile-menu-close"
      onClick={() => setIsMobileMenuOpen(false)}
      aria-label="Close menu"
    >
      <FaTimes />
    </button>
  </div>

  {/* Services Heading */}
  <div className="mobile-services-heading">
    <span>All Services</span>
  </div>

  <div className="mobile-services-divider" />

  {/* Service Categories */}
  <div className="mobile-services-list">
    {services.map((service) => (
      <div
        className="mobile-service-item"
        key={service.title}
      >
        <button
          type="button"
          className="mobile-service-button"
          onClick={() =>
            setOpenService(
              openService === service.title
                ? null
                : service.title
            )
          }
        >
          <span>{service.title}</span>

          <FaChevronDown
            className={
              openService === service.title
                ? "mobile-service-chevron open"
                : "mobile-service-chevron"
            }
          />
        </button>

        {/* Sub Services */}
        <div
          className={
            openService === service.title
              ? "mobile-subservices open"
              : "mobile-subservices"
          }
        >

{service.subServices.map((subService) => (
  <Link
    key={subService.title}
    href={subService.href}
    onClick={() => setIsMobileMenuOpen(false)}
  >
    {subService.title}
  </Link>
))}

        </div>
      </div>
    ))}
  </div>

  {/* Other Navigation Links */}
  <div className="mobile-other-links">
        <Link
      href="/solutions"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      Solutions
    </Link>
    <Link
      href="/industries"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      Industries
    </Link>

    <Link
      href="/our-approach"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      Our Approach
    </Link>

    <Link
      href="/about-us"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      About Access
    </Link>
  </div>

  {/* Phone */}
  <a
    href="tel:+18665193436"
    className="mobile-sidebar-phone"
  >
    <FaPhoneAlt />
    <span>Call 866 519 3436</span>
  </a>
</aside>
    </header>
  );
}
