
import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";

export async function GET() {
  try {
    const session = await getAdminSession();

    if (!session) {
      return NextResponse.json(
        { message: "Not authenticated." },
        { status: 401 }
      );
    }

    await connectDB();

    const admin = await Admin.findOne({
      email: session.email,
    }).select("_id email");

    if (!admin) {
      return NextResponse.json(
        { message: "Admin account not found." },
        { status: 401 }
      );
    }

    return NextResponse.json({
      authenticated: true,
      admin: {
        id: admin._id.toString(),
        email: admin.email,
      },
    });
  } catch (error) {
    console.error("Admin session error:", error);

    return NextResponse.json(
      { message: "Unable to verify session." },
      { status: 500 }
    );
  }
}
