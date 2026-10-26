
import mongoose, { Schema, Document, Model } from "mongoose";

export interface ISEO extends Document {
  pagePath: string;
  pageName: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  isActive: boolean;
}

const SEOSchema = new Schema<ISEO>(
  {
    pagePath: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    pageName: {
      type: String,
      required: true,
      trim: true,
    },
    metaTitle: {
      type: String,
      required: true,
      trim: true,
    },
    metaDescription: {
      type: String,
      required: true,
      trim: true,
    },
    metaKeywords: {
      type: [String],
      default: [],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const SEO: Model<ISEO> =
  mongoose.models.SEO ||
  mongoose.model<ISEO>("SEO", SEOSchema);

export default SEO;
