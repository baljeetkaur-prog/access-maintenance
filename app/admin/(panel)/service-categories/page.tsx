
"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./service-categories.css";

type ServiceCategory = {
  _id: string;
  name: string;
  slug: string;
  shortDescription: string;
  image?: {
    url: string;
    publicId: string;
  };
  isActive: boolean;
  createdAt?: string;
};

export default function ServiceCategoriesPage() {
  const router = useRouter();

  const [categories, setCategories] = useState<ServiceCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const fetchCategories = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/admin/service-categories", {
        method: "GET",
        credentials: "same-origin",
        cache: "no-store",
      });

      const result = await response.json();

      if (response.status === 401) {
        router.replace("/admin/login");
        return;
      }

      if (!response.ok) {
        throw new Error(
          result.message || "Failed to load service categories."
        );
      }

      setCategories(result.categories || []);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while loading categories."
      );
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    void fetchCategories();
  }, [fetchCategories]);

  async function handleDelete(category: ServiceCategory) {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${category.name}"? This action cannot be undone.`
    );

    if (!confirmed) return;

    try {
      setDeletingId(category._id);
      setError("");

      const response = await fetch(
        `/api/admin/service-categories/${category._id}`,
        {
          method: "DELETE",
          credentials: "same-origin",
        }
      );

      const result = await response.json();

      if (response.status === 401) {
        router.replace("/admin/login");
        return;
      }

      if (!response.ok) {
        throw new Error(result.message || "Failed to delete category.");
      }

      setCategories((current) =>
        current.filter((item) => item._id !== category._id)
      );
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while deleting the category."
      );
    } finally {
      setDeletingId(null);
    }
  }

  const filteredCategories = categories.filter((category) => {
    const searchText = search.toLowerCase();

    return (
      category.name.toLowerCase().includes(searchText) ||
      category.slug.toLowerCase().includes(searchText) ||
      category.shortDescription.toLowerCase().includes(searchText)
    );
  });

  return (
    <main className="service-categories-page">
      <div className="service-categories-container">
        <div className="service-categories-breadcrumb">
          <Link href="/admin/dashboard">Dashboard</Link>
          <span>/</span>
          <span>Service Categories</span>
        </div>

        <div className="service-categories-header">
          <div>
            <h1>Service Categories</h1>
            <p>
              Manage your service categories and their website content.
            </p>
          </div>

          <Link
            href="/admin/service-categories/new"
            className="sc-primary-button"
          >
            <span>+</span> Add Category
          </Link>
        </div>

        <div className="sc-summary-card">
          <div className="sc-summary-icon">SC</div>
          <div>
            <p>Total Categories</p>
            <h2>{categories.length}</h2>
          </div>
        </div>

        <div className="sc-table-card">
          <div className="sc-table-toolbar">
            <div>
              <h2>All Categories</h2>
              <p>View and manage your service categories.</p>
            </div>

            <input
              type="search"
              placeholder="Search categories..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search service categories"
            />
          </div>

          {error && (
            <div className="sc-error-message" role="alert">
              {error}
              <button type="button" onClick={() => void fetchCategories()}>
                Try again
              </button>
            </div>
          )}

          {loading ? (
            <div className="sc-state-message">
              Loading service categories...
            </div>
          ) : filteredCategories.length === 0 ? (
            <div className="sc-empty-state">
              <div className="sc-empty-icon">SC</div>
              <h3>
                {search
                  ? "No matching categories"
                  : "No service categories yet"}
              </h3>
              <p>
                {search
                  ? "Try another search term."
                  : "Create your first category to get started."}
              </p>

              {!search && (
                <Link
                  href="/admin/service-categories/new"
                  className="sc-primary-button"
                >
                  Add Your First Category
                </Link>
              )}
            </div>
          ) : (
            <div className="sc-table-wrapper">
              <table className="sc-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Slug</th>
                    <th>Status</th>
                    <th>Created</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredCategories.map((category) => (
                    <tr key={category._id}>
                      <td>
                        <div className="sc-category-cell">
                          {category.image?.url ? (
                            <img
                              src={category.image.url}
                              alt={category.name}
                              className="sc-category-image"
                            />
                          ) : (
                            <div className="sc-image-placeholder">SC</div>
                          )}

                          <div className="sc-category-info">
                            <strong>{category.name}</strong>
                            <span>{category.shortDescription}</span>
                          </div>
                        </div>
                      </td>

                      <td>
                        <code className="sc-slug">{category.slug}</code>
                      </td>

                      <td>
                        <span
                          className={`sc-status ${
                            category.isActive ? "is-active" : "is-inactive"
                          }`}
                        >
                          {category.isActive ? "Active" : "Inactive"}
                        </span>
                      </td>

                      <td>
                        {category.createdAt
                          ? new Date(category.createdAt).toLocaleDateString(
                              "en-GB",
                              {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              }
                            )
                          : "—"}
                      </td>

                      <td>
                        <div className="sc-actions">
                          <Link
                            href={`/admin/service-categories/${category._id}/edit`}
                            className="sc-edit-button"
                          >
                            Edit
                          </Link>

                          <button
                            type="button"
                            className="sc-delete-button"
                            disabled={deletingId === category._id}
                            onClick={() => void handleDelete(category)}
                          >
                            {deletingId === category._id
                              ? "Deleting..."
                              : "Delete"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {!loading && filteredCategories.length > 0 && (
            <div className="sc-table-footer">
              Showing {filteredCategories.length} of {categories.length}{" "}
              categories
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
