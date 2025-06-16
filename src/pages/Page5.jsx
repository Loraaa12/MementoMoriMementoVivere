import React from 'react';
import PageTemplate from './PageTemplate';
import vanitasImage from '../assets/images/Vanitas-Still-Life-Pieter-Claesz.jpg';
import hairImage from '../assets/images/hair.jpg';
import diaImage from '../assets/images/diaDeLosMuertos.jfif';
import egyptianImage from '../assets/images/egyptian.jpg';
import cryptImage from '../assets/images/crypt.jpg';
import maskImage from '../assets/images/mask.jfif';
import { useTranslation } from '../context/TranslationContext';

const Page5 = () => {
    const { translations } = useTranslation();
  return (
    <PageTemplate title={translations.theBeautifulCorpseTitle}>
      {/* Concept Explanation Container */}
      <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-gray-800/30 mb-12">
        <h2 className="text-2xl font-semibold mb-4">{translations.concept}</h2>
        <p className="text-gray-300 leading-relaxed">
        {translations.theBeautifulCorpseConcept}
        
        </p>
      </div>

      {/* Works Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 border border-gray-800/30">
          <h2 className="text-xl font-semibold mb-4">{translations.hairJewelryTitle}</h2>
          <div className="relative w-full pt-[56.25%] mb-4">
            <img 
              src={hairImage}
              alt="Victorian Hair Jewelry"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="text-gray-400 text-sm mb-4 italic">
          {translations.visualArt}
          </div>
          <p className="text-gray-300 mb-4">
          {translations.hairJewelry}
          </p>
          <a 
            href="https://www.antiquejewellerycompany.com/mourning-jewellery/?srsltid=AfmBOorj2twPlfluZ-aDbaUdNry9naP1JgtOhFAbApcCfQAfdmxny1EX" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {translations.viewSource} →
          </a>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 border border-gray-800/30">
          <h2 className="text-xl font-semibold mb-4">{translations.vanitasTitle}</h2>
          <div className="relative w-full pt-[56.25%] mb-4">
            <img 
              src={vanitasImage}
              alt="Vanitas Still Life by Pieter Claesz"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="text-gray-400 text-sm mb-4 italic">
          {translations.visualArt}
          </div>
          <p className="text-gray-300 mb-4">
          {translations.vanitas}
          </p>
          <a 
            href="https://www.distilennui.com/journal/my-fascination-with-the-16th-century-vanitas-paintings-of-pieter-claesz.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {translations.viewSource} →
          </a>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 border border-gray-800/30">
          <h2 className="text-xl font-semibold mb-4">{translations.diaTitle}</h2>
          <div className="relative w-full pt-[56.25%] mb-4">
            <img 
              src={diaImage}
              alt="Dia De Los Muertos Sugar Skulls"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="text-gray-400 text-sm mb-4 italic">
          {translations.cultural}
          </div>
          <p className="text-gray-300 mb-4">
          {translations.dia}
          </p>
          <a 
            href="https://www.towson.edu/news/articles/2024/dia-de-los-muertos-explained.html#:~:text=D%C3%ADa%20de%20los%20Muertos%2C%20or,provide%20peace%20to%20its%20celebrants." 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {translations.viewSource} →
          </a>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 border border-gray-800/30">
          <h2 className="text-xl font-semibold mb-4">{translations.egyptTitle}</h2>
          <div className="relative w-full pt-[56.25%] mb-4">
            <img 
              src={egyptianImage}
              alt="Egyptian Burial Rituals"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="text-gray-400 text-sm mb-4 italic">
          {translations.historical}
          </div>
          <p className="text-gray-300 mb-4">
          {translations.egypt}
          </p>
          <a 
            href="https://knowledgevoyager.com/the-art-of-death-a-look-into-the-world-of-memento-mori/#memento-mori-in-ancient-civilizations" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {translations.viewSource} →
          </a>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 border border-gray-800/30">
          <h2 className="text-xl font-semibold mb-4">{translations.cryptTitle}</h2>
          <div className="relative w-full pt-[56.25%] mb-4">
            <img 
              src={cryptImage}
              alt="Capuchin Crypt"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="text-gray-400 text-sm mb-4 italic">
          {translations.historical}
          </div>
          <p className="text-gray-300 mb-4">
          {translations.crypt}
          </p>
          <a 
            href="https://en.wikipedia.org/wiki/Capuchin_Crypt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {translations.viewSource} →
          </a>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 border border-gray-800/30">
          <h2 className="text-xl font-semibold mb-4">{translations.masksTitle}</h2>
          <div className="relative w-full pt-[56.25%] mb-4">
            <img 
              src={maskImage}
              alt="Death Mask"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="text-gray-400 text-sm mb-4 italic">
          {translations.historical}
          </div>
          <p className="text-gray-300 mb-4">
          {translations.masks}
          </p>
          <a 
            href="https://en.wikipedia.org/wiki/Death_mask" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {translations.viewSource} →
          </a>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Page5; 