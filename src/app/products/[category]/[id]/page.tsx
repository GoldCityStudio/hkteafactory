'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import type { Language } from '@/app/types';
import type { Product } from '@/lib/types/product';

// Mock product data - in a real app, this would come from an API or database
const mockProducts: Record<string, Product> = {
  'premium-lion-peak-longjing': {
    id: 'premium-lion-peak-longjing',
    name: { zh: '明前獅峰龍井', en: 'Premium Lion Peak Longjing Tea' },
    description: { zh: '明前獅峰龍井，扁平光滑，翠綠鮮潤，極品龍井', en: 'Premium Lion Peak Longjing Tea, flat and smooth, emerald green and fresh' },
    price: 1388,
    originalPrice: undefined,
    thumbnail: '/images/longjing-premium.jpg',
    images: ['/images/longjing-premium.jpg', '/images/longjing-premium.jpg'],
    category: 'green-tea',
    status: 'active',
    isNew: false,
    specifications: {
      weight: '250g',
      origin: 'Hangzhou, China',
      storage: 'Store in a cool, dry place',
      expiryDate: '24 months'
    },
    stock: 20,
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['premium'],
    isFeatured: true
  },
  'premium-longjing': {
    id: 'premium-longjing',
    name: { zh: '明前龍井', en: 'Premium Longjing Tea' },
    description: { zh: '明前龍井，色澤綠潤，滋味醇厚', en: 'Premium Longjing Tea, green and moist, mellow flavor' },
    price: 880,
    originalPrice: undefined,
    thumbnail: '/images/longjing-tea.jpg',
    images: ['/images/longjing-tea.jpg'],
    category: 'green-tea',
    status: 'active',
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
    tags: [],
    isFeatured: false
  },
  'superior-longjing': {
    id: 'superior-longjing',
    name: { zh: '雨前龍井', en: 'Superior Longjing Tea' },
    description: { zh: '雨前龍井，清香持久，回甘明顯', en: 'Superior Longjing Tea, lasting fresh aroma, obvious aftertaste' },
    price: 498,
    originalPrice: undefined,
    thumbnail: '/images/longjing-tea-2.jpg',
    images: ['/images/longjing-tea-2.jpg'],
    category: 'green-tea',
    status: 'active',
    isNew: false,
    specifications: {
      weight: '250g',
      origin: 'Hangzhou, China',
      storage: 'Store in a cool, dry place',
      expiryDate: '24 months'
    },
    stock: 40,
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: [],
    isFeatured: false
  },
  'rare-premium-lion-peak': {
    id: 'rare-premium-lion-peak',
    name: { zh: '稀有明前獅峰龍井', en: 'Rare Premium Lion Peak Longjing Tea' },
    description: { zh: '稀有明前獅峰龍井，極品中的極品', en: 'Rare Premium Lion Peak Longjing Tea, the finest of the finest' },
    price: 12800,
    originalPrice: undefined,
    thumbnail: '/images/longjing-premium.jpg',
    images: ['/images/longjing-premium.jpg'],
    category: 'green-tea',
    status: 'active',
    isNew: true,
    specifications: {
      weight: '250g',
      origin: 'Hangzhou, China',
      storage: 'Store in a cool, dry place',
      expiryDate: '24 months'
    },
    stock: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['rare', 'premium'],
    isFeatured: true
  }
};

export default function ProductDetailPage() {
  const params = useParams();
  const [language, setLanguage] = useState<Language>('zh');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const productId = params.id as string;
  const product = mockProducts[productId];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/products"
            className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    // Add to cart logic would go here
    console.log('Added to cart:', product.name[language], 'Quantity:', quantity);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">首頁</Link>
            <span className="text-gray-400">/</span>
            <Link href="/products" className="text-gray-500 hover:text-gray-700">商店</Link>
            <span className="text-gray-400">/</span>
            <Link href={`/products/${product.category}`} className="text-gray-500 hover:text-gray-700">
              {language === 'zh' ? '綠茶' : 'Green Tea'}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{product.name[language]}</span>
          </nav>
        </div>
      </div>

      {/* Language Switcher */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-end">
          <button
            onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
            className="bg-white text-emerald-600 px-4 py-2 rounded-full shadow-lg hover:bg-emerald-50 transition-colors border border-emerald-200"
          >
            {language === 'zh' ? 'English' : '中文'}
          </button>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden">
                <Image
                  src={product.images[selectedImageIndex] || product.thumbnail}
                  alt={product.name[language]}
                  fill
                  className="object-cover"
                />
                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {language === 'zh' ? '新品' : 'New'}
                  </div>
                )}
                {product.isFeatured && (
                  <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {language === 'zh' ? '熱賣' : 'Featured'}
                  </div>
                )}
              </div>
              
              {/* Thumbnail Images */}
              {product.images.length > 1 && (
                <div className="flex space-x-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        index === selectedImageIndex
                          ? 'border-emerald-500'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name[language]} ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                  {product.name[language]}
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {product.description[language]}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline space-x-4">
                <span className="text-3xl font-bold text-emerald-600">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              {/* Specifications */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {language === 'zh' ? '產品規格' : 'Specifications'}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {product.specifications.weight && (
                    <div>
                      <span className="text-sm text-gray-600">
                        {language === 'zh' ? '重量' : 'Weight'}:
                      </span>
                      <span className="ml-2 font-medium">{product.specifications.weight}</span>
                    </div>
                  )}
                  {product.specifications.origin && (
                    <div>
                      <span className="text-sm text-gray-600">
                        {language === 'zh' ? '產地' : 'Origin'}:
                      </span>
                      <span className="ml-2 font-medium">{product.specifications.origin}</span>
                    </div>
                  )}
                  {product.specifications.storage && (
                    <div>
                      <span className="text-sm text-gray-600">
                        {language === 'zh' ? '保存方法' : 'Storage'}:
                      </span>
                      <span className="ml-2 font-medium">{product.specifications.storage}</span>
                    </div>
                  )}
                  {product.specifications.expiryDate && (
                    <div>
                      <span className="text-sm text-gray-600">
                        {language === 'zh' ? '有效期' : 'Expiry'}:
                      </span>
                      <span className="ml-2 font-medium">{product.specifications.expiryDate}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="text-sm font-medium text-gray-700">
                    {language === 'zh' ? '數量' : 'Quantity'}:
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-gray-600 hover:text-gray-800"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="px-3 py-2 text-gray-600 hover:text-gray-800"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">
                    {language === 'zh' ? `庫存: ${product.stock}` : `Stock: ${product.stock}`}
                  </span>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className={`w-full py-4 px-6 rounded-lg font-medium text-lg transition-colors ${
                    product.stock === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-emerald-600 text-white hover:bg-emerald-700'
                  }`}
                >
                  {product.stock === 0
                    ? (language === 'zh' ? '已售罄' : 'Out of Stock')
                    : (language === 'zh' ? '加入購物車' : 'Add to Cart')
                  }
                </button>
              </div>

              {/* Tags */}
              {product.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {language === 'zh' ? '相關產品' : 'Related Products'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.values(mockProducts)
              .filter(p => p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.category}/${relatedProduct.id}`}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedProduct.thumbnail}
                      alt={relatedProduct.name[language]}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {relatedProduct.name[language]}
                    </h3>
                    <p className="text-emerald-600 font-bold">
                      ${relatedProduct.price}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
