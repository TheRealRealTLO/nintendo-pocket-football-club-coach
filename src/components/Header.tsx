
import React from 'react';
import { Activity } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-npfc-green-dark border-b-4 border-black p-4 mb-8">
      <div className="container mx-auto flex flex-col items-center">
        <Activity className="w-10 h-10 text-black animate-pixel-pulse" />
        <h1 className="font-pixel text-xl text-black mt-2 text-center">
          Pocket Football Combo Coach
        </h1>
        <p className="font-pixel text-xs text-black mt-1 text-center">
          Training Card Calculator
        </p>
      </div>
    </header>
  );
};

export default Header;
