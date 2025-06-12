import React from 'react';
import Image from 'next/image';

const TaiwanOolongPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">台灣烏龍</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10">
          <div className="w-full md:w-1/2 relative aspect-video rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/taiwan-oolong-tea.jpg"
              alt="台灣烏龍茶"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-lg text-gray-700 leading-relaxed text-center md:text-left md:w-1/2">
            <p className="mb-4">
              台灣烏龍茶是烏龍茶中的精品，以其獨特的風土和精湛的製茶工藝聞名於世。台灣高山烏龍茶，如阿里山烏龍、梨山烏龍、大禹嶺烏龍等，生長於高海拔山區，雲霧繚繞，日夜溫差大，使得茶葉內質豐富，香氣獨特，滋味甘醇。
            </p>
            <p>
              台灣烏龍茶的發酵程度介於綠茶和紅茶之間，因此兼具綠茶的清香和紅茶的醇厚。其沖泡後湯色金黃明亮，香氣清幽，帶有花果香或焙火香，滋味醇厚回甘，喉韻悠長。
            </p>
            <p>
              除了高山烏龍，台灣還有凍頂烏龍、東方美人茶等特色烏龍茶。每一種台灣烏龍茶都承載著台灣茶農的匠心與智慧，值得細細品味。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaiwanOolongPage; 
 
 