
import React from 'react';
import { CardRequirement } from '../../data/types';
import CardRequirementBadge from './CardRequirementBadge';

interface CardRequirementsProps {
  cards: CardRequirement[];
}

const CardRequirements: React.FC<CardRequirementsProps> = ({ cards }) => {
  return (
    <div>
      <p className="font-pixel text-[12px] mb-1 text-left">Requires:</p>
      <div className="flex flex-wrap gap-1">
        {cards.map((card, index) => (
          <CardRequirementBadge 
            key={index} 
            cardType={card.type} 
            quantity={card.quantity} 
          />
        ))}
      </div>
    </div>
  );
};

export default CardRequirements;
