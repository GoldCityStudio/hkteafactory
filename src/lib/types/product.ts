export type ProductCategory = 'tea' | 'honey-product' | 'teaware' | 'accessories' | 'gift-sets' | 'green-tea' | 'black-tea' | 'oolong-tea' | 'white-tea' | 'pu-erh' | 'flower-tea' | 'taiwanese-tea' | 'tea-bags' | 'qingcha-oolong';

export type ProductStatus = 'active' | 'inactive' | 'out_of_stock';

export interface Product {
  id: string;
  name: {
    zh: string;
    en: string;
  };
  description: {
    zh: string;
    en: string;
  };
  price: number;
  originalPrice?: number;
  category: ProductCategory;
  status: ProductStatus;
  stock: number;
  images: string[];
  thumbnail: string;
  specifications: {
    weight?: string;
    origin?: string;
    ingredients?: string[];
    storage?: string;
    expiryDate?: string;
  };
  tags: string[];
  isNew: boolean;
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CartItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
} 