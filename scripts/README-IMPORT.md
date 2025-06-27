# Product Import System

This system allows you to import product data from Excel/CSV files into your HK Tea Factory website.

## Quick Start

1. **Install dependencies** (if not already installed):
   ```bash
   npm install csv-parser
   ```

2. **Prepare your Excel file**:
   - Save your Excel file as CSV format
   - Use the template in `product-template.csv` as a reference
   - Ensure column headers match the expected format

3. **Run the import**:
   ```bash
   node scripts/import-products.js your-products.csv
   ```

## CSV Column Format

| Column | Required | Description | Example |
|--------|----------|-------------|---------|
| `id` | No | Unique product ID | `longjing-premium` |
| `name_zh` | Yes | Chinese product name | `西湖龍井` |
| `name_en` | Yes | English product name | `West Lake Longjing` |
| `description_zh` | No | Chinese description | `中國十大名茶之首` |
| `description_en` | No | English description | `Top 10 Chinese Tea` |
| `price` | Yes | Product price (number) | `180` |
| `original_price` | No | Original price for sales | `200` |
| `category` | Yes | Product category | `green-tea` |
| `status` | No | Product status | `active` |
| `stock` | No | Stock quantity | `50` |
| `thumbnail` | No | Main product image | `/images/longjing.jpg` |
| `images` | No | Comma-separated image URLs | `/img1.jpg,/img2.jpg` |
| `weight` | No | Product weight | `100g` |
| `origin` | No | Product origin | `China` |
| `ingredients` | No | Comma-separated ingredients | `綠茶葉,茉莉花` |
| `storage` | No | Storage instructions | `Store in cool dry place` |
| `expiry_date` | No | Expiry information | `24 months` |
| `tags` | No | Comma-separated tags | `premium,organic` |
| `is_new` | No | New product flag | `true` |
| `is_featured` | No | Featured product flag | `false` |

## Supported Categories

- `green-tea` - Green tea products
- `black-tea` - Black tea products
- `oolong-tea` - Oolong tea products
- `white-tea` - White tea products
- `pu-erh` - Pu-erh tea products
- `flower-tea` - Flower tea products
- `taiwanese-tea` - Taiwanese tea products
- `tea-bags` - Tea bag products
- `honey-product` - Honey products
- `teaware` - Tea ware products
- `accessories` - Tea accessories
- `gift-sets` - Gift sets
- `qingcha-oolong` - Qingcha & Oolong products

## Supported Statuses

- `active` - Product is available
- `inactive` - Product is not available
- `out_of_stock` - Product is out of stock

## What the Import Script Does

1. **Reads your CSV file** and converts each row to a product object
2. **Generates TypeScript files** with your product data
3. **Creates API routes** for accessing the imported products
4. **Provides a summary report** of the import process

## Generated Files

After running the import, the following files will be created:

- `src/lib/data/imported-products.ts` - Product data file
- `src/app/api/imported-products/route.ts` - API endpoint for products

## Using Imported Products

### In your components:

```typescript
import { importedProducts } from '@/lib/data/imported-products';

// Use the products in your component
const products = importedProducts.filter(p => p.category === 'green-tea');
```

### Via API:

```typescript
// Fetch all imported products
const response = await fetch('/api/imported-products');
const products = await response.json();

// Add or update a product
const newProduct = {
  name: { zh: '新產品', en: 'New Product' },
  price: 100,
  category: 'green-tea'
};

await fetch('/api/imported-products', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(newProduct)
});
```

## Excel to CSV Conversion

If you have an Excel file (.xlsx), you can convert it to CSV:

1. **Using Excel**:
   - Open your Excel file
   - Go to File → Save As
   - Choose "CSV (Comma delimited) (*.csv)" as the file type
   - Save the file

2. **Using Google Sheets**:
   - Upload your Excel file to Google Sheets
   - Go to File → Download → CSV

3. **Using online converters**:
   - Use online tools like convertio.co or zamzar.com

## Troubleshooting

### Common Issues:

1. **"CSV file not found"**
   - Make sure the CSV file path is correct
   - Use absolute path if needed: `node scripts/import-products.js /full/path/to/products.csv`

2. **"Error processing row"**
   - Check that your CSV headers match the expected format
   - Ensure required fields (name_zh, name_en, price, category) are present
   - Check for special characters in the CSV

3. **"Module not found: csv-parser"**
   - Install the dependency: `npm install csv-parser`

### Data Validation:

The script will automatically:
- Generate IDs for products that don't have them
- Convert prices to numbers (removing currency symbols)
- Parse comma-separated values for images, tags, and ingredients
- Set default values for missing optional fields

## Advanced Usage

### Custom Import Options:

```javascript
const { importProducts } = require('./scripts/import-products');

importProducts('products.csv', {
  outputDir: 'custom/data/path',
  generateApi: false,
  generateTypes: true
});
```

### Batch Processing:

```bash
# Import multiple files
for file in products/*.csv; do
  node scripts/import-products.js "$file"
done
```

## Integration with Existing Products

The imported products are separate from your existing hardcoded products. To integrate them:

1. **Replace existing products**:
   ```typescript
   // In your product pages, replace hardcoded arrays with:
   import { importedProducts } from '@/lib/data/imported-products';
   
   const products = importedProducts.filter(p => p.category === 'green-tea');
   ```

2. **Merge with existing products**:
   ```typescript
   import { importedProducts } from '@/lib/data/imported-products';
   import { existingProducts } from './existing-products';
   
   const allProducts = [...existingProducts, ...importedProducts];
   ```

## Support

If you encounter any issues:
1. Check the console output for error messages
2. Verify your CSV format matches the template
3. Ensure all required fields are present
4. Check that category and status values are valid 