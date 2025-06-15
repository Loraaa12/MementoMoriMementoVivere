import React from 'react';
import PageTemplate from './PageTemplate';
import { useTranslation } from '../context/TranslationContext';

const Page1 = () => {
    const { translations } = useTranslation();

  return (
    <PageTemplate title={translations.theHerosDeath}>
      {/* Concept Explanation Container */}
      <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-gray-800/30 mb-12">
        <h2 className="text-2xl font-semibold mb-4">{translations.concept}</h2>
        <p className="text-gray-300 leading-relaxed">
          {translations.theHeroConcept}
        </p>
      </div>

      {/* Works Grid */}
      <div className="grid grid-cols-3 gap-8">
        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-gray-800/30">
          <h2 className="text-xl font-semibold mb-4">{translations.levskiLettersTitle}</h2>
          <div className="text-gray-400 text-sm mb-4 italic">
            {translations.historical}
          </div>
          <div className="text-gray-400 text-sm mb-4 italic">
            "По-добре честна смърт, нежели [отколкото] смърт безчестна." (...) [А не] както [казват] някои си: 
            "Ами ако умра?" То ние му казваме, че неговото име остава навеки живо, заслугата му ще е
            предава на деца, унуци и пр. (...) [Тази] смърт заслужава гореречената ни слава от българския
            народ. Следователно нему смърт, смърт и смърт.
          </div>
          <p className="text-gray-300 mb-4">
            {translations.levskiLetters}
          </p>
          <a 
            href="https://www.vasil-levski.org/2-2.htm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {translations.viewSource} →
          </a>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-gray-800/30">
          <h2 className="text-xl font-semibold mb-4">{translations.hadjiDimitarTitle}</h2>
          <div className="text-gray-400 text-sm mb-4 italic">
            {translations.literature}
          </div>
          <div className="text-gray-400 text-sm mb-4 italic">
            "Тоз, който падне в бой за свобода,<br/>
            той не умира: него жалеят<br/>
            земя и небо, звяр и природа<br/>
            и певци песни за него пеят..."
          </div>
          <p className="text-gray-300 mb-4">
            {translations.hadjiDimitar}
          </p>
          <a 
            href="https://www.litclub.com/library/bg/botev/poezia/hd.htm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {translations.viewSource} →
          </a>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-gray-800/30">
          <h2 className="text-xl font-semibold mb-4">{translations.iliadTitle}</h2>
          <div className="text-gray-400 text-sm mb-4 italic">
            {translations.literature}
          </div>
          <div className="text-gray-400 text-sm mb-4 italic">
            "Achilles made signs… that no man was to aim a dart at Hector, lest another might win the glory… Then, at last… he came in running."
          </div>
          <p className="text-gray-300 mb-4">
            {translations.iliad}
          </p>
          <a 
            href="https://www.arthistoryproject.com/timeline/the-ancient-world/greece/the-iliad/book-22/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {translations.viewSource} →
          </a>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-gray-800/30">
          <h2 className="text-xl font-semibold mb-4">{translations.threeHundredTitle}</h2>
          <div className="text-gray-400 text-sm mb-4 italic">
            {translations.film}
          </div>
          <div className="text-gray-400 text-sm mb-4 italic">
            "The world will know free men stood against a tyrant. That few stood against many…"
          </div>
          <p className="text-gray-300 mb-4">
            {translations.threeHundred}
          </p>
          <a 
            href="https://www.netflix.com/bg/title/70056440" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {translations.viewSource} →
          </a>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-gray-800/30">
          <h2 className="text-xl font-semibold mb-4">{translations.theHeroTitle}</h2>
          <div className="text-gray-400 text-sm mb-4 italic">
            {translations.literature}
          </div>
          <div className="text-gray-400 text-sm mb-4 italic">
            "'Jack fell as he'd have wished,' the Mother said… 'We mothers are so proud of our dead soldiers.'"
          </div>
          <p className="text-gray-300 mb-4">
            {translations.theHero}
          </p>
          <a 
            href="https://poets.org/poem/hero" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {translations.viewSource} →
          </a>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-gray-800/30">
          <h2 className="text-xl font-semibold mb-4">{translations.lesMiserablesTitle}</h2>
          <div className="text-gray-400 text-sm mb-4 italic">
            {translations.literature}
          </div>
          <div className="text-gray-400 text-sm mb-4 italic">
            "He emptied his cartridge‑box and fell back, a bullet through his heart… Beneath this veil of smoke, a second bullet struck him… He began to sing… He did not finish…"
          </div>
          <p className="text-gray-300 mb-4">
            {translations.lesMiserables}
          </p>
          <a 
            href="https://www.gutenberg.org/files/135/135-h/135-h.htm" 
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

export default Page1; 