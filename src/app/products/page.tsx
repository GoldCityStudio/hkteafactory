'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product, ProductCategory } from '@/lib/types/product';
import { motion } from 'framer-motion';

// Temporary mock data
const mockProducts: Product[] = [
  {
    id: '1',
    name: {
      zh: '龍井綠茶',
      en: 'Longjing Green Tea'
    },
    description: {
      zh: '精選西湖龍井，清香持久，回甘明顯。',
      en: 'Premium West Lake Longjing, with lasting fragrance and sweet aftertaste.'
    },
    price: 280,
    originalPrice: 320,
    category: 'tea',
    status: 'active',
    stock: 100,
    images: ['/products/longjing.jpg'],
    thumbnail: '/products/longjing.jpg',
    specifications: {
      weight: '100g',
      origin: 'Hangzhou, China',
      storage: 'Store in a cool, dry place',
      expiryDate: '24 months'
    },
    tags: ['green tea', 'premium', 'new'],
    isNew: true,
    isFeatured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  // Add more mock products here
];

const categories: ProductCategory[] = ['tea', 'honey', 'teaware', 'accessories'];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'newest'>('newest');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = mockProducts
    .filter(product => 
      (selectedCategory === 'all' || product.category === selectedCategory) &&
      (product.name.zh.toLowerCase().includes(searchQuery.toLowerCase()) ||
       product.name.en.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'newest':
          return b.createdAt.getTime() - a.createdAt.getTime();
        default:
          return 0;
      }
    });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">精選產品</h1>
        <p className="text-lg text-gray-600">探索我們的優質茶葉和相關產品</p>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <input
            type="text"
            placeholder="搜尋產品..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as ProductCategory | 'all')}
          >
            <option value="all">所有類別</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'tea' ? '茶葉' :
                 category === 'honey' ? '蜂蜜' :
                 category === 'teaware' ? '茶具' : '配件'}
              </option>
            ))}
          </select>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'price-asc' | 'price-desc' | 'newest')}
          >
            <option value="newest">最新上架</option>
            <option value="price-asc">價格由低至高</option>
            <option value="price-desc">價格由高至低</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative aspect-square">
              <Image
                src={product.thumbnail}
                alt={product.name.zh}
                fill
                className="object-cover"
              />
              {product.isNew && (
                <div className="absolute top-2 right-2 bg-emerald-500 text-white px-2 py-1 rounded-full text-sm">
                  新品
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {product.name.zh}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {product.description.zh}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-emerald-600">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="ml-2 text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                  加入購物車
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 