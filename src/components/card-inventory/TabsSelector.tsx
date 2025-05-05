
import React from 'react';
import { CardCategory, CardType } from '@/data/types';
import { allCategories, allCardTypes, categoryColors, cardColors } from '@/data/combos';
import { getCategoryIcon } from './CategoryFilter';

interface TabsSelectorProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabsSelector: React.FC<TabsSelectorProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="mb-4 overflow-visible">
      <div className="flex flex-wrap gap-2 bg-transparent justify-center pt-2">
        {allCategories.map(category => (
          <button 
            key={category}
            onClick={() => setActiveTab(category)}
            className={`${categoryColors[category]} flex items-center gap-1 text-black font-pixel text-xs px-3 py-2 rounded-sm ${activeTab === category ? "ring-2 ring-black" : ""}`}
            style={{ minWidth: '90px' }}
          >
            {getCategoryIcon(category)}
            {category}
          </button>
        ))}

        <div className="w-full mt-3"></div> {/* Line break after categories */}

        <div className="flex flex-wrap gap-2 justify-center">
          {allCardTypes.map(cardType => (
            <button 
              key={cardType}
              onClick={() => setActiveTab(cardType)}
              className={`${cardColors[cardType]} text-black font-pixel text-xs px-3 py-2 rounded-sm ${activeTab === cardType ? "ring-2 ring-black" : ""}`}
              style={{ minWidth: '90px' }}
            >
              {cardType}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabsSelector;
