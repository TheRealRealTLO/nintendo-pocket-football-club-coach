
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { StatType, statColors } from '../../data/combos';
import { tokens } from '@/styles/tokens';

interface StatBadgeProps {
  stat: StatType;
  value: number;
}

const StatBadge: React.FC<StatBadgeProps> = ({ stat, value }) => {
  return (
    <Badge 
      className={`${statColors[stat]} ${tokens.badge.card} text-black ${value < 0 ? 'ring-2 ring-red-500' : ''}`}
    >
      {stat} {value > 0 ? `+${value}` : value}
    </Badge>
  );
};

export default StatBadge;
