'use client';

import { useState } from 'react';
import { Product, ProductCategory, ProductStatus } from '@/lib/types/product';
import Image from 'next/image';

interface ProductFormProps {
  initialData?: Partial<Product>;
  onSubmit: (data: Partial<Product>) => Promise<void>;
  isEditing?: boolean;
}

const categories: Record<ProductCategory, string> = {
  tea: '茶葉',
  honey: '蜂蜜',
  teaware: '茶具',
  accessories: '配件',
};

const statuses: Record<ProductStatus, string> = {
  active: '上架中',
  inactive: '下架中',
  out_of_stock: '缺貨中',
};

export default function ProductForm({ initialData, onSubmit, isEditing = false }: ProductFormProps) {
  const [formData, setFormData] = useState<Partial<Product>>(
    initialData || {
      name: { zh: '', en: '' },
      description: { zh: '', en: '' },
      price: 0,
      category: 'tea',
      status: 'active',
      stock: 0,
      images: [],
      thumbnail: '',
      specifications: {
        weight: '',
        origin: '',
        storage: '',
        expiryDate: ''
      },
      tags: [],
      isNew: false,
      isFeatured: false,
    }
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name.startsWith('name.') || name.startsWith('description.')) {
      const [field, lang] = name.split('.');
      setFormData((prev) => ({
        ...prev,
        [field]: {
          ...(prev[field as keyof Product] as { zh: string; en: string }),
          [lang]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await onSubmit(formData);
    } catch (err) {
      setError(err instanceof Error ? err.message : '提交失敗');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    // TODO: Implement actual image upload to cloud storage
    // For now, we'll just use local URLs
    const newImages = Array.from(files).map(file => URL.createObjectURL(file));
    setFormData(prev => ({
      ...prev,
      images: [...(prev.images || []), ...newImages],
      thumbnail: newImages[0] // Set first image as thumbnail
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">基本資訊</h3>
          
          {/* Chinese Name */}
          <div>
            <label htmlFor="name.zh" className="block text-sm font-medium text-gray-700">
              中文名稱
            </label>
            <input
              type="text"
              name="name.zh"
              id="name.zh"
              value={formData.name?.zh || ''}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              required
            />
          </div>

          {/* English Name */}
          <div>
            <label htmlFor="name.en" className="block text-sm font-medium text-gray-700">
              English Name
            </label>
            <input
              type="text"
              name="name.en"
              id="name.en"
              value={formData.name?.en || ''}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              價格
            </label>
            <input
              type="number"
              name="price"
              id="price"
              value={formData.price || 0}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              required
              min="0"
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              類別
            </label>
            <select
              name="category"
              id="category"
              value={formData.category || 'tea'}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            >
              {Object.entries(categories).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Status and Stock */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">庫存與狀態</h3>
          
          {/* Status */}
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              狀態
            </label>
            <select
              name="status"
              id="status"
              value={formData.status || 'active'}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            >
              {Object.entries(statuses).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          {/* Stock */}
          <div>
            <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
              庫存數量
            </label>
            <input
              type="number"
              name="stock"
              id="stock"
              value={formData.stock || 0}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              required
              min="0"
            />
          </div>

          {/* Flags */}
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="isNew"
                id="isNew"
                checked={formData.isNew}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  isNew: e.target.checked
                }))}
                className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
              />
              <label htmlFor="isNew" className="ml-2 block text-sm text-gray-900">
                新品標籤
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="isFeatured"
                id="isFeatured"
                checked={formData.isFeatured}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  isFeatured: e.target.checked
                }))}
                className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
              />
              <label htmlFor="isFeatured" className="ml-2 block text-sm text-gray-900">
                精選商品
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">商品描述</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="description.zh" className="block text-sm font-medium text-gray-700">
              中文描述
            </label>
            <textarea
              name="description.zh"
              id="description.zh"
              rows={4}
              value={formData.description?.zh || ''}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              required
            />
          </div>
          <div>
            <label htmlFor="description.en" className="block text-sm font-medium text-gray-700">
              English Description
            </label>
            <textarea
              name="description.en"
              id="description.en"
              rows={4}
              value={formData.description?.en || ''}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              required
            />
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">商品規格</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
              重量
            </label>
            <input
              type="text"
              name="specifications.weight"
              id="weight"
              value={formData.specifications?.weight || ''}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label htmlFor="origin" className="block text-sm font-medium text-gray-700">
              產地
            </label>
            <input
              type="text"
              name="specifications.origin"
              id="origin"
              value={formData.specifications?.origin || ''}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label htmlFor="storage" className="block text-sm font-medium text-gray-700">
              儲存方式
            </label>
            <input
              type="text"
              name="specifications.storage"
              id="storage"
              value={formData.specifications?.storage || ''}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
              保存期限
            </label>
            <input
              type="text"
              name="specifications.expiryDate"
              id="expiryDate"
              value={formData.specifications?.expiryDate || ''}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Images */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">商品圖片</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            上傳圖片
          </label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-1 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-emerald-50 file:text-emerald-700
              hover:file:bg-emerald-100"
          />
        </div>
        {formData.images && formData.images.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {formData.images.map((image, index) => (
              <div key={index} className="relative aspect-square">
                <Image
                  src={image}
                  alt={`Product image ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-red-500 text-sm text-center">{error}</div>
      )}

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50"
        >
          {isSubmitting ? '提交中...' : isEditing ? '更新商品' : '新增商品'}
        </button>
      </div>
    </form>
  );
} 