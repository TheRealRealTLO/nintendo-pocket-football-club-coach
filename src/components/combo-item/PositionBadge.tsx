
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface PositionBadgeProps {
  position: string;
}

// Helper function to get position badge color
const getPositionColor = (position: string) => {
  switch(position) {
    case "GK": return "bg-orange-400 text-black";
    case "DF": return "bg-blue-400 text-black";
    case "MF": return "bg-green-400 text-black";
    case "FW": return "bg-red-400 text-black";
    case "ALL": return "bg-purple-400 text-black";
    default: return "bg-gray-400 text-black";
  }
};

const getPositionLabel = (position: string) => {
  if (position === "ALL") return "General";
  return position;
};

const PositionBadge: React.FC<PositionBadgeProps> = ({ position }) => {
  return (
    <Badge className={`${getPositionColor(position)} ml-2 font-bold border-2 border-black`}>
      {getPositionLabel(position)}
    </Badge>
  );
};

export default PositionBadge;
