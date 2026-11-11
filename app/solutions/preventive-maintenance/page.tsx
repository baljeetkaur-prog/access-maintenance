
import { Suspense } from "react";
import { connection } from "next/server";
import type { Metadata } from "next";
import Maintenance from "./Maintenance";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("/solutions/preventive-maintenance");
}

async function DynamicMetadataMarker() {
  await connection();
  return null;
}

export default function PreventiveMaintenancePage() {
  return (
    <>
      <Suspense fallback={null}>
        <DynamicMetadataMarker />
      </Suspense>

      <Maintenance />
    </>
  );
}
