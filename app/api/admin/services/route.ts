
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { getAdminSession } from "@/lib/auth";
import ServiceCategory from "@/models/ServiceCategory";

type ServiceItem = {
  _id: unknown;
  name: string;
  paragraph?: string;
  link?: string;
  shortDescription?: string;
  isActive?: boolean;
};

type CategoryItem = {
  _id: unknown;
  name: string;
  slug: string;
  services?: ServiceItem[];
};

export async function GET() {
  try {
    const session = await getAdminSession();

    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectDB();

    const categories = (await ServiceCategory.find()
      .select("name slug services")
      .sort({ name: 1 })
      .lean()
      .exec()) as unknown as CategoryItem[];

    const services = categories.flatMap((category) =>
      (category.services || []).map((service: ServiceItem) => ({
        _id: String(service._id),
        categoryId: String(category._id),
        categoryName: category.name,
        categorySlug: category.slug,
        name: service.name,
        paragraph: service.paragraph,
        link: service.link || "",
        shortDescription: service.shortDescription || "",
        isActive: service.isActive !== false,
      }))
    );

    return NextResponse.json({ services });
  } catch (error) {
    console.error("Fetch services error:", error);

    return NextResponse.json(
      { message: "Failed to fetch services." },
      { status: 500 }
    );
  }
}
