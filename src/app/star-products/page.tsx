'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const starProducts = [
  {
    id: 'longjing',
    name: { zh: '龍井', en: 'Longjing' },
    description: { zh: '西湖龍井，中國十大名茶之首，清香淡雅，回甘悠長', en: 'West Lake Longjing, the first of China\'s top ten famous teas, light and elegant aroma with lasting sweetness' },
    image: '/images/longjing-premium.jpg',
    href: '/star-products/longjing',
    features: ['明前採摘', '手工炒製', '清香持久', '回甘明顯']
  },
  {
    id: 'tieguanyin',
    name: { zh: '鐵觀音', en: 'Tieguanyin' },
    description: { zh: '安溪鐵觀音，烏龍茶之極品，香氣濃郁，韻味悠長', en: 'Anxi Tieguanyin, the finest oolong tea, rich aroma with lasting aftertaste' },
    image: '/images/tieguanyin-premium.jpg',
    href: '/star-products/tieguanyin',
    features: ['傳統工藝', '香氣濃郁', '韻味悠長', '品質優良']
  },
  {
    id: 'taiwan-oolong',
    name: { zh: '台灣烏龍', en: 'Taiwan Oolong' },
    description: { zh: '台灣高山烏龍，海拔千米以上，茶香清雅，口感醇厚', en: 'Taiwan high mountain oolong, above 1000m altitude, elegant aroma with mellow taste' },
    image: '/images/taiwan-oolong.jpg',
    href: '/star-products/taiwan-oolong',
    features: ['高山茶園', '清雅香氣', '口感醇厚', '台灣原產']
  },
  {
    id: 'honey',
    name: { zh: '蜂蜜', en: 'Honey' },
    description: { zh: '純天然蜂蜜，採自深山野花，營養豐富，口感香甜', en: 'Pure natural honey, collected from mountain wildflowers, rich in nutrients with sweet taste' },
    image: '/images/honey-premium.jpg',
    href: '/star-products/honey',
    features: ['純天然', '深山野花', '營養豐富', '口感香甜']
  }
];

export default function StarProductsPage() {
  const [language, setLanguage] = useState<'zh' | 'en'>('zh');

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
            {language === 'zh' ? '皇牌產品' : 'Star Products'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto font-light"
          >
            {language === 'zh' 
              ? '精選30年專業經驗，為您帶來最優質的茶葉和蜂蜜產品' 
              : 'Carefully selected with 30 years of professional experience, bringing you the finest tea and honey products'
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

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {starProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-64 md:h-80">
                  <Image
                    src={product.image}
                    alt={product.name[language]}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-serif font-bold mb-2">
                      {product.name[language]}
                    </h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description[language]}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2 p-3 bg-emerald-50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-sm font-medium text-emerald-800">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href={product.href}
                    className="block w-full bg-emerald-600 text-white text-center py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors duration-300"
                  >
                    {language === 'zh' ? '查看詳情' : 'View Details'}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
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
            {language === 'zh' ? '探索更多產品' : 'Explore More Products'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-8"
          >
            {language === 'zh' 
              ? '瀏覽我們的完整產品系列，發現更多優質茶葉和茶具' 
              : 'Browse our complete product range and discover more premium teas and teaware'
            }
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/products"
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors duration-300"
            >
              {language === 'zh' ? '瀏覽所有產品' : 'Browse All Products'}
            </Link>
            <Link
              href="/contact"
              className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors duration-300"
            >
              {language === 'zh' ? '聯絡我們' : 'Contact Us'}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
