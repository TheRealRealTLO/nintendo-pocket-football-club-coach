
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-npfc-green-dark border-b-4 border-black p-4 mb-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="relative">
          <div className="flex items-center justify-center">
            {/* Soccer ball icon on the left - improved pixel art version */}
            <div className="w-12 h-12 bg-white rounded-none border-2 border-black flex items-center justify-center mr-2">
              {/* Pixel Art Soccer Ball */}
              <div className="w-10 h-10 relative">
                <div className="absolute top-0 left-1/2 w-4 h-1 bg-black transform -translate-x-1/2"></div>
                <div className="absolute top-1 left-1/2 w-6 h-1 bg-black transform -translate-x-1/2"></div>
                
                {/* Top left pentagon */}
                <div className="absolute top-2 left-0 w-4 h-3 bg-white border-r border-black"></div>
                <div className="absolute top-5 left-0 w-1 h-1 bg-black"></div>
                
                {/* Top right pentagon */}
                <div className="absolute top-2 right-0 w-4 h-3 bg-white border-l border-black"></div>
                <div className="absolute top-5 right-0 w-1 h-1 bg-black"></div>
                
                {/* Middle hexagon */}
                <div className="absolute top-3 left-1/2 w-4 h-4 bg-gray-800 transform -translate-x-1/2"></div>
                
                {/* Bottom left pentagon */}
                <div className="absolute bottom-0 left-1 w-3 h-3 bg-white border-t border-r border-black"></div>
                
                {/* Bottom right pentagon */}
                <div className="absolute bottom-0 right-1 w-3 h-3 bg-white border-t border-l border-black"></div>
                
                {/* Bottom middle connector */}
                <div className="absolute bottom-1 left-1/2 w-2 h-2 bg-gray-800 transform -translate-x-1/2"></div>
                
                {/* Border outline */}
                <div className="absolute top-0 left-0 w-1 h-1 bg-black"></div>
                <div className="absolute top-0 right-0 w-1 h-1 bg-black"></div>
                <div className="absolute bottom-0 left-0 w-1 h-1 bg-black"></div>
                <div className="absolute bottom-0 right-0 w-1 h-1 bg-black"></div>
                <div className="absolute top-1 left-1 w-1 h-1 bg-black"></div>
                <div className="absolute top-1 right-1 w-1 h-1 bg-black"></div>
                <div className="absolute bottom-1 left-1 w-1 h-1 bg-black"></div>
                <div className="absolute bottom-1 right-1 w-1 h-1 bg-black"></div>
              </div>
            </div>

            {/* Main title with yellow background */}
            <div className="relative">
              <h1 className="font-pixel text-2xl bg-yellow-400 text-black px-4 py-1 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,0.8)]">
                NINTENDO
              </h1>
            </div>

            {/* Soccer ball icon on the right - improved pixel art version */}
            <div className="w-12 h-12 bg-white rounded-none border-2 border-black flex items-center justify-center ml-2">
              {/* Pixel Art Soccer Ball */}
              <div className="w-10 h-10 relative">
                <div className="absolute top-0 left-1/2 w-4 h-1 bg-black transform -translate-x-1/2"></div>
                <div className="absolute top-1 left-1/2 w-6 h-1 bg-black transform -translate-x-1/2"></div>
                
                {/* Top left pentagon */}
                <div className="absolute top-2 left-0 w-4 h-3 bg-white border-r border-black"></div>
                <div className="absolute top-5 left-0 w-1 h-1 bg-black"></div>
                
                {/* Top right pentagon */}
                <div className="absolute top-2 right-0 w-4 h-3 bg-white border-l border-black"></div>
                <div className="absolute top-5 right-0 w-1 h-1 bg-black"></div>
                
                {/* Middle hexagon */}
                <div className="absolute top-3 left-1/2 w-4 h-4 bg-gray-800 transform -translate-x-1/2"></div>
                
                {/* Bottom left pentagon */}
                <div className="absolute bottom-0 left-1 w-3 h-3 bg-white border-t border-r border-black"></div>
                
                {/* Bottom right pentagon */}
                <div className="absolute bottom-0 right-1 w-3 h-3 bg-white border-t border-l border-black"></div>
                
                {/* Bottom middle connector */}
                <div className="absolute bottom-1 left-1/2 w-2 h-2 bg-gray-800 transform -translate-x-1/2"></div>
                
                {/* Border outline */}
                <div className="absolute top-0 left-0 w-1 h-1 bg-black"></div>
                <div className="absolute top-0 right-0 w-1 h-1 bg-black"></div>
                <div className="absolute bottom-0 left-0 w-1 h-1 bg-black"></div>
                <div className="absolute bottom-0 right-0 w-1 h-1 bg-black"></div>
                <div className="absolute top-1 left-1 w-1 h-1 bg-black"></div>
                <div className="absolute top-1 right-1 w-1 h-1 bg-black"></div>
                <div className="absolute bottom-1 left-1 w-1 h-1 bg-black"></div>
                <div className="absolute bottom-1 right-1 w-1 h-1 bg-black"></div>
              </div>
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
