
import { Suspense } from "react";
import { connection } from "next/server";
import type { Metadata } from "next";
import About from "./About";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("/about-us");
}

async function DynamicMetadataMarker() {
  await connection();
  return null;
}

export default function AboutUsPage() {
  return (
    <>
      <Suspense fallback={null}>
        <DynamicMetadataMarker />
      </Suspense>

      <About />
    </>
  );
}
