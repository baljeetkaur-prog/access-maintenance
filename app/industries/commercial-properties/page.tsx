
import { Suspense } from "react";
import { connection } from "next/server";
import type { Metadata } from "next";
import Commercial from "./Commercial";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("/industries/commercial-properties");
}

async function DynamicMetadataMarker() {
  await connection();
  return null;
}

export default function Page() {
  return (
    <>
      <Suspense fallback={null}>
        <DynamicMetadataMarker />
      </Suspense>

      <Commercial />
    </>
  );
}
