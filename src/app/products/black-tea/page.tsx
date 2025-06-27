'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Language } from '@/app/types';
import type { Product } from '@/lib/types/product';
import ProductCard from '@/components/ProductCard';
import { useCart } from '@/app/context/CartContext';

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
        id: 'premium-keemun',
        name: { zh: '特級祁門紅茶', en: 'Premium Keemun Black Tea' },
        description: { zh: '特級祁門紅茶，香氣高雅，滋味醇厚', en: 'Premium Keemun Black Tea, elegant aroma, mellow flavor' },
        price: 388,
        originalPrice: undefined,
        thumbnail: '/images/black-tea.jpg',
        images: ['/images/black-tea.jpg'],
        category: 'black-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Qimen, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium'],
        isFeatured: true
      },
      {
        id: 'superior-keemun',
        name: { zh: '一級祁門紅茶', en: 'Superior Keemun Black Tea' },
        description: { zh: '一級祁門紅茶，品質優良，香氣持久', en: 'Superior Keemun Black Tea, excellent quality, lasting aroma' },
        price: 268,
        originalPrice: undefined,
        thumbnail: '/images/black-tea.jpg',
        images: ['/images/black-tea.jpg'],
        category: 'black-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Qimen, China',
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
        id: 'keemun-small',
        name: { zh: '祁門紅茶', en: 'Keemun Black Tea' },
        description: { zh: '祁門紅茶小包裝，方便攜帶', en: 'Keemun Black Tea, convenient small package' },
        price: 98,
        originalPrice: undefined,
        thumbnail: '/images/black-tea.jpg',
        images: ['/images/black-tea.jpg'],
        category: 'black-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Qimen, China',
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
        id: 'premium-dianhong',
        name: { zh: '特級滇紅', en: 'Premium Dianhong Black Tea' },
        description: { zh: '特級滇紅，金毫顯露，香氣濃郁', en: 'Premium Dianhong Black Tea, golden tips, rich aroma' },
        price: 318,
        originalPrice: undefined,
        thumbnail: '/images/black-tea.jpg',
        images: ['/images/black-tea.jpg'],
        category: 'black-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['dianhong'],
        isFeatured: false
      },
      {
        id: 'superior-dianhong',
        name: { zh: '一級滇紅', en: 'Superior Dianhong Black Tea' },
        description: { zh: '一級滇紅，滋味醇厚，回甘明顯', en: 'Superior Dianhong Black Tea, mellow flavor, obvious aftertaste' },
        price: 218,
        originalPrice: undefined,
        thumbnail: '/images/black-tea.jpg',
        images: ['/images/black-tea.jpg'],
        category: 'black-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['dianhong'],
        isFeatured: false
      },
      {
        id: 'dianhong-small',
        name: { zh: '滇紅', en: 'Dianhong Black Tea' },
        description: { zh: '滇紅小包裝，方便攜帶', en: 'Dianhong Black Tea, convenient small package' },
        price: 88,
        originalPrice: undefined,
        thumbnail: '/images/black-tea.jpg',
        images: ['/images/black-tea.jpg'],
        category: 'black-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 55,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['dianhong', 'small-package'],
        isFeatured: false
      },
      {
        id: 'premium-lapsang',
        name: { zh: '特級正山小種', en: 'Premium Lapsang Souchong' },
        description: { zh: '特級正山小種，煙熏香氣，獨特風味', en: 'Premium Lapsang Souchong, smoky aroma, unique flavor' },
        price: 428,
        originalPrice: undefined,
        thumbnail: '/images/black-tea.jpg',
        images: ['/images/black-tea.jpg'],
        category: 'black-tea',
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
        tags: ['lapsang'],
        isFeatured: false
      },
      {
        id: 'superior-lapsang',
        name: { zh: '一級正山小種', en: 'Superior Lapsang Souchong' },
        description: { zh: '一級正山小種，煙熏香氣，滋味醇厚', en: 'Superior Lapsang Souchong, smoky aroma, mellow flavor' },
        price: 298,
        originalPrice: undefined,
        thumbnail: '/images/black-tea.jpg',
        images: ['/images/black-tea.jpg'],
        category: 'black-tea',
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
        tags: ['lapsang'],
        isFeatured: false
      },
      {
        id: 'lapsang-small',
        name: { zh: '正山小種', en: 'Lapsang Souchong' },
        description: { zh: '正山小種小包裝，方便攜帶', en: 'Lapsang Souchong, convenient small package' },
        price: 108,
        originalPrice: undefined,
        thumbnail: '/images/black-tea.jpg',
        images: ['/images/black-tea.jpg'],
        category: 'black-tea',
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
        tags: ['lapsang', 'small-package'],
        isFeatured: false
      },
      {
        id: 'premium-yunnan',
        name: { zh: '特級雲南紅茶', en: 'Premium Yunnan Black Tea' },
        description: { zh: '特級雲南紅茶，金毫顯露，香氣高雅', en: 'Premium Yunnan Black Tea, golden tips, elegant aroma' },
        price: 368,
        originalPrice: undefined,
        thumbnail: '/images/black-tea.jpg',
        images: ['/images/black-tea.jpg'],
        category: 'black-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['yunnan'],
        isFeatured: false
      },
      {
        id: 'superior-yunnan',
        name: { zh: '一級雲南紅茶', en: 'Superior Yunnan Black Tea' },
        description: { zh: '一級雲南紅茶，滋味醇厚，回甘明顯', en: 'Superior Yunnan Black Tea, mellow flavor, obvious aftertaste' },
        price: 248,
        originalPrice: undefined,
        thumbnail: '/images/black-tea.jpg',
        images: ['/images/black-tea.jpg'],
        category: 'black-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['yunnan'],
        isFeatured: false
      },
      {
        id: 'yunnan-small',
        name: { zh: '雲南紅茶', en: 'Yunnan Black Tea' },
        description: { zh: '雲南紅茶小包裝，方便攜帶', en: 'Yunnan Black Tea, convenient small package' },
        price: 98,
        originalPrice: undefined,
        thumbnail: '/images/black-tea.jpg',
        images: ['/images/black-tea.jpg'],
        category: 'black-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['yunnan', 'small-package'],
        isFeatured: false
      },
      {
        id: 'premium-nilgiri',
        name: { zh: '特級尼爾吉里紅茶', en: 'Premium Nilgiri Black Tea' },
        description: { zh: '特級尼爾吉里紅茶，香氣高雅，滋味醇厚', en: 'Premium Nilgiri Black Tea, elegant aroma, mellow flavor' },
        price: 298,
        originalPrice: undefined,
        thumbnail: '/images/black-tea.jpg',
        images: ['/images/black-tea.jpg'],
        category: 'black-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'India',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['nilgiri'],
        isFeatured: false
      },
      {
        id: 'superior-nilgiri',
        name: { zh: '一級尼爾吉里紅茶', en: 'Superior Nilgiri Black Tea' },
        description: { zh: '一級尼爾吉里紅茶，品質優良，香氣持久', en: 'Superior Nilgiri Black Tea, excellent quality, lasting aroma' },
        price: 198,
        originalPrice: undefined,
        thumbnail: '/images/black-tea.jpg',
        images: ['/images/black-tea.jpg'],
        category: 'black-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'India',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['nilgiri'],
        isFeatured: false
      },
      {
        id: 'nilgiri-small',
        name: { zh: '尼爾吉里紅茶', en: 'Nilgiri Black Tea' },
        description: { zh: '尼爾吉里紅茶小包裝，方便攜帶', en: 'Nilgiri Black Tea, convenient small package' },
        price: 88,
        originalPrice: undefined,
        thumbnail: '/images/black-tea.jpg',
        images: ['/images/black-tea.jpg'],
        category: 'black-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'India',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 55,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['nilgiri', 'small-package'],
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
        id: 'premium-keemun',
        name: { zh: '特級祁門紅茶', en: 'Premium Keemun Black Tea' },
        description: { zh: '特級祁門紅茶，香氣高雅，滋味醇厚', en: 'Premium Keemun Black Tea, elegant aroma, mellow flavor' },
        price: 388,
        originalPrice: undefined,
        thumbnail: '/images/black-tea.jpg',
        images: ['/images/black-tea.jpg'],
        category: 'black-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Qimen, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium'],
        isFeatured: true
      },
      {
        id: 'superior-keemun',
        name: { zh: '一級祁門紅茶', en: 'Superior Keemun Black Tea' },
        description: { zh: '一級祁門紅茶，品質優良，香氣持久', en: 'Superior Keemun Black Tea, excellent quality, lasting aroma' },
        price: 268,
        originalPrice: undefined,
        thumbnail: '/images/black-tea.jpg',
        images: ['/images/black-tea.jpg'],
        category: 'black-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Qimen, China',
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
        id: 'keemun-small',
        name: { zh: '祁門紅茶', en: 'Keemun Black Tea' },
        description: { zh: '祁門紅茶小包裝，方便攜帶', en: 'Keemun Black Tea, convenient small package' },
        price: 98,
        originalPrice: undefined,
        thumbnail: '/images/black-tea.jpg',
        images: ['/images/black-tea.jpg'],
        category: 'black-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Qimen, China',
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
        id: 'premium-dianhong',
        name: { zh: '特級滇紅', en: 'Premium Dianhong Black Tea' },
        description: { zh: '特級滇紅，金毫顯露，香氣濃郁', en: 'Premium Dianhong Black Tea, golden tips, rich aroma' },
        price: 318,
        originalPrice: undefined,
        thumbnail: '/images/black-tea.jpg',
        images: ['/images/black-tea.jpg'],
        category: 'black-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['dianhong'],
        isFeatured: false
      },
      {
        id: 'superior-dianhong',
        name: { zh: '一級滇紅', en: 'Superior Dianhong Black Tea' },
        description: { zh: '一級滇紅，滋味醇厚，回甘明顯', en: 'Superior Dianhong Black Tea, mellow flavor, obvious aftertaste' },
        price: 218,
        originalPrice: undefined,
        thumbnail: '/images/black-tea.jpg',
        images: ['/images/black-tea.jpg'],
        category: 'black-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['dianhong'],
        isFeatured: false
      },
      {
        id: 'dianhong-small',
        name: { zh: '滇紅', en: 'Dianhong Black Tea' },
        description: { zh: '滇紅小包裝，方便攜帶', en: 'Dianhong Black Tea, convenient small package' },
        price: 88,
        originalPrice: undefined,
        thumbnail: '/images/black-tea.jpg',
        images: ['/images/black-tea.jpg'],
        category: 'black-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 55,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['dianhong', 'small-package'],
        isFeatured: false
      },
      {
        id: 'premium-lapsang',
        name: { zh: '特級正山小種', en: 'Premium Lapsang Souchong' },
        description: { zh: '特級正山小種，煙熏香氣，獨特風味', en: 'Premium Lapsang Souchong, smoky aroma, unique flavor' },
        price: 428,
        originalPrice: undefined,
        thumbnail: '/images/black-tea.jpg',
        images: ['/images/black-tea.jpg'],
        category: 'black-tea',
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
        tags: ['lapsang'],
        isFeatured: false
      },
      {
        id: 'superior-lapsang',
        name: { zh: '一級正山小種', en: 'Superior Lapsang Souchong' },
        description: { zh: '一級正山小種，煙熏香氣，滋味醇厚', en: 'Superior Lapsang Souchong, smoky aroma, mellow flavor' },
        price: 298,
        originalPrice: undefined,
        thumbnail: '/images/black-tea.jpg',
        images: ['/images/black-tea.jpg'],
        category: 'black-tea',
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
        tags: ['lapsang'],
        isFeatured: false
      },
      {
        id: 'lapsang-small',
        name: { zh: '正山小種', en: 'Lapsang Souchong' },
        description: { zh: '正山小種小包裝，方便攜帶', en: 'Lapsang Souchong, convenient small package' },
        price: 108,
        originalPrice: undefined,
        thumbnail: '/images/black-tea.jpg',
        images: ['/images/black-tea.jpg'],
        category: 'black-tea',
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
        tags: ['lapsang', 'small-package'],
        isFeatured: false
      },
      {
        id: 'premium-yunnan',
        name: { zh: '特級雲南紅茶', en: 'Premium Yunnan Black Tea' },
        description: { zh: '特級雲南紅茶，金毫顯露，香氣高雅', en: 'Premium Yunnan Black Tea, golden tips, elegant aroma' },
        price: 368,
        originalPrice: undefined,
        thumbnail: '/images/black-tea.jpg',
        images: ['/images/black-tea.jpg'],
        category: 'black-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['yunnan'],
        isFeatured: false
      },
      {
        id: 'superior-yunnan',
        name: { zh: '一級雲南紅茶', en: 'Superior Yunnan Black Tea' },
        description: { zh: '一級雲南紅茶，滋味醇厚，回甘明顯', en: 'Superior Yunnan Black Tea, mellow flavor, obvious aftertaste' },
        price: 248,
        originalPrice: undefined,
        thumbnail: '/images/black-tea.jpg',
        images: ['/images/black-tea.jpg'],
        category: 'black-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['yunnan'],
        isFeatured: false
      },
      {
        id: 'yunnan-small',
        name: { zh: '雲南紅茶', en: 'Yunnan Black Tea' },
        description: { zh: '雲南紅茶小包裝，方便攜帶', en: 'Yunnan Black Tea, convenient small package' },
        price: 98,
        originalPrice: undefined,
        thumbnail: '/images/black-tea.jpg',
        images: ['/images/black-tea.jpg'],
        category: 'black-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['yunnan', 'small-package'],
        isFeatured: false
      },
      {
        id: 'premium-nilgiri',
        name: { zh: '特級尼爾吉里紅茶', en: 'Premium Nilgiri Black Tea' },
        description: { zh: '特級尼爾吉里紅茶，香氣高雅，滋味醇厚', en: 'Premium Nilgiri Black Tea, elegant aroma, mellow flavor' },
        price: 298,
        originalPrice: undefined,
        thumbnail: '/images/black-tea.jpg',
        images: ['/images/black-tea.jpg'],
        category: 'black-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'India',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['nilgiri'],
        isFeatured: false
      },
      {
        id: 'superior-nilgiri',
        name: { zh: '一級尼爾吉里紅茶', en: 'Superior Nilgiri Black Tea' },
        description: { zh: '一級尼爾吉里紅茶，品質優良，香氣持久', en: 'Superior Nilgiri Black Tea, excellent quality, lasting aroma' },
        price: 198,
        originalPrice: undefined,
        thumbnail: '/images/black-tea.jpg',
        images: ['/images/black-tea.jpg'],
        category: 'black-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'India',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['nilgiri'],
        isFeatured: false
      },
      {
        id: 'nilgiri-small',
        name: { zh: '尼爾吉里紅茶', en: 'Nilgiri Black Tea' },
        description: { zh: '尼爾吉里紅茶小包裝，方便攜帶', en: 'Nilgiri Black Tea, convenient small package' },
        price: 88,
        originalPrice: undefined,
        thumbnail: '/images/black-tea.jpg',
        images: ['/images/black-tea.jpg'],
        category: 'black-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'India',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 55,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['nilgiri', 'small-package'],
        isFeatured: false
      }
    ]
  }
};

function ProductGrid({ products }: { products: Product[] }) {
  const [language] = useState<Language>('zh');
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">精選紅茶產品</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} language={language} />
        ))}
      </div>
    </div>
  );
}

export default function BlackTeaPage() {
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
          alt="Black Tea Hero"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent z-10" />
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
 
 