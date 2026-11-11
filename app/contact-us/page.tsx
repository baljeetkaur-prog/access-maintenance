
import { Suspense } from "react";
import { connection } from "next/server";
import type { Metadata } from "next";
import Contact from "./Contact";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("/contact-us");
}

async function DynamicMetadataMarker() {
  await connection();
  return null;
}

export default function ContactUsPage() {
  return (
    <>
      <Suspense fallback={null}>
        <DynamicMetadataMarker />
      </Suspense>

      <Contact />
    </>
  );
}
