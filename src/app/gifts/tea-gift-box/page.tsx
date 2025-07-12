'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const giftBoxes = [
  {
    id: 'premium-collection',
    name: '尊貴茶葉禮盒',
    description: '精選多款優質茶葉，包括龍井、鐵觀音、普洱等，搭配精美木盒包裝。',
    price: 'HK$1,288',
    image: '/images/longjing-premium.jpg',
    contents: [
      '明前獅峰龍井 100g',
      '鐵觀音 100g',
      '班章宮廷普洱餅 200g',
      '精選花茶 50g'
    ]
  },
  {
    id: 'green-tea-collection',
    name: '綠茶禮盒',
    description: '精選多款優質綠茶，包括龍井、碧螺春等，搭配精美陶瓷茶具。',
    price: 'HK$988',
    image: '/images/green-tea.jpg',
    contents: [
      '明前獅峰龍井 100g',
      '雨前龍井 100g',
      '碧螺春 100g',
      '精美陶瓷茶具一套'
    ]
  },
  {
    id: 'pu-erh-collection',
    name: '普洱禮盒',
    description: '精選多款優質普洱茶，包括生茶和熟茶，搭配精美茶具。',
    price: 'HK$1,188',
    image: '/images/dark-tea.jpg',
    contents: [
      '班章宮廷普洱餅 200g',
      '易武古樹普洱 200g',
      '勐海熟茶 200g',
      '精美茶具一套'
    ]
  }
];

export default function TeaGiftBoxPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Introduction Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-6">茶葉禮盒</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">
            精選優質茶葉，搭配精美包裝，是送禮的最佳選擇。我們的茶葉禮盒匯集了各種頂級茶葉，
            從清新的綠茶到醇厚的普洱，每一款都經過精心挑選，確保品質卓越。
          </p>
          <p className="text-lg text-gray-600 mb-8">
            無論是送給長輩、朋友還是商務夥伴，我們的茶葉禮盒都能傳達您的心意。
            精美的包裝設計既實用又美觀，讓收禮者感受到您的用心。
          </p>
        </div>
      </motion.div>

      {/* Product Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">精選禮盒系列</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {giftBoxes.map((box, index) => (
            <motion.div
              key={box.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.div
                  className="w-full h-full"
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src={box.image}
                    alt={box.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {box.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {box.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">禮盒內容：</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {box.contents.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-emerald-600">
                    {box.price}
                  </span>
                  <button className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition-colors">
                    加入購物車
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Custom Gift Box Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-16 bg-gray-50 rounded-lg p-8"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">客製化禮盒</h2>
          <p className="text-lg text-gray-600">
            需要特別的茶葉組合？我們可以為您量身定制禮盒內容。
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <button className="w-full bg-emerald-600 text-white py-3 px-6 rounded-md hover:bg-emerald-700 transition-colors">
            聯絡我們訂製禮盒
          </button>
        </div>
      </motion.div>
    </div>
  );
} 