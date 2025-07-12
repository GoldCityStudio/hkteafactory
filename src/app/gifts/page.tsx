'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const giftCategories = [
  {
    id: 'tea-gift-box',
    name: '茶葉禮盒',
    description: '精選優質茶葉，搭配精美包裝，是送禮的最佳選擇。',
    image: '/images/gifts/tea-gift-box.jpg',
    link: '/gifts/tea-gift-box'
  },
  {
    id: 'wedding-favors',
    name: '婚宴回禮',
    description: '為您的婚禮增添獨特的中式風味，讓賓客帶走美好的回憶。',
    image: '/images/gifts/wedding-favors.jpg',
    link: '/gifts/wedding-favors'
  },
  {
    id: 'farewell-gifts',
    name: '散水禮物',
    description: '精緻的散水禮物，讓您的告別更加溫馨難忘。',
    image: '/images/gifts/farewell-gifts.jpg',
    link: '/gifts/farewell-gifts'
  }
];

export default function GiftsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">禮品系列</h1>
        <p className="text-lg text-gray-600">為特別時刻挑選完美禮物</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {giftCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
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
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {category.name}
              </h2>
              <p className="text-gray-600 mb-4">
                {category.description}
              </p>
              <Link
                href={category.link}
                className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition-colors"
              >
                了解更多
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Custom Gift Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-16 bg-gray-50 rounded-lg p-8"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">客製化禮品</h2>
          <p className="text-lg text-gray-600">
            需要特別的禮品組合？我們可以為您量身定制。
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Link
            href="/contact"
            className="block w-full text-center bg-emerald-600 text-white py-3 px-6 rounded-md hover:bg-emerald-700 transition-colors"
          >
            聯絡我們訂製禮品
          </Link>
        </div>
      </motion.div>
    </div>
  );
} 