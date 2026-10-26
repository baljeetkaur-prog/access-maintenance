
import { connection } from "next/server";
import { notFound } from "next/navigation";
import { connectDB } from "@/lib/mongodb";
import ServiceCategoryModel from "@/models/ServiceCategory";
import ServiceCategoryPage from "./ServiceCategoryPage";
import type { Metadata } from "next";


export const instant = false;

type Props = {
  params: Promise<{ slug: string }>;
};
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  await connection();

  const { slug } = await params;

  await connectDB();

  const category = await ServiceCategoryModel.findOne({
    slug,
  }).lean();

  if (!category) {
    return {
      title: "Service Category Not Found | Access Maintenance",
    };
  }

  const title = `${category.name} | Access Maintenance`;

  const description =
    category.description?.trim() ||
    `Explore ${category.name} services from Access Maintenance, supporting reliable facility operations and building maintenance.`;

  return {
    title,
    description: description.slice(0, 160),
    keywords: [
      category.name,
      "facilities management",
      "facility maintenance",
      "building operations",
      "Access Maintenance",
    ],
  };
}


export default async function Page({ params }: Props) {
  await connection();

  const { slug } = await params;

  await connectDB();

  const [category, allCategories] = await Promise.all([
    ServiceCategoryModel.findOne({ slug }).lean(),

    ServiceCategoryModel.find({
      isActive: { $ne: false },
    })
      .sort({ _id: 1 })
      .lean(),
  ]);

  if (!category) {
    notFound();
  }

  const data = JSON.parse(JSON.stringify(category));
  const allCategoriesData = JSON.parse(
    JSON.stringify(allCategories)
  );

  return (
    <ServiceCategoryPage
      data={data}
      allCategoriesData={allCategoriesData}
    />
  );
}
