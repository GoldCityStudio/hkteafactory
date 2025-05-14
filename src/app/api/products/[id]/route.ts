import { NextResponse } from 'next/server';
import { Product } from '@/lib/types/product';

// Temporary in-memory storage for products (shared with the main products route)
declare global {
  var products: Product[];
}
global.products = global.products || [];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const product = global.products.find((p) => p.id === params.id);
    
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await request.json();
    const index = global.products.findIndex((p) => p.id === params.id);
    
    if (index === -1) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    const updatedProduct: Product = {
      ...global.products[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };

    global.products[index] = updatedProduct;

    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json(
      { error: 'Failed to update product' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const index = global.products.findIndex((p) => p.id === params.id);
    
    if (index === -1) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    global.products.splice(index, 1);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json(
      { error: 'Failed to delete product' },
      { status: 500 }
    );
  }
} 