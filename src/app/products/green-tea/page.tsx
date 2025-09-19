'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import type { Language } from '@/app/types';
import type { Product } from '@/lib/types/product';
import { useScroll, useTransform } from 'framer-motion';
import ProductSidebar from '@/components/ProductSidebar';
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
      headline: '綠茶精選',
      subheadline: '探索清新雅致的綠茶系列',
      button: '立即探索',
      leafColor: '#388d54',
      bg: 'from-darkgreen-800 via-darkgreen-900 to-darkgreen-700',
      bgImage: '/images/hero-green-tea.jpg'
    },
    products: [
      {
        id: 'premium-lion-peak-longjing',
        name: { zh: '明前獅峰龍井', en: 'Premium Lion Peak Longjing Tea' },
        description: { zh: '明前獅峰龍井，扁平光滑，翠綠鮮潤，極品龍井', en: 'Premium Lion Peak Longjing Tea, flat and smooth, emerald green and fresh' },
        price: 1388,
        originalPrice: undefined,
        thumbnail: '/images/longjing-premium.jpg',
        images: ['/images/longjing-premium.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Hangzhou, China',
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
        id: 'premium-longjing',
        name: { zh: '明前龍井', en: 'Premium Longjing Tea' },
        description: { zh: '明前龍井，色澤綠潤，滋味醇厚', en: 'Premium Longjing Tea, green and moist, mellow flavor' },
        price: 880,
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
        isFeatured: false
      },
      {
        id: 'superior-longjing',
        name: { zh: '雨前龍井', en: 'Superior Longjing Tea' },
        description: { zh: '雨前龍井，清香持久，回甘明顯', en: 'Superior Longjing Tea, lasting fresh aroma, obvious aftertaste' },
        price: 498,
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
        id: 'superior-longjing-small',
        name: { zh: '雨前龍井', en: 'Superior Longjing Tea' },
        description: { zh: '雨前龍井小包裝，方便攜帶', en: 'Superior Longjing Tea, convenient small package' },
        price: 148,
        originalPrice: undefined,
        thumbnail: '/images/longjing-tea-3.jpg',
        images: ['/images/longjing-tea-3.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Hangzhou, China',
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
        id: 'lion-peak-longjing',
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
        id: 'first-grade-longjing',
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
        id: 'jasmine-tea',
        name: { zh: '春風香片', en: 'Jasmine Tea' },
        description: { zh: '春風香片，花香濃郁，清爽怡人', en: 'Jasmine Tea, rich floral aroma, refreshing' },
        price: 118,
        originalPrice: undefined,
        thumbnail: '/images/jasmine-pearl.jpg',
        images: ['/images/jasmine-pearl.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['jasmine'],
        isFeatured: false
      },
      {
        id: 'jasmine-tea-small',
        name: { zh: '春風香片', en: 'Jasmine Tea' },
        description: { zh: '春風香片小包裝，方便攜帶', en: 'Jasmine Tea, convenient small package' },
        price: 88,
        originalPrice: undefined,
        thumbnail: '/images/jasmine-pearl.jpg',
        images: ['/images/jasmine-pearl.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '160g (20x8g)',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 55,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['jasmine', 'small-package'],
        isFeatured: false
      },
      {
        id: 'dragon-pearl-jasmine',
        name: { zh: '龍珠花茶', en: 'Dragon Pearl Jasmine Tea' },
        description: { zh: '龍珠花茶，手工製成，香氣高雅', en: 'Dragon Pearl Jasmine Tea, handcrafted, elegant aroma' },
        price: 318,
        originalPrice: undefined,
        thumbnail: '/images/jasmine-pearl.jpg',
        images: ['/images/jasmine-pearl.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['jasmine', 'dragon-pearl'],
        isFeatured: false
      },
      {
        id: 'dragon-pearl-jasmine-small',
        name: { zh: '龍珠花茶', en: 'Dragon Pearl Jasmine Tea' },
        description: { zh: '龍珠花茶小包裝，方便攜帶', en: 'Dragon Pearl Jasmine Tea, convenient small package' },
        price: 98,
        originalPrice: undefined,
        thumbnail: '/images/jasmine-pearl.jpg',
        images: ['/images/jasmine-pearl.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '70g (10x7g)',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['jasmine', 'dragon-pearl', 'small-package'],
        isFeatured: false
      },
      {
        id: 'mist-green-tea',
        name: { zh: '雲霧綠茶', en: 'Mist Green Tea' },
        description: { zh: '雲霧綠茶，高山雲霧，清香持久', en: 'Mist Green Tea, high mountain mist, lasting fresh aroma' },
        price: 168,
        originalPrice: undefined,
        thumbnail: '/images/green-tea.jpg',
        images: ['/images/green-tea.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['mist'],
        isFeatured: false
      },
      {
        id: 'superior-biluochun',
        name: { zh: '特級碧螺春', en: 'Superior Green Spiral Spring Tea' },
        description: { zh: '特級碧螺春，螺旋形狀，香氣濃郁', en: 'Superior Green Spiral Spring Tea, spiral shape, rich aroma' },
        price: 338,
        originalPrice: undefined,
        thumbnail: '/images/green-tea.jpg',
        images: ['/images/green-tea.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['biluochun'],
        isFeatured: false
      },
      {
        id: 'premium-maojian',
        name: { zh: '明前毛尖', en: 'Premium Maojian tea' },
        description: { zh: '明前毛尖，細嫩芽尖，清香怡人', en: 'Premium Maojian tea, tender buds, fresh and pleasant' },
        price: 280,
        originalPrice: undefined,
        thumbnail: '/images/green-tea.jpg',
        images: ['/images/green-tea.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '125g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['maojian'],
        isFeatured: false
      },
      {
        id: 'rare-premium-lion-peak',
        name: { zh: '稀有明前獅峰龍井', en: 'Rare Premium Lion Peak Longjing Tea' },
        description: { zh: '稀有明前獅峰龍井，極品中的極品', en: 'Rare Premium Lion Peak Longjing Tea, the finest of the finest' },
        price: 12800,
        originalPrice: undefined,
        thumbnail: '/images/longjing-premium.jpg',
        images: ['/images/longjing-premium.jpg'],
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
      },
      {
        id: 'rare-biluochun',
        name: { zh: '稀有明前碧螺春', en: 'Rare Bi Luo Chun Tea' },
        description: { zh: '稀有明前碧螺春，極品碧螺春', en: 'Rare Bi Luo Chun Tea, premium quality' },
        price: 4800,
        originalPrice: undefined,
        thumbnail: '/images/green-tea.jpg',
        images: ['/images/green-tea.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: true,
        specifications: {
          weight: '150g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['rare', 'premium', 'biluochun'],
        isFeatured: true
      }
    ]
  },
  en: {
    heroSection: {
      headline: 'Green Tea Selection',
      subheadline: 'Explore our refreshing and elegant green tea collection.',
      button: 'Explore Now',
      leafColor: '#388d54',
      bg: 'from-darkgreen-800 via-darkgreen-900 to-darkgreen-700',
      bgImage: '/images/hero-green-tea.jpg'
    },
    products: [
      {
        id: 'premium-lion-peak-longjing',
        name: { zh: '明前獅峰龍井', en: 'Premium Lion Peak Longjing Tea' },
        description: { zh: '明前獅峰龍井，扁平光滑，翠綠鮮潤，極品龍井', en: 'Premium Lion Peak Longjing Tea, flat and smooth, emerald green and fresh' },
        price: 1388,
        originalPrice: undefined,
        thumbnail: '/images/longjing-premium.jpg',
        images: ['/images/longjing-premium.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Hangzhou, China',
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
        id: 'premium-longjing',
        name: { zh: '明前龍井', en: 'Premium Longjing Tea' },
        description: { zh: '明前龍井，色澤綠潤，滋味醇厚', en: 'Premium Longjing Tea, green and moist, mellow flavor' },
        price: 880,
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
        isFeatured: false
      },
      {
        id: 'superior-longjing',
        name: { zh: '雨前龍井', en: 'Superior Longjing Tea' },
        description: { zh: '雨前龍井，清香持久，回甘明顯', en: 'Superior Longjing Tea, lasting fresh aroma, obvious aftertaste' },
        price: 498,
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
        id: 'superior-longjing-small',
        name: { zh: '雨前龍井', en: 'Superior Longjing Tea' },
        description: { zh: '雨前龍井小包裝，方便攜帶', en: 'Superior Longjing Tea, convenient small package' },
        price: 148,
        originalPrice: undefined,
        thumbnail: '/images/longjing-tea-3.jpg',
        images: ['/images/longjing-tea-3.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Hangzhou, China',
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
        id: 'lion-peak-longjing',
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
        id: 'first-grade-longjing',
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
        id: 'jasmine-tea',
        name: { zh: '春風香片', en: 'Jasmine Tea' },
        description: { zh: '春風香片，花香濃郁，清爽怡人', en: 'Jasmine Tea, rich floral aroma, refreshing' },
        price: 118,
        originalPrice: undefined,
        thumbnail: '/images/jasmine-pearl.jpg',
        images: ['/images/jasmine-pearl.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['jasmine'],
        isFeatured: false
      },
      {
        id: 'jasmine-tea-small',
        name: { zh: '春風香片', en: 'Jasmine Tea' },
        description: { zh: '春風香片小包裝，方便攜帶', en: 'Jasmine Tea, convenient small package' },
        price: 88,
        originalPrice: undefined,
        thumbnail: '/images/jasmine-pearl.jpg',
        images: ['/images/jasmine-pearl.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '160g (20x8g)',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 55,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['jasmine', 'small-package'],
        isFeatured: false
      },
      {
        id: 'dragon-pearl-jasmine',
        name: { zh: '龍珠花茶', en: 'Dragon Pearl Jasmine Tea' },
        description: { zh: '龍珠花茶，手工製成，香氣高雅', en: 'Dragon Pearl Jasmine Tea, handcrafted, elegant aroma' },
        price: 318,
        originalPrice: undefined,
        thumbnail: '/images/jasmine-pearl.jpg',
        images: ['/images/jasmine-pearl.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['jasmine', 'dragon-pearl'],
        isFeatured: false
      },
      {
        id: 'dragon-pearl-jasmine-small',
        name: { zh: '龍珠花茶', en: 'Dragon Pearl Jasmine Tea' },
        description: { zh: '龍珠花茶小包裝，方便攜帶', en: 'Dragon Pearl Jasmine Tea, convenient small package' },
        price: 98,
        originalPrice: undefined,
        thumbnail: '/images/jasmine-pearl.jpg',
        images: ['/images/jasmine-pearl.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '70g (10x7g)',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['jasmine', 'dragon-pearl', 'small-package'],
        isFeatured: false
      },
      {
        id: 'mist-green-tea',
        name: { zh: '雲霧綠茶', en: 'Mist Green Tea' },
        description: { zh: '雲霧綠茶，高山雲霧，清香持久', en: 'Mist Green Tea, high mountain mist, lasting fresh aroma' },
        price: 168,
        originalPrice: undefined,
        thumbnail: '/images/green-tea.jpg',
        images: ['/images/green-tea.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['mist'],
        isFeatured: false
      },
      {
        id: 'superior-biluochun',
        name: { zh: '特級碧螺春', en: 'Superior Green Spiral Spring Tea' },
        description: { zh: '特級碧螺春，螺旋形狀，香氣濃郁', en: 'Superior Green Spiral Spring Tea, spiral shape, rich aroma' },
        price: 338,
        originalPrice: undefined,
        thumbnail: '/images/green-tea.jpg',
        images: ['/images/green-tea.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['biluochun'],
        isFeatured: false
      },
      {
        id: 'premium-maojian',
        name: { zh: '明前毛尖', en: 'Premium Maojian tea' },
        description: { zh: '明前毛尖，細嫩芽尖，清香怡人', en: 'Premium Maojian tea, tender buds, fresh and pleasant' },
        price: 280,
        originalPrice: undefined,
        thumbnail: '/images/green-tea.jpg',
        images: ['/images/green-tea.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '125g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['maojian'],
        isFeatured: false
      },
      {
        id: 'rare-premium-lion-peak',
        name: { zh: '稀有明前獅峰龍井', en: 'Rare Premium Lion Peak Longjing Tea' },
        description: { zh: '稀有明前獅峰龍井，極品中的極品', en: 'Rare Premium Lion Peak Longjing Tea, the finest of the finest' },
        price: 12800,
        originalPrice: undefined,
        thumbnail: '/images/longjing-premium.jpg',
        images: ['/images/longjing-premium.jpg'],
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
      },
      {
        id: 'rare-biluochun',
        name: { zh: '稀有明前碧螺春', en: 'Rare Bi Luo Chun Tea' },
        description: { zh: '稀有明前碧螺春，極品碧螺春', en: 'Rare Bi Luo Chun Tea, premium quality' },
        price: 4800,
        originalPrice: undefined,
        thumbnail: '/images/green-tea.jpg',
        images: ['/images/green-tea.jpg'],
        category: 'green-tea',
        status: 'active',
        isNew: true,
        specifications: {
          weight: '150g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['rare', 'premium', 'biluochun'],
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
      <h2 className="text-3xl font-bold text-center mb-12">精選綠茶產品</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} language={language} />
        ))}
      </div>
    </div>
  );
}

export default function GreenTeaPage() {
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

      {/* Main Content with Sidebar */}
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar Navigation */}
        <ProductSidebar currentCategory="green-tea" />

        {/* Main Content */}
        <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <section id="products" className="py-20 bg-gray-50 rounded-lg">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                  {language === 'en' ? 'Our Green Tea Collection' : '我們的綠茶系列'}
                </h2>
                <ProductGrid products={content[language].products} />
              </div>
            </section>
          </div>
        </main>
      </div>
    </main>
  );
} 

