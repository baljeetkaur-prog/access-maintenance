
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type DashboardCounts = {
  categories: number | null;
  services: number | null;
  blogs: number | null;
  inquiries: number | null;
};

export default function AdminDashboard() {
const [counts, setCounts] = useState<DashboardCounts>({
  categories: null,
  services: null,
  blogs: null,
  inquiries: null,
});

  useEffect(() => {
    async function fetchDashboardCounts() {
      // Fetch service categories
      try {
      const response = await fetch("/api/categories");

        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }

        const data = await response.json();

        setCounts((previous) => ({
          ...previous,
          categories: Array.isArray(data.categories)
            ? data.categories.length
            : 0,
        }));
      } catch (error) {
        console.error("Dashboard categories count error:", error);
      }

      // Fetch individual services
      try {
       const response = await fetch("/api/admin/services");

        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }

        const data = await response.json();

        setCounts((previous) => ({
          ...previous,
          services: Array.isArray(data.services)
            ? data.services.length
            : 0,
        }));
      } catch (error) {
        console.error("Dashboard services count error:", error);
      }

      // Fetch blog posts
      try {
    const response = await fetch("/api/admin/blogs");

        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await response.json();

        setCounts((previous) => ({
          ...previous,
          blogs: Array.isArray(data.blogs)
            ? data.blogs.length
            : 0,
        }));
      } catch (error) {
        console.error("Dashboard blogs count error:", error);
      }
      // Fetch contact inquiries
try {
  const response = await fetch("/api/admin/contact", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch contact inquiries");
  }

  const data = await response.json();

  setCounts((previous) => ({
    ...previous,
    inquiries: Array.isArray(data.inquiries)
      ? data.inquiries.length
      : 0,
  }));
} catch (error) {
  console.error("Dashboard contact inquiries count error:", error);
}
    }
    

    fetchDashboardCounts();
  }, []);

  return (
    <>
      <div className="admin-welcome">
        <div>
          <span className="admin-welcome-label">OVERVIEW</span>
          <h2>Welcome back!</h2>
          <p>
            Manage your Access Maintenance website from one place.
          </p>
        </div>

        <div className="admin-welcome-mark">AM</div>
      </div>

      <div className="admin-section-heading">
        <div>
          <h2>Website overview</h2>
          <p>Your website management workspace.</p>
        </div>
      </div>

      <div className="admin-stats-grid">
        <article className="admin-stat-card">
          <div className="admin-stat-top">
            <span className="admin-stat-icon lime">▦</span>
            <span className="admin-stat-badge">CONTENT</span>
          </div>
          <h3>Service Categories</h3>
          <div className="admin-stat-value">
            {counts.categories ?? "—"}
          </div>
          <p>Service groups on your website</p>
        </article>

        <article className="admin-stat-card">
          <div className="admin-stat-top">
            <span className="admin-stat-icon blue">▤</span>
            <span className="admin-stat-badge">CONTENT</span>
          </div>
          <h3>Services</h3>
          <div className="admin-stat-value">
            {counts.services ?? "—"}
          </div>
          <p>Individual services managed</p>
        </article>

        <article className="admin-stat-card">
          <div className="admin-stat-top">
            <span className="admin-stat-icon orange">▧</span>
            <span className="admin-stat-badge">CONTENT</span>
          </div>
          <h3>Blog Posts</h3>
          <div className="admin-stat-value">
            {counts.blogs ?? "—"}
          </div>
          <p>Articles managed on your website</p>
        </article>

        <article className="admin-stat-card">
          <div className="admin-stat-top">
            <span className="admin-stat-icon purple">✉</span>
            <span className="admin-stat-badge">ENQUIRIES</span>
          </div>
          <h3>Contact Enquiries</h3>
         <div className="admin-stat-value">
  {counts.inquiries ?? "—"}
</div>
          <p>Messages received from visitors</p>
        </article>
      </div>

      <section className="admin-quick-section">
        <div className="admin-section-heading">
          <div>
            <h2>Quick access</h2>
            <p>Common administration tasks.</p>
          </div>
        </div>

        <div className="admin-quick-grid">
          <Link
            href="/admin/service-categories"
            className="admin-quick-card"
            style={{ textDecoration: "none" }}
          >
            <span className="admin-quick-icon">▦</span>
            <div>
              <h3>Service Categories</h3>
              <p>
                Create and manage service groups and their offerings.
              </p>
            </div>
            <span className="admin-quick-arrow">→</span>
          </Link>

          <Link
            href="/admin/services"
            className="admin-quick-card"
            style={{ textDecoration: "none" }}
          >
            <span className="admin-quick-icon">▤</span>
            <div>
              <h3>Manage Services</h3>
              <p>
                Edit the detailed content of each individual service.
              </p>
            </div>
            <span className="admin-quick-arrow">→</span>
          </Link>

          <Link
            href="/admin/blogs"
            className="admin-quick-card"
            style={{ textDecoration: "none" }}
          >
            <span className="admin-quick-icon">▤</span>
            <div>
              <h3>Manage Blogs</h3>
              <p>Create and maintain website articles.</p>
            </div>
            <span className="admin-quick-arrow">→</span>
          </Link>

          <Link
            href="/admin/contact-inquiries"
            className="admin-quick-card"
            style={{ textDecoration: "none" }}
          >
            <span className="admin-quick-icon">✉</span>
            <div>
              <h3>View Enquiries</h3>
              <p>Review messages sent through your website.</p>
            </div>
            <span className="admin-quick-arrow">→</span>
          </Link>
        </div>
      </section>

      <footer className="admin-dashboard-footer">
        Access Maintenance Admin Panel
        <span>Secure administration workspace</span>
      </footer>
    </>
  );
}
