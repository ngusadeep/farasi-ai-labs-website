import type { Metadata } from "next";

import "./globals.css";
import { Navbar } from "@/components/features/navbar5";
import { Footer7 } from "@/components/features/footer";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Farasi Ai Lab",
  description: "AI innovation lab in Africa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer7 />
      </body>
    </html>
  );
}
