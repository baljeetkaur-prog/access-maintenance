
"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import "./(panel)/dashboard/dashboard.css";

type Props = {
  email: string;
  children: React.ReactNode;
};

export default function AdminLayout({ email, children }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);

    try {
      const response = await fetch("/api/admin/logout", {
        method: "POST",
      });

      if (response.ok) {
        router.replace("/admin/login");
        router.refresh();
      } else {
        alert("Unable to log out. Please try again.");
        setLoggingOut(false);
      }
    } catch {
      alert("Unable to connect. Please try again.");
      setLoggingOut(false);
    }
  }

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
    <Link href="/admin/dashboard" className="admin-sidebar-brand">
  <img
    src="/images/access-logo.png"
    alt="Access Maintenance"
    className="admin-sidebar-logo"
  />
</Link>

         <div className="admin-sidebar-label">MAIN MENU</div>

        <nav className="admin-sidebar-nav">
          <Link
            href="/admin/dashboard"
            className={`admin-nav-link ${
              pathname === "/admin/dashboard" ? "active" : ""
            }`}
          >
            <span className="admin-nav-icon">▦</span>
            Dashboard
          </Link>

          <Link
            href="/admin/service-categories"
            className={`admin-nav-link ${
              pathname.startsWith("/admin/service-categories")
                ? "active"
                : ""
            }`}
          >
            <span className="admin-nav-icon">▤</span>
            Manage Service Categories
          </Link>

          <Link
            href="/admin/services"
            className={`admin-nav-link ${
              pathname.startsWith("/admin/services") ? "active" : ""
            }`}
          >
            <span className="admin-nav-icon">⚙</span>
            Manage Services
          </Link>

          <Link
            href="/admin/blogs"
            className={`admin-nav-link ${
              pathname.startsWith("/admin/blogs") ? "active" : ""
            }`}
          >
            <span className="admin-nav-icon">▧</span>
            Manage Blogs
          </Link>

          <Link
            href="/admin/seo"
            className={`admin-nav-link ${
              pathname.startsWith("/admin/seo") ? "active" : ""
            }`}
          >
            <span className="admin-nav-icon">⌕</span>
            Manage SEO
          </Link>

          <Link
            href="/admin/contact-inquiries"
            className={`admin-nav-link ${
              pathname.startsWith("/admin/contact-queries") ? "active" : ""
            }`}
          >
            <span className="admin-nav-icon">✉</span>
            Contact Queries
          </Link>
          <Link
  href="/admin/change-password"
  className={`admin-nav-link ${
    pathname.startsWith("/admin/change-password") ? "active" : ""
  }`}
>
  <span className="admin-nav-icon">🔒</span>
  Change Password
</Link>
        </nav>
        

        <div className="admin-sidebar-bottom">
          <div className="admin-sidebar-status">
            <span className="admin-status-dot" />
            Administrator access
          </div>

          <button
            type="button"
            className="admin-sidebar-logout"
            onClick={handleLogout}
            disabled={loggingOut}
          >
            <span>↪</span>
            {loggingOut ? "Signing out..." : "Sign out"}
          </button>
        </div>
      </aside>

      <main className="admin-dashboard-main">
        <header className="admin-dashboard-topbar">
          <div>
            <div className="admin-topbar-label">ADMINISTRATION</div>
            <h1>
              {pathname === "/admin/dashboard"
                ? "Dashboard"
                : "Service Categories"}
            </h1>
          </div>

          <div className="admin-profile">
            <div className="admin-profile-avatar">A</div>
            <div className="admin-profile-info">
              <strong>Administrator</strong>
              <span>{email}</span>
            </div>
          </div>
        </header>

        <section className="admin-dashboard-content">
          {children}
        </section>
      </main>
    </div>
  );
}
