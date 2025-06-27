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
      headline: '普洱茶精選',
      subheadline: '探索醇厚陳香的普洱茶系列',
      button: '立即探索',
      leafColor: '#8B4513', // Saddle Brown for pu-erh tea
      bg: 'from-amber-800 via-amber-900 to-amber-700',
      bgImage: '/images/hero-pu-erh-tea.jpg'
    },
    products: [
      {
        id: 'premium-raw-puerh',
        name: { zh: '特級生普洱', en: 'Premium Raw Pu-erh Tea' },
        description: { zh: '特級生普洱，清香持久，滋味醇厚', en: 'Premium Raw Pu-erh Tea, lasting fresh aroma, mellow flavor' },
        price: 588,
        originalPrice: undefined,
        thumbnail: '/images/dark-tea.jpg',
        images: ['/images/dark-tea.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: 'Long-term aging'
        },
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium'],
        isFeatured: true
      },
      {
        id: 'superior-raw-puerh',
        name: { zh: '一級生普洱', en: 'Superior Raw Pu-erh Tea' },
        description: { zh: '一級生普洱，品質優良，香氣持久', en: 'Superior Raw Pu-erh Tea, excellent quality, lasting aroma' },
        price: 388,
        originalPrice: undefined,
        thumbnail: '/images/dark-tea.jpg',
        images: ['/images/dark-tea.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: 'Long-term aging'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        isFeatured: false
      },
      {
        id: 'raw-puerh-small',
        name: { zh: '生普洱', en: 'Raw Pu-erh Tea' },
        description: { zh: '生普洱小包裝，方便攜帶', en: 'Raw Pu-erh Tea, convenient small package' },
        price: 128,
        originalPrice: undefined,
        thumbnail: '/images/dark-tea.jpg',
        images: ['/images/dark-tea.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: 'Long-term aging'
        },
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['small-package'],
        isFeatured: false
      },
      {
        id: 'premium-ripe-puerh',
        name: { zh: '特級熟普洱', en: 'Premium Ripe Pu-erh Tea' },
        description: { zh: '特級熟普洱，陳香濃郁，滋味醇厚', en: 'Premium Ripe Pu-erh Tea, rich aged aroma, mellow flavor' },
        price: 468,
        originalPrice: undefined,
        thumbnail: '/images/dark-tea.jpg',
        images: ['/images/dark-tea.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: 'Long-term aging'
        },
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['ripe'],
        isFeatured: false
      },
      {
        id: 'superior-ripe-puerh',
        name: { zh: '一級熟普洱', en: 'Superior Ripe Pu-erh Tea' },
        description: { zh: '一級熟普洱，陳香持久，回甘明顯', en: 'Superior Ripe Pu-erh Tea, lasting aged aroma, obvious aftertaste' },
        price: 318,
        originalPrice: undefined,
        thumbnail: '/images/dark-tea.jpg',
        images: ['/images/dark-tea.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: 'Long-term aging'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['ripe'],
        isFeatured: false
      },
      {
        id: 'ripe-puerh-small',
        name: { zh: '熟普洱', en: 'Ripe Pu-erh Tea' },
        description: { zh: '熟普洱小包裝，方便攜帶', en: 'Ripe Pu-erh Tea, convenient small package' },
        price: 108,
        originalPrice: undefined,
        thumbnail: '/images/dark-tea.jpg',
        images: ['/images/dark-tea.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: 'Long-term aging'
        },
        stock: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['ripe', 'small-package'],
        isFeatured: false
      },
      {
        id: 'premium-aged-puerh',
        name: { zh: '特級陳年普洱', en: 'Premium Aged Pu-erh Tea' },
        description: { zh: '特級陳年普洱，陳香濃郁，滋味醇厚', en: 'Premium Aged Pu-erh Tea, rich aged aroma, mellow flavor' },
        price: 888,
        originalPrice: undefined,
        thumbnail: '/images/dark-tea.jpg',
        images: ['/images/dark-tea.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: 'Long-term aging'
        },
        stock: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['aged'],
        isFeatured: false
      },
      {
        id: 'superior-aged-puerh',
        name: { zh: '一級陳年普洱', en: 'Superior Aged Pu-erh Tea' },
        description: { zh: '一級陳年普洱，陳香持久，回甘明顯', en: 'Superior Aged Pu-erh Tea, lasting aged aroma, obvious aftertaste' },
        price: 588,
        originalPrice: undefined,
        thumbnail: '/images/dark-tea.jpg',
        images: ['/images/dark-tea.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: 'Long-term aging'
        },
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['aged'],
        isFeatured: false
      },
      {
        id: 'aged-puerh-small',
        name: { zh: '陳年普洱', en: 'Aged Pu-erh Tea' },
        description: { zh: '陳年普洱小包裝，方便攜帶', en: 'Aged Pu-erh Tea, convenient small package' },
        price: 168,
        originalPrice: undefined,
        thumbnail: '/images/dark-tea.jpg',
        images: ['/images/dark-tea.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: 'Long-term aging'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['aged', 'small-package'],
        isFeatured: false
      },
      {
        id: 'premium-cake-puerh',
        name: { zh: '特級普洱餅茶', en: 'Premium Pu-erh Cake Tea' },
        description: { zh: '特級普洱餅茶，餅形完整，香氣濃郁', en: 'Premium Pu-erh Cake Tea, complete cake shape, rich aroma' },
        price: 688,
        originalPrice: undefined,
        thumbnail: '/images/dark-tea.jpg',
        images: ['/images/dark-tea.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '357g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: 'Long-term aging'
        },
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['cake'],
        isFeatured: false
      },
      {
        id: 'superior-cake-puerh',
        name: { zh: '一級普洱餅茶', en: 'Superior Pu-erh Cake Tea' },
        description: { zh: '一級普洱餅茶，餅形完整，香氣持久', en: 'Superior Pu-erh Cake Tea, complete cake shape, lasting aroma' },
        price: 468,
        originalPrice: undefined,
        thumbnail: '/images/dark-tea.jpg',
        images: ['/images/dark-tea.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '357g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: 'Long-term aging'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['cake'],
        isFeatured: false
      },
      {
        id: 'premium-tuo-puerh',
        name: { zh: '特級普洱沱茶', en: 'Premium Pu-erh Tuo Tea' },
        description: { zh: '特級普洱沱茶，沱形完整，香氣濃郁', en: 'Premium Pu-erh Tuo Tea, complete tuo shape, rich aroma' },
        price: 428,
        originalPrice: undefined,
        thumbnail: '/images/dark-tea.jpg',
        images: ['/images/dark-tea.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '100g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: 'Long-term aging'
        },
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['tuo'],
        isFeatured: false
      },
      {
        id: 'superior-tuo-puerh',
        name: { zh: '一級普洱沱茶', en: 'Superior Pu-erh Tuo Tea' },
        description: { zh: '一級普洱沱茶，沱形完整，香氣持久', en: 'Superior Pu-erh Tuo Tea, complete tuo shape, lasting aroma' },
        price: 298,
        originalPrice: undefined,
        thumbnail: '/images/dark-tea.jpg',
        images: ['/images/dark-tea.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '100g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: 'Long-term aging'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['tuo'],
        isFeatured: false
      },
      {
        id: 'rare-premium-aged-puerh',
        name: { zh: '稀有特級陳年普洱', en: 'Rare Premium Aged Pu-erh Tea' },
        description: { zh: '稀有特級陳年普洱，極品中的極品', en: 'Rare Premium Aged Pu-erh Tea, the finest of the finest' },
        price: 6800,
        originalPrice: undefined,
        thumbnail: '/images/dark-tea.jpg',
        images: ['/images/dark-tea.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: true,
        specifications: {
          weight: '250g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: 'Long-term aging'
        },
        stock: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['rare', 'premium', 'aged'],
        isFeatured: true
      },
      {
        id: 'rare-premium-cake-puerh',
        name: { zh: '稀有特級普洱餅茶', en: 'Rare Premium Pu-erh Cake Tea' },
        description: { zh: '稀有特級普洱餅茶，極品普洱餅茶', en: 'Rare Premium Pu-erh Cake Tea, premium quality' },
        price: 4800,
        originalPrice: undefined,
        thumbnail: '/images/dark-tea.jpg',
        images: ['/images/dark-tea.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: true,
        specifications: {
          weight: '357g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: 'Long-term aging'
        },
        stock: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['rare', 'premium', 'cake'],
        isFeatured: true
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
        id: 'premium-raw-puerh',
        name: { zh: '特級生普洱', en: 'Premium Raw Pu-erh Tea' },
        description: { zh: '特級生普洱，清香持久，滋味醇厚', en: 'Premium Raw Pu-erh Tea, lasting fresh aroma, mellow flavor' },
        price: 588,
        originalPrice: undefined,
        thumbnail: '/images/dark-tea.jpg',
        images: ['/images/dark-tea.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: 'Long-term aging'
        },
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium'],
        isFeatured: true
      },
      {
        id: 'superior-raw-puerh',
        name: { zh: '一級生普洱', en: 'Superior Raw Pu-erh Tea' },
        description: { zh: '一級生普洱，品質優良，香氣持久', en: 'Superior Raw Pu-erh Tea, excellent quality, lasting aroma' },
        price: 388,
        originalPrice: undefined,
        thumbnail: '/images/dark-tea.jpg',
        images: ['/images/dark-tea.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: 'Long-term aging'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        isFeatured: false
      },
      {
        id: 'raw-puerh-small',
        name: { zh: '生普洱', en: 'Raw Pu-erh Tea' },
        description: { zh: '生普洱小包裝，方便攜帶', en: 'Raw Pu-erh Tea, convenient small package' },
        price: 128,
        originalPrice: undefined,
        thumbnail: '/images/dark-tea.jpg',
        images: ['/images/dark-tea.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: 'Long-term aging'
        },
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['small-package'],
        isFeatured: false
      },
      {
        id: 'premium-ripe-puerh',
        name: { zh: '特級熟普洱', en: 'Premium Ripe Pu-erh Tea' },
        description: { zh: '特級熟普洱，陳香濃郁，滋味醇厚', en: 'Premium Ripe Pu-erh Tea, rich aged aroma, mellow flavor' },
        price: 468,
        originalPrice: undefined,
        thumbnail: '/images/dark-tea.jpg',
        images: ['/images/dark-tea.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: 'Long-term aging'
        },
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['ripe'],
        isFeatured: false
      },
      {
        id: 'superior-ripe-puerh',
        name: { zh: '一級熟普洱', en: 'Superior Ripe Pu-erh Tea' },
        description: { zh: '一級熟普洱，陳香持久，回甘明顯', en: 'Superior Ripe Pu-erh Tea, lasting aged aroma, obvious aftertaste' },
        price: 318,
        originalPrice: undefined,
        thumbnail: '/images/dark-tea.jpg',
        images: ['/images/dark-tea.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: 'Long-term aging'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['ripe'],
        isFeatured: false
      },
      {
        id: 'ripe-puerh-small',
        name: { zh: '熟普洱', en: 'Ripe Pu-erh Tea' },
        description: { zh: '熟普洱小包裝，方便攜帶', en: 'Ripe Pu-erh Tea, convenient small package' },
        price: 108,
        originalPrice: undefined,
        thumbnail: '/images/dark-tea.jpg',
        images: ['/images/dark-tea.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: 'Long-term aging'
        },
        stock: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['ripe', 'small-package'],
        isFeatured: false
      },
      {
        id: 'premium-aged-puerh',
        name: { zh: '特級陳年普洱', en: 'Premium Aged Pu-erh Tea' },
        description: { zh: '特級陳年普洱，陳香濃郁，滋味醇厚', en: 'Premium Aged Pu-erh Tea, rich aged aroma, mellow flavor' },
        price: 888,
        originalPrice: undefined,
        thumbnail: '/images/dark-tea.jpg',
        images: ['/images/dark-tea.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: 'Long-term aging'
        },
        stock: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['aged'],
        isFeatured: false
      },
      {
        id: 'superior-aged-puerh',
        name: { zh: '一級陳年普洱', en: 'Superior Aged Pu-erh Tea' },
        description: { zh: '一級陳年普洱，陳香持久，回甘明顯', en: 'Superior Aged Pu-erh Tea, lasting aged aroma, obvious aftertaste' },
        price: 588,
        originalPrice: undefined,
        thumbnail: '/images/dark-tea.jpg',
        images: ['/images/dark-tea.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: 'Long-term aging'
        },
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['aged'],
        isFeatured: false
      },
      {
        id: 'aged-puerh-small',
        name: { zh: '陳年普洱', en: 'Aged Pu-erh Tea' },
        description: { zh: '陳年普洱小包裝，方便攜帶', en: 'Aged Pu-erh Tea, convenient small package' },
        price: 168,
        originalPrice: undefined,
        thumbnail: '/images/dark-tea.jpg',
        images: ['/images/dark-tea.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: 'Long-term aging'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['aged', 'small-package'],
        isFeatured: false
      },
      {
        id: 'premium-cake-puerh',
        name: { zh: '特級普洱餅茶', en: 'Premium Pu-erh Cake Tea' },
        description: { zh: '特級普洱餅茶，餅形完整，香氣濃郁', en: 'Premium Pu-erh Cake Tea, complete cake shape, rich aroma' },
        price: 688,
        originalPrice: undefined,
        thumbnail: '/images/dark-tea.jpg',
        images: ['/images/dark-tea.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '357g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: 'Long-term aging'
        },
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['cake'],
        isFeatured: false
      },
      {
        id: 'superior-cake-puerh',
        name: { zh: '一級普洱餅茶', en: 'Superior Pu-erh Cake Tea' },
        description: { zh: '一級普洱餅茶，餅形完整，香氣持久', en: 'Superior Pu-erh Cake Tea, complete cake shape, lasting aroma' },
        price: 468,
        originalPrice: undefined,
        thumbnail: '/images/dark-tea.jpg',
        images: ['/images/dark-tea.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '357g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: 'Long-term aging'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['cake'],
        isFeatured: false
      },
      {
        id: 'premium-tuo-puerh',
        name: { zh: '特級普洱沱茶', en: 'Premium Pu-erh Tuo Tea' },
        description: { zh: '特級普洱沱茶，沱形完整，香氣濃郁', en: 'Premium Pu-erh Tuo Tea, complete tuo shape, rich aroma' },
        price: 428,
        originalPrice: undefined,
        thumbnail: '/images/dark-tea.jpg',
        images: ['/images/dark-tea.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '100g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: 'Long-term aging'
        },
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['tuo'],
        isFeatured: false
      },
      {
        id: 'superior-tuo-puerh',
        name: { zh: '一級普洱沱茶', en: 'Superior Pu-erh Tuo Tea' },
        description: { zh: '一級普洱沱茶，沱形完整，香氣持久', en: 'Superior Pu-erh Tuo Tea, complete tuo shape, lasting aroma' },
        price: 298,
        originalPrice: undefined,
        thumbnail: '/images/dark-tea.jpg',
        images: ['/images/dark-tea.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '100g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: 'Long-term aging'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['tuo'],
        isFeatured: false
      },
      {
        id: 'rare-premium-aged-puerh',
        name: { zh: '稀有特級陳年普洱', en: 'Rare Premium Aged Pu-erh Tea' },
        description: { zh: '稀有特級陳年普洱，極品中的極品', en: 'Rare Premium Aged Pu-erh Tea, the finest of the finest' },
        price: 6800,
        originalPrice: undefined,
        thumbnail: '/images/dark-tea.jpg',
        images: ['/images/dark-tea.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: true,
        specifications: {
          weight: '250g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: 'Long-term aging'
        },
        stock: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['rare', 'premium', 'aged'],
        isFeatured: true
      },
      {
        id: 'rare-premium-cake-puerh',
        name: { zh: '稀有特級普洱餅茶', en: 'Rare Premium Pu-erh Cake Tea' },
        description: { zh: '稀有特級普洱餅茶，極品普洱餅茶', en: 'Rare Premium Pu-erh Cake Tea, premium quality' },
        price: 4800,
        originalPrice: undefined,
        thumbnail: '/images/dark-tea.jpg',
        images: ['/images/dark-tea.jpg'],
        category: 'pu-erh',
        status: 'active',
        isNew: true,
        specifications: {
          weight: '357g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: 'Long-term aging'
        },
        stock: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['rare', 'premium', 'cake'],
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
      <h2 className="text-3xl font-bold text-center mb-12">精選產品</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} language={language} />
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
      <HeroSection section={heroSection} />
      
      {/* Products Section */}
      <section id="products">
        <ProductGrid products={products} />
      </section>
    </div>
  );
} 

