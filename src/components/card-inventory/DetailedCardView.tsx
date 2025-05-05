
import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { CardType, CardCategory, allCardTypes, cardToCategory } from '@/data/combos';
import { getCategoryIcon } from './CategoryFilter';

interface DetailedCardViewProps {
  activeTab: string;
  cardColors: Record<CardType, string>;
  categoryColors: Record<CardCategory, string>;
  inventory: { [key in CardType]: number };
  handleIncrement: (type: CardType) => void;
  handleDecrement: (type: CardType) => void;
  allCategories: CardCategory[];
}

const DetailedCardView: React.FC<DetailedCardViewProps> = ({
  activeTab,
  cardColors,
  categoryColors,
  inventory,
  handleIncrement,
  handleDecrement,
  allCategories
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div 
        className={`${cardColors[activeTab as CardType] || categoryColors[activeTab as CardCategory] || "bg-gray-200"} 
          border-2 border-black p-4 rounded-sm mb-4 w-full max-w-xs relative z-10`}
      >
        <div className="text-center mb-4 flex items-center justify-center gap-2">
          {allCategories.includes(activeTab as CardCategory) ? 
            getCategoryIcon(activeTab as CardCategory) : 
            getCategoryIcon(cardToCategory[activeTab as CardType])}
          <span className="font-pixel text-sm text-black">{activeTab}</span>
        </div>
        
        {allCardTypes.includes(activeTab as CardType) ? (
          <div className="flex items-center justify-center space-x-4">
            <button 
              onClick={() => handleDecrement(activeTab as CardType)} 
              className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center"
              disabled={inventory[activeTab as CardType] <= 0}
            >
              <Minus size={24} className="text-black" />
            </button>
            <span className="font-pixel text-2xl w-16 text-center text-black">
              {inventory[activeTab as CardType]}
            </span>
            <button 
              onClick={() => handleIncrement(activeTab as CardType)} 
              className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center"
            >
              <Plus size={24} className="text-black" />
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {allCardTypes
              .filter(type => cardToCategory[type] === activeTab)
              .map(type => (
                <div key={type} className="flex items-center justify-between">
                  <span className="font-pixel text-xs text-black">{type}</span>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => handleDecrement(type)} 
                      className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center"
                      disabled={inventory[type] <= 0}
                    >
                      <Minus size={16} className="text-black" />
                    </button>
                    <span className="font-pixel text-sm w-6 text-center text-black">
                      {inventory[type]}
                    </span>
                    <button 
                      onClick={() => handleIncrement(type)} 
                      className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center"
                    >
                      <Plus size={16} className="text-black" />
                    </button>
                  </div>
                </div>
              ))
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailedCardView;
