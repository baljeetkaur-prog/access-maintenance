
import type { Metadata } from "next";
import { connection } from "next/server";
import { Suspense } from "react";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { serializeBlog } from "./blogUtils";
import BlogsMain from "./BlogsMain";
import { getPageMetadata } from "@/lib/seo";

type PageProps = {
  searchParams: Promise<{
    search?: string;
    category?: string;
  }>;
};

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("/blogs");
}

async function DynamicMetadataMarker() {
  await connection();
  return null;
}

export const instant = false;

export default async function BlogsPage({ searchParams }: PageProps) {
  await connection();

  const params = await searchParams;
  const search = params.search?.trim() || "";
  const category = params.category?.trim() || "";

  await connectDB();

  const filter: Record<string, any> = {
    status: "published",
  };

  if (category) {
    filter.category = category;
  }

  if (search) {
    const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const searchRegex = new RegExp(escapedSearch, "i");

    filter.$or = [
      { title: searchRegex },
      { metaDescription: searchRegex },
      { category: searchRegex },
      { tags: searchRegex },
    ];
  }

  const [results, latestResults, categoryResults] = await Promise.all([
    Blog.find(filter)
      .sort({ publishDate: -1, createdAt: -1 })
      .lean(),

    Blog.find({ status: "published" })
      .sort({ publishDate: -1, createdAt: -1 })
      .limit(5)
      .lean(),

    Blog.distinct("category", { status: "published" }),
  ]);

  const blogs = results.map(serializeBlog);
  const latestPosts = latestResults.map(serializeBlog);

  const categories = categoryResults
    .filter(
      (item: unknown): item is string =>
        typeof item === "string" && !!item.trim()
    )
    .sort((a: string, b: string) => a.localeCompare(b));

  return (
    <>
      <Suspense fallback={null}>
        <DynamicMetadataMarker />
      </Suspense>

      <BlogsMain
        blogs={blogs}
        latestPosts={latestPosts}
        categories={categories}
        search={search}
        category={category}
      />
    </>
  );
}
