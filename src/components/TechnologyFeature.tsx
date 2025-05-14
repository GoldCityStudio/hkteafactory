import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Language } from '@/app/types';

type TechnologyFeatureProps = {
  title: string;
  description: string;
  image: string;
  language: Language;
};

export default function TechnologyFeature({ title, description, image, language }: TechnologyFeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
    >
      <div className="w-full md:w-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative aspect-video rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
      <div className="w-full md:w-1/2">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-serif font-medium text-gray-900 mb-4"
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
} 