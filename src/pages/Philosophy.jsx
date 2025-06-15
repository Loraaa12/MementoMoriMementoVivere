import React from 'react';
import PageTemplate from './PageTemplate';
import { useTranslation } from '../context/TranslationContext';

const Philosophy = () => {
    const { translations } = useTranslation();

  return (
    <PageTemplate title="Memento Mori - Memento Vivere" >
      <div className="text-center mb-8">
        <p className="text-gray-400 text-xl">
          {translations.remember}
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-gray-800/30">
          <p className="text-gray-300 leading-relaxed">
          {translations.explanationPhilosophy}
          </p>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-gray-800/30">
          <p className="text-gray-300 leading-relaxed">
          {translations.explanationSite}
          </p>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Philosophy; 