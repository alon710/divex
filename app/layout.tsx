import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Divex",
  description: "A Next.js starter template with Supabase authentication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
