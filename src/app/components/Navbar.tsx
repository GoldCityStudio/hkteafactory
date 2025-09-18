'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Language } from '@/app/types';
import { useCart } from '@/app/context/CartContext';
import { useAuth } from '@/lib/auth/AuthContext';
import Cart from '@/components/Cart';

const navItems = {
  zh: [
    { 
      name: '關於我們', 
      href: '/about',
      subItems: [
        { name: '品牌故事', href: '/about/brand-story' },
        { name: '創辦人介紹', href: '/about/founder-intro' }
      ]
    },
    {
      name: '皇牌產品',
      href: '/star-products',
      subItems: [
        { name: '龍井', href: '/star-products/longjing' },
        { name: '鐵觀音', href: '/star-products/tieguanyin' },
        { name: '台灣烏龍', href: '/star-products/taiwan-oolong' },
        { name: '蜂蜜', href: '/star-products/honey' }
      ]
    },
    { 
      name: '商店', 
      href: '/products',
      subItems: [
        { name: '綠茶', href: '/products/green-tea' },
        { name: '青茶(烏龍茶)', href: '/products/qingcha-oolong' },
        { name: '紅茶', href: '/products/black-tea' },
        { name: '白茶', href: '/products/white-tea' },
        { name: '黑茶', href: '/products/dark-tea' },
        { name: '普洱茶', href: '/products/pu-erh' },
        { name: '花茶', href: '/products/flower-tea' },
        { name: '台灣茶', href: '/products/taiwanese-tea' },
        { name: '精選茶葉', href: '/products/premium-tea' },
        { name: '茶包', href: '/products/tea-bags' },
        { name: '茶餅', href: '/products/tea-cakes' },
        { name: '蜂蜜', href: '/products/honey-product' },
        { name: '茶具', href: '/products/tea-ware' }
      ]
    },
    { name: '禮盒訂製', href: '/gift-customization', subItems: [ 
      { name: '茶葉禮盒', href: '/gift-customization/tea-gift-box' }, 
      { name: '宴會禮盒', href: '/gift-customization/party-favors' }, 
      { name: '散水禮物', href: '/gift-customization/water-gifts' } 
    ] },
    { name: '公司資訊', href: '/company-info' },
    { name: '聯絡我們', href: '/contact' },
    { name: '最新動向', href: '/news' },
  ],
  en: [
    { 
      name: 'About Us', 
      href: '/about',
      subItems: [
        { name: 'Brand Story', href: '/about/brand-story' },
        { name: 'Founder Introduction', href: '/about/founder-intro' }
      ]
    },
    {
      name: 'Star Products',
      href: '/star-products',
      subItems: [
        { name: 'Longjing', href: '/star-products/longjing' },
        { name: 'Tieguanyin', href: '/star-products/tieguanyin' },
        { name: 'Taiwan Oolong', href: '/star-products/taiwan-oolong' },
        { name: 'Honey', href: '/star-products/honey' }
      ]
    },
    { 
      name: 'Shop', 
      href: '/products',
      subItems: [
        { name: 'Green Tea', href: '/products/green-tea' },
        { name: 'Oolong Tea', href: '/products/qingcha-oolong' },
        { name: 'Black Tea', href: '/products/black-tea' },
        { name: 'White Tea', href: '/products/white-tea' },
        { name: 'Dark Tea', href: '/products/dark-tea' },
        { name: 'Pu-erh Tea', href: '/products/pu-erh' },
        { name: 'Flower Tea', href: '/products/flower-tea' },
        { name: 'Taiwan Tea', href: '/products/taiwanese-tea' },
        { name: 'Premium Tea', href: '/products/premium-tea' },
        { name: 'Tea Bags', href: '/products/tea-bags' },
        { name: 'Tea Cakes', href: '/products/tea-cakes' },
        { name: 'Honey', href: '/products/honey-product' },
        { name: 'Tea Ware', href: '/products/tea-ware' }
      ]
    },
    { name: 'Gift Customization', href: '/gift-customization', subItems: [ 
      { name: 'Tea Gift Box', href: '/gift-customization/tea-gift-box' }, 
      { name: 'Party Gift Box', href: '/gift-customization/party-favors' }, 
      { name: 'Water Gifts', href: '/gift-customization/water-gifts' } 
    ] },
    { name: 'Company Info', href: '/company-info' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Latest News', href: '/news' },
  ]
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCart();
  const { user, logout } = useAuth();
  const [language, setLanguage] = useState<Language>('zh');
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-[0_0_25px_rgba(255,255,255,0.7)] border-b-2 border-white/70"
    >
      {/* Social Media Bar - Topmost */}
      <div className="w-full bg-white/90 border-b border-emerald-100 flex items-center justify-between py-1 z-50 px-4">
        {/* Language Switcher - Left */}
        <button
          onClick={toggleLanguage}
          className="text-emerald-700 hover:text-emerald-900 font-semibold px-2 py-1 rounded transition-colors border border-emerald-200 bg-white/70"
          aria-label="切換語言"
        >
          {isHydrated ? (language === 'zh' ? 'EN' : '中文') : 'EN'}
        </button>
        {/* Social Icons - Right */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/hkteafactory/" target="_blank" rel="noopener noreferrer" title="Facebook" className="hover:opacity-80">
            <Image src="/social-icons/facebook.svg" alt="Facebook" width={22} height={22} className="w-6 h-6" />
          </a>
          <a href="https://www.youtube.com/@hongkongteafactory" target="_blank" rel="noopener noreferrer" title="YouTube" className="hover:opacity-80">
            <Image src="/social-icons/youtube.svg" alt="YouTube" width={22} height={22} className="w-6 h-6" />
          </a>
          <a href="https://www.xiaohongshu.com/user/profile/65301554000000002a018aec?xhsshare=CopyLink&appuid=65301554000000002a018aec&apptime=1712463690" target="_blank" rel="noopener noreferrer" title="小紅書" className="hover:opacity-80">
            <Image src="/social-icons/xiaohongshu.svg" alt="小紅書" width={22} height={22} className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/hkteafactory/" target="_blank" rel="noopener noreferrer" title="Instagram" className="hover:opacity-80">
            <Image src="/social-icons/instagram.svg" alt="Instagram" width={22} height={22} className="w-6 h-6" />
          </a>
          <a href="https://wa.me/85212345678" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="hover:opacity-80">
            <Image src="/social-icons/whatsapp.svg" alt="WhatsApp" width={22} height={22} className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white/50 relative">
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-white/90 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-white to-transparent blur-md" />
        <div className="absolute inset-x-0 bottom-0 h-[4px] bg-gradient-to-r from-transparent via-white/80 to-transparent blur-lg" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center relative"
            >
              <Link href="/" className="relative">
                <motion.div
                  className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <Image
                  src="/logo.png"
                  alt="Hong Tea Factory"
                  width={180}
                  height={60}
                  className="relative z-10 h-16 w-auto"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'text-emerald-900 font-bold text-2xl relative z-10';
                      fallback.textContent = isHydrated && language === 'zh' ? '烘茶源' : 'Hong Tea Factory';
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {isHydrated && navItems[language].map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                >
                  <div className="relative">
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-emerald-600 transition-colors relative group"
                    >
                      <motion.span
                        className="absolute inset-0 bg-emerald-500/10 rounded-full blur-sm opacity-0 group-hover:opacity-100"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0, 0.5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                    {item.subItems && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute left-0 mt-2 w-48 bg-white/90 backdrop-blur-md rounded-md shadow-lg py-1 border border-emerald-100 invisible group-hover:visible"
                      >
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-all duration-300"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Cart Button */}
            <div className="hidden md:flex items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-700 hover:text-emerald-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </motion.button>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-gray-700 font-medium">
                      {isHydrated ? (language === 'zh' ? '歡迎' : 'Welcome') : 'Welcome'}, {user.name}
                    </span>
                    <button
                      onClick={logout}
                      className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
                    >
                      {isHydrated ? (language === 'zh' ? '登出' : 'Logout') : 'Logout'}
                    </button>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/auth/login"
                      className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
                    >
                      {isHydrated ? (language === 'zh' ? '登入' : 'Login') : 'Login'}
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/auth/register"
                      className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors font-medium"
                    >
                      {isHydrated ? (language === 'zh' ? '註冊' : 'Register') : 'Register'}
                    </Link>
                  </motion.div>
                </>
              )}
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center space-x-4">
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 relative"
              >
                <motion.div
                  className="absolute inset-0 bg-emerald-500/10 rounded-full blur-sm"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <svg
                  className="h-6 w-6 relative z-10"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white/90 backdrop-blur-md border-t border-white/70 relative"
      >
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/90 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-white to-transparent blur-md" />
        <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-transparent via-white/80 to-transparent blur-lg" />
        <div className="px-2 pt-2 pb-3 space-y-1">
          {isHydrated && navItems[language].map((item) => (
            <div key={item.name}>
              <motion.div
                whileHover={{ x: 10 }}
                className="block px-3 py-2 relative"
              >
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-emerald-600 transition-colors relative group"
                >
                  <motion.span
                    className="absolute inset-0 bg-emerald-500/10 rounded-full blur-sm opacity-0 group-hover:opacity-100"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <span className="relative z-10">{item.name}</span>
                </Link>
              </motion.div>
              {item.subItems && (
                <div className="pl-4">
                  {item.subItems.map((subItem) => (
                    <motion.div
                      key={subItem.name}
                      whileHover={{ x: 10 }}
                      className="block px-3 py-2 relative"
                    >
                      <Link
                        href={subItem.href}
                        className="text-sm text-gray-600 hover:text-emerald-600 transition-colors relative group"
                      >
                        <motion.span
                          className="absolute inset-0 bg-emerald-500/10 rounded-full blur-sm opacity-0 group-hover:opacity-100"
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0, 0.5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <span className="relative z-10">{subItem.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {/* Mobile Auth Buttons */}
          <div className="border-t border-gray-200 pt-4 mt-4">
            {user ? (
              <>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="block px-3 py-2 relative"
                >
                  <span className="text-gray-700 font-medium">
                    {isHydrated ? (language === 'zh' ? '歡迎' : 'Welcome') : 'Welcome'}, {user.name}
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="block px-3 py-2 relative"
                >
                  <button
                    onClick={logout}
                    className="text-gray-700 hover:text-emerald-600 transition-colors relative group"
                  >
                    <motion.span
                      className="absolute inset-0 bg-emerald-500/10 rounded-full blur-sm opacity-0 group-hover:opacity-100"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0, 0.5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <span className="relative z-10">{isHydrated ? (language === 'zh' ? '登出' : 'Logout') : 'Logout'}</span>
                  </button>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="block px-3 py-2 relative"
                >
                  <Link
                    href="/auth/login"
                    className="text-gray-700 hover:text-emerald-600 transition-colors relative group"
                  >
                    <motion.span
                      className="absolute inset-0 bg-emerald-500/10 rounded-full blur-sm opacity-0 group-hover:opacity-100"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0, 0.5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <span className="relative z-10">{isHydrated ? (language === 'zh' ? '登入' : 'Login') : 'Login'}</span>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="block px-3 py-2 relative"
                >
                  <Link
                    href="/auth/register"
                    className="text-gray-700 hover:text-emerald-600 transition-colors relative group"
                  >
                    <motion.span
                      className="absolute inset-0 bg-emerald-500/10 rounded-full blur-sm opacity-0 group-hover:opacity-100"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0, 0.5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <span className="relative z-10">{isHydrated ? (language === 'zh' ? '註冊' : 'Register') : 'Register'}</span>
                  </Link>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </motion.div>

      {/* Cart Component */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </motion.nav>
  );
} 