'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
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
      headline: '天然蜂蜜',
      subheadline: '嚴選優質蜜源，純正天然好蜜',
      button: '立即探索',
      leafColor: '#5ba976',
      bg: 'from-darkgreen-700 via-darkgreen-900 to-darkgreen-800',
      bgImage: '/images/hero-3.jpg',
      bgVideo: '/videos/honey.mp4'
    },
    products: [
      {
        id: 'honey-manuka',
        name: { zh: '麥盧卡蜂蜜', en: 'Manuka Honey' },
        description: { zh: '紐西蘭特產，抗菌功效強，營養價值極高', en: 'New Zealand specialty, strong antibacterial properties, highly nutritious' },
        price: 580,
        originalPrice: undefined,
        thumbnail: '/images/honey-manuka.jpg',
        images: ['/images/honey-manuka.jpg'],
        category: 'honey-product',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'New Zealand',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium', 'manuka'],
        isFeatured: true
      },
      {
        id: 'honey-royal-jelly',
        name: { zh: '蜂王漿', en: 'Royal Jelly' },
        description: { zh: '蜂王漿，營養豐富，增強免疫力', en: 'Royal jelly, highly nutritious, boosts immunity' },
        price: 420,
        originalPrice: undefined,
        thumbnail: '/images/honey-royal-jelly.jpg',
        images: ['/images/honey-royal-jelly.jpg'],
        category: 'honey-product',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '100g',
          origin: 'China',
          storage: 'Store in refrigerator',
          expiryDate: '12 months'
        },
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium', 'royal-jelly'],
        isFeatured: false
      },
      {
        id: 'honey-propolis',
        name: { zh: '蜂膠', en: 'Propolis' },
        description: { zh: '天然蜂膠，抗菌消炎，保健功效佳', en: 'Natural propolis, antibacterial and anti-inflammatory' },
        price: 380,
        originalPrice: undefined,
        thumbnail: '/images/honey-propolis.jpg',
        images: ['/images/honey-propolis.jpg'],
        category: 'honey-product',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '100g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium', 'propolis'],
        isFeatured: false
      },
      {
        id: 'honey-linden',
        name: { zh: '紫椴蜂蜜', en: 'Linden Honey' },
        description: { zh: '花香濃郁，營養豐富', en: 'Rich floral aroma, highly nutritious' },
        price: 180,
        originalPrice: undefined,
        thumbnail: '/images/honey-linden.jpg',
        images: ['/images/honey-linden.jpg'],
        category: 'honey-product',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '500g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 70,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium', 'linden'],
        isFeatured: false
      },
      {
        id: 'honey-acacia',
        name: { zh: '洋槐蜂蜜', en: 'Acacia Honey' },
        description: { zh: '清甜潤喉，不易結晶', en: 'Sweet and smooth, resistant to crystallization' },
        price: 150,
        originalPrice: undefined,
        thumbnail: '/images/honey-acacia.jpg',
        images: ['/images/honey-acacia.jpg'],
        category: 'honey-product',
        status: 'active',
        isNew: true,
        specifications: {
          weight: '500g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['pure', 'natural'],
        isFeatured: false
      },
      {
        id: 'flower-tea-blend',
        name: { zh: '花茶', en: 'Flower Tea Blend' },
        description: { zh: '精選花茶，香氣怡人，美容養顏', en: 'Selected flower tea blend, pleasant aroma, beauty benefits' },
        price: 120,
        originalPrice: undefined,
        thumbnail: '/images/flower-tea-blend.jpg',
        images: ['/images/flower-tea-blend.jpg'],
        category: 'flower-tea',
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
        tags: ['flower', 'beauty'],
        isFeatured: false
      },
      {
        id: 'osmanthus-tea',
        name: { zh: '金桂花', en: 'Osmanthus Tea' },
        description: { zh: '金桂花茶，香氣濃郁，回甘持久', en: 'Osmanthus tea, rich aroma, lasting aftertaste' },
        price: 95,
        originalPrice: undefined,
        thumbnail: '/images/osmanthus-tea.jpg',
        images: ['/images/osmanthus-tea.jpg'],
        category: 'flower-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '100g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['osmanthus', 'fragrant'],
        isFeatured: false
      },
      {
        id: 'rose-tea',
        name: { zh: '粉紅玫瑰', en: 'Pink Rose Tea' },
        description: { zh: '粉紅玫瑰茶，美容養顏，香氣怡人', en: 'Pink rose tea, beauty benefits, pleasant aroma' },
        price: 85,
        originalPrice: undefined,
        thumbnail: '/images/rose-tea.jpg',
        images: ['/images/rose-tea.jpg'],
        category: 'flower-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '100g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 55,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['rose', 'beauty'],
        isFeatured: false
      },
      {
        id: 'chrysanthemum-king',
        name: { zh: '胎菊王', en: 'Chrysanthemum King' },
        description: { zh: '胎菊王，清熱明目，香氣清雅', en: 'Chrysanthemum King, clears heat and brightens eyes, elegant aroma' },
        price: 75,
        originalPrice: undefined,
        thumbnail: '/images/chrysanthemum-king.jpg',
        images: ['/images/chrysanthemum-king.jpg'],
        category: 'flower-tea',
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
        tags: ['chrysanthemum', 'clear-heat'],
        isFeatured: false
      }
    ]
  },
  en: {
    heroSection: {
      headline: 'Natural Honey',
      subheadline: 'Carefully selected high-quality honey, pure and natural.',
      button: 'Explore Honey',
      leafColor: '#5ba976',
      bg: 'from-darkgreen-700 via-darkgreen-900 to-darkgreen-800',
      bgImage: '/images/hero-4.jpg',
      bgVideo: '/videos/honey.mp4'
    },
    products: [
      {
        id: 'honey-manuka',
        name: { zh: '麥盧卡蜂蜜', en: 'Manuka Honey' },
        description: { zh: '紐西蘭特產，抗菌功效強，營養價值極高', en: 'New Zealand specialty, strong antibacterial properties, highly nutritious' },
        price: 580,
        originalPrice: undefined,
        thumbnail: '/images/honey-manuka.jpg',
        images: ['/images/honey-manuka.jpg'],
        category: 'honey-product',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'New Zealand',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium', 'manuka'],
        isFeatured: true
      },
      {
        id: 'honey-royal-jelly',
        name: { zh: '蜂王漿', en: 'Royal Jelly' },
        description: { zh: '蜂王漿，營養豐富，增強免疫力', en: 'Royal jelly, highly nutritious, boosts immunity' },
        price: 420,
        originalPrice: undefined,
        thumbnail: '/images/honey-royal-jelly.jpg',
        images: ['/images/honey-royal-jelly.jpg'],
        category: 'honey-product',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '100g',
          origin: 'China',
          storage: 'Store in refrigerator',
          expiryDate: '12 months'
        },
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium', 'royal-jelly'],
        isFeatured: false
      },
      {
        id: 'honey-propolis',
        name: { zh: '蜂膠', en: 'Propolis' },
        description: { zh: '天然蜂膠，抗菌消炎，保健功效佳', en: 'Natural propolis, antibacterial and anti-inflammatory' },
        price: 380,
        originalPrice: undefined,
        thumbnail: '/images/honey-propolis.jpg',
        images: ['/images/honey-propolis.jpg'],
        category: 'honey-product',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '100g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium', 'propolis'],
        isFeatured: false
      },
      {
        id: 'honey-linden',
        name: { zh: '紫椴蜂蜜', en: 'Linden Honey' },
        description: { zh: '花香濃郁，營養豐富', en: 'Rich floral aroma, highly nutritious' },
        price: 180,
        originalPrice: undefined,
        thumbnail: '/images/honey-linden.jpg',
        images: ['/images/honey-linden.jpg'],
        category: 'honey-product',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '500g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 70,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium', 'linden'],
        isFeatured: false
      },
      {
        id: 'honey-acacia',
        name: { zh: '洋槐蜂蜜', en: 'Acacia Honey' },
        description: { zh: '清甜潤喉，不易結晶', en: 'Sweet and smooth, resistant to crystallization' },
        price: 150,
        originalPrice: undefined,
        thumbnail: '/images/honey-acacia.jpg',
        images: ['/images/honey-acacia.jpg'],
        category: 'honey-product',
        status: 'active',
        isNew: true,
        specifications: {
          weight: '500g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['pure', 'natural'],
        isFeatured: false
      },
      {
        id: 'flower-tea-blend',
        name: { zh: '花茶', en: 'Flower Tea Blend' },
        description: { zh: '精選花茶，香氣怡人，美容養顏', en: 'Selected flower tea blend, pleasant aroma, beauty benefits' },
        price: 120,
        originalPrice: undefined,
        thumbnail: '/images/flower-tea-blend.jpg',
        images: ['/images/flower-tea-blend.jpg'],
        category: 'flower-tea',
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
        tags: ['flower', 'beauty'],
        isFeatured: false
      },
      {
        id: 'osmanthus-tea',
        name: { zh: '金桂花', en: 'Osmanthus Tea' },
        description: { zh: '金桂花茶，香氣濃郁，回甘持久', en: 'Osmanthus tea, rich aroma, lasting aftertaste' },
        price: 95,
        originalPrice: undefined,
        thumbnail: '/images/osmanthus-tea.jpg',
        images: ['/images/osmanthus-tea.jpg'],
        category: 'flower-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '100g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['osmanthus', 'fragrant'],
        isFeatured: false
      },
      {
        id: 'rose-tea',
        name: { zh: '粉紅玫瑰', en: 'Pink Rose Tea' },
        description: { zh: '粉紅玫瑰茶，美容養顏，香氣怡人', en: 'Pink rose tea, beauty benefits, pleasant aroma' },
        price: 85,
        originalPrice: undefined,
        thumbnail: '/images/rose-tea.jpg',
        images: ['/images/rose-tea.jpg'],
        category: 'flower-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '100g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 55,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['rose', 'beauty'],
        isFeatured: false
      },
      {
        id: 'chrysanthemum-king',
        name: { zh: '胎菊王', en: 'Chrysanthemum King' },
        description: { zh: '胎菊王，清熱明目，香氣清雅', en: 'Chrysanthemum King, clears heat and brightens eyes, elegant aroma' },
        price: 75,
        originalPrice: undefined,
        thumbnail: '/images/chrysanthemum-king.jpg',
        images: ['/images/chrysanthemum-king.jpg'],
        category: 'flower-tea',
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
        tags: ['chrysanthemum', 'clear-heat'],
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
        {section.bgVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={section.bgVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={section.bgImage}
            alt={section.headline}
            fill
            className="object-cover"
            priority
          />
        )}
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
      <h2 className="text-3xl font-bold text-center mb-12">更多推介</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 overflow-hidden">
              <motion.div
                className="w-full h-full"
                whileHover={{
                  scale: 1.1,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Image
                  src={product.thumbnail}
                  alt={product.name.zh}
                  fill
                  className="object-cover"
                />
              </motion.div>
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

function HoneySeries({ language }: { language: Language }) {
  // Always sort products by price descending before rendering
  const sortedProducts = [...content[language].products].sort((a, b) => b.price - a.price);
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ProductGrid products={sortedProducts} />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default function HoneyPage() {
  const [language] = useState<Language>('zh');
  const { heroSection, products } = content[language];

  return (
    <main>
      <HeroSection section={heroSection} />
      <HoneySeries language={language} />
    </main>
  );
} 
 
 