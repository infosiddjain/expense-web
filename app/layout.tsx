import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Expense — Offline Money & Expense Tracker",
  description: "Track every expense, manage multi-dashboard budgets, and analyze spending habits with strict offline-first privacy. Created by Siddharth Jain.",
  keywords: ["Expense Tracker", "Expense App", "Money Manager", "Offline Expense Tracker", "Siddharth Jain", "Siddharth Gauri"],
  openGraph: {
    title: "Expense — Personal Money Companion",
    description: "Multi-dashboard expense tracker with custom category budgets, analytics, and 100% offline privacy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0B0F0E] text-[#F4F7F6]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
