
import { Schema, models, model } from "mongoose";

const AdminSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    passwordHash: {
      type: String,
      required: true,
    },

    resetPasswordTokenHash: {
      type: String,
      default: null,
    },

    resetPasswordExpiresAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Admin =
  models.Admin || model("Admin", AdminSchema);

export default Admin;
