'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { DataTable } from '@/app/components/admin/DataTable';
import { Product, ProductCategory } from '@/lib/types/product';

type ProductValue = string | number | boolean | { zh: string; en: string } | string[] | { weight?: string; origin?: string; ingredients?: string[]; storage?: string; expiryDate?: string } | Date | undefined;

export default function ProductsPage() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError('Failed to load products');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('確定要刪除此商品嗎？')) {
      return;
    }

    try {
      const response = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete product');
      }

      // Remove the deleted product from the state
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('刪除商品失敗');
    }
  };

  const columns = [
    {
      key: 'name' as keyof Product,
      label: '商品名稱',
      render: (value: ProductValue, item: Product): React.ReactNode => (value && typeof value === 'object' && 'zh' in value ? value.zh : ''),
    },
    {
      key: 'price' as keyof Product,
      label: '價格',
      render: (value: ProductValue, item: Product): React.ReactNode => (typeof value === 'number' ? `NT$ ${value}` : ''),
    },
    {
      key: 'category' as keyof Product,
      label: '類別',
      render: (value: ProductValue, item: Product): React.ReactNode => {
        const categories: Record<ProductCategory, string> = {
          tea: '茶葉',
          honey: '蜂蜜',
          teaware: '茶具',
          accessories: '配件',
          'gift-sets': '禮盒',
          'green-tea': '綠茶',
          'black-tea': '紅茶',
          'oolong-tea': '烏龍茶',
          'white-tea': '白茶',
          'pu-erh': '普洱茶',
          'flower-tea': '花茶',
          'taiwanese-tea': '台灣茶',
          'honey-product': '蜂蜜',
        };
        return value && typeof value === 'string' && value in categories ? categories[value as ProductCategory] : '';
      },
    },
    {
      key: 'stock' as keyof Product,
      label: '庫存',
      render: (value: ProductValue, item: Product): React.ReactNode => (typeof value === 'number' ? value : ''),
    },
    {
      key: 'status' as keyof Product,
      label: '狀態',
      render: (value: ProductValue, item: Product): React.ReactNode => (
        <span
          className={`px-2 py-1 text-xs font-medium rounded-full ${
            value === 'active'
              ? 'bg-green-100 text-green-800'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          {value === 'active' ? '上架中' : '下架中'}
        </span>
      ),
    },
  ];

  if (loading) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-gray-600">載入中...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">商品管理</h1>
          <p className="mt-1 text-sm text-gray-600">
            管理您的商品目錄
          </p>
        </div>
        <Link
          href="/admin/products/create"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          新增商品
        </Link>
      </div>

      <DataTable
        columns={columns}
        data={products}
      />
    </div>
  );
} 