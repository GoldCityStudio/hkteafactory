'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Language } from '@/app/types';

const navItems = {
  zh: [
    { name: '首頁', href: '/' },
    { 
      name: '商店', 
      href: '/products',
      subItems: [
        { name: '綠茶', href: '/products/green-tea' },
        { name: '紅茶', href: '/products/black-tea' },
        { name: '青茶/烏龍', href: '/products/qingcha-oolong' },
        { name: '普洱', href: '/products/pu-erh' },
        { name: '花茶', href: '/products/flower-tea' },
        { name: '台灣茶', href: '/products/taiwan-tea' },
        { name: '茶包', href: '/products/tea-bags' },
        { name: '蜂蜜', href: '/products/honey-product' },
        { name: '白茶', href: '/products/white-tea' }
      ]
    },
    {
      name: '皇牌產品',
      href: '/star-products',
      subItems: [
        { name: '龍井', href: '/star-products/longjing' },
        { name: '鐵觀音', href: '/star-products/tieguanyin' },
        { name: '蜂蜜', href: '/star-products/honey' }
      ]
    },
    { name: '禮金定製', href: '/gift-customization', subItems: [ { name: '茶葉禮盒', href: '/gift-customization/tea-gift-box' }, { name: '宴會回禮', href: '/gift-customization/party-favors' }, { name: '散水禮物', href: '/gift-customization/water-gifts' } ] },
    { name: '公司資訊', href: '/company-info' },
    { 
      name: '關於我們', 
      href: '/about',
      subItems: [
        { name: '品牌故事', href: '/about/brand-story' },
        { name: '創辦人介紹', href: '/about/founder-intro' }
      ]
    }
  ],
  en: [
    { name: 'Home', href: '/' },
    { 
      name: 'Shop', 
      href: '/products',
      subItems: [
        { name: 'Green Tea', href: '/products/green-tea' },
        { name: 'Black Tea', href: '/products/black-tea' },
        { name: 'Qingcha/Oolong', href: '/products/qingcha-oolong' },
        { name: 'Pu-erh', href: '/products/pu-erh' },
        { name: 'Flower Tea', href: '/products/flower-tea' },
        { name: 'Taiwan Tea', href: '/products/taiwan-tea' },
        { name: 'Tea Bags', href: '/products/tea-bags' },
        { name: 'Honey', href: '/products/honey-product' },
        { name: 'White Tea', href: '/products/white-tea' }
      ]
    },
    {
      name: 'Star Products',
      href: '/star-products',
      subItems: [
        { name: 'Longjing', href: '/star-products/longjing' },
        { name: 'Tieguanyin', href: '/star-products/tieguanyin' },
        { name: 'Honey', href: '/star-products/honey' }
      ]
    },
    { name: '禮金定製', href: '/gift-customization', subItems: [ { name: 'Tea Gift Box', href: '/gift-customization/tea-gift-box' }, { name: 'Party Favors', href: '/gift-customization/party-favors' }, { name: 'Water Gifts', href: '/gift-customization/water-gifts' } ] },
    { name: 'Company Info', href: '/company-info' },
    { 
      name: 'About Us', 
      href: '/about',
      subItems: [
        { name: 'Brand Story', href: '/about/brand-story' },
        { name: 'Founder Introduction', href: '/about/founder-intro' }
      ]
    }
  ]
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language>('zh');

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-[0_0_25px_rgba(255,255,255,0.7)] border-b-2 border-white/70"
    >
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
                      fallback.textContent = language === 'zh' ? '烘茶源' : 'Hong Tea Factory';
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems[language].map((item) => (
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
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={toggleLanguage}
                className="relative text-gray-700 hover:text-emerald-600 transition-colors px-3 py-1 rounded-full border border-emerald-200 hover:border-emerald-300 overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-emerald-500/10"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="relative z-10">{language === 'zh' ? 'EN' : '中文'}</span>
              </motion.button>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={toggleLanguage}
                className="relative text-gray-700 hover:text-emerald-600 transition-colors px-3 py-1 rounded-full border border-emerald-200 hover:border-emerald-300 overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-emerald-500/10"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="relative z-10">{language === 'zh' ? 'EN' : '中文'}</span>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen(!isOpen)}
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
                  {isOpen ? (
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
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white/90 backdrop-blur-md border-t border-white/70 relative"
      >
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/90 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-white to-transparent blur-md" />
        <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-transparent via-white/80 to-transparent blur-lg" />
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems[language].map((item) => (
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
        </div>
      </motion.div>
    </motion.nav>
  );
} 