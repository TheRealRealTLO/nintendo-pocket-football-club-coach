
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CardType, cardColors, cardToCategory } from '../../data/combos';
import { Star, Wrench, Activity, Users } from 'lucide-react';

interface CardRequirementBadgeProps {
  cardType: CardType;
  quantity: number;
}

const CardRequirementBadge: React.FC<CardRequirementBadgeProps> = ({ cardType, quantity }) => {
  // Get icon component based on card type
  const getCardIcon = (type: CardType) => {
    const category = cardToCategory[type];
    switch (category) {
      case "Tactical": return <Star size={14} className="text-black" />;
      case "Technical": return <Wrench size={14} className="text-black" />;
      case "Physical": return <Activity size={14} className="text-black" />;
      case "Support": return <Users size={14} className="text-black" />;
      default: return null;
    }
  };

  return (
    <Badge className={`${cardColors[cardType]} text-black flex items-center gap-1`}>
      {getCardIcon(cardType)}
      {cardType} x{quantity}
    </Badge>
  );
};

export default CardRequirementBadge;
