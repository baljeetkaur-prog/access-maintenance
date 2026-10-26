
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { getAdminSession } from "@/lib/auth";
import ServiceCategory from "@/models/ServiceCategory";
import cloudinary from "@/lib/cloudinary";
import { slugify } from "@/lib/slugify";

type RouteContext = {
  params: Promise<{ id: string }>;
};

async function isAdmin() {
  return Boolean(await getAdminSession());
}

async function createUniqueSlug(name: string, excludeId?: string) {
  const baseSlug = slugify(name);

  if (!baseSlug) {
    throw new Error("Please provide a valid category name.");
  }

  let slug = baseSlug;
  let count = 2;

  while (
    await ServiceCategory.exists({
      slug,
      ...(excludeId ? { _id: { $ne: excludeId } } : {}),
    })
  ) {
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

export async function GET(
  _request: NextRequest,
  context: RouteContext
) {
  try {
    if (!(await isAdmin())) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectDB();

    const { id } = await context.params;

    if (!/^[a-f\d]{24}$/i.test(id)) {
      return NextResponse.json(
        { message: "Invalid category ID." },
        { status: 400 }
      );
    }

    const category = await ServiceCategory.findById(id).lean();

    if (!category) {
      return NextResponse.json(
        { message: "Category not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ category });
  } catch (error) {
    console.error("Fetch service category error:", error);

    return NextResponse.json(
      { message: "Failed to fetch service category." },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  context: RouteContext
) {
  let newlyUploadedPublicId: string | undefined;

  try {
    if (!(await isAdmin())) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectDB();

    const { id } = await context.params;

    if (!/^[a-f\d]{24}$/i.test(id)) {
      return NextResponse.json(
        { message: "Invalid category ID." },
        { status: 400 }
      );
    }

    const category = await ServiceCategory.findById(id);

    if (!category) {
      return NextResponse.json(
        { message: "Category not found." },
        { status: 404 }
      );
    }

    const formData = await request.formData();
    const rawData = formData.get("data");

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
      !data.shortDescription.trim() ||
      !data.overview ||
      typeof data.overview !== "object" ||
      !Array.isArray(data.services) ||
      !Array.isArray(data.scope) ||
      !Array.isArray(data.deliveryProcess) ||
      data.deliveryProcess.length !== 4 ||
      !Array.isArray(data.firstConversation) ||
      data.firstConversation.length !== 4
    ) {
      return NextResponse.json(
        { message: "Please check all required category fields." },
        { status: 400 }
      );
    }

    const imageFile = formData.get("image");
    let oldPublicId: string | undefined;

    if (imageFile instanceof File && imageFile.size > 0) {
      if (
        !imageFile.type.startsWith("image/") ||
        imageFile.size > 5 * 1024 * 1024
      ) {
        return NextResponse.json(
          { message: "Upload an image of 5 MB or smaller." },
          { status: 400 }
        );
      }

      const newImage = await uploadImage(imageFile);
      newlyUploadedPublicId = newImage.publicId;
      oldPublicId = category.image?.publicId;
      category.image = newImage;
    }

    category.name = data.name.trim();
    category.slug = await createUniqueSlug(category.name, id);
    category.shortDescription = data.shortDescription.trim();
    category.overview = data.overview as typeof category.overview;
   
const existingServices = category.services;

category.services = (
  data.services as Array<{
    _id?: string;
    name: string;
    paragraph: string;
    link?: string;
  }>
).map((service) => {
  const existing = service._id
    ? existingServices.id(service._id)
    : null;

  return {
    ...(existing ? existing.toObject() : {}),
    name: service.name.trim(),
    paragraph: service.paragraph.trim(),
    link:
      typeof service.link === "string"
        ? service.link
        : existing?.link || "",
    shortDescription: existing?.shortDescription || "",
    overview: existing?.overview || {
      heading: "",
      paragraph: "",
    },
    scope: existing?.scope || [],
    deliveryProcess: existing?.deliveryProcess || [],
    firstConversation: existing?.firstConversation || [],
    isActive: existing?.isActive ?? true,
  };
}) as typeof category.services;

    category.scope = data.scope as typeof category.scope;
    category.deliveryProcess =
      data.deliveryProcess as typeof category.deliveryProcess;
    category.firstConversation =
      data.firstConversation as typeof category.firstConversation;
    category.isActive = data.isActive !== false;

    await category.save();

    if (oldPublicId) {
      await cloudinary.uploader.destroy(oldPublicId).catch((error) => {
        console.error("Old category image cleanup failed:", error);
      });
    }

    return NextResponse.json({
      message: "Service category updated successfully.",
      category,
    });
  } catch (error) {
    if (newlyUploadedPublicId) {
      await cloudinary.uploader
        .destroy(newlyUploadedPublicId)
        .catch(() => undefined);
    }

    console.error("Update service category error:", error);

    return NextResponse.json(
      { message: "Failed to update service category." },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: NextRequest,
  context: RouteContext
) {
  try {
    if (!(await isAdmin())) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectDB();

    const { id } = await context.params;

    if (!/^[a-f\d]{24}$/i.test(id)) {
      return NextResponse.json(
        { message: "Invalid category ID." },
        { status: 400 }
      );
    }

    const category = await ServiceCategory.findByIdAndDelete(id);

    if (!category) {
      return NextResponse.json(
        { message: "Category not found." },
        { status: 404 }
      );
    }

    if (category.image?.publicId) {
      await cloudinary.uploader
        .destroy(category.image.publicId)
        .catch((error) => {
          console.error("Category image cleanup failed:", error);
        });
    }

    return NextResponse.json({
      message: "Service category deleted successfully.",
    });
  } catch (error) {
    console.error("Delete service category error:", error);

    return NextResponse.json(
      { message: "Failed to delete service category." },
      { status: 500 }
    );
  }
}
