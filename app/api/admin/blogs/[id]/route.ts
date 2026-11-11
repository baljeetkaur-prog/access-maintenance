
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { getAdminSession } from "@/lib/auth";
import cloudinary from "@/lib/cloudinary";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(
  _request: NextRequest,
  { params }: RouteContext
) {
  try {
    const session = await getAdminSession();

    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid blog ID" },
        { status: 400 }
      );
    }

    await connectDB();

    const blog = await Blog.findById(id).lean();

    if (!blog) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ blog });
  } catch (error) {
    console.error("Get blog error:", error);

    return NextResponse.json(
      { message: "Failed to load blog" },
      { status: 500 }
    );
  }
}


export async function PUT(
  request: NextRequest,
  { params }: RouteContext
) {
  let uploadedPublicId = "";

  try {
    const session = await getAdminSession();

    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid blog ID" },
        { status: 400 }
      );
    }

    await connectDB();

    const existingBlog = await Blog.findById(id);

    if (!existingBlog) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }

    // Read FormData submitted by BlogForm.tsx.
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

    const duplicate = await Blog.findOne({
      slug: normalizedSlug,
      _id: { $ne: id },
    });

    if (duplicate) {
      return NextResponse.json(
        { message: "This slug already exists" },
        { status: 409 }
      );
    }

    // Keep the current image unless a replacement is uploaded.
    let imageUrl = existingBlog.imageUrl || "";
    let imagePublicId = existingBlog.imagePublicId || "";

    if (image !== null) {
      if (!(image instanceof File) || image.size === 0) {
        return NextResponse.json(
          { message: "Please select a valid image file" },
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

      const arrayBuffer = await image.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const dataUri =
        `data:${image.type};base64,${buffer.toString("base64")}`;

      const uploadResult = await cloudinary.uploader.upload(dataUri, {
        folder: "access-maintenance/blogs",
        resource_type: "image",
      });

      uploadedPublicId = uploadResult.public_id;
      imageUrl = uploadResult.secure_url;
      imagePublicId = uploadResult.public_id;
    }

    // Update MongoDB with the new details and image, if replaced.
    const blog = await Blog.findByIdAndUpdate(
      id,
      {
        title: title.trim(),
        slug: normalizedSlug,
        category:
  typeof category === "string" && category.trim()
    ? category.trim()
    : "General",
        publishDate: publishDate || null,
        metaTitle:
          typeof metaTitle === "string"
            ? metaTitle.trim()
            : title.trim(),
        metaDescription:
          typeof metaDescription === "string"
            ? metaDescription.trim()
            : "",
        keywords: Array.isArray(keywords) ? keywords : [],
        content: typeof content === "string" ? content : "",
        tags: Array.isArray(tags) ? tags : [],
        imageUrl,
        imagePublicId,
        status: status === "published" ? "published" : "draft",
      },
      { new: true, runValidators: true }
    );

    if (!blog) {
      throw new Error("Blog not found during update");
    }

    // Only delete the old image after MongoDB has saved the replacement.
    if (
      uploadedPublicId &&
      existingBlog.imagePublicId &&
      existingBlog.imagePublicId !== uploadedPublicId
    ) {
      try {
        await cloudinary.uploader.destroy(existingBlog.imagePublicId, {
          resource_type: "image",
        });
      } catch (cleanupError) {
        // The blog is already updated; log cleanup failure for later review.
        console.error("Old Cloudinary image cleanup error:", cleanupError);
      }
    }

    return NextResponse.json({
      message: "Blog updated successfully",
      blog,
    });
  } catch (error) {
    console.error("Update blog error:", error);

    // Remove a newly uploaded image if the database update failed.
    if (uploadedPublicId) {
      try {
        await cloudinary.uploader.destroy(uploadedPublicId, {
          resource_type: "image",
        });
      } catch (cleanupError) {
        console.error("New image cleanup error:", cleanupError);
      }
    }

    return NextResponse.json(
      { message: "Failed to update blog" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: RouteContext
) {
  try {
    const session = await getAdminSession();

    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid blog ID" },
        { status: 400 }
      );
    }

    await connectDB();

    const blog = await Blog.findById(id);

    if (!blog) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }

    // Delete the image before deleting the blog record.
    if (blog.imagePublicId) {
      const result = await cloudinary.uploader.destroy(
        blog.imagePublicId,
        { resource_type: "image" }
      );

      if (result.result !== "ok" && result.result !== "not found") {
        console.error("Cloudinary image deletion failed:", result);

        return NextResponse.json(
          {
            message:
              "Could not delete the blog image. The blog was not deleted.",
          },
          { status: 500 }
        );
      }
    }

    await Blog.findByIdAndDelete(id);

    return NextResponse.json({
      message: "Blog and its image deleted successfully",
    });
  } catch (error) {
    console.error("Delete blog error:", error);

    return NextResponse.json(
      { message: "Failed to delete blog" },
      { status: 500 }
    );
  }
}
