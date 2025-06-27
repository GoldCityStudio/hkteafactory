'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
};

const content: Record<Language, { heroSection: HeroSectionType; products: Product[] }> = {
  zh: {
    heroSection: {
      headline: '茶包精選',
      subheadline: '方便快捷，品味優質茶香',
      button: '立即探索',
      leafColor: '#6B8E23',
      bg: 'from-lime-800 via-lime-900 to-lime-700',
      bgImage: '/images/hero-tea-bags.jpg'
    },
    products: [
      {
        id: 'premium-longjing-bags',
        name: { zh: '特級龍井茶包', en: 'Premium Longjing Tea Bags' },
        description: { zh: '特級龍井茶包，方便沖泡，香氣持久', en: 'Premium Longjing Tea Bags, convenient brewing, lasting aroma' },
        price: 68,
        originalPrice: undefined,
        thumbnail: '/images/tea-bags.jpg',
        images: ['/images/tea-bags.jpg'],
        category: 'tea-bags',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '50 bags',
          origin: 'Hangzhou, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium'],
        isFeatured: true
      },
      {
        id: 'superior-longjing-bags',
        name: { zh: '一級龍井茶包', en: 'Superior Longjing Tea Bags' },
        description: { zh: '一級龍井茶包，品質優良，香氣持久', en: 'Superior Longjing Tea Bags, excellent quality, lasting aroma' },
        price: 48,
        originalPrice: undefined,
        thumbnail: '/images/tea-bags.jpg',
        images: ['/images/tea-bags.jpg'],
        category: 'tea-bags',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '50 bags',
          origin: 'Hangzhou, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 120,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        isFeatured: false
      },
      {
        id: 'premium-tieguanyin-bags',
        name: { zh: '特級鐵觀音茶包', en: 'Premium Tieguanyin Tea Bags' },
        description: { zh: '特級鐵觀音茶包，方便沖泡，香氣持久', en: 'Premium Tieguanyin Tea Bags, convenient brewing, lasting aroma' },
        price: 78,
        originalPrice: undefined,
        thumbnail: '/images/tea-bags.jpg',
        images: ['/images/tea-bags.jpg'],
        category: 'tea-bags',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '50 bags',
          origin: 'Anxi, Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['tieguanyin'],
        isFeatured: false
      },
      {
        id: 'superior-tieguanyin-bags',
        name: { zh: '一級鐵觀音茶包', en: 'Superior Tieguanyin Tea Bags' },
        description: { zh: '一級鐵觀音茶包，品質優良，香氣持久', en: 'Superior Tieguanyin Tea Bags, excellent quality, lasting aroma' },
        price: 58,
        originalPrice: undefined,
        thumbnail: '/images/tea-bags.jpg',
        images: ['/images/tea-bags.jpg'],
        category: 'tea-bags',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '50 bags',
          origin: 'Anxi, Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['tieguanyin'],
        isFeatured: false
      },
      {
        id: 'premium-jasmine-bags',
        name: { zh: '特級茉莉花茶包', en: 'Premium Jasmine Tea Bags' },
        description: { zh: '特級茉莉花茶包，方便沖泡，花香濃郁', en: 'Premium Jasmine Tea Bags, convenient brewing, rich floral aroma' },
        price: 68,
        originalPrice: undefined,
        thumbnail: '/images/tea-bags.jpg',
        images: ['/images/tea-bags.jpg'],
        category: 'tea-bags',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '50 bags',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 90,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['jasmine'],
        isFeatured: false
      },
      {
        id: 'superior-jasmine-bags',
        name: { zh: '一級茉莉花茶包', en: 'Superior Jasmine Tea Bags' },
        description: { zh: '一級茉莉花茶包，品質優良，花香持久', en: 'Superior Jasmine Tea Bags, excellent quality, lasting floral aroma' },
        price: 48,
        originalPrice: undefined,
        thumbnail: '/images/tea-bags.jpg',
        images: ['/images/tea-bags.jpg'],
        category: 'tea-bags',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '50 bags',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 110,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['jasmine'],
        isFeatured: false
      },
      {
        id: 'premium-keemun-bags',
        name: { zh: '特級祁門紅茶包', en: 'Premium Keemun Tea Bags' },
        description: { zh: '特級祁門紅茶包，方便沖泡，香氣持久', en: 'Premium Keemun Tea Bags, convenient brewing, lasting aroma' },
        price: 78,
        originalPrice: undefined,
        thumbnail: '/images/tea-bags.jpg',
        images: ['/images/tea-bags.jpg'],
        category: 'tea-bags',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '50 bags',
          origin: 'Qimen, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['keemun'],
        isFeatured: false
      },
      {
        id: 'superior-keemun-bags',
        name: { zh: '一級祁門紅茶包', en: 'Superior Keemun Tea Bags' },
        description: { zh: '一級祁門紅茶包，品質優良，香氣持久', en: 'Superior Keemun Tea Bags, excellent quality, lasting aroma' },
        price: 58,
        originalPrice: undefined,
        thumbnail: '/images/tea-bags.jpg',
        images: ['/images/tea-bags.jpg'],
        category: 'tea-bags',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '50 bags',
          origin: 'Qimen, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['keemun'],
        isFeatured: false
      },
      {
        id: 'premium-dianhong-bags',
        name: { zh: '特級滇紅茶包', en: 'Premium Dianhong Tea Bags' },
        description: { zh: '特級滇紅茶包，方便沖泡，香氣持久', en: 'Premium Dianhong Tea Bags, convenient brewing, lasting aroma' },
        price: 68,
        originalPrice: undefined,
        thumbnail: '/images/tea-bags.jpg',
        images: ['/images/tea-bags.jpg'],
        category: 'tea-bags',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '50 bags',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 90,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['dianhong'],
        isFeatured: false
      },
      {
        id: 'superior-dianhong-bags',
        name: { zh: '一級滇紅茶包', en: 'Superior Dianhong Tea Bags' },
        description: { zh: '一級滇紅茶包，品質優良，香氣持久', en: 'Superior Dianhong Tea Bags, excellent quality, lasting aroma' },
        price: 48,
        originalPrice: undefined,
        thumbnail: '/images/tea-bags.jpg',
        images: ['/images/tea-bags.jpg'],
        category: 'tea-bags',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '50 bags',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 110,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['dianhong'],
        isFeatured: false
      },
      {
        id: 'premium-baihao-bags',
        name: { zh: '特級白毫銀針茶包', en: 'Premium Baihao Yinzhen Tea Bags' },
        description: { zh: '特級白毫銀針茶包，方便沖泡，香氣持久', en: 'Premium Baihao Yinzhen Tea Bags, convenient brewing, lasting aroma' },
        price: 88,
        originalPrice: undefined,
        thumbnail: '/images/tea-bags.jpg',
        images: ['/images/tea-bags.jpg'],
        category: 'tea-bags',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '50 bags',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 70,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['baihao'],
        isFeatured: false
      },
      {
        id: 'superior-baihao-bags',
        name: { zh: '一級白毫銀針茶包', en: 'Superior Baihao Yinzhen Tea Bags' },
        description: { zh: '一級白毫銀針茶包，品質優良，香氣持久', en: 'Superior Baihao Yinzhen Tea Bags, excellent quality, lasting aroma' },
        price: 68,
        originalPrice: undefined,
        thumbnail: '/images/tea-bags.jpg',
        images: ['/images/tea-bags.jpg'],
        category: 'tea-bags',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '50 bags',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 90,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['baihao'],
        isFeatured: false
      },
      {
        id: 'premium-osmanthus-bags',
        name: { zh: '特級桂花茶包', en: 'Premium Osmanthus Tea Bags' },
        description: { zh: '特級桂花茶包，方便沖泡，桂花香濃郁', en: 'Premium Osmanthus Tea Bags, convenient brewing, rich osmanthus aroma' },
        price: 58,
        originalPrice: undefined,
        thumbnail: '/images/tea-bags.jpg',
        images: ['/images/tea-bags.jpg'],
        category: 'tea-bags',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '50 bags',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['osmanthus'],
        isFeatured: false
      },
      {
        id: 'superior-osmanthus-bags',
        name: { zh: '一級桂花茶包', en: 'Superior Osmanthus Tea Bags' },
        description: { zh: '一級桂花茶包，品質優良，桂花香持久', en: 'Superior Osmanthus Tea Bags, excellent quality, lasting osmanthus aroma' },
        price: 38,
        originalPrice: undefined,
        thumbnail: '/images/tea-bags.jpg',
        images: ['/images/tea-bags.jpg'],
        category: 'tea-bags',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '50 bags',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 120,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['osmanthus'],
        isFeatured: false
      }
    ]
  },
  en: {
    heroSection: {
      headline: 'Tea Bags Selection',
      subheadline: 'Convenient and quick, taste premium tea',
      button: 'Explore Now',
      leafColor: '#6B8E23',
      bg: 'from-lime-800 via-lime-900 to-lime-700',
      bgImage: '/images/hero-tea-bags.jpg'
    },
    products: [
      {
        id: 'premium-longjing-bags',
        name: { zh: '特級龍井茶包', en: 'Premium Longjing Tea Bags' },
        description: { zh: '特級龍井茶包，方便沖泡，香氣持久', en: 'Premium Longjing Tea Bags, convenient brewing, lasting aroma' },
        price: 68,
        originalPrice: undefined,
        thumbnail: '/images/tea-bags.jpg',
        images: ['/images/tea-bags.jpg'],
        category: 'tea-bags',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '50 bags',
          origin: 'Hangzhou, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium'],
        isFeatured: true
      },
      {
        id: 'superior-longjing-bags',
        name: { zh: '一級龍井茶包', en: 'Superior Longjing Tea Bags' },
        description: { zh: '一級龍井茶包，品質優良，香氣持久', en: 'Superior Longjing Tea Bags, excellent quality, lasting aroma' },
        price: 48,
        originalPrice: undefined,
        thumbnail: '/images/tea-bags.jpg',
        images: ['/images/tea-bags.jpg'],
        category: 'tea-bags',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '50 bags',
          origin: 'Hangzhou, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 120,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        isFeatured: false
      },
      {
        id: 'premium-tieguanyin-bags',
        name: { zh: '特級鐵觀音茶包', en: 'Premium Tieguanyin Tea Bags' },
        description: { zh: '特級鐵觀音茶包，方便沖泡，香氣持久', en: 'Premium Tieguanyin Tea Bags, convenient brewing, lasting aroma' },
        price: 78,
        originalPrice: undefined,
        thumbnail: '/images/tea-bags.jpg',
        images: ['/images/tea-bags.jpg'],
        category: 'tea-bags',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '50 bags',
          origin: 'Anxi, Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['tieguanyin'],
        isFeatured: false
      },
      {
        id: 'superior-tieguanyin-bags',
        name: { zh: '一級鐵觀音茶包', en: 'Superior Tieguanyin Tea Bags' },
        description: { zh: '一級鐵觀音茶包，品質優良，香氣持久', en: 'Superior Tieguanyin Tea Bags, excellent quality, lasting aroma' },
        price: 58,
        originalPrice: undefined,
        thumbnail: '/images/tea-bags.jpg',
        images: ['/images/tea-bags.jpg'],
        category: 'tea-bags',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '50 bags',
          origin: 'Anxi, Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['tieguanyin'],
        isFeatured: false
      },
      {
        id: 'premium-jasmine-bags',
        name: { zh: '特級茉莉花茶包', en: 'Premium Jasmine Tea Bags' },
        description: { zh: '特級茉莉花茶包，方便沖泡，花香濃郁', en: 'Premium Jasmine Tea Bags, convenient brewing, rich floral aroma' },
        price: 68,
        originalPrice: undefined,
        thumbnail: '/images/tea-bags.jpg',
        images: ['/images/tea-bags.jpg'],
        category: 'tea-bags',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '50 bags',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 90,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['jasmine'],
        isFeatured: false
      },
      {
        id: 'superior-jasmine-bags',
        name: { zh: '一級茉莉花茶包', en: 'Superior Jasmine Tea Bags' },
        description: { zh: '一級茉莉花茶包，品質優良，花香持久', en: 'Superior Jasmine Tea Bags, excellent quality, lasting floral aroma' },
        price: 48,
        originalPrice: undefined,
        thumbnail: '/images/tea-bags.jpg',
        images: ['/images/tea-bags.jpg'],
        category: 'tea-bags',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '50 bags',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 110,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['jasmine'],
        isFeatured: false
      },
      {
        id: 'premium-keemun-bags',
        name: { zh: '特級祁門紅茶包', en: 'Premium Keemun Tea Bags' },
        description: { zh: '特級祁門紅茶包，方便沖泡，香氣持久', en: 'Premium Keemun Tea Bags, convenient brewing, lasting aroma' },
        price: 78,
        originalPrice: undefined,
        thumbnail: '/images/tea-bags.jpg',
        images: ['/images/tea-bags.jpg'],
        category: 'tea-bags',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '50 bags',
          origin: 'Qimen, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['keemun'],
        isFeatured: false
      },
      {
        id: 'superior-keemun-bags',
        name: { zh: '一級祁門紅茶包', en: 'Superior Keemun Tea Bags' },
        description: { zh: '一級祁門紅茶包，品質優良，香氣持久', en: 'Superior Keemun Tea Bags, excellent quality, lasting aroma' },
        price: 58,
        originalPrice: undefined,
        thumbnail: '/images/tea-bags.jpg',
        images: ['/images/tea-bags.jpg'],
        category: 'tea-bags',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '50 bags',
          origin: 'Qimen, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['keemun'],
        isFeatured: false
      },
      {
        id: 'premium-dianhong-bags',
        name: { zh: '特級滇紅茶包', en: 'Premium Dianhong Tea Bags' },
        description: { zh: '特級滇紅茶包，方便沖泡，香氣持久', en: 'Premium Dianhong Tea Bags, convenient brewing, lasting aroma' },
        price: 68,
        originalPrice: undefined,
        thumbnail: '/images/tea-bags.jpg',
        images: ['/images/tea-bags.jpg'],
        category: 'tea-bags',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '50 bags',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 90,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['dianhong'],
        isFeatured: false
      },
      {
        id: 'superior-dianhong-bags',
        name: { zh: '一級滇紅茶包', en: 'Superior Dianhong Tea Bags' },
        description: { zh: '一級滇紅茶包，品質優良，香氣持久', en: 'Superior Dianhong Tea Bags, excellent quality, lasting aroma' },
        price: 48,
        originalPrice: undefined,
        thumbnail: '/images/tea-bags.jpg',
        images: ['/images/tea-bags.jpg'],
        category: 'tea-bags',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '50 bags',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 110,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['dianhong'],
        isFeatured: false
      },
      {
        id: 'premium-baihao-bags',
        name: { zh: '特級白毫銀針茶包', en: 'Premium Baihao Yinzhen Tea Bags' },
        description: { zh: '特級白毫銀針茶包，方便沖泡，香氣持久', en: 'Premium Baihao Yinzhen Tea Bags, convenient brewing, lasting aroma' },
        price: 88,
        originalPrice: undefined,
        thumbnail: '/images/tea-bags.jpg',
        images: ['/images/tea-bags.jpg'],
        category: 'tea-bags',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '50 bags',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 70,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['baihao'],
        isFeatured: false
      },
      {
        id: 'superior-baihao-bags',
        name: { zh: '一級白毫銀針茶包', en: 'Superior Baihao Yinzhen Tea Bags' },
        description: { zh: '一級白毫銀針茶包，品質優良，香氣持久', en: 'Superior Baihao Yinzhen Tea Bags, excellent quality, lasting aroma' },
        price: 68,
        originalPrice: undefined,
        thumbnail: '/images/tea-bags.jpg',
        images: ['/images/tea-bags.jpg'],
        category: 'tea-bags',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '50 bags',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 90,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['baihao'],
        isFeatured: false
      },
      {
        id: 'premium-osmanthus-bags',
        name: { zh: '特級桂花茶包', en: 'Premium Osmanthus Tea Bags' },
        description: { zh: '特級桂花茶包，方便沖泡，桂花香濃郁', en: 'Premium Osmanthus Tea Bags, convenient brewing, rich osmanthus aroma' },
        price: 58,
        originalPrice: undefined,
        thumbnail: '/images/tea-bags.jpg',
        images: ['/images/tea-bags.jpg'],
        category: 'tea-bags',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '50 bags',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['osmanthus'],
        isFeatured: false
      },
      {
        id: 'superior-osmanthus-bags',
        name: { zh: '一級桂花茶包', en: 'Superior Osmanthus Tea Bags' },
        description: { zh: '一級桂花茶包，品質優良，桂花香持久', en: 'Superior Osmanthus Tea Bags, excellent quality, lasting osmanthus aroma' },
        price: 38,
        originalPrice: undefined,
        thumbnail: '/images/tea-bags.jpg',
        images: ['/images/tea-bags.jpg'],
        category: 'tea-bags',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '50 bags',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 120,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['osmanthus'],
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
    </div>
  );
}

function ProductGrid({ products }: { products: Product[] }) {
  const [language] = useState<Language>('zh');
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">精選茶包產品</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} language={language} />
        ))}
      </div>
    </div>
  );
}

export default function TeaBagsPage() {
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
          src={heroSection.bgImage}
          alt="Tea Bags Hero"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent z-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-20 text-center text-white p-4"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
            {heroSection.headline}
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            {heroSection.subheadline}
          </p>
        </motion.div>
      </motion.section>
      
      {/* Products Section */}
      <section id="products">
        <ProductGrid products={products} />
      </section>
    </div>
  );
} 