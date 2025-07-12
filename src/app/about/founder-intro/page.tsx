'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FounderIntroPage() {
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
          alt="About Us Hero"
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
            創辦人介紹
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            「烘茶源」的靈魂人物
          </p>
        </motion.div>
      </motion.section>

      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white p-8 rounded-lg shadow-xl mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-3xl font-bold text-gray-800 mb-8 text-center"
          >
            創辦人 - 郭小姐 Christina
          </motion.h2>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex-shrink-0"
            >
              <Image
                src="/founder.jpg"
                alt="Founder Ms. Christina Kwok"
                width={300}
                height={300}
                className="rounded-full shadow-lg object-cover w-64 h-64 md:w-80 md:h-80 border-4 border-emerald-200"
              />
            </motion.div>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                創辦人郭小姐Christina自小熱愛傳統中國文化，加上外祖父及母親從事茶葉生產的家庭背景，因此對傳統中式茶葉培養出濃厚興趣。
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                多年來認識到各類茶葉的特性、功效、沖泡方法、茶葉品質的辨別方法等知識，祈望透過烘茶源為顧客介紹更多優質茶葉和蜂蜜產品。
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                在母親賴女士的悉心指導下，Christina深入學習茶葉的各種知識，從茶葉的品種特性到沖泡技巧，從品質辨別到儲藏方法，她都掌握得十分透徹。她相信，只有真正了解茶葉，才能為顧客提供最優質的產品和服務。
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                如今，Christina帶領「烘茶源」團隊，致力於為顧客搜羅最優質的茶葉和蜂蜜產品，讓更多人能夠品嚐到真正的好茶，感受傳統茶文化的魅力。
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Mother Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-white p-8 rounded-lg shadow-xl"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-3xl font-bold text-gray-800 mb-8 text-center"
          >
            茶葉專家 - 賴女士 Ida
          </motion.h2>
          
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex-shrink-0"
            >
              <Image
                src="/founder-mom.jpg"
                alt="Founder's Mother Ms. Ida Lai"
                width={300}
                height={300}
                className="rounded-full shadow-lg object-cover w-64 h-64 md:w-80 md:h-80 border-4 border-emerald-200"
              />
            </motion.div>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                創辦人的母親賴女士Ida從事茶葉生意三十多年，擁有多年對茶葉採購及銷售的經驗，對各種茶葉的品種、特性、儲藏方法、辨別茶葉品質的方法等十分熟悉。
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                憑藉著豐富的茶葉知識和經驗，賴女士現致力為烘茶源搜羅優質的茶葉，為顧客提供具質素的茶葉產品。她的專業知識是「烘茶源」品質保證的重要基礎。
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
              >
                賴女士不僅是茶葉專家，更是女兒Christina的良師益友。她將畢生所學的茶葉知識傳授給女兒，讓「烘茶源」能夠傳承家族對茶葉的熱愛和專業。
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.2 }}
              >
                在「烘茶源」，賴女士負責茶葉的品質把控和採購工作，確保每一款產品都符合最高標準，讓顧客能夠享受到真正優質的茶葉產品。
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.4 }}
          className="text-center mt-12"
        >
          <p className="font-semibold text-xl text-emerald-700 mb-4">
            了解更多關於「烘茶源」的故事
          </p>
          <p className="text-lg text-gray-600">
            電話：(852) 1234 5678 | 電郵：info@hkteafactory.com
          </p>
        </motion.div>
      </div>
    </div>
  );
} 

