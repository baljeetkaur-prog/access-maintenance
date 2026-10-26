
import { Suspense } from "react";
import { connection } from "next/server";
import type { Metadata } from "next";
import SitePlanning from "./SitePlanning";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("/solutions/site-planning");
}

async function DynamicMetadataMarker() {
  await connection();
  return null;
}

export default function SitePlanningPage() {
  return (
    <>
      <Suspense fallback={null}>
        <DynamicMetadataMarker />
      </Suspense>

      <SitePlanning />
    </>
  );
}
