
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import "./ContactInquiries.css";

type InquiryStatus = "new" | "in-progress" | "contacted" | "closed";

type ContactInquiry = {
  _id: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  location?: string;
  service: string;
  timing: string;
  requirements?: string;
  status: InquiryStatus;
  createdAt: string;
};

const serviceLabels: Record<string, string> = {
  "integrated-facilities": "Integrated Facilities Service",
  "technical-trades": "Technical & Trade Services",
  electrical: "Electrical",
  plumbing: "Plumbing",
  hvac: "HVAC",
  handyman: "Handyman",
  "emergency-services": "Emergency Services",
  "snow-ice-management": "Snow & Ice Management",
  "grounds-landscape": "Grounds & Landscape Maintenance",
  "cleaning-janitorial": "Cleaning & Janitorial Services",
};

const timingLabels: Record<string, string> = {
  "planned-work": "Planned work / quotation",
  "recurring-programme": "Recurring service programme",
  "urgent-requirement": "Urgent requirement",
};

const statusLabels: Record<InquiryStatus, string> = {
  new: "New",
  "in-progress": "In progress",
  contacted: "Contacted",
  closed: "Closed",
};

export default function ContactInquiries() {
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [timingFilter, setTimingFilter] = useState("all");
  const [selectedInquiry, setSelectedInquiry] =
    useState<ContactInquiry | null>(null);

  const fetchInquiries = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/contact", {
        method: "GET",
        cache: "no-store",
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        if (response.status === 401) {
          throw new Error("Your admin session has expired. Please log in again.");
        }

        throw new Error(result.message || "Unable to load contact inquiries.");
      }

      setInquiries(result.inquiries ?? []);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Unable to load contact inquiries.";

      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchInquiries();
  }, [fetchInquiries]);

  const filteredInquiries = useMemo(() => {
    const query = search.trim().toLowerCase();

    return inquiries.filter((inquiry) => {
      const searchableText = [
        inquiry.name,
        inquiry.email,
        inquiry.company,
        inquiry.phone,
        inquiry.location,
        inquiry.requirements,
        serviceLabels[inquiry.service] ?? inquiry.service,
        timingLabels[inquiry.timing] ?? inquiry.timing,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = !query || searchableText.includes(query);
      const matchesStatus =
        statusFilter === "all" || inquiry.status === statusFilter;
      const matchesService =
        serviceFilter === "all" || inquiry.service === serviceFilter;
      const matchesTiming =
        timingFilter === "all" || inquiry.timing === timingFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesService &&
        matchesTiming
      );
    });
  }, [inquiries, search, statusFilter, serviceFilter, timingFilter]);

  const counts = useMemo(
    () => ({
      total: inquiries.length,
      new: inquiries.filter((item) => item.status === "new").length,
      inProgress: inquiries.filter(
        (item) => item.status === "in-progress"
      ).length,
      closed: inquiries.filter((item) => item.status === "closed").length,
    }),
    [inquiries]
  );

  function clearFilters() {
    setSearch("");
    setStatusFilter("all");
    setServiceFilter("all");
    setTimingFilter("all");
  }

  function formatDate(value: string) {
    const date = new Date(value);

    if (Number.isNaN(date.getTime())) return "—";

    return date.toLocaleString("en-CA", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  }

  return (
    <main className="contact-inquiries-page">
      <div className="ci-container">
        <nav className="ci-breadcrumb" aria-label="Breadcrumb">
          <Link href="/admin">Dashboard</Link>
          <span>/</span>
          <span>Contact Inquiries</span>
        </nav>

        <header className="ci-header">
          <div>
            <h1>Contact Inquiries</h1>
            <p>
              View and manage inquiries submitted through your website contact
              form.
            </p>
          </div>

          <button
            type="button"
            className="ci-refresh-button"
            onClick={() => void fetchInquiries()}
            disabled={loading}
          >
            <span aria-hidden="true">↻</span>
            {loading ? "Refreshing..." : "Refresh"}
          </button>
        </header>

        <section className="ci-summary-grid" aria-label="Inquiry summary">
          <article className="ci-summary-card">
            <div className="ci-summary-icon">ALL</div>
            <div>
              <p>Total inquiries</p>
              <h2>{counts.total}</h2>
            </div>
          </article>

          <article className="ci-summary-card">
            <div className="ci-summary-icon">NEW</div>
            <div>
              <p>New inquiries</p>
              <h2>{counts.new}</h2>
            </div>
          </article>

          <article className="ci-summary-card">
            <div className="ci-summary-icon">IN</div>
            <div>
              <p>In progress</p>
              <h2>{counts.inProgress}</h2>
            </div>
          </article>

          <article className="ci-summary-card">
            <div className="ci-summary-icon">DONE</div>
            <div>
              <p>Closed inquiries</p>
              <h2>{counts.closed}</h2>
            </div>
          </article>
        </section>

        <section className="ci-table-card">
          <div className="ci-table-toolbar">
            <div>
              <h2>All inquiries</h2>
              <p>Search submissions and narrow the results using filters.</p>
            </div>

            <input
              type="search"
              aria-label="Search inquiries"
              placeholder="Search name, email, company..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="ci-filters">
            <label>
              <span>Status</span>
              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
              >
                <option value="all">All statuses</option>
                <option value="new">New</option>
                <option value="in-progress">In progress</option>
                <option value="contacted">Contacted</option>
                <option value="closed">Closed</option>
              </select>
            </label>

            <label>
              <span>Service</span>
              <select
                value={serviceFilter}
                onChange={(event) => setServiceFilter(event.target.value)}
              >
                <option value="all">All services</option>
                {Object.entries(serviceLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span>Timing</span>
              <select
                value={timingFilter}
                onChange={(event) => setTimingFilter(event.target.value)}
              >
                <option value="all">All timings</option>
                {Object.entries(timingLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="button"
              className="ci-clear-button"
              onClick={clearFilters}
            >
              Clear filters
            </button>
          </div>

          {error && (
            <div className="ci-error-message" role="alert">
              <span>{error}</span>
              <button type="button" onClick={() => void fetchInquiries()}>
                Try again
              </button>
            </div>
          )}

          {loading ? (
            <div className="ci-state-message">Loading inquiries...</div>
          ) : error ? (
            <div className="ci-state-message">
              Your inquiries could not be loaded. Please try again.
            </div>
          ) : filteredInquiries.length === 0 ? (
            <div className="ci-empty-state">
              <div className="ci-empty-icon">IN</div>
              <h3>
                {inquiries.length === 0
                  ? "No inquiries yet"
                  : "No matching inquiries"}
              </h3>
              <p>
                {inquiries.length === 0
                  ? "Website contact form submissions will appear here."
                  : "Try changing your search or clearing the filters."}
              </p>
              {inquiries.length > 0 && (
                <button
                  type="button"
                  className="ci-clear-button"
                  onClick={clearFilters}
                >
                  Clear filters
                </button>
              )}
            </div>
          ) : (
            <>
              <div className="ci-table-wrapper">
                <table className="ci-table">
                  <thead>
                    <tr>
                      <th>Contact</th>
                      <th>Service</th>
                      <th>Timing</th>
                      <th>Status</th>
                      <th>Submitted</th>
                      <th>Details</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredInquiries.map((inquiry) => (
                      <tr key={inquiry._id}>
                        <td>
                          <div className="ci-contact-cell">
                            <strong>{inquiry.name}</strong>
                            <a href={`mailto:${inquiry.email}`}>
                              {inquiry.email}
                            </a>
                            {inquiry.company && (
                              <span>{inquiry.company}</span>
                            )}
                            {inquiry.phone && (
                              <a href={`tel:${inquiry.phone}`}>
                                {inquiry.phone}
                              </a>
                            )}
                          </div>
                        </td>

                        <td>
                          {serviceLabels[inquiry.service] ?? inquiry.service}
                        </td>

                        <td>
                          {timingLabels[inquiry.timing] ?? inquiry.timing}
                        </td>

                        <td>
                          <span
                            className={`ci-status ci-status-${inquiry.status}`}
                          >
                            {statusLabels[inquiry.status] ?? inquiry.status}
                          </span>
                        </td>

                        <td className="ci-date">
                          {formatDate(inquiry.createdAt)}
                        </td>

                        <td>
                          <button
                            type="button"
                            className="ci-view-button"
                            onClick={() => setSelectedInquiry(inquiry)}
                          >
                            View inquiry
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <footer className="ci-table-footer">
                Showing {filteredInquiries.length} of {inquiries.length} inquiries
              </footer>
            </>
          )}
        </section>

        {selectedInquiry && (
          <div
            className="ci-modal-backdrop"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedInquiry(null);
              }
            }}
          >
            <section
              className="ci-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="ci-modal-title"
            >
              <div className="ci-modal-header">
                <div>
                  <span className="ci-modal-eyebrow">Contact submission</span>
                  <h2 id="ci-modal-title">{selectedInquiry.name}</h2>
                </div>
                <button
                  type="button"
                  className="ci-modal-close"
                  aria-label="Close inquiry details"
                  onClick={() => setSelectedInquiry(null)}
                >
                  ×
                </button>
              </div>

              <div className="ci-detail-grid">
                <div>
                  <span>Email</span>
                  <a href={`mailto:${selectedInquiry.email}`}>
                    {selectedInquiry.email}
                  </a>
                </div>
                <div>
                  <span>Phone</span>
                  {selectedInquiry.phone ? (
                    <a href={`tel:${selectedInquiry.phone}`}>
                      {selectedInquiry.phone}
                    </a>
                  ) : (
                    <strong>—</strong>
                  )}
                </div>
                <div>
                  <span>Company</span>
                  <strong>{selectedInquiry.company || "—"}</strong>
                </div>
                <div>
                  <span>Site location</span>
                  <strong>{selectedInquiry.location || "—"}</strong>
                </div>
                <div>
                  <span>Service required</span>
                  <strong>
                    {serviceLabels[selectedInquiry.service] ??
                      selectedInquiry.service}
                  </strong>
                </div>
                <div>
                  <span>Timing</span>
                  <strong>
                    {timingLabels[selectedInquiry.timing] ??
                      selectedInquiry.timing}
                  </strong>
                </div>
                <div>
                  <span>Status</span>
                  <strong>
                    {statusLabels[selectedInquiry.status] ??
                      selectedInquiry.status}
                  </strong>
                </div>
                <div>
                  <span>Submitted</span>
                  <strong>{formatDate(selectedInquiry.createdAt)}</strong>
                </div>
              </div>

              <div className="ci-requirements">
                <span>Scope and requirements</span>
                <p>
                  {selectedInquiry.requirements ||
                    "No additional requirements were provided."}
                </p>
              </div>

              <div className="ci-modal-footer">
                <a
                  className="ci-primary-button"
                  href={`mailto:${selectedInquiry.email}`}
                >
                  Reply by email
                </a>
                <button
                  type="button"
                  className="ci-clear-button"
                  onClick={() => setSelectedInquiry(null)}
                >
                  Close
                </button>
              </div>
            </section>
          </div>
        )}
      </div>
    </main>
  );
}
