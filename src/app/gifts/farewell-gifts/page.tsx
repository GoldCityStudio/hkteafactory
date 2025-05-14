'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const farewellGifts = [
  {
    id: 'tea-honey-set',
    name: '茶葉蜂蜜禮盒',
    description: '精選茶葉搭配有機蜂蜜，讓同事帶走美好的回憶。',
    price: 'HK$168',
    image: '/images/gifts/tea-honey-set.jpg',
    contents: [
      '精選茶葉 100g',
      '有機蜂蜜 200g',
      '精美禮盒包裝',
      '客製化感謝卡'
    ],
    minOrder: 20
  },
  {
    id: 'tea-set',
    name: '茶具禮盒',
    description: '精美茶具套裝，實用又美觀，適合送給愛茶的同事。',
    price: 'HK$288',
    image: '/images/gifts/tea-set.jpg',
    contents: [
      '精美茶具一套',
      '精選茶葉 100g',
      '精美禮盒包裝',
      '客製化感謝卡'
    ],
    minOrder: 10
  },
  {
    id: 'premium-tea-box',
    name: '尊貴茶葉禮盒',
    description: '精選多款優質茶葉，搭配精美包裝，是送禮的最佳選擇。',
    price: 'HK$388',
    image: '/images/gifts/premium-tea-box.jpg',
    contents: [
      '明前獅峰龍井 100g',
      '鐵觀音 100g',
      '班章宮廷普洱餅 200g',
      '精美禮盒包裝',
      '客製化感謝卡'
    ],
    minOrder: 5
  }
];

export default function FarewellGiftsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">散水禮物</h1>
        <p className="text-lg text-gray-600">精緻的散水禮物，讓您的告別更加溫馨難忘</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {farewellGifts.map((gift, index) => (
          <motion.div
            key={gift.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-64">
              <Image
                src={gift.image}
                alt={gift.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {gift.name}
              </h2>
              <p className="text-gray-600 mb-4">
                {gift.description}
              </p>
              <div className="mb-4">
                <h3 className="font-medium text-gray-900 mb-2">禮盒內容：</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {gift.contents.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-emerald-600">
                    {gift.price}
                  </span>
                  <span className="text-sm text-gray-500">
                    最低訂購量：{gift.minOrder}份
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

      {/* Custom Farewell Gift Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-16 bg-gray-50 rounded-lg p-8"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">客製化散水禮物</h2>
          <p className="text-lg text-gray-600">
            我們可以根據您的需求，為您量身定制獨特的散水禮物。
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
              <li>公司標誌印刷</li>
            </ul>
          </div>
          <button className="w-full bg-emerald-600 text-white py-3 px-6 rounded-md hover:bg-emerald-700 transition-colors">
            聯絡我們訂製禮物
          </button>
        </div>
      </motion.div>
    </div>
  );
} 