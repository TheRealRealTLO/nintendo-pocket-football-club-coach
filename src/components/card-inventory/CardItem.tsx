
import React from 'react';
import { CardType } from '@/data/types';
import { Plus, Minus } from 'lucide-react';
import { getCategoryIcon } from './CategoryFilter';
import { cardToCategory, cardColors } from '@/data/combos';

interface CardItemProps {
  type: CardType;
  quantity: number;
  onIncrement: (type: CardType) => void;
  onDecrement: (type: CardType) => void;
}

const CardItem: React.FC<CardItemProps> = ({ type, quantity, onIncrement, onDecrement }) => {
  return (
    <div 
      className={`${cardColors[type]} border-2 border-black p-2 rounded-sm relative`}
    >
      <div className="text-center mb-1 flex items-center justify-center gap-1">
        {getCategoryIcon(cardToCategory[type])}
        <span className="font-pixel text-xs text-black">{type}</span>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <button 
          onClick={() => onDecrement(type)} 
          className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center"
          disabled={quantity <= 0}
        >
          <Minus size={16} className="text-black" />
        </button>
        <span className="font-pixel text-sm w-6 text-center text-black">
          {quantity}
        </span>
        <button 
          onClick={() => onIncrement(type)} 
          className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center"
        >
          <Plus size={16} className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default CardItem;
