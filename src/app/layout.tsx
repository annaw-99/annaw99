import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import { ThemeProvider } from 'next-themes'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "annaw-99",
  description: "annaw's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${bebasNeue.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
