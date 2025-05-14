'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import type { Language } from '@/app/types';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { useCart } from '@/app/context/CartContext';
import Cart from '@/components/Cart';

type Product = {
  name: string;
  img: string;
  desc: string;
  price: string;
  salePrice?: string;
  isNew?: boolean;
  isSale?: boolean;
  unit?: string;
  soldOut?: boolean;
};

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
        name: '多功能茶機',
        desc: '買茶機送9盒茶',
        price: 'HK$1,999.00',
        img: '/images/tea-machine.jpg',
        isNew: true,
        soldOut: true
      },
      {
        name: '桂花薏米茶',
        desc: '新品上市',
        price: 'HK$119.00',
        img: '/images/osmanthus-coix.jpg',
        isNew: true
      },
      {
        name: '凍齡茶',
        desc: '養顏抗衰老',
        price: 'HK$119.00',
        img: '/images/anti-aging.jpg'
      },
      {
        name: '茉莉龍珠',
        desc: '清香怡人',
        price: 'HK$99.00',
        img: '/images/jasmine-pearl.jpg'
      },
      {
        name: '煎茶',
        desc: '清新淡雅',
        price: 'HK$99.00',
        img: '/images/sencha.jpg',
        soldOut: true
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
      },
      {
        headline: '西湖龍井',
        subheadline: '明前龍井，一芽一葉，清香持久，回甘生津。',
        button: '了解更多',
        leafColor: '#388d54',
        bg: 'from-darkgreen-800 via-darkgreen-900 to-darkgreen-700',
        bgImage: '/images/hero-2.jpg'
      },
      {
        headline: '安溪鐵觀音',
        subheadline: '濃香型鐵觀音，七泡有餘香，醇厚回甘。',
        button: '立即選購',
        leafColor: '#c3e3ce',
        bg: 'from-darkgreen-900 via-darkgreen-700 to-darkgreen-800',
        bgImage: '/images/hero-3.jpg'
      },
      {
        headline: '紫椴蜂蜜',
        subheadline: '來自東北原始森林的天然紫椴蜂蜜，清香怡人，營養豐富。',
        button: '探索蜂蜜',
        leafColor: '#5ba976',
        bg: 'from-darkgreen-700 via-darkgreen-900 to-darkgreen-800',
        bgImage: '/images/hero-4.jpg'
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
        name: 'Genie Multifunctional Tea Machine',
        desc: 'Buy Genie Tea Machine Get 9 Boxes of Tea',
        price: 'HK$1,999.00',
        img: '/images/tea-machine.jpg',
        isNew: true,
        soldOut: true
      },
      {
        name: 'Osmanthus Coix Seed',
        desc: 'New In',
        price: 'HK$119.00',
        img: '/images/osmanthus-coix.jpg',
        isNew: true
      },
      {
        name: 'Freeze Your Age',
        desc: 'Anti-aging Tea',
        price: 'HK$119.00',
        img: '/images/anti-aging.jpg'
      },
      {
        name: 'Dragon Pearl Jasmine',
        desc: 'Fragrant & Refreshing',
        price: 'HK$99.00',
        img: '/images/jasmine-pearl.jpg'
      },
      {
        name: 'Sencha',
        desc: 'Fresh & Delicate',
        price: 'HK$99.00',
        img: '/images/sencha.jpg',
        soldOut: true
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
      },
      {
        headline: '西湖龍井',
        subheadline: '明前龍井，一芽一葉，清香持久，回甘生津。',
        button: '了解更多',
        leafColor: '#388d54',
        bg: 'from-darkgreen-800 via-darkgreen-900 to-darkgreen-700',
        bgImage: '/images/hero-2.jpg'
      },
      {
        headline: '安溪鐵觀音',
        subheadline: '濃香型鐵觀音，七泡有餘香，醇厚回甘。',
        button: '立即選購',
        leafColor: '#c3e3ce',
        bg: 'from-darkgreen-900 via-darkgreen-700 to-darkgreen-800',
        bgImage: '/images/hero-3.jpg'
      },
      {
        headline: '紫椴蜂蜜',
        subheadline: '來自東北原始森林的天然紫椴蜂蜜，清香怡人，營養豐富。',
        button: '探索蜂蜜',
        leafColor: '#5ba976',
        bg: 'from-darkgreen-700 via-darkgreen-900 to-darkgreen-800',
        bgImage: '/images/hero-4.jpg'
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

function VideoCarousel() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [useFallback, setUseFallback] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const backgroundVideoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  const videos = [
    {
      src: '/videos/tearotate.mp4',
      type: 'video/mp4',
      fallback: '/images/hero-1.jpg'
    },
    {
      src: '/videos/longjing.mov',
      type: 'video/quicktime',
      fallback: '/images/hero-2.jpg'
    },
    {
      src: '/videos/tieguanyin.mov',
      type: 'video/quicktime',
      fallback: '/images/hero-3.jpg'
    },
    {
      src: '/videos/honey.mp4',
      type: 'video/mp4',
      fallback: '/images/hero-4.jpg'
    }
  ];

  const handleShopNow = () => {
    const featuredSection = document.getElementById('featured-products');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const loadNextVideo = () => {
    setIsVideoLoaded(false);
    setUseFallback(false);
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  useEffect(() => {
    const video = videoRef.current;
    const bgVideo = backgroundVideoRef.current;

    if (!video || !bgVideo) return;

    const handleVideoLoad = () => {
      setIsVideoLoaded(true);
      video.play().catch(() => {
        console.log('Video play failed, switching to fallback');
        setUseFallback(true);
      });
    };

    const handleVideoError = () => {
      console.log('Video error, switching to fallback');
      setUseFallback(true);
    };

    const handleVideoEnd = () => {
      loadNextVideo();
    };

    // Set up event listeners
    video.addEventListener('loadeddata', handleVideoLoad);
    video.addEventListener('error', handleVideoError);
    video.addEventListener('ended', handleVideoEnd);
    bgVideo.addEventListener('error', handleVideoError);

    // Clean up event listeners
    return () => {
      video.removeEventListener('loadeddata', handleVideoLoad);
      video.removeEventListener('error', handleVideoError);
      video.removeEventListener('ended', handleVideoEnd);
      bgVideo.removeEventListener('error', handleVideoError);
    };
  }, [currentVideo]);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Video/Image with Blur */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 backdrop-blur-[10px] bg-black/30">
            {useFallback ? (
              <Image
                src={videos[currentVideo].fallback}
                alt="Background"
                fill
                className="object-cover scale-110"
                style={{ 
                  filter: 'blur(10px)',
                  transform: 'scale(1.1)',
                  transition: 'transform 0.3s ease-out'
                }}
                priority
              />
            ) : (
              <video
                ref={backgroundVideoRef}
                key={`bg-${currentVideo}`}
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover scale-110"
                style={{ 
                  filter: 'blur(10px)',
                  transform: 'scale(1.1)',
                  transition: 'transform 0.3s ease-out'
                }}
              >
                <source 
                  src={videos[currentVideo].src} 
                  type={videos[currentVideo].type} 
                />
              </video>
            )}
          </div>
        </div>
      </div>

      {/* Video/Image Overlay */}
      <div className="absolute inset-0 z-10">
        {useFallback ? (
          <Image
            src={videos[currentVideo].fallback}
            alt="Hero"
            fill
            className="object-cover"
            style={{
              transform: 'scale(0.8)',
              transition: 'transform 0.3s ease-out'
            }}
            priority
          />
        ) : (
          <video
            ref={videoRef}
            key={`video-${currentVideo}`}
            autoPlay
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{
              transform: 'scale(0.8)',
              transition: 'transform 0.3s ease-out'
            }}
          >
            <source 
              src={videos[currentVideo].src} 
              type={videos[currentVideo].type} 
            />
            您的瀏覽器不支持視頻播放。
          </video>
        )}
      </div>

      {/* Loading Indicator */}
      {!isVideoLoaded && !useFallback && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/50">
          <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 z-20" />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative z-30 h-full flex items-center justify-center text-center px-4"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-5xl relative"
        >
          <div className="relative w-64 h-20 mb-12 mx-auto">
            <h1 className="text-5xl font-serif font-bold text-white tracking-wider relative z-10">
              <span className="relative z-10" style={{ textShadow: '0 0 20px rgba(52, 211, 153, 0.5), 0 0 40px rgba(52, 211, 153, 0.3)' }}>
                烘茶源
              </span>
            </h1>
          </div>
          <motion.p 
            className="text-2xl md:text-3xl text-white/90 mb-16 font-light tracking-wider relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="relative z-10" style={{ textShadow: '0 0 15px rgba(52, 211, 153, 0.4), 0 0 30px rgba(52, 211, 153, 0.2)' }}>
              傳承茶道精髓，品味生活真諦
            </span>
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleShopNow}
            className="relative bg-white text-emerald-800 px-16 py-5 rounded-full text-xl font-medium hover:bg-emerald-50 transition-all duration-300 shadow-xl overflow-hidden"
          >
            <span className="relative z-10">
              立即探索
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

// Update ProductDetailPopup component
function ProductDetailPopup({ 
  product, 
  onClose 
}: { 
  product: Product; 
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
              src={product.img}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              onError={() => setImageError(true)}
            />
          )}
          {product.isNew && (
            <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              新品上市
            </div>
          )}
          {product.isSale && (
            <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              特價優惠
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
          <div className="flex-1">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              {product.name}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {product.desc}
            </p>
            <div className="flex items-baseline gap-4 mb-8">
              {product.salePrice ? (
                <>
                  <span className="text-2xl font-bold text-rose-600">
                    {product.salePrice}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    {product.price}
                  </span>
                </>
              ) : (
                <span className="text-2xl font-bold text-gray-900">
                  {product.price}
                </span>
              )}
              {product.unit && (
                <span className="text-sm text-gray-500">
                  / {product.unit}
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4">
            <button
              className="w-full bg-emerald-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-emerald-700 transition-colors duration-300"
              disabled={product.soldOut}
            >
              {product.soldOut ? '已售罄' : '加入購物車'}
            </button>
            <button
              className="w-full border-2 border-gray-300 text-gray-600 px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors duration-300"
              onClick={onClose}
            >
              關閉
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
  const [language, setLanguage] = useState<Language>('en');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, content[language].heroSections.length);
  }, [language]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    const currentSection = sectionRefs.current.findIndex((ref) => {
      if (!ref) return false;
      const rect = ref.getBoundingClientRect();
      return scrollPosition >= rect.top && scrollPosition <= rect.bottom;
    });
    if (currentSection !== -1) {
      setActiveSection(currentSection);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (idx: number) => {
    sectionRefs.current[idx]?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <main className="min-h-screen">
      <div className="relative">
        {/* Video Carousel Section */}
        <VideoCarousel />

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
                精選產品
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light tracking-wide">
                探索我們精心挑選的優質茶葉和茶具系列
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: '多功能茶機',
                  desc: '買茶機送9盒茶',
                  price: 'HK$1,999.00',
                  img: '/images/tea-machine.jpg',
                  isNew: true,
                  soldOut: true
                },
                {
                  name: '桂花薏米茶',
                  desc: '新品上市',
                  price: 'HK$119.00',
                  img: '/images/osmanthus-coix.jpg',
                  isNew: true
                },
                {
                  name: '凍齡茶',
                  desc: '養顏抗衰老',
                  price: 'HK$119.00',
                  img: '/images/anti-aging.jpg'
                },
                {
                  name: '茉莉龍珠',
                  desc: '清香怡人',
                  price: 'HK$99.00',
                  img: '/images/jasmine-pearl.jpg'
                }
              ].map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => handleProductClick(product)}
                  className="cursor-pointer"
                >
                  <ProductCard product={product} language={language} />
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

        {/* Remaining Hero Sections */}
        {content[language].heroSections.slice(1).map((section, idx) => (
          <div key={idx + 1}>
            <HeroSection
              section={section}
              idx={idx + 1}
              sectionRef={(el) => (sectionRefs.current[idx + 1] = el)}
            />
            {idx === 0 && (
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
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                  >
                    <h2 className="text-5xl font-serif font-bold text-gray-900 mb-8 tracking-wide">
                      西湖龍井系列
                    </h2>
                    <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light tracking-wide">
                      明前龍井，一芽一葉，清香持久，回甘生津
                    </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      {
                        name: "特級龍井",
                        desc: "明前採摘，一芽一葉，清香持久",
                        price: "HK$ 298.00",
                        img: "/images/longjing-premium.jpg"
                      },
                      {
                        name: "一級龍井",
                        desc: "雨前採摘，一芽二葉，醇厚回甘",
                        price: "HK$ 198.00",
                        img: "/images/longjing-first.jpg"
                      },
                      {
                        name: "龍井禮盒",
                        desc: "特級龍井，精美包裝，送禮首選",
                        price: "HK$ 398.00",
                        img: "/images/longjing-gift.jpg"
                      },
                      {
                        name: "龍井組合裝",
                        desc: "特級龍井 + 一級龍井，雙重享受",
                        price: "HK$ 458.00",
                        img: "/images/longjing-combo.jpg"
                      }
                    ].map((product, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <ProductCard product={product} language={language} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.section>
            )}
            {idx === 1 && (
              <section className="py-24 bg-amber-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      安溪鐵觀音系列
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                      濃香型鐵觀音，七泡有餘香，醇厚回甘
                    </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      {
                        name: '特級鐵觀音',
                        desc: '濃香型，七泡有餘香，醇厚回甘',
                        price: 'HK$ 268.00',
                        img: '/images/tieguanyin-premium.jpg'
                      },
                      {
                        name: '一級鐵觀音',
                        desc: '清香型，五泡有餘香，清爽怡人',
                        price: 'HK$ 198.00',
                        img: '/images/tieguanyin-first.jpg'
                      },
                      {
                        name: '鐵觀音禮盒',
                        desc: '特級鐵觀音，精美包裝，送禮首選',
                        price: 'HK$ 368.00',
                        img: '/images/tieguanyin-gift.jpg'
                      },
                      {
                        name: '鐵觀音組合裝',
                        desc: '特級鐵觀音 + 一級鐵觀音，雙重享受',
                        price: 'HK$ 428.00',
                        img: '/images/tieguanyin-combo.jpg'
                      }
                    ].map((product, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <ProductCard product={product} language={language} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            )}
            {idx === 2 && (
              <section className="py-24 bg-rose-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      紫椴蜂蜜系列
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                      來自東北原始森林的天然紫椴蜂蜜，清香怡人，營養豐富
                    </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      {
                        name: '特級紫椴蜂蜜',
                        desc: '純天然，無添加，清香怡人',
                        price: 'HK$ 198.00',
                        img: '/images/honey-premium.jpg'
                      },
                      {
                        name: '蜂蜜組合裝',
                        desc: '紫椴蜂蜜 + 龍眼蜜，營養加倍',
                        price: 'HK$ 298.00',
                        img: '/images/honey-combo.jpg'
                      },
                      {
                        name: '蜂蜜禮盒',
                        desc: '特級紫椴蜂蜜，精美包裝，送禮首選',
                        price: 'HK$ 268.00',
                        img: '/images/honey-gift.jpg'
                      },
                      {
                        name: '蜂蜜家庭裝',
                        desc: '大容量，經濟實惠，全家共享',
                        price: 'HK$ 398.00',
                        img: '/images/honey-family.jpg'
                      }
                    ].map((product, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <ProductCard product={product} language={language} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </div>
        ))}

        {/* Product Detail Popup */}
        {selectedProduct && (
          <AnimatePresence>
            <ProductDetailPopup
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />
          </AnimatePresence>
        )}

        {/* Cart Button */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 right-6 bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:bg-emerald-700 transition-colors duration-300 z-30"
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
    </main>
  );
}
