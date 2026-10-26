
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import Admin from "@/models/Admin";
import { connectDB } from "@/lib/mongodb";
import { createSession, COOKIE_NAME } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      !email.trim() ||
      !password
    ) {
      return NextResponse.json(
        { message: "Email and password are required." },
        { status: 400 }
      );
    }

    await connectDB();

    const admin = await Admin.findOne({
      email: email.trim().toLowerCase(),
    });

    if (
      !admin ||
      !(await bcrypt.compare(password, admin.passwordHash))
    ) {
      return NextResponse.json(
        { message: "Invalid email or password." },
        { status: 401 }
      );
    }

    const token = await createSession(admin.email);

    const response = NextResponse.json({
      success: true,
      message: "Login successful.",
    });

    response.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 8,
    });

    return response;
  } catch (error) {
    console.error("Admin login error:", error);

    return NextResponse.json(
      { message: "Unable to log in. Please try again." },
      { status: 500 }
    );
  }
}
