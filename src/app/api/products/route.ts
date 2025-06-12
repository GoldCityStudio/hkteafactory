import { NextResponse } from 'next/server';
import { Product } from '@/lib/types/product';

// Temporary in-memory storage for products
const products: Product[] = [];

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Generate a unique ID (in production, this would come from the database)
    const newProduct: Product = {
      id: `product_${Date.now()}`,
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // Add to our temporary storage
    products.push(newProduct);

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(products);
} 