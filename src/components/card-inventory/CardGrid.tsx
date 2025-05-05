
import React from 'react';
import { CardType } from '@/data/combos';
import CardItem from './CardItem';
import { useIsMobile } from '@/hooks/use-mobile';

interface CardGridProps {
  cardTypes: CardType[];
  inventory: { [key in CardType]: number };
  handleIncrement: (type: CardType) => void;
  handleDecrement: (type: CardType) => void;
}

const CardGrid: React.FC<CardGridProps> = ({ 
  cardTypes, 
  inventory, 
  handleIncrement, 
  handleDecrement 
}) => {
  const isMobile = useIsMobile();
  
  // Adjust grid layout based on screen size
  const cardsPerRow = isMobile ? 2 : 5;
  
  const cardRows = [];
  for (let i = 0; i < cardTypes.length; i += cardsPerRow) {
    cardRows.push(cardTypes.slice(i, i + cardsPerRow));
  }
  
  return (
    <div className="space-y-2">
      {cardRows.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-2 md:grid-cols-5 gap-2 w-full">
          {row.map((type) => (
            <CardItem
              key={type}
              type={type}
              quantity={inventory[type]}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            />
          ))}
          
          {/* Add placeholder cards to ensure consistent grid alignment on mobile */}
          {isMobile && row.length < 2 && Array(2 - row.length).fill(0).map((_, i) => (
            <div key={`placeholder-${i}`} className="invisible" />
          ))}
          
          {!isMobile && row.length < 5 && Array(5 - row.length).fill(0).map((_, i) => (
            <div key={`placeholder-${i}`} className="invisible" />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
