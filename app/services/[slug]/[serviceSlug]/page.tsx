
import { connection } from "next/server";
import { notFound } from "next/navigation";
import { connectDB } from "@/lib/mongodb";
import ServiceCategory from "@/models/ServiceCategory";
import ServicePage from "./ServicePage";
import type { Metadata } from "next";
import { getServiceSEO } from "@/lib/seo";

export const instant = false;

type ServiceItem = {
  _id: string;
  name: string;
  paragraph: string;
  link?: string;
  isActive?: boolean;
};

type Props = {
  params: Promise<{
    slug: string;
    serviceSlug: string;
  }>;
};

function getServiceSlug(link: string) {
  return (
    link
      .trim()
      .replace(/\/+$/, "")
      .split("/")
      .pop()
      ?.toLowerCase() || ""
  );
}
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug, serviceSlug } = await params;

  await connectDB();

  const category = await ServiceCategory.findOne({
    slug,
    isActive: true,
  }).lean();

  if (!category) {
    return {
      title: "Service Not Found | Access Maintenance",
    };
  }

  const services = (category.services ?? []) as ServiceItem[];

  const service = services.find(
    (item) =>
      getServiceSlug(item.link || "") === serviceSlug.toLowerCase() &&
      item.isActive !== false
  );

  if (!service) {
    return {
      title: "Service Not Found | Access Maintenance",
    };
  }

  return getServiceSEO(
    service.name,
    service.paragraph || "",
    category.name
  );
}

export default async function Page({ params }: Props) {
  await connection();

  const { slug, serviceSlug } = await params;

  await connectDB();

  const category = await ServiceCategory.findOne({
    slug,
    isActive: true,
  }).lean();

  if (!category) {
    notFound();
  }

  const services = (category.services ?? []) as ServiceItem[];

  const service = services.find(
    (item) =>
      getServiceSlug(item.link || "") === serviceSlug.toLowerCase() &&
      item.isActive !== false
  );

  if (!service) {
    notFound();
  }

  const relatedServices = services
    .filter(
      (item) =>
        item.isActive !== false &&
        getServiceSlug(item.link || "") !== serviceSlug.toLowerCase()
    )
    .slice(0, 3)
    .map((item) => ({
      _id: String(item._id),
      name: item.name,
      paragraph: item.paragraph,
      link: item.link,
    }));

  return (
    <ServicePage
      category={{
        name: category.name,
        slug: category.slug,
      }}
      service={JSON.parse(JSON.stringify(service))}
      relatedServices={JSON.parse(JSON.stringify(relatedServices))}
    />
  );
}
