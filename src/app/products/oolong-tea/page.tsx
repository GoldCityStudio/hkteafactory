'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Language } from '@/app/types';
import type { Product } from '@/lib/types/product';
import ProductCard from '@/components/ProductCard';
import ProductSidebar from '@/components/ProductSidebar';

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
      headline: '烏龍茶精選',
      subheadline: '探索半發酵茶的獨特韻味',
      button: '立即探索',
      leafColor: '#8B4513', // Saddle Brown for oolong tea
      bg: 'from-orange-800 via-orange-900 to-orange-700',
      bgImage: '/images/hero-oolong-tea.jpg'
    },
    products: [
      {
        id: 'premium-tieguanyin',
        name: { zh: '特級鐵觀音', en: 'Premium Tieguanyin Oolong Tea' },
        description: { zh: '特級鐵觀音，香氣高雅，滋味醇厚', en: 'Premium Tieguanyin Oolong Tea, elegant aroma, mellow flavor' },
        price: 688,
        originalPrice: undefined,
        thumbnail: '/images/tieguanyin-premium.jpg',
        images: ['/images/tieguanyin-premium.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Anxi, Fujian, China',
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
        id: 'superior-tieguanyin',
        name: { zh: '一級鐵觀音', en: 'Superior Tieguanyin Oolong Tea' },
        description: { zh: '一級鐵觀音，品質優良，香氣持久', en: 'Superior Tieguanyin Oolong Tea, excellent quality, lasting aroma' },
        price: 468,
        originalPrice: undefined,
        thumbnail: '/images/tieguanyin-tea.jpg',
        images: ['/images/tieguanyin-tea.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Anxi, Fujian, China',
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
        id: 'tieguanyin-small',
        name: { zh: '鐵觀音', en: 'Tieguanyin Oolong Tea' },
        description: { zh: '鐵觀音小包裝，方便攜帶', en: 'Tieguanyin Oolong Tea, convenient small package' },
        price: 138,
        originalPrice: undefined,
        thumbnail: '/images/tieguanyin-tea.jpg',
        images: ['/images/tieguanyin-tea.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Anxi, Fujian, China',
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
        id: 'premium-dahongpao',
        name: { zh: '特級大紅袍', en: 'Premium Dahongpao Oolong Tea' },
        description: { zh: '特級大紅袍，岩韻濃郁，香氣高雅', en: 'Premium Dahongpao Oolong Tea, strong rock flavor, elegant aroma' },
        price: 888,
        originalPrice: undefined,
        thumbnail: '/images/oolong-tea.jpg',
        images: ['/images/oolong-tea.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Wuyi Mountain, Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['dahongpao'],
        isFeatured: false
      },
      {
        id: 'superior-dahongpao',
        name: { zh: '一級大紅袍', en: 'Superior Dahongpao Oolong Tea' },
        description: { zh: '一級大紅袍，岩韻明顯，滋味醇厚', en: 'Superior Dahongpao Oolong Tea, obvious rock flavor, mellow taste' },
        price: 588,
        originalPrice: undefined,
        thumbnail: '/images/oolong-tea.jpg',
        images: ['/images/oolong-tea.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Wuyi Mountain, Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['dahongpao'],
        isFeatured: false
      },
      {
        id: 'dahongpao-small',
        name: { zh: '大紅袍', en: 'Dahongpao Oolong Tea' },
        description: { zh: '大紅袍小包裝，方便攜帶', en: 'Dahongpao Oolong Tea, convenient small package' },
        price: 168,
        originalPrice: undefined,
        thumbnail: '/images/oolong-tea.jpg',
        images: ['/images/oolong-tea.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Wuyi Mountain, Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['dahongpao', 'small-package'],
        isFeatured: false
      },
      {
        id: 'premium-shuixian',
        name: { zh: '特級水仙', en: 'Premium Shuixian Oolong Tea' },
        description: { zh: '特級水仙，花香濃郁，滋味醇厚', en: 'Premium Shuixian Oolong Tea, rich floral aroma, mellow flavor' },
        price: 428,
        originalPrice: undefined,
        thumbnail: '/images/oolong-tea.jpg',
        images: ['/images/oolong-tea.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Wuyi Mountain, Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['shuixian'],
        isFeatured: false
      },
      {
        id: 'superior-shuixian',
        name: { zh: '一級水仙', en: 'Superior Shuixian Oolong Tea' },
        description: { zh: '一級水仙，花香持久，回甘明顯', en: 'Superior Shuixian Oolong Tea, lasting floral aroma, obvious aftertaste' },
        price: 298,
        originalPrice: undefined,
        thumbnail: '/images/oolong-tea.jpg',
        images: ['/images/oolong-tea.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Wuyi Mountain, Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['shuixian'],
        isFeatured: false
      },
      {
        id: 'shuixian-small',
        name: { zh: '水仙', en: 'Shuixian Oolong Tea' },
        description: { zh: '水仙小包裝，方便攜帶', en: 'Shuixian Oolong Tea, convenient small package' },
        price: 108,
        originalPrice: undefined,
        thumbnail: '/images/oolong-tea.jpg',
        images: ['/images/oolong-tea.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Wuyi Mountain, Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['shuixian', 'small-package'],
        isFeatured: false
      },
      {
        id: 'premium-fenghuang',
        name: { zh: '特級鳳凰單叢', en: 'Premium Fenghuang Dancong Oolong Tea' },
        description: { zh: '特級鳳凰單叢，蜜香濃郁，滋味醇厚', en: 'Premium Fenghuang Dancong Oolong Tea, rich honey aroma, mellow flavor' },
        price: 568,
        originalPrice: undefined,
        thumbnail: '/images/oolong-tea.jpg',
        images: ['/images/oolong-tea.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Chaozhou, Guangdong, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['fenghuang'],
        isFeatured: false
      },
      {
        id: 'superior-fenghuang',
        name: { zh: '一級鳳凰單叢', en: 'Superior Fenghuang Dancong Oolong Tea' },
        description: { zh: '一級鳳凰單叢，蜜香持久，回甘明顯', en: 'Superior Fenghuang Dancong Oolong Tea, lasting honey aroma, obvious aftertaste' },
        price: 388,
        originalPrice: undefined,
        thumbnail: '/images/oolong-tea.jpg',
        images: ['/images/oolong-tea.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Chaozhou, Guangdong, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['fenghuang'],
        isFeatured: false
      },
      {
        id: 'fenghuang-small',
        name: { zh: '鳳凰單叢', en: 'Fenghuang Dancong Oolong Tea' },
        description: { zh: '鳳凰單叢小包裝，方便攜帶', en: 'Fenghuang Dancong Oolong Tea, convenient small package' },
        price: 128,
        originalPrice: undefined,
        thumbnail: '/images/oolong-tea.jpg',
        images: ['/images/oolong-tea.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Chaozhou, Guangdong, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['fenghuang', 'small-package'],
        isFeatured: false
      },
      {
        id: 'premium-taiwan-oolong',
        name: { zh: '特級台灣烏龍', en: 'Premium Taiwan Oolong Tea' },
        description: { zh: '特級台灣烏龍，清香持久，滋味醇厚', en: 'Premium Taiwan Oolong Tea, lasting fresh aroma, mellow flavor' },
        price: 488,
        originalPrice: undefined,
        thumbnail: '/images/oolong-tea.jpg',
        images: ['/images/oolong-tea.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Taiwan',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['taiwan'],
        isFeatured: false
      },
      {
        id: 'superior-taiwan-oolong',
        name: { zh: '一級台灣烏龍', en: 'Superior Taiwan Oolong Tea' },
        description: { zh: '一級台灣烏龍，品質優良，香氣持久', en: 'Superior Taiwan Oolong Tea, excellent quality, lasting aroma' },
        price: 328,
        originalPrice: undefined,
        thumbnail: '/images/oolong-tea.jpg',
        images: ['/images/oolong-tea.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Taiwan',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['taiwan'],
        isFeatured: false
      },
      {
        id: 'taiwan-oolong-small',
        name: { zh: '台灣烏龍', en: 'Taiwan Oolong Tea' },
        description: { zh: '台灣烏龍小包裝，方便攜帶', en: 'Taiwan Oolong Tea, convenient small package' },
        price: 118,
        originalPrice: undefined,
        thumbnail: '/images/oolong-tea.jpg',
        images: ['/images/oolong-tea.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Taiwan',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['taiwan', 'small-package'],
        isFeatured: false
      },
      {
        id: 'rare-premium-tieguanyin',
        name: { zh: '稀有特級鐵觀音', en: 'Rare Premium Tieguanyin Oolong Tea' },
        description: { zh: '稀有特級鐵觀音，極品中的極品', en: 'Rare Premium Tieguanyin Oolong Tea, the finest of the finest' },
        price: 6800,
        originalPrice: undefined,
        thumbnail: '/images/tieguanyin-premium.jpg',
        images: ['/images/tieguanyin-premium.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: true,
        specifications: {
          weight: '250g',
          origin: 'Anxi, Fujian, China',
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
        id: 'rare-premium-dahongpao',
        name: { zh: '稀有特級大紅袍', en: 'Rare Premium Dahongpao Oolong Tea' },
        description: { zh: '稀有特級大紅袍，極品大紅袍', en: 'Rare Premium Dahongpao Oolong Tea, premium quality' },
        price: 4800,
        originalPrice: undefined,
        thumbnail: '/images/oolong-tea.jpg',
        images: ['/images/oolong-tea.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: true,
        specifications: {
          weight: '150g',
          origin: 'Wuyi Mountain, Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['rare', 'premium', 'dahongpao'],
        isFeatured: true
      }
    ]
  },
  en: {
    heroSection: {
      headline: 'Oolong Tea Selection',
      subheadline: 'Explore the unique charm of semi-fermented teas.',
      button: 'Explore Now',
      leafColor: '#8B4513',
      bg: 'from-orange-800 via-orange-900 to-orange-700',
      bgImage: '/images/hero-oolong-tea.jpg'
    },
    products: [
      {
        id: 'premium-tieguanyin',
        name: { zh: '特級鐵觀音', en: 'Premium Tieguanyin Oolong Tea' },
        description: { zh: '特級鐵觀音，香氣高雅，滋味醇厚', en: 'Premium Tieguanyin Oolong Tea, elegant aroma, mellow flavor' },
        price: 688,
        originalPrice: undefined,
        thumbnail: '/images/tieguanyin-premium.jpg',
        images: ['/images/tieguanyin-premium.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Anxi, Fujian, China',
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
        id: 'superior-tieguanyin',
        name: { zh: '一級鐵觀音', en: 'Superior Tieguanyin Oolong Tea' },
        description: { zh: '一級鐵觀音，品質優良，香氣持久', en: 'Superior Tieguanyin Oolong Tea, excellent quality, lasting aroma' },
        price: 468,
        originalPrice: undefined,
        thumbnail: '/images/tieguanyin-tea.jpg',
        images: ['/images/tieguanyin-tea.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Anxi, Fujian, China',
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
        id: 'tieguanyin-small',
        name: { zh: '鐵觀音', en: 'Tieguanyin Oolong Tea' },
        description: { zh: '鐵觀音小包裝，方便攜帶', en: 'Tieguanyin Oolong Tea, convenient small package' },
        price: 138,
        originalPrice: undefined,
        thumbnail: '/images/tieguanyin-tea.jpg',
        images: ['/images/tieguanyin-tea.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Anxi, Fujian, China',
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
        id: 'premium-dahongpao',
        name: { zh: '特級大紅袍', en: 'Premium Dahongpao Oolong Tea' },
        description: { zh: '特級大紅袍，岩韻濃郁，香氣高雅', en: 'Premium Dahongpao Oolong Tea, strong rock flavor, elegant aroma' },
        price: 888,
        originalPrice: undefined,
        thumbnail: '/images/oolong-tea.jpg',
        images: ['/images/oolong-tea.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Wuyi Mountain, Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['dahongpao'],
        isFeatured: false
      },
      {
        id: 'superior-dahongpao',
        name: { zh: '一級大紅袍', en: 'Superior Dahongpao Oolong Tea' },
        description: { zh: '一級大紅袍，岩韻明顯，滋味醇厚', en: 'Superior Dahongpao Oolong Tea, obvious rock flavor, mellow taste' },
        price: 588,
        originalPrice: undefined,
        thumbnail: '/images/oolong-tea.jpg',
        images: ['/images/oolong-tea.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Wuyi Mountain, Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['dahongpao'],
        isFeatured: false
      },
      {
        id: 'dahongpao-small',
        name: { zh: '大紅袍', en: 'Dahongpao Oolong Tea' },
        description: { zh: '大紅袍小包裝，方便攜帶', en: 'Dahongpao Oolong Tea, convenient small package' },
        price: 168,
        originalPrice: undefined,
        thumbnail: '/images/oolong-tea.jpg',
        images: ['/images/oolong-tea.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Wuyi Mountain, Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['dahongpao', 'small-package'],
        isFeatured: false
      },
      {
        id: 'premium-shuixian',
        name: { zh: '特級水仙', en: 'Premium Shuixian Oolong Tea' },
        description: { zh: '特級水仙，花香濃郁，滋味醇厚', en: 'Premium Shuixian Oolong Tea, rich floral aroma, mellow flavor' },
        price: 428,
        originalPrice: undefined,
        thumbnail: '/images/oolong-tea.jpg',
        images: ['/images/oolong-tea.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Wuyi Mountain, Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['shuixian'],
        isFeatured: false
      },
      {
        id: 'superior-shuixian',
        name: { zh: '一級水仙', en: 'Superior Shuixian Oolong Tea' },
        description: { zh: '一級水仙，花香持久，回甘明顯', en: 'Superior Shuixian Oolong Tea, lasting floral aroma, obvious aftertaste' },
        price: 298,
        originalPrice: undefined,
        thumbnail: '/images/oolong-tea.jpg',
        images: ['/images/oolong-tea.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Wuyi Mountain, Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['shuixian'],
        isFeatured: false
      },
      {
        id: 'shuixian-small',
        name: { zh: '水仙', en: 'Shuixian Oolong Tea' },
        description: { zh: '水仙小包裝，方便攜帶', en: 'Shuixian Oolong Tea, convenient small package' },
        price: 108,
        originalPrice: undefined,
        thumbnail: '/images/oolong-tea.jpg',
        images: ['/images/oolong-tea.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Wuyi Mountain, Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['shuixian', 'small-package'],
        isFeatured: false
      },
      {
        id: 'premium-fenghuang',
        name: { zh: '特級鳳凰單叢', en: 'Premium Fenghuang Dancong Oolong Tea' },
        description: { zh: '特級鳳凰單叢，蜜香濃郁，滋味醇厚', en: 'Premium Fenghuang Dancong Oolong Tea, rich honey aroma, mellow flavor' },
        price: 568,
        originalPrice: undefined,
        thumbnail: '/images/oolong-tea.jpg',
        images: ['/images/oolong-tea.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Chaozhou, Guangdong, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['fenghuang'],
        isFeatured: false
      },
      {
        id: 'superior-fenghuang',
        name: { zh: '一級鳳凰單叢', en: 'Superior Fenghuang Dancong Oolong Tea' },
        description: { zh: '一級鳳凰單叢，蜜香持久，回甘明顯', en: 'Superior Fenghuang Dancong Oolong Tea, lasting honey aroma, obvious aftertaste' },
        price: 388,
        originalPrice: undefined,
        thumbnail: '/images/oolong-tea.jpg',
        images: ['/images/oolong-tea.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Chaozhou, Guangdong, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['fenghuang'],
        isFeatured: false
      },
      {
        id: 'fenghuang-small',
        name: { zh: '鳳凰單叢', en: 'Fenghuang Dancong Oolong Tea' },
        description: { zh: '鳳凰單叢小包裝，方便攜帶', en: 'Fenghuang Dancong Oolong Tea, convenient small package' },
        price: 128,
        originalPrice: undefined,
        thumbnail: '/images/oolong-tea.jpg',
        images: ['/images/oolong-tea.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Chaozhou, Guangdong, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['fenghuang', 'small-package'],
        isFeatured: false
      },
      {
        id: 'premium-taiwan-oolong',
        name: { zh: '特級台灣烏龍', en: 'Premium Taiwan Oolong Tea' },
        description: { zh: '特級台灣烏龍，清香持久，滋味醇厚', en: 'Premium Taiwan Oolong Tea, lasting fresh aroma, mellow flavor' },
        price: 488,
        originalPrice: undefined,
        thumbnail: '/images/oolong-tea.jpg',
        images: ['/images/oolong-tea.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Taiwan',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['taiwan'],
        isFeatured: false
      },
      {
        id: 'superior-taiwan-oolong',
        name: { zh: '一級台灣烏龍', en: 'Superior Taiwan Oolong Tea' },
        description: { zh: '一級台灣烏龍，品質優良，香氣持久', en: 'Superior Taiwan Oolong Tea, excellent quality, lasting aroma' },
        price: 328,
        originalPrice: undefined,
        thumbnail: '/images/oolong-tea.jpg',
        images: ['/images/oolong-tea.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Taiwan',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['taiwan'],
        isFeatured: false
      },
      {
        id: 'taiwan-oolong-small',
        name: { zh: '台灣烏龍', en: 'Taiwan Oolong Tea' },
        description: { zh: '台灣烏龍小包裝，方便攜帶', en: 'Taiwan Oolong Tea, convenient small package' },
        price: 118,
        originalPrice: undefined,
        thumbnail: '/images/oolong-tea.jpg',
        images: ['/images/oolong-tea.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Taiwan',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['taiwan', 'small-package'],
        isFeatured: false
      },
      {
        id: 'rare-premium-tieguanyin',
        name: { zh: '稀有特級鐵觀音', en: 'Rare Premium Tieguanyin Oolong Tea' },
        description: { zh: '稀有特級鐵觀音，極品中的極品', en: 'Rare Premium Tieguanyin Oolong Tea, the finest of the finest' },
        price: 6800,
        originalPrice: undefined,
        thumbnail: '/images/tieguanyin-premium.jpg',
        images: ['/images/tieguanyin-premium.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: true,
        specifications: {
          weight: '250g',
          origin: 'Anxi, Fujian, China',
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
        id: 'rare-premium-dahongpao',
        name: { zh: '稀有特級大紅袍', en: 'Rare Premium Dahongpao Oolong Tea' },
        description: { zh: '稀有特級大紅袍，極品大紅袍', en: 'Rare Premium Dahongpao Oolong Tea, premium quality' },
        price: 4800,
        originalPrice: undefined,
        thumbnail: '/images/oolong-tea.jpg',
        images: ['/images/oolong-tea.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: true,
        specifications: {
          weight: '150g',
          origin: 'Wuyi Mountain, Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['rare', 'premium', 'dahongpao'],
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
      <h2 className="text-3xl font-bold text-center mb-12">精選烏龍茶產品</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} language={language} />
        ))}
      </div>
    </div>
  );
}

export default function OolongTeaPage() {
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
          alt="Oolong Tea Hero"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent z-10" />
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

      {/* Main Content with Sidebar */}
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar Navigation */}
        <ProductSidebar currentCategory="oolong-tea" />

        {/* Main Content */}
        <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <section id="products" className="py-20 bg-gray-50 rounded-lg">
              <ProductGrid products={products} />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
} 
 