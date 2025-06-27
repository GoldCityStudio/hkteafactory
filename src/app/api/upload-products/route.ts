import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { importProducts } from '../../../../scripts/import-products';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Check file type
    const allowedTypes = [
      'text/csv',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-excel'
    ];

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Please upload CSV or Excel files.' },
        { status: 400 }
      );
    }

    // Check file size (max 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File too large. Maximum size is 10MB.' },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create temporary file path
    const tempDir = join(process.cwd(), 'temp');
    const tempFilePath = join(tempDir, `upload_${Date.now()}_${file.name}`);

    // Ensure temp directory exists
    try {
      await writeFile(tempFilePath, buffer);
    } catch (error) {
      // Create temp directory if it doesn't exist
      const fs = require('fs');
      if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir, { recursive: true });
      }
      await writeFile(tempFilePath, buffer);
    }

    // Process the file
    let products;
    if (file.type === 'text/csv') {
      // Direct CSV processing
      products = await importProducts(tempFilePath);
    } else {
      // Excel file - convert to CSV first
      const { excelToCsv } = require('../../../../scripts/excel-to-csv');
      const csvPath = tempFilePath.replace(/\.(xlsx|xls)$/, '.csv');
      await excelToCsv(tempFilePath, csvPath);
      products = await importProducts(csvPath);
    }

    // Clean up temporary files
    const fs = require('fs');
    try {
      fs.unlinkSync(tempFilePath);
      if (tempFilePath !== tempFilePath.replace(/\.(xlsx|xls)$/, '.csv')) {
        fs.unlinkSync(tempFilePath.replace(/\.(xlsx|xls)$/, '.csv'));
      }
    } catch (error) {
      console.warn('Failed to clean up temporary files:', error);
    }

    return NextResponse.json({
      success: true,
      productsCount: products.length,
      message: `Successfully imported ${products.length} products`
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Failed to process file' 
      },
      { status: 500 }
    );
  }
} 