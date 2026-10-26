
import mongoose, { Schema, type Model } from "mongoose";

const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    publishDate: {
      type: Date,
      default: null,
    },
    metaTitle: {
      type: String,
      trim: true,
      default: "",
    },
    metaDescription: {
      type: String,
      trim: true,
      default: "",
    },
    keywords: {
      type: [String],
      default: [],
    },
    content: {
      type: String,
      default: "",
    },
    tags: {
      type: [String],
      default: [],
    },
    category: {
  type: String,
  required: true,
  trim: true,
  default: "General",
},
    imageUrl: {
      type: String,
      default: "",
    },
    imagePublicId: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
  },
  {
    timestamps: true,
  }
);

const Blog: Model<any> =
  mongoose.models.Blog ||
  mongoose.model("Blog", BlogSchema);

export default Blog;
