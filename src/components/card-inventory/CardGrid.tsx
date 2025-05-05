
import React from 'react';
import { CardType } from '@/data/combos';
import CardItem from './CardItem';

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
  const cardRows = [];
  for (let i = 0; i < cardTypes.length; i += 5) {
    cardRows.push(cardTypes.slice(i, i + 5));
  }
  
  return (
    <>
      {cardRows.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {row.map((type) => (
            <CardItem
              key={type}
              type={type}
              quantity={inventory[type]}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default CardGrid;
