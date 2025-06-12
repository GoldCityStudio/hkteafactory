'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-emerald-900 text-white py-12 border-t-8 border-emerald-700 shadow-inner mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <div className="bg-white p-2 rounded-lg">
                <Image
                  src="/logo.png"
                  alt="HK Tea Factory Logo"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                />
              </div>
            </Link>
            <p className="text-emerald-200 text-sm leading-relaxed mb-4">
              「烘茶源」致力於傳承中國千年茶文化，結合現代創新工藝，為您呈現獨一無二的品茶體驗。我們堅持從源頭把控品質，精選全球優質茶葉，讓每一滴茶湯都散發著大自然的芬芳與匠人的心意。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-emerald-300 hover:text-white transition-colors">
                <i className="fab fa-facebook-f"></i> {/* Replace with actual icons */}
              </a>
              <a href="#" className="text-emerald-300 hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-emerald-300 hover:text-white transition-colors">
                <i className="fab fa-wechat"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">快速連結</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-emerald-200 hover:text-white transition-colors text-sm">關於我們</Link></li>
              <li><Link href="/products" className="text-emerald-200 hover:text-white transition-colors text-sm">商店</Link></li>
              <li><Link href="/star-products" className="text-emerald-200 hover:text-white transition-colors text-sm">皇牌產品</Link></li>
              <li><Link href="/gift-customization" className="text-emerald-200 hover:text-white transition-colors text-sm">禮金定製</Link></li>
              <li><Link href="/company-info" className="text-emerald-200 hover:text-white transition-colors text-sm">公司資訊</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">客戶服務</h3>
            <ul className="space-y-3">
              <li><Link href="/delivery-policy" className="text-emerald-200 hover:text-white transition-colors text-sm">送貨政策</Link></li>
              <li><Link href="/privacy-policy" className="text-emerald-200 hover:text-white transition-colors text-sm">私隱政策</Link></li>
              <li><Link href="/terms-of-service" className="text-emerald-200 hover:text-white transition-colors text-sm">服務條款</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">聯絡我們</h3>
            <ul className="space-y-3 text-emerald-200 text-sm">
              <li><i className="fas fa-map-marker-alt mr-2"></i> 香港九龍灣臨興街19號同力工業中心B座1樓11室</li>
              <li><i className="fas fa-phone-alt mr-2"></i> +852 2321 0288</li>
              <li><i className="fas fa-envelope mr-2"></i> info@hkteafactory.com</li>
              <li><i className="fas fa-clock mr-2"></i> 週一至週五：上午9時至下午6時</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-700 pt-8 text-center">
          <p className="text-emerald-300 text-sm">&copy; {new Date().getFullYear()} 烘茶源. 版權所有.</p>
        </div>
      </div>
    </motion.footer>
  );
} 