'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function GiftCustomizationPage() {
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
          src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=2015"
          alt="Gift Customization Hero"
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
            禮盒定製
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            為您打造獨一無二的茶葉禮盒
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
              「烘茶源」提供專業的茶葉禮盒定制服務，為您打造獨一無二的禮品體驗。無論是婚禮回禮、商務贈禮，還是節日禮品，我們都能為您量身定制最適合的茶葉禮盒。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">茶葉禮盒定制</h2>
                <p className="text-gray-600">
                  精選優質茶葉，搭配精美包裝，打造專屬茶葉禮盒。可根據需求選擇不同茶種、包裝風格和數量。
                </p>
                <Link 
                  href="/gift-customization/tea-gift-box"
                  className="inline-block mt-4 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  了解更多
                </Link>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=2015"
                  alt="Tea Gift Box"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="relative h-64 rounded-lg overflow-hidden order-2 md:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=2015"
                  alt="Party Favors"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4 order-1 md:order-2">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">宴會回禮定制</h2>
                <p className="text-gray-600">
                  為您的婚禮、生日派對等特別場合定制精美的茶葉回禮，讓賓客帶走美好的回憶。
                </p>
                <Link 
                  href="/gift-customization/party-favors"
                  className="inline-block mt-4 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  了解更多
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-center mt-12"
            >
              <p className="font-semibold text-xl text-emerald-700 mb-4">
                立即聯繫我們，打造專屬茶葉禮盒！
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

