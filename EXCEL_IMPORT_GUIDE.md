# Excel Import System - Quick Start Guide

## 🚀 Quick Start

### 1. Prepare Your Excel File
- Use the template: `scripts/product-template.csv`
- Ensure your Excel has the required columns (see template)
- Save as CSV or use the Excel converter

### 2. Import Your Products

**Option A: Direct CSV Import**
```bash
npm run import:products your-products.csv
```

**Option B: Excel to CSV + Import**
```bash
# Convert Excel to CSV
npm run import:excel your-products.xlsx your-products.csv

# Import the CSV
npm run import:products your-products.csv
```

**Option C: List Excel Sheets First**
```bash
# See what sheets are in your Excel file
npm run import:list-sheets your-products.xlsx

# Convert specific sheet
npm run import:excel your-products.xlsx your-products.csv "Sheet1"
```

### 3. View Your Products
- Visit: `http://localhost:3000/imported-products`
- Or use the `ImportedProducts` component in your pages

## 📋 Required CSV Columns

| Column | Required | Example |
|--------|----------|---------|
| `name_zh` | ✅ | `西湖龍井` |
| `name_en` | ✅ | `West Lake Longjing` |
| `price` | ✅ | `180` |
| `category` | ✅ | `green-tea` |
| `description_zh` | ❌ | `中國十大名茶之首` |
| `description_en` | ❌ | `Top 10 Chinese Tea` |

## 🎯 Supported Categories
- `green-tea`, `black-tea`, `oolong-tea`, `white-tea`
- `pu-erh`, `flower-tea`, `taiwanese-tea`, `tea-bags`
- `honey-product`, `teaware`, `accessories`, `gift-sets`

## 🔧 Using Imported Products

### In Your Components:
```tsx
import ImportedProducts from '@/components/ImportedProducts';

// Show all products with filters
<ImportedProducts showFilters={true} language="en" />

// Show specific category
<ImportedProducts category="green-tea" language="zh" />

// Limit number of products
<ImportedProducts limit={6} language="en" />
```

### Via API:
```typescript
// Fetch all products
const response = await fetch('/api/imported-products');
const products = await response.json();
```

## 📁 Generated Files
After import, these files are created:
- `src/lib/data/imported-products.ts` - Product data
- `src/app/api/imported-products/route.ts` - API endpoint

## 🛠️ Troubleshooting

**"CSV file not found"**
- Check file path is correct
- Use absolute path if needed

**"Error processing row"**
- Verify CSV headers match template
- Check for special characters
- Ensure required fields are present

**"Module not found"**
- Run: `npm install csv-parser xlsx`

## 📖 Full Documentation
See: `scripts/README-IMPORT.md` for complete documentation. 