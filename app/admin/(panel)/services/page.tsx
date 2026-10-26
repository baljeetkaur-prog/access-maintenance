
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./services.css";

type Service = {
  _id: string;
  categoryId: string;
  categoryName: string;
  categorySlug: string;
  name: string;
  paragraph: string;
  link: string;
  shortDescription: string;
  isActive: boolean;
};

export default function ManageServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await fetch("/api/admin/services", {
          credentials: "same-origin",
          cache: "no-store",
        });

        const result = await response.json();

        if (response.status === 401) {
          window.location.href = "/admin/login";
          return;
        }

        if (!response.ok) {
          throw new Error(result.message || "Failed to load services.");
        }

        setServices(result.services || []);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load services."
        );
      } finally {
        setLoading(false);
      }
    }

    void fetchServices();
  }, []);

  const filteredServices = services.filter((service) => {
    const term = search.toLowerCase();

    return (
      service.name.toLowerCase().includes(term) ||
      service.categoryName.toLowerCase().includes(term)
    );
  });

  return (
    <main className="manage-services-page">
      <div className="manage-services-header">
        <div>
          <span className="manage-services-eyebrow">ADMIN PANEL</span>
          <h1>Manage Services</h1>
          <p>
            Manage the detailed website content for each individual service.
          </p>
        </div>

        <Link
          href="/admin/service-categories"
          className="manage-services-back"
        >
          Service Categories
        </Link>
      </div>

      <div className="manage-services-toolbar">
        <div>
          <strong>{services.length}</strong>
          <span> Total services</span>
        </div>

        <input
          type="search"
          placeholder="Search by service or category..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search services"
        />
      </div>

      {loading ? (
        <div className="manage-services-message">Loading services...</div>
      ) : error ? (
        <div className="manage-services-error">{error}</div>
      ) : filteredServices.length === 0 ? (
        <div className="manage-services-message">
          {search
            ? "No services match your search."
            : "No services found. Add services from Service Categories."}
        </div>
      ) : (
        <div className="manage-services-list">
          {filteredServices.map((service) => (
            <article
              className="manage-service-card"
              key={`${service.categoryId}-${service._id}`}
            >
              <div className="manage-service-content">
                <div className="manage-service-topline">
                  <span className="manage-service-category">
                    {service.categoryName}
                  </span>

                  <span
                    className={`manage-service-status ${
                      service.isActive ? "is-active" : "is-inactive"
                    }`}
                  >
                    {service.isActive ? "Active" : "Inactive"}
                  </span>
                </div>

                <h2>{service.name}</h2>

                <p>{service.paragraph || "No service description added."}</p>

                {service.link && (
                  <span className="manage-service-url">{service.link}</span>
                )}
              </div>

              <Link
                href={`/admin/services/${service.categoryId}/${service._id}/edit`}
                className="manage-service-edit"
              >
                Edit Content <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
