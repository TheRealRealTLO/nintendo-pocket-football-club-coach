
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
  // Make the badge background more intense based on value
  const getIntensity = (value: number): string => {
    const baseColor = statColors[stat];
    if (value >= 3) {
      return baseColor.replace('-300', '-400');
    }
    return baseColor;
  };
  
  return (
    <Badge 
      className={`${getIntensity(value)} flex items-center gap-1 text-[10px] px-1.5 py-0.5 font-bold ${value < 0 ? 'border-2 border-red-500' : ''}`}
    >
      {getStatIcon(stat)} {stat} {value > 0 ? `+${value}` : value}
    </Badge>
  );
};

export default StatBadge;
