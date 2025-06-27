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
};

const content: Record<Language, { heroSection: HeroSectionType; products: Product[] }> = {
  zh: {
    heroSection: {
      headline: '台灣茶精選',
      subheadline: '探索高山烏龍的獨特風味',
      button: '立即探索',
      leafColor: '#6B8E23', // Olive Drab for Taiwanese tea
      bg: 'from-teal-800 via-teal-900 to-teal-700',
      bgImage: '/images/hero-taiwanese-tea.jpg'
    },
    products: [
      {
        id: 'ali-shan-oolong',
        name: { zh: '阿里山烏龍', en: 'Ali Shan Oolong' },
        description: { zh: '台灣高山烏龍，茶湯清澈，香氣持久', en: 'Taiwan high mountain oolong, clear liquor, lasting aroma' },
        price: 200,
        originalPrice: undefined,
        thumbnail: '/images/ali-shan-oolong.jpg',
        images: ['/images/ali-shan-oolong.jpg'],
        category: 'taiwanese-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '75g',
          origin: 'Taiwan',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        isFeatured: true
      },
      {
        id: 'sun-moon-lake-black',
        name: { zh: '日月潭紅茶', en: 'Sun Moon Lake Black Tea' },
        description: { zh: '台灣魚池鄉，茶湯醇厚，獨特麥芽香', en: 'Yuchi Township, Taiwan, mellow liquor, unique malty aroma' },
        price: 180,
        originalPrice: undefined,
        thumbnail: '/images/sun-moon-lake-black.jpg',
        images: ['/images/sun-moon-lake-black.jpg'],
        category: 'taiwanese-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '75g',
          origin: 'Taiwan',
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
        id: 'li-shan-oolong',
        name: { zh: '梨山烏龍', en: 'Li Shan Oolong' },
        description: { zh: '台灣高冷茶，清雅花香，甘醇滑潤', en: 'Taiwan high mountain cold tea, elegant floral aroma, sweet and smooth' },
        price: 250,
        originalPrice: undefined,
        thumbnail: '/images/li-shan-oolong.jpg',
        images: ['/images/li-shan-oolong.jpg'],
        category: 'taiwanese-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '75g',
          origin: 'Taiwan',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        isFeatured: false
      }
    ]
  },
  en: {
    heroSection: {
      headline: 'Taiwanese Tea Selection',
      subheadline: 'Explore the unique flavors of high mountain oolong.',
      button: 'Explore Now',
      leafColor: '#6B8E23',
      bg: 'from-teal-800 via-teal-900 to-teal-700',
      bgImage: '/images/hero-taiwanese-tea.jpg'
    },
    products: [
      {
        id: 'ali-shan-oolong',
        name: { zh: '阿里山烏龍', en: 'Ali Shan Oolong' },
        description: { zh: '台灣高山烏龍，茶湯清澈，香氣持久', en: 'Taiwan high mountain oolong, clear liquor, lasting aroma' },
        price: 200,
        originalPrice: undefined,
        thumbnail: '/images/ali-shan-oolong.jpg',
        images: ['/images/ali-shan-oolong.jpg'],
        category: 'taiwanese-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '75g',
          origin: 'Taiwan',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: [],
        isFeatured: true
      },
      {
        id: 'sun-moon-lake-black',
        name: { zh: '日月潭紅茶', en: 'Sun Moon Lake Black Tea' },
        description: { zh: '台灣魚池鄉，茶湯醇厚，獨特麥芽香', en: 'Yuchi Township, Taiwan, mellow liquor, unique malty aroma' },
        price: 180,
        originalPrice: undefined,
        thumbnail: '/images/sun-moon-lake-black.jpg',
        images: ['/images/sun-moon-lake-black.jpg'],
        category: 'taiwanese-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '75g',
          origin: 'Taiwan',
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
        id: 'li-shan-oolong',
        name: { zh: '梨山烏龍', en: 'Li Shan Oolong' },
        description: { zh: '台灣高冷茶，清雅花香，甘醇滑潤', en: 'Taiwan high mountain cold tea, elegant floral aroma, sweet and smooth' },
        price: 250,
        originalPrice: undefined,
        thumbnail: '/images/li-shan-oolong.jpg',
        images: ['/images/li-shan-oolong.jpg'],
        category: 'taiwanese-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '75g',
          origin: 'Taiwan',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 60,
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
      <h2 className="text-3xl font-bold text-center mb-12">精選台灣茶產品</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} language={language} />
        ))}
      </div>
    </div>
  );
}

export default function TaiwaneseTeaPage() {
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
          alt="Taiwanese Tea Hero"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent z-10" />
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
 