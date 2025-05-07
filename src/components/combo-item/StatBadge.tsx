
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { StatType, statColors } from '../../data/combos';

interface StatBadgeProps {
  stat: StatType;
  value: number;
}

const StatBadge: React.FC<StatBadgeProps> = ({ stat, value }) => {
  return (
    <Badge 
      className={`${statColors[stat]} text-[12px] px-1.5 py-0.5 font-bold text-black ${value < 0 ? 'ring-2 ring-red-500' : ''}`}
    >
      {stat} {value > 0 ? `+${value}` : value}
    </Badge>
  );
};

export default StatBadge;
