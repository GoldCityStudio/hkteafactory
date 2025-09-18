'use client';

import ProductCard from '@/components/ProductCard';
import type { Language } from '@/app/types';
import type { Product } from '@/lib/types/product';

// Test products with multiple images
const testProducts: Product[] = [
  {
    id: 'test-product-1',
    name: { zh: '測試產品 1', en: 'Test Product 1' },
    description: { zh: '這是一個測試產品，用於驗證購物車功能', en: 'This is a test product to verify cart functionality' },
    price: 299,
    originalPrice: undefined,
    thumbnail: '/images/longjing-premium.jpg',
    images: ['/images/longjing-premium.jpg', '/images/longjing-gift.jpg'],
    category: 'green-tea',
    status: 'active',
    isNew: true,
    specifications: {
      weight: '250g',
      origin: 'Test Origin',
      storage: 'Store in cool place',
      expiryDate: '24 months'
    },
    stock: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['test'],
    isFeatured: false
  },
  {
    id: 'test-product-2',
    name: { zh: '測試產品 2', en: 'Test Product 2' },
    description: { zh: '另一個測試產品，用於驗證購物車功能', en: 'Another test product to verify cart functionality' },
    price: 199,
    originalPrice: 299,
    thumbnail: '/images/tieguanyin-premium.jpg',
    images: ['/images/tieguanyin-premium.jpg', '/images/tieguanyin-gift.jpg'],
    category: 'oolong-tea',
    status: 'active',
    isNew: false,
    specifications: {
      weight: '200g',
      origin: 'Test Origin',
      storage: 'Store in cool place',
      expiryDate: '24 months'
    },
    stock: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['test', 'sale'],
    isFeatured: false
  }
];

export default function TestCartPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">購物車功能測試</h1>
        <p className="text-center text-gray-600 mb-12">
          測試產品卡片的「查看詳情」和「加入購物車」功能
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testProducts.map((product) => (
            <ProductCard key={product.id} product={product} language="zh" />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold mb-4">功能說明：</h2>
          <ul className="text-gray-600 space-y-2 text-left max-w-2xl mx-auto">
            <li>• <strong>查看詳情</strong>：點擊灰色按鈕會跳轉到產品詳情頁面</li>
            <li>• <strong>加入購物車</strong>：點擊綠色按鈕會將產品加入購物車</li>
            <li>• <strong>購物車圖標</strong>：導航欄右上角有購物車圖標，顯示商品數量</li>
            <li>• <strong>圖片切換</strong>：滑鼠移到圖片上會切換到第二張圖片</li>
            <li>• <strong>成功反饋</strong>：加入購物車後按鈕會顯示「✓ 已加入」</li>
          </ul>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            請檢查導航欄右上角的購物車圖標，點擊可以查看購物車內容
          </p>
        </div>
      </div>
    </div>
  );
}
