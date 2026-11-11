
import { Suspense } from "react";
import { connection } from "next/server";
import type { Metadata } from "next";
import Industrial from "./Industrial";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("/industries/industrial-logistics");
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

      <Industrial />
    </>
  );
}
