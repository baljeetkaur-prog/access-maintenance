
import Link from "next/link";
import FooterCta from "@/app/components/FooterCta";
import "./ServicePage.css";

type TextSection = {
  _id?: string;
  heading: string;
  paragraph: string;
};
type RelatedService = {
  _id: string;
  name: string;
  paragraph: string;
  link?: string;
  isActive?: boolean;
};

type Service = {
  _id: string;
  name: string;
  paragraph: string;
  link?: string;
  isActive?: boolean;
  overview?: {
    heading?: string;
    paragraph?: string;
  };
  scope?: TextSection[];
  deliveryProcess?: TextSection[];
  firstConversation?: string[];
};

type Props = {
  category: {
    name: string;
    slug: string;
  };
  service: Service;
  relatedServices: RelatedService[];
};

export default function ServicePage({
  category,
  service,
  relatedServices,
}: Props) {
  const overviewHeading =
    service.overview?.heading?.trim() || service.name;

  const overviewParagraph =
    service.overview?.paragraph?.trim() || service.paragraph;

  const scope = service.scope ?? [];
  const delivery = service.deliveryProcess ?? [];
  const requirements = service.firstConversation ?? [];
  const relatedData = (service as Service & {
  relatedServices?: RelatedService[];
}).relatedServices ?? [];

  return (
    <main className="individual-service-page">
      {/* Hero */}
  
{/* Hero */}
<section className="individual-service-hero">
  <div className="individual-service-container">
    <nav
      className="individual-service-breadcrumb"
      aria-label="Breadcrumb"
    >
      <Link href="/">Home</Link>
      <span>/</span>
      <Link href={`/services/${category.slug}`}>
        {category.name}
      </Link>
    </nav>

    <div className="individual-service-hero-heading">
      <div className="individual-service-eyebrow">
        <span className="individual-service-line" />
        <span>{category.name}</span>
      </div>

      <div className="individual-service-hero-grid">
        <h1>{service.name}</h1>

        <div className="individual-service-hero-side">
          <p>{service.paragraph}</p>

          <Link
            href="/contact-us"
            className="individual-service-cta-link"
          >
            Discuss your requirements
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Service Section Navigation */}
<nav
  className="individual-service-nav"
  aria-label="Service sections"
>
  <div className="individual-service-nav-container">
    <a href="#overview">Overview</a>
    <a href="#scope">Scope</a>
    <a href="#delivery">Delivery</a>
  </div>
</nav>



      {/* Overview */}
      {(overviewHeading || overviewParagraph) && (
        <section
          id="overview"
          className="individual-service-overview"
        >
          <div className="individual-service-container">
            <div className="individual-service-eyebrow">
              <span className="individual-service-line" />
              <span>The approach</span>
            </div>

            <h2>{overviewHeading}</h2>
            <p>{overviewParagraph}</p>
          </div>
        </section>
      )}

      {/* Service scope */}
  
{/* Service Scope */}
{scope.length > 0 && (
  <section
    id="scope"
    className="individual-service-scope"
  >
    <div className="individual-service-scope-container">
      <div className="individual-service-scope-eyebrow">
        <span className="individual-service-scope-eyebrow-line" />
        <span>Service scope</span>
      </div>

      <div className="individual-service-scope-intro">
        <h2>A defined scope for your site.</h2>

        <p>
          Select the requirements that matter to your
          property. Your proposal sets out the included
          work, resources and service arrangements.
        </p>
      </div>

      <div className="individual-service-scope-grid">
        {scope.map((item, index) => (
          <article
            className="individual-service-scope-item"
            key={item._id || index}
          >
            <h3>{item.heading}</h3>
            <p>{item.paragraph}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)}


      {/* Delivery process */}

{/* Delivery Process */}
{delivery.length > 0 && (
  <section
    id="delivery"
    className="individual-service-delivery"
  >
    <div className="individual-service-delivery-container">
      <div className="individual-service-delivery-eyebrow">
        <span className="individual-service-delivery-eyebrow-line" />
        <span>How the work comes together</span>
      </div>

      <h2 className="individual-service-delivery-title">
        Coordinated delivery from scope to completion.
      </h2>

      <div className="individual-service-delivery-grid">
        {delivery.map((step, index) => (
          <article
            className="individual-service-delivery-card"
            key={step._id || index}
          >
            <span className="individual-service-delivery-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3>{step.heading}</h3>
            <p>{step.paragraph}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)}

{/* Site Requirements */}
{requirements.length > 0 && (
  <section className="individual-service-requirements">
    <div className="individual-service-requirements-box">
      <div className="individual-service-requirements-heading">
        <h2>Site requirements</h2>
      </div>

      <ul className="individual-service-requirements-list">
        {requirements.map((point, index) => (
          <li key={index}>
            <span className="individual-service-requirements-bullet">
              •
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
)}
{/* Connected Services */}
{relatedServices.length > 0 && (
  <section className="individual-service-related">
    <div className="individual-service-related-container">
      <div className="individual-service-related-eyebrow">
        <span className="individual-service-related-eyebrow-line" />
        <span>Connected services</span>
      </div>

      <h2 className="individual-service-related-title">
        Explore related support.
      </h2>

      <div className="individual-service-related-grid">
        {relatedServices.map((related, index) => {
          const relatedSlug =
            related.link
              ?.trim()
              .replace(/\/+$/, "")
              .split("/")
              .pop()
              ?.toLowerCase() || "";

          return (
            <article
              className="individual-service-related-card"
              key={related._id || relatedSlug}
            >
              <div className="individual-service-related-card-top">
                <svg
                  className="individual-service-related-icon"
                  viewBox="0 0 40 40"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="7"
                    y="13"
                    width="26"
                    height="21"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M13 13V7H27V13M13 19H17M23 19H27M13 25H17M23 25H27M18 34V29H22V34"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="individual-service-related-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3>{related.name}</h3>
              <p>{related.paragraph}</p>

              {relatedSlug && (
                <Link
                  href={`/services/${category.slug}/${relatedSlug}`}
                  prefetch
                  className="individual-service-related-link"
                >
                  Explore service
                </Link>
              )}
            </article>
          );
        })}
      </div>
    </div>
  </section>
)}



      <FooterCta />
    </main>
  );
}
