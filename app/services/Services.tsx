"use client";

import Link from "next/link";
import "./Services.css";
import FooterCta from "../components/FooterCta";

export default function Services() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="services-container">
          {/* Breadcrumb */}
          <div className="services-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Services</span>
          </div>

          {/* Hero Heading */}
          <div className="services-hero-heading">
            <div className="services-eyebrow">
              <span className="services-eyebrow-line"></span>
              <span>Our services</span>
            </div>

            <div className="services-hero-grid">
              <h1>Connected services. Clear responsibilities.</h1>

              <div className="services-hero-side">
                <p>
                  A complete view of the work Access can coordinate for your
                  facility, property and site.
                </p>

                <Link
                  href="/contact-us"
                  className="services-discuss-link"
                >
                  Discuss your requirements
                </Link>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="services-hero-image">
            <img
              src="/images/services-hero.jpg"
              alt="Access Maintenance services at a commercial facility"
            />
          </div>
        </div>
      </section>
              {/* Seven Service Families */}
        <section className="services-families">
          <div className="services-container">
            <div className="services-families-heading">
              <div className="services-families-label">
                <span className="services-families-label-line"></span>
                <span>Seven service families</span>
              </div>

              <h2>Start with what your site needs.</h2>
            </div>

            <div className="services-families-grid">
              {/* Card 01 */}
              <div className="services-family-card">
                <div className="services-family-card-top">
                  <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
  <path d="M4 28V12l8-5 8 5v16M20 17l4-3 4 3v11H4" />
  <path d="M8 16h2M14 16h2M8 21h2M14 21h2M23 19h2M23 23h2" />
  <path d="M2 28h28M11 28v-4h4v4" />
</svg>
                  <span>01</span>
                </div>

                <h3>Integrated Facilities Service</h3>
                <p>
                  Bring technical trades, cleaning, grounds, winter operations
                  and projects into a service plan built around your property.
                </p>
                <div className="services-family-tags">
                  Facility Operations &amp; Maintenance · Asset &amp; Maintenance
                  Planning · Work Orders &amp; Digital Reporting
                </div>
                <Link href="/services/integrated-facilities-service" className="services-family-link">
                  Explore Services
                </Link>
              </div>

              {/* Card 02 */}
              <div className="services-family-card">
                <div className="services-family-card-top">
                  <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
  <path d="M19 7a8 8 0 0 0-10 10L4 22a3 3 0 0 0 4 4l5-5A8 8 0 0 0 23 11l-5 5-5-5 6-4Z" />
  <path d="m20 20 7 7M22 18l4-4" />
</svg>
                  <span>02</span>
                </div>

                <h3>Technical &amp; Trades Services</h3>
                <p>
                  Electrical, plumbing, HVAC, handyman and emergency service
                  requirements coordinated around your facility.
                </p>
                <div className="services-family-tags">
                  Electrical · Plumbing · HVAC
                </div>
                <Link href="/services/technical-and-trades-services" className="services-family-link">
                  Explore Services
                </Link>
              </div>

              {/* Card 03 */}
              <div className="services-family-card">
                <div className="services-family-card-top">
              <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
  <path d="m7 22 12-12 5 5-12 12H7v-5Z" />
  <path d="m17 12 5 5M5 27h12M23 5v4M21 7h4M27 18v4M25 20h4" />
</svg>
                  <span>03</span>
                </div>

                <h3>Cleaning &amp; Janitorial Services</h3>
                <p>
                  Recurring janitorial, response cleaning and defined specialist
                  cleaning scopes for working environments.
                </p>
                <div className="services-family-tags">
                  Commercial Janitorial Programmes · Floor &amp; Carpet Care ·
                  Window &amp; Glass Cleaning
                </div>
                <Link href="/services/cleaning-and-janitorial-services" className="services-family-link">
                  Explore Services
                </Link>
              </div>

              {/* Card 04 */}
              <div className="services-family-card">
                <div className="services-family-card-top">
                 <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
  <path d="M16 3v26M4.7 9.5l22.6 13M4.7 22.5l22.6-13" />
  <path d="m12 6 4-3 4 3M12 26l4 3 4-3" />
  <path d="m5 14-.3-4.5 4.3.5M23 22l4.3.5-.3-4.5" />
  <path d="m5 18-.3 4.5 4.3-.5M23 10l4.3-.5-.3 4.5" />
</svg>
                  <span>04</span>
                </div>

                <h3>Seasonal Care</h3>
                <p>
                  Year-round exterior care, from winter response to healthy
                  grounds and seasonal site readiness.
                </p>
                <div className="services-family-tags">
                  Snow &amp; Ice Management · Grounds &amp; Landscape
                  Maintenance · Green Roof Maintenance
                </div>
                <Link href="/services/seasonal-care" className="services-family-link">
                  Explore Services
                </Link>
              </div>

              {/* Card 05 */}
              <div className="services-family-card">
                <div className="services-family-card-top">
                <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
  <path d="M5 28V14h13v14M18 28V20h9v8M2 28h28" />
  <path d="M3 8h22M8 8V4h15v4M12 4v4M23 8v5M20 13h6" />
  <path d="M9 18h2M14 18h1M9 22h2M14 22h1M22 23h2" />
</svg>
                  <span>05</span>
                </div>

                <h3>Construction Management &amp; Support</h3>
                <p>
                  Planning and coordination for defined construction,
                  renovation and facility-improvement work packages.
                </p>
                <div className="services-family-tags">
                  Project &amp; Contractor Coordination · Renovations &amp;
                  Reinstatement · Civil &amp; Site Repair Support
                </div>
                <Link href="/services/construction-management-and-support" className="services-family-link">
                  Explore Services
                </Link>
              </div>

              {/* Card 06 */}
              <div className="services-family-card">
                <div className="services-family-card-top">
                 <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
  <path d="M16 3 27 7v8c0 7-4.5 11-11 14C9.5 26 5 22 5 15V7l11-4Z" />
  <path d="m10.5 16 4 4 7-8" />
  <path d="M16 7v2M9 9l2 1" />
</svg>
                  <span>06</span>
                </div>

                <h3>Emergency &amp; Planned Maintenance</h3>
                <p>
                  Responsive support when issues arise. Proactive programmes
                  that help you stay ahead of the next one.
                </p>
                <div className="services-family-tags">
                  Emergency Services · Planned &amp; Preventive Maintenance ·
                  Reactive Repairs &amp; Corrective Maintenance
                </div>
                <Link href="/services/emergency-and-planned-maintenance" className="services-family-link">
                  Explore Services
                </Link>
              </div>

              {/* Card 07 */}
              <div className="services-family-card">
                <div className="services-family-card-top">
                  <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
  <path d="M16 4s-8 9-8 15a8 8 0 0 0 16 0c0-6-8-15-8-15Z" />
  <path d="M11 20c0 3 2 5 5 5M4 28c3-2 5-2 8 0s5 2 8 0 5-2 8 0" />
</svg>
                  <span>07</span>
                </div>

                <h3>Specialty Services</h3>
                <p>
                  Hydrovac, environmental services, consulting, oil interceptors
                  and anti-slip support for specific site requirements.
                </p>
                <div className="services-family-tags">
                  Hydrovac · Environmental Services · Consulting
                </div>
                <Link href="/services/specialty-services" className="services-family-link">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Complete Service Directory */}
        <section className="services-directory">
          <div className="services-container">
            <div className="services-directory-heading">
              <div className="services-directory-label">
                <span className="services-directory-label-line"></span>
                <span>Complete service directory</span>
              </div>

              <h2>Explore every capability.</h2>
            </div>

            <div className="services-directory-grid">
              {/* Category 01 */}
              <div className="services-directory-category">
                <h3>Integrated Facilities Service</h3>
                <ul>
                  <li>
                    <Link href="/services/integrated-facilities-service/facility-operations-and-maintenance">
                      Facility Operations &amp; Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/integrated-facilities-service/asset-and-maintenance-planning">
                      Asset &amp; Maintenance Planning
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/integrated-facilities-service/work-orders-and-digital-reporting">
                      Work Orders &amp; Digital Reporting
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Category 02 */}
              <div className="services-directory-category">
                <h3>Technical &amp; Trades Services</h3>
                <ul>
                  <li>
                    <Link href="/services/technical-and-trades-services/electrical">Electrical</Link>
                  </li>
                  <li>
                    <Link href="/services/technical-and-trades-services/plumbing">Plumbing</Link>
                  </li>
                  <li>
                    <Link href="/services/technical-and-trades-services/hvac">HVAC</Link>
                  </li>
                  <li>
                    <Link href="/services/technical-and-trades-services/handyman">Handyman</Link>
                  </li>
                  <li>
                    <Link href="/services/technical-and-trades-services/building-fabric-and-interior-repairs">
                      Building Fabric &amp; Interior Repairs
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/technical-and-trades-services/emergency-services">
                      Emergency Services
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Category 03 */}
              <div className="services-directory-category">
                <h3>Cleaning &amp; Janitorial Services</h3>
                <ul>
                  <li>
                    <Link href="/services/cleaning-and-janitorial-services/commercial-janitorial-programs">
                      Commercial Janitorial Programmes
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/cleaning-and-janitorial-services/floor-and-carpet-care">
                      Floor &amp; Carpet Care
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/cleaning-and-janitorial-services/window-and-glass-cleaning">
                      Window &amp; Glass Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/cleaning-and-janitorial-services/pressure-washing-and-exterior-cleaning">
                      Pressure Washing &amp; Exterior Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/cleaning-and-janitorial-services/graffiti-removal">
                      Graffiti Removal
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/cleaning-and-janitorial-services/post-construction-and-turnover-cleaning">
                      Post-Construction &amp; Turnover Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/cleaning-and-janitorial-services/disinfection-and-deep-cleaning">
                      Disinfection &amp; Deep Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/cleaning-and-janitorial-services/emergency-and-response-cleaning">
                      Emergency &amp; Response Cleaning
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Category 04 */}
              <div className="services-directory-category">
                <h3>Seasonal Care</h3>
                <ul>
                  <li>
                    <Link href="/services/seasonal-care/snow-and-ice-management">
                      Snow &amp; Ice Management
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/seasonal-care/grounds-and-landscape-maintenance">
                      Grounds &amp; Landscape Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/seasonal-care/green-roof-maintenance">
                      Green Roof Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/seasonal-care/spring-and-fall-cleanup">
                      Spring &amp; Fall Cleanup
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/seasonal-care/parking-lot-and-site-care">
                      Parking Lot &amp; Site Care
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Category 05 */}
              <div className="services-directory-category">
                <h3>Construction Management &amp; Support</h3>
                <ul>
                  <li>
                    <Link href="/services/construction-management-and-support/project-and-contractor-coordination">
                      Project &amp; Contractor Coordination
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/construction-management-and-support/renovations-and-reinstatement">
                      Renovations &amp; Reinstatement
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/construction-management-and-support/civil-and-site-repair-support">
                      Civil &amp; Site Repair Support
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Category 06 */}
              <div className="services-directory-category">
                <h3>Emergency &amp; Planned Maintenance</h3>
                <ul>
                  <li>
                    <Link href="/services/emergency-and-planned-maintenance/emergency-services">
                      Emergency Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/emergency-and-planned-maintenance/planned-and-preventive-maintenance">
                      Planned &amp; Preventive Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/emergency-and-planned-maintenance/reactive-repairs-and-corrective-maintenance">
                      Reactive Repairs &amp; Corrective Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/emergency-and-planned-maintenance/facility-inspections-and-deficiency-lists">
                      Facility Inspections &amp; Deficiency Lists
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Category 07 */}
              <div className="services-directory-category services-directory-specialty">
                <h3>Specialty Services</h3>
                <ul>
                  <li>
                    <Link href="/services/specialty-services/hydrovac">Hydrovac</Link>
                  </li>
                  <li>
                    <Link href="/services/specialty-services/environmental-services">
                      Environmental Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/specialty-services/consulting">Consulting</Link>
                  </li>
                  <li>
                    <Link href="/services/specialty-services/oil-interceptors">
                      Oil Interceptors
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/specialty-services/anti-slip">Anti Slip</Link>
                  </li>
                  <li>
                    <Link href="/services/specialty-services/sump-pit-and-catch-basin-cleaning">
                      Sump Pit &amp; Catch Basin Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/specialty-services/stormwater-maintenance-and-compliance">
                      Industrial &amp; Equipment Cleaning
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <FooterCta/>

    </main>
  );
}