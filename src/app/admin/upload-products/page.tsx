'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export default function UploadProductsPage() {
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    setUploadedFile(file);
    setUploading(true);
    setMessage(null);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload-products', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({
          type: 'success',
          text: `✅ Successfully imported ${result.productsCount} products!`
        });
      } else {
        throw new Error(result.error || 'Upload failed');
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: `❌ Error: ${error instanceof Error ? error.message : 'Upload failed'}`
      });
    } finally {
      setUploading(false);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-excel': ['.xls']
    },
    multiple: false
  });

  const downloadTemplate = () => {
    const link = document.createElement('a');
    link.href = '/api/download-template';
    link.download = 'product-template.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Upload Product Excel/CSV
          </h1>
          <p className="text-lg text-gray-600">
            Upload your Excel or CSV file to import products into your website
          </p>
        </div>

        {/* Template Download */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-3">
            📋 Get Started
          </h2>
          <p className="text-blue-800 mb-4">
            Download the template to see the required format for your Excel/CSV file.
          </p>
          <button
            onClick={downloadTemplate}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            📥 Download Template
          </button>
        </div>

        {/* Upload Area */}
        <div className="bg-white rounded-lg shadow-sm border-2 border-dashed border-gray-300 p-8">
          <div
            {...getRootProps()}
            className={`text-center cursor-pointer transition-colors ${
              isDragActive 
                ? 'border-green-400 bg-green-50' 
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <input {...getInputProps()} />
            
            {uploading ? (
              <div className="py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
                <p className="text-lg text-gray-600">Uploading and processing...</p>
              </div>
            ) : (
              <div className="py-12">
                <div className="text-6xl mb-4">📁</div>
                {isDragActive ? (
                  <p className="text-lg text-green-600">Drop your file here...</p>
                ) : (
                  <div>
                    <p className="text-lg text-gray-600 mb-2">
                      Drag & drop your Excel or CSV file here
                    </p>
                    <p className="text-gray-500">or click to browse</p>
                    <p className="text-sm text-gray-400 mt-2">
                      Supports .xlsx, .xls, .csv files
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Uploaded File Info */}
        {uploadedFile && (
          <div className="mt-6 bg-gray-50 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">Uploaded File:</h3>
            <p className="text-gray-600">{uploadedFile.name}</p>
            <p className="text-sm text-gray-500">
              Size: {(uploadedFile.size / 1024).toFixed(1)} KB
            </p>
          </div>
        )}

        {/* Message */}
        {message && (
          <div className={`mt-6 p-4 rounded-lg ${
            message.type === 'success' 
              ? 'bg-green-50 border border-green-200 text-green-800' 
              : 'bg-red-50 border border-red-200 text-red-800'
          }`}>
            {message.text}
          </div>
        )}

        {/* Instructions */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            📖 Instructions
          </h2>
          <div className="space-y-3 text-gray-600">
            <div className="flex items-start gap-3">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">1</span>
              <p>Download the template above to see the required format</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">2</span>
              <p>Fill in your product data following the template format</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">3</span>
              <p>Save as CSV or Excel format (.csv, .xlsx, .xls)</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">4</span>
              <p>Upload your file using the area above</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">5</span>
              <p>View your imported products at <code className="bg-gray-100 px-1 rounded">/imported-products</code></p>
            </div>
          </div>
        </div>

        {/* Required Fields */}
        <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            📋 Required Fields
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Required:</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• name_zh (Chinese name)</li>
                <li>• name_en (English name)</li>
                <li>• price (number)</li>
                <li>• category (see categories below)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Optional:</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• description_zh/en</li>
                <li>• stock (number)</li>
                <li>• images (comma-separated URLs)</li>
                <li>• weight, origin, ingredients</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            🏷️ Supported Categories
          </h2>
          <div className="grid md:grid-cols-3 gap-2 text-sm">
            {[
              'green-tea', 'black-tea', 'oolong-tea', 'white-tea',
              'pu-erh', 'flower-tea', 'taiwanese-tea', 'tea-bags',
              'honey-product', 'teaware', 'accessories', 'gift-sets'
            ].map(category => (
              <code key={category} className="bg-gray-100 px-2 py-1 rounded text-gray-700">
                {category}
              </code>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 