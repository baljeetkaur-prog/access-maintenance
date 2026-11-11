
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { getAdminSession } from "@/lib/auth";
import SEO from "@/models/SEO";

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

    const seoPages = await SEO.find()
      .sort({ pageName: 1 })
      .lean();

    return NextResponse.json({ seoPages });
  } catch (error) {
    console.error("GET admin SEO error:", error);

    return NextResponse.json(
      { message: "Failed to fetch SEO details" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getAdminSession();

    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();

    const pagePath =
      typeof body.pagePath === "string"
        ? body.pagePath.trim()
        : "";

    const pageName =
      typeof body.pageName === "string"
        ? body.pageName.trim()
        : "";

    const metaTitle =
      typeof body.metaTitle === "string"
        ? body.metaTitle.trim()
        : "";

    const metaDescription =
      typeof body.metaDescription === "string"
        ? body.metaDescription.trim()
        : "";

    const metaKeywords = Array.isArray(body.metaKeywords)
      ? body.metaKeywords
          .filter((keyword: unknown) => typeof keyword === "string")
          .map((keyword: string) => keyword.trim())
          .filter(Boolean)
      : typeof body.metaKeywords === "string"
        ? body.metaKeywords
            .split(",")
            .map((keyword: string) => keyword.trim())
            .filter(Boolean)
        : [];

    if (!pagePath || !pageName || !metaTitle || !metaDescription) {
      return NextResponse.json(
        {
          message:
            "Page path, page name, meta title, and meta description are required",
        },
        { status: 400 }
      );
    }

    if (!pagePath.startsWith("/") || pagePath.startsWith("//")) {
      return NextResponse.json(
        { message: "Page path must start with a single /" },
        { status: 400 }
      );
    }

    await connectDB();

    const existingPage = await SEO.findOne({ pagePath });

    if (existingPage) {
      return NextResponse.json(
        { message: "SEO details already exist for this page path" },
        { status: 409 }
      );
    }

    const seoPage = await SEO.create({
      pagePath,
      pageName,
      metaTitle,
      metaDescription,
      metaKeywords,
      isActive: body.isActive !== false,
    });

    return NextResponse.json(
      { message: "SEO details created successfully", seoPage },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST admin SEO error:", error);

    return NextResponse.json(
      { message: "Failed to create SEO details" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getAdminSession();

    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();

    const pagePath =
      typeof body.pagePath === "string"
        ? body.pagePath.trim()
        : "";

    if (!pagePath || !pagePath.startsWith("/") || pagePath.startsWith("//")) {
      return NextResponse.json(
        { message: "A valid page path is required" },
        { status: 400 }
      );
    }

    const updates: Record<string, unknown> = {};

    if (typeof body.pageName === "string") {
      updates.pageName = body.pageName.trim();
    }

    if (typeof body.metaTitle === "string") {
      updates.metaTitle = body.metaTitle.trim();
    }

    if (typeof body.metaDescription === "string") {
      updates.metaDescription = body.metaDescription.trim();
    }

    if (Array.isArray(body.metaKeywords)) {
      updates.metaKeywords = body.metaKeywords
        .filter((keyword: unknown) => typeof keyword === "string")
        .map((keyword: string) => keyword.trim())
        .filter(Boolean);
    } else if (typeof body.metaKeywords === "string") {
      updates.metaKeywords = body.metaKeywords
        .split(",")
        .map((keyword: string) => keyword.trim())
        .filter(Boolean);
    }

    if (typeof body.isActive === "boolean") {
      updates.isActive = body.isActive;
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { message: "No SEO fields provided to update" },
        { status: 400 }
      );
    }

    await connectDB();

    const seoPage = await SEO.findOneAndUpdate(
      { pagePath },
      { $set: updates },
      { new: true, runValidators: true }
    );

    if (!seoPage) {
      return NextResponse.json(
        { message: "SEO details not found for this page" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "SEO details updated successfully",
      seoPage,
    });
  } catch (error) {
    console.error("PUT admin SEO error:", error);

    return NextResponse.json(
      { message: "Failed to update SEO details" },
      { status: 500 }
    );
  }
}
