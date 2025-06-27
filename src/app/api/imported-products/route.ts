import { NextResponse } from 'next/server';
import { importedProducts } from '@/lib/data/imported-products';

export async function GET() {
  try {
    return NextResponse.json(importedProducts);
  } catch (error) {
    console.error('Error fetching imported products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Find existing product or create new one
    const existingIndex = importedProducts.findIndex(p => p.id === data.id);
    
    if (existingIndex >= 0) {
      // Update existing product
      importedProducts[existingIndex] = {
        ...importedProducts[existingIndex],
        ...data,
        updatedAt: new Date()
      };
      return NextResponse.json(importedProducts[existingIndex]);
    } else {
      // Add new product
      const newProduct = {
        ...data,
        id: data.id || `product_${Date.now()}`,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      importedProducts.push(newProduct);
      return NextResponse.json(newProduct, { status: 201 });
    }
  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json(
      { error: 'Failed to update product' },
      { status: 500 }
    );
  }
}
