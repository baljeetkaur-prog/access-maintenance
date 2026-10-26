
import { Suspense } from "react";
import { connection } from "next/server";
import type { Metadata } from "next";
import Continuity from "./Continuity";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("/solutions/operating-continuity");
}

async function DynamicMetadataMarker() {
  await connection();
  return null;
}

export default function OperatingContinuityPage() {
  return (
    <>
      <Suspense fallback={null}>
        <DynamicMetadataMarker />
      </Suspense>

      <Continuity />
    </>
  );
}
