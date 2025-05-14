'use client';

import { useRouter } from 'next/navigation';
import ProductForm from '@/app/components/admin/ProductForm';
import { Product } from '@/lib/types/product';

export default function CreateProductPage() {
  const router = useRouter();

  const handleSubmit = async (data: Partial<Product>) => {
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to create product');
      }

      // Redirect back to products list
      router.push('/admin/products');
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">新增商品</h1>
        <p className="mt-1 text-sm text-gray-600">
          請填寫以下資料以新增商品
        </p>
      </div>

      <ProductForm onSubmit={handleSubmit} />
    </div>
  );
} 