
import { Suspense } from "react";
import { connection } from "next/server";
import type { Metadata } from "next";
import Workforce from "./Workforce";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("/solutions/workforce-coordination");
}

async function DynamicMetadataMarker() {
  await connection();
  return null;
}

export default function WorkforceCoordinationPage() {
  return (
    <>
      <Suspense fallback={null}>
        <DynamicMetadataMarker />
      </Suspense>

      <Workforce />
    </>
  );
}
