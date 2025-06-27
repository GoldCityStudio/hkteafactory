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

function FloatingLeaf({ className, style, color = '#206e3a', opacity = 0.3 }: { className?: string; style?: React.CSSProperties; color?: string; opacity?: number }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M16 2C10 10 2 18 16 30C30 18 22 10 16 2Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
}

function AnimatedTitle({ text }: { text: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });
  const words = text.split(' ');

  return (
    <h1 ref={ref} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 flex flex-wrap justify-center gap-x-2">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.1 + i * 0.08, type: 'spring', bounce: 0.3 }}
          className="inline-block relative"
        >
          <motion.span
            className="absolute inset-0 blur-sm bg-emerald-400/30"
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
          <motion.span
            className="relative z-10"
            style={{
              textShadow: '0 0 20px rgba(52, 211, 153, 0.3), 0 0 40px rgba(52, 211, 153, 0.2)',
            }}
          >
            {word}
          </motion.span>
          <motion.span
            className="absolute inset-0 blur-md bg-emerald-300/20"
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: 0.5,
            }}
          />
        </motion.span>
      ))}
    </h1>
  );
}

type HeroSectionProps = {
  section: HeroSectionType;
  idx: number;
  sectionRef: (el: HTMLDivElement | null) => void;
};

function HeroSection({ section, idx, sectionRef }: HeroSectionProps) {
  const localRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(localRef, { once: true });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    sectionRef(localRef.current);
  }, [sectionRef]);

  useEffect(() => {
    if (videoRef.current) {
      if (idx === 0) {
        videoRef.current.playbackRate = 0.5;
      }
      if (idx === 1 || idx === 2) {
        videoRef.current.style.transform = 'scale(1.2)';
        videoRef.current.style.transition = 'transform 0.5s ease-out';
      }
    }
  }, [idx]);

  return (
    <motion.div
      ref={localRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className={`relative h-[600px] flex items-center justify-center overflow-hidden ${section.bg}`}
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        {section.bgVideo ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={section.bgVideo} type="video/mp4" />
            您的瀏覽器不支持視頻播放。
          </video>
        ) : (
          <Image
            src={section.bgImage}
            alt="Background"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority={idx === 0}
            quality={75}
            loading={idx === 0 ? "eager" : "lazy"}
          />
        )}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"
          animate={{
            opacity: isHovered ? 0.6 : 0.5
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      <motion.div 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-4 tracking-tight"
        >
          {section.headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ delay: 0.4 }}
          className="text-xl sm:text-2xl text-white/90 mb-8 font-light tracking-wide"
        >
          {section.subheadline}
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ delay: 0.6 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-emerald-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-all duration-300 shadow-lg"
        >
          {section.button}
        </motion.button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <FloatingLeaf
          className="absolute top-1/4 left-1/4"
          color={section.leafColor}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <FloatingLeaf
          className="absolute bottom-1/4 right-1/4"
          color={section.leafColor}
          style={{ transform: 'rotate(180deg)' }}
        />
      </motion.div>
    </motion.div>
  );
}

function ProductGrid({ products }: { products: Product[] }) {
  const [language] = useState<Language>('zh');
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">精選蜂蜜產品</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} language={language} />
        ))}
      </div>
    </div>
  );
}

export default function HoneyProductPage() {
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
          alt="Honey Products Hero"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/60 to-transparent z-10" />
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

const content: Record<Language, { heroSection: HeroSectionType; products: Product[] }> = {
  zh: {
    heroSection: {
      headline: '蜂蜜精選',
      subheadline: '探索天然純淨的蜂蜜系列',
      button: '立即探索',
      leafColor: '#FFD700', // Golden yellow for honey
      bg: 'from-yellow-600 via-yellow-700 to-yellow-500',
      bgImage: '/images/honey-premium.jpg'
    },
    products: [
      {
        id: 'amur-linden-honey',
        name: { zh: '紫椴蜂蜜', en: 'Amur Linden Honey' },
        description: { zh: '紫椴蜂蜜，清香淡雅，營養豐富', en: 'Amur Linden Honey, light and elegant aroma, rich in nutrients' },
        price: 168,
        originalPrice: undefined,
        thumbnail: '/images/honey-premium.jpg',
        images: ['/images/honey-premium.jpg'],
        category: 'honey-product',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '450g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '2 years'
        },
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium'],
        isFeatured: true
      },
      {
        id: 'jujube-honey',
        name: { zh: '棗花蜂蜜', en: 'Jujube Honey' },
        description: { zh: '棗花蜂蜜，濃郁香甜，滋補養生', en: 'Jujube Honey, rich and sweet, nourishing and healthy' },
        price: 138,
        originalPrice: undefined,
        thumbnail: '/images/honey-combo.jpg',
        images: ['/images/honey-combo.jpg'],
        category: 'honey-product',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '500g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '2 years'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['jujube'],
        isFeatured: false
      },
      {
        id: 'acacia-honey',
        name: { zh: '洋槐蜂蜜', en: 'Acacia Honey' },
        description: { zh: '洋槐蜂蜜，清甜淡雅，口感細膩', en: 'Acacia Honey, light and sweet, delicate taste' },
        price: 138,
        originalPrice: undefined,
        thumbnail: '/images/honey-gift.jpg',
        images: ['/images/honey-gift.jpg'],
        category: 'honey-product',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '500g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '2 years'
        },
        stock: 28,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['acacia'],
        isFeatured: false
      },
      {
        id: 'linden-honey',
        name: { zh: '椴樹蜂蜜', en: 'Linden Honey' },
        description: { zh: '椴樹蜂蜜，清香怡人，營養豐富', en: 'Linden Honey, refreshing aroma, rich in nutrients' },
        price: 88,
        originalPrice: undefined,
        thumbnail: '/images/honey-premium.jpg',
        images: ['/images/honey-premium.jpg'],
        category: 'honey-product',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '500g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '2 years'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['linden'],
        isFeatured: false
      }
    ]
  },
  en: {
    heroSection: {
      headline: 'Premium Honey Collection',
      subheadline: 'Discover our natural and pure honey series',
      button: 'Explore Now',
      leafColor: '#FFD700',
      bg: 'from-yellow-600 via-yellow-700 to-yellow-500',
      bgImage: '/images/honey-premium.jpg'
    },
    products: [
      {
        id: 'amur-linden-honey',
        name: { zh: '紫椴蜂蜜', en: 'Amur Linden Honey' },
        description: { zh: '紫椴蜂蜜，清香淡雅，營養豐富', en: 'Amur Linden Honey, light and elegant aroma, rich in nutrients' },
        price: 168,
        originalPrice: undefined,
        thumbnail: '/images/honey-premium.jpg',
        images: ['/images/honey-premium.jpg'],
        category: 'honey-product',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '450g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '2 years'
        },
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium'],
        isFeatured: true
      },
      {
        id: 'jujube-honey',
        name: { zh: '棗花蜂蜜', en: 'Jujube Honey' },
        description: { zh: '棗花蜂蜜，濃郁香甜，滋補養生', en: 'Jujube Honey, rich and sweet, nourishing and healthy' },
        price: 138,
        originalPrice: undefined,
        thumbnail: '/images/honey-combo.jpg',
        images: ['/images/honey-combo.jpg'],
        category: 'honey-product',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '500g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '2 years'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['jujube'],
        isFeatured: false
      },
      {
        id: 'acacia-honey',
        name: { zh: '洋槐蜂蜜', en: 'Acacia Honey' },
        description: { zh: '洋槐蜂蜜，清甜淡雅，口感細膩', en: 'Acacia Honey, light and sweet, delicate taste' },
        price: 138,
        originalPrice: undefined,
        thumbnail: '/images/honey-gift.jpg',
        images: ['/images/honey-gift.jpg'],
        category: 'honey-product',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '500g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '2 years'
        },
        stock: 28,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['acacia'],
        isFeatured: false
      },
      {
        id: 'linden-honey',
        name: { zh: '椴樹蜂蜜', en: 'Linden Honey' },
        description: { zh: '椴樹蜂蜜，清香怡人，營養豐富', en: 'Linden Honey, refreshing aroma, rich in nutrients' },
        price: 88,
        originalPrice: undefined,
        thumbnail: '/images/honey-premium.jpg',
        images: ['/images/honey-premium.jpg'],
        category: 'honey-product',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '500g',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '2 years'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['linden'],
        isFeatured: false
      }
    ]
  }
}; 
 