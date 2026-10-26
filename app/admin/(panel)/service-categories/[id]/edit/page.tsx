
"use client";

import {
  useCallback,
  useEffect,
  Suspense,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import "../../service-categories.css";
import "../../new/new-category.css";
import { slugify } from "@/lib/slugify";

type TextSection = {
  heading: string;
  paragraph: string;
};

type ServiceItem = {
  _id?: string;
  name: string;
  paragraph: string;
  link: string;
};

type FAQ = {
  question: string;
  answer: string;
};

type CategoryData = {
  _id: string;
  name: string;
  slug: string;
  shortDescription: string;
  image: { url: string; publicId: string };
  overview: TextSection;
  services: ServiceItem[];
  scope: TextSection[];
  deliveryProcess: TextSection[];
  firstConversation: string[];
  questions: FAQ[];
  isActive: boolean;
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

const emptyFAQ = (): FAQ => ({
  question: "",
  answer: "",
});

export default function EditServiceCategoryPage() {
  return (
    <Suspense fallback={<div>Loading category...</div>}>
      <EditServiceCategoryForm />
    </Suspense>
  );
}

function EditServiceCategoryForm() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const id = params.id;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [currentImage, setCurrentImage] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");

  const [overview, setOverview] = useState<TextSection>({
    heading: "",
    paragraph: "",
  });
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [scope, setScope] = useState<TextSection[]>([]);
  const [deliveryProcess, setDeliveryProcess] =
    useState<TextSection[]>(Array.from({ length: 4 }, emptyTextSection));
  const [firstConversation, setFirstConversation] = useState<string[]>([
    "",
    "",
    "",
    "",
  ]);
  const [questions, setQuestions] = useState<FAQ[]>([]);
  const [isActive, setIsActive] = useState(true);

  const fetchCategory = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `/api/admin/service-categories/${id}`,
        {
          credentials: "same-origin",
          cache: "no-store",
        }
      );

      const result = await response.json();

      if (response.status === 401) {
        router.replace("/admin/login");
        return;
      }

      if (!response.ok) {
        throw new Error(
          result.message || "Failed to load service category."
        );
      }

      const category: CategoryData = result.category;

      setName(category.name || "");
      setShortDescription(category.shortDescription || "");
      setCurrentImage(category.image?.url || "");
      setImagePreview(category.image?.url || "");
      setOverview(category.overview || emptyTextSection());
      setServices(category.services?.length ? category.services : []);
      setScope(category.scope?.length ? category.scope : []);
      setDeliveryProcess(
        category.deliveryProcess?.length === 4
          ? category.deliveryProcess
          : Array.from({ length: 4 }, emptyTextSection)
      );
      setFirstConversation(
        category.firstConversation?.length === 4
          ? category.firstConversation
          : ["", "", "", ""]
      );
      setQuestions(category.questions?.length ? category.questions : []);
      setIsActive(category.isActive !== false);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to load service category."
      );
    } finally {
      setLoading(false);
    }
  }, [id, router]);

  useEffect(() => {
    void fetchCategory();
  }, [fetchCategory]);

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
    previous.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    )
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

  function updateFAQ(index: number, field: keyof FAQ, value: string) {
    setQuestions((previous) =>
      previous.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

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

    if (
      questions.some(
        (item) => !item.question.trim() || !item.answer.trim()
      )
    ) {
      setError("Complete both the question and answer for every FAQ.");
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
  link: service.link || "",
})),
          scope,
          deliveryProcess,
          firstConversation,
          questions,
          isActive,
        })
      );

      // Only send an image if the admin selected a replacement.
      if (image) {
        formData.append("image", image);
      }

      const response = await fetch(
        `/api/admin/service-categories/${id}`,
        {
          method: "PATCH",
          body: formData,
        }
      );

      const result = await response.json();

      if (response.status === 401) {
        router.replace("/admin/login");
        return;
      }

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to update the category."
        );
      }

      router.push("/admin/service-categories");
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while updating."
      );
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <main className="new-category-page">
        <p>Loading category details...</p>
      </main>
    );
  }

  return (
    <main className="new-category-page">
      <div className="new-category-top">
        <div>
          <p className="category-eyebrow">ADMIN PANEL</p>
          <h1>Edit Service Category</h1>
          <p>Update the category information and website content.</p>
        </div>

        <Link
          href="/admin/service-categories"
          className="category-back-button"
        >
          Back to Categories
        </Link>
      </div>

      {error && (
        <div className="category-alert category-alert-error" role="alert">
          {error}
        </div>
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
                required
              />
              <small>The URL slug is generated automatically.</small>
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
                rows={3}
                required
              />
            </div>

            <div className="category-field category-field-full">
              <label htmlFor="category-image">Replace Category Image</label>

              {imagePreview && (
                <div className="category-image-preview">
                  <img src={imagePreview} alt="Category preview" />
                  <span>
                    {image ? image.name : "Current category image"}
                  </span>
                </div>
              )}

              <input
                id="category-image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />

              <small>
                Leave empty to keep the existing image. Maximum size: 5 MB.
              </small>
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
              required
            />
          </div>
        </section>

        <section className="category-form-section">
          <div className="category-section-heading">
            <div>
              <h2>Services</h2>
              <p>Manage the services included in this category.</p>
            </div>
            <button
              type="button"
              className="category-add-button"
              onClick={() => setServices((prev) => [...prev, emptyService()])}
            >
              + Add Service
            </button>
          </div>

          {services.map((service, index) => (
            <div className="category-repeat-card" key={index}>
              <div className="category-repeat-heading">
                <h3>Service {index + 1}</h3>
                <button
                  type="button"
                  className="category-remove-button"
                  onClick={() =>
                    setServices((prev) => prev.filter((_, i) => i !== index))
                  }
                >
                  Remove
                </button>
              </div>

              <div className="category-field">
                <label>Service Name *</label>
                <input
                  value={service.name}
                  onChange={(e) =>
                    updateService(index, "name", e.target.value)
                  }
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
                  readOnly
                />
              </div>
            </div>
          ))}
        </section>

        <section className="category-form-section">
          <div className="category-section-heading">
            <div>
              <h2>Scope of Services</h2>
              <p>Manage scope headings and descriptions.</p>
            </div>
            <button
              type="button"
              className="category-add-button"
              onClick={() => setScope((prev) => [...prev, emptyTextSection()])}
            >
              + Add Section
            </button>
          </div>

          {scope.map((item, index) => (
            <div className="category-repeat-card" key={index}>
              <div className="category-repeat-heading">
                <h3>Scope Section {index + 1}</h3>
                <button
                  type="button"
                  className="category-remove-button"
                  onClick={() =>
                    setScope((prev) => prev.filter((_, i) => i !== index))
                  }
                >
                  Remove
                </button>
              </div>

              <div className="category-field">
                <label>Heading *</label>
                <input
                  value={item.heading}
                  onChange={(e) =>
                    updateScope(index, "heading", e.target.value)
                  }
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
                  required
                />
              </div>
            </div>
          ))}
        </section>

        <section className="category-form-section">
          <h2>Delivery Process</h2>
          <p className="category-section-description">
            Exactly four steps are required.
          </p>

          {deliveryProcess.map((step, index) => (
            <div className="category-repeat-card" key={index}>
              <h3>Step {index + 1}</h3>
              <div className="category-field">
                <label>Step Heading *</label>
                <input
                  value={step.heading}
                  onChange={(e) =>
                    updateDelivery(index, "heading", e.target.value)
                  }
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
                  required
                />
              </div>
            </div>
          ))}
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
                  onChange={(e) =>
                    setFirstConversation((prev) =>
                      prev.map((item, i) =>
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

        <section className="category-form-section">
          <div className="category-section-heading">
            <div>
              <h2>Frequently Asked Questions</h2>
              <p>Manage the questions and answers for this category.</p>
            </div>
            <button
              type="button"
              className="category-add-button"
              onClick={() => setQuestions((prev) => [...prev, emptyFAQ()])}
            >
              + Add FAQ
            </button>
          </div>

          {questions.map((faq, index) => (
            <div className="category-repeat-card" key={index}>
              <div className="category-repeat-heading">
                <h3>FAQ {index + 1}</h3>
                <button
                  type="button"
                  className="category-remove-button"
                  onClick={() =>
                    setQuestions((prev) => prev.filter((_, i) => i !== index))
                  }
                >
                  Remove
                </button>
              </div>

              <div className="category-field">
                <label>Question *</label>
                <input
                  value={faq.question}
                  onChange={(e) =>
                    updateFAQ(index, "question", e.target.value)
                  }
                  required
                />
              </div>

              <div className="category-field category-field-spaced">
                <label>Answer *</label>
                <textarea
                  value={faq.answer}
                  onChange={(e) =>
                    updateFAQ(index, "answer", e.target.value)
                  }
                  rows={3}
                  required
                />
              </div>
            </div>
          ))}
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
            {saving ? "Updating Category..." : "Update Category"}
          </button>
        </div>
      </form>
    </main>
  );
}
