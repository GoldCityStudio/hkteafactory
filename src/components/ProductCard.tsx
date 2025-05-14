'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import type { Language } from '@/app/types';
import { useCart } from '@/app/context/CartContext';

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

// Default placeholder image
const DEFAULT_PLACEHOLDER = '/images/placeholder.png';
const FALLBACK_PLACEHOLDER = '/images/placeholder.jpg';

export default function ProductCard({ product, language }: { product: Product; language: Language }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [placeholderError, setPlaceholderError] = useState(false);
  const { addItem } = useCart();

  // Function to get a placeholder image based on product name
  const getPlaceholderImage = (name: string) => {
    if (placeholderError) {
      return FALLBACK_PLACEHOLDER;
    }
    const lowerName = name.toLowerCase();
    if (lowerName.includes('tea machine')) return '/images/tea-machine.jpg';
    if (lowerName.includes('osmanthus')) return '/images/osmanthus-coix.jpg';
    if (lowerName.includes('anti-aging')) return '/images/anti-aging.jpg';
    if (lowerName.includes('jasmine')) return '/images/jasmine-pearl.jpg';
    if (lowerName.includes('sencha')) return '/images/sencha.jpg';
    if (lowerName.includes('longjing')) {
      if (lowerName.includes('gift')) return '/images/longjing-gift.jpg';
      if (lowerName.includes('first')) return '/images/longjing-first.jpg';
      return '/images/longjing-premium.jpg';
    }
    if (lowerName.includes('tieguanyin')) {
      if (lowerName.includes('gift')) return '/images/tieguanyin-gift.jpg';
      if (lowerName.includes('first')) return '/images/tieguanyin-first.jpg';
      return '/images/tieguanyin-premium.jpg';
    }
    if (lowerName.includes('honey')) {
      if (lowerName.includes('gift')) return '/images/honey-gift.jpg';
      if (lowerName.includes('combo')) return '/images/honey-combo.jpg';
      return '/images/honey-premium.jpg';
    }
    return DEFAULT_PLACEHOLDER;
  };

  const imageSrc = imgError ? getPlaceholderImage(product.name) : product.img;

  const handleAddToCart = () => {
    addItem({
      id: product.name,
      name: product.name,
      desc: product.desc,
      price: product.price,
      img: product.img
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full"
        >
          <Image
            src={imageSrc}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            onError={(e) => {
              console.log('Image failed to load:', imageSrc);
              if (imageSrc === DEFAULT_PLACEHOLDER) {
                setPlaceholderError(true);
              } else {
                setImgError(true);
              }
            }}
            priority={false}
            quality={75}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>

        {/* Status Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-emerald-500 text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-lg"
            >
              {language === 'zh' ? '新品' : 'New In'}
            </motion.div>
          )}
          {product.isSale && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-red-500 text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-lg"
            >
              {language === 'zh' ? '特價' : 'Sale'}
            </motion.div>
          )}
        </div>

        {/* Sold Out Overlay */}
        {product.soldOut && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white text-lg font-medium bg-black/50 px-6 py-2 rounded-full">
              {language === 'zh' ? '已售罄' : 'Sold Out'}
            </span>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="p-6 relative">
        {/* Glowing Border Effect */}
        <motion.div
          className="absolute inset-0 border-2 border-emerald-500/50 rounded-2xl opacity-0 group-hover:opacity-100"
          initial={false}
          animate={{
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Product Info */}
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex-grow">
            <motion.h3 
              className="text-xl font-medium text-gray-900 mb-2 line-clamp-1"
              animate={{ color: isHovered ? '#059669' : '#111827' }}
              transition={{ duration: 0.3 }}
            >
              {product.name}
            </motion.h3>
            <p className="text-sm text-gray-500 mb-4 font-light line-clamp-2">{product.desc}</p>
          </div>
          
          {/* Price and Action */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              {product.salePrice ? (
                <div className="flex items-center gap-2">
                  <span className="text-red-600 font-medium text-lg">{product.salePrice}</span>
                  <span className="text-gray-400 line-through text-sm">{product.price}</span>
                </div>
              ) : (
                <span className="text-emerald-600 font-medium text-lg">{product.price}</span>
              )}
              {product.unit && (
                <span className="text-gray-500 text-xs mt-1">/ {product.unit}</span>
              )}
            </div>
            
            {!product.soldOut && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-emerald-600 text-white text-sm font-medium py-3 hover:bg-emerald-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                onClick={handleAddToCart}
              >
                {language === 'zh' ? '立即選購' : 'Shop Now'}
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
} 