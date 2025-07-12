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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">品牌歷程</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-xl font-bold text-emerald-700 mb-2">2022年</h3>
                  <p className="text-gray-700">品牌創立，開始專注於優質茶葉的研發與推廣。</p>
                </div>
                
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-xl font-bold text-emerald-700 mb-2">2023年</h3>
                  <p className="text-gray-700 mb-3">成功開發多款創新茶品，獲得市場認可。</p>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-emerald-800 mb-2">榮譽獎項：</h4>
                    <ul className="space-y-1 text-sm text-emerald-700">
                      <li>• 《全民Salute星企業》方力申合照</li>
                      <li>• 《Goodtaste Magazine 人物專訪》</li>
                      <li>• 《全民Salute星企業》</li>
                      <li>• 《亞洲模範企業獎》</li>
                      <li>• 《愛心企業》</li>
                    </ul>
                  </div>
                </div>
                
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-xl font-bold text-emerald-700 mb-2">2024年</h3>
                  <p className="text-gray-700 mb-3">建立自有茶園，實現從種植到銷售的全產業鏈。</p>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-emerald-800 mb-2">榮譽獎項：</h4>
                    <ul className="space-y-1 text-sm text-emerald-700">
                      <li>• 《年度最優秀茶葉及茶藝文化推動品牌》</li>
                    </ul>
                  </div>
                </div>
                
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-xl font-bold text-emerald-700 mb-2">2025年</h3>
                  <p className="text-gray-700">推出定制化茶葉禮盒服務，滿足不同客戶需求。</p>
                </div>
                
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-xl font-bold text-emerald-700 mb-2">2026年</h3>
                  <p className="text-gray-700">品牌升級，推出全新形象與產品線。</p>
                </div>
              </div>
            </motion.div>

            {/* Video Sections */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mt-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8">品牌影片</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Video 1 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 text-gray-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-600 font-medium">品牌故事影片</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">品牌起源</h3>
                    <p className="text-sm text-gray-600">了解烘茶源的創立故事與品牌理念</p>
                  </div>
                </motion.div>

                {/* Video 2 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                  className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 text-gray-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-600 font-medium">製茶工藝</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">傳統工藝</h3>
                    <p className="text-sm text-gray-600">探索我們的製茶工藝與品質保證</p>
                  </div>
                </motion.div>

                {/* Video 3 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                  className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 text-gray-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-600 font-medium">茶園風光</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">自有茶園</h3>
                    <p className="text-sm text-gray-600">走進我們的茶園，感受自然之美</p>
                  </div>
                </motion.div>

                {/* Video 4 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.9 }}
                  className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 text-gray-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-600 font-medium">產品展示</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">精選產品</h3>
                    <p className="text-sm text-gray-600">深入了解我們的明星產品系列</p>
                  </div>
                </motion.div>

                {/* Video 5 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 2.0 }}
                  className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 text-gray-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-600 font-medium">客戶見證</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">顧客分享</h3>
                    <p className="text-sm text-gray-600">聽聽顧客們對我們產品的真實評價</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
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