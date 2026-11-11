
"use client";

import { useEffect, useState } from "react";
import "./seo.css";

type SEOPage = {
  _id: string;
  pagePath: string;
  pageName: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  isActive: boolean;
};

const emptyForm = {
  pagePath: "/",
  pageName: "Home",
  metaTitle: "Access Maintenance | Integrated Facilities Service",
  metaDescription:
    "Access Maintenance delivers reliable integrated facilities services, including building operations, maintenance planning, asset management, and workplace support to keep your facilities safe, efficient, and performing at their best.",
  metaKeywords:
    "Access Maintenance, integrated facilities services, facilities management, facility maintenance, building operations, asset management, maintenance planning, workplace maintenance, commercial property maintenance",
  isActive: true,
};

export default function ManageSEOPage() {
  const [seoPages, setSeoPages] = useState<SEOPage[]>([]);
  const [selectedId, setSelectedId] = useState("");
  const [form, setForm] = useState(emptyForm);
  const [isNew, setIsNew] = useState(true);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function loadSEO() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/admin/seo", {
        cache: "no-store",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to load SEO details");
      }

      const pages: SEOPage[] = data.seoPages || [];
      setSeoPages(pages);

      const homePage = pages.find((page) => page.pagePath === "/");

      if (homePage) {
        selectPage(homePage);
      } else {
        setSelectedId("");
        setIsNew(true);
        setForm(emptyForm);
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load SEO details"
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadSEO();
  }, []);

  function selectPage(page: SEOPage) {
    setSelectedId(page._id);
    setIsNew(false);

    setForm({
      pagePath: page.pagePath,
      pageName: page.pageName,
      metaTitle: page.metaTitle,
      metaDescription: page.metaDescription,
      metaKeywords: page.metaKeywords.join(", "),
      isActive: page.isActive,
    });

    setMessage("");
    setError("");
  }

  function startNewPage() {
    setSelectedId("");
    setIsNew(true);
    setForm({
      ...emptyForm,
      pagePath: "",
      pageName: "",
      metaTitle: "",
      metaDescription: "",
      metaKeywords: "",
      isActive: true,
    });

    setMessage("");
    setError("");
  }

  function updateField(
    field: keyof typeof emptyForm,
    value: string | boolean
  ) {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSaving(true);
    setMessage("");
    setError("");

    try {
      const payload = {
        ...form,
        pagePath: form.pagePath.trim(),
        pageName: form.pageName.trim(),
        metaTitle: form.metaTitle.trim(),
        metaDescription: form.metaDescription.trim(),
        metaKeywords: form.metaKeywords
          .split(",")
          .map((keyword) => keyword.trim())
          .filter(Boolean),
      };

      const response = await fetch("/api/admin/seo", {
        method: isNew ? "POST" : "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to save SEO details");
      }

      setMessage(data.message || "SEO details saved successfully.");

      await loadSEO();

      if (data.seoPage) {
        selectPage(data.seoPage);
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to save SEO details"
      );
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <div className="seo-loading">Loading SEO settings...</div>;
  }

  return (
    <div className="seo-admin">
      <div className="seo-admin-header">
        <div>
          <span className="seo-eyebrow">WEBSITE SETTINGS</span>
          <h1>Manage SEO</h1>
          <p>
            Manage search engine titles, descriptions, and keywords for
            individual website pages.
          </p>
        </div>

        <button
          type="button"
          className="seo-new-button"
          onClick={startNewPage}
        >
          + Add page SEO
        </button>
      </div>

      <div className="seo-admin-layout">
        <aside className="seo-pages-panel">
          <div className="seo-panel-heading">
            <h2>Website pages</h2>
            <span>{seoPages.length}</span>
          </div>

          {seoPages.length === 0 ? (
            <p className="seo-empty">
              No SEO records yet. Add your first page below.
            </p>
          ) : (
            <div className="seo-page-list">
              {seoPages.map((page) => (
                <button
                  type="button"
                  key={page._id}
                  className={`seo-page-item ${
                    selectedId === page._id ? "selected" : ""
                  }`}
                  onClick={() => selectPage(page)}
                >
                  <span className="seo-page-item-top">
                    <strong>{page.pageName}</strong>
                    <span
                      className={`seo-status ${
                        page.isActive ? "active" : "inactive"
                      }`}
                    >
                      {page.isActive ? "Active" : "Inactive"}
                    </span>
                  </span>
                  <span className="seo-page-path">{page.pagePath}</span>
                </button>
              ))}
            </div>
          )}
        </aside>

        <section className="seo-editor-panel">
          <div className="seo-editor-heading">
            <div>
              <h2>{isNew ? "Add page SEO" : "Edit page SEO"}</h2>
              <p>These settings will be used for this page on your website.</p>
            </div>
          </div>

          {message && <div className="seo-message success">{message}</div>}
          {error && <div className="seo-message error">{error}</div>}

          <form onSubmit={handleSubmit} className="seo-form">
            <div className="seo-form-grid">
              <div className="seo-field">
                <label htmlFor="pageName">Page name</label>
                <input
                  id="pageName"
                  value={form.pageName}
                  onChange={(event) =>
                    updateField("pageName", event.target.value)
                  }
                  placeholder="Home"
                  required
                />
              </div>

              <div className="seo-field">
                <label htmlFor="pagePath">Page path</label>
                <input
                  id="pagePath"
                  value={form.pagePath}
                  onChange={(event) =>
                    updateField("pagePath", event.target.value)
                  }
                  placeholder="/about-us"
                  required
                  disabled={!isNew}
                />
                <small>Example: /, /about-us, /contact-us</small>
              </div>
            </div>

            <div className="seo-field">
              <label htmlFor="metaTitle">Meta title</label>
              <input
                id="metaTitle"
                value={form.metaTitle}
                onChange={(event) =>
                  updateField("metaTitle", event.target.value)
                }
                placeholder="Enter meta title"
                maxLength={200}
                required
              />
              <small>{form.metaTitle.length}/200 characters</small>
            </div>

            <div className="seo-field">
              <label htmlFor="metaDescription">Meta description</label>
              <textarea
                id="metaDescription"
                value={form.metaDescription}
                onChange={(event) =>
                  updateField("metaDescription", event.target.value)
                }
                placeholder="Describe this page for search results"
                rows={4}
                maxLength={500}
                required
              />
              <small>{form.metaDescription.length}/500 characters</small>
            </div>

            <div className="seo-field">
              <label htmlFor="metaKeywords">Meta keywords</label>
              <textarea
                id="metaKeywords"
                value={form.metaKeywords}
                onChange={(event) =>
                  updateField("metaKeywords", event.target.value)
                }
                placeholder="Facilities management, maintenance, building operations"
                rows={3}
              />
              <small>Separate keywords with commas.</small>
            </div>

            <label className="seo-active-toggle">
              <input
                type="checkbox"
                checked={form.isActive}
                onChange={(event) =>
                  updateField("isActive", event.target.checked)
                }
              />
              <span>
                <strong>Enable these SEO settings</strong>
                <small>
                  Disabled settings will allow the website defaults to be used.
                </small>
              </span>
            </label>

            <div className="seo-form-actions">
              <button
                type="button"
                className="seo-cancel-button"
                onClick={() => {
                  const selected = seoPages.find(
                    (page) => page._id === selectedId
                  );

                  if (selected) {
                    selectPage(selected);
                  } else {
                    startNewPage();
                  }
                }}
              >
                Reset
              </button>

              <button
                type="submit"
                className="seo-save-button"
                disabled={saving}
              >
                {saving
                  ? "Saving..."
                  : isNew
                    ? "Save SEO details"
                    : "Update SEO details"}
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
