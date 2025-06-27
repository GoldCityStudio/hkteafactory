const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

/**
 * Convert Excel file to CSV
 * @param {string} excelFilePath - Path to Excel file
 * @param {string} outputPath - Output CSV file path
 * @param {string} sheetName - Sheet name to convert (defaults to first sheet)
 */
function excelToCsv(excelFilePath, outputPath, sheetName = null) {
  try {
    // Read the Excel file
    const workbook = xlsx.readFile(excelFilePath);
    
    // Get the first sheet if no specific sheet is provided
    const sheet = sheetName ? workbook.Sheets[sheetName] : workbook.Sheets[workbook.SheetNames[0]];
    
    if (!sheet) {
      throw new Error(`Sheet "${sheetName}" not found. Available sheets: ${workbook.SheetNames.join(', ')}`);
    }
    
    // Convert to CSV
    const csvContent = xlsx.utils.sheet_to_csv(sheet);
    
    // Write to file
    fs.writeFileSync(outputPath, csvContent, 'utf8');
    
    console.log(`✅ Successfully converted ${excelFilePath} to ${outputPath}`);
    console.log(`📊 Sheet: ${sheetName || workbook.SheetNames[0]}`);
    console.log(`📝 Rows: ${csvContent.split('\n').length - 1}`);
    
    return csvContent;
  } catch (error) {
    console.error('❌ Error converting Excel to CSV:', error.message);
    throw error;
  }
}

/**
 * List all sheets in an Excel file
 * @param {string} excelFilePath - Path to Excel file
 */
function listSheets(excelFilePath) {
  try {
    const workbook = xlsx.readFile(excelFilePath);
    console.log('📋 Available sheets:');
    workbook.SheetNames.forEach((sheetName, index) => {
      console.log(`  ${index + 1}. ${sheetName}`);
    });
    return workbook.SheetNames;
  } catch (error) {
    console.error('❌ Error reading Excel file:', error.message);
    throw error;
  }
}

// CLI usage
if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0];
  
  if (!command) {
    console.log('Usage:');
    console.log('  node excel-to-csv.js list <excel-file>');
    console.log('  node excel-to-csv.js convert <excel-file> [output-csv] [sheet-name]');
    console.log('');
    console.log('Examples:');
    console.log('  node excel-to-csv.js list products.xlsx');
    console.log('  node excel-to-csv.js convert products.xlsx products.csv');
    console.log('  node excel-to-csv.js convert products.xlsx products.csv "Sheet1"');
    process.exit(1);
  }
  
  const excelFile = args[1];
  
  if (!excelFile || !fs.existsSync(excelFile)) {
    console.error(`❌ Excel file not found: ${excelFile}`);
    process.exit(1);
  }
  
  if (command === 'list') {
    listSheets(excelFile);
  } else if (command === 'convert') {
    const outputFile = args[2] || excelFile.replace(/\.(xlsx|xls)$/, '.csv');
    const sheetName = args[3] || null;
    
    excelToCsv(excelFile, outputFile, sheetName);
  } else {
    console.error(`❌ Unknown command: ${command}`);
    process.exit(1);
  }
}

module.exports = { excelToCsv, listSheets }; 