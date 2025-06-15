import React from 'react';
import { useTranslation } from '../context/TranslationContext';

const TranslationButton = () => {
  const { isEnglish, toggleLanguage } = useTranslation();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-4 right-4 bg-black/40 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-gray-800/30 hover:bg-black/60 transition-colors"
    >
      {isEnglish ? 'BG' : 'EN'}
    </button>
  );
};

export default TranslationButton; 