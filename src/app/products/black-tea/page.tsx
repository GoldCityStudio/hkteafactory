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
      headline: '紅茶精選',
      subheadline: '探索醇厚甘美的紅茶系列',
      button: '立即探索',
      leafColor: '#a0522d', // Sienna color for black tea
      bg: 'from-red-800 via-red-900 to-red-700',
      bgImage: '/images/hero-black-tea.jpg'
    },
    products: [
      {
        id: 'dianhong',
        name: { zh: '滇紅', en: 'Dian Hong' },
        description: { zh: '雲南滇紅，茶湯紅亮，香氣濃郁', en: 'Yunnan Dian Hong, bright red liquor, rich aroma' },
        price: 120,
        originalPrice: undefined,
        thumbnail: '/images/dianhong.jpg',
        images: ['/images/dianhong.jpg'],
        category: 'black-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '100g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        isFeatured: true
      },
      {
        id: 'keemun',
        name: { zh: '祁門紅茶', en: 'Keemun Black Tea' },
        description: { zh: '安徽祁門紅茶，祁紅香螺，獨特花果香', en: 'Anhui Keemun Black Tea, unique floral and fruity aroma' },
        price: 110,
        originalPrice: undefined,
        thumbnail: '/images/keemun.jpg',
        images: ['/images/keemun.jpg'],
        category: 'black-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '100g',
          origin: 'China',
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
        id: 'lapsang-souchong',
        name: { zh: '正山小種', en: 'Lapsang Souchong' },
        description: { zh: '福建武夷山正山小種，松煙香', en: 'Fujian Wuyi Mountain Lapsang Souchong, pine smoke aroma' },
        price: 130,
        originalPrice: undefined,
        thumbnail: '/images/lapsang-souchong.jpg',
        images: ['/images/lapsang-souchong.jpg'],
        category: 'black-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '100g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        isFeatured: false
      }
    ]
  },
  en: {
    heroSection: {
      headline: 'Black Tea Selection',
      subheadline: 'Explore our mellow and sweet black tea collection.',
      button: 'Explore Now',
      leafColor: '#a0522d',
      bg: 'from-red-800 via-red-900 to-red-700',
      bgImage: '/images/hero-black-tea.jpg'
    },
    products: [
      {
        id: 'dianhong',
        name: { zh: '滇紅', en: 'Dian Hong' },
        description: { zh: '雲南滇紅，茶湯紅亮，香氣濃郁', en: 'Yunnan Dian Hong, bright red liquor, rich aroma' },
        price: 120,
        originalPrice: undefined,
        thumbnail: '/images/dianhong.jpg',
        images: ['/images/dianhong.jpg'],
        category: 'black-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '100g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        isFeatured: true
      },
      {
        id: 'keemun',
        name: { zh: '祁門紅茶', en: 'Keemun Black Tea' },
        description: { zh: '安徽祁門紅茶，祁紅香螺，獨特花果香', en: 'Anhui Keemun Black Tea, unique floral and fruity aroma' },
        price: 110,
        originalPrice: undefined,
        thumbnail: '/images/keemun.jpg',
        images: ['/images/keemun.jpg'],
        category: 'black-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '100g',
          origin: 'China',
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
        id: 'lapsang-souchong',
        name: { zh: '正山小種', en: 'Lapsang Souchong' },
        description: { zh: '福建武夷山正山小種，松煙香', en: 'Fujian Wuyi Mountain Lapsang Souchong, pine smoke aroma' },
        price: 130,
        originalPrice: undefined,
        thumbnail: '/images/lapsang-souchong.jpg',
        images: ['/images/lapsang-souchong.jpg'],
        category: 'black-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '100g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 60,
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <motion.div
          key={product.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative h-64">
            <Image
              src={product.thumbnail}
              alt={product.name.en}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{product.name.en}</h3>
            <p className="text-gray-600 mb-4">{product.description.en}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">${product.price}</span>
              <Link
                href={`/products/${product.category}/${product.id}`}
                className="bg-darkgreen-600 text-white px-4 py-2 rounded hover:bg-darkgreen-700 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function BlackTeaPage() {
  const [language, setLanguage] = useState<Language>('en');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <main className="min-h-screen">
      <motion.div
        style={{ opacity, scale }}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
      >
        <FloatingLeaf
          className="top-1/4 left-1/4"
          color={content[language].heroSection.leafColor}
        />
        <FloatingLeaf
          className="top-1/3 right-1/4"
          color={content[language].heroSection.leafColor}
          opacity={0.2}
        />
        <FloatingLeaf
          className="bottom-1/4 left-1/3"
          color={content[language].heroSection.leafColor}
          opacity={0.15}
        />
      </motion.div>

      <HeroSection section={content[language].heroSection} />

      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === 'en' ? 'Our Black Tea Collection' : '我們的紅茶系列'}
          </h2>
          <ProductGrid products={content[language].products} />
        </div>
      </section>
    </main>
  );
} 
 
 