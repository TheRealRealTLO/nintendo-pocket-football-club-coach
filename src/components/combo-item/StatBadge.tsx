
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { StatType, statColors } from '../../data/combos';

interface StatBadgeProps {
  stat: StatType;
  value: number;
}

// Helper function to get stat icon
const getStatIcon = (stat: StatType) => {
  switch(stat) {
    case "Kicking": return "🦵";
    case "Speed": return "⚡";
    case "Stamina": return "🔋";
    case "Technique": return "✨";
    case "Toughness": return "💪";
    case "Jumping": return "🦘";
    case "Willpower": return "🧠";
    default: return "";
  }
};

const StatBadge: React.FC<StatBadgeProps> = ({ stat, value }) => {
  return (
    <Badge 
      className={`${statColors[stat]} flex items-center gap-1 ${value < 0 ? 'border-2 border-red-500' : ''}`}
    >
      {getStatIcon(stat)} {stat} {value > 0 ? `+${value}` : value}
    </Badge>
  );
};

export default StatBadge;
