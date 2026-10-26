
export type PublicBlog = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  publishDate: string | null;
  createdAt: string | null;
  metaTitle: string;
  metaDescription: string;
  content: string;
  imageUrl: string;
  tags: string[];
};

export function serializeBlog(blog: any): PublicBlog {
  return {
    _id: String(blog._id),
    title: blog.title || "",
    slug: blog.slug || "",
    category: blog.category || "General",
    publishDate: blog.publishDate
      ? new Date(blog.publishDate).toISOString()
      : null,
    createdAt: blog.createdAt
      ? new Date(blog.createdAt).toISOString()
      : null,
    metaTitle: blog.metaTitle || blog.title || "",
    metaDescription: blog.metaDescription || "",
    content: blog.content || "",
    imageUrl: blog.imageUrl || "",
    tags: Array.isArray(blog.tags) ? blog.tags : [],
  };
}

export function formatBlogDate(date: string | null) {
  if (!date) return "Date unavailable";

  return new Date(date).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
