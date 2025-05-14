'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useCart } from '@/app/context/CartContext';
import type { CartItem } from '@/app/context/CartContext';

type CartProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Cart({ isOpen, onClose }: CartProps) {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">購物車</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
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
                  <h3 className="mt-2 text-lg font-medium text-gray-900">購物車是空的</h3>
                  <p className="mt-1 text-gray-500">開始購物吧！</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t p-6">
                <div className="flex justify-between text-lg font-medium mb-4">
                  <span>總計</span>
                  <span>{totalPrice}</span>
                </div>
                <div className="space-y-4">
                  <button
                    onClick={() => {
                      alert('訂單已提交！感謝您的購買。');
                      clearCart();
                      onClose();
                    }}
                    className="w-full bg-emerald-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-emerald-700 transition-colors duration-300"
                  >
                    結帳
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full border-2 border-gray-300 text-gray-600 px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors duration-300"
                  >
                    清空購物車
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function CartItem({ item }: { item: CartItem }) {
  const { removeItem, updateQuantity } = useCart();

  return (
    <div className="flex gap-4">
      {/* Product Image */}
      <div className="relative w-24 h-24 flex-shrink-0">
        <Image
          src={item.img}
          alt={item.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.desc}</p>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50"
            >
              -
            </button>
            <span className="w-8 text-center">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50"
            >
              +
            </button>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-lg font-medium text-gray-900">{item.price}</span>
            <button
              onClick={() => removeItem(item.id)}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 