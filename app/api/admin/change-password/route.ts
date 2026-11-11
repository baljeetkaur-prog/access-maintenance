
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getAdminSession } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";

export async function POST(request: NextRequest) {
  try {
    const session = await getAdminSession();

    if (!session) {
      return NextResponse.json(
        { message: "Please log in again." },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { currentPassword, newPassword } = body;

    if (
      typeof currentPassword !== "string" ||
      typeof newPassword !== "string"
    ) {
      return NextResponse.json(
        { message: "Both passwords are required." },
        { status: 400 }
      );
    }

    if (newPassword.length < 12) {
      return NextResponse.json(
        { message: "The new password must contain at least 12 characters." },
        { status: 400 }
      );
    }

    await connectDB();

    const admin = await Admin.findOne({ email: session.email });

    if (!admin) {
      return NextResponse.json(
        { message: "Admin account not found." },
        { status: 404 }
      );
    }

    const validPassword = await bcrypt.compare(
      currentPassword,
      admin.passwordHash
    );

    if (!validPassword) {
      return NextResponse.json(
        { message: "Current password is incorrect." },
        { status: 400 }
      );
    }

    admin.passwordHash = await bcrypt.hash(newPassword, 12);
    admin.resetPasswordTokenHash = null;
    admin.resetPasswordExpiresAt = null;

    await admin.save();

    const response = NextResponse.json({
      success: true,
      message: "Password changed successfully. Please log in again.",
    });

    response.cookies.set("access-admin-session", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 0,
      expires: new Date(0),
    });

    return response;
  } catch (error) {
    console.error("Change password error:", error);

    return NextResponse.json(
      { message: "Unable to change password." },
      { status: 500 }
    );
  }
}
