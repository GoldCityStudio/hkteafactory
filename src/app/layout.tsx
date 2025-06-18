import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ClientLayout from "../components/ClientLayout";
import Footer from "../components/Footer";
import Image from "next/image";
import BackToTopButton from "../components/BackToTopButton";

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
        <BackToTopButton />
        {/* WhatsApp Floating Button */}
        <a
          href="https://api.whatsapp.com/send/?phone=85266925798&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed z-50 bottom-6 right-6 bg-green-500 rounded-full shadow-lg p-3 hover:bg-green-600 transition-colors flex items-center justify-center"
          style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
          aria-label="WhatsApp Chat"
        >
          <Image src="/social-icons/whatsapp.svg" alt="WhatsApp" width={38} height={38} className="w-10 h-10" />
        </a>
      </body>
    </html>
  );
}
