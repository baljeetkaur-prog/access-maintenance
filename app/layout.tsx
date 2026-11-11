
import type { Metadata } from "next";
import { defaultSEO } from "@/lib/seo";
import "./globals.css";
import PublicLayout from "./components/PublicLayout";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: defaultSEO.title,
  description: defaultSEO.description,
  keywords: defaultSEO.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <Toaster position="top-right" />
        <PublicLayout>{children}</PublicLayout>
      </body>
    </html>
  );
}
