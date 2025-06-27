const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const { createReadStream } = require('fs');

// Product categories mapping
const CATEGORY_MAPPING = {
  'green-tea': 'green-tea',
  'black-tea': 'black-tea',
  'oolong-tea': 'oolong-tea',
  'white-tea': 'white-tea',
  'pu-erh': 'pu-erh',
  'flower-tea': 'flower-tea',
  'taiwanese-tea': 'taiwanese-tea',
  'tea-bags': 'tea-bags',
  'honey-product': 'honey-product',
  'teaware': 'teaware',
  'accessories': 'accessories',
  'gift-sets': 'gift-sets',
  'qingcha-oolong': 'qingcha-oolong'
};

// Status mapping
const STATUS_MAPPING = {
  'active': 'active',
  'inactive': 'inactive',
  'out_of_stock': 'out_of_stock',
  'out of stock': 'out_of_stock'
};

/**
 * Convert Excel/CSV data to Product interface format
 * @param {Object} row - CSV row data
 * @returns {Object} - Formatted product object
 */
function convertRowToProduct(row) {
  // Generate unique ID from name if not provided
  const id = row.id || row.name_en?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') || `product_${Date.now()}`;
  
  // Parse price (remove currency symbols and convert to number)
  const price = parseFloat(row.price?.replace(/[^0-9.]/g, '')) || 0;
  const originalPrice = row.original_price ? parseFloat(row.original_price.replace(/[^0-9.]/g, '')) : undefined;
  
  // Parse stock (convert to number)
  const stock = parseInt(row.stock) || 0;
  
  // Parse images (split by comma if multiple)
  const images = row.images ? row.images.split(',').map(img => img.trim()) : [];
  const thumbnail = row.thumbnail || images[0] || '/images/placeholder.jpg';
  
  // Parse tags (split by comma if multiple)
  const tags = row.tags ? row.tags.split(',').map(tag => tag.trim()) : [];
  
  // Parse ingredients (split by comma if multiple)
  const ingredients = row.ingredients ? row.ingredients.split(',').map(ingredient => ingredient.trim()) : [];
  
  // Map category
  const category = CATEGORY_MAPPING[row.category?.toLowerCase()] || 'tea';
  
  // Map status
  const status = STATUS_MAPPING[row.status?.toLowerCase()] || 'active';
  
  // Parse boolean fields
  const isNew = row.is_new === 'true' || row.is_new === '1' || row.is_new === 'yes';
  const isFeatured = row.is_featured === 'true' || row.is_featured === '1' || row.is_featured === 'yes';
  
  return {
    id,
    name: {
      zh: row.name_zh || row.name || '',
      en: row.name_en || row.name || ''
    },
    description: {
      zh: row.description_zh || row.description || '',
      en: row.description_en || row.description || ''
    },
    price,
    originalPrice,
    category,
    status,
    stock,
    images,
    thumbnail,
    specifications: {
      weight: row.weight,
      origin: row.origin,
      ingredients: ingredients.length > 0 ? ingredients : undefined,
      storage: row.storage,
      expiryDate: row.expiry_date || row.expiryDate
    },
    tags,
    isNew,
    isFeatured,
    createdAt: new Date(),
    updatedAt: new Date()
  };
}

/**
 * Generate TypeScript file with product data
 * @param {Array} products - Array of product objects
 * @param {string} outputPath - Output file path
 */
function generateProductFile(products, outputPath) {
  const content = `// Auto-generated from Excel import
// Generated on: ${new Date().toISOString()}

import { Product } from '@/lib/types/product';

export const importedProducts: Product[] = ${JSON.stringify(products, null, 2)};

export default importedProducts;
`;

  fs.writeFileSync(outputPath, content, 'utf8');
  console.log(`Generated product file: ${outputPath}`);
}

/**
 * Generate API route for imported products
 * @param {Array} products - Array of product objects
 * @param {string} outputPath - Output file path
 */
function generateApiRoute(products, outputPath) {
  const content = `import { NextResponse } from 'next/server';
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
        id: data.id || \`product_\${Date.now()}\`,
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
`;

  fs.writeFileSync(outputPath, content, 'utf8');
  console.log(`Generated API route: ${outputPath}`);
}

/**
 * Main import function
 * @param {string} csvFilePath - Path to CSV file
 * @param {Object} options - Import options
 */
function importProducts(csvFilePath, options = {}) {
  const {
    outputDir = 'src/lib/data',
    generateApi = true,
    generateTypes = true
  } = options;

  const products = [];
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  return new Promise((resolve, reject) => {
    createReadStream(csvFilePath)
      .pipe(csv())
      .on('data', (row) => {
        try {
          const product = convertRowToProduct(row);
          products.push(product);
          console.log(`Processed: ${product.name.en || product.name.zh}`);
        } catch (error) {
          console.error(`Error processing row:`, row, error);
        }
      })
      .on('end', () => {
        try {
          console.log(`\nTotal products processed: ${products.length}`);
          
          // Generate product data file
          const productFilePath = path.join(outputDir, 'imported-products.ts');
          generateProductFile(products, productFilePath);
          
          // Generate API route if requested
          if (generateApi) {
            const apiDir = path.join('src/app/api/imported-products');
            if (!fs.existsSync(apiDir)) {
              fs.mkdirSync(apiDir, { recursive: true });
            }
            const apiFilePath = path.join(apiDir, 'route.ts');
            generateApiRoute(products, apiFilePath);
          }
          
          // Generate summary report
          const summary = {
            totalProducts: products.length,
            categories: {},
            statuses: {},
            priceRange: {
              min: Math.min(...products.map(p => p.price)),
              max: Math.max(...products.map(p => p.price)),
              average: products.reduce((sum, p) => sum + p.price, 0) / products.length
            }
          };
          
          products.forEach(product => {
            summary.categories[product.category] = (summary.categories[product.category] || 0) + 1;
            summary.statuses[product.status] = (summary.statuses[product.status] || 0) + 1;
          });
          
          console.log('\n=== Import Summary ===');
          console.log(`Total Products: ${summary.totalProducts}`);
          console.log('Categories:', summary.categories);
          console.log('Statuses:', summary.statuses);
          console.log('Price Range:', summary.priceRange);
          
          resolve(products);
        } catch (error) {
          reject(error);
        }
      })
      .on('error', reject);
  });
}

// CLI usage
if (require.main === module) {
  const args = process.argv.slice(2);
  const csvFile = args[0];
  
  if (!csvFile) {
    console.error('Usage: node import-products.js <csv-file> [options]');
    console.error('Example: node import-products.js products.csv');
    process.exit(1);
  }
  
  if (!fs.existsSync(csvFile)) {
    console.error(`CSV file not found: ${csvFile}`);
    process.exit(1);
  }
  
  importProducts(csvFile)
    .then(() => {
      console.log('\n✅ Product import completed successfully!');
    })
    .catch(error => {
      console.error('❌ Import failed:', error);
      process.exit(1);
    });
}

module.exports = { importProducts, convertRowToProduct }; 