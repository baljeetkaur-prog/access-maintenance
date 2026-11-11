
import { Suspense } from "react";
import { connection } from "next/server";
import type { Metadata } from "next";
import Services from "./Services";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("/services");
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

      <Services />
    </>
  );
}
