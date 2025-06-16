import React from 'react';
import PageTemplate from './PageTemplate';
import { useTranslation } from '../context/TranslationContext';

const Page2 = () => {
    const { translations } = useTranslation();
  return (
    <PageTemplate title={translations.theEchoTitle}>
      {/* Concept Explanation Container */}
      <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-gray-800/30 mb-12">
        <h2 className="text-2xl font-semibold mb-4">{translations.concept}</h2>
        <p className="text-gray-300 leading-relaxed">
          {translations.theEchoConcept}
        </p>
      </div>

      {/* Works Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 border border-gray-800/30">
          <h2 className="text-xl font-semibold mb-4">{translations.journeyToOneselfTitle}</h2>
          <div className="text-gray-400 text-sm mb-4 italic">
            {translations.literature}
          </div>
          <div className="text-gray-400 text-sm mb-4 italic">
          „…А колкото и мъчителна да е липсата на красота…
            …Понякога частта е по-голяма от цялото. Аз кондензирам в себе си…
            Няма да пропадна в света, каквото и да ми се случи. Аз нося… откраднати векове…" 
          </div>
          <p className="text-gray-300 mb-4">
            {translations.journeyToOneself}
          </p>
          <a 
            href="https://chitanka.info/text/25158-pytuvane-kym-sebe-si" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {translations.viewSource} →
          </a>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 border border-gray-800/30">
          <h2 className="text-xl font-semibold mb-4">{translations.tearsInHeavenTitle}</h2>
          <div className="text-gray-400 text-sm mb-4 italic">
            {translations.music}
          </div>
          <div className="text-gray-400 text-sm mb-4 italic">
          "Would it be the same if I saw you in heaven? I must be strong and carry on…"
          </div>
          <p className="text-gray-300 mb-4">
            {translations.tearsInHeaven}
          </p>
          <a 
            href="https://www.youtube.com/watch?v=JxPj3GAYYZ0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {translations.viewSource} →
          </a>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 border border-gray-800/30">
          <h2 className="text-xl font-semibold mb-4">{translations.cocoTitle}</h2>
          <div className="text-gray-400 text-sm mb-4 italic">
            {translations.film}
          </div>
          <div className="text-gray-400 text-sm mb-4 italic">
          "Mama Imelda… I forgot what you said — forgetting is like dying."
          </div>
          <p className="text-gray-300 mb-4">
            {translations.coco}
          </p>
          <a 
            href="https://www.imdb.com/title/tt2380307/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {translations.viewSource} →
          </a>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 border border-gray-800/30">
          <h2 className="text-xl font-semibold mb-4">{translations.terrorManagementTitle}</h2>
          <div className="text-gray-400 text-sm mb-4 italic">
            {translations.scientific}
          </div>
          <div className="text-gray-400 text-sm mb-4 italic">
          "When reminded of death, humans cling to cultural meaning, legacy, and relationships to give their life significance and transcendence."
          </div>
          <p className="text-gray-300 mb-4">
            {translations.terrorManagement}
          </p>
          <a 
            href="https://en.wikipedia.org/wiki/Terror_management_theory" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {translations.viewSource} →
          </a>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 border border-gray-800/30">
          <h2 className="text-xl font-semibold mb-4">{translations.anticipatoryGriefTitle}</h2>
          <div className="text-gray-400 text-sm mb-4 italic">
            {translations.scientific}
          </div>
          <div className="text-gray-400 text-sm mb-4 italic">
          "We were already grieving her before she died. But in those last weeks, we were more alive—more
            loving—than we had been in years."
          </div>
          <p className="text-gray-300 mb-4">
            {translations.anticipatoryGrief}
          </p>
          <a 
            href="https://www.healthdirect.gov.au/understanding-anticipatory-grief#:~:text=Anticipatory%20grief%20refers%20to%20feelings,one%20may%20experience%20anticipatory%20grief." 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {translations.viewSource} →
          </a>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 border border-gray-800/30">
          <h2 className="text-xl font-semibold mb-4">{translations.griefObservedTitle}</h2>
          <div className="text-gray-400 text-sm mb-4 italic">
            {translations.literature}
          </div>
          <div className="text-gray-400 text-sm mb-4 italic">
          "Her absence is like the sky, spread over everything."
          </div>
          <p className="text-gray-300 mb-4">
            {translations.griefObserved}
          </p>
          <a 
            href="https://gutenberg.ca/ebooks/lewiscs-agriefobserved/lewiscs-agriefobserved-00-h.html" 
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

export default Page2; 