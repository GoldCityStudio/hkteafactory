import ImportedProducts from '@/components/ImportedProducts';
import type { Language } from '@/app/types';

export default function ImportedProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Imported Products Demo
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This page demonstrates the Excel import system. Products are loaded from the API endpoint 
            that was generated from your CSV file.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            All Imported Products
          </h2>
          <ImportedProducts showFilters={true} language="en" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Green Tea Products
            </h2>
            <ImportedProducts category="green-tea" language="en" />
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Oolong Tea Products
            </h2>
            <ImportedProducts category="oolong-tea" language="en" />
          </div>
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            How to Use This System
          </h3>
          <div className="space-y-3 text-gray-600">
            <p>
              <strong>1. Prepare your Excel file:</strong> Use the template in <code className="bg-gray-100 px-2 py-1 rounded">scripts/product-template.csv</code>
            </p>
            <p>
              <strong>2. Convert to CSV:</strong> Save your Excel file as CSV format
            </p>
            <p>
              <strong>3. Run the import:</strong> <code className="bg-gray-100 px-2 py-1 rounded">node scripts/import-products.js your-file.csv</code>
            </p>
            <p>
              <strong>4. Use in your components:</strong> Import and use the <code className="bg-gray-100 px-2 py-1 rounded">ImportedProducts</code> component
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 