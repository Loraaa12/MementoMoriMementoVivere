import React from 'react';
import PageTemplate from './PageTemplate';
import { useTranslation } from '../context/TranslationContext';

const Page3 = () => {
  const { translations } = useTranslation();

  return (
    <PageTemplate title={translations.theWarmFlameTitle}>
      {/* Concept Explanation Container */}
      <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-gray-800/30 mb-12">
        <h2 className="text-2xl font-semibold mb-4">{translations.concept}</h2>
        <p className="text-gray-300 leading-relaxed">
          {translations.theWarmFlameConcept}
        </p>
      </div>

      {/* Works Grid */}
      <div className="grid grid-cols-3 gap-8">
        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-gray-800/30">
          <h2 className="text-xl font-semibold mb-4">{translations.selflessnessTitle}</h2>
          <div className="text-gray-400 text-sm mb-4 italic">
            {translations.science}
          </div>
          <div className="text-gray-400 text-sm mb-4 italic">
            "Altruistic (other‑regarding) emotions and behaviors are associated with greater well‑being, health, and longevity."
          </div>
          <p className="text-gray-300 mb-4">
            {translations.selflessness}
          </p>
          <a 
            href="https://pubmed.ncbi.nlm.nih.gov/15901215/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >{translations.viewSource}
             →
          </a>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-gray-800/30">
          <h2 className="text-xl font-semibold mb-4">{translations.returningHomeTitle}</h2>
          <div className="text-gray-400 text-sm mb-4 italic">
            {translations.literature}
          </div>
          <div className="text-gray-400 text-sm mb-4 italic">
            „Да се присрещне старата на прага / и сложил чело на 
            безсилно рамо… аз дойдох да дочакам мирен заник, / че мойто слънце своя път измина…"
          </div>
          <p className="text-gray-300 mb-4">
            {translations.returningHome}
          </p>
          <a 
            href="https://poetrytranslated.wordpress.com/2017/10/21/returning-home-to-childhoods-only-place/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {translations.viewSource} →
          </a>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-gray-800/30">
          <h2 className="text-xl font-semibold mb-4">{translations.meditationsTitle}</h2>
          <div className="text-gray-400 text-sm mb-4 italic">
            {translations.philosophy}
          </div>
          <div className="text-gray-400 text-sm mb-4 italic">
            "Waste no more time arguing what a good man should be. Be one."
          </div>
          <p className="text-gray-300 mb-4">
            {translations.meditations}
          </p>
          <a 
            href="https://classics.mit.edu/Antoninus/meditations.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {translations.viewSource} →
          </a>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-gray-800/30">
          <h2 className="text-xl font-semibold mb-4">{translations.logotherapyTitle}</h2>
          <div className="text-gray-400 text-sm mb-4 italic">
            {translations.philosophy}
          </div>
          <div className="text-gray-400 text-sm mb-4 italic">
            "Life has meaning under all circumstances… Our main motivation is the will to find meaning… by creating a work or doing a deed"
          </div>
          <p className="text-gray-300 mb-4">
            {translations.logotherapy}
          </p>
          <a 
            href="https://en.wikipedia.org/wiki/Logotherapy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {translations.viewSource} →
          </a>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-gray-800/30">
          <h2 className="text-xl font-semibold mb-4">{translations.ourTownTitle}</h2>
          <div className="text-gray-400 text-sm mb-4 italic">
            {translations.literature}
          </div>
          <div className="text-gray-400 text-sm mb-4 italic">
            "Emily returns to town to revisit her twelfth birthday and sees her mother dusting.
            (Emily): 'Do any human beings ever realize life while they live it?—every, every minute?'"
          </div>
          <p className="text-gray-300 mb-4">
            {translations.ourTown}
          </p>
          <a 
            href="https://irp.cdn-website.com/b5cf95f0/files/uploaded/ourtownpdf.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {translations.viewSource} →
          </a>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-gray-800/30">
          <h2 className="text-xl font-semibold mb-4">{translations.leanOnMeTitle}</h2>
          <div className="text-gray-400 text-sm mb-4 italic">
            {translations.music}
          </div>
          <div className="text-gray-400 text-sm mb-4 italic">
            "Lean on me, when you're not strong, and I'll be your friend…"
          </div>
          <p className="text-gray-300 mb-4">
            {translations.leanOnMe}
          </p>
          <a 
            href="https://www.youtube.com/watch?v=fOZ-MySzAac" 
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

export default Page3; 