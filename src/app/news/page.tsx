'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Language } from '@/app/types';

interface NewsItem {
  id: string;
  title: { zh: string; en: string };
  excerpt: { zh: string; en: string };
  content: { zh: string; en: string };
  image: string;
  date: string;
  category: { zh: string; en: string };
  featured: boolean;
}

const newsData: NewsItem[] = [
  {
    id: 'new-premium-collection-2024',
    title: { 
      zh: '2024年春季新品上市 - 精選龍井系列', 
      en: 'Spring 2024 New Collection - Premium Longjing Series' 
    },
    excerpt: { 
      zh: '我們很榮幸地推出2024年春季精選龍井系列，包括稀有明前獅峰龍井等頂級茶品。', 
      en: 'We are proud to introduce our Spring 2024 Premium Longjing Collection, featuring rare Mingqian Lion Peak Longjing and other premium teas.' 
    },
    content: { 
      zh: '經過30年的專業經驗積累，我們精心挑選了來自杭州西湖的頂級龍井茶葉。今年的春季採收特別優質，茶葉色澤翠綠，香氣清雅，回甘悠長。每一片茶葉都經過嚴格篩選，確保品質達到最高標準。', 
      en: 'With 30 years of professional experience, we have carefully selected premium Longjing teas from West Lake, Hangzhou. This year\'s spring harvest is exceptionally high quality, with emerald green leaves, elegant aroma, and lasting sweetness. Every leaf is strictly screened to ensure the highest quality standards.' 
    },
    image: '/images/longjing-premium.jpg',
    date: '2024-03-15',
    category: { zh: '新品發布', en: 'New Products' },
    featured: true
  },
  {
    id: 'tea-culture-workshop-march',
    title: { 
      zh: '茶文化體驗工作坊 - 3月場次', 
      en: 'Tea Culture Experience Workshop - March Session' 
    },
    excerpt: { 
      zh: '加入我們的茶文化體驗工作坊，學習傳統茶藝，品嚐優質茶葉，感受千年茶文化魅力。', 
      en: 'Join our Tea Culture Experience Workshop to learn traditional tea art, taste premium teas, and experience the charm of thousand-year-old tea culture.' 
    },
    content: { 
      zh: '我們將舉辦茶文化體驗工作坊，由資深茶藝師親自指導。工作坊包括茶葉知識講解、沖泡技巧示範、品茶體驗等環節。參與者將學習到不同茶類的特點和沖泡方法，並有機會品嚐我們精選的優質茶葉。', 
      en: 'We will host a Tea Culture Experience Workshop guided by senior tea masters. The workshop includes tea knowledge lectures, brewing technique demonstrations, and tea tasting sessions. Participants will learn about different tea types and brewing methods, with opportunities to taste our carefully selected premium teas.' 
    },
    image: '/images/tea-ceremony.jpg',
    date: '2024-03-10',
    category: { zh: '活動資訊', en: 'Events' },
    featured: false
  },
  {
    id: 'hong-kong-tea-festival-2024',
    title: { 
      zh: '香港茶葉節2024 - 烘茶源參展', 
      en: 'Hong Kong Tea Festival 2024 - HK Tea Factory Exhibition' 
    },
    excerpt: { 
      zh: '我們將參加2024年香港茶葉節，展示我們的精選茶品和茶具，歡迎茶友們前來參觀交流。', 
      en: 'We will participate in the 2024 Hong Kong Tea Festival, showcasing our selected teas and teaware. Tea enthusiasts are welcome to visit and exchange ideas.' 
    },
    content: { 
      zh: '香港茶葉節是亞洲最大的茶葉展覽會之一，我們很榮幸能夠參與其中。在展會上，我們將展示包括龍井、鐵觀音、台灣烏龍等各種優質茶品，以及精美的茶具。現場還會有茶藝表演和品茶活動。', 
      en: 'The Hong Kong Tea Festival is one of Asia\'s largest tea exhibitions, and we are honored to participate. At the exhibition, we will showcase various premium teas including Longjing, Tieguanyin, Taiwan Oolong, and exquisite teaware. There will also be tea ceremony performances and tasting activities on site.' 
    },
    image: '/images/tea-festival.jpg',
    date: '2024-02-28',
    category: { zh: '展會資訊', en: 'Exhibitions' },
    featured: true
  },
  {
    id: 'seasonal-tea-guide-spring',
    title: { 
      zh: '春季茶葉選購指南', 
      en: 'Spring Tea Selection Guide' 
    },
    excerpt: { 
      zh: '春季是品茶的最佳時節，我們為您準備了詳細的春季茶葉選購指南，幫助您選擇最適合的茶品。', 
      en: 'Spring is the best season for tea tasting. We have prepared a detailed spring tea selection guide to help you choose the most suitable teas.' 
    },
    content: { 
      zh: '春季氣候溫和，是茶葉生長的黃金時期。在這個季節，我們推薦選擇綠茶類，如龍井、碧螺春等，這些茶葉清香淡雅，適合春季飲用。同時，也要注意茶葉的保存方法，避免受潮和陽光直射。', 
      en: 'Spring\'s mild climate is the golden period for tea growth. During this season, we recommend choosing green teas such as Longjing and Biluochun, which have light and elegant aromas suitable for spring drinking. Also, pay attention to tea storage methods to avoid moisture and direct sunlight.' 
    },
    image: '/images/spring-tea.jpg',
    date: '2024-02-20',
    category: { zh: '茶葉知識', en: 'Tea Knowledge' },
    featured: false
  },
  {
    id: 'customer-testimonial-march',
    title: { 
      zh: '客戶好評分享 - 龍井茶體驗', 
      en: 'Customer Testimonial - Longjing Tea Experience' 
    },
    excerpt: { 
      zh: '來自客戶的真實分享，講述他們品嚐我們龍井茶的感受和體驗。', 
      en: 'Real sharing from customers about their experience tasting our Longjing teas.' 
    },
    content: { 
      zh: '我們收到了許多客戶的正面反饋，他們對我們的龍井茶品質讚不絕口。客戶表示，我們的茶葉香氣清雅，口感醇厚，回甘悠長，完全符合他們對高品質龍井茶的期待。', 
      en: 'We have received many positive feedback from customers who praise the quality of our Longjing teas. Customers say our teas have elegant aromas, mellow taste, and lasting sweetness, completely meeting their expectations for high-quality Longjing tea.' 
    },
    image: '/images/customer-review.jpg',
    date: '2024-02-15',
    category: { zh: '客戶分享', en: 'Customer Stories' },
    featured: false
  },
  {
    id: 'tea-brewing-tips',
    title: { 
      zh: '專業沖茶技巧分享', 
      en: 'Professional Tea Brewing Tips' 
    },
    excerpt: { 
      zh: '學習專業的沖茶技巧，讓您的茶葉發揮最佳風味。', 
      en: 'Learn professional tea brewing techniques to bring out the best flavor in your teas.' 
    },
    content: { 
      zh: '沖茶是一門藝術，需要掌握水溫、時間、茶量等要素。對於不同類型的茶葉，沖泡方法也有所不同。綠茶適合用80-85度的水溫，沖泡時間約2-3分鐘；烏龍茶則需要更高的水溫和更長的沖泡時間。', 
      en: 'Tea brewing is an art that requires mastering elements like water temperature, time, and tea amount. Different types of teas require different brewing methods. Green tea is suitable for 80-85°C water temperature with 2-3 minutes brewing time; oolong tea requires higher water temperature and longer brewing time.' 
    },
    image: '/images/brewing-tips.jpg',
    date: '2024-02-10',
    category: { zh: '沖茶技巧', en: 'Brewing Tips' },
    featured: false
  }
];

export default function NewsPage() {
  const [language, setLanguage] = useState<Language>('zh');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: { zh: '全部', en: 'All' } },
    { id: 'new-products', name: { zh: '新品發布', en: 'New Products' } },
    { id: 'events', name: { zh: '活動資訊', en: 'Events' } },
    { id: 'exhibitions', name: { zh: '展會資訊', en: 'Exhibitions' } },
    { id: 'tea-knowledge', name: { zh: '茶葉知識', en: 'Tea Knowledge' } },
    { id: 'customer-stories', name: { zh: '客戶分享', en: 'Customer Stories' } },
    { id: 'brewing-tips', name: { zh: '沖茶技巧', en: 'Brewing Tips' } }
  ];

  const filteredNews = selectedCategory === 'all' 
    ? newsData 
    : newsData.filter(item => {
        const categoryKey = Object.keys(categories).find(key => 
          categories[parseInt(key) || 0]?.name[language] === item.category[language]
        );
        return categoryKey || item.category[language] === categories.find(c => c.id === selectedCategory)?.name[language];
      });

  const featuredNews = newsData.filter(item => item.featured);
  const regularNews = filteredNews.filter(item => !item.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-6"
          >
            {language === 'zh' ? '最新動向' : 'Latest News'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto font-light"
          >
            {language === 'zh' 
              ? '了解烘茶源的最新動態、產品資訊和茶文化分享' 
              : 'Stay updated with HK Tea Factory\'s latest news, product information, and tea culture insights'
            }
          </motion.p>
        </div>
      </section>

      {/* Language Switcher */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-end">
          <button
            onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
            className="bg-white text-emerald-600 px-4 py-2 rounded-full shadow-lg hover:bg-emerald-50 transition-colors border border-emerald-200"
          >
            {language === 'zh' ? 'English' : '中文'}
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200'
              }`}
            >
              {category.name[language]}
            </button>
          ))}
        </div>
      </div>

      {/* Featured News */}
      {selectedCategory === 'all' && featuredNews.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {language === 'zh' ? '精選動向' : 'Featured News'}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredNews.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={news.image}
                    alt={news.title[language]}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {news.category[language]}
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {news.title[language]}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {news.excerpt[language]}
                  </p>
                  <Link
                    href={`/news/${news.id}`}
                    className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
                  >
                    {language === 'zh' ? '閱讀更多' : 'Read More'}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      )}

      {/* Regular News */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          {language === 'zh' ? '最新資訊' : 'Latest Updates'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularNews.map((news, index) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={news.image}
                  alt={news.title[language]}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-white/90 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                  {news.category[language]}
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {news.title[language]}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {news.excerpt[language]}
                </p>
                <Link
                  href={`/news/${news.id}`}
                  className="inline-flex items-center text-emerald-600 text-sm font-medium hover:text-emerald-700 transition-colors"
                >
                  {language === 'zh' ? '閱讀更多' : 'Read More'}
                  <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-gray-900 mb-6"
          >
            {language === 'zh' ? '關注我們的最新動態' : 'Stay Updated with Our Latest News'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-8"
          >
            {language === 'zh' 
              ? '訂閱我們的電子報，第一時間獲取新品資訊和茶文化分享' 
              : 'Subscribe to our newsletter to be the first to know about new products and tea culture insights'
            }
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder={language === 'zh' ? '輸入您的電子郵件' : 'Enter your email'}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
              {language === 'zh' ? '訂閱' : 'Subscribe'}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
