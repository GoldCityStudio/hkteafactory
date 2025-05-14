'use client';

import { usePathname } from 'next/navigation';
import Navbar from './components/Navbar';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <main className={`min-h-screen ${!isAdminRoute ? 'pt-16' : ''}`}>
        {children}
      </main>
    </>
  );
} 