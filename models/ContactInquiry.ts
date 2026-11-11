import mongoose, { Schema, model, models } from "mongoose";

const ContactInquirySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 254,
    },
    company: {
      type: String,
      trim: true,
      maxlength: 150,
      default: "",
    },
    phone: {
      type: String,
      trim: true,
      maxlength: 40,
      default: "",
    },
    location: {
      type: String,
      trim: true,
      maxlength: 250,
      default: "",
    },
    service: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },
    timing: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    requirements: {
      type: String,
      trim: true,
      maxlength: 5000,
      default: "",
    },
    status: {
      type: String,
      enum: ["new", "in-progress", "contacted", "closed"],
      default: "new",
    },
  },
  { timestamps: true }
);

const ContactInquiry =
  models.ContactInquiry ||
  model("ContactInquiry", ContactInquirySchema);

export default ContactInquiry;