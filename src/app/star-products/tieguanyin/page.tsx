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
        id: 'tieguanyin-premium',
        name: { zh: '特級安溪鐵觀音', en: 'Supreme Anxi Tieguanyin' },
        description: { zh: '特級濃香型鐵觀音，茶湯金黃，香氣濃郁', en: 'Supreme rich aroma Tieguanyin, golden liquor, rich aroma' },
        price: 300,
        originalPrice: undefined,
        thumbnail: '/images/tieguanyin.jpg',
        images: ['/images/tieguanyin.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '100g',
          origin: 'Anxi, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        isFeatured: true
      },
      {
        id: 'tieguanyin-first-grade',
        name: { zh: '一級安溪鐵觀音', en: 'First Grade Anxi Tieguanyin' },
        description: { zh: '一級濃香型鐵觀音，滋味醇厚，回甘持久', en: 'First Grade rich aroma Tieguanyin, mellow flavor, lasting aftertaste' },
        price: 250,
        originalPrice: undefined,
        thumbnail: '/images/tieguanyin-2.jpg',
        images: ['/images/tieguanyin-2.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '100g',
          origin: 'Anxi, China',
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
        id: 'tieguanyin-light-roasted',
        name: { zh: '清香型鐵觀音', en: 'Light Aroma Tieguanyin' },
        description: { zh: '清香型鐵觀音，花果香明顯，清爽甘醇', en: 'Light aroma Tieguanyin, prominent floral and fruity aroma, refreshing and mellow' },
        price: 200,
        originalPrice: undefined,
        thumbnail: '/images/tieguanyin-3.jpg',
        images: ['/images/tieguanyin-3.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '100g',
          origin: 'Anxi, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
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
        id: 'tieguanyin-premium',
        name: { zh: '特級安溪鐵觀音', en: 'Supreme Anxi Tieguanyin' },
        description: { zh: '特級濃香型鐵觀音，茶湯金黃，香氣濃郁', en: 'Supreme rich aroma Tieguanyin, golden liquor, rich aroma' },
        price: 300,
        originalPrice: undefined,
        thumbnail: '/images/tieguanyin.jpg',
        images: ['/images/tieguanyin.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '100g',
          origin: 'Anxi, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        isFeatured: true
      },
      {
        id: 'tieguanyin-first-grade',
        name: { zh: '一級安溪鐵觀音', en: 'First Grade Anxi Tieguanyin' },
        description: { zh: '一級濃香型鐵觀音，滋味醇厚，回甘持久', en: 'First Grade rich aroma Tieguanyin, mellow flavor, lasting aftertaste' },
        price: 250,
        originalPrice: undefined,
        thumbnail: '/images/tieguanyin-2.jpg',
        images: ['/images/tieguanyin-2.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '100g',
          origin: 'Anxi, China',
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
        id: 'tieguanyin-light-roasted',
        name: { zh: '清香型鐵觀音', en: 'Light Aroma Tieguanyin' },
        description: { zh: '清香型鐵觀音，花果香明顯，清爽甘醇', en: 'Light aroma Tieguanyin, prominent floral and fruity aroma, refreshing and mellow' },
        price: 200,
        originalPrice: undefined,
        thumbnail: '/images/tieguanyin-3.jpg',
        images: ['/images/tieguanyin-3.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '100g',
          origin: 'Anxi, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 50,
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
 
 