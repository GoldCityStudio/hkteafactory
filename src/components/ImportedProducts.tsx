'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/lib/types/product';
import ProductCard from './ProductCard';
import type { Language } from '@/app/types';

interface ImportedProductsProps {
  category?: string;
  limit?: number;
  showFilters?: boolean;
  language?: Language;
}

export default function ImportedProducts({ 
  category, 
  limit, 
  showFilters = false,
  language = 'en'
}: ImportedProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/imported-products');
      
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter(product => {
    if (selectedCategory === 'all') return true;
    return product.category === selectedCategory;
  });

  const displayedProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">Error loading products: {error}</p>
        <button 
          onClick={fetchProducts}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Retry
        </button>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 mb-4">No imported products found.</p>
        <p className="text-sm text-gray-500">
          Import products using the Excel import system first.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {showFilters && (
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {cat === 'all' ? 'All Categories' : cat.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            language={language}
          />
        ))}
      </div>

      {limit && filteredProducts.length > limit && (
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Showing {limit} of {filteredProducts.length} products
          </p>
        </div>
      )}
    </div>
  );
} 