import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../context/TranslationContext';
import skullImage from '../assets/images/skullRose.jpg';
import rockImage from '../assets/images/rock.jpg';
import gloryImage from '../assets/images/the glory.jpg';
import echoImage from '../assets/images/echo.jpg';
import flameImage from '../assets/images/candle.jpg';
import TranslationButton from '../components/TranslationButton';

const Candle = ({ x, y }) => {
  const [flicker, setFlicker] = useState(1);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setFlicker(0.7 + Math.random() * 0.6);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute hidden sm:block" style={{ left: x, top: y }}>
      <div className="relative">
        {/* Candle flame */}
        <div 
          className="w-4 h-8 bg-yellow-400 rounded-full"
          style={{
            opacity: flicker,
            boxShadow: `0 0 ${flicker * 20}px ${flicker * 10}px rgba(255, 200, 0, 0.5)`,
            transform: `scale(${flicker})`,
            transition: 'all 0.1s ease-in-out'
          }}
        />
        {/* Candle body */}
        <div className="w-6 h-16 bg-gray-200 rounded-b-lg mt-2" />
      </div>
    </div>
  );
};

const NavigationIcon = ({ to, icon, label, position, invert = false }) => (
  <Link 
    to={to}
    className="absolute flex flex-col items-center p-2 sm:p-4 group"
    style={position}
  >
    <div className="h-20 sm:h-32 md:h-48 w-auto transform transition-transform duration-300 group-hover:scale-110">
      <img 
        src={icon}
        alt={label}
        className="h-full w-auto object-contain"
        style={{ 
          filter: invert ? 'invert(1) brightness(0.8)' : 'none'
        }}
      />
    </div>
    <span className="mt-2 sm:mt-3 text-gray-400 text-center max-w-[120px] sm:max-w-[180px] text-sm sm:text-base group-hover:text-gray-300 transition-colors duration-300">{label}</span>
  </Link>
);

const MainPage = () => {
  const { translations } = useTranslation();

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Translation Button */}
      <div className="absolute top-4 right-4 z-20">
        <TranslationButton />
      </div>

      {/* Flickering candles - only show on desktop */}
      <Candle x="3%" y="3%" />
      <Candle x="10%" y="5%" />
      <Candle x="90%" y="3%" />
      <Candle x="97%" y="5%" />
      
      {/* Main content */}
      <div className="container mx-auto px-4 min-h-screen flex flex-col justify-between py-6 sm:py-12 relative z-10">
        {/* Title at the top */}
        <div className="text-center">
          <Link to="/philosophy" className="hover:opacity-80 transition-opacity">
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-200 mb-2 sm:mb-3 font-['Playfair_Display'] italic">
              Memento Mori
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl">
              {translations.rememberThatYouWillDie}
            </p>
          </Link>
        </div>

        {/* Navigation icons container */}
        <div className="flex-1 relative">
          {/* Mobile layout */}
          <div className="sm:hidden flex flex-col items-center space-y-8 mt-8">
            <NavigationIcon 
              to="/page1" 
              icon={gloryImage} 
              label={translations.theHerosDeath}
              position={{ position: 'relative', top: 'auto', left: 'auto' }}
              invert={true}
            />
            <NavigationIcon 
              to="/page2" 
              icon={echoImage} 
              label={translations.theEchoOfTheLost}
              position={{ position: 'relative', top: 'auto', right: 'auto' }}
            />
            <NavigationIcon 
              to="/page3" 
              icon={flameImage} 
              label={translations.theWarmFlame}
              position={{ position: 'relative', top: 'auto', left: 'auto' }}
            />
            <NavigationIcon 
              to="/page4" 
              icon={rockImage} 
              label={translations.theDefiance}
              position={{ position: 'relative', top: 'auto', right: 'auto' }}
            />
            <NavigationIcon 
              to="/page5" 
              icon={skullImage} 
              label={translations.theBeautifulCorpse}
              position={{ position: 'relative', top: 'auto', left: 'auto' }}
            />
          </div>

          {/* Desktop layout */}
          <div className="hidden sm:block">
            <NavigationIcon 
              to="/page1" 
              icon={gloryImage} 
              label={translations.theHerosDeath}
              position={{ top: '5%', left: '10%' }}
              invert={true}
            />
            <NavigationIcon 
              to="/page2" 
              icon={echoImage} 
              label={translations.theEchoOfTheLost}
              position={{ top: '5%', right: '10%' }}
            />
            <NavigationIcon 
              to="/page3" 
              icon={flameImage} 
              label={translations.theWarmFlame}
              position={{ top: '65%', left: '10%' }}
            />
            <NavigationIcon 
              to="/page4" 
              icon={rockImage} 
              label={translations.theDefiance}
              position={{ top: '65%', right: '10%' }}
            />
            <NavigationIcon 
              to="/page5" 
              icon={skullImage} 
              label={translations.theBeautifulCorpse}
              position={{ top: '35%', left: '50%', transform: 'translate(-50%, -50%)' }}
            />
          </div>
        </div>
        
        {/* Title at the bottom */}
        <div className="text-center">
          <Link to="/philosophy" className="hover:opacity-80 transition-opacity">
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-200 mb-2 sm:mb-3 font-['Playfair_Display'] italic">
              Memento Vivere
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl">
              {translations.soLive}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage; 