
import { Suspense } from "react";
import { connection } from "next/server";
import type { Metadata } from "next";
import Solutions from "./Solutions";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("/solutions");
}

async function DynamicMetadataMarker() {
  await connection();
  return null;
}

export default function SolutionsPage() {
  return (
    <>
      <Suspense fallback={null}>
        <DynamicMetadataMarker />
      </Suspense>

      <Solutions />
    </>
  );
}
