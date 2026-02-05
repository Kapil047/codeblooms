import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CodeBlooms — Premium Web Development Studio",
    template: "%s | CodeBlooms",
  },
  description:
    "We design and develop premium websites, SaaS platforms, and digital products using modern technologies like Next.js, React, and Tailwind CSS for global clients.",
  keywords: [
    "Web Development Agency",
    "Next.js Development",
    "React Developers",
    "UI UX Design Studio",
    "SaaS Website Development",
    "CodeBlooms",
  ],
  authors: [{ name: "CodeBlooms" }],
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
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
