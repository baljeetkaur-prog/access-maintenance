
import Link from "next/link";
import FooterCta from "@/app/components/FooterCta";
import "./ServiceCategoryPage.css";

type Service = {
  _id: string;
  name: string;
  paragraph: string;
  link?: string;
  isActive?: boolean;
};

type ScopeItem = {
  _id: string;
  heading: string;
  paragraph: string;
};

type Category = {
  _id: string;
  name: string;
  slug: string;
  shortDescription: string;
  image?: {
    url?: string;
  };
  overview?: {
    heading?: string;
    paragraph?: string;
  };
  services?: Service[];
  scope?: ScopeItem[];
  deliveryProcess?: ScopeItem[];
  firstConversation?: string[];
};

type Props = {
  data: Category;
  allCategoriesData: Category[];
};

export default function ServiceCategoryPage({
  data,
  allCategoriesData,
}: Props) {
  const currentIndex = allCategoriesData.findIndex(
    (item) => item.slug === data.slug
  );

  const relatedData =
    currentIndex === -1
      ? []
      : Array.from(
          {
            length: Math.min(
              3,
              allCategoriesData.length - 1
            ),
          },
          (_, index) =>
            allCategoriesData[
              (currentIndex + index + 1) %
                allCategoriesData.length
            ]
        );

  const activeServices = (data.services ?? []).filter(
    (service) => service.isActive !== false
  );

  return (
    <main className="service-category-page">
      {/* Hero */}
      <section className="service-category-hero">
        <div className="service-category-container">
          <nav className="service-category-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/services">Services</Link>
          </nav>

          <div className="service-category-hero-heading">
            <div className="service-category-eyebrow">
              <span className="service-category-line" />
              <span>Our services</span>
            </div>

            <div className="service-category-hero-grid">
              <h1>{data.name}</h1>

              <div className="service-category-hero-side">
                <p>{data.shortDescription}</p>

                <Link
                  href="/contact-us"
                  className="service-category-cta-link"
                >
                  Discuss your requirements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <nav
        className="service-category-nav"
        aria-label="Service category sections"
      >
        <div className="service-category-nav-container">
          <a href="#overview">Overview</a>
          <a href="#services">Services</a>
          <a href="#scope">Scope</a>
          <a href="#delivery">Delivery</a>
        </div>
      </nav>

      {/* Overview */}
      <section
        id="overview"
        className="service-category-overview"
      >
        <div className="service-category-overview-container">
          <div className="service-category-overview-content">
            <div className="service-category-overview-eyebrow">
              <span className="service-category-overview-eyebrow-line" />
              <span>The approach</span>
            </div>

            <h2>
              {data.overview?.heading || data.name}
            </h2>

            <p>
              {data.overview?.paragraph ||
                data.shortDescription}
            </p>
          </div>

          {data.image?.url && (
            <div className="service-category-overview-image">
              <img src={data.image.url} alt={data.name} />
            </div>
          )}
        </div>
      </section>

      {/* Individual Services */}
      {activeServices.length > 0 && (
        <section
          id="services"
          className="service-category-services"
        >
          <div className="service-category-services-container">
            <div className="service-category-services-eyebrow">
              <span className="service-category-services-eyebrow-line" />
              <span>Individual services</span>
            </div>

            <h2 className="service-category-services-title">
              Find the right support.
            </h2>

            <div className="service-category-services-grid">
              {activeServices.map((service, index) => (
                <article
                  className="service-category-service-card"
                  key={service._id}
                >
                  <div className="service-category-service-card-top">
                    <svg
                      className="service-category-service-icon"
                      viewBox="0 0 40 40"
                      fill="none"
                      aria-hidden="true"
                    >
                      <rect
                        x="5.5"
                        y="5.5"
                        width="29"
                        height="29"
                        rx="3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M12 20.5L17.5 26L28.5 14.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span className="service-category-service-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3>{service.name}</h3>
                  <p>{service.paragraph}</p>

                  {service.link && (
            <Link
  href={`/services/${data.slug}/${service.link
    ?.trim()
    .replace(/\/+$/, "")
    .split("/")
    .pop()}`}
  className="service-category-service-link"
>
  Explore service
</Link>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Scope */}
      {data.scope && data.scope.length > 0 && (
        <section
          id="scope"
          className="service-category-scope"
        >
          <div className="service-category-scope-container">
            <div className="service-category-scope-eyebrow">
              <span className="service-category-scope-eyebrow-line" />
              <span>Service scope</span>
            </div>

            <div className="service-category-scope-intro">
              <h2>A defined scope for your site.</h2>

              <p>
                Select the requirements that matter to your
                property. Your proposal sets out the included
                work, resources and service arrangements.
              </p>
            </div>

            <div className="service-category-scope-grid">
              {data.scope.map((item) => (
                <article
                  className="service-category-scope-item"
                  key={item._id}
                >
                  <h3>{item.heading}</h3>
                  <p>{item.paragraph}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Delivery Process */}
      {data.deliveryProcess &&
        data.deliveryProcess.length > 0 && (
          <section
            id="delivery"
            className="service-category-delivery"
          >
            <div className="service-category-delivery-container">
              <div className="service-category-delivery-eyebrow">
                <span className="service-category-delivery-eyebrow-line" />
                <span>How the work comes together</span>
              </div>

              <h2 className="service-category-delivery-title">
                Coordinated delivery from scope to completion.
              </h2>

              <div className="service-category-delivery-grid">
                {data.deliveryProcess.map((step, index) => (
                  <article
                    className="service-category-delivery-card"
                    key={step._id}
                  >
                    <span className="service-category-delivery-number">
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
      {data.firstConversation &&
        data.firstConversation.length > 0 && (
          <section className="service-category-requirements">
            <div className="service-category-requirements-box">
              <div className="service-category-requirements-heading">
                <h2>Site requirements</h2>
              </div>

              <ul className="service-category-requirements-list">
                {data.firstConversation.map(
                  (point, index) => (
                    <li key={index}>
                      <span className="service-category-requirements-bullet">
                        •
                      </span>
                      <span>{point}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </section>
        )}

      {/* Connected Services */}
      {relatedData.length > 0 && (
        <section className="service-category-related">
          <div className="service-category-related-container">
            <div className="service-category-related-eyebrow">
              <span className="service-category-related-eyebrow-line" />
              <span>Connected services</span>
            </div>

            <h2 className="service-category-related-title">
              Explore related support.
            </h2>

            <div className="service-category-related-grid">
              {relatedData.map((related, index) => (
                <article
                  className="service-category-related-card"
                  key={related._id}
                >
                  <div className="service-category-related-card-top">
                    <svg
                      className="service-category-related-icon"
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

                    <span className="service-category-related-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3>{related.name}</h3>
                  <p>{related.shortDescription}</p>

                  <Link
                    href={`/services/${related.slug}`}
                    prefetch={true}
                    className="service-category-related-link"
                  >
                    Explore service
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <FooterCta />
    </main>
  );
}
