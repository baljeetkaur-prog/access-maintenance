
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import BlogForm from "../../BlogForm";

type BlogData = {
  _id: string;
  title: string;
  slug: string;
  publishDate?: string | null;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  content?: string;
  tags?: string[];
  imageUrl?: string;
  imagePublicId?: string;
  status: "draft" | "published";
};

export default function EditBlogPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [blog, setBlog] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await fetch(`/api/admin/blogs/${id}`, {
          cache: "no-store",
        });

        const data = await response.json();

        if (response.status === 401) {
          router.push("/admin/login");
          return;
        }

        if (!response.ok) {
          throw new Error(data.message || "Unable to load blog.");
        }

        setBlog(data.blog);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Something went wrong."
        );
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchBlog();
    }
  }, [id, router]);

  if (loading) {
    return <main className="blog-form-page">Loading blog...</main>;
  }

  if (error || !blog) {
    return (
      <main className="blog-form-page">
        <p>{error || "Blog not found."}</p>
      </main>
    );
  }

  return <BlogForm key={blog._id} initialBlog={blog} />;
}
