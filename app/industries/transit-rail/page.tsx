
import { Suspense } from "react";
import { connection } from "next/server";
import type { Metadata } from "next";
import TransitRail from "./Transit-rail";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("/industries/transit-rail");
}

async function DynamicMetadataMarker() {
  await connection();
  return null;
}

export default function TransitRailPage() {
  return (
    <>
      <Suspense fallback={null}>
        <DynamicMetadataMarker />
      </Suspense>

      <TransitRail />
    </>
  );
}
