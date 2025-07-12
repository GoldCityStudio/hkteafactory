'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '@/app/context/CartContext';
import type { Product } from '@/lib/types/product';
import type { Language } from '@/app/types';

type ProductDetailPopupProps = {
  product: Product;
  language: Language;
  onClose: () => void;
};

export default function ProductDetailPopup({
  product,
  language,
  onClose,
}: ProductDetailPopupProps) {
  const { addItem } = useCart();
  const [imgError, setImgError] = useState(false);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name[language],
      desc: product.description[language],
      price: product.price.toString(),
      img: product.thumbnail
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div
              className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video overflow-hidden">
                <motion.div
                  className="w-full h-full"
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Image
                    src={imgError ? '/placeholder.jpg' : product.thumbnail}
                    alt={product.name[language]}
                    fill
                    className="object-cover"
                    onError={() => setImgError(true)}
                  />
                </motion.div>
                {product.originalPrice && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                    {language === 'zh' ? '特價' : 'Sale'}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {product.name[language]}
                </h2>
                <p className="text-gray-600 mb-4">{product.description[language]}</p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-emerald-600">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-emerald-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-emerald-700 transition-colors duration-300"
                  >
                    {language === 'zh' ? '加入購物車' : 'Add to Cart'}
                  </button>
                  <button
                    onClick={onClose}
                    className="flex-1 border-2 border-gray-300 text-gray-600 px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors duration-300"
                  >
                    {language === 'zh' ? '關閉' : 'Close'}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 