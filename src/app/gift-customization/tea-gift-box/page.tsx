'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const giftBoxProducts = [
  {
    id: 'premium-gift-box',
    name: '尊貴茶葉禮盒',
    description: '精選多款優質茶葉，包括龍井、鐵觀音、普洱等，搭配精美木盒包裝。',
    price: 'HK$1,288',
    image: '/images/longjing-premium.jpg',
    contents: [
      '明前獅峰龍井 100g',
      '鐵觀音 100g',
      '班章宮廷普洱餅 200g',
      '精選花茶 50g'
    ]
  },
  {
    id: 'green-tea-gift-box',
    name: '綠茶禮盒',
    description: '精選多款優質綠茶，包括龍井、碧螺春等，搭配精美陶瓷茶具。',
    price: 'HK$988',
    image: '/images/green-tea.jpg',
    contents: [
      '明前獅峰龍井 100g',
      '雨前龍井 100g',
      '碧螺春 100g',
      '精美陶瓷茶具一套'
    ]
  },
  {
    id: 'pu-erh-gift-box',
    name: '普洱禮盒',
    description: '精選多款優質普洱茶，包括生茶和熟茶，搭配精美茶具。',
    price: 'HK$1,188',
    image: '/images/dark-tea.jpg',
    contents: [
      '班章宮廷普洱餅 200g',
      '易武古樹普洱 200g',
      '勐海熟茶 200g',
      '精美茶具一套'
    ]
  }
];

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
          className="bg-white p-8 rounded-lg shadow-xl mb-16"
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
          </div>
        </motion.div>

        {/* Product Grid Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">精選禮盒產品</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {giftBoxProducts.map((box, index) => (
              <motion.div
                key={box.id}
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
                      src={box.image}
                      alt={box.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {box.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {box.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">禮盒內容：</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {box.contents.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-emerald-600">
                      {box.price}
                    </span>
                    <button className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition-colors">
                      加入購物車
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="text-center"
        >
          <p className="font-semibold text-xl text-emerald-700 mb-4">
            立即聯繫我們，開啟您的專屬茶葉禮盒定制之旅！
          </p>
          <p className="text-lg text-gray-600 mb-8">
            電話：(852) 1234 5678 | 電郵：info@hkteafactory.com
          </p>
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-md hover:bg-emerald-700 transition-colors text-lg font-medium">
            聯絡我們定制禮盒
          </button>
        </motion.div>
      </div>
    </div>
  );
} 

