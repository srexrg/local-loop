import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "Local-Loop - Local Event Management Platform",
  description:
    "Discover and manage local events effortlessly with Local-Loop. Join local communities and stay updated.",
  keywords: [
    "local events",
    "event management",
    "community events",
    "event planning",
    "local community",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          variables: { colorPrimary: "#16a34a" },
        }}
      >
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          {children}
          <Analytics />
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
