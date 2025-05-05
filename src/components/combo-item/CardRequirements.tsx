
import React from 'react';
import { CardRequirement } from '../../data/types';
import CardRequirementBadge from './CardRequirementBadge';

interface CardRequirementsProps {
  cards: CardRequirement[];
}

const CardRequirements: React.FC<CardRequirementsProps> = ({ cards }) => {
  return (
    <div className="mb-3">
      <p className="font-pixel text-xs mb-1">Requirements:</p>
      <div className="flex flex-wrap gap-2">
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
