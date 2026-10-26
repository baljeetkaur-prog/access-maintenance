import { redirect } from "next/navigation";
import { Suspense } from "react";
import { getAdminSession } from "@/lib/auth";
import AdminLayout from "../AdminLayout";

export const instant = false;

export default async function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAdminSession();

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <Suspense fallback={<div />}>
      <AdminLayout email={session.email}>
        {children}
      </AdminLayout>
    </Suspense>
  );
}