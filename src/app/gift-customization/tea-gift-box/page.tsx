'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TeaGiftBoxPage() {
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
          alt="Tea Gift Box Hero"
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
            茶葉禮盒定制
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            為您打造獨具品味的茶葉禮盒
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
              「烘茶源」的茶葉禮盒定制服務，為您提供多樣化的選擇，讓您輕鬆打造獨具品味的禮品。無論是送給親朋好友，還是商務合作夥伴，一份精心定制的茶葉禮盒都能傳遞出您最真摯的心意。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">禮盒特色</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-semibold text-gray-900">精選茶品：</span>
                  可自由搭配多種優質茶葉，如西湖龍井、安溪鐵觀音、普洱等，滿足不同口味需求。
                </li>
                <li>
                  <span className="font-semibold text-gray-900">多樣化包裝：</span>
                  提供多種材質、設計風格的禮盒，從簡約時尚到古典雅緻，應有盡有。
                </li>
                <li>
                  <span className="font-semibold text-gray-900">個性化加印：</span>
                  可在禮盒上加印企業Logo、祝福語或專屬圖案，彰顯品牌形象或個人特色。
                </li>
                <li>
                  <span className="font-semibold text-gray-900">附贈配件：</span>
                  可根據需求搭配精美茶具、茶點等，讓禮盒更具價值。
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
                  與我們的禮品顧問詳細溝通您的需求，包括預算、數量、用途等。
                </li>
                <li>
                  <span className="font-semibold text-gray-900">方案設計：</span>
                  根據您的需求，提供多個定制方案供您選擇。
                </li>
                <li>
                  <span className="font-semibold text-gray-900">確認細節：</span>
                  確定最終方案，包括茶葉種類、包裝設計、加印內容等。
                </li>
                <li>
                  <span className="font-semibold text-gray-900">生產製作：</span>
                  專業團隊按方案進行生產製作，確保品質。
                </li>
                <li>
                  <span className="font-semibold text-gray-900">品質檢查：</span>
                  嚴格把控每個環節，確保禮盒完美呈現。
                </li>
                <li>
                  <span className="font-semibold text-gray-900">配送服務：</span>
                  提供專業的包裝和配送服務，確保禮盒安全送達。
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
                立即聯繫我們，開啟您的專屬茶葉禮盒定制之旅！
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

