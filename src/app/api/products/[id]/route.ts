import { NextRequest, NextResponse } from 'next/server';
import { importedProducts } from '@/lib/data/imported-products';
import { Product } from '@/lib/types/product';

// Temporary in-memory storage for products
declare global {
  var products: Product[];
}

if (!global.products) {
  global.products = [];
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const product = importedProducts.find((p: Product) => p.id === params.id);

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const updates = await request.json();
  const index = global.products.findIndex((p: Product) => p.id === params.id);
  
  if (index === -1) {
    return NextResponse.json(
      { message: 'Product not found' },
      { status: 404 }
    );
  }

  global.products[index] = {
    ...global.products[index],
    ...updates,
  };

  return NextResponse.json(global.products[index]);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = global.products.findIndex((p: Product) => p.id === params.id);
  
  if (index === -1) {
    return NextResponse.json(
      { message: 'Product not found' },
      { status: 404 }
    );
  }

  const deletedProduct = global.products[index];
  global.products.splice(index, 1);

  return NextResponse.json(deletedProduct);
} 