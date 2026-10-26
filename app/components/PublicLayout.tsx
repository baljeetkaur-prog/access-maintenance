"use client";

import { Suspense, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PublicLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Suspense fallback={<>{children}</>}>
      <PublicLayoutContent>{children}</PublicLayoutContent>
    </Suspense>
  );
}

function PublicLayoutContent({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");

  if (isAdminPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}