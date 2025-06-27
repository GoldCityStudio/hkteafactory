import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    const templatePath = join(process.cwd(), 'scripts', 'product-template.csv');
    const templateContent = readFileSync(templatePath, 'utf8');

    return new NextResponse(templateContent, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename="product-template.csv"',
      },
    });
  } catch (error) {
    console.error('Error serving template:', error);
    return NextResponse.json(
      { error: 'Failed to serve template' },
      { status: 500 }
    );
  }
} 