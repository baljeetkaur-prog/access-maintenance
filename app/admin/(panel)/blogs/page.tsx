
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./blogs.css";

type Blog = {
  _id: string;
  title: string;
  slug: string;
  status: "draft" | "published";
  publishDate?: string | null;
  createdAt?: string;
};

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadBlogs() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/admin/blogs");
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to load blogs");
      }

      setBlogs(data.blogs || []);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadBlogs();
  }, []);

  async function deleteBlog(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmed) return;

    try {
      const response = await fetch(`/api/admin/blogs/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete blog");
      }

      setBlogs((current) =>
        current.filter((blog) => blog._id !== id)
      );
    } catch (err) {
      window.alert(
        err instanceof Error ? err.message : "Failed to delete blog"
      );
    }
  }

  return (
    <main className="admin-blogs-page">
      <div className="admin-blogs-heading">
        <div>
          <p className="admin-blogs-eyebrow">CONTENT MANAGEMENT</p>
          <h1>Blogs</h1>
          <p>Manage your blog posts and published content.</p>
        </div>

        <Link href="/admin/blogs/new" className="admin-blogs-add">
          + Add New Blog
        </Link>
      </div>

      {loading ? (
        <p className="admin-blogs-message">Loading blogs...</p>
      ) : error ? (
        <p className="admin-blogs-error">{error}</p>
      ) : blogs.length === 0 ? (
        <div className="admin-blogs-empty">
          <h2>No blogs yet</h2>
          <p>Create your first blog post to get started.</p>
          <Link href="/admin/blogs/new" className="admin-blogs-add">
            Create Blog
          </Link>
        </div>
      ) : (
        <div className="admin-blogs-table-wrap">
          <table className="admin-blogs-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Status</th>
                <th>Publish Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {blogs.map((blog) => (
                <tr key={blog._id}>
                  <td>
                    <strong>{blog.title}</strong>
                    <span className="admin-blogs-slug">
                      /blogs/{blog.slug}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`admin-blogs-status ${blog.status}`}
                    >
                      {blog.status}
                    </span>
                  </td>

                  <td>
                    {blog.publishDate
                      ? new Date(blog.publishDate).toLocaleDateString()
                      : "Not scheduled"}
                  </td>

                  <td>
                    <div className="admin-blogs-actions">
                      <Link href={`/admin/blogs/${blog._id}/edit`}>
                        Edit
                      </Link>

                      <button
                        type="button"
                        onClick={() => deleteBlog(blog._id)}
                      >
                        Delete
                      </button>

                      {blog.status === "published" && (
                        <Link
                          href={`/blogs/${blog.slug}`}
                          target="_blank"
                        >
                          View
                        </Link>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
