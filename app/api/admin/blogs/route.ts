
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { getAdminSession } from "@/lib/auth";
import cloudinary from "@/lib/cloudinary";

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

    const blogs = await Blog.find().sort({ createdAt: -1 });

    return NextResponse.json({ blogs });
  } catch (error) {
    console.error("Fetch blogs error:", error);

    return NextResponse.json(
      { message: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  let uploadedPublicId = "";

  try {
    const session = await getAdminSession();

    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectDB();

    // Read the multipart form submitted by BlogForm.tsx.
    const formData = await request.formData();

    const rawData = formData.get("data");
    const image = formData.get("image");

    if (typeof rawData !== "string") {
      return NextResponse.json(
        { message: "Blog details are missing" },
        { status: 400 }
      );
    }

    let body;

    try {
      body = JSON.parse(rawData);
    } catch {
      return NextResponse.json(
        { message: "Invalid blog details" },
        { status: 400 }
      );
    }

 const {
  title,
  slug,
  category,
  publishDate,
  metaTitle,
  metaDescription,
  keywords,
  content,
  tags,
  status,
} = body;

    if (
      typeof title !== "string" ||
      !title.trim() ||
      typeof slug !== "string" ||
      !slug.trim()
    ) {
      return NextResponse.json(
        { message: "Title and slug are required" },
        { status: 400 }
      );
    }

    if (!(image instanceof File) || image.size === 0) {
      return NextResponse.json(
        { message: "Please upload a blog image" },
        { status: 400 }
      );
    }

    if (!image.type.startsWith("image/")) {
      return NextResponse.json(
        { message: "Please upload a valid image file" },
        { status: 400 }
      );
    }

    if (image.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { message: "Image size must be 5 MB or smaller" },
        { status: 400 }
      );
    }

    const normalizedSlug = slug
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

    if (!normalizedSlug) {
      return NextResponse.json(
        { message: "Please enter a valid slug" },
        { status: 400 }
      );
    }

    const existingBlog = await Blog.findOne({
      slug: normalizedSlug,
    });

    if (existingBlog) {
      return NextResponse.json(
        { message: "This slug already exists" },
        { status: 409 }
      );
    }

    // Convert the selected file into a data URI for Cloudinary.
    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Image = buffer.toString("base64");

    const dataUri = `data:${image.type};base64,${base64Image}`;

    // Upload the image to Cloudinary.
    const uploadResult = await cloudinary.uploader.upload(dataUri, {
      folder: "access-maintenance/blogs",
      resource_type: "image",
    });

    uploadedPublicId = uploadResult.public_id;

    // Save the blog with its Cloudinary image details.
const blog = await Blog.create({
  title: title.trim(),
  slug: normalizedSlug,
  category:
    typeof category === "string" && category.trim()
      ? category.trim()
      : "General",
  publishDate: publishDate || null,
  metaTitle:
    typeof metaTitle === "string" ? metaTitle.trim() : title.trim(),
  metaDescription:
    typeof metaDescription === "string"
      ? metaDescription.trim()
      : "",
  keywords: Array.isArray(keywords) ? keywords : [],
  content: typeof content === "string" ? content : "",
  tags: Array.isArray(tags) ? tags : [],
  imageUrl: uploadResult.secure_url,
  imagePublicId: uploadResult.public_id,
  status: status === "published" ? "published" : "draft",
});

    return NextResponse.json(
      {
        message: "Blog created successfully",
        blog,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create blog error:", error);

    // If MongoDB saving fails after the upload, remove the unused image.
    if (uploadedPublicId) {
      try {
        await cloudinary.uploader.destroy(uploadedPublicId);
      } catch (cleanupError) {
        console.error("Cloudinary cleanup error:", cleanupError);
      }
    }

    return NextResponse.json(
      { message: "Failed to create blog" },
      { status: 500 }
    );
  }
}
