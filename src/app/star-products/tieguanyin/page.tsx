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
};

const content: Record<Language, { heroSection: HeroSectionType; products: Product[] }> = {
  zh: {
    heroSection: {
      headline: '安溪鐵觀音',
      subheadline: '探索濃香型烏龍茶的獨特韻味',
      button: '立即探索',
      leafColor: '#c3e3ce',
      bg: 'from-orange-800 via-orange-900 to-orange-700',
      bgImage: '/images/hero-2.jpg'
    },
    products: [
      {
        id: 'tieguanyin-gold-signature',
        name: { zh: '金牌觀音皇', en: 'Gold Signature Tea of Tieguanyin' },
        description: { zh: '金牌觀音皇，極品鐵觀音，茶湯金黃，香氣濃郁', en: 'Gold Signature Tea of Tieguanyin, supreme quality, golden liquor, rich aroma' },
        price: 2180,
        originalPrice: undefined,
        thumbnail: '/images/tieguanyin.jpg',
        images: ['/images/tieguanyin.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Anxi, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium', 'signature'],
        isFeatured: true
      },
      {
        id: 'tieguanyin-signature',
        name: { zh: '招牌觀音皇', en: 'Signature Tea of Tieguanyin' },
        description: { zh: '招牌觀音皇，滋味醇厚，回甘持久', en: 'Signature Tea of Tieguanyin, mellow flavor, lasting aftertaste' },
        price: 698,
        originalPrice: undefined,
        thumbnail: '/images/tieguanyin-2.jpg',
        images: ['/images/tieguanyin-2.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Anxi, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['signature'],
        isFeatured: false
      },
      {
        id: 'tieguanyin-champion',
        name: { zh: '參賽觀音皇', en: 'Champion of Tieguanyin' },
        description: { zh: '參賽觀音皇，比賽級品質，香氣高揚', en: 'Champion of Tieguanyin, competition grade quality, high aroma' },
        price: 498,
        originalPrice: undefined,
        thumbnail: '/images/tieguanyin-3.jpg',
        images: ['/images/tieguanyin-3.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Anxi, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['champion'],
        isFeatured: false
      },
      {
        id: 'tieguanyin-deluxe',
        name: { zh: '精選觀音皇', en: 'Deluxe Tieguanyin' },
        description: { zh: '精選觀音皇，優質鐵觀音，香氣濃郁', en: 'Deluxe Tieguanyin, premium quality, rich aroma' },
        price: 468,
        originalPrice: undefined,
        thumbnail: '/images/tieguanyin-4.jpg',
        images: ['/images/tieguanyin-4.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Anxi, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['deluxe'],
        isFeatured: false
      },
      {
        id: 'tieguanyin-king',
        name: { zh: '極品觀音皇', en: 'King of Tieguanyin' },
        description: { zh: '極品觀音皇，頂級鐵觀音，茶湯金黃', en: 'King of Tieguanyin, top-grade quality, golden liquor' },
        price: 388,
        originalPrice: undefined,
        thumbnail: '/images/tieguanyin-5.jpg',
        images: ['/images/tieguanyin-5.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Anxi, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['king'],
        isFeatured: false
      },
      {
        id: 'tieguanyin-monkey-pick',
        name: { zh: '馬騮搣', en: 'Monkey Pick Tieguanyin' },
        description: { zh: '馬騮搣鐵觀音，手工採摘，品質優良', en: 'Monkey Pick Tieguanyin, hand-picked, excellent quality' },
        price: 268,
        originalPrice: undefined,
        thumbnail: '/images/tieguanyin-6.jpg',
        images: ['/images/tieguanyin-6.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Anxi, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['monkey-pick'],
        isFeatured: false
      },
      {
        id: 'tieguanyin-top-grade',
        name: { zh: '極品鐵觀音', en: 'Top-Grade Tieguanyin' },
        description: { zh: '極品鐵觀音，傳統工藝，香高韻長', en: 'Top-Grade Tieguanyin, traditional craftsmanship, high aroma and lasting aftertaste' },
        price: 168,
        originalPrice: undefined,
        thumbnail: '/images/tieguanyin-7.jpg',
        images: ['/images/tieguanyin-7.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Anxi, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['top-grade'],
        isFeatured: false
      }
    ]
  },
  en: {
    heroSection: {
      headline: 'Anxi Tieguanyin',
      subheadline: 'Explore the unique charm of rich aroma oolong tea.',
      button: 'Explore Now',
      leafColor: '#c3e3ce',
      bg: 'from-orange-800 via-orange-900 to-orange-700',
      bgImage: '/images/hero-tieguanyin.jpg'
    },
    products: [
      {
        id: 'tieguanyin-gold-signature',
        name: { zh: '金牌觀音皇', en: 'Gold Signature Tea of Tieguanyin' },
        description: { zh: '金牌觀音皇，極品鐵觀音，茶湯金黃，香氣濃郁', en: 'Gold Signature Tea of Tieguanyin, supreme quality, golden liquor, rich aroma' },
        price: 2180,
        originalPrice: undefined,
        thumbnail: '/images/tieguanyin.jpg',
        images: ['/images/tieguanyin.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Anxi, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium', 'signature'],
        isFeatured: true
      },
      {
        id: 'tieguanyin-signature',
        name: { zh: '招牌觀音皇', en: 'Signature Tea of Tieguanyin' },
        description: { zh: '招牌觀音皇，滋味醇厚，回甘持久', en: 'Signature Tea of Tieguanyin, mellow flavor, lasting aftertaste' },
        price: 698,
        originalPrice: undefined,
        thumbnail: '/images/tieguanyin-2.jpg',
        images: ['/images/tieguanyin-2.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Anxi, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['signature'],
        isFeatured: false
      },
      {
        id: 'tieguanyin-champion',
        name: { zh: '參賽觀音皇', en: 'Champion of Tieguanyin' },
        description: { zh: '參賽觀音皇，比賽級品質，香氣高揚', en: 'Champion of Tieguanyin, competition grade quality, high aroma' },
        price: 498,
        originalPrice: undefined,
        thumbnail: '/images/tieguanyin-3.jpg',
        images: ['/images/tieguanyin-3.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Anxi, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['champion'],
        isFeatured: false
      },
      {
        id: 'tieguanyin-deluxe',
        name: { zh: '精選觀音皇', en: 'Deluxe Tieguanyin' },
        description: { zh: '精選觀音皇，優質鐵觀音，香氣濃郁', en: 'Deluxe Tieguanyin, premium quality, rich aroma' },
        price: 468,
        originalPrice: undefined,
        thumbnail: '/images/tieguanyin-4.jpg',
        images: ['/images/tieguanyin-4.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Anxi, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['deluxe'],
        isFeatured: false
      },
      {
        id: 'tieguanyin-king',
        name: { zh: '極品觀音皇', en: 'King of Tieguanyin' },
        description: { zh: '極品觀音皇，頂級鐵觀音，茶湯金黃', en: 'King of Tieguanyin, top-grade quality, golden liquor' },
        price: 388,
        originalPrice: undefined,
        thumbnail: '/images/tieguanyin-5.jpg',
        images: ['/images/tieguanyin-5.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Anxi, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['king'],
        isFeatured: false
      },
      {
        id: 'tieguanyin-monkey-pick',
        name: { zh: '馬騮搣', en: 'Monkey Pick Tieguanyin' },
        description: { zh: '馬騮搣鐵觀音，手工採摘，品質優良', en: 'Monkey Pick Tieguanyin, hand-picked, excellent quality' },
        price: 268,
        originalPrice: undefined,
        thumbnail: '/images/tieguanyin-6.jpg',
        images: ['/images/tieguanyin-6.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Anxi, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['monkey-pick'],
        isFeatured: false
      },
      {
        id: 'tieguanyin-top-grade',
        name: { zh: '極品鐵觀音', en: 'Top-Grade Tieguanyin' },
        description: { zh: '極品鐵觀音，傳統工藝，香高韻長', en: 'Top-Grade Tieguanyin, traditional craftsmanship, high aroma and lasting aftertaste' },
        price: 168,
        originalPrice: undefined,
        thumbnail: '/images/tieguanyin-7.jpg',
        images: ['/images/tieguanyin-7.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Anxi, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['top-grade'],
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

export default function TieguanyinPage() {
  const [language] = useState<Language>('zh');
  const { heroSection, products } = content[language];

  return (
    <main>
      <HeroSection section={heroSection} />
      <ProductGrid products={products} />
    </main>
  );
} 
 
 