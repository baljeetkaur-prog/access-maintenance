
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { getAdminSession } from "@/lib/auth";
import ServiceCategory from "@/models/ServiceCategory";

type RouteContext = {
  params: Promise<{
    categoryId: string;
    serviceId: string;
  }>;
};

type TextSection = {
  heading: string;
  paragraph: string;
};

type ServiceContent = {
  paragraph: string;
  overview: TextSection;
  scope: TextSection[];
  deliveryProcess: TextSection[];
  firstConversation: string[];
  isActive: boolean;
};

const isObjectId = (value: string) => /^[a-f\d]{24}$/i.test(value);

function isTextSection(value: unknown): value is TextSection {
  if (!value || typeof value !== "object") return false;

  const section = value as Record<string, unknown>;

  return (
    typeof section.heading === "string" &&
    !!section.heading.trim() &&
    typeof section.paragraph === "string" &&
    !!section.paragraph.trim()
  );
}

function isTextSectionArray(value: unknown): value is TextSection[] {
  return Array.isArray(value) && value.every(isTextSection);
}

async function authorizeAdmin() {
  return Boolean(await getAdminSession());
}

export async function GET(
  _request: NextRequest,
  context: RouteContext
) {
  try {
    if (!(await authorizeAdmin())) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectDB();

    const { categoryId, serviceId } = await context.params;

    if (!isObjectId(categoryId) || !isObjectId(serviceId)) {
      return NextResponse.json(
        { message: "Invalid category or service ID." },
        { status: 400 }
      );
    }

    const category = await ServiceCategory.findById(categoryId);

    if (!category) {
      return NextResponse.json(
        { message: "Category not found." },
        { status: 404 }
      );
    }

    const service = category.services.id(serviceId);

    if (!service) {
      return NextResponse.json(
        { message: "Service not found in this category." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      service: {
        _id: String(service._id),
        categoryId: String(category._id),
        categoryName: category.name,
        name: service.name,
   paragraph: service.paragraph,
link: service.link || "",
        overview: {
          heading: service.overview?.heading || "",
          paragraph: service.overview?.paragraph || "",
        },
        scope: service.scope || [],
        deliveryProcess: service.deliveryProcess || [],
        firstConversation: service.firstConversation || [],
        isActive: service.isActive !== false,
      },
    });
  } catch (error) {
    console.error("Fetch individual service error:", error);

    return NextResponse.json(
      { message: "Failed to fetch service content." },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  context: RouteContext
) {
  try {
    if (!(await authorizeAdmin())) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectDB();

    const { categoryId, serviceId } = await context.params;

    if (!isObjectId(categoryId) || !isObjectId(serviceId)) {
      return NextResponse.json(
        { message: "Invalid category or service ID." },
        { status: 400 }
      );
    }

    let data: ServiceContent;

    try {
      data = await request.json();
    } catch {
      return NextResponse.json(
        { message: "Request body must contain valid JSON." },
        { status: 400 }
      );
    }

    if (
typeof data.paragraph !== "string" ||
!data.paragraph.trim() ||
      !data.overview ||
      typeof data.overview.heading !== "string" ||
      !data.overview.heading.trim() ||
      typeof data.overview.paragraph !== "string" ||
      !data.overview.paragraph.trim() ||
      !isTextSectionArray(data.scope) ||
      !Array.isArray(data.deliveryProcess) ||
      data.deliveryProcess.length !== 4 ||
      !data.deliveryProcess.every(isTextSection) ||
      !Array.isArray(data.firstConversation) ||
      data.firstConversation.length !== 4 ||
      !data.firstConversation.every(
        (point) => typeof point === "string" && !!point.trim()
      ) ||
      typeof data.isActive !== "boolean"
    ) {
      return NextResponse.json(
        {
          message:
            "Complete the short description, overview, scope sections, exactly 4 delivery steps, exactly 4 first-conversation points, and status.",
        },
        { status: 400 }
      );
    }

    const category = await ServiceCategory.findById(categoryId);

    if (!category) {
      return NextResponse.json(
        { message: "Category not found." },
        { status: 404 }
      );
    }

    const service = category.services.id(serviceId);

    if (!service) {
      return NextResponse.json(
        { message: "Service not found in this category." },
        { status: 404 }
      );
    }

service.set({
  paragraph: data.paragraph.trim(),
  overview: {
    heading: data.overview.heading.trim(),
    paragraph: data.overview.paragraph.trim(),
  },
      scope: data.scope.map((item) => ({
        heading: item.heading.trim(),
        paragraph: item.paragraph.trim(),
      })),
      deliveryProcess: data.deliveryProcess.map((item) => ({
        heading: item.heading.trim(),
        paragraph: item.paragraph.trim(),
      })),
      firstConversation: data.firstConversation.map((point) =>
        point.trim()
      ),
      isActive: data.isActive,
    });

    await category.save();

    return NextResponse.json({
      message: "Service content updated successfully.",
    });
  } catch (error) {
    console.error("Update individual service error:", error);

    return NextResponse.json(
      { message: "Failed to update service content." },
      { status: 500 }
    );
  }
}
