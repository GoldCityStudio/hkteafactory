import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ClientLayout from "../components/ClientLayout";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HK Tea Factory - Premium Tea Experience",
  description: "Discover the finest selection of premium teas from HK Tea Factory.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={`${inter.className} bg-cream-50`}>
        <ClientLayout>
          <Navbar />
          <main className="min-h-screen pt-16">
        {children}
          </main>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
