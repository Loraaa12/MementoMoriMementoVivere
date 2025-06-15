import React, { createContext, useContext, useState, useEffect } from 'react';
import enTranslations from '../translations/en';
import bgTranslations from '../translations/bg';

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [isEnglish, setIsEnglish] = useState(() => {
    try {
      const savedState = localStorage.getItem('isEnglish');
      return savedState !== null ? JSON.parse(savedState) : true;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return true;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('isEnglish', JSON.stringify(isEnglish));
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  }, [isEnglish]);

  const translations = isEnglish ? enTranslations : bgTranslations;

  const toggleLanguage = () => {
    setIsEnglish(prev => !prev);
  };

  return (
    <TranslationContext.Provider value={{ translations, isEnglish, toggleLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}; 