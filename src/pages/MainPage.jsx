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
    <div className="absolute" style={{ left: x, top: y }}>
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
    className="absolute flex flex-col items-center p-4 group"
    style={position}
  >
    <div className="h-48 w-auto transform transition-transform duration-300 group-hover:scale-110">
      <img 
        src={icon}
        alt={label}
        className="h-full w-auto object-contain"
        style={{ 
          filter: invert ? 'invert(1) brightness(0.8)' : 'none'
        }}
      />
    </div>
    <span className="mt-3 text-gray-400 text-center max-w-[180px] text-base group-hover:text-gray-300 transition-colors duration-300">{label}</span>
  </Link>
);

const MainPage = () => {
  const { translations } = useTranslation();

  return (
    <div className="h-screen bg-black text-white relative overflow-hidden">
      {/* Translation Button */}
      <div className="absolute top-4 right-4 z-20">
        <TranslationButton />
      </div>

      {/* Flickering candles */}
      <Candle x="3%" y="3%" />
      <Candle x="10%" y="5%" />
      <Candle x="90%" y="3%" />
      <Candle x="97%" y="5%" />
      
      {/* Main content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-between py-12 relative z-10">
        {/* Title at the top */}
        <div className="text-center">
          <Link to="/philosophy" className="hover:opacity-80 transition-opacity">
            <h1 className="text-5xl font-bold text-gray-200 mb-3 font-['Playfair_Display'] italic">
              Memento Mori
            </h1>
            <p className="text-gray-400 text-xl">
              {translations.rememberThatYouWillDie}
            </p>
          </Link>
        </div>

        {/* Navigation icons container */}
        <div className="flex-1 relative">
          {/* Scattered navigation icons */}
          <NavigationIcon 
            to="/page1" 
            icon={gloryImage} 
            label={translations.theHerosDeath}
            position={{ top: '10%', left: '5%' }}
            invert={true}
          />
          <NavigationIcon 
            to="/page2" 
            icon={echoImage} 
            label={translations.theEchoOfTheLost}
            position={{ top: '10%', right: '5%' }}
          />
          <NavigationIcon 
            to="/page3" 
            icon={flameImage} 
            label={translations.theWarmFlame}
            position={{ top: '60%', left: '22%' }}
          />
          <NavigationIcon 
            to="/page4" 
            icon={rockImage} 
            label={translations.theDefiance}
            position={{ top: '60%', right: '20%' }}
          />
          <NavigationIcon 
            to="/page5" 
            icon={skullImage} 
            label={translations.theBeautifulCorpse}
            position={{ top: '40%', left: '50%', transform: 'translate(-50%, -50%)' }}

          />
        </div>
        
        {/* Title at the bottom */}
        <div className="text-center">
          <Link to="/philosophy" className="hover:opacity-80 transition-opacity">
            <h1 className="text-5xl font-bold text-gray-200 mb-3 font-['Playfair_Display'] italic">
              Memento Vivere
            </h1>
            <p className="text-gray-400 text-xl">
              {translations.soLive}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage; 