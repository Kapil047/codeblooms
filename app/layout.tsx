import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import BackToTop from "@/components/common/BackToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
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
        className={`${poppins.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
