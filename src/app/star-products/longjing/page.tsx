'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import type { Language } from '@/app/types';
import type { Product } from '@/lib/types/product';
import ProductCard from '@/components/ProductCard';

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
      headline: '西湖龍井',
      subheadline: '探索中國十大名茶之首',
      button: '立即探索',
      leafColor: '#388d54',
      bg: 'from-darkgreen-800 via-darkgreen-900 to-darkgreen-700',
      bgImage: '/images/hero-1.jpg'
    },
    products: [
      {
        id: 'west-lake-longjing-supreme',
        name: { zh: '明前獅峰龍井', en: 'Premium Lion Peak Longjing Tea' },
        description: { zh: '明前獅峰龍井，扁平光滑，翠綠鮮潤', en: 'Premium Lion Peak Longjing Tea, flat and smooth, emerald green and fresh' },
        price: 1388,
        originalPrice: undefined,
        thumbnail: '/images/longjing-tea.jpg',
        images: ['/images/longjing-tea.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Hangzhou, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        isFeatured: true
      },
      {
        id: 'west-lake-longjing-premium',
        name: { zh: '明前龍井', en: 'Premium Longjing Tea' },
        description: { zh: '明前龍井，色澤綠潤，滋味醇厚', en: 'Premium Longjing Tea, green and moist, mellow flavor' },
        price: 880,
        originalPrice: undefined,
        thumbnail: '/images/longjing-tea-2.jpg',
        images: ['/images/longjing-tea-2.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Hangzhou, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        isFeatured: false
      },
      {
        id: 'longjing-superior',
        name: { zh: '雨前龍井', en: 'Superior Longjing Tea' },
        description: { zh: '雨前龍井，清香持久，回甘明顯', en: 'Superior Longjing Tea, lasting fresh aroma, obvious aftertaste' },
        price: 498,
        originalPrice: undefined,
        thumbnail: '/images/longjing-tea-3.jpg',
        images: ['/images/longjing-tea-3.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Hangzhou, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        isFeatured: false
      },
      {
        id: 'longjing-lion-peak',
        name: { zh: '獅峰龍井', en: 'Lion Peak Longjing Tea' },
        description: { zh: '獅峰龍井，茶湯清亮，香氣高雅', en: 'Lion Peak Longjing Tea, clear liquor, elegant aroma' },
        price: 380,
        originalPrice: undefined,
        thumbnail: '/images/longjing-tea-4.jpg',
        images: ['/images/longjing-tea-4.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Hangzhou, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        isFeatured: false
      },
      {
        id: 'longjing-first-grade',
        name: { zh: '一級龍井', en: 'First Grade Longjing Tea' },
        description: { zh: '一級龍井，品質優良，價格實惠', en: 'First Grade Longjing Tea, excellent quality, affordable price' },
        price: 268,
        originalPrice: undefined,
        thumbnail: '/images/longjing-tea-5.jpg',
        images: ['/images/longjing-tea-5.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Hangzhou, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        isFeatured: false
      },
      {
        id: 'rare-premium-lion-peak',
        name: { zh: '稀有明前獅峰龍井', en: 'Rare Premium Lion Peak Longjing Tea' },
        description: { zh: '稀有明前獅峰龍井，極品中的極品', en: 'Rare Premium Lion Peak Longjing Tea, the finest of the finest' },
        price: 12800,
        originalPrice: undefined,
        thumbnail: '/images/longjing-rare.jpg',
        images: ['/images/longjing-rare.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: true,
        specifications: {
          weight: '250g',
          origin: 'Hangzhou, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['rare', 'premium'],
        isFeatured: true
      }
    ]
  },
  en: {
    heroSection: {
      headline: 'West Lake Longjing',
      subheadline: 'Explore the most famous Chinese green tea.',
      button: 'Explore Now',
      leafColor: '#388d54',
      bg: 'from-darkgreen-800 via-darkgreen-900 to-darkgreen-700',
      bgImage: '/images/hero-longjing.jpg'
    },
    products: [
      {
        id: 'west-lake-longjing-supreme',
        name: { zh: '明前獅峰龍井', en: 'Premium Lion Peak Longjing Tea' },
        description: { zh: '明前獅峰龍井，扁平光滑，翠綠鮮潤', en: 'Premium Lion Peak Longjing Tea, flat and smooth, emerald green and fresh' },
        price: 1388,
        originalPrice: undefined,
        thumbnail: '/images/longjing-tea.jpg',
        images: ['/images/longjing-tea.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Hangzhou, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        isFeatured: true
      },
      {
        id: 'west-lake-longjing-premium',
        name: { zh: '明前龍井', en: 'Premium Longjing Tea' },
        description: { zh: '明前龍井，色澤綠潤，滋味醇厚', en: 'Premium Longjing Tea, green and moist, mellow flavor' },
        price: 880,
        originalPrice: undefined,
        thumbnail: '/images/longjing-tea-2.jpg',
        images: ['/images/longjing-tea-2.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Hangzhou, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        isFeatured: false
      },
      {
        id: 'longjing-superior',
        name: { zh: '雨前龍井', en: 'Superior Longjing Tea' },
        description: { zh: '雨前龍井，清香持久，回甘明顯', en: 'Superior Longjing Tea, lasting fresh aroma, obvious aftertaste' },
        price: 498,
        originalPrice: undefined,
        thumbnail: '/images/longjing-tea-3.jpg',
        images: ['/images/longjing-tea-3.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Hangzhou, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        isFeatured: false
      },
      {
        id: 'longjing-lion-peak',
        name: { zh: '獅峰龍井', en: 'Lion Peak Longjing Tea' },
        description: { zh: '獅峰龍井，茶湯清亮，香氣高雅', en: 'Lion Peak Longjing Tea, clear liquor, elegant aroma' },
        price: 380,
        originalPrice: undefined,
        thumbnail: '/images/longjing-tea-4.jpg',
        images: ['/images/longjing-tea-4.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Hangzhou, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        isFeatured: false
      },
      {
        id: 'longjing-first-grade',
        name: { zh: '一級龍井', en: 'First Grade Longjing Tea' },
        description: { zh: '一級龍井，品質優良，價格實惠', en: 'First Grade Longjing Tea, excellent quality, affordable price' },
        price: 268,
        originalPrice: undefined,
        thumbnail: '/images/longjing-tea-5.jpg',
        images: ['/images/longjing-tea-5.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Hangzhou, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        isFeatured: false
      },
      {
        id: 'rare-premium-lion-peak',
        name: { zh: '稀有明前獅峰龍井', en: 'Rare Premium Lion Peak Longjing Tea' },
        description: { zh: '稀有明前獅峰龍井，極品中的極品', en: 'Rare Premium Lion Peak Longjing Tea, the finest of the finest' },
        price: 12800,
        originalPrice: undefined,
        thumbnail: '/images/longjing-rare.jpg',
        images: ['/images/longjing-rare.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: true,
        specifications: {
          weight: '250g',
          origin: 'Hangzhou, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['rare', 'premium'],
        isFeatured: true
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

function LongjingSeries({ language }: { language: Language }) {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-32 bg-gradient-to-b from-emerald-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-serif font-bold text-gray-900 mb-8 tracking-wide">
            西湖龍井系列
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light tracking-wide">
            明前龍井，一芽一葉，清香持久，回甘生津
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              id: 'longjing-premium',
              name: { en: 'Premium Longjing', zh: '特級龍井' },
              description: { en: 'Pre-Qingming, One Bud One Leaf, Fresh and Lasting Aroma', zh: '明前採摘，一芽一葉，清香持久' },
              price: 280,
              originalPrice: undefined,
              thumbnail: '/images/longjing-tea.jpg',
              images: ['/images/longjing-tea.jpg'],
              category: 'tea' as const,
              status: 'active' as const,
              isNew: false,
              specifications: {
                weight: '100g',
                origin: 'Hangzhou, China',
                storage: 'Store in a cool, dry place',
                expiryDate: '24 months'
              },
              stock: 100,
              createdAt: new Date(),
              updatedAt: new Date(),
              tags: [],
              isFeatured: false
            },
            {
              id: 'longjing-first',
              name: { en: 'First Grade Longjing', zh: '一級龍井' },
              description: { en: 'Early Spring Harvest, Fresh and Refreshing', zh: '早春採摘，清新怡人' },
              price: 220,
              originalPrice: undefined,
              thumbnail: '/images/longjing-tea-2.jpg',
              images: ['/images/longjing-tea-2.jpg'],
              category: 'tea' as const,
              status: 'active' as const,
              isNew: false,
              specifications: {
                weight: '100g',
                origin: 'Hangzhou, China',
                storage: 'Store in a cool, dry place',
                expiryDate: '24 months'
              },
              stock: 80,
              createdAt: new Date(),
              updatedAt: new Date(),
              tags: [],
              isFeatured: false
            },
            {
              id: 'longjing-gift',
              name: { en: 'Longjing Gift Set', zh: '龍井禮盒' },
              description: { en: 'Premium Longjing + First Grade Longjing, Perfect Gift', zh: '特級龍井 + 一級龍井，送禮首選' },
              price: 480,
              originalPrice: undefined,
              thumbnail: '/images/longjing-tea-3.jpg',
              images: ['/images/longjing-tea-3.jpg'],
              category: 'gift-sets' as const,
              status: 'active' as const,
              isNew: true,
              specifications: {
                weight: '200g',
                origin: 'Hangzhou, China',
                storage: 'Store in a cool, dry place',
                expiryDate: '24 months'
              },
              stock: 50,
              createdAt: new Date(),
              updatedAt: new Date(),
              tags: [],
              isFeatured: false
            }
          ].map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} language={language} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default function LongjingPage() {
  const [language, setLanguage] = useState<Language>('zh');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  return (
    <main className="min-h-screen">
      <HeroSection section={content[language].heroSection} />
      <LongjingSeries language={language} />
      <section id="products" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductGrid products={content[language].products} />
        </div>
      </section>
    </main>
  );
} 
 
 