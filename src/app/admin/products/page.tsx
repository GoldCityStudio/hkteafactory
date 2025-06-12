'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { DataTable } from '@/app/components/admin/DataTable';
import { Product, ProductCategory } from '@/lib/types/product';

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
      header: '商品名稱',
      accessor: (product: Product) => product.name.zh,
    },
    {
      header: '價格',
      accessor: (product: Product) => `NT$ ${product.price}`,
    },
    {
      header: '類別',
      accessor: (product: Product) => {
        const categories: Record<ProductCategory, string> = {
          tea: '茶葉',
          honey: '蜂蜜',
          teaware: '茶具',
          accessories: '配件',
        };
        return categories[product.category];
      },
    },
    {
      header: '庫存',
      accessor: 'stock' as keyof Product,
    },
    {
      header: '狀態',
      accessor: 'status' as keyof Product,
      render: (product: Product) => (
        <span
          className={`px-2 py-1 text-xs font-medium rounded-full ${
            product.status === 'active'
              ? 'bg-green-100 text-green-800'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          {product.status === 'active' ? '上架中' : '下架中'}
        </span>
      ),
    },
    {
      header: '操作',
      accessor: (product: Product) => product.id,
      render: (product: Product) => (
        <div className="flex items-center space-x-2">
          <button
            onClick={() => router.push(`/admin/products/${product.id}/edit`)}
            className="text-indigo-600 hover:text-indigo-900"
          >
            編輯
          </button>
          <button
            onClick={() => handleDelete(product.id)}
            className="text-red-600 hover:text-red-900"
          >
            刪除
          </button>
        </div>
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
        searchable
        sortable
        itemsPerPage={10}
      />
    </div>
  );
} 