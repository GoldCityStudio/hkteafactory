'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 'green-tea',
    name: { zh: '綠茶', en: 'Green Tea' },
    description: { zh: '清新雅致的綠茶系列', en: 'Fresh and elegant green tea series' },
    image: '/images/green-tea.jpg',
    color: 'from-green-600 to-green-800',
    href: '/products/green-tea'
  },
  {
    id: 'black-tea',
    name: { zh: '紅茶', en: 'Black Tea' },
    description: { zh: '醇厚甘美的紅茶系列', en: 'Rich and sweet black tea series' },
    image: '/images/black-tea.jpg',
    color: 'from-red-600 to-red-800',
    href: '/products/black-tea'
  },
  {
    id: 'oolong-tea',
    name: { zh: '烏龍茶', en: 'Oolong Tea' },
    description: { zh: '半發酵茶的獨特韻味', en: 'Unique flavor of semi-fermented tea' },
    image: '/images/oolong-tea.jpg',
    color: 'from-orange-600 to-orange-800',
    href: '/products/oolong-tea'
  },
  {
    id: 'white-tea',
    name: { zh: '白茶', en: 'White Tea' },
    description: { zh: '清淡雅致的白茶系列', en: 'Light and elegant white tea series' },
    image: '/images/white-tea.jpg',
    color: 'from-gray-400 to-gray-600',
    href: '/products/white-tea'
  },
  {
    id: 'pu-erh',
    name: { zh: '普洱茶', en: 'Pu-erh Tea' },
    description: { zh: '醇厚陳香的普洱茶系列', en: 'Rich and aged pu-erh tea series' },
    image: '/images/dark-tea.jpg',
    color: 'from-amber-600 to-amber-800',
    href: '/products/pu-erh'
  },
  {
    id: 'flower-tea',
    name: { zh: '花茶', en: 'Flower Tea' },
    description: { zh: '花香四溢的花茶系列', en: 'Fragrant flower tea series' },
    image: '/images/flower-tea.jpg',
    color: 'from-pink-400 to-pink-600',
    href: '/products/flower-tea'
  },
  {
    id: 'honey-product',
    name: { zh: '蜂蜜', en: 'Honey' },
    description: { zh: '天然純淨的蜂蜜系列', en: 'Natural and pure honey series' },
    image: '/images/honey-premium.jpg',
    color: 'from-yellow-500 to-yellow-700',
    href: '/products/honey-product'
  },
  {
    id: 'tea-bags',
    name: { zh: '茶包', en: 'Tea Bags' },
    description: { zh: '方便快捷的茶包系列', en: 'Convenient tea bag series' },
    image: '/images/tea-bags.jpg',
    color: 'from-blue-500 to-blue-700',
    href: '/products/tea-bags'
  }
];

function CategoryCard({ category, index }: { category: typeof categories[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <Link href={category.href}>
        <div className="relative h-64">
          <motion.div
            className="w-full h-full"
            whileHover={{
              scale: 1.1,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={category.image}
              alt={category.name.zh}
              fill
              className="object-cover"
            />
          </motion.div>
          <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80`} />
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">{category.name.zh}</h3>
            <p className="text-sm opacity-90">{category.description.zh}</p>
            <div className="mt-4 flex items-center text-sm">
              <span>探索系列</span>
              <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-emerald-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-96 flex items-center justify-center overflow-hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=2070"
          alt="Products Hero"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent z-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-20 text-center text-white p-4"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
            商店
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            嚴選優質茶葉，為您帶來最純正的茶香體驗
          </p>
        </motion.div>
      </motion.section>

      {/* Main Content with Sidebar */}
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar Navigation */}
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
                    className="flex items-center p-3 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3 group-hover:bg-emerald-200 transition-colors">
                      <span className="text-emerald-600 text-sm font-semibold">
                        {category.name.zh.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 group-hover:text-emerald-700">
                        {category.name.zh}
                      </div>
                      <div className="text-sm text-gray-500 group-hover:text-emerald-600">
                        {category.description.zh}
                      </div>
                    </div>
                    <svg 
                      className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 transform group-hover:translate-x-1 transition-transform" 
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

        {/* Main Content */}
        <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                精選茶葉系列
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                探索我們精心挑選的各種茶葉系列，每一款都代表著不同的風味與文化
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <CategoryCard key={category.id} category={category} index={index} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 