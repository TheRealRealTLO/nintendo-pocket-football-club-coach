
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { tokens } from '@/styles/tokens';

interface PositionBadgeProps {
  position: string;
}

// Helper function to get position badge color
const getPositionColor = (position: string) => {
  switch(position) {
    case "GK": return "bg-orange-500 text-black";
    case "DF": return "bg-blue-500 text-black";
    case "MF": return "bg-green-500 text-black";
    case "FW": return "bg-red-500 text-black";
    case "ALL": return "bg-purple-500 text-black";
    default: return "bg-gray-400 text-black";
  }
};

const getPositionLabel = (position: string) => {
  if (position === "ALL") return "General";
  return position;
};

const PositionBadge: React.FC<PositionBadgeProps> = ({ position }) => {
  return (
    <Badge className={`${getPositionColor(position)} ml-2 ${tokens.badge.card} ${tokens.fontWeight.bold}`}>
      {getPositionLabel(position)}
    </Badge>
  );
};

export default PositionBadge;
