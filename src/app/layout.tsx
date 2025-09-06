import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "POS System - Point of Sale Solution for Your Business",
  description: "Modern POS system offering streamlined sales, inventory management, analytics, secure payments, and cloud-based access for businesses of all sizes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
