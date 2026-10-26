
"use client";

import { useCallback, useEffect, useState, type FormEvent } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import "../../../../service-categories/new/new-category.css";

type TextSection = {
  heading: string;
  paragraph: string;
};

type ServiceData = {
  _id: string;
  categoryId: string;
  categoryName: string;
  name: string;
paragraph: string;
link: string;
  overview: TextSection;
  scope: TextSection[];
  deliveryProcess: TextSection[];
  firstConversation: string[];
  isActive: boolean;
};

const emptySection = (): TextSection => ({
  heading: "",
  paragraph: "",
});

const fourEmptySections = () =>
  Array.from({ length: 4 }, emptySection);

const fourEmptyPoints = () => ["", "", "", ""];

export default function EditIndividualServicePage() {
  const params = useParams<{
    categoryId: string;
    serviceId: string;
  }>();

  const router = useRouter();
  const { categoryId, serviceId } = params;

  const [service, setService] = useState<ServiceData | null>(null);
const [paragraph, setParagraph] = useState("");
  const [overview, setOverview] = useState<TextSection>(emptySection());
  const [scope, setScope] = useState<TextSection[]>([]);
  const [expandedScope, setExpandedScope] = useState<number[]>([0]);

const [expandedDelivery, setExpandedDelivery] = useState<number[]>([0]);
  const [deliveryProcess, setDeliveryProcess] =
    useState<TextSection[]>(fourEmptySections());
  const [firstConversation, setFirstConversation] =
    useState<string[]>(fourEmptyPoints());
  const [isActive, setIsActive] = useState(true);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const apiUrl =
    `/api/admin/services/${categoryId}/${serviceId}`;

  const fetchService = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(apiUrl, {
        credentials: "same-origin",
        cache: "no-store",
      });

      const result = await response.json();

      if (response.status === 401) {
        router.replace("/admin/login");
        return;
      }

      if (!response.ok) {
        throw new Error(result.message || "Failed to load service.");
      }

      const item: ServiceData = result.service;

      setService(item);
     setParagraph(item.paragraph || "");
      setOverview(item.overview || emptySection());
      setScope(item.scope || []);
      setExpandedScope(item.scope?.length ? [0] : []);
      setDeliveryProcess(
        item.deliveryProcess?.length === 4
          ? item.deliveryProcess
          : fourEmptySections()
      );
      setExpandedDelivery([0]);
      setFirstConversation(
        item.firstConversation?.length === 4
          ? item.firstConversation
          : fourEmptyPoints()
      );
      setIsActive(item.isActive !== false);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load service."
      );
    } finally {
      setLoading(false);
    }
  }, [apiUrl, router]);

  useEffect(() => {
    void fetchService();
  }, [fetchService]);

  function updateScope(
    index: number,
    field: keyof TextSection,
    value: string
  ) {
    setScope((previous) =>
      previous.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  }

  function updateDelivery(
    index: number,
    field: keyof TextSection,
    value: string
  ) {
    setDeliveryProcess((previous) =>
      previous.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  }
  function toggleScope(index: number) {
  setExpandedScope((previous) =>
    previous.includes(index)
      ? previous.filter((item) => item !== index)
      : [...previous, index]
  );
}

function addScope() {
  const newIndex = scope.length;

  setScope((previous) => [...previous, emptySection()]);
  setExpandedScope([newIndex]);
}

function removeScope(index: number) {
  setScope((previous) => previous.filter((_, i) => i !== index));

  setExpandedScope((previous) =>
    previous
      .filter((item) => item !== index)
      .map((item) => (item > index ? item - 1 : item))
  );
}

function toggleDelivery(index: number) {
  setExpandedDelivery((previous) =>
    previous.includes(index)
      ? previous.filter((item) => item !== index)
      : [...previous, index]
  );
}

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");

if (!paragraph.trim()) {
  setError("Enter a short description.");
  return;
}

    if (!overview.heading.trim() || !overview.paragraph.trim()) {
      setError("Complete the overview heading and paragraph.");
      return;
    }

    if (
      scope.some(
        (item) => !item.heading.trim() || !item.paragraph.trim()
      )
    ) {
      setError("Complete both fields in every scope section.");
      return;
    }

    if (
      deliveryProcess.length !== 4 ||
      deliveryProcess.some(
        (item) => !item.heading.trim() || !item.paragraph.trim()
      )
    ) {
      setError("Complete all 4 delivery steps.");
      return;
    }

    if (firstConversation.some((point) => !point.trim())) {
      setError("Complete all 4 first-conversation points.");
      return;
    }

    setSaving(true);

    try {
      const response = await fetch(apiUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         paragraph,
overview,
          scope,
          deliveryProcess,
          firstConversation,
          isActive,
        }),
      });

      const result = await response.json();

      if (response.status === 401) {
        router.replace("/admin/login");
        return;
      }

      if (!response.ok) {
        throw new Error(
          result.message || "Failed to update service content."
        );
      }

      setSuccess("Service content saved successfully.");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while saving."
      );
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <main className="new-category-page">
        <p>Loading service content...</p>
      </main>
    );
  }

  if (!service) {
    return (
      <main className="new-category-page">
        <div className="category-alert category-alert-error">
          {error || "Service could not be found."}
        </div>
        <Link href="/admin/services" className="category-back-button">
          Back to Services
        </Link>
      </main>
    );
  }

  return (
    <main className="new-category-page">
      <div className="new-category-top">
        <div>
          <p className="category-eyebrow">ADMIN PANEL</p>
          <h1>Edit Service Content</h1>
          <p>
            {service.categoryName} / {service.name}
          </p>
        </div>

        <Link href="/admin/services" className="category-back-button">
          Back to Services
        </Link>
      </div>

      {error && (
        <div className="category-alert category-alert-error" role="alert">
          {error}
        </div>
      )}

      {success && (
        <div className="category-alert" role="status">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="new-category-form">
        <section className="category-form-section">
          <h2>Service Information</h2>

          <div className="category-field">
            <label>Service Name</label>
            <input value={service.name} readOnly />
          </div>

          <div className="category-field category-field-spaced">
            <label>Parent Category</label>
            <input value={service.categoryName} readOnly />
          </div>

          <div className="category-field category-field-spaced">
            <label>Existing Service URL</label>
            <input value={service.link || ""} readOnly />
          </div>

          <div className="category-field category-field-spaced">
            <label htmlFor="service-status">Status</label>
            <select
              id="service-status"
              value={isActive ? "active" : "inactive"}
              onChange={(event) =>
                setIsActive(event.target.value === "active")
              }
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

 <div className="category-field category-field-spaced">
  <label htmlFor="service-short-description">
    Short Description *
  </label>
  <textarea
    id="service-short-description"
    value={paragraph}
    onChange={(event) => setParagraph(event.target.value)}
    rows={3}
    required
  />
</div>
        </section>

        <section className="category-form-section">
          <h2>Overview</h2>

          <div className="category-field">
            <label>Overview Heading *</label>
            <input
              value={overview.heading}
              onChange={(event) =>
                setOverview({ ...overview, heading: event.target.value })
              }
              required
            />
          </div>

          <div className="category-field category-field-spaced">
            <label>Overview Paragraph *</label>
            <textarea
              value={overview.paragraph}
              onChange={(event) =>
                setOverview({ ...overview, paragraph: event.target.value })
              }
              rows={5}
              required
            />
          </div>
        </section>

     
<section className="category-form-section">
  <div className="category-section-heading">
    <div>
      <h2>Scope of Services</h2>
      <p>Add headings and descriptions for the scope sections.</p>
    </div>

    <button
      type="button"
      className="category-add-button"
      onClick={addScope}
    >
      + Add Section
    </button>
  </div>

  {scope.map((item, index) => {
    const isExpanded = expandedScope.includes(index);

    return (
      <div
        className={`category-repeat-card category-collapsible-card ${
          isExpanded ? "is-expanded" : "is-collapsed"
        }`}
        key={index}
      >
        <div className="category-collapsible-header">
          <button
            type="button"
            className="category-collapsible-toggle"
            onClick={() => toggleScope(index)}
            aria-expanded={isExpanded}
          >
            <span className="category-service-number">
              {index + 1}
            </span>

            <span className="category-service-title">
              {item.heading.trim() || `Scope Section ${index + 1}`}
            </span>

            <span className="category-service-symbol">
              {isExpanded ? "−" : "+"}
            </span>
          </button>

          {scope.length > 1 && (
            <button
              type="button"
              className="category-remove-button"
              onClick={() => removeScope(index)}
            >
              Remove
            </button>
          )}
        </div>

        {isExpanded && (
          <div className="category-collapsible-content">
            <div className="category-field">
              <label>Heading *</label>
              <input
                value={item.heading}
                onChange={(event) =>
                  updateScope(index, "heading", event.target.value)
                }
                placeholder="Enter scope heading"
                required
              />
            </div>

            <div className="category-field category-field-spaced">
              <label>Paragraph *</label>
              <textarea
                value={item.paragraph}
                onChange={(event) =>
                  updateScope(index, "paragraph", event.target.value)
                }
                rows={3}
                placeholder="Describe this scope section."
                required
              />
            </div>
          </div>
        )}
      </div>
    );
  })}
</section>


    
<section className="category-form-section">
  <h2>Delivery Process</h2>
  <p className="category-section-description">
    Exactly four steps are required.
  </p>

  {deliveryProcess.map((step, index) => {
    const isExpanded = expandedDelivery.includes(index);

    return (
      <div
        className={`category-repeat-card category-collapsible-card ${
          isExpanded ? "is-expanded" : "is-collapsed"
        }`}
        key={index}
      >
        <div className="category-collapsible-header">
          <button
            type="button"
            className="category-collapsible-toggle"
            onClick={() => toggleDelivery(index)}
            aria-expanded={isExpanded}
          >
            <span className="category-service-number">
              {index + 1}
            </span>

            <span className="category-service-title">
              {step.heading.trim() || `Step ${index + 1}`}
            </span>

            <span className="category-service-symbol">
              {isExpanded ? "−" : "+"}
            </span>
          </button>
        </div>

        {isExpanded && (
          <div className="category-collapsible-content">
            <div className="category-field">
              <label>Step Heading *</label>
              <input
                value={step.heading}
                onChange={(event) =>
                  updateDelivery(index, "heading", event.target.value)
                }
                placeholder={`Enter heading for step ${index + 1}`}
                required
              />
            </div>

            <div className="category-field category-field-spaced">
              <label>Step Description *</label>
              <textarea
                value={step.paragraph}
                onChange={(event) =>
                  updateDelivery(index, "paragraph", event.target.value)
                }
                rows={3}
                placeholder="Describe this delivery step."
                required
              />
            </div>
          </div>
        )}
      </div>
    );
  })}
</section>


        <section className="category-form-section">
          <h2>First Conversation</h2>
          <p className="category-section-description">
            Exactly four points are required.
          </p>

          <div className="category-form-grid">
            {firstConversation.map((point, index) => (
              <div className="category-field" key={index}>
                <label>Point {index + 1} *</label>
                <textarea
                  value={point}
                  onChange={(event) =>
                    setFirstConversation((previous) =>
                      previous.map((item, i) =>
                        i === index ? event.target.value : item
                      )
                    )
                  }
                  rows={3}
                  required
                />
              </div>
            ))}
          </div>
        </section>

        <div className="new-category-actions">
          <Link href="/admin/services" className="category-cancel-button">
            Cancel
          </Link>

          <button
            type="submit"
            className="category-save-button"
            disabled={saving}
          >
            {saving ? "Saving Content..." : "Save Service Content"}
          </button>
        </div>
      </form>
    </main>
  );
}
