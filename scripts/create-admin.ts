
import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Admin from "../models/Admin";

dotenv.config({ path: ".env.local", override: true });

async function createAdmin() {
  const uri = process.env.MONGODB_URI;
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD;

  console.log("Checking environment variables:", {
    mongo: Boolean(uri),
    email: Boolean(email),
    password: Boolean(password),
  });

  if (!uri || !email || !password) {
    throw new Error(
      "Required environment variables are missing. Check .env.local."
    );
  }

  if (password.length < 12) {
    throw new Error("Admin password must contain at least 12 characters.");
  }

  try {
    await mongoose.connect(uri);

    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      console.log("This admin account already exists.");
      return;
    }

    const passwordHash = await bcrypt.hash(password, 12);

    await Admin.create({ email, passwordHash });

    console.log("Admin account created successfully.");
  } finally {
    await mongoose.disconnect();
  }
}

createAdmin().catch((error) => {
  console.error("Could not create admin:", error.message);
  process.exitCode = 1;
});
