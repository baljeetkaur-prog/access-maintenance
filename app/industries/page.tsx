
import { Suspense } from "react";
import { connection } from "next/server";
import type { Metadata } from "next";
import Industries from "./Industries";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("/industries");
}

async function DynamicMetadataMarker() {
  await connection();
  return null;
}

export default function IndustriesPage() {
  return (
    <>
      <Suspense fallback={null}>
        <DynamicMetadataMarker />
      </Suspense>

      <Industries />
    </>
  );
}
