
import { Suspense } from "react";
import { connection } from "next/server";
import type { Metadata } from "next";
import Municipal from "./Municipal";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("/industries/municipal-public-facilities");
}

async function DynamicMetadataMarker() {
  await connection();
  return null;
}

export default function MunicipalPublicFacilitiesPage() {
  return (
    <>
      <Suspense fallback={null}>
        <DynamicMetadataMarker />
      </Suspense>

      <Municipal />
    </>
  );
}
