'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CompanyInfoPage() {
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
          alt="Company Info Hero"
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
            公司資訊
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            專業茶葉服務，品質保證
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">公司願景</h2>
              <p className="text-gray-600">
                「烘茶源」致力於將傳統茶文化與現代生活完美融合，為顧客提供最優質的茶葉產品和服務。我們相信，每一杯茶都承載著深厚的文化底蘊，值得被悉心呵護與呈現。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">服務承諾</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-semibold text-gray-900">品質保證：</span>
                  嚴選優質茶葉，確保每一款產品都達到最高標準。
                </li>
                <li>
                  <span className="font-semibold text-gray-900">專業服務：</span>
                  提供專業的茶葉諮詢和定制服務，滿足不同客戶需求。
                </li>
                <li>
                  <span className="font-semibold text-gray-900">永續發展：</span>
                  注重環保與永續發展，致力於為地球做出貢獻。
                </li>
                <li>
                  <span className="font-semibold text-gray-900">創新研發：</span>
                  不斷探索茶葉的新可能，為現代生活帶來更多便利與樂趣。
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">聯絡資訊</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">地址：</span>
                    香港中環德輔道中123號
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">電話：</span>
                    (852) 1234 5678
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">電郵：</span>
                    info@hkteafactory.com
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">營業時間：</span>
                    星期一至日 10:00 - 20:00
                  </p>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=2070"
                    alt="Company Location"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-center mt-12"
            >
              <p className="font-semibold text-xl text-emerald-700 mb-4">
                歡迎蒞臨「烘茶源」，體驗專業茶葉服務！
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

