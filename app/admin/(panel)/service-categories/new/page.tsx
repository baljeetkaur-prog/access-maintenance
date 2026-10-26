
"use client";

import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "../service-categories.css";
import "./new-category.css";
import { slugify } from "@/lib/slugify";

type TextSection = {
  heading: string;
  paragraph: string;
};

type ServiceItem = {
  name: string;
  paragraph: string;
  link: string;
};

const emptyTextSection = (): TextSection => ({
  heading: "",
  paragraph: "",
});

const emptyService = (): ServiceItem => ({
  name: "",
  paragraph: "",
  link: "",
});


export default function NewServiceCategoryPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");

  const [overview, setOverview] = useState({
    heading: "",
    paragraph: "",
  });

const [services, setServices] = useState<ServiceItem[]>([
  emptyService(),
]);

const [expandedServices, setExpandedServices] = useState<number[]>([0]);

function toggleService(index: number) {
  setExpandedServices((previous) =>
    previous.includes(index)
      ? previous.filter((item) => item !== index)
      : [...previous, index]
  );
}

function addService() {
  const newIndex = services.length;

  setServices((previous) => [...previous, emptyService()]);
  setExpandedServices([newIndex]);
}

function removeService(index: number) {
  setServices((previous) => previous.filter((_, i) => i !== index));

  setExpandedServices((previous) =>
    previous
      .filter((item) => item !== index)
      .map((item) => (item > index ? item - 1 : item))
  );
}

const [expandedScope, setExpandedScope] = useState<number[]>([0]);
const [expandedDelivery, setExpandedDelivery] = useState<number[]>([0]);

function toggleScope(index: number) {
  setExpandedScope((previous) =>
    previous.includes(index)
      ? previous.filter((item) => item !== index)
      : [...previous, index]
  );
}

function addScope() {
  const newIndex = scope.length;

  setScope((previous) => [...previous, emptyTextSection()]);
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


  const [scope, setScope] = useState<TextSection[]>([
    emptyTextSection(),
  ]);

  const [deliveryProcess, setDeliveryProcess] = useState<TextSection[]>(
    Array.from({ length: 4 }, emptyTextSection)
  );

  const [firstConversation, setFirstConversation] = useState<string[]>([
    "",
    "",
    "",
    "",
  ]);
  const [isActive, setIsActive] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  useEffect(() => {
  setName("");
  setShortDescription("");
  setImage(null);
  setImagePreview("");

  setOverview({
    heading: "",
    paragraph: "",
  });

setServices([emptyService()]);
setExpandedServices([0]);

setScope([emptyTextSection()]);
setExpandedScope([0]);

setDeliveryProcess(Array.from({ length: 4 }, emptyTextSection));
setExpandedDelivery([0]);
  setFirstConversation(["", "", "", ""]);
  setIsActive(true);

  setError("");
  setSuccess("");
}, []);

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file.");
      event.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("The image must be 5 MB or smaller.");
      event.target.value = "";
      return;
    }

    setError("");
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  }

function updateService(
  index: number,
  field: keyof ServiceItem,
  value: string
) {
  setServices((previous) =>
    previous.map((item, i) => {
      if (i !== index) return item;

      const updatedItem = { ...item, [field]: value };

      if (field === "name") {
        updatedItem.link = value.trim()
          ? `/services/${slugify(value)}`
          : "";
      }

      return updatedItem;
    })
  );
}

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

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!image) {
      setError("Please upload a category image.");
      return;
    }

    if (
      services.some(
        (item) => !item.name.trim() || !item.paragraph.trim()
      )
    ) {
      setError("Complete the name and description for every service.");
      return;
    }

    if (
      scope.some(
        (item) => !item.heading.trim() || !item.paragraph.trim()
      )
    ) {
      setError("Complete every scope section.");
      return;
    }

    if (
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

    if (!overview.heading.trim() || !overview.paragraph.trim()) {
      setError("Complete the overview heading and paragraph.");
      return;
    }

    setSaving(true);

    try {
      const formData = new FormData();

      formData.append(
        "data",
        JSON.stringify({
          name: name.trim(),
          shortDescription: shortDescription.trim(),
          overview,
         services: services.map((service) => ({
  ...service,
  link: service.name.trim()
    ? `/services/${slugify(service.name)}`
    : "",
})),
          scope,
          deliveryProcess,
          firstConversation,
          isActive,
        })
      );

      formData.append("image", image);

      const response = await fetch("/api/admin/service-categories", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.status === 401) {
        router.push("/admin/login");
        return;
      }

      if (!response.ok) {
        throw new Error(result.message || "Unable to save the category.");
      }

   router.replace("/admin/service-categories");
router.refresh();
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

  return (
    <main className="new-category-page">
      <div className="new-category-top">
        <div>
          <p className="category-eyebrow">ADMIN PANEL</p>
          <h1>Add Service Category</h1>
          <p>Create and manage the content for a main service category.</p>
        </div>

        <Link
          href="/admin/service-categories"
          className="category-back-button"
        >
          Back to Categories
        </Link>
      </div>

      {error && <div className="category-alert category-alert-error">{error}</div>}
      {success && (
        <div className="category-alert category-alert-success">{success}</div>
      )}

      <form onSubmit={handleSubmit} className="new-category-form">
        <section className="category-form-section">
          <h2>Basic Information</h2>

          <div className="category-form-grid">
            <div className="category-field">
              <label htmlFor="category-name">Category Name *</label>
              <input
                id="category-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Technical & Trade Services"
                required
              />
              <small>
                The URL slug will be generated automatically from this name.
              </small>
            </div>

            <div className="category-field">
              <label htmlFor="category-status">Status</label>
              <select
                id="category-status"
                value={isActive ? "active" : "inactive"}
                onChange={(e) => setIsActive(e.target.value === "active")}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            <div className="category-field category-field-full">
              <label htmlFor="short-description">Short Description *</label>
              <textarea
                id="short-description"
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
                placeholder="Write a short introduction for this category."
                rows={3}
                required
              />
            </div>

            <div className="category-field category-field-full">
              <label htmlFor="category-image">Category Image *</label>
              <input
                id="category-image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
              <small>Maximum file size: 5 MB.</small>

              {imagePreview && (
                <div className="category-image-preview">
                  <img src={imagePreview} alt="Category preview" />
                  <span>{image?.name}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="category-form-section">
          <h2>Overview</h2>

          <div className="category-field">
            <label>Overview Heading *</label>
            <input
              value={overview.heading}
              onChange={(e) =>
                setOverview({ ...overview, heading: e.target.value })
              }
              placeholder="Overview heading"
              required
            />
          </div>

          <div className="category-field category-field-spaced">
            <label>Overview Paragraph *</label>
            <textarea
              value={overview.paragraph}
              onChange={(e) =>
                setOverview({ ...overview, paragraph: e.target.value })
              }
              rows={5}
              placeholder="Describe this service category."
              required
            />
          </div>
        </section>

        <section className="category-form-section">
          <div className="category-section-heading">
            <div>
              <h2>Services</h2>
              <p>Add the individual services included in this category.</p>
            </div>

      <button
  type="button"
  className="category-add-button"
  onClick={addService}
>
  + Add Service
</button>
          </div>

     
{services.map((service, index) => {
  const isExpanded = expandedServices.includes(index);

  return (
    <div
      className={`category-repeat-card category-service-card ${
        isExpanded ? "is-expanded" : "is-collapsed"
      }`}
      key={index}
    >
      <div className="category-service-header">
        <button
          type="button"
          className="category-service-toggle"
          onClick={() => toggleService(index)}
          aria-expanded={isExpanded}
        >
          <span className="category-service-number">
            {index + 1}
          </span>

          <span className="category-service-title">
            {service.name.trim() || `New Service ${index + 1}`}
          </span>

          <span className="category-service-symbol">
            {isExpanded ? "−" : "+"}
          </span>
        </button>

        {services.length > 1 && (
          <button
            type="button"
            className="category-remove-button"
            onClick={() => removeService(index)}
          >
            Remove
          </button>
        )}
      </div>

      {isExpanded && (
        <div className="category-service-content">
          <div className="category-field">
            <label>Service Name *</label>
            <input
              value={service.name}
              onChange={(e) =>
                updateService(index, "name", e.target.value)
              }
              placeholder="e.g. Electrical Maintenance"
              required
            />
          </div>

          <div className="category-field category-field-spaced">
            <label>Description *</label>
            <textarea
              value={service.paragraph}
              onChange={(e) =>
                updateService(index, "paragraph", e.target.value)
              }
              rows={3}
              placeholder="Describe this service."
              required
            />
          </div>

          <div className="category-field category-field-spaced">
            <label>Generated Service URL</label>
            <input
              value={
                service.name.trim()
                  ? `/services/${slugify(service.name)}`
                  : ""
              }
              placeholder="Enter a service name to generate its URL"
              readOnly
            />
            <small>
              This link is generated automatically from the service name.
            </small>
          </div>
        </div>
      )}
    </div>
  );
})}

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
                onChange={(e) =>
                  updateScope(index, "heading", e.target.value)
                }
                placeholder="Enter scope heading"
                required
              />
            </div>

            <div className="category-field category-field-spaced">
              <label>Paragraph *</label>
              <textarea
                value={item.paragraph}
                onChange={(e) =>
                  updateScope(index, "paragraph", e.target.value)
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
    Enter exactly four steps. Each step needs a heading and paragraph.
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
                onChange={(e) =>
                  updateDelivery(index, "heading", e.target.value)
                }
                placeholder={`Enter heading for step ${index + 1}`}
                required
              />
            </div>

            <div className="category-field category-field-spaced">
              <label>Step Description *</label>
              <textarea
                value={step.paragraph}
                onChange={(e) =>
                  updateDelivery(index, "paragraph", e.target.value)
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
            Add exactly four points to explain what happens during the first
            conversation.
          </p>

          <div className="category-form-grid">
            {firstConversation.map((point, index) => (
              <div className="category-field" key={index}>
                <label>Point {index + 1} *</label>
                <textarea
                  value={point}
                  onChange={(e) =>
                    setFirstConversation((previous) =>
                      previous.map((item, i) =>
                        i === index ? e.target.value : item
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
          <Link
            href="/admin/service-categories"
            className="category-cancel-button"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="category-save-button"
            disabled={saving}
          >
            {saving ? "Saving Category..." : "Save Category"}
          </button>
        </div>
      </form>
    </main>
  );
}
