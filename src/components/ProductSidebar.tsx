'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 'green-tea',
    name: { zh: '綠茶', en: 'Green Tea' },
    description: { zh: '清新雅致的綠茶系列', en: 'Fresh and elegant green tea series' },
    href: '/products/green-tea'
  },
  {
    id: 'black-tea',
    name: { zh: '紅茶', en: 'Black Tea' },
    description: { zh: '醇厚甘美的紅茶系列', en: 'Rich and sweet black tea series' },
    href: '/products/black-tea'
  },
  {
    id: 'oolong-tea',
    name: { zh: '烏龍茶', en: 'Oolong Tea' },
    description: { zh: '半發酵茶的獨特韻味', en: 'Unique flavor of semi-fermented tea' },
    href: '/products/oolong-tea'
  },
  {
    id: 'white-tea',
    name: { zh: '白茶', en: 'White Tea' },
    description: { zh: '清淡雅致的白茶系列', en: 'Light and elegant white tea series' },
    href: '/products/white-tea'
  },
  {
    id: 'pu-erh',
    name: { zh: '普洱茶', en: 'Pu-erh Tea' },
    description: { zh: '醇厚陳香的普洱茶系列', en: 'Rich and aged pu-erh tea series' },
    href: '/products/pu-erh'
  },
  {
    id: 'flower-tea',
    name: { zh: '花茶', en: 'Flower Tea' },
    description: { zh: '花香四溢的花茶系列', en: 'Fragrant flower tea series' },
    href: '/products/flower-tea'
  },
  {
    id: 'honey-product',
    name: { zh: '蜂蜜', en: 'Honey' },
    description: { zh: '天然純淨的蜂蜜系列', en: 'Natural and pure honey series' },
    href: '/products/honey-product'
  },
  {
    id: 'tea-bags',
    name: { zh: '茶包', en: 'Tea Bags' },
    description: { zh: '方便快捷的茶包系列', en: 'Convenient tea bag series' },
    href: '/products/tea-bags'
  }
];

interface ProductSidebarProps {
  currentCategory?: string;
}

export default function ProductSidebar({ currentCategory }: ProductSidebarProps) {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="w-full lg:w-80 bg-white shadow-lg lg:shadow-xl p-6 lg:p-8"
    >
      <div className="sticky top-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">產品分類</h2>
        <nav className="space-y-2">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <Link
                href={category.href}
                className={`flex items-center p-3 rounded-lg transition-all duration-200 group ${
                  currentCategory === category.id
                    ? 'bg-emerald-100 text-emerald-700 border-l-4 border-emerald-500'
                    : 'hover:bg-emerald-50 hover:text-emerald-700'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 transition-colors ${
                  currentCategory === category.id
                    ? 'bg-emerald-200'
                    : 'bg-emerald-100 group-hover:bg-emerald-200'
                }`}>
                  <span className={`text-sm font-semibold ${
                    currentCategory === category.id
                      ? 'text-emerald-700'
                      : 'text-emerald-600'
                  }`}>
                    {category.name.zh.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <div className={`font-medium group-hover:text-emerald-700 ${
                    currentCategory === category.id
                      ? 'text-emerald-700'
                      : 'text-gray-900'
                  }`}>
                    {category.name.zh}
                  </div>
                  <div className={`text-sm group-hover:text-emerald-600 ${
                    currentCategory === category.id
                      ? 'text-emerald-600'
                      : 'text-gray-500'
                  }`}>
                    {category.description.zh}
                  </div>
                </div>
                <svg 
                  className={`w-4 h-4 transform group-hover:translate-x-1 transition-transform ${
                    currentCategory === category.id
                      ? 'text-emerald-600'
                      : 'text-gray-400 group-hover:text-emerald-600'
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Additional Info */}
        <div className="mt-8 p-4 bg-emerald-50 rounded-lg">
          <h3 className="font-semibold text-emerald-800 mb-2">購物須知</h3>
          <ul className="text-sm text-emerald-700 space-y-1">
            <li>• 全港免費送貨</li>
            <li>• 7天退換保證</li>
            <li>• 專業茶葉諮詢</li>
            <li>• 會員專享優惠</li>
          </ul>
        </div>
      </div>
    </motion.aside>
  );
} 