import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientBody from "@/components/ClientBody";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HEXAD Engineering LLP - Engineering Services & Solutions",
  description:
    "HEXAD Engineering LLP is a multidisciplinary firm combining expertise in engineering, design, and technology to drive progress and innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
