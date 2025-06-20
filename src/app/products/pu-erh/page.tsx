'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
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
      headline: '普洱茶精選',
      subheadline: '探索醇厚陳香的普洱茶系列',
      button: '立即探索',
      leafColor: '#8B4513', // Saddle Brown for pu-erh tea
      bg: 'from-amber-800 via-amber-900 to-amber-700',
      bgImage: '/images/hero-pu-erh-tea.jpg'
    },
    products: [
      {
        id: 'sheng-pu-erh',
        name: { zh: '生普洱', en: 'Raw Pu-erh' },
        description: { zh: '雲南大葉種曬青毛茶為原料，自然發酵', en: 'Made from Yunnan large-leaf sun-dried green tea, naturally fermented' },
        price: 250,
        originalPrice: undefined,
        thumbnail: '/images/sheng-pu-erh.jpg',
        images: ['/images/sheng-pu-erh.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '357g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry, well-ventilated place',
          expiryDate: 'Long-term aging'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        isFeatured: true
      },
      {
        id: 'shou-pu-erh',
        name: { zh: '熟普洱', en: 'Ripe Pu-erh' },
        description: { zh: '經過人工渥堆發酵，滋味醇厚', en: 'Artificially fermented, mellow and rich flavor' },
        price: 200,
        originalPrice: undefined,
        thumbnail: '/images/shou-pu-erh.jpg',
        images: ['/images/shou-pu-erh.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '357g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry, well-ventilated place',
          expiryDate: 'Long-term aging'
        },
        stock: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        isFeatured: false
      },
      {
        id: 'lao-ban-zhang',
        name: { zh: '老班章普洱', en: 'Lao Ban Zhang Pu-erh' },
        description: { zh: '普洱茶之王，茶氣強勁，回甘持久', en: 'King of Pu-erh tea, strong tea energy, lasting aftertaste' },
        price: 500,
        originalPrice: undefined,
        thumbnail: '/images/lao-ban-zhang.jpg',
        images: ['/images/lao-ban-zhang.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '200g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry, well-ventilated place',
          expiryDate: 'Long-term aging'
        },
        stock: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        isFeatured: false
      }
    ]
  },
  en: {
    heroSection: {
      headline: 'Pu-erh Tea Selection',
      subheadline: 'Explore our mellow and aged Pu-erh tea collection.',
      button: 'Explore Now',
      leafColor: '#8B4513',
      bg: 'from-amber-800 via-amber-900 to-amber-700',
      bgImage: '/images/hero-pu-erh-tea.jpg'
    },
    products: [
      {
        id: 'sheng-pu-erh',
        name: { zh: '生普洱', en: 'Raw Pu-erh' },
        description: { zh: '雲南大葉種曬青毛茶為原料，自然發酵', en: 'Made from Yunnan large-leaf sun-dried green tea, naturally fermented' },
        price: 250,
        originalPrice: undefined,
        thumbnail: '/images/sheng-pu-erh.jpg',
        images: ['/images/sheng-pu-erh.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '357g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry, well-ventilated place',
          expiryDate: 'Long-term aging'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        isFeatured: true
      },
      {
        id: 'shou-pu-erh',
        name: { zh: '熟普洱', en: 'Ripe Pu-erh' },
        description: { zh: '經過人工渥堆發酵，滋味醇厚', en: 'Artificially fermented, mellow and rich flavor' },
        price: 200,
        originalPrice: undefined,
        thumbnail: '/images/shou-pu-erh.jpg',
        images: ['/images/shou-pu-erh.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '357g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry, well-ventilated place',
          expiryDate: 'Long-term aging'
        },
        stock: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        isFeatured: false
      },
      {
        id: 'lao-ban-zhang',
        name: { zh: '老班章普洱', en: 'Lao Ban Zhang Pu-erh' },
        description: { zh: '普洱茶之王，茶氣強勁，回甘持久', en: 'King of Pu-erh tea, strong tea energy, lasting aftertaste' },
        price: 500,
        originalPrice: undefined,
        thumbnail: '/images/lao-ban-zhang.jpg',
        images: ['/images/lao-ban-zhang.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '200g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry, well-ventilated place',
          expiryDate: 'Long-term aging'
        },
        stock: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
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
          className="object-cover opacity-50"
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
              className="inline-block bg-white text-darkgreen-900 px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
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
      <h2 className="text-3xl font-bold text-center mb-12">精選產品</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src={product.thumbnail}
                alt={product.name.zh}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name.zh}</h3>
              <p className="text-gray-600 mb-4">{product.description.zh}</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-darkgreen-900">${product.price}</span>
                  {product.originalPrice && (
                    <span className="ml-2 text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>
                <button className="bg-darkgreen-900 text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-all">
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

export default function PuErhPage() {
  const [language] = useState<Language>('zh');
  const { heroSection, products } = content[language];

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
          alt="Pu-erh Tea Hero"
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
            普洱茶
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            醇厚濃郁，回味無窮
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
              普洱茶以其獨特的發酵工藝和豐富的口感層次而聞名。我們的普洱茶精選來自各大名茶產區的優質茶葉，為您帶來最純正的普洱茶體驗。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">產品特色</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <span className="font-semibold text-gray-900">嚴選茶葉：</span>
                    精選各大名茶產區的優質茶葉
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">傳統工藝：</span>
                    採用傳統製茶工藝，保留茶葉原味
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">品質保證：</span>
                    嚴格把控每個環節，確保茶葉品質
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">多樣選擇：</span>
                    提供多種普洱茶品種，滿足不同口味需求
                  </li>
                </ul>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=2070"
                  alt="Pu-erh Tea Collection"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-center mt-12"
            >
              <p className="font-semibold text-xl text-emerald-700 mb-4">
                立即選購，體驗「烘茶源」的優質普洱茶！
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

