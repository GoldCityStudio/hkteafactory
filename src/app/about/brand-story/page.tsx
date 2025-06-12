'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BrandStoryPage() {
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
          alt="Brand Story Hero"
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
            品牌故事
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            傳承百年茶道，創新現代品味
          </p>
        </motion.div>
      </motion.section>

      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white p-8 rounded-lg shadow-xl"
        >
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              「烘茶源」始於一個簡單的願景：將傳統茶文化與現代生活完美融合。我們的品牌故事，是一段關於傳承與創新的旅程，也是一個關於堅持與突破的故事。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">品牌理念</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-semibold text-gray-900">傳承：</span>
                  我們尊重並傳承傳統茶道文化，確保每一杯茶都蘊含著深厚的文化底蘊。
                </li>
                <li>
                  <span className="font-semibold text-gray-900">創新：</span>
                  我們不斷探索茶葉的新可能，為現代生活帶來更多便利與樂趣。
                </li>
                <li>
                  <span className="font-semibold text-gray-900">品質：</span>
                  我們堅持嚴選優質茶葉，確保每一款產品都達到最高標準。
                </li>
                <li>
                  <span className="font-semibold text-gray-900">永續：</span>
                  我們注重環保與永續發展，致力於為地球做出貢獻。
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">品牌歷程</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <span className="font-semibold text-gray-900">2010年：</span>
                  品牌創立，開始專注於優質茶葉的研發與推廣。
                </li>
                <li>
                  <span className="font-semibold text-gray-900">2015年：</span>
                  成功開發多款創新茶品，獲得市場認可。
                </li>
                <li>
                  <span className="font-semibold text-gray-900">2018年：</span>
                  建立自有茶園，實現從種植到銷售的全產業鏈。
                </li>
                <li>
                  <span className="font-semibold text-gray-900">2020年：</span>
                  推出定制化茶葉禮盒服務，滿足不同客戶需求。
                </li>
                <li>
                  <span className="font-semibold text-gray-900">2023年：</span>
                  品牌升級，推出全新形象與產品線。
                </li>
              </ol>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-center mt-12"
            >
              <p className="font-semibold text-xl text-emerald-700 mb-4">
                加入「烘茶源」，一起探索茶葉的無限可能！
              </p>
              <p className="text-lg text-gray-600">
                電話：(852) 1234 5678 | 電郵：info@hkteafactory.com
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 