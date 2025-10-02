import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import MatchPodLogo from "@/components/MatchPodLogo";
import Navbar from "@/components/Navbar";

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
  title: "MatchPod - Find Your Space. Find Your People.",
  description: "MatchPod helps you discover compatible roommates through lifestyle, habits, and vibe—not just location and price. Built for Gen-Z.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <div className="min-h-dvh flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <footer className="border-t border-border">
            <div className="mx-auto max-w-7xl px-6 py-10 grid gap-6 md:grid-cols-3 text-sm text-muted-foreground">
              <div>
                <div className="mb-3">
                  <MatchPodLogo size="sm" />
                </div>
                <p>Find Your Space. Find Your People.</p>
              </div>
              <div className="md:justify-self-center flex flex-col gap-2">
                <Link href="/how-it-works">How it works</Link>
                <Link href="/features">Features</Link>
                <Link href="/about">About</Link>
              </div>
              <div className="md:justify-self-end">
                <p className="text-xs">© {new Date().getFullYear()} MatchPod. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
