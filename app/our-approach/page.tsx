
import { Suspense } from "react";
import { connection } from "next/server";
import type { Metadata } from "next";
import Approach from "./Approach";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("/our-approach");
}

async function DynamicMetadataMarker() {
  await connection();
  return null;
}

export default function OurApproachPage() {
  return (
    <>
      <Suspense fallback={null}>
        <DynamicMetadataMarker />
      </Suspense>

      <Approach />
    </>
  );
}
