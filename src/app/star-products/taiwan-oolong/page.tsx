'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Language } from '@/app/types';
import type { Product } from '@/lib/types/product';

type HeroSectionType = {
  headline: string;
  subheadline: string;
  button: string;
  leafColor: string;
  bg: string;
  bgImage: string;
  bgVideo?: string;
};

const content: Record<Language, { heroSection: HeroSectionType; products: Product[] }> = {
  zh: {
    heroSection: {
      headline: '台灣烏龍',
      subheadline: '探索台灣高山烏龍茶的獨特韻味',
      button: '立即探索',
      leafColor: '#5ba976',
      bg: 'from-green-800 via-green-900 to-green-700',
      bgImage: '/images/taiwan-oolong-tea.jpg',
      bgVideo: '/videos/taiwan-oolong.mp4'
    },
    products: [
      {
        id: 'alishan-high-mountain',
        name: { zh: '阿里山高山烏龍', en: 'Alishan High Mountain Oolong' },
        description: { zh: '阿里山高山烏龍，海拔2000米以上，香氣清雅，滋味甘醇', en: 'Alishan High Mountain Oolong, grown above 2000m, elegant aroma, sweet taste' },
        price: 1280,
        originalPrice: undefined,
        thumbnail: '/images/alishan-oolong.jpg',
        images: ['/images/alishan-oolong.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Alishan, Taiwan',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium', 'high-mountain'],
        isFeatured: true
      },
      {
        id: 'lishan-high-mountain',
        name: { zh: '梨山高山烏龍', en: 'Lishan High Mountain Oolong' },
        description: { zh: '梨山高山烏龍，海拔2200米以上，香氣濃郁，回甘持久', en: 'Lishan High Mountain Oolong, grown above 2200m, rich aroma, lasting aftertaste' },
        price: 980,
        originalPrice: undefined,
        thumbnail: '/images/lishan-oolong.jpg',
        images: ['/images/lishan-oolong.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Lishan, Taiwan',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium', 'high-mountain'],
        isFeatured: false
      },
      {
        id: 'dayuling-high-mountain',
        name: { zh: '大禹嶺高山烏龍', en: 'Dayuling High Mountain Oolong' },
        description: { zh: '大禹嶺高山烏龍，海拔2500米以上，香氣高揚，滋味醇厚', en: 'Dayuling High Mountain Oolong, grown above 2500m, high aroma, mellow taste' },
        price: 880,
        originalPrice: undefined,
        thumbnail: '/images/dayuling-oolong.jpg',
        images: ['/images/dayuling-oolong.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Dayuling, Taiwan',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium', 'high-mountain'],
        isFeatured: false
      },
      {
        id: 'dongding-oolong',
        name: { zh: '凍頂烏龍', en: 'Dongding Oolong' },
        description: { zh: '凍頂烏龍，傳統工藝，焙火香濃郁，滋味醇厚', en: 'Dongding Oolong, traditional craftsmanship, rich roasted aroma, mellow taste' },
        price: 680,
        originalPrice: undefined,
        thumbnail: '/images/dongding-oolong.jpg',
        images: ['/images/dongding-oolong.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Nantou, Taiwan',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['traditional', 'roasted'],
        isFeatured: false
      },
      {
        id: 'oriental-beauty',
        name: { zh: '東方美人茶', en: 'Oriental Beauty Tea' },
        description: { zh: '東方美人茶，蜜香濃郁，滋味甘甜，回甘持久', en: 'Oriental Beauty Tea, rich honey aroma, sweet taste, lasting aftertaste' },
        price: 580,
        originalPrice: undefined,
        thumbnail: '/images/oriental-beauty.jpg',
        images: ['/images/oriental-beauty.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Hsinchu, Taiwan',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['honey', 'sweet'],
        isFeatured: false
      },
      {
        id: 'wenshan-baojong',
        name: { zh: '文山包種', en: 'Wenshan Baojong' },
        description: { zh: '文山包種，清香型烏龍，香氣清雅，滋味鮮爽', en: 'Wenshan Baojong, light aroma oolong, elegant aroma, refreshing taste' },
        price: 420,
        originalPrice: undefined,
        thumbnail: '/images/wenshan-baojong.jpg',
        images: ['/images/wenshan-baojong.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Wenshan, Taiwan',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['light', 'fresh'],
        isFeatured: false
      },
      {
        id: 'tieguanyin-taiwan',
        name: { zh: '台灣鐵觀音', en: 'Taiwan Tieguanyin' },
        description: { zh: '台灣鐵觀音，傳統工藝，香氣濃郁，滋味醇厚', en: 'Taiwan Tieguanyin, traditional craftsmanship, rich aroma, mellow taste' },
        price: 380,
        originalPrice: undefined,
        thumbnail: '/images/taiwan-tieguanyin.jpg',
        images: ['/images/taiwan-tieguanyin.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Muzha, Taiwan',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['traditional', 'tieguanyin'],
        isFeatured: false
      }
    ]
  },
  en: {
    heroSection: {
      headline: 'Taiwan Oolong',
      subheadline: 'Explore the unique charm of Taiwan high mountain oolong tea.',
      button: 'Explore Now',
      leafColor: '#5ba976',
      bg: 'from-green-800 via-green-900 to-green-700',
      bgImage: '/images/taiwan-oolong-tea.jpg',
      bgVideo: '/videos/taiwan-oolong.mp4'
    },
    products: [
      {
        id: 'alishan-high-mountain',
        name: { zh: '阿里山高山烏龍', en: 'Alishan High Mountain Oolong' },
        description: { zh: '阿里山高山烏龍，海拔2000米以上，香氣清雅，滋味甘醇', en: 'Alishan High Mountain Oolong, grown above 2000m, elegant aroma, sweet taste' },
        price: 1280,
        originalPrice: undefined,
        thumbnail: '/images/alishan-oolong.jpg',
        images: ['/images/alishan-oolong.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Alishan, Taiwan',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium', 'high-mountain'],
        isFeatured: true
      },
      {
        id: 'lishan-high-mountain',
        name: { zh: '梨山高山烏龍', en: 'Lishan High Mountain Oolong' },
        description: { zh: '梨山高山烏龍，海拔2200米以上，香氣濃郁，回甘持久', en: 'Lishan High Mountain Oolong, grown above 2200m, rich aroma, lasting aftertaste' },
        price: 980,
        originalPrice: undefined,
        thumbnail: '/images/lishan-oolong.jpg',
        images: ['/images/lishan-oolong.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Lishan, Taiwan',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium', 'high-mountain'],
        isFeatured: false
      },
      {
        id: 'dayuling-high-mountain',
        name: { zh: '大禹嶺高山烏龍', en: 'Dayuling High Mountain Oolong' },
        description: { zh: '大禹嶺高山烏龍，海拔2500米以上，香氣高揚，滋味醇厚', en: 'Dayuling High Mountain Oolong, grown above 2500m, high aroma, mellow taste' },
        price: 880,
        originalPrice: undefined,
        thumbnail: '/images/dayuling-oolong.jpg',
        images: ['/images/dayuling-oolong.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Dayuling, Taiwan',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium', 'high-mountain'],
        isFeatured: false
      },
      {
        id: 'dongding-oolong',
        name: { zh: '凍頂烏龍', en: 'Dongding Oolong' },
        description: { zh: '凍頂烏龍，傳統工藝，焙火香濃郁，滋味醇厚', en: 'Dongding Oolong, traditional craftsmanship, rich roasted aroma, mellow taste' },
        price: 680,
        originalPrice: undefined,
        thumbnail: '/images/dongding-oolong.jpg',
        images: ['/images/dongding-oolong.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Nantou, Taiwan',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['traditional', 'roasted'],
        isFeatured: false
      },
      {
        id: 'oriental-beauty',
        name: { zh: '東方美人茶', en: 'Oriental Beauty Tea' },
        description: { zh: '東方美人茶，蜜香濃郁，滋味甘甜，回甘持久', en: 'Oriental Beauty Tea, rich honey aroma, sweet taste, lasting aftertaste' },
        price: 580,
        originalPrice: undefined,
        thumbnail: '/images/oriental-beauty.jpg',
        images: ['/images/oriental-beauty.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Hsinchu, Taiwan',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['honey', 'sweet'],
        isFeatured: false
      },
      {
        id: 'wenshan-baojong',
        name: { zh: '文山包種', en: 'Wenshan Baojong' },
        description: { zh: '文山包種，清香型烏龍，香氣清雅，滋味鮮爽', en: 'Wenshan Baojong, light aroma oolong, elegant aroma, refreshing taste' },
        price: 420,
        originalPrice: undefined,
        thumbnail: '/images/wenshan-baojong.jpg',
        images: ['/images/wenshan-baojong.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Wenshan, Taiwan',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['light', 'fresh'],
        isFeatured: false
      },
      {
        id: 'tieguanyin-taiwan',
        name: { zh: '台灣鐵觀音', en: 'Taiwan Tieguanyin' },
        description: { zh: '台灣鐵觀音，傳統工藝，香氣濃郁，滋味醇厚', en: 'Taiwan Tieguanyin, traditional craftsmanship, rich aroma, mellow taste' },
        price: 380,
        originalPrice: undefined,
        thumbnail: '/images/taiwan-tieguanyin.jpg',
        images: ['/images/taiwan-tieguanyin.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Muzha, Taiwan',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['traditional', 'tieguanyin'],
        isFeatured: false
      }
    ]
  }
};

function FloatingLeaf({ className, style, color = '#206e3a', opacity = 0.3 }: { className?: string; style?: React.CSSProperties; color?: string; opacity?: number }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      style={style}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity, scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill={color} />
      </svg>
    </motion.div>
  );
}

function AnimatedTitle({ text }: { text: string }) {
  return (
    <motion.h1
      className="text-4xl md:text-6xl font-bold text-white mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {text}
    </motion.h1>
  );
}

function HeroSection({ section }: { section: HeroSectionType }) {
  return (
    <div className={`relative h-[600px] flex items-center justify-center overflow-hidden ${section.bg}`}>
      <div className="absolute inset-0">
        <Image
          src={section.bgImage}
          alt={section.headline}
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <AnimatedTitle text={section.headline} />
          <motion.p
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            {section.subheadline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <Link
              href="#products"
              className="inline-block bg-white text-green-900 px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
            >
              {section.button}
            </Link>
          </motion.div>
        </div>
      </div>

      <FloatingLeaf className="top-1/4 left-1/4" color={section.leafColor} />
      <FloatingLeaf className="top-1/3 right-1/4" color={section.leafColor} style={{ transform: 'rotate(45deg)' }} />
      <FloatingLeaf className="bottom-1/4 left-1/3" color={section.leafColor} style={{ transform: 'rotate(-45deg)' }} />
      <FloatingLeaf className="bottom-1/3 right-1/3" color={section.leafColor} style={{ transform: 'rotate(90deg)' }} />
    </div>
  );
}

function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">更多推介</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 overflow-hidden">
              <motion.div
                className="w-full h-full"
                whileHover={{
                  scale: 1.1,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
            <Image
                  src={product.thumbnail}
                  alt={product.name.zh}
              fill
              className="object-cover"
            />
              </motion.div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name.zh}</h3>
              <p className="text-gray-600 mb-4">{product.description.zh}</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-green-900">${product.price}</span>
                  {product.originalPrice && (
                    <span className="ml-2 text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>
                <button className="bg-green-900 text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-all">
                  加入購物車
                </button>
              </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TaiwanOolongSeries({ language }: { language: Language }) {
  // Always sort products by price descending before rendering
  const sortedProducts = [...content[language].products].sort((a, b) => b.price - a.price);
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-32 bg-gradient-to-b from-green-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ProductGrid products={sortedProducts} />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default function TaiwanOolongPage() {
  const [language] = useState<Language>('zh');
  const { heroSection, products } = content[language];

  return (
    <main>
      <HeroSection section={heroSection} />
      <TaiwanOolongSeries language={language} />
    </main>
  );
} 
 
 