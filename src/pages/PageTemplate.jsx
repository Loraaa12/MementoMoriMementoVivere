import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../context/TranslationContext';
import TranslationButton from '../components/TranslationButton';
import Card from '../components/Card';

const PageTemplate = ({ title, children, cards = [] }) => {
  const { translations } = useTranslation();

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="inline-block mb-8 text-gray-400 hover:text-white transition-colors"
        >
          {translations.backToHome}
        </Link>
        <h1 className="text-4xl font-bold mb-12">{title}</h1>
        {children}
        
        {cards.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">{translations.relatedWorks}</h2>
            <div className="space-y-6">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  link={card.link}
                  excerpt={card.excerpt}
                  explanation={card.explanation}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <TranslationButton />
    </div>
  );
};

export default PageTemplate; 