'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

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

const TeaBagsPage = () => {
  const heroSectionRef = useRef<HTMLDivElement[]>([]);
  const setHeroSectionRef = (el: HTMLDivElement | null, idx: number) => {
    if (el) heroSectionRef.current[idx] = el;
  };

  const teaBagsHeroSection = {
    headline: '茶包精選',
    subheadline: '方便快捷，品味優質茶香',
    button: '立即探索',
    leafColor: '#6B8E23', // A dark olive green color for tea bags
    bg: 'from-lime-800 via-lime-900 to-lime-700',
    bgImage: '/images/hero-tea-bags.jpg'
  };

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
          src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=2070"
          alt="Tea Bags Hero"
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
            茶包系列
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            方便快捷，品質保證
          </p>
        </motion.div>
      </motion.section>

      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white p-8 rounded-lg shadow-xl"
        >
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              茶包以其方便快捷的特點和優質的茶葉品質而聞名。我們的茶包系列精選來自各大名茶產區的優質茶葉，為您帶來最純正的茶包體驗。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">產品特色</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <span className="font-semibold text-gray-900">嚴選茶葉：</span>
                    精選各大名茶產區的優質茶葉
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">傳統工藝：</span>
                    採用傳統製茶工藝，保留茶葉原味
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">品質保證：</span>
                    嚴格把控每個環節，確保茶葉品質
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">多樣選擇：</span>
                    提供多種茶包品種，滿足不同口味需求
                  </li>
                </ul>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=2070"
                  alt="Tea Bags Collection"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-center mt-12"
            >
              <p className="font-semibold text-xl text-emerald-700 mb-4">
                立即選購，體驗「烘茶源」的優質茶包！
              </p>
              <p className="text-lg text-gray-600">
                電話：(852) 1234 5678 | 電郵：info@hkteafactory.com
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeaBagsPage; 
 