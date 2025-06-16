import React from 'react';
import PageTemplate from './PageTemplate';
import { useTranslation } from '../context/TranslationContext';

const Page4 = () => {
    const { translations } = useTranslation();
  return (
    <PageTemplate title={translations.theDefiance}>
      {/* Concept Explanation Container */}
      <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-gray-800/30 mb-12">
        <h2 className="text-2xl font-semibold mb-4">{translations.concept}</h2>
        <p className="text-gray-300 leading-relaxed">
           {translations.theDefianceConcept}
        </p>
      </div>

      {/* Works Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 border border-gray-800/30">
          <h2 className="text-xl font-semibold mb-4">{translations.theMythOfSisyphusTitle}</h2>
          <div className="text-gray-400 text-sm mb-4 italic">
          {translations.philosophy}
          </div>
          <div className="text-gray-400 text-sm mb-4 italic">
          "There is but one truly serious philosophical problem, and that is suicide. 
          Judging whether life is or is not worth living amounts to answering the fundamental question of philosophy." <br/>

          "One must imagine Sisyphus happy… The struggle itself toward the heights is enough to fill a man's heart."
          </div>
          <p className="text-gray-300 mb-4">
          {translations.theMythOfSisyphus}
          </p>
          <a 
            href="https://dhspriory.org/kenny/PhilTexts/Camus/Myth%20of%20Sisyphus-.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {translations.viewSource} →
          </a>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 border border-gray-800/30">
          <h2 className="text-xl font-semibold mb-4">Achilles Come Down - Gang of Youths</h2>
          <div className="text-gray-400 text-sm mb-4 italic">
          {translations.music}
          </div>
          <div className="text-gray-400 text-sm mb-4 italic">
          Achilles, Achilles, just put down the bottle<br/>
        Don't listen to what you've consumed<br/>
        It's chaos, confusion and wholly unworthy<br/>
        Of feeding and it's wholly untrue<br/>
        You may feel no purpose nor a point for existing<br/>
        It's all just conjecture and gloom<br/>
        And there may not be meaning, so find one and seize it<br/>
        Do not waste yourself on this roof<br/><br/>
        Hear those bells ring deep in the soul<br/>
        Chiming away for a moment<br/>
        Feel your breath course frankly below<br/>
        And see life as a worthy opponent
          </div>
          <p className="text-gray-300 mb-4">
          {translations.AchillesComeDown}
          </p>
          <a 
            href="https://www.youtube.com/watch?v=T_V76Dm42bY" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {translations.viewSource} →
          </a>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 border border-gray-800/30">
          <h2 className="text-xl font-semibold mb-4">{translations.prayerTitle}</h2>
          <div className="text-gray-400 text-sm mb-4 italic">
          {translations.literature}
          </div>
          <div className="text-gray-400 text-sm mb-4 italic">
            Минаха ли моите години… <br/>
            Ти не ме оставяй да загина –<br/>
            Господи – преди да съм живял!“
          </div>
          <p className="text-gray-300 mb-4">
          {translations.prayer}
          </p>
          <a 
            href="https://liternet.bg/publish7/adalchev/stihove/molitva.htm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {translations.viewSource}→
          </a>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 border border-gray-800/30">
          <h2 className="text-xl font-semibold mb-4">{translations.theDeathOfIvanTitle}</h2>
          <div className="text-gray-400 text-sm mb-4 italic">
          {translations.literature}
          </div>
          <div className="text-gray-400 text-sm mb-4 italic">
          "He trod on. He trod heavily, straight along the line he had been following all his life."<br/>
            …<br/>
            "He suddenly understood: he was wrong, and then he began to lie straight."
          </div>
          <p className="text-gray-300 mb-4">
          {translations.theDeathOfIvan}
          </p>
          <a 
            href="https://web.stanford.edu/~jsabol/existentialism/materials/tolstoy_death_ilyich.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {translations.viewSource} →
          </a>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 border border-gray-800/30">
          <h2 className="text-xl font-semibold mb-4">Everything Everywhere All at Once (2022)</h2>
          <div className="text-gray-400 text-sm mb-4 italic">
          {translations.film}
          </div>
          <div className="text-gray-400 text-sm mb-4 italic">
          "If nothing matters… then we get to choose what matters."
          </div>
          <p className="text-gray-300 mb-4">
          {translations.everythingEverywhere}
          </p>
          <a 
            href="https://www.netflix.com/bg/title/81569721" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {translations.viewSource}→
          </a>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 border border-gray-800/30">
          <h2 className="text-xl font-semibold mb-4">Ikiru (1952)</h2>
          <div className="text-gray-400 text-sm mb-4 italic">
          {translations.film}
          </div>
          <div className="text-gray-400 text-sm mb-4 italic">
          "I will find a way to leave something behind... I don't want to just be a slob—letting life pass me by."
          </div>
          <p className="text-gray-300 mb-4">
           {translations.ikiru}
          </p>
          <a 
            href="https://www.imdb.com/title/tt0044741/" 
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

export default Page4; 