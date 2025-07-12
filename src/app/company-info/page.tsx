'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const salesPoints = [
  {
    id: 'store-1',
    name: '銷售點一',
    address: '香港九龍區商場一樓101號舖',
    englishAddress: 'Shop 101, 1/F, Shopping Mall, Kowloon, Hong Kong',
    phone: '(852) 1234 5678',
    hours: '10:00 - 22:00',
    image: '/images/hero-1.jpg',
    mapUrl: 'https://www.google.com/maps?q=Hong+Kong&output=embed'
  },
  {
    id: 'store-2',
    name: '銷售點二',
    address: '香港港島區商場二樓201號舖',
    englishAddress: 'Shop 201, 2/F, Shopping Mall, Hong Kong Island',
    phone: '(852) 1234 5679',
    hours: '10:00 - 22:00',
    image: '/images/hero-2.jpg',
    mapUrl: 'https://www.google.com/maps?q=Hong+Kong+Island&output=embed'
  },
  {
    id: 'store-3',
    name: '銷售點三',
    address: '香港新界區商場三樓301號舖',
    englishAddress: 'Shop 301, 3/F, Shopping Mall, New Territories, Hong Kong',
    phone: '(852) 1234 5680',
    hours: '10:00 - 22:00',
    image: '/images/hero-3.jpg',
    mapUrl: 'https://www.google.com/maps?q=New+Territories+Hong+Kong&output=embed'
  }
];

const companyLocations = [
  {
    id: 'head-office',
    name: '總部辦公室',
    address: '香港辦公大樓',
    englishAddress: 'Office Building, Hong Kong',
    phone: '(852) 1234 5678',
    email: 'info@company.com',
    hours: '星期一至五 09:00 - 18:00',
    image: '/images/hero-4.jpg',
    mapUrl: 'https://www.google.com/maps?q=Hong+Kong&output=embed'
  },
  {
    id: 'warehouse',
    name: '倉庫及配送中心',
    address: '香港工業區',
    englishAddress: 'Industrial Area, Hong Kong',
    phone: '(852) 1234 5681',
    email: 'warehouse@company.com',
    hours: '星期一至五 08:00 - 17:00',
    image: '/images/tea-machine.jpg',
    mapUrl: 'https://www.google.com/maps?q=Hong+Kong+Industrial&output=embed'
  }
];

const latestNews = [
  {
    id: 'new-store-opening',
    title: '新店開幕',
    subtitle: '全新銷售點正式開業',
    description: '我們很高興地宣佈，新的銷售點已經正式開業，為顧客提供更便捷的服務。',
    image: '/images/hero-1.jpg',
    date: '2024年1月',
    status: '長期銷售點'
  },
  {
    id: 'popup-store',
    title: '快閃店活動',
    subtitle: '限時快閃店現正進行中',
    description: '在指定商場舉辦快閃店活動，展示最新茶葉產品，歡迎蒞臨參觀。',
    image: '/images/hero-2.jpg',
    date: '2024年2月',
    status: '臨時銷售點'
  },
  {
    id: 'seasonal-market',
    title: '季節市集',
    subtitle: '春季茶葉市集',
    description: '參與春季茶葉市集，與其他茶葉愛好者分享茶文化，體驗不同茶葉品種。',
    image: '/images/hero-3.jpg',
    date: '2024年3月',
    status: '臨時銷售點'
  },
  {
    id: 'expansion',
    title: '業務擴展',
    subtitle: '新增銷售點計劃',
    description: '我們正在積極擴展業務，計劃在更多地區開設銷售點，為更多顧客提供服務。',
    image: '/images/hero-4.jpg',
    date: '2024年4月',
    status: '長期銷售點'
  }
];

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
        {/* Company Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white p-8 rounded-lg shadow-xl mb-16"
        >
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">公司願景</h2>
              <p className="text-gray-600">
                致力於將傳統茶文化與現代生活完美融合，為顧客提供最優質的茶葉產品和服務。我們相信，每一杯茶都承載著深厚的文化底蘊，值得被悉心呵護與呈現。
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
          </div>
        </motion.div>

        {/* Latest News Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">最新動向</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestNews.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    className="w-full h-full"
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {news.status}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                    {news.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{news.title}</h3>
                  <p className="text-emerald-600 font-medium mb-2">{news.subtitle}</p>
                  <p className="text-gray-600 text-sm">{news.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sales Points Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">銷售點</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {salesPoints.map((point, index) => (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    className="w-full h-full"
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Image
                      src={point.image}
                      alt={point.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{point.name}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><span className="font-medium">地址：</span>{point.address}</p>
                    <p className="text-xs text-gray-500">{point.englishAddress}</p>
                    <p><span className="font-medium">電話：</span>{point.phone}</p>
                    <p><span className="font-medium">營業時間：</span>{point.hours}</p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <iframe
                    src={point.mapUrl}
                    width="100%"
                    height="200"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Locations Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">公司地點</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {companyLocations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    className="w-full h-full"
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Image
                      src={location.image}
                      alt={location.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{location.name}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><span className="font-medium">地址：</span>{location.address}</p>
                    <p className="text-xs text-gray-500">{location.englishAddress}</p>
                    <p><span className="font-medium">電話：</span>{location.phone}</p>
                    <p><span className="font-medium">電郵：</span>{location.email}</p>
                    <p><span className="font-medium">辦公時間：</span>{location.hours}</p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <iframe
                    src={location.mapUrl}
                    width="100%"
                    height="200"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="bg-white p-8 rounded-lg shadow-xl"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">聯絡我們</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">一般查詢</h3>
              <div className="space-y-3">
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">電話：</span>
                  (852) 1234 5678
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">電郵：</span>
                  info@company.com
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">傳真：</span>
                  (852) 1234 5679
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">營業時間：</span>
                  星期一至日 10:00 - 20:00
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">專項服務</h3>
              <div className="space-y-3">
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">企業採購：</span>
                  corporate@company.com
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">定制服務：</span>
                  custom@company.com
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">技術支援：</span>
                  support@company.com
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">媒體查詢：</span>
                  media@company.com
                </p>
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="text-center mt-8"
          >
            <p className="font-semibold text-xl text-emerald-700 mb-4">
              歡迎蒞臨，體驗專業茶葉服務！
            </p>
            <p className="text-lg text-gray-600">
              電話：(852) 1234 5678 | 電郵：info@company.com
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 

