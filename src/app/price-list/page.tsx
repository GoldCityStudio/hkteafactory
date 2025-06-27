'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import type { Language } from '@/app/types';

interface PriceListProduct {
  id: string;
  name: { zh: string; en: string };
  weight: string;
  price: number;
  description?: string;
  category: string;
  isNew?: boolean;
  isPremium?: boolean;
}

const priceListData: Record<string, PriceListProduct[]> = {
  'green-tea': [
    { id: '1', name: { zh: '明前獅峰龍井', en: 'Premium Lion Peak Longjing Tea' }, weight: '250g', price: 1388, category: 'green-tea', isPremium: true },
    { id: '2', name: { zh: '明前龍井', en: 'Premium Longjing Tea' }, weight: '250g', price: 880, category: 'green-tea' },
    { id: '3', name: { zh: '雨前龍井', en: 'Superior Longjing Tea' }, weight: '250g', price: 498, category: 'green-tea' },
    { id: '4', name: { zh: '雨前龍井', en: 'Superior Longjing Tea' }, weight: '60g (12x5g)', price: 148, category: 'green-tea' },
    { id: '5', name: { zh: '獅峰龍井', en: 'Lion Peak Longjing Tea' }, weight: '250g', price: 380, category: 'green-tea' },
    { id: '6', name: { zh: '一級龍井', en: 'Longjing Tea' }, weight: '250g', price: 268, category: 'green-tea' },
    { id: '7', name: { zh: '春風香片', en: 'Jasmine Tea' }, weight: '250g', price: 118, category: 'green-tea' },
    { id: '7.1', name: { zh: '春風香片', en: 'Jasmine Tea' }, weight: '160g (20x8g)', price: 88, category: 'green-tea' },
    { id: '8', name: { zh: '龍珠花茶', en: 'Dragon Pearl Jasmine Tea' }, weight: '250g', price: 318, category: 'green-tea' },
    { id: '8.1', name: { zh: '龍珠花茶', en: 'Dragon Pearl Jasmine Tea' }, weight: '70g (10x7g)', price: 98, category: 'green-tea' },
    { id: '9', name: { zh: '雲霧綠茶', en: 'Mist Green Tea' }, weight: '250g', price: 168, category: 'green-tea' },
    { id: '10', name: { zh: '特級碧螺春', en: 'Superior Green Spiral Spring Tea' }, weight: '250g', price: 338, category: 'green-tea' },
    { id: '11', name: { zh: '明前毛尖', en: 'Premium Maojian tea' }, weight: '125g', price: 280, category: 'green-tea' },
    { id: 'SO1', name: { zh: '稀有明前獅峰龍井', en: 'Rare Premium Lion Peak Longjing Tea' }, weight: '250g', price: 12800, category: 'green-tea', isPremium: true, isNew: true },
    { id: 'SO2', name: { zh: '稀有明前碧螺春', en: 'Rare Bi Luo Chun Tea' }, weight: '150g', price: 4800, category: 'green-tea', isPremium: true },
  ],
  'black-tea': [
    { id: '1', name: { zh: '正山小種', en: 'Lapsang Souchong Tea' }, weight: '125g', price: 148, category: 'black-tea' },
    { id: '2', name: { zh: '松針紅茶', en: 'Pine Needle Black Tea' }, weight: '300g', price: 888, category: 'black-tea' },
    { id: '3', name: { zh: '金駿眉', en: 'Jin Jun Mei Tea' }, weight: '125g', price: 368, category: 'black-tea' },
    { id: '4', name: { zh: '桂花九曲紅梅紅茶', en: 'Osmanthus Black Tea' }, weight: '150g', price: 338, category: 'black-tea' },
    { id: '5', name: { zh: '精選松針紅茶', en: 'Deluxe Pine Needle Black Tea' }, weight: '150g', price: 118, category: 'black-tea' },
  ],
  'oolong-tea': [
    { id: '1', name: { zh: '極品鐵觀音', en: 'Top-Grade Tie-Guan-Yin' }, weight: '250g', price: 168, category: 'oolong-tea' },
    { id: '2', name: { zh: '馬騮搣', en: 'Monkey Pick Tie-Guan-Yin Tea' }, weight: '250g', price: 268, category: 'oolong-tea' },
    { id: '3', name: { zh: '極品觀音皇', en: 'King of Tie-Guan-Yin' }, weight: '250g', price: 388, category: 'oolong-tea' },
    { id: '4', name: { zh: '精選觀音皇', en: 'Deluxe Tie-Guan-Yin' }, weight: '250g', price: 468, category: 'oolong-tea' },
    { id: '5', name: { zh: '參賽觀音皇', en: 'Champion of Tie-Guan-Yin' }, weight: '250g', price: 498, category: 'oolong-tea' },
    { id: '6', name: { zh: '招牌觀音皇', en: 'Signature Tea of Tie-Guan-Yin' }, weight: '250g', price: 698, category: 'oolong-tea' },
    { id: '7', name: { zh: '金牌觀音皇', en: 'Gold Signature Tea of Tie-Guan-Yin' }, weight: '250g', price: 2180, category: 'oolong-tea', isPremium: true },
    { id: '8', name: { zh: '桂花烏龍', en: 'Osmanthus Oolong Tea' }, weight: '250g', price: 118, category: 'oolong-tea' },
    { id: '9', name: { zh: '炭燒烏龍', en: 'Roasted Oolong Tea' }, weight: '250g', price: 68, category: 'oolong-tea' },
    { id: '10', name: { zh: '安溪鐵觀音', en: 'Anxi Tie-Guan-Yin Tea' }, weight: '250g', price: 68, category: 'oolong-tea' },
    { id: '11', name: { zh: '蘭貴人', en: 'Ginseng Oolong Tea' }, weight: '250g', price: 168, category: 'oolong-tea' },
    { id: '12', name: { zh: '鳳凰單叢 鴨屎香', en: 'Phoenix Oolong Milky Honeysuckle Flavour' }, weight: '125g', price: 348, category: 'oolong-tea' },
    { id: '13', name: { zh: '烏崬單叢 黃枝香', en: 'Phoenix Oolong Yellow Gardenia Flavour' }, weight: '250g', price: 218, category: 'oolong-tea' },
    { id: '14', name: { zh: '大紅袍', en: 'Da-hong-Pao Tea' }, weight: '250g', price: 218, category: 'oolong-tea' },
    { id: '15', name: { zh: '大紅袍（濃香）', en: 'Da-hong-Pao Tea (Strong Aroma)' }, weight: '160g (20x8g)', price: 380, category: 'oolong-tea' },
  ],
  'white-tea': [
    { id: '1', name: { zh: '壽眉王', en: 'King of Shou-mei Tea' }, weight: '120g', price: 88, category: 'white-tea' },
    { id: '2', name: { zh: '白毫銀針', en: 'White Hair Silver Needle Tea' }, weight: '125g', price: 368, category: 'white-tea' },
    { id: '3', name: { zh: '雪芽銀針', en: 'White Bud Silver Needle Tea' }, weight: '150g', price: 298, category: 'white-tea' },
    { id: '4', name: { zh: '精選雪芽牡丹', en: 'Deluxe White Peony Tea' }, weight: '125g', price: 280, category: 'white-tea' },
  ],
  'pu-erh': [
    { id: '1', name: { zh: '陳香普洱', en: 'Pu-erh Tea' }, weight: '500g', price: 380, category: 'pu-erh' },
    { id: '2', name: { zh: '陳香宮廷普洱', en: 'Top-Grade Pu-erh Tea' }, weight: '250g', price: 268, category: 'pu-erh' },
    { id: '3', name: { zh: '陳香宮廷普洱', en: 'Top-Grade Pu-erh Tea' }, weight: '500g', price: 536, category: 'pu-erh' },
    { id: '4', name: { zh: '珍藏普洱', en: 'Superior Pu-erh Tea' }, weight: '250g', price: 318, category: 'pu-erh' },
    { id: '5', name: { zh: '喬木普洱', en: 'Arbor Pu-erh Tea' }, weight: '250g', price: 498, category: 'pu-erh' },
    { id: '6', name: { zh: '宮廷普洱', en: 'Palace Pu-erh Tea' }, weight: '250g', price: 498, category: 'pu-erh' },
    { id: '7', name: { zh: '新會小青柑普洱茶', en: 'Tangerine Pu-erh Tea' }, weight: '250g', price: 480, category: 'pu-erh' },
    { id: '8', name: { zh: '金芽宮廷普洱', en: 'Golden Palace Pu-erh Tea' }, weight: '250g(30年)', price: 1280, category: 'pu-erh', isPremium: true },
    { id: '9', name: { zh: '六堡茶', en: 'Liu-Pao Tea' }, weight: '125g(珍藏25年)', price: 648, category: 'pu-erh' },
    { id: '10', name: { zh: '陳普金珠', en: 'Aged Pu-erh Golden Pearl' }, weight: '200g', price: 480, category: 'pu-erh' },
  ],
  'taiwan-tea': [
    { id: '1', name: { zh: '福壽梨山茶', en: 'Slamaw Oolong Tea' }, weight: '75g', price: 298, category: 'taiwan-tea' },
    { id: '2', name: { zh: '大禹嶺高山茶', en: 'Dayuling Oolong Tea' }, weight: '75g', price: 328, category: 'taiwan-tea' },
    { id: '2.1', name: { zh: '大禹嶺高山茶', en: 'Dayuling Oolong Tea' }, weight: '150g', price: 596, category: 'taiwan-tea' },
    { id: '3', name: { zh: '阿里山珠露茶', en: 'Alishan Oolong Tea' }, weight: '150g', price: 248, category: 'taiwan-tea' },
    { id: '4', name: { zh: '阿里山金宣茶', en: 'Alishan Jin Xuan Tea' }, weight: '150g', price: 248, category: 'taiwan-tea' },
    { id: '5', name: { zh: '文山包種茶', en: 'Wenshen Paochong Tea' }, weight: '150g', price: 268, category: 'taiwan-tea' },
    { id: '6', name: { zh: '雪霸蜜香烏龍茶', en: 'Shei Pa Honey Scented Oolong Tea' }, weight: '150g', price: 288, category: 'taiwan-tea' },
    { id: '7', name: { zh: '阿里山高山紅茶包', en: 'Alishan High Mountain Black Tea' }, weight: '90g (3g x 30包)', price: 238, category: 'taiwan-tea' },
    { id: '7.1', name: { zh: '阿里山高山紅茶包', en: 'Alishan High Mountain Black Tea' }, weight: '30g (3g x 10包)', price: 98, category: 'taiwan-tea' },
    { id: '8', name: { zh: '文山包種茶包', en: 'Wenshen Paochong Tea' }, weight: '90g (3g x 30包)', price: 238, category: 'taiwan-tea' },
    { id: '8.1', name: { zh: '文山包種茶包', en: 'Wenshen Paochong Tea' }, weight: '30g (3g x 10包)', price: 98, category: 'taiwan-tea' },
    { id: '9', name: { zh: '東方美人', en: 'Oriental Beauty Tea' }, weight: '150g', price: 538, category: 'taiwan-tea' },
    { id: '10', name: { zh: '凍頂烏龍', en: 'Dongding Oolong tea' }, weight: '150g', price: 480, category: 'taiwan-tea' },
    { id: '11', name: { zh: '凍頂紅水烏龍', en: 'Dongding Red Oolong Tea' }, weight: '150g', price: 538, category: 'taiwan-tea' },
    { id: '12', name: { zh: '梨山高山烏龍', en: 'Slamaw Oolong Tea' }, weight: '150g', price: 598, category: 'taiwan-tea' },
    { id: '13', name: { zh: '三峽蜜香紅茶', en: 'Honey Scented Black Tea' }, weight: '150g', price: 238, category: 'taiwan-tea' },
  ],
  'honey': [
    { id: '1', name: { zh: '紫椴蜂蜜', en: 'Amur Linden Honey' }, weight: '450g', price: 168, category: 'honey' },
    { id: '2', name: { zh: '棗花蜂蜜', en: 'Jujube Honey' }, weight: '500g', price: 138, category: 'honey' },
    { id: '3', name: { zh: '洋槐蜂蜜', en: 'Acacia Honey' }, weight: '500g', price: 138, category: 'honey' },
    { id: '4', name: { zh: '椴樹蜂蜜', en: 'Linden Honey' }, weight: '500g', price: 88, category: 'honey' },
  ],
  'gift-boxes': [
    { id: 'A1', name: { zh: '招牌觀音皇 ＋ 鳳凰單叢 鴨屎香', en: 'Signature Tea of Tie-Guan-Tin + Phoenix Oolong' }, weight: '80+60 = 140g', price: 438, category: 'gift-boxes' },
    { id: 'A2', name: { zh: '喬木普洱', en: 'Arbor Pu-erh Tea' }, weight: '160g', price: 338, category: 'gift-boxes' },
    { id: 'A3', name: { zh: '馬騮摵', en: 'Monkey Pick Tie-Guan-Yin Tea' }, weight: '160g', price: 218, category: 'gift-boxes' },
    { id: 'B1', name: { zh: '白毫銀針', en: 'White Hair Silver Needle Tea' }, weight: '72g', price: 248, category: 'gift-boxes' },
    { id: 'B2', name: { zh: '精選觀音皇 + 鳳凰單叢 鴨屎香 + 大紅袍 (濃香)', en: 'Deluxe Tie-Guan-Yin + Phoenix Oolong + Da-Hong-Pao' }, weight: '24+18+18=60g', price: 180, category: 'gift-boxes' },
    { id: 'B3', name: { zh: '珍藏普洱 + 頂級台灣人蔘烏龍 + 馬騮摵', en: 'Superior Pu-erh + Taiwan Ginseng Oolong + Monkey Pick' }, weight: '24+24+24=72g', price: 148, category: 'gift-boxes' },
    { id: 'B4', name: { zh: '參賽觀音皇 + 龍珠花茶 + 正山小種', en: 'Champion Tie-Guan-Yin + Dragon Pearl + Lapsang Souchong' }, weight: '24+24+24=72g', price: 152, category: 'gift-boxes' },
    { id: 'C1', name: { zh: '白毫銀針 + 招牌鐵觀音', en: 'White Hair Silver Needle + Signature Tie-Guan-Yin' }, weight: '100g+125g', price: 680, category: 'gift-boxes' },
    { id: 'C2', name: { zh: '台灣頂級人蔘烏龍 + 龍珠花茶', en: 'Taiwan Ginseng Oolong + Dragon Pearl Jasmine' }, weight: '250g + 250g', price: 780, category: 'gift-boxes' },
    { id: 'C3', name: { zh: '大紅袍（濃香）+ 松針紅茶', en: 'Da-Hong-Pao (Strong Aroma) + Pine Needle Black Tea' }, weight: '100g (大紅) +125g (松針)', price: 680, category: 'gift-boxes' },
  ],
  'tea-bags': [
    { id: '1', name: { zh: '台灣頂級人蔘烏龍茶包', en: 'Taiwan Ginseng Oolong Tea Bag' }, weight: '45g (3gx15包)', price: 98, category: 'tea-bags' },
    { id: '2', name: { zh: '春風香片茶包', en: 'Jasmine Tea Bag' }, weight: '45g (3gx15包)', price: 68, category: 'tea-bags' },
    { id: '3', name: { zh: '正山小種茶包', en: 'Lapsang Souchong Tea Bag' }, weight: '45g (3gx15包)', price: 88, category: 'tea-bags' },
    { id: '4', name: { zh: '陳香宮廷普洱茶包', en: 'Top-Grade Pu-erh Tea Bag' }, weight: '45g (3gx15包)', price: 68, category: 'tea-bags' },
    { id: '5', name: { zh: '桂花烏龍茶包', en: 'Osmanthus Oolong Tea Bag' }, weight: '45g (3gx15包)', price: 68, category: 'tea-bags' },
    { id: '6', name: { zh: '馬騮搣茶包', en: 'Monkey Pick Tie-Guan-Yin Tea Bag' }, weight: '45g (3gx15包)', price: 88, category: 'tea-bags' },
  ],
};

const categoryNames: Record<string, { zh: string; en: string }> = {
  'green-tea': { zh: '綠茶', en: 'Green Tea' },
  'black-tea': { zh: '紅茶', en: 'Black Tea' },
  'oolong-tea': { zh: '青茶 / 烏龍茶', en: 'Oolong Tea' },
  'white-tea': { zh: '白茶', en: 'White Tea' },
  'pu-erh': { zh: '普洱 / 黑茶', en: 'Pu-erh / Black Tea' },
  'taiwan-tea': { zh: '台灣茶', en: 'Taiwan Tea' },
  'honey': { zh: '蜜糖', en: 'Honey' },
  'gift-boxes': { zh: '禮盒', en: 'Gift Boxes' },
  'tea-bags': { zh: '茶包', en: 'Tea Bags' },
};

export default function PriceListPage() {
  const [language, setLanguage] = useState<Language>('zh');
  const [selectedCategory, setSelectedCategory] = useState<string>('green-tea');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('zh-HK', {
      style: 'currency',
      currency: 'HKD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              {language === 'zh' ? '2025年價格表' : '2025 Price List'}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {language === 'zh' ? '探索烘茶源的完整產品系列' : 'Explore HK Tea Factory\'s Complete Product Range'}
            </p>
            
            {/* Language Toggle */}
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => setLanguage('zh')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  language === 'zh'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                中文
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  language === 'en'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                English
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto space-x-1 py-4">
            {Object.entries(categoryNames).map(([key, name]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === key
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {name[language]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
            {categoryNames[selectedCategory][language]}
          </h2>
          
          <div className="grid gap-6">
            {priceListData[selectedCategory]?.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {product.id}
                      </span>
                      {product.isNew && (
                        <span className="text-xs font-medium text-white bg-red-500 px-2 py-1 rounded">
                          {language === 'zh' ? '新品' : 'NEW'}
                        </span>
                      )}
                      {product.isPremium && (
                        <span className="text-xs font-medium text-white bg-amber-500 px-2 py-1 rounded">
                          {language === 'zh' ? '極品' : 'PREMIUM'}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {product.name[language]}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {language === 'zh' ? '重量' : 'Weight'}: {product.weight}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-600">
                      {formatPrice(product.price)}
                    </div>
                    <button className="mt-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors text-sm">
                      {language === 'zh' ? '加入購物車' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer Note */}
      <div className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">
              {language === 'zh' 
                ? '所有價格均以港幣計算，如有查詢請聯絡我們。' 
                : 'All prices are in Hong Kong Dollars. Please contact us for any inquiries.'
              }
            </p>
            <p className="text-sm">
              {language === 'zh' 
                ? '價格如有變動，恕不另行通知。' 
                : 'Prices are subject to change without notice.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 