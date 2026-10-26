
import mongoose, { Schema, models, model } from "mongoose";

const TextSectionSchema = new Schema(
  {
    heading: { type: String, required: true, trim: true },
    paragraph: { type: String, required: true, trim: true },
  },
  { _id: true }
);

const DeliveryStepSchema = new Schema(
  {
    heading: { type: String, required: true, trim: true },
    paragraph: { type: String, required: true, trim: true },
  },
  { _id: true }
);

const ServiceItemSchema = new Schema(
  {
    // Existing service information
    name: { type: String, required: true, trim: true },
    paragraph: { type: String, required: true, trim: true },
    link: { type: String, default: "", trim: true },

    // Individual service page content
    overview: {
      heading: { type: String, default: "", trim: true },
      paragraph: { type: String, default: "", trim: true },
    },

    scope: {
      type: [TextSectionSchema],
      default: [],
    },

    deliveryProcess: {
      type: [DeliveryStepSchema],
      default: [],
    },

    firstConversation: {
      type: [String],
      default: [],
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { _id: true }
);

const ServiceCategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    // Keep this: it belongs to the category, not the individual service.
    shortDescription: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      url: { type: String, required: true },
      publicId: { type: String, required: true },
    },

    overview: {
      heading: { type: String, required: true, trim: true },
      paragraph: { type: String, required: true, trim: true },
    },

    services: {
      type: [ServiceItemSchema],
      default: [],
    },

    scope: {
      type: [TextSectionSchema],
      default: [],
    },

    deliveryProcess: {
      type: [DeliveryStepSchema],
      validate: {
        validator: (items: unknown[]) => items.length === 4,
        message: "Delivery process must contain exactly 4 steps.",
      },
    },

    firstConversation: {
      type: [String],
      validate: {
        validator: (items: string[]) => items.length === 4,
        message: "First conversation must contain exactly 4 points.",
      },
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const ServiceCategory =
  models.ServiceCategory ||
  model("ServiceCategory", ServiceCategorySchema);

export default ServiceCategory;
