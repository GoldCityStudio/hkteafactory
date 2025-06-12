'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FounderIntroPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-emerald-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-96 flex items-center justify-center overflow-hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=2070"
          alt="About Us Hero"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent z-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-20 text-center text-white p-4"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
            創辦人介紹
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90">
            「烘茶源」的靈魂人物
          </p>
        </motion.div>
      </motion.section>

      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white p-8 rounded-lg shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex-shrink-0"
            >
              <Image
                src="/images/founder.jpg"
                alt="Founder Mr. Chan"
                width={300}
                height={300}
                className="rounded-full shadow-lg object-cover w-64 h-64 md:w-80 md:h-80 border-4 border-emerald-200"
              />
            </motion.div>
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                「烘茶源」的創辦人陳先生，自幼便與茶結下了不解之緣。他成長於一個世代茶農家庭，對茶葉的生長、採摘、製作過程耳濡目染。在香港這座國際都市，陳先生意識到雖然茶文化根深蒂固，但市場上缺乏真正能夠代表傳統與創新並存的優質茶品牌。
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                懷揣著將家鄉好茶推廣至世界的願景，陳先生毅然投身茶葉行業，並在過去三十年間，將畢生精力投入到茶葉的深度研究與品質把控中。他堅信，一杯好茶不僅是味蕾的享受，更是心靈的滋養。他親自走訪各大茶山，與茶農深入交流，從源頭確保每一片茶葉的純淨與天然。
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                陳先生不僅繼承了家族世代相傳的製茶工藝，更積極學習和引進現代科技，將傳統與現代完美融合。他領導團隊不斷創新，開發出符合現代人生活節奏的便捷茶品，同時堅持傳統茶葉的純粹與品質。他始終相信，只有對茶葉充滿敬意，才能做出真正打動人心的好茶。
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                如今，「烘茶源」已成為業界的佼佼者，這一切都離不開陳先生三十年如一日的堅持與付出。他不僅是品牌的靈魂人物，更是東方茶文化的傳承者與推廣者。他希望透過「烘茶源」，讓更多人愛上茶，享受茶帶來的健康與美好。
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 

