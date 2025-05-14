'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Brand Story Section */}
      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">品牌故事</h1>
          <p className="text-lg text-gray-600">傳承三十年的茶葉專業知識</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Image
              src="/images/about/store.jpg"
              alt="烘茶源門市"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <p className="text-gray-700">
              烘茶源由郭小姐創立，延續家族茶葉專業知識的傳統。我們的使命是為顧客提供最優質的茶葉和有機蜂蜜產品。
            </p>
            <p className="text-gray-700">
              創辦人的母親賴女士Ida從事茶葉生意三十多年，擁有豐富的茶葉採購及銷售經驗，對各種茶葉的品種、特性、儲藏方法、辨別茶葉品質的方法等十分熟悉。
            </p>
            <p className="text-gray-700">
              現致力為烘茶源搜羅優質的茶葉，為顧客提供具質素的茶葉產品。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">創辦人介紹</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="order-2 md:order-1 space-y-4"
          >
            <p className="text-gray-700">
              創辦人郭小姐Christina自小熱愛傳統中國文化，加上外祖父及母親從事茶葉生產的家庭背景，因此對傳統中式茶葉培養出濃厚興趣。
            </p>
            <p className="text-gray-700">
              多年來認識到各類茶葉的特性、功效、沖泡方法、茶葉品質的辨別方法等知識，祈望透過烘茶源為顧客介紹更多優質茶葉和蜂蜜產品。
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="order-1 md:order-2"
          >
            <Image
              src="/images/about/founder.jpg"
              alt="創辦人郭小姐"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">認證</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <Image
              src="/images/certifications/oolong.jpg"
              alt="烏龍證書"
              width={300}
              height={400}
              className="rounded-lg shadow-lg mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">烏龍證書</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <Image
              src="/images/certifications/honey.jpg"
              alt="蜂蜜證書"
              width={300}
              height={400}
              className="rounded-lg shadow-lg mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">蜂蜜證書</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <Image
              src="/images/certifications/white-tea.jpg"
              alt="壽眉白茶證書"
              width={300}
              height={400}
              className="rounded-lg shadow-lg mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">壽眉白茶證書</h3>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 