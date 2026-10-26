
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import ServiceCategory from "@/models/ServiceCategory";

export async function GET() {
  try {
    await connectDB();

    // Fetch active categories for the public website.
const categories = await ServiceCategory.find({
  isActive: { $ne: false },
})
  .select("name slug isActive services")
  .sort({ createdAt: 1 })
  .lean();

    // Return only the fields required by the Navbar.
    const publicCategories = categories.map((category: any) => ({
      name: category.name,
      slug: category.slug,
      isActive: category.isActive,
      services: (category.services || [])
        .filter(
          (service: any) =>
            service.isActive !== false && service.name
        )
        .map((service: any) => ({
          name: service.name,
          link: service.link || "",
          isActive: service.isActive,
        })),
    }));

    return NextResponse.json({
      categories: publicCategories,
    });
  } catch (error) {
    console.error("Fetch public service categories error:", error);

    return NextResponse.json(
      { message: "Failed to fetch service categories." },
      { status: 500 }
    );
  }
}
