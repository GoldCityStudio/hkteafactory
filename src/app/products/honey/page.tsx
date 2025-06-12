'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HoneyPage() {
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
          src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=2070"
          alt="Honey Products Hero"
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
            蜂蜜系列
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            天然純正，健康美味
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
              蜂蜜以其天然純正的口感和豐富的營養價值而聞名。我們的蜂蜜系列精選來自各大名產區的優質蜂蜜，為您帶來最純正的蜂蜜體驗。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">產品特色</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <span className="font-semibold text-gray-900">嚴選蜂蜜：</span>
                    精選各大名產區的優質蜂蜜
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">傳統工藝：</span>
                    採用傳統製蜜工藝，保留蜂蜜原味
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">品質保證：</span>
                    嚴格把控每個環節，確保蜂蜜品質
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">多樣選擇：</span>
                    提供多種蜂蜜品種，滿足不同口味需求
                  </li>
                </ul>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=2070"
                  alt="Honey Products Collection"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-center mt-12"
            >
              <p className="font-semibold text-xl text-emerald-700 mb-4">
                立即選購，體驗「烘茶源」的優質蜂蜜！
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

