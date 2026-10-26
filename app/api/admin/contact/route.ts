
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import ContactInquiry from "@/models/ContactInquiry";
import { getAdminSession } from "@/lib/auth";

const allowedServices = [
  "integrated-facilities",
  "technical-trades",
  "electrical",
  "plumbing",
  "hvac",
  "handyman",
  "emergency-services",
  "snow-ice-management",
  "grounds-landscape",
  "cleaning-janitorial",
];

const allowedTimings = [
  "planned-work",
  "recurring-programme",
  "urgent-requirement",
];

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim().toLowerCase();
    const company = String(body.company ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const location = String(body.location ?? "").trim();
    const service = String(body.service ?? "").trim();
    const timing = String(body.timing ?? "").trim();
    const requirements = String(body.requirements ?? "").trim();
    const recaptchaToken = String(body.recaptchaToken ?? "");
    const secret = process.env.RECAPTCHA_SECRET_KEY;

    if (!name || !email || !service || !timing) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (
      name.length > 120 ||
      email.length > 254 ||
      company.length > 150 ||
      phone.length > 40 ||
      location.length > 250 ||
      requirements.length > 5000
    ) {
      return NextResponse.json(
        { success: false, message: "One or more fields are too long." },
        { status: 400 }
      );
    }

    if (
      !allowedServices.includes(service) ||
      !allowedTimings.includes(timing)
    ) {
      return NextResponse.json(
        { success: false, message: "Please select a valid service and timing." },
        { status: 400 }
      );
    }

    if (!secret || !recaptchaToken) {
      return NextResponse.json(
        { success: false, message: "Please complete the reCAPTCHA verification." },
        { status: 400 }
      );
    }

    const captchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret,
          response: recaptchaToken,
        }),
        cache: "no-store",
      }
    );

    const captchaResult = await captchaResponse.json();

    if (!captchaResult.success) {
      return NextResponse.json(
        { success: false, message: "reCAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }

    await connectDB();

    await ContactInquiry.create({
      name,
      email,
      company,
      phone,
      location,
      service,
      timing,
      requirements,
    });

    return NextResponse.json(
      { success: true, message: "Your inquiry has been submitted successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact inquiry submission failed:", error);

    return NextResponse.json(
      { success: false, message: "Unable to submit your inquiry right now." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const session = await getAdminSession();

    if (!session) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectDB();

    const inquiries = await ContactInquiry.find()
      .sort({ createdAt: -1 })
      .limit(200)
      .lean();

    return NextResponse.json({
      success: true,
      inquiries: JSON.parse(JSON.stringify(inquiries)),
    });
  } catch (error) {
    console.error("Failed to load contact inquiries:", error);

    return NextResponse.json(
      { success: false, message: "Unable to load inquiries." },
      { status: 500 }
    );
  }
}
