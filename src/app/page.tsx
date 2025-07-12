// Update: Added a comment to force Vercel redeployment
'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import type { Language } from '@/app/types';
import dynamic from 'next/dynamic';
import { AnimatePresence } from 'framer-motion';
import { useCart } from '@/app/context/CartContext';
import Cart from '@/components/Cart';
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

type ContentType = {
  products: Product[];
  heroSections: HeroSectionType[];
  technology: {
    title: string;
    subtitle: string;
    features: {
      title: string;
      description: string;
      image: string;
    }[];
  };
};

const content: Record<Language, ContentType> = {
  zh: {
    products: [
      {
        id: 'mingqian-lion-peak-longjing',
        name: { zh: '明前獅峰龍井', en: 'Mingqian Lion Peak Longjing' },
        description: { zh: '明前獅峰龍井，扁平光滑，翠綠鮮潤', en: 'Mingqian Lion Peak Longjing, flat and smooth, emerald green and fresh' },
        price: 1388,
        originalPrice: undefined,
        thumbnail: '/images/longjing-premium.jpg',
        images: ['/images/longjing-premium.jpg'],
        category: 'green-tea' as const,
        status: 'active' as const,
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Hangzhou, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium', 'longjing'],
        isFeatured: true
      },
      {
        id: 'yuqian-longjing',
        name: { zh: '雨前龍井', en: 'Yuqian Longjing' },
        description: { zh: '雨前龍井，清香持久，回甘明顯', en: 'Yuqian Longjing, lasting fresh aroma, obvious aftertaste' },
        price: 498,
        originalPrice: undefined,
        thumbnail: '/images/longjing-yuqian.jpg',
        images: ['/images/longjing-yuqian.jpg'],
        category: 'green-tea' as const,
        status: 'active' as const,
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Hangzhou, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['longjing'],
        isFeatured: false
      },
      {
        id: 'taiwan-premium-ginseng-oolong',
        name: { zh: '台灣頂級人蔘烏龍', en: 'Taiwan Premium Ginseng Oolong' },
        description: { zh: '台灣頂級人蔘烏龍，香氣濃郁，滋味醇厚', en: 'Taiwan Premium Ginseng Oolong, rich aroma, mellow flavor' },
        price: 880,
        originalPrice: undefined,
        thumbnail: '/images/taiwan-ginseng-oolong.jpg',
        images: ['/images/taiwan-ginseng-oolong.jpg'],
        category: 'oolong-tea' as const,
        status: 'active' as const,
        isNew: true,
        specifications: {
          weight: '250g',
          origin: 'Taiwan',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium', 'taiwan', 'ginseng'],
        isFeatured: true
      },
      {
        id: 'monkey-pick-tieguanyin',
        name: { zh: '馬騮搣', en: 'Monkey Pick Tieguanyin' },
        description: { zh: '馬騮搣鐵觀音，手工採摘，品質優良', en: 'Monkey Pick Tieguanyin, hand-picked, excellent quality' },
        price: 268,
        originalPrice: undefined,
        thumbnail: '/images/monkey-pick-tieguanyin.jpg',
        images: ['/images/monkey-pick-tieguanyin.jpg'],
        category: 'oolong-tea' as const,
        status: 'active' as const,
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
        id: 'snow-bud-silver-needle',
        name: { zh: '雪芽銀針', en: 'Snow Bud Silver Needle' },
        description: { zh: '雪芽銀針，白茶極品，清香淡雅', en: 'Snow Bud Silver Needle, premium white tea, light and elegant' },
        price: 688,
        originalPrice: undefined,
        thumbnail: '/images/snow-bud-silver-needle.jpg',
        images: ['/images/snow-bud-silver-needle.jpg'],
        category: 'white-tea' as const,
        status: 'active' as const,
        isNew: true,
        specifications: {
          weight: '100g',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium', 'white-tea'],
        isFeatured: true
      },
      {
        id: 'phoenix-dancong-duck-shit',
        name: { zh: '鳳凰單叢 鴨屎香', en: 'Phoenix Dancong Duck Shit Aroma' },
        description: { zh: '鳳凰單叢鴨屎香，香氣獨特，韻味悠長', en: 'Phoenix Dancong Duck Shit Aroma, unique aroma, lasting aftertaste' },
        price: 398,
        originalPrice: undefined,
        thumbnail: '/images/phoenix-dancong.jpg',
        images: ['/images/phoenix-dancong.jpg'],
        category: 'oolong-tea' as const,
        status: 'active' as const,
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Guangdong, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['dancong', 'phoenix'],
        isFeatured: false
      },
      {
        id: 'arbor-pu-erh',
        name: { zh: '喬木普洱', en: 'Arbor Pu-erh' },
        description: { zh: '喬木普洱，陳香濃郁，滋味醇厚', en: 'Arbor Pu-erh, rich aged aroma, mellow flavor' },
        price: 598,
        originalPrice: undefined,
        thumbnail: '/images/arbor-pu-erh.jpg',
        images: ['/images/arbor-pu-erh.jpg'],
        category: 'pu-erh' as const,
        status: 'active' as const,
        isNew: false,
        specifications: {
          weight: '357g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['arbor', 'pu-erh'],
        isFeatured: false
      },
      {
        id: 'osmanthus-oolong-tea-bags',
        name: { zh: '桂花烏龍茶包', en: 'Osmanthus Oolong Tea Bags' },
        description: { zh: '桂花烏龍茶包，花香濃郁，方便沖泡', en: 'Osmanthus Oolong Tea Bags, rich floral aroma, convenient brewing' },
        price: 88,
        originalPrice: undefined,
        thumbnail: '/images/osmanthus-oolong-bags.jpg',
        images: ['/images/osmanthus-oolong-bags.jpg'],
        category: 'tea-bags' as const,
        status: 'active' as const,
        isNew: false,
        specifications: {
          weight: '50 bags',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['tea-bags', 'osmanthus'],
        isFeatured: false
      },
      {
        id: 'linden-honey',
        name: { zh: '紫椴蜂蜜', en: 'Linden Honey' },
        description: { zh: '紫椴蜂蜜，花香濃郁，營養豐富', en: 'Linden Honey, rich floral aroma, highly nutritious' },
        price: 180,
        originalPrice: undefined,
        thumbnail: '/images/linden-honey.jpg',
        images: ['/images/linden-honey.jpg'],
        category: 'honey-product' as const,
        status: 'active' as const,
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
      }
    ],
    heroSections: [
      {
        headline: '歡迎來到烘茶源',
        subheadline: '體驗30年專業經驗精心挑選的優質茶葉和有機蜂蜜。',
        button: '立即選購',
        leafColor: '#8fc7a2',
        bg: 'from-darkgreen-700 via-darkgreen-800 to-darkgreen-900',
        bgImage: '/images/hero-1.jpg'
      }
    ],
    technology: {
      title: 'TeaMag™ 沖泡技術',
      subtitle: '精準研磨，密封鎖定系統。兼容 Nespresso Original 和 Dolce Gusto 系統。',
      features: [
        {
          title: '精準研磨',
          description: '確保每一杯茶都保持最佳風味',
          image: '/images/grinding.jpg'
        },
        {
          title: '密封鎖定',
          description: '完美保存茶葉的新鮮度',
          image: '/images/sealing.jpg'
        },
        {
          title: '智能沖泡',
          description: '恆定沖泡溫度，高壓泵和預浸泡功能',
          image: '/images/brewing.jpg'
        }
      ]
    }
  },
  en: {
    products: [
      {
        id: 'mingqian-lion-peak-longjing',
        name: { zh: '明前獅峰龍井', en: 'Mingqian Lion Peak Longjing' },
        description: { zh: '明前獅峰龍井，扁平光滑，翠綠鮮潤', en: 'Mingqian Lion Peak Longjing, flat and smooth, emerald green and fresh' },
        price: 1388,
        originalPrice: undefined,
        thumbnail: '/images/longjing-premium.jpg',
        images: ['/images/longjing-premium.jpg'],
        category: 'green-tea' as const,
        status: 'active' as const,
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Hangzhou, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium', 'longjing'],
        isFeatured: true
      },
      {
        id: 'yuqian-longjing',
        name: { zh: '雨前龍井', en: 'Yuqian Longjing' },
        description: { zh: '雨前龍井，清香持久，回甘明顯', en: 'Yuqian Longjing, lasting fresh aroma, obvious aftertaste' },
        price: 498,
        originalPrice: undefined,
        thumbnail: '/images/longjing-yuqian.jpg',
        images: ['/images/longjing-yuqian.jpg'],
        category: 'green-tea' as const,
        status: 'active' as const,
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Hangzhou, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['longjing'],
        isFeatured: false
      },
      {
        id: 'taiwan-premium-ginseng-oolong',
        name: { zh: '台灣頂級人蔘烏龍', en: 'Taiwan Premium Ginseng Oolong' },
        description: { zh: '台灣頂級人蔘烏龍，香氣濃郁，滋味醇厚', en: 'Taiwan Premium Ginseng Oolong, rich aroma, mellow flavor' },
        price: 880,
        originalPrice: undefined,
        thumbnail: '/images/taiwan-ginseng-oolong.jpg',
        images: ['/images/taiwan-ginseng-oolong.jpg'],
        category: 'oolong-tea' as const,
        status: 'active' as const,
        isNew: true,
        specifications: {
          weight: '250g',
          origin: 'Taiwan',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium', 'taiwan', 'ginseng'],
        isFeatured: true
      },
      {
        id: 'monkey-pick-tieguanyin',
        name: { zh: '馬騮搣', en: 'Monkey Pick Tieguanyin' },
        description: { zh: '馬騮搣鐵觀音，手工採摘，品質優良', en: 'Monkey Pick Tieguanyin, hand-picked, excellent quality' },
        price: 268,
        originalPrice: undefined,
        thumbnail: '/images/monkey-pick-tieguanyin.jpg',
        images: ['/images/monkey-pick-tieguanyin.jpg'],
        category: 'oolong-tea' as const,
        status: 'active' as const,
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
        id: 'snow-bud-silver-needle',
        name: { zh: '雪芽銀針', en: 'Snow Bud Silver Needle' },
        description: { zh: '雪芽銀針，白茶極品，清香淡雅', en: 'Snow Bud Silver Needle, premium white tea, light and elegant' },
        price: 688,
        originalPrice: undefined,
        thumbnail: '/images/snow-bud-silver-needle.jpg',
        images: ['/images/snow-bud-silver-needle.jpg'],
        category: 'white-tea' as const,
        status: 'active' as const,
        isNew: true,
        specifications: {
          weight: '100g',
          origin: 'Fujian, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['premium', 'white-tea'],
        isFeatured: true
      },
      {
        id: 'phoenix-dancong-duck-shit',
        name: { zh: '鳳凰單叢 鴨屎香', en: 'Phoenix Dancong Duck Shit Aroma' },
        description: { zh: '鳳凰單叢鴨屎香，香氣獨特，韻味悠長', en: 'Phoenix Dancong Duck Shit Aroma, unique aroma, lasting aftertaste' },
        price: 398,
        originalPrice: undefined,
        thumbnail: '/images/phoenix-dancong.jpg',
        images: ['/images/phoenix-dancong.jpg'],
        category: 'oolong-tea' as const,
        status: 'active' as const,
        isNew: false,
        specifications: {
          weight: '250g',
          origin: 'Guangdong, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['dancong', 'phoenix'],
        isFeatured: false
      },
      {
        id: 'arbor-pu-erh',
        name: { zh: '喬木普洱', en: 'Arbor Pu-erh' },
        description: { zh: '喬木普洱，陳香濃郁，滋味醇厚', en: 'Arbor Pu-erh, rich aged aroma, mellow flavor' },
        price: 598,
        originalPrice: undefined,
        thumbnail: '/images/arbor-pu-erh.jpg',
        images: ['/images/arbor-pu-erh.jpg'],
        category: 'pu-erh' as const,
        status: 'active' as const,
        isNew: false,
        specifications: {
          weight: '357g',
          origin: 'Yunnan, China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['arbor', 'pu-erh'],
        isFeatured: false
      },
      {
        id: 'osmanthus-oolong-tea-bags',
        name: { zh: '桂花烏龍茶包', en: 'Osmanthus Oolong Tea Bags' },
        description: { zh: '桂花烏龍茶包，花香濃郁，方便沖泡', en: 'Osmanthus Oolong Tea Bags, rich floral aroma, convenient brewing' },
        price: 88,
        originalPrice: undefined,
        thumbnail: '/images/osmanthus-oolong-bags.jpg',
        images: ['/images/osmanthus-oolong-bags.jpg'],
        category: 'tea-bags' as const,
        status: 'active' as const,
        isNew: false,
        specifications: {
          weight: '50 bags',
          origin: 'China',
          storage: 'Store in a cool, dry place',
          expiryDate: '24 months'
        },
        stock: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['tea-bags', 'osmanthus'],
        isFeatured: false
      },
      {
        id: 'linden-honey',
        name: { zh: '紫椴蜂蜜', en: 'Linden Honey' },
        description: { zh: '紫椴蜂蜜，花香濃郁，營養豐富', en: 'Linden Honey, rich floral aroma, highly nutritious' },
        price: 180,
        originalPrice: undefined,
        thumbnail: '/images/linden-honey.jpg',
        images: ['/images/linden-honey.jpg'],
        category: 'honey-product' as const,
        status: 'active' as const,
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
      }
    ],
    heroSections: [
      {
        headline: '歡迎來到烘茶源',
        subheadline: '體驗30年專業經驗精心挑選的優質茶葉和有機蜂蜜。',
        button: '立即選購',
        leafColor: '#8fc7a2',
        bg: 'from-darkgreen-700 via-darkgreen-800 to-darkgreen-900',
        bgImage: '/images/hero-1.jpg'
      }
    ],
    technology: {
      title: 'TeaMag™ Brewing',
      subtitle: 'Precision grinding, seal & lock system. Compatible with Nespresso Original & Dolce Gusto system.',
      features: [
        {
          title: 'Precision Grinding',
          description: 'Ensures optimal flavor in every cup',
          image: '/images/grinding.jpg'
        },
        {
          title: 'Seal & Lock',
          description: 'Perfectly preserves tea freshness',
          image: '/images/sealing.jpg'
        },
        {
          title: 'Smart Brewing',
          description: 'Consistent brewing temperature, high pressure pump and pre-infusion function',
          image: '/images/brewing.jpg'
        }
      ]
    }
  }
};

// Lazy load the ProductCard component with a smaller loading placeholder
const ProductCard = dynamic(() => import('@/components/ProductCard'), {
  loading: () => <div className="w-full aspect-square bg-gray-100 animate-pulse rounded-xl" />,
  ssr: false
});

// Lazy load the TechnologyFeature component with a smaller loading placeholder
const TechnologyFeature = dynamic(() => import('@/components/TechnologyFeature'), {
  loading: () => <div className="w-full h-64 bg-gray-100 animate-pulse rounded-xl" />,
  ssr: false
});

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
            priority={true}
            quality={90}
            loading="eager"
            onError={(e) => {
              console.error('Error loading hero image:', e);
              const target = e.target as HTMLImageElement;
              target.src = '/images/placeholder.jpg';
            }}
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

function VideoCarousel() {
  const [videoError, setVideoError] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState('');

  const videoId = 'q_rAB87mXPY';
  const fallbackImage = '/images/hero-1.jpg';

  // Set YouTube URL on client side to avoid SSR issues
  useEffect(() => {
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const url = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=${encodeURIComponent(origin)}`;
    setYoutubeUrl(url);
  }, []);

  const handleVideoLoad = () => {
    setVideoLoading(false);
    setVideoLoaded(true);
    console.log('YouTube video loaded successfully');
  };

  const handleVideoError = () => {
    console.error('YouTube video error, switching to fallback');
    setVideoError(true);
    setVideoLoading(false);
    setVideoLoaded(false);
  };

  // Fallback to image if video fails to load after 10 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!videoLoaded && !videoError) {
        console.log('Video loading timeout, switching to fallback');
        setVideoError(true);
        setVideoLoading(false);
      }
    }, 10000);

    return () => clearTimeout(timeout);
  }, [videoLoaded, videoError]);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden bg-black">
      {/* Loading state */}
      {videoLoading && !videoError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          <div className="text-white text-lg">Loading video...</div>
        </div>
      )}
      
      {/* YouTube Video Display */}
      {!videoError && youtubeUrl ? (
        <div className="absolute top-0 left-0 w-full h-full">
          <iframe
            src={youtubeUrl}
            title="HK Tea Factory Banner"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={handleVideoLoad}
            onError={handleVideoError}
          />
        </div>
      ) : (
        <Image
          src={fallbackImage}
          alt="Hero"
          fill
          className="absolute top-0 left-0 w-full h-full object-contain"
          priority
        />
      )}
    </div>
  );
}

// Update ProductDetailPopup component
function ProductDetailPopup({ 
  product, 
  language, 
  onClose 
}: { 
  product: Product; 
  language: Language; 
  onClose: () => void;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row"
        onClick={e => e.stopPropagation()}
      >
        {/* Product Image */}
        <div className="relative w-full md:w-1/2 aspect-square">
          {imageError ? (
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          ) : (
            <Image
              src={product.thumbnail}
              alt={product.name[language]}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              onError={() => setImageError(true)}
            />
          )}
          {product.isNew && (
            <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              {language === 'zh' ? '新品上市' : 'New'}
            </div>
          )}
          {product.originalPrice && (
            <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              {language === 'zh' ? '特價優惠' : 'Sale'}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
          <div className="flex-1">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              {product.name[language]}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {product.description[language]}
            </p>
            <div className="flex items-baseline gap-4 mb-8">
              {product.originalPrice ? (
                <>
                  <span className="text-2xl font-bold text-rose-600">
                    ${product.price}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                </>
              ) : (
                <span className="text-2xl font-bold text-gray-900">
                  ${product.price}
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4">
            <button
              className="w-full bg-emerald-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-emerald-700 transition-colors duration-300"
              disabled={product.stock === 0}
            >
              {product.stock === 0 ? (language === 'zh' ? '已售罄' : 'Sold Out') : (language === 'zh' ? '加入購物車' : 'Add to Cart')}
            </button>
            <button
              className="w-full border-2 border-gray-300 text-gray-600 px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors duration-300"
              onClick={onClose}
            >
              {language === 'zh' ? '關閉' : 'Close'}
            </button>
          </div>
        </div>

        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          onClick={onClose}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'zh'>('zh');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCart();
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleSlideChange = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 4);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 4) % 4);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen">
      <div className="relative">
        {/* Video Carousel Section */}
        <VideoCarousel />

        {/* Content Slider Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-200 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-200 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-teal-200 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-serif font-bold text-gray-900 mb-6"
              >
                我們的特色服務
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                探索烘茶源的獨特魅力，體驗傳統與現代的完美結合
              </motion.p>
            </div>

            <div className="relative">
              {/* Slider Content */}
              <div className="overflow-hidden rounded-3xl shadow-2xl bg-white/80 backdrop-blur-sm">
                <div 
                  className="flex transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {/* Slide 1 - Premium Tea Selection */}
                  <div className="w-full flex-shrink-0">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="p-16 pl-24 pr-24 flex flex-col justify-center space-y-8">
                        <div className="space-y-6">
                          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                            精選系列
                          </div>
                          <h3 className="text-5xl font-serif font-bold text-gray-900 leading-tight">
                            精選優質茶葉
                          </h3>
                          <p className="text-xl text-gray-600 leading-relaxed">
                            嚴選來自中國各大茶區的頂級茶葉，每一片茶葉都經過精心挑選，為您帶來最純正的茶香體驗。
                          </p>
                          <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="flex items-center space-x-3 p-4 bg-emerald-50 rounded-xl">
                              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="font-medium text-gray-700">有機認證</span>
                            </div>
                            <div className="flex items-center space-x-3 p-4 bg-emerald-50 rounded-xl">
                              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="font-medium text-gray-700">品質保證</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative h-full min-h-[500px] bg-gradient-to-br from-emerald-100 to-green-100 flex items-center justify-center">
                        <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-emerald-200 to-green-200 shadow-2xl overflow-hidden">
                          <Image
                            src="/images/placeholder.png"
                            alt="Premium Tea Selection"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-300 rounded-full opacity-20"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-300 rounded-full opacity-20"></div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 2 - Traditional Craftsmanship */}
                  <div className="w-full flex-shrink-0">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="p-16 pl-24 pr-24 flex flex-col justify-center space-y-8">
                        <div className="space-y-6">
                          <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
                            <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                            傳統工藝
                          </div>
                          <h3 className="text-5xl font-serif font-bold text-gray-900 leading-tight">
                            傳統工藝傳承
                          </h3>
                          <p className="text-xl text-gray-600 leading-relaxed">
                            傳承千年茶道精髓，結合現代科技，每一道工序都嚴格把關，確保茶葉的最佳品質和風味。
                          </p>
                          <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="flex items-center space-x-3 p-4 bg-amber-50 rounded-xl">
                              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="font-medium text-gray-700">手工製作</span>
                            </div>
                            <div className="flex items-center space-x-3 p-4 bg-amber-50 rounded-xl">
                              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="font-medium text-gray-700">古法工藝</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative h-full min-h-[500px] bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                        <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-amber-200 to-orange-200 shadow-2xl overflow-hidden">
                          <Image
                            src="/images/placeholder.png"
                            alt="Traditional Craftsmanship"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-300 rounded-full opacity-20"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-300 rounded-full opacity-20"></div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 3 - Gift Collections */}
                  <div className="w-full flex-shrink-0">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="p-16 pl-24 pr-24 flex flex-col justify-center space-y-8">
                        <div className="space-y-6">
                          <div className="inline-flex items-center px-4 py-2 bg-rose-100 text-rose-800 rounded-full text-sm font-medium mb-4">
                            <span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span>
                            禮盒系列
                          </div>
                          <h3 className="text-5xl font-serif font-bold text-gray-900 leading-tight">
                            精美禮盒系列
                          </h3>
                          <p className="text-xl text-gray-600 leading-relaxed">
                            為您量身定制獨一無二的茶葉禮盒，無論是送禮還是自用，都能感受到我們的用心與誠意。
                          </p>
                          <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="flex items-center space-x-3 p-4 bg-rose-50 rounded-xl">
                              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="font-medium text-gray-700">個性定制</span>
                            </div>
                            <div className="flex items-center space-x-3 p-4 bg-rose-50 rounded-xl">
                              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="font-medium text-gray-700">精美包裝</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative h-full min-h-[500px] bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
                        <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-rose-200 to-pink-200 shadow-2xl overflow-hidden">
                          <Image
                            src="/images/placeholder.png"
                            alt="Gift Collections"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-rose-300 rounded-full opacity-20"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-300 rounded-full opacity-20"></div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 4 - Tea Culture Experience */}
                  <div className="w-full flex-shrink-0">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="p-16 pl-24 pr-24 flex flex-col justify-center space-y-8">
                        <div className="space-y-6">
                          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                            文化體驗
                          </div>
                          <h3 className="text-5xl font-serif font-bold text-gray-900 leading-tight">
                            茶文化體驗
                          </h3>
                          <p className="text-xl text-gray-600 leading-relaxed">
                            深入體驗中國傳統茶文化，從茶藝表演到茶道教學，讓您感受茶葉背後的深厚文化底蘊。
                          </p>
                          <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="flex items-center space-x-3 p-4 bg-indigo-50 rounded-xl">
                              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="font-medium text-gray-700">茶藝表演</span>
                            </div>
                            <div className="flex items-center space-x-3 p-4 bg-indigo-50 rounded-xl">
                              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="font-medium text-gray-700">文化傳承</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative h-full min-h-[500px] bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                        <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-indigo-200 to-purple-200 shadow-2xl overflow-hidden">
                          <Image
                            src="/images/placeholder.png"
                            alt="Tea Culture Experience"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-300 rounded-full opacity-20"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-300 rounded-full opacity-20"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Slider Navigation */}
              <div className="flex justify-center mt-12 space-x-4">
                {[0, 1, 2, 3].map((index) => (
                  <button
                    key={index}
                    onClick={() => handleSlideChange(index)}
                    className={`w-5 h-5 rounded-full transition-all duration-300 transform hover:scale-110 ${
                      index === currentSlide 
                        ? 'bg-emerald-600 scale-125 shadow-lg' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              {/* Enhanced Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 z-20"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 z-20"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section id="featured-products" className="py-32 bg-gradient-to-b from-white to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-serif font-bold text-gray-900 mb-8 tracking-wide">
                熱賣產品
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light tracking-wide">
                探索我們精心挑選的優質茶葉和茶具系列
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content[language].products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
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
                        alt={product.name[language]}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    {product.isNew && (
                      <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                        {language === 'zh' ? '新品' : 'New'}
                      </div>
                    )}
                    {product.isFeatured && (
                      <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                        {language === 'zh' ? '熱賣' : 'Hot'}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name[language]}</h3>
                    <p className="text-gray-600 mb-4">{product.description[language]}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-emerald-600">
                        ${product.price}
                      </span>
                      <button
                        onClick={() => handleProductClick(product)}
                        className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors duration-300"
                      >
                        {language === 'zh' ? '查看詳情' : 'View Details'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-20"
            >
              <Link 
                href="/products"
                className="inline-block bg-emerald-600 text-white px-16 py-5 rounded-full text-xl font-medium hover:bg-emerald-700 transition-colors duration-300 shadow-xl"
              >
                瀏覽所有產品
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Six Categories of Tea Section */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-serif font-bold text-gray-900 mb-8 tracking-wide">
                產品類別總覽
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light tracking-wide">
                深入了解中國傳統茶類，品味千年茶文化
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Green Tea */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative w-full aspect-square mb-6 rounded-xl overflow-hidden shadow-lg">
                  <motion.div
                    className="w-full h-full"
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Image
                      src="/images/green-tea.jpg"
                      alt="綠茶"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
                <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">綠茶</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  綠茶是一種不發酵茶。綠茶類的品質特徵：「三綠」，乾茶綠、茶湯綠、葉底綠。內質上要求香氣高爽，滋味鮮醇。市場上常見的名優綠茶有西湖龍井、黃山毛峰、洞庭碧螺春、六安瓜片、信陽毛尖、太平猴魁、廬山雲霧、四川蒙頂、等等。
                </p>
              </motion.div>

              {/* White Tea */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative w-full aspect-square mb-6 rounded-xl overflow-hidden shadow-lg">
                  <motion.div
                    className="w-full h-full"
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Image
                      src="/images/white-tea.jpg"
                      alt="白茶"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
                <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">白茶</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  白茶屬微發酵茶。白茶的品質特徵：以白牡丹為代表，外形芽葉連枝，兩葉合抱心，綠葉夾銀芽，形似牡丹花朵，故稱白牡丹。內質香氣清鮮，毫香顯，滋味鮮醇，湯色杏黃而滋味甘甜。白茶主要產於福建省的福鼎、政和、松溪和建陽等。
                </p>
              </motion.div>

              {/* Flower Tea */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative w-full aspect-square mb-6 rounded-xl overflow-hidden shadow-lg">
                  <motion.div
                    className="w-full h-full"
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Image
                      src="/images/flower-tea.jpg"
                      alt="花茶"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
                <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">花茶</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  獨特的花香不經烘焙直接溶入葉子中，清新芬芳開放大方，飲後餘韻長存
                </p>
              </motion.div>

              {/* Black Tea */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative w-full aspect-square mb-6 rounded-xl overflow-hidden shadow-lg">
                  <motion.div
                    className="w-full h-full"
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Image
                      src="/images/dark-tea.jpg"
                      alt="紅茶"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
                <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">紅茶</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  紅茶是全發酵茶。茶葉在製作過程中經過發酵，茶多酚氧化，形成茶黃素、茶紅素等，使茶葉色澤烏黑，茶湯呈紅色。紅茶茶性溫和，具有暖胃、助消化的功效。常見的紅茶有祁門紅茶、滇紅、正山小種等。
                </p>
              </motion.div>

              {/* Oolong Tea */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative w-full aspect-square mb-6 rounded-xl overflow-hidden shadow-lg">
                  <motion.div
                    className="w-full h-full"
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Image
                      src="/images/blue-tea.jpg"
                      alt="青茶"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
                <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">青茶</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  青茶（烏龍茶）是半發酵茶。它結合了綠茶的清香和紅茶的醇厚，茶葉在製作過程中經過部分發酵，因此具有獨特的風味。青茶的茶性介於綠茶和紅茶之間，不寒不熱，適合各種體質的人飲用。著名的青茶有鐵觀音、大紅袍、凍頂烏龍等。
                </p>
              </motion.div>

              {/* Dark Tea */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative w-full aspect-square mb-6 rounded-xl overflow-hidden shadow-lg">
                  <motion.div
                    className="w-full h-full"
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Image
                      src="/images/black-tea.jpg"
                      alt="黑茶"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
                <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">黑茶</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  黑茶是後發酵茶。其獨特之處在於茶葉在殺青、揉捻後，堆積發酵，形成特殊的風味和色澤。黑茶的茶性溫和，具有降脂、助消化、暖胃的功效，適合長期飲用。最著名的黑茶是普洱茶。
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Remaining Hero Sections */}
        {content[language].heroSections.slice(1).map((section, idx) => (
          <div key={idx + 1}>
            <HeroSection
              section={section}
              idx={idx + 1}
              sectionRef={(el) => (sectionRefs.current[idx + 1] = el)}
            />
          </div>
        ))}

        {/* Product Detail Popup */}
        {selectedProduct && (
          <AnimatePresence>
            <ProductDetailPopup
              product={selectedProduct}
              language={language}
              onClose={() => setSelectedProduct(null)}
            />
          </AnimatePresence>
        )}

        {/* Cart Button */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 right-24 bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:bg-emerald-700 transition-colors duration-300 z-30"
        >
          <div className="relative">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>
        </button>

        {/* Cart Component */}
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>

      {/* Footer */}
      {/*
      <footer className="bg-darkgreen-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <div className="relative w-40 h-16 mb-8">
                <h3 className="text-3xl font-serif font-bold text-white tracking-wider">烘茶源</h3>
              </div>
              <p className="text-lg text-gray-300 mb-8 tracking-wide">傳承茶道精髓，品味生活真諦</p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-8 tracking-wide">聯絡我們</h3>
              <ul className="space-y-4 text-lg text-gray-300">
                <li className="flex items-center space-x-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+852 1234 5678</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@hkteafactory.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>香港中環德輔道中123號</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>10:00 - 19:00</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-8 tracking-wide">快速連結</h3>
              <ul className="space-y-4 text-lg text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">關於我們</a></li>
                <li><a href="#" className="hover:text-white transition-colors">產品系列</a></li>
                <li><a href="#" className="hover:text-white transition-colors">茶道文化</a></li>
                <li><a href="#" className="hover:text-white transition-colors">常見問題</a></li>
                <li><a href="#" className="hover:text-white transition-colors">隱私政策</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p className="text-lg">&copy; {new Date().getFullYear()} 烘茶源. All rights reserved.</p>
          </div>
        </div>
      </footer>
      */}
    </main>
  );
}
