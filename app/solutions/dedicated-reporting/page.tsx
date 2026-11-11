
import { Suspense } from "react";
import { connection } from "next/server";
import type { Metadata } from "next";
import Reporting from "./Reporting";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("/solutions/dedicated-reporting");
}

async function DynamicMetadataMarker() {
  await connection();
  return null;
}

export default function DedicatedReportingPage() {
  return (
    <>
      <Suspense fallback={null}>
        <DynamicMetadataMarker />
      </Suspense>

      <Reporting />
    </>
  );
}
