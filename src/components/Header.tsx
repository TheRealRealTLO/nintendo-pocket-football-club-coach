
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-npfc-green-dark border-b-4 border-black p-4 mb-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="relative">
          <div className="flex items-center justify-center">
            {/* Main title with yellow background */}
            <div className="relative">
              <h1 className="font-pixel text-2xl bg-yellow-400 text-black px-4 py-1 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,0.8)]">
                NINTENDO
              </h1>
            </div>
          </div>
        </div>
        
        {/* Subtitle with white background */}
        <div className="mt-2">
          <h2 className="font-pixel text-xl bg-white text-black px-6 py-1 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,0.8)]">
            POCKET FOOTBALL CLUB
          </h2>
        </div>
        
        {/* "Coach" text with specific styling */}
        <div className="mt-2">
          <p className="font-pixel text-lg bg-npfc-blue text-white px-8 py-1 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,0.8)]">
            COACH
          </p>
        </div>
        
        <p className="font-pixel text-xs text-black mt-3 text-center">
          Training Card Calculator
        </p>
      </div>
    </header>
  );
};

export default Header;
