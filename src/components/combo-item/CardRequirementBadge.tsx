
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CardType, cardColors } from '../../data/combos';
import { Shield, Wrench, Dumbbell, Users } from 'lucide-react';
import { cardToCategory } from '@/data/combos';
import { tokens } from '@/styles/tokens';

interface CardRequirementBadgeProps {
  cardType: CardType;
  quantity: number;
}

const CardRequirementBadge: React.FC<CardRequirementBadgeProps> = ({ cardType, quantity }) => {
  // Get icon component based on card type
  const getCardIcon = (type: CardType) => {
    const category = cardToCategory[type];
    switch (category) {
      case "Tactical": return <Shield size={12} className="text-black" />;
      case "Technical": return <Wrench size={12} className="text-black" />;
      case "Physical": return <Dumbbell size={12} className="text-black" />;
      case "Support": return <Users size={12} className="text-black" />;
      default: return null;
    }
  };

  return (
    <Badge className={`${cardColors[cardType]} text-black flex items-center gap-1 ${tokens.badge.card}`}>
      {getCardIcon(cardType)}
      {cardType} x{quantity}
    </Badge>
  );
};

export default CardRequirementBadge;
