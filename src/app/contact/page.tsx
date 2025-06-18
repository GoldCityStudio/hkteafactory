'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">聯絡我們</h1>
        <p className="text-lg text-gray-600">我們期待聽到您的聲音</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">聯絡方式</h2>
            <div className="space-y-4">
              <p className="flex items-center text-gray-700">
                <span className="font-medium mr-2">電郵：</span>
                <a href="mailto:hongkongteafactory@gmail.com" className="text-emerald-600 hover:text-emerald-700">
                  hongkongteafactory@gmail.com
                </a>
              </p>
              <p className="flex items-center text-gray-700">
                <span className="font-medium mr-2">電話：</span>
                <a href="tel:+85266925798" className="text-emerald-600 hover:text-emerald-700">
                  (852) 66925798
                </a>
              </p>
              <p className="flex items-center text-gray-700">
                <span className="font-medium mr-2">Instagram：</span>
                <a href="https://instagram.com/hkteafactory" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700">
                  @hkteafactory
                </a>
              </p>
              <p className="flex items-center text-gray-700">
                <span className="font-medium mr-2">Facebook：</span>
                <a href="https://facebook.com/hkteafactory" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700">
                  hkteafactory
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">門市位置</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">銷售點</h3>
                <p className="text-gray-700">
                  九龍塘達之路80號又一城MTR層5號TASTE超市專櫃
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">辦公室</h3>
                <p className="text-gray-700">
                  香港尖沙咀金巴利道74-76號奇盛中心16樓B室<br/>
                  Flat B, 16/F, Kee Shing Centre, 74-76 Kimberley Road, Tsim Sha Tsui, Hong Kong
                </p>
              </div>
            </div>
          </div>

          {/* Google Maps for Sales Point and Office */}
          <div className="flex flex-col md:flex-row gap-6 justify-center mt-8">
            <div className="flex-1 min-w-[260px]">
              <div className="font-semibold text-emerald-700 mb-2">銷售點</div>
              <iframe
                src="https://www.google.com/maps?q=又一城TASTE&output=embed"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: '12px', marginBottom: '1rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex-1 min-w-[260px]">
              <div className="font-semibold text-emerald-700 mb-2">辦公室</div>
              <iframe
                src="https://www.google.com/maps?q=Kee+Shing+Centre,+74-76+Kimberley+Road,+Tsim+Sha+Tsui&output=embed"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                姓名 *
              </label>
              <input
                type="text"
                id="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                電郵 *
              </label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                電話
              </label>
              <input
                type="tel"
                id="phone"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                信息 *
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              提交
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
} 