import React from 'react';

const Coin = ({ isFlipping, result }) => {
  return (
    <div className={`coin ${isFlipping ? 'flipping' : ''}`}>
      <div className={`coin-inner ${result}`}>
        <div className="side heads">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#FFA500" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="48" fill="url(#goldGradient)"/>
            <circle cx="50" cy="50" r="45" fill="none" stroke="#000" strokeWidth="1"/>
            <text x="50" y="58" fontSize="24" textAnchor="middle" fill="#000" fontWeight="bold" fontFamily="Arial, sans-serif">H</text>
          </svg>
        </div>
        <div className="side tails">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C0C0C0" />
                <stop offset="100%" stopColor="#A9A9A9" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="48" fill="url(#silverGradient)"/>
            <circle cx="50" cy="50" r="45" fill="none" stroke="#000" strokeWidth="1"/>
            <text x="50" y="58" fontSize="24" textAnchor="middle" fill="#000" fontWeight="bold" fontFamily="Arial, sans-serif">T</text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Coin;