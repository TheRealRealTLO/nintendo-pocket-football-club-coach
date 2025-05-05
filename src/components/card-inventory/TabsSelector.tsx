
import React from 'react';
import { CardCategory } from '@/data/types';
import { allCategories, categoryColors } from '@/data/combos';
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
      </div>
    </div>
  );
};

export default TabsSelector;
