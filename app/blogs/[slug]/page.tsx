import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { serializeBlog } from "../blogUtils";
import BlogDetail from "./BlogsDetail";

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Keep this if your project uses Next.js 16 Cache Components.
export const instant = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  await connection();

  const { slug } = await params;

  await connectDB();

  const blog = await Blog.findOne({
    slug,
    status: "published",
  }).lean();

  if (!blog) {
    return {
      title: "Blog Not Found | Access Maintenance",
    };
  }

  return {
    title: blog.metaTitle || `${blog.title} | Access Maintenance`,
    description: blog.metaDescription || "",
    keywords: blog.keywords || [],
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || "",
      images: blog.imageUrl ? [blog.imageUrl] : [],
      type: "article",
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  await connection();

  const { slug } = await params;

  await connectDB();

  const [result, latestResults, categoryResults] = await Promise.all([
    Blog.findOne({
      slug,
      status: "published",
    }).lean(),

    Blog.find({
      status: "published",
      slug: { $ne: slug },
    })
      .sort({ publishDate: -1, createdAt: -1 })
      .limit(5)
      .lean(),

    Blog.distinct("category", {
      status: "published",
    }),
  ]);

  if (!result) {
    notFound();
  }

  const blog = serializeBlog(result);
  const latestPosts = latestResults.map(serializeBlog);

  const categories = categoryResults
    .filter(
      (item: unknown): item is string =>
        typeof item === "string" && !!item.trim()
    )
    .sort((a: string, b: string) => a.localeCompare(b));

  return (
    <BlogDetail
      blog={blog}
      latestPosts={latestPosts}
      categories={categories}
    />
  );
}