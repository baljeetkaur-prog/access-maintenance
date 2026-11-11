
import { Suspense } from "react";
import { connection } from "next/server";
import type { Metadata } from "next";
import Privacy from "./Privacy";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("/privacy");
}

async function DynamicMetadataMarker() {
  await connection();
  return null;
}

export default function PrivacyPage() {
  return (
    <>
      <Suspense fallback={null}>
        <DynamicMetadataMarker />
      </Suspense>

      <Privacy />
    </>
  );
}
