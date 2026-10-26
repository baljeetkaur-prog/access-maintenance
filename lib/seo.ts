
import type { Metadata } from "next";
import { connectDB } from "@/lib/mongodb";
import SEO from "@/models/SEO";
import { connection } from "next/server";

export const defaultSEO = {
  title: "Access Maintenance | Integrated Facilities Service",
  description:
    "Access Maintenance delivers reliable integrated facilities services, including building operations, maintenance planning, asset management, and workplace support to keep your facilities safe, efficient, and performing at their best.",
  keywords: [
    "Access Maintenance",
    "integrated facilities services",
    "facilities management",
    "facility maintenance",
    "building operations",
    "asset management",
    "maintenance planning",
    "workplace maintenance",
    "commercial property maintenance",
  ],
};

export async function getPageMetadata(
  pagePath: string
): Promise<Metadata> {
  try {
    await connection();
    await connectDB();

    const seoPage = await SEO.findOne({
      pagePath,
      isActive: true,
    }).lean();

    if (!seoPage) {
      return {
        title: defaultSEO.title,
        description: defaultSEO.description,
        keywords: defaultSEO.keywords,
      };
    }

    return {
      title: seoPage.metaTitle || defaultSEO.title,
      description: seoPage.metaDescription || defaultSEO.description,
      keywords:
        seoPage.metaKeywords?.length > 0
          ? seoPage.metaKeywords
          : defaultSEO.keywords,
    };
  } catch (error) {
    console.error(`Failed to load SEO for ${pagePath}:`, error);

    return {
      title: defaultSEO.title,
      description: defaultSEO.description,
      keywords: defaultSEO.keywords,
    };
  }
}
export function getServiceSEO(
  serviceName: string,
  serviceDescription: string,
  categoryName: string
): Metadata {
  const title = `${serviceName} | Access Maintenance`;

  const description =
    serviceDescription?.trim() ||
    `${serviceName} services from Access Maintenance help maintain safe, reliable, and efficient facilities.`;

  return {
    title,
    description: description.slice(0, 160),
    keywords: [
      serviceName,
      categoryName,
      "facilities management",
      "building maintenance",
      "Access Maintenance",
    ],
  };
}