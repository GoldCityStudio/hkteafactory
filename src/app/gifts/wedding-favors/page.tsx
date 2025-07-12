'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const weddingFavors = [
  {
    id: 'premium-tea-favor',
    name: '尊貴茶葉回禮',
    description: '精選優質茶葉，搭配精美包裝，讓賓客帶走美好的回憶。',
    price: 'HK$88',
    image: '/images/gifts/premium-tea-favor.jpg',
    contents: [
      '明前獅峰龍井 50g',
      '精美禮盒包裝',
      '客製化感謝卡'
    ],
    minOrder: 50
  },
  {
    id: 'honey-tea-favor',
    name: '蜂蜜茶葉回禮',
    description: '精選茶葉搭配有機蜂蜜，甜蜜又健康。',
    price: 'HK$98',
    image: '/images/gifts/honey-tea-favor.jpg',
    contents: [
      '精選茶葉 50g',
      '有機蜂蜜 100g',
      '精美禮盒包裝',
      '客製化感謝卡'
    ],
    minOrder: 50
  },
  {
    id: 'tea-set-favor',
    name: '茶具回禮',
    description: '精美茶具套裝，實用又美觀。',
    price: 'HK$128',
    image: '/images/gifts/tea-set-favor.jpg',
    contents: [
      '精美茶具一套',
      '精選茶葉 50g',
      '精美禮盒包裝',
      '客製化感謝卡'
    ],
    minOrder: 30
  }
];

export default function WeddingFavorsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">婚宴回禮</h1>
        <p className="text-lg text-gray-600">為您的婚禮增添獨特的中式風味</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {weddingFavors.map((favor, index) => (
          <motion.div
            key={favor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-64 overflow-hidden">
              <motion.div
                className="w-full h-full"
                whileHover={{
                  scale: 1.1,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Image
                  src={favor.image}
                  alt={favor.name}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {favor.name}
              </h2>
              <p className="text-gray-600 mb-4">
                {favor.description}
              </p>
              <div className="mb-4">
                <h3 className="font-medium text-gray-900 mb-2">回禮內容：</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {favor.contents.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-emerald-600">
                    {favor.price}
                  </span>
                  <span className="text-sm text-gray-500">
                    最低訂購量：{favor.minOrder}份
                  </span>
                </div>
                <button className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors">
                  查詢詳情
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Custom Wedding Favor Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-16 bg-gray-50 rounded-lg p-8"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">客製化回禮</h2>
          <p className="text-lg text-gray-600">
            我們可以根據您的需求，為您量身定制獨特的婚宴回禮。
          </p>
        </div>
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">客製化選項：</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>客製化包裝設計</li>
              <li>個人化感謝卡</li>
              <li>特別的茶葉組合</li>
              <li>獨特的禮品搭配</li>
            </ul>
          </div>
          <button className="w-full bg-emerald-600 text-white py-3 px-6 rounded-md hover:bg-emerald-700 transition-colors">
            聯絡我們訂製回禮
          </button>
        </div>
      </motion.div>
    </div>
  );
} 