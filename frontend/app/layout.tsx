import type { Metadata } from "next";

import "./globals.css";
import { Navbar } from "@/components/features/navbar5";
import { Footer7 } from "@/components/features/footer";
import { Analytics } from "@vercel/analytics/react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Farasi Ai Lab",
  description: "AI innovation lab in Africa",
  icons: [
    // {
    //   rel: 'icon',
    //   url: '/favicon_light.svg',
    //   media: '(prefers-color-scheme: light)',   // 👈 used when light mode
    //   type: 'image/svg+xml',
    // },
    {
      rel: "icon",
      url: "/favicon.svg", // 👈 used when dark mode
      type: "image/svg+xml",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <Analytics />
        <Navbar />
        {children}
        <Footer7 />
      </body>
    </html>
  );
}
