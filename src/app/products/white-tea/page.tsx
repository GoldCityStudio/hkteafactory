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
      headline: '白茶精選',
      subheadline: '探索自然純淨的白茶系列',
      button: '立即探索',
      leafColor: '#D8BFD8', // Thistle for white tea
      bg: 'from-gray-800 via-gray-900 to-gray-700',
      bgImage: '/images/hero-white-tea.jpg'
    },
    products: [
      {
        id: 'premium-baihao-yinzhen',
        name: { zh: '特級白毫銀針', en: 'Premium Baihao Yinzhen White Tea' },
        description: { zh: '特級白毫銀針，銀白如雪，清香高雅', en: 'Premium Baihao Yinzhen White Tea, silver-white like snow, elegant fresh aroma' },
        price: 688,
        originalPrice: undefined,
        thumbnail: '/images/white-tea.jpg',
        images: ['/images/white-tea.jpg'],
        category: 'white-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium'],
        isFeatured: true
      },
      {
        id: 'superior-baihao-yinzhen',
        name: { zh: '一級白毫銀針', en: 'Superior Baihao Yinzhen White Tea' },
        description: { zh: '一級白毫銀針，品質優良，香氣持久', en: 'Superior Baihao Yinzhen White Tea, excellent quality, lasting aroma' },
        price: 468,
        originalPrice: undefined,
        thumbnail: '/images/white-tea.jpg',
        images: ['/images/white-tea.jpg'],
        category: 'white-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        isFeatured: false
      },
      {
        id: 'baihao-yinzhen-small',
        name: { zh: '白毫銀針', en: 'Baihao Yinzhen White Tea' },
        description: { zh: '白毫銀針小包裝，方便攜帶', en: 'Baihao Yinzhen White Tea, convenient small package' },
        price: 138,
        originalPrice: undefined,
        thumbnail: '/images/white-tea.jpg',
        images: ['/images/white-tea.jpg'],
        category: 'white-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['small-package'],
        isFeatured: false
      },
      {
        id: 'premium-baimudan',
        name: { zh: '特級白牡丹', en: 'Premium Baimudan White Tea' },
        description: { zh: '特級白牡丹，花香濃郁，滋味醇厚', en: 'Premium Baimudan White Tea, rich floral aroma, mellow flavor' },
        price: 428,
        originalPrice: undefined,
        thumbnail: '/images/white-tea.jpg',
        images: ['/images/white-tea.jpg'],
        category: 'white-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['baimudan'],
        isFeatured: false
      },
      {
        id: 'superior-baimudan',
        name: { zh: '一級白牡丹', en: 'Superior Baimudan White Tea' },
        description: { zh: '一級白牡丹，花香持久，回甘明顯', en: 'Superior Baimudan White Tea, lasting floral aroma, obvious aftertaste' },
        price: 298,
        originalPrice: undefined,
        thumbnail: '/images/white-tea.jpg',
        images: ['/images/white-tea.jpg'],
        category: 'white-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['baimudan'],
        isFeatured: false
      },
      {
        id: 'baimudan-small',
        name: { zh: '白牡丹', en: 'Baimudan White Tea' },
        description: { zh: '白牡丹小包裝，方便攜帶', en: 'Baimudan White Tea, convenient small package' },
        price: 108,
        originalPrice: undefined,
        thumbnail: '/images/white-tea.jpg',
        images: ['/images/white-tea.jpg'],
        category: 'white-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['baimudan', 'small-package'],
        isFeatured: false
      },
      {
        id: 'premium-shoumei',
        name: { zh: '特級壽眉', en: 'Premium Shoumei White Tea' },
        description: { zh: '特級壽眉，陳香濃郁，滋味醇厚', en: 'Premium Shoumei White Tea, rich aged aroma, mellow flavor' },
        price: 368,
        originalPrice: undefined,
        thumbnail: '/images/white-tea.jpg',
        images: ['/images/white-tea.jpg'],
        category: 'white-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['shoumei'],
        isFeatured: false
      },
      {
        id: 'superior-shoumei',
        name: { zh: '一級壽眉', en: 'Superior Shoumei White Tea' },
        description: { zh: '一級壽眉，陳香持久，回甘明顯', en: 'Superior Shoumei White Tea, lasting aged aroma, obvious aftertaste' },
        price: 248,
        originalPrice: undefined,
        thumbnail: '/images/white-tea.jpg',
        images: ['/images/white-tea.jpg'],
        category: 'white-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['shoumei'],
        isFeatured: false
      },
      {
        id: 'shoumei-small',
        name: { zh: '壽眉', en: 'Shoumei White Tea' },
        description: { zh: '壽眉小包裝，方便攜帶', en: 'Shoumei White Tea, convenient small package' },
        price: 98,
        originalPrice: undefined,
        thumbnail: '/images/white-tea.jpg',
        images: ['/images/white-tea.jpg'],
        category: 'white-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['shoumei', 'small-package'],
        isFeatured: false
      },
      {
        id: 'premium-gongmei',
        name: { zh: '特級貢眉', en: 'Premium Gongmei White Tea' },
        description: { zh: '特級貢眉，清香持久，滋味醇厚', en: 'Premium Gongmei White Tea, lasting fresh aroma, mellow flavor' },
        price: 318,
        originalPrice: undefined,
        thumbnail: '/images/white-tea.jpg',
        images: ['/images/white-tea.jpg'],
        category: 'white-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['gongmei'],
        isFeatured: false
      },
      {
        id: 'superior-gongmei',
        name: { zh: '一級貢眉', en: 'Superior Gongmei White Tea' },
        description: { zh: '一級貢眉，品質優良，香氣持久', en: 'Superior Gongmei White Tea, excellent quality, lasting aroma' },
        price: 218,
        originalPrice: undefined,
        thumbnail: '/images/white-tea.jpg',
        images: ['/images/white-tea.jpg'],
        category: 'white-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['gongmei'],
        isFeatured: false
      },
      {
        id: 'gongmei-small',
        name: { zh: '貢眉', en: 'Gongmei White Tea' },
        description: { zh: '貢眉小包裝，方便攜帶', en: 'Gongmei White Tea, convenient small package' },
        price: 88,
        originalPrice: undefined,
        thumbnail: '/images/white-tea.jpg',
        images: ['/images/white-tea.jpg'],
        category: 'white-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['gongmei', 'small-package'],
        isFeatured: false
      },
      {
        id: 'rare-premium-baihao-yinzhen',
        name: { zh: '稀有特級白毫銀針', en: 'Rare Premium Baihao Yinzhen White Tea' },
        description: { zh: '稀有特級白毫銀針，極品中的極品', en: 'Rare Premium Baihao Yinzhen White Tea, the finest of the finest' },
        price: 4800,
        originalPrice: undefined,
        thumbnail: '/images/white-tea.jpg',
        images: ['/images/white-tea.jpg'],
        category: 'white-tea',
        status: 'active',
        isNew: true,
        specifications: {
          weight: '150g',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['rare', 'premium'],
        isFeatured: true
      }
    ]
  },
  en: {
    heroSection: {
      headline: 'White Tea Selection',
      subheadline: 'Explore our natural and pure white tea collection.',
      button: 'Explore Now',
      leafColor: '#D8BFD8',
      bg: 'from-gray-800 via-gray-900 to-gray-700',
      bgImage: '/images/hero-white-tea.jpg'
    },
    products: [
      {
        id: 'premium-baihao-yinzhen',
        name: { zh: '特級白毫銀針', en: 'Premium Baihao Yinzhen White Tea' },
        description: { zh: '特級白毫銀針，銀白如雪，清香高雅', en: 'Premium Baihao Yinzhen White Tea, silver-white like snow, elegant fresh aroma' },
        price: 688,
        originalPrice: undefined,
        thumbnail: '/images/white-tea.jpg',
        images: ['/images/white-tea.jpg'],
        category: 'white-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium'],
        isFeatured: true
      },
      {
        id: 'superior-baihao-yinzhen',
        name: { zh: '一級白毫銀針', en: 'Superior Baihao Yinzhen White Tea' },
        description: { zh: '一級白毫銀針，品質優良，香氣持久', en: 'Superior Baihao Yinzhen White Tea, excellent quality, lasting aroma' },
        price: 468,
        originalPrice: undefined,
        thumbnail: '/images/white-tea.jpg',
        images: ['/images/white-tea.jpg'],
        category: 'white-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        isFeatured: false
      },
      {
        id: 'baihao-yinzhen-small',
        name: { zh: '白毫銀針', en: 'Baihao Yinzhen White Tea' },
        description: { zh: '白毫銀針小包裝，方便攜帶', en: 'Baihao Yinzhen White Tea, convenient small package' },
        price: 138,
        originalPrice: undefined,
        thumbnail: '/images/white-tea.jpg',
        images: ['/images/white-tea.jpg'],
        category: 'white-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['small-package'],
        isFeatured: false
      },
      {
        id: 'premium-baimudan',
        name: { zh: '特級白牡丹', en: 'Premium Baimudan White Tea' },
        description: { zh: '特級白牡丹，花香濃郁，滋味醇厚', en: 'Premium Baimudan White Tea, rich floral aroma, mellow flavor' },
        price: 428,
        originalPrice: undefined,
        thumbnail: '/images/white-tea.jpg',
        images: ['/images/white-tea.jpg'],
        category: 'white-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['baimudan'],
        isFeatured: false
      },
      {
        id: 'superior-baimudan',
        name: { zh: '一級白牡丹', en: 'Superior Baimudan White Tea' },
        description: { zh: '一級白牡丹，花香持久，回甘明顯', en: 'Superior Baimudan White Tea, lasting floral aroma, obvious aftertaste' },
        price: 298,
        originalPrice: undefined,
        thumbnail: '/images/white-tea.jpg',
        images: ['/images/white-tea.jpg'],
        category: 'white-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['baimudan'],
        isFeatured: false
      },
      {
        id: 'baimudan-small',
        name: { zh: '白牡丹', en: 'Baimudan White Tea' },
        description: { zh: '白牡丹小包裝，方便攜帶', en: 'Baimudan White Tea, convenient small package' },
        price: 108,
        originalPrice: undefined,
        thumbnail: '/images/white-tea.jpg',
        images: ['/images/white-tea.jpg'],
        category: 'white-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['baimudan', 'small-package'],
        isFeatured: false
      },
      {
        id: 'premium-shoumei',
        name: { zh: '特級壽眉', en: 'Premium Shoumei White Tea' },
        description: { zh: '特級壽眉，陳香濃郁，滋味醇厚', en: 'Premium Shoumei White Tea, rich aged aroma, mellow flavor' },
        price: 368,
        originalPrice: undefined,
        thumbnail: '/images/white-tea.jpg',
        images: ['/images/white-tea.jpg'],
        category: 'white-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['shoumei'],
        isFeatured: false
      },
      {
        id: 'superior-shoumei',
        name: { zh: '一級壽眉', en: 'Superior Shoumei White Tea' },
        description: { zh: '一級壽眉，陳香持久，回甘明顯', en: 'Superior Shoumei White Tea, lasting aged aroma, obvious aftertaste' },
        price: 248,
        originalPrice: undefined,
        thumbnail: '/images/white-tea.jpg',
        images: ['/images/white-tea.jpg'],
        category: 'white-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['shoumei'],
        isFeatured: false
      },
      {
        id: 'shoumei-small',
        name: { zh: '壽眉', en: 'Shoumei White Tea' },
        description: { zh: '壽眉小包裝，方便攜帶', en: 'Shoumei White Tea, convenient small package' },
        price: 98,
        originalPrice: undefined,
        thumbnail: '/images/white-tea.jpg',
        images: ['/images/white-tea.jpg'],
        category: 'white-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['shoumei', 'small-package'],
        isFeatured: false
      },
      {
        id: 'premium-gongmei',
        name: { zh: '特級貢眉', en: 'Premium Gongmei White Tea' },
        description: { zh: '特級貢眉，清香持久，滋味醇厚', en: 'Premium Gongmei White Tea, lasting fresh aroma, mellow flavor' },
        price: 318,
        originalPrice: undefined,
        thumbnail: '/images/white-tea.jpg',
        images: ['/images/white-tea.jpg'],
        category: 'white-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['gongmei'],
        isFeatured: false
      },
      {
        id: 'superior-gongmei',
        name: { zh: '一級貢眉', en: 'Superior Gongmei White Tea' },
        description: { zh: '一級貢眉，品質優良，香氣持久', en: 'Superior Gongmei White Tea, excellent quality, lasting aroma' },
        price: 218,
        originalPrice: undefined,
        thumbnail: '/images/white-tea.jpg',
        images: ['/images/white-tea.jpg'],
        category: 'white-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['gongmei'],
        isFeatured: false
      },
      {
        id: 'gongmei-small',
        name: { zh: '貢眉', en: 'Gongmei White Tea' },
        description: { zh: '貢眉小包裝，方便攜帶', en: 'Gongmei White Tea, convenient small package' },
        price: 88,
        originalPrice: undefined,
        thumbnail: '/images/white-tea.jpg',
        images: ['/images/white-tea.jpg'],
        category: 'white-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['gongmei', 'small-package'],
        isFeatured: false
      },
      {
        id: 'rare-premium-baihao-yinzhen',
        name: { zh: '稀有特級白毫銀針', en: 'Rare Premium Baihao Yinzhen White Tea' },
        description: { zh: '稀有特級白毫銀針，極品中的極品', en: 'Rare Premium Baihao Yinzhen White Tea, the finest of the finest' },
        price: 4800,
        originalPrice: undefined,
        thumbnail: '/images/white-tea.jpg',
        images: ['/images/white-tea.jpg'],
        category: 'white-tea',
        status: 'active',
        isNew: true,
        specifications: {
          weight: '150g',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 8,
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
  const [language] = useState<Language>('zh');
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">精選白茶產品</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} language={language} />
        ))}
      </div>
    </div>
  );
}

export default function WhiteTeaPage() {
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
          alt="White Tea Hero"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-10" />
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
 