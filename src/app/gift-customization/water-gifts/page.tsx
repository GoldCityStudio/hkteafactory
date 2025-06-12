'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WaterGiftsPage() {
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
          src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=2070"
          alt="Water Gifts Hero"
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
            散水禮物定制
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            為您的離職時刻留下美好回憶
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
              「烘茶源」的散水禮物定制服務，為您的離職時刻提供獨具特色的禮品選擇。我們精心設計的散水禮物，不僅能讓同事感受到您的用心，更能為您的職場生涯畫上一個完美的句點。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">禮物特色</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-semibold text-gray-900">多樣化選擇：</span>
                  提供茶葉、茶具、茶點等多種禮物選擇，滿足不同場合需求。
                </li>
                <li>
                  <span className="font-semibold text-gray-900">個性化包裝：</span>
                  可根據公司文化定制包裝設計，彰顯獨特風格。
                </li>
                <li>
                  <span className="font-semibold text-gray-900">精美設計：</span>
                  專業設計團隊打造精美包裝，提升禮物品質感。
                </li>
                <li>
                  <span className="font-semibold text-gray-900">實用性強：</span>
                  精選實用性強的禮品，讓同事真正感受到您的用心。
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">定制流程</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <span className="font-semibold text-gray-900">需求溝通：</span>
                  與我們的禮品顧問詳細溝通您的公司文化、預算和數量需求。
                </li>
                <li>
                  <span className="font-semibold text-gray-900">方案設計：</span>
                  根據您的需求，提供多個禮物方案供您選擇。
                </li>
                <li>
                  <span className="font-semibold text-gray-900">確認細節：</span>
                  確定最終方案，包括禮品內容、包裝設計、加印內容等。
                </li>
                <li>
                  <span className="font-semibold text-gray-900">生產製作：</span>
                  專業團隊按方案進行生產製作，確保品質。
                </li>
                <li>
                  <span className="font-semibold text-gray-900">品質檢查：</span>
                  嚴格把控每個環節，確保禮物完美呈現。
                </li>
                <li>
                  <span className="font-semibold text-gray-900">配送服務：</span>
                  提供專業的包裝和配送服務，確保禮物安全送達。
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
                立即聯繫我們，為您的離職時刻定制獨特的禮物！
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

