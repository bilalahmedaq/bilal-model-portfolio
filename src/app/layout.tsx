import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { modelName } from "@/data/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${modelName} — Model Portfolio`,
  description: `Official digital portfolio of ${modelName}. Browse raw polaroids and measurements. Available for bookings worldwide.`,
  keywords: ["model portfolio", "digital comp card", "polaroids", modelName, "modeling"],
  openGraph: {
    title: `${modelName} — Model Portfolio`,
    description: `Official digital portfolio of ${modelName}. Raw polaroids and measurements.`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased min-h-screen" style={{ background: "#0c0c0c", color: "#f0ede8" }}>
        {children}
      </body>
    </html>
  );
}
