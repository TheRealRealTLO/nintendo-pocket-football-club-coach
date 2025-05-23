
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  
  return (
    <header className="bg-npfc-green-dark border-b-4 border-black p-4 mb-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="relative">
          <div className="flex items-center justify-center">
            {/* Main title with yellow background */}
            <div className="relative">
              <h1 className="font-pixel text-2xl sm:text-2xl bg-yellow-400 text-black px-4 py-1 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,0.8)]">
                NINTENDO
              </h1>
            </div>
          </div>
        </div>
        
        {/* Subtitle with white background - centered */}
        <div className="mt-2 text-center">
          <h2 className={`font-pixel ${isMobile ? 'text-lg' : 'text-xl'} bg-white text-black px-4 py-1 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,0.8)] whitespace-nowrap`}>
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

        {/* Navigation links */}
        <div className="flex space-x-2 mt-3">
          <Link to="/">
            <Button
              variant={location.pathname === '/' ? 'default' : 'outline'}
              className="font-pixel text-xs h-8"
            >
              Cards & Combos
            </Button>
          </Link>
          <Link to="/training-regime">
            <Button
              variant={location.pathname === '/training-regime' ? 'default' : 'outline'}
              className="font-pixel text-xs h-8"
            >
              Training Regime
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
