'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Language } from '@/app/types';

type TechnologyFeatureProps = {
  title: string;
  description: string;
  image: string;
  language: Language;
};

const TechnologyFeature = ({ title, description, image, language }: TechnologyFeatureProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 font-light">{description}</p>
      </div>
    </motion.div>
  );
};

export default TechnologyFeature; 