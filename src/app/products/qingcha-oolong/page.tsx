'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
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
      headline: '青茶/烏龍精選',
      subheadline: '探索獨特韻味的青茶與烏龍茶系列',
      button: '立即探索',
      leafColor: '#a2b98e', // A light greenish-brown color for oolong tea
      bg: 'from-emerald-800 via-emerald-900 to-emerald-700',
      bgImage: '/images/hero-qingcha-oolong.jpg'
    },
    products: [
      {
        id: 'tieguanyin-qingcha',
        name: { zh: '清香型鐵觀音', en: 'Light Aroma Tieguanyin' },
        description: { zh: '安溪清香型鐵觀音，香氣清雅，回甘持久', en: 'Anxi light aroma Tieguanyin, elegant aroma, lasting aftertaste' },
        price: 220,
        originalPrice: undefined,
        thumbnail: '/images/tieguanyin-qingcha.jpg',
        images: ['/images/tieguanyin-qingcha.jpg'],
        category: 'oolong-tea',
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
        tags: [],
        isFeatured: true
      },
      {
        id: 'maoxie-oolong',
        name: { zh: '毛蟹烏龍', en: 'Mao Xie Oolong' },
        description: { zh: '安溪毛蟹烏龍，香氣高揚，滋味醇厚', en: 'Anxi Mao Xie Oolong, high aroma, mellow taste' },
        price: 180,
        originalPrice: undefined,
        thumbnail: '/images/maoxie-oolong.jpg',
        images: ['/images/maoxie-oolong.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '100g',
          origin: 'China',
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
        id: 'huangjin-gui',
        name: { zh: '黃金桂', en: 'Huang Jin Gui' },
        description: { zh: '安溪黃金桂，香氣濃郁，滋味甘醇', en: 'Anxi Huang Jin Gui, rich aroma, sweet taste' },
        price: 160,
        originalPrice: undefined,
        thumbnail: '/images/huangjin-gui.jpg',
        images: ['/images/huangjin-gui.jpg'],
        category: 'oolong-tea',
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
        tags: [],
        isFeatured: false
      }
    ]
  },
  en: {
    heroSection: {
      headline: 'Qingcha & Oolong Selection',
      subheadline: 'Explore our unique collection of Qingcha and Oolong teas.',
      button: 'Explore Now',
      leafColor: '#a2b98e',
      bg: 'from-emerald-800 via-emerald-900 to-emerald-700',
      bgImage: '/images/hero-qingcha-oolong.jpg'
    },
    products: [
      {
        id: 'tieguanyin-qingcha',
        name: { zh: '清香型鐵觀音', en: 'Light Aroma Tieguanyin' },
        description: { zh: '安溪清香型鐵觀音，香氣清雅，回甘持久', en: 'Anxi light aroma Tieguanyin, elegant aroma, lasting aftertaste' },
        price: 220,
        originalPrice: undefined,
        thumbnail: '/images/tieguanyin-qingcha.jpg',
        images: ['/images/tieguanyin-qingcha.jpg'],
        category: 'oolong-tea',
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
        tags: [],
        isFeatured: true
      },
      {
        id: 'maoxie-oolong',
        name: { zh: '毛蟹烏龍', en: 'Mao Xie Oolong' },
        description: { zh: '安溪毛蟹烏龍，香氣高揚，滋味醇厚', en: 'Anxi Mao Xie Oolong, high aroma, mellow taste' },
        price: 180,
        originalPrice: undefined,
        thumbnail: '/images/maoxie-oolong.jpg',
        images: ['/images/maoxie-oolong.jpg'],
        category: 'oolong-tea',
        status: 'active',
        isNew: false,
        specifications: {
          weight: '100g',
          origin: 'China',
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
        id: 'huangjin-gui',
        name: { zh: '黃金桂', en: 'Huang Jin Gui' },
        description: { zh: '安溪黃金桂，香氣濃郁，滋味甘醇', en: 'Anxi Huang Jin Gui, rich aroma, sweet taste' },
        price: 160,
        originalPrice: undefined,
        thumbnail: '/images/huangjin-gui.jpg',
        images: ['/images/huangjin-gui.jpg'],
        category: 'oolong-tea',
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
      <h2 className="text-3xl font-bold text-center mb-12">精選清茶烏龍產品</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} language={language} />
        ))}
      </div>
    </div>
  );
}

export default function QingchaOolongPage() {
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
          alt="Qingcha Oolong Hero"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent z-10" />
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

