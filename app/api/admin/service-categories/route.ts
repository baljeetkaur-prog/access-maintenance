
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { getAdminSession } from "@/lib/auth";
import ServiceCategory from "@/models/ServiceCategory";
import cloudinary from "@/lib/cloudinary";
import { slugify } from "@/lib/slugify";

async function createUniqueSlug(name: string) {
  const baseSlug = slugify(name);

  if (!baseSlug) {
    throw new Error("Please provide a valid category name.");
  }

  let slug = baseSlug;
  let count = 2;

  while (await ServiceCategory.exists({ slug })) {
    slug = `${baseSlug}-${count}`;
    count++;
  }

  return slug;
}

async function uploadImage(file: File) {
  const bytes = Buffer.from(await file.arrayBuffer());
  const dataUri = `data:${file.type};base64,${bytes.toString("base64")}`;

  const result = await cloudinary.uploader.upload(dataUri, {
    folder: "access-maintenance/services/categories",
    resource_type: "image",
  });

  return {
    url: result.secure_url,
    publicId: result.public_id,
  };
}

// GET: Fetch all service categories
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

    const categories = await ServiceCategory.find()
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({ categories });
  } catch (error) {
    console.error("Fetch service categories error:", error);

    return NextResponse.json(
      { message: "Failed to fetch service categories." },
      { status: 500 }
    );
  }
}

// POST: Create a service category
export async function POST(request: NextRequest) {
  let uploadedPublicId: string | undefined;

  try {
    const session = await getAdminSession();

    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectDB();

    const formData = await request.formData();
    const rawData = formData.get("data");
    const imageFile = formData.get("image");

    if (typeof rawData !== "string") {
      return NextResponse.json(
        { message: "Category data is required." },
        { status: 400 }
      );
    }

    let data: Record<string, unknown>;

    try {
      data = JSON.parse(rawData);
    } catch {
      return NextResponse.json(
        { message: "Category data must be valid JSON." },
        { status: 400 }
      );
    }

    if (
      typeof data.name !== "string" ||
      !data.name.trim() ||
      typeof data.shortDescription !== "string" ||
      !data.shortDescription.trim()
    ) {
      return NextResponse.json(
        { message: "Category name and short description are required." },
        { status: 400 }
      );
    }

    if (!(imageFile instanceof File) || imageFile.size === 0) {
      return NextResponse.json(
        { message: "Please upload a category image." },
        { status: 400 }
      );
    }

    if (!imageFile.type.startsWith("image/")) {
      return NextResponse.json(
        { message: "Please upload a valid image file." },
        { status: 400 }
      );
    }

    if (imageFile.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { message: "Image size must be 5 MB or smaller." },
        { status: 400 }
      );
    }

    if (
      !data.overview ||
      typeof data.overview !== "object" ||
      Array.isArray(data.overview) ||
      !Array.isArray(data.services) ||
      !Array.isArray(data.scope) ||
      !Array.isArray(data.deliveryProcess) ||
      data.deliveryProcess.length !== 4 ||
      !Array.isArray(data.firstConversation) ||
      data.firstConversation.length !== 4 ||
      data.firstConversation.some(
        (point) => typeof point !== "string" || !point.trim()
      )
    ) {
      return NextResponse.json(
        {
          message:
            "Provide overview, services, scope, exactly 4 delivery steps and exactly 4 first-conversation points.",
        },
        { status: 400 }
      );
    }

    const slug = await createUniqueSlug(data.name.trim());

    const image = await uploadImage(imageFile);
    uploadedPublicId = image.publicId;

    const category = await ServiceCategory.create({
      name: data.name.trim(),
      slug,
      shortDescription: data.shortDescription.trim(),
      image,
      overview: data.overview,
      services: data.services,
      scope: data.scope,
      deliveryProcess: data.deliveryProcess,
      firstConversation: data.firstConversation,
      isActive: data.isActive !== false,
    });

    return NextResponse.json(
      {
        message: "Service category created successfully.",
        category,
      },
      { status: 201 }
    );
  } catch (error) {
    if (uploadedPublicId) {
      await cloudinary.uploader
        .destroy(uploadedPublicId)
        .catch(() => undefined);
    }

    console.error("Create service category error:", error);

    return NextResponse.json(
      { message: "Failed to create service category." },
      { status: 500 }
    );
  }
}
