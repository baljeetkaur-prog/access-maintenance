
import { Suspense } from "react";
import { connection } from "next/server";
import type { Metadata } from "next";
import Response from "./Response";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("/solutions/24-7-response");
}

async function DynamicMetadataMarker() {
  await connection();
  return null;
}

export default function ResponsePage() {
  return (
    <>
      <Suspense fallback={null}>
        <DynamicMetadataMarker />
      </Suspense>

      <Response />
    </>
  );
}
