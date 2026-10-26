
import { Suspense } from "react";
import { connection } from "next/server";
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";

import AboutSection from "./components/AboutSection";
import Approach from "./components/Approach";
import BrandsSection from "./components/BrandsSection";
import Carousel from "./components/Carousel";
import CtaSection from "./components/CtaSection";
import FooterCta from "./components/FooterCta";
import IndustriesSection from "./components/IndustriesSection";
import ProgramSection from "./components/ProgramSection";
import ServiceSection from "./components/ServiceSection";
import Standards from "./components/Standards";
import TeamSection from "./components/TeamSection";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("/");
}

async function DynamicMetadataMarker() {
  await connection();
  return null;
}

export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <DynamicMetadataMarker />
      </Suspense>

      <main>
        <Carousel />
        <AboutSection />
        <TeamSection/>
        <ServiceSection />
        <ProgramSection />
        <IndustriesSection />
        <Standards />
        <Approach />
        <CtaSection />
        <BrandsSection />
        <FooterCta />
      </main>
    </>
  );
}
