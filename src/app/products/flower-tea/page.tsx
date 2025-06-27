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
  bgVideo?: string;
};

const content: Record<Language, { heroSection: HeroSectionType; products: Product[] }> = {
  zh: {
    heroSection: {
      headline: '花茶精選',
      subheadline: '探索芬芳宜人的花草茶系列',
      button: '立即探索',
      leafColor: '#DA70D6', // Orchid for flower tea
      bg: 'from-pink-800 via-pink-900 to-pink-700',
      bgImage: '/images/hero-flower-tea.jpg'
    },
    products: [
      {
        id: 'premium-jasmine-pearl',
        name: { zh: '特級茉莉花茶', en: 'Premium Jasmine Pearl Tea' },
        description: { zh: '特級茉莉花茶，花香濃郁，滋味醇厚', en: 'Premium Jasmine Pearl Tea, rich floral aroma, mellow flavor' },
        price: 318,
        originalPrice: undefined,
        thumbnail: '/images/jasmine-pearl.jpg',
        images: ['/images/jasmine-pearl.jpg'],
        category: 'flower-tea',
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
        tags: ['premium'],
        isFeatured: true
      },
      {
        id: 'superior-jasmine-pearl',
        name: { zh: '一級茉莉花茶', en: 'Superior Jasmine Pearl Tea' },
        description: { zh: '一級茉莉花茶，品質優良，香氣持久', en: 'Superior Jasmine Pearl Tea, excellent quality, lasting aroma' },
        price: 218,
        originalPrice: undefined,
        thumbnail: '/images/jasmine-pearl.jpg',
        images: ['/images/jasmine-pearl.jpg'],
        category: 'flower-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'China',
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
        id: 'jasmine-pearl-small',
        name: { zh: '茉莉花茶', en: 'Jasmine Pearl Tea' },
        description: { zh: '茉莉花茶小包裝，方便攜帶', en: 'Jasmine Pearl Tea, convenient small package' },
        price: 98,
        originalPrice: undefined,
        thumbnail: '/images/jasmine-pearl.jpg',
        images: ['/images/jasmine-pearl.jpg'],
        category: 'flower-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '70g (10x7g)',
          origin: 'China',
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
        id: 'premium-osmanthus',
        name: { zh: '特級桂花茶', en: 'Premium Osmanthus Tea' },
        description: { zh: '特級桂花茶，桂花香濃郁，滋味醇厚', en: 'Premium Osmanthus Tea, rich osmanthus aroma, mellow flavor' },
        price: 268,
        originalPrice: undefined,
        thumbnail: '/images/flower-tea.jpg',
        images: ['/images/flower-tea.jpg'],
        category: 'flower-tea',
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
        tags: ['osmanthus'],
        isFeatured: false
      },
      {
        id: 'superior-osmanthus',
        name: { zh: '一級桂花茶', en: 'Superior Osmanthus Tea' },
        description: { zh: '一級桂花茶，桂花香持久，回甘明顯', en: 'Superior Osmanthus Tea, lasting osmanthus aroma, obvious aftertaste' },
        price: 188,
        originalPrice: undefined,
        thumbnail: '/images/flower-tea.jpg',
        images: ['/images/flower-tea.jpg'],
        category: 'flower-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['osmanthus'],
        isFeatured: false
      },
      {
        id: 'osmanthus-small',
        name: { zh: '桂花茶', en: 'Osmanthus Tea' },
        description: { zh: '桂花茶小包裝，方便攜帶', en: 'Osmanthus Tea, convenient small package' },
        price: 88,
        originalPrice: undefined,
        thumbnail: '/images/flower-tea.jpg',
        images: ['/images/flower-tea.jpg'],
        category: 'flower-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 55,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['osmanthus', 'small-package'],
        isFeatured: false
      },
      {
        id: 'premium-rose-tea',
        name: { zh: '特級玫瑰花茶', en: 'Premium Rose Tea' },
        description: { zh: '特級玫瑰花茶，玫瑰香濃郁，滋味醇厚', en: 'Premium Rose Tea, rich rose aroma, mellow flavor' },
        price: 288,
        originalPrice: undefined,
        thumbnail: '/images/flower-tea.jpg',
        images: ['/images/flower-tea.jpg'],
        category: 'flower-tea',
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
        tags: ['rose'],
        isFeatured: false
      },
      {
        id: 'superior-rose-tea',
        name: { zh: '一級玫瑰花茶', en: 'Superior Rose Tea' },
        description: { zh: '一級玫瑰花茶，玫瑰香持久，回甘明顯', en: 'Superior Rose Tea, lasting rose aroma, obvious aftertaste' },
        price: 198,
        originalPrice: undefined,
        thumbnail: '/images/flower-tea.jpg',
        images: ['/images/flower-tea.jpg'],
        category: 'flower-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['rose'],
        isFeatured: false
      },
      {
        id: 'rose-tea-small',
        name: { zh: '玫瑰花茶', en: 'Rose Tea' },
        description: { zh: '玫瑰花茶小包裝，方便攜帶', en: 'Rose Tea, convenient small package' },
        price: 98,
        originalPrice: undefined,
        thumbnail: '/images/flower-tea.jpg',
        images: ['/images/flower-tea.jpg'],
        category: 'flower-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['rose', 'small-package'],
        isFeatured: false
      },
      {
        id: 'premium-chrysanthemum',
        name: { zh: '特級菊花茶', en: 'Premium Chrysanthemum Tea' },
        description: { zh: '特級菊花茶，菊花香濃郁，滋味醇厚', en: 'Premium Chrysanthemum Tea, rich chrysanthemum aroma, mellow flavor' },
        price: 248,
        originalPrice: undefined,
        thumbnail: '/images/flower-tea.jpg',
        images: ['/images/flower-tea.jpg'],
        category: 'flower-tea',
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
        tags: ['chrysanthemum'],
        isFeatured: false
      },
      {
        id: 'superior-chrysanthemum',
        name: { zh: '一級菊花茶', en: 'Superior Chrysanthemum Tea' },
        description: { zh: '一級菊花茶，菊花香持久，回甘明顯', en: 'Superior Chrysanthemum Tea, lasting chrysanthemum aroma, obvious aftertaste' },
        price: 168,
        originalPrice: undefined,
        thumbnail: '/images/flower-tea.jpg',
        images: ['/images/flower-tea.jpg'],
        category: 'flower-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['chrysanthemum'],
        isFeatured: false
      },
      {
        id: 'chrysanthemum-small',
        name: { zh: '菊花茶', en: 'Chrysanthemum Tea' },
        description: { zh: '菊花茶小包裝，方便攜帶', en: 'Chrysanthemum Tea, convenient small package' },
        price: 88,
        originalPrice: undefined,
        thumbnail: '/images/flower-tea.jpg',
        images: ['/images/flower-tea.jpg'],
        category: 'flower-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['chrysanthemum', 'small-package'],
        isFeatured: false
      },
      {
        id: 'premium-lavender',
        name: { zh: '特級薰衣草茶', en: 'Premium Lavender Tea' },
        description: { zh: '特級薰衣草茶，薰衣草香濃郁，滋味醇厚', en: 'Premium Lavender Tea, rich lavender aroma, mellow flavor' },
        price: 228,
        originalPrice: undefined,
        thumbnail: '/images/flower-tea.jpg',
        images: ['/images/flower-tea.jpg'],
        category: 'flower-tea',
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
        tags: ['lavender'],
        isFeatured: false
      },
      {
        id: 'superior-lavender',
        name: { zh: '一級薰衣草茶', en: 'Superior Lavender Tea' },
        description: { zh: '一級薰衣草茶，薰衣草香持久，回甘明顯', en: 'Superior Lavender Tea, lasting lavender aroma, obvious aftertaste' },
        price: 158,
        originalPrice: undefined,
        thumbnail: '/images/flower-tea.jpg',
        images: ['/images/flower-tea.jpg'],
        category: 'flower-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['lavender'],
        isFeatured: false
      },
      {
        id: 'lavender-small',
        name: { zh: '薰衣草茶', en: 'Lavender Tea' },
        description: { zh: '薰衣草茶小包裝，方便攜帶', en: 'Lavender Tea, convenient small package' },
        price: 78,
        originalPrice: undefined,
        thumbnail: '/images/flower-tea.jpg',
        images: ['/images/flower-tea.jpg'],
        category: 'flower-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['lavender', 'small-package'],
        isFeatured: false
      }
    ]
  },
  en: {
    heroSection: {
      headline: 'Flower Tea Selection',
      subheadline: 'Explore our aromatic and delightful herbal tea collection.',
      button: 'Explore Now',
      leafColor: '#DA70D6',
      bg: 'from-pink-800 via-pink-900 to-pink-700',
      bgImage: '/images/hero-flower-tea.jpg'
    },
    products: [
      {
        id: 'premium-jasmine-pearl',
        name: { zh: '特級茉莉花茶', en: 'Premium Jasmine Pearl Tea' },
        description: { zh: '特級茉莉花茶，花香濃郁，滋味醇厚', en: 'Premium Jasmine Pearl Tea, rich floral aroma, mellow flavor' },
        price: 318,
        originalPrice: undefined,
        thumbnail: '/images/jasmine-pearl.jpg',
        images: ['/images/jasmine-pearl.jpg'],
        category: 'flower-tea',
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
        tags: ['premium'],
        isFeatured: true
      },
      {
        id: 'superior-jasmine-pearl',
        name: { zh: '一級茉莉花茶', en: 'Superior Jasmine Pearl Tea' },
        description: { zh: '一級茉莉花茶，品質優良，香氣持久', en: 'Superior Jasmine Pearl Tea, excellent quality, lasting aroma' },
        price: 218,
        originalPrice: undefined,
        thumbnail: '/images/jasmine-pearl.jpg',
        images: ['/images/jasmine-pearl.jpg'],
        category: 'flower-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'China',
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
        id: 'jasmine-pearl-small',
        name: { zh: '茉莉花茶', en: 'Jasmine Pearl Tea' },
        description: { zh: '茉莉花茶小包裝，方便攜帶', en: 'Jasmine Pearl Tea, convenient small package' },
        price: 98,
        originalPrice: undefined,
        thumbnail: '/images/jasmine-pearl.jpg',
        images: ['/images/jasmine-pearl.jpg'],
        category: 'flower-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '70g (10x7g)',
          origin: 'China',
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
        id: 'premium-osmanthus',
        name: { zh: '特級桂花茶', en: 'Premium Osmanthus Tea' },
        description: { zh: '特級桂花茶，桂花香濃郁，滋味醇厚', en: 'Premium Osmanthus Tea, rich osmanthus aroma, mellow flavor' },
        price: 268,
        originalPrice: undefined,
        thumbnail: '/images/flower-tea.jpg',
        images: ['/images/flower-tea.jpg'],
        category: 'flower-tea',
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
        tags: ['osmanthus'],
        isFeatured: false
      },
      {
        id: 'superior-osmanthus',
        name: { zh: '一級桂花茶', en: 'Superior Osmanthus Tea' },
        description: { zh: '一級桂花茶，桂花香持久，回甘明顯', en: 'Superior Osmanthus Tea, lasting osmanthus aroma, obvious aftertaste' },
        price: 188,
        originalPrice: undefined,
        thumbnail: '/images/flower-tea.jpg',
        images: ['/images/flower-tea.jpg'],
        category: 'flower-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['osmanthus'],
        isFeatured: false
      },
      {
        id: 'osmanthus-small',
        name: { zh: '桂花茶', en: 'Osmanthus Tea' },
        description: { zh: '桂花茶小包裝，方便攜帶', en: 'Osmanthus Tea, convenient small package' },
        price: 88,
        originalPrice: undefined,
        thumbnail: '/images/flower-tea.jpg',
        images: ['/images/flower-tea.jpg'],
        category: 'flower-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 55,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['osmanthus', 'small-package'],
        isFeatured: false
      },
      {
        id: 'premium-rose-tea',
        name: { zh: '特級玫瑰花茶', en: 'Premium Rose Tea' },
        description: { zh: '特級玫瑰花茶，玫瑰香濃郁，滋味醇厚', en: 'Premium Rose Tea, rich rose aroma, mellow flavor' },
        price: 288,
        originalPrice: undefined,
        thumbnail: '/images/flower-tea.jpg',
        images: ['/images/flower-tea.jpg'],
        category: 'flower-tea',
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
        tags: ['rose'],
        isFeatured: false
      },
      {
        id: 'superior-rose-tea',
        name: { zh: '一級玫瑰花茶', en: 'Superior Rose Tea' },
        description: { zh: '一級玫瑰花茶，玫瑰香持久，回甘明顯', en: 'Superior Rose Tea, lasting rose aroma, obvious aftertaste' },
        price: 198,
        originalPrice: undefined,
        thumbnail: '/images/flower-tea.jpg',
        images: ['/images/flower-tea.jpg'],
        category: 'flower-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['rose'],
        isFeatured: false
      },
      {
        id: 'rose-tea-small',
        name: { zh: '玫瑰花茶', en: 'Rose Tea' },
        description: { zh: '玫瑰花茶小包裝，方便攜帶', en: 'Rose Tea, convenient small package' },
        price: 98,
        originalPrice: undefined,
        thumbnail: '/images/flower-tea.jpg',
        images: ['/images/flower-tea.jpg'],
        category: 'flower-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['rose', 'small-package'],
        isFeatured: false
      },
      {
        id: 'premium-chrysanthemum',
        name: { zh: '特級菊花茶', en: 'Premium Chrysanthemum Tea' },
        description: { zh: '特級菊花茶，菊花香濃郁，滋味醇厚', en: 'Premium Chrysanthemum Tea, rich chrysanthemum aroma, mellow flavor' },
        price: 248,
        originalPrice: undefined,
        thumbnail: '/images/flower-tea.jpg',
        images: ['/images/flower-tea.jpg'],
        category: 'flower-tea',
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
        tags: ['chrysanthemum'],
        isFeatured: false
      },
      {
        id: 'superior-chrysanthemum',
        name: { zh: '一級菊花茶', en: 'Superior Chrysanthemum Tea' },
        description: { zh: '一級菊花茶，菊花香持久，回甘明顯', en: 'Superior Chrysanthemum Tea, lasting chrysanthemum aroma, obvious aftertaste' },
        price: 168,
        originalPrice: undefined,
        thumbnail: '/images/flower-tea.jpg',
        images: ['/images/flower-tea.jpg'],
        category: 'flower-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['chrysanthemum'],
        isFeatured: false
      },
      {
        id: 'chrysanthemum-small',
        name: { zh: '菊花茶', en: 'Chrysanthemum Tea' },
        description: { zh: '菊花茶小包裝，方便攜帶', en: 'Chrysanthemum Tea, convenient small package' },
        price: 88,
        originalPrice: undefined,
        thumbnail: '/images/flower-tea.jpg',
        images: ['/images/flower-tea.jpg'],
        category: 'flower-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['chrysanthemum', 'small-package'],
        isFeatured: false
      },
      {
        id: 'premium-lavender',
        name: { zh: '特級薰衣草茶', en: 'Premium Lavender Tea' },
        description: { zh: '特級薰衣草茶，薰衣草香濃郁，滋味醇厚', en: 'Premium Lavender Tea, rich lavender aroma, mellow flavor' },
        price: 228,
        originalPrice: undefined,
        thumbnail: '/images/flower-tea.jpg',
        images: ['/images/flower-tea.jpg'],
        category: 'flower-tea',
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
        tags: ['lavender'],
        isFeatured: false
      },
      {
        id: 'superior-lavender',
        name: { zh: '一級薰衣草茶', en: 'Superior Lavender Tea' },
        description: { zh: '一級薰衣草茶，薰衣草香持久，回甘明顯', en: 'Superior Lavender Tea, lasting lavender aroma, obvious aftertaste' },
        price: 158,
        originalPrice: undefined,
        thumbnail: '/images/flower-tea.jpg',
        images: ['/images/flower-tea.jpg'],
        category: 'flower-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['lavender'],
        isFeatured: false
      },
      {
        id: 'lavender-small',
        name: { zh: '薰衣草茶', en: 'Lavender Tea' },
        description: { zh: '薰衣草茶小包裝，方便攜帶', en: 'Lavender Tea, convenient small package' },
        price: 78,
        originalPrice: undefined,
        thumbnail: '/images/flower-tea.jpg',
        images: ['/images/flower-tea.jpg'],
        category: 'flower-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '60g (12x5g)',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['lavender', 'small-package'],
        isFeatured: false
      }
    ]
  }
};

function ProductGrid({ products }: { products: Product[] }) {
  const [language] = useState<Language>('zh');
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">精選花茶產品</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} language={language} />
        ))}
      </div>
    </div>
  );
}

export default function FlowerTeaPage() {
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
          alt="Flower Tea Hero"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 to-transparent z-10" />
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

