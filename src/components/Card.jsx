import React from 'react';

const Card = ({ title, link, excerpt, explanation }) => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 mb-6 border border-gray-800 hover:border-gray-700 transition-colors">
      <h2 className="text-xl font-semibold mb-3">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-200 hover:text-white transition-colors"
        >
          {title}
        </a>
      </h2>
      <div className="text-gray-400 text-sm mb-4 italic">
        {excerpt}
      </div>
      <p className="text-gray-300">
        {explanation}
      </p>
    </div>
  );
};

export default Card; 