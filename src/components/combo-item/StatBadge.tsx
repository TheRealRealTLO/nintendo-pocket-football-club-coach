
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
      className={`${statColors[stat]} text-black font-semibold ${tokens.badge.card} ${value < 0 ? 'ring-2 ring-red-500' : ''}`}
    >
      {stat} {value > 0 ? `+${value}` : value}
    </Badge>
  );
};

export default StatBadge;
