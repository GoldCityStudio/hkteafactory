#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { importProducts } = require('./import-products');
const { excelToCsv } = require('./excel-to-csv');

/**
 * Upload and process Excel/CSV file
 * @param {string} filePath - Path to the file
 */
async function uploadFile(filePath) {
  try {
    console.log(`📁 Processing file: ${filePath}`);
    
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    const ext = path.extname(filePath).toLowerCase();
    let csvPath = filePath;

    // Convert Excel to CSV if needed
    if (ext === '.xlsx' || ext === '.xls') {
      console.log('🔄 Converting Excel to CSV...');
      csvPath = filePath.replace(/\.(xlsx|xls)$/, '.csv');
      await excelToCsv(filePath, csvPath);
      console.log(`✅ Converted to: ${csvPath}`);
    }

    // Import products
    console.log('📦 Importing products...');
    const products = await importProducts(csvPath);

    // Clean up temporary CSV if it was created
    if (csvPath !== filePath) {
      fs.unlinkSync(csvPath);
      console.log('🧹 Cleaned up temporary CSV file');
    }

    console.log(`\n🎉 Success! Imported ${products.length} products`);
    console.log('📊 View your products at: http://localhost:3000/imported-products');
    
    return products;

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// CLI usage
if (require.main === module) {
  const args = process.argv.slice(2);
  const filePath = args[0];

  if (!filePath) {
    console.log('Usage: node upload-excel.js <file-path>');
    console.log('');
    console.log('Examples:');
    console.log('  node upload-excel.js products.xlsx');
    console.log('  node upload-excel.js products.csv');
    console.log('  node upload-excel.js /path/to/your/file.xlsx');
    console.log('');
    console.log('Or use npm script:');
    console.log('  npm run import:products your-file.csv');
    process.exit(1);
  }

  uploadFile(filePath);
}

module.exports = { uploadFile }; 