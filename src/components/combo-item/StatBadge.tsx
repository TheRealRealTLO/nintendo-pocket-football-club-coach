
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
  // Make the badge background lighter for better readability with dark text
  const getIntensity = (value: number): string => {
    const baseColor = statColors[stat];
    // Use a lighter version of the color
    return baseColor.replace('-300', '-200');
  };
  
  return (
    <Badge 
      className={`${getIntensity(value)} flex items-center gap-1 text-[12px] px-1.5 py-0.5 font-bold ${value < 0 ? 'ring-2 ring-red-500' : ''}`}
    >
      {getStatIcon(stat)} {stat} {value > 0 ? `+${value}` : value}
    </Badge>
  );
};

export default StatBadge;
