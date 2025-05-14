'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      router.push('/auth/login');
    }
  }, [user, router]);

  // If not authenticated, don't render anything
  if (!user || user.role !== 'admin') {
    return null;
  }

  const menuItems = [
    { name: '儀表板', href: '/admin', icon: '📊' },
    { name: '產品管理', href: '/admin/products', icon: '🍵' },
    { name: '訂單管理', href: '/admin/orders', icon: '📦' },
    { name: '用戶管理', href: '/admin/users', icon: '👥' },
    { name: '內容管理', href: '/admin/content', icon: '📝' },
    { name: '設定', href: '/admin/settings', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <nav className="h-full flex flex-col">
          <div className="flex-1 px-4 py-6">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100"
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 border-t">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                {user.name}
              </span>
              <button
                onClick={() => logout()}
                className="px-3 py-1 text-sm text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                登出
              </button>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className={`${isSidebarOpen ? 'lg:ml-64' : ''} transition-margin duration-300 ease-in-out`}>
        {/* Mobile Menu Button */}
        <div className="lg:hidden fixed top-4 left-4 z-50">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-md bg-white shadow-lg"
          >
            <span className="sr-only">開啟選單</span>
            ☰
          </button>
        </div>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
} 