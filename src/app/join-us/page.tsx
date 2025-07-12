'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function JoinUsPage() {
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
          alt="Join Us Hero"
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
            加入我們
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            成為烘茶源團隊的一員
          </p>
        </motion.div>
      </motion.section>

      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Job Position Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white p-8 rounded-lg shadow-xl mb-16"
        >
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">售貨員(兼職)</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">工作內容：</h3>
                  <p className="text-gray-600 leading-relaxed">
                    銷售及推廣公司產品，為客人提供專業服務和產品知識
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">主要職責：</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>提供良好顧客服務</li>
                    <li>協助店舖日常運作</li>
                    <li>協助顧客選購合適的貨品</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">職位要求：</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>能操流利粵語，基本英語及普通話</li>
                    <li>懂讀寫中文及基本英文</li>
                    <li>有責任心，積極主動，性格開朗及誠懇有禮</li>
                    <li>良好人際溝通，工作主動積極，守時，良好團體合作</li>
                    <li>具銷售經驗，1年或以上銷售經驗優先考慮</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
                  <h3 className="text-xl font-semibold text-emerald-800 mb-3">聯絡方式：</h3>
                  <p className="text-emerald-700 font-medium">
                    招聘熱線：<a href="tel:+85266925798" className="text-emerald-600 hover:text-emerald-700 underline">6692 5798</a>
                  </p>
                  <p className="text-sm text-emerald-600 mt-2">
                    （申請者所提供之個人資料將會絕對保密及只作與招聘用途）
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Company Culture Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-white p-8 rounded-lg shadow-xl mb-16"
        >
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">公司文化</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">我們的價值觀</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      專業服務，以客為先
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      團隊合作，互相支持
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      持續學習，追求卓越
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      誠信經營，品質保證
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">工作環境</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      友善的工作環境
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      彈性的工作時間
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      專業培訓機會
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      良好的晉升機會
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="bg-emerald-600 text-white p-8 rounded-lg shadow-xl"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">有興趣加入我們？</h2>
            <p className="text-lg mb-6 opacity-90">
              歡迎致電查詢或發送履歷至我們的招聘部門
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+85266925798"
                className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                致電招聘熱線
              </a>
              <a
                href="mailto:hr@hkteafactory.com"
                className="bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-colors duration-200"
              >
                發送履歷
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 