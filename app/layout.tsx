import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {
  ClerkLoaded,
  ClerkLoading,
  ClerkProvider,
  GoogleOneTap,
} from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Divex - Diving Centers Home",
  description: "The best diving centers management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-background`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
